import test from 'node:test';
import assert from 'node:assert/strict';
import { dishes, cuisines } from '../public/data.js';
import { bookCatalog } from '../public/catalog.js';
import { emptyLibrary, filterDishes, recipeVersions, coverRecipe, saveRecipeVersion, normalizeLibrary } from '../public/model.js';
test('catalog entries carry traceable names without fabricated methods or metadata',()=>{
 const added=dishes.filter(d=>d.catalogOnly);
 assert.equal(added.length,330);
 assert.equal(bookCatalog.importedNameCount,331);
 assert.equal(bookCatalog.complete,false);
 assert.equal(bookCatalog.volumes.length,18);
 assert.equal(bookCatalog.volumes.reduce((n,v)=>n+v.importedCount,0),331);
 assert.equal(new Set(dishes.map(d=>d.id)).size,dishes.length);
 assert.equal(new Set(dishes.map(d=>d.cuisine+':'+d.name)).size,dishes.length);
 for(const d of added){
   assert.ok(d.sources.length);assert.ok(cuisines.some(c=>c.id===d.cuisine));
   assert.deepEqual(d.steps,[]);assert.deepEqual(d.ingredients,[]);assert.deepEqual(d.restaurants,[]);
   assert.equal(d.minutes,null);assert.equal(d.heat,null);assert.equal(d.difficulty,null);
   assert.ok(d.sources.every(s=>s.url.startsWith('https://')&&s.isbn&&s.recipeVerified===false));
 }
 assert.equal(dishes.find(d=>d.id==='dongpo-pork').sources[0].volumeId,'zhejiang');
 assert.ok(dishes.find(d=>d.name==='白字焖肉').sources[0].nameNeedsReview);
});
test('unknown timings never pass time filters and sort behind known times',()=>{
 assert.ok(filterDishes(dishes,{maxTime:30}).every(d=>!d.catalogOnly));
 assert.ok(filterDishes(dishes,{difficulty:'Easy'}).every(d=>!d.catalogOnly));
 assert.equal(filterDishes(dishes,{sort:'quickest'})[0].id,'yangzhou-rice');
 assert.ok(filterDishes(dishes,{sort:'quickest'}).at(-1).catalogOnly);
 assert.equal(filterDishes(dishes,{cuisine:'beijing'}).length,12);
 assert.equal(filterDishes(dishes,{cuisine:'henan'}).length,15);
});
test('name-only dishes support favorites, personal recipes, covers and backups without a fake reference',()=>{
 const dish=dishes.find(d=>d.catalogOnly),library=emptyLibrary();
 assert.deepEqual(recipeVersions(library,dish),[]);
 assert.equal(coverRecipe(library,dish).name,'做法待补充');
 library.favorites.push(dish.id);
 assert.equal(saveRecipeVersion(library,dish,{id:'personal',name:'我的做法',steps:['准备食材。']}),null);
 library.coverRecipes[dish.id]='personal';
 const restored=normalizeLibrary(JSON.parse(JSON.stringify(library)),dishes.map(d=>d.id));
 assert.deepEqual(restored.favorites,[dish.id]);
 assert.equal(coverRecipe(restored,dish).id,'personal');
 assert.equal(recipeVersions(restored,dish).length,1);
});
