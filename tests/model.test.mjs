import test from 'node:test';
import assert from 'node:assert/strict';
import { cuisines, dishes, restaurants } from '../public/data.js';
import { emptyLibrary, normalizeLibrary, filterDishes, parseIngredientTerms, toggleFavorite, formatAmount, recipeVersions, coverRecipe, saveRecipeVersion, removeRecipeVersion, compareRecipeSteps, mergeRecipeLibrary } from '../public/model.js';

test('each of the eight traditional cuisines has complete recipes and matching restaurants', () => {
  assert.equal(cuisines.filter(c => c.traditional).length, 8);
  assert.equal(cuisines.length, 18);
  assert.equal(new Set(dishes.map(d => d.id)).size, dishes.length);
  for (const c of cuisines.filter(c => c.traditional)) assert.equal(dishes.filter(d => d.cuisine === c.id && !d.catalogOnly).length, 2);
  for (const d of dishes.filter(d=>!d.catalogOnly)) {
    assert.ok(d.ingredients.length >= 5 && d.steps.length >= 4);
    assert.ok(d.minutes > 0 && d.servings > 0);
    assert.ok(d.ingredients.every(([quantity, unit, name]) => quantity > 0 && typeof unit === 'string' && name));
    for (const id of d.restaurants) assert.equal(restaurants.find(r => r.id === id)?.cuisine, d.cuisine);
  }
});
test('Chinese search, combined filters and favorites are applied together', () => {
  assert.equal(filterDishes(dishes, { query: '川菜' }).length, 2);
  assert.deepEqual(filterDishes(dishes, { query: 'Mapo Tofu' }).map(d => d.id), ['mapo-tofu']);
  assert.deepEqual(filterDishes(dishes, { query: '麻婆' }).map(d => d.id), ['mapo-tofu']);
  assert.deepEqual(filterDishes(dishes, { cuisine: 'sichuan', maxTime: 25, difficulty: 'Easy', flavor: '麻辣' }).map(d => d.id), ['mapo-tofu']);
  assert.equal(filterDishes(dishes, { cuisine: 'sichuan', flavor: '清淡' }).length, 0);
  assert.equal(filterDishes(dishes, { ids: [] }).length, 0);
  assert.deepEqual(filterDishes(dishes, { ids: ['mapo-tofu', 'char-siu'], maxTime: 30 }).map(d => d.id), ['mapo-tofu']);
  const sorted = filterDishes(dishes, { sort: 'quickest' });
  assert.ok(sorted.every((d, i) => !i || (d.minutes ?? Infinity) >= (sorted[i - 1].minutes ?? Infinity)));
  assert.equal(dishes[0].id, 'mapo-tofu');
});
test('flavor and typed multiple ingredient filters combine with all other criteria', () => {
  assert.ok(dishes.filter(d=>!d.catalogOnly).every(d => Array.isArray(d.flavors) && d.flavors.length));
  assert.deepEqual(filterDishes(dishes, { flavor: '酸甜' }).map(d => d.id), ['kung-pao', 'sweet-sour-fish', 'lychee-pork']);
  assert.deepEqual(filterDishes(dishes, { ingredients: ['豆腐', '香菇'] }).map(d => d.id), ['huizhou-tofu']);
  assert.deepEqual(filterDishes(dishes, { ingredients: ' 豆腐，香菇、豆腐 ' }).map(d => d.id), ['huizhou-tofu']);
  assert.deepEqual(filterDishes(dishes, { flavor: '咸鲜', ingredients: ['豆腐', '牛肉'], maxTime: 30, difficulty: 'Easy', ids: ['mapo-tofu'] }).map(d => d.id), ['mapo-tofu']);
  assert.equal(filterDishes(dishes, { ingredients: ['不存在的食材'] }).length, 0);
  assert.equal(filterDishes(dishes, { ingredients: ['豆腐', '香菇'], maxTime: 30 }).length, 0);
  assert.equal(filterDishes(dishes, { ingredients: ['豆腐', '香菇'], flavor: '酸甜' }).length, 0);
  assert.equal(filterDishes(dishes, { ingredients: ['豆腐'], ids: [] }).length, 0);
  assert.equal(filterDishes(dishes, { ingredients: ['切块'] }).length, 0);
  assert.equal(filterDishes(dishes, { ingredients: [' ', ''] }).length, dishes.length);
  assert.deepEqual(parseIngredientTerms([' 豆腐，香菇;牛肉 ', '豆腐', null, 'TOFU', 'tofu']), ['豆腐', '香菇', '牛肉', 'TOFU']);
});
test('personal home-style categories survive backup normalization without changing recipe ids', () => {
  const ids = dishes.map(d => d.id);
  const library = normalizeLibrary({ favorites: ['mapo-tofu'], categories: { 'mapo-tofu': 'home-style', 'char-siu': 'invalid', unknown: 'home-style' } }, ids);
  assert.deepEqual(library.categories, { 'mapo-tofu': 'home-style' });
  assert.deepEqual(library.favorites, ['mapo-tofu']);
  const personal = dishes.map(d => ({ ...d, cuisine: library.categories[d.id] || d.cuisine }));
  assert.deepEqual(filterDishes(personal, { cuisine: 'home-style' }).map(d => d.id), ['mapo-tofu']);
  assert.equal(cuisines.find(c => c.id === 'home-style').traditional, false);
  assert.deepEqual(normalizeLibrary({ favorites: ['mapo-tofu'] }, ids).categories, {});
});
test('removing a favorite clears memberships and preserves personal notes', () => {
  const library = emptyLibrary();
  assert.equal(toggleFavorite(library, 'mapo-tofu'), true);
  library.collections.push({ id: 'weeknight', name: 'Weeknight', dishes: ['mapo-tofu'] });
  library.notes['mapo-tofu'] = 'Less chili';
  assert.equal(toggleFavorite(library, 'mapo-tofu'), false);
  assert.deepEqual(library.favorites, []);
  assert.deepEqual(library.collections[0].dishes, []);
  assert.equal(library.notes['mapo-tofu'], 'Less chili');
});
test('corrupt and imported storage is normalized without invalid memberships', () => {
  const ids = dishes.map(d => d.id);
  for (const input of [null, 1, 'bad', []]) assert.deepEqual(normalizeLibrary(input, ids), emptyLibrary());
  const actual = normalizeLibrary({ favorites: ['mapo-tofu', 'mapo-tofu', 'unknown'], collections: [{ id: 'one', name: '  Weeknight  ', dishes: ['mapo-tofu', 'char-siu', 'unknown'] }, { id: 'one', name: 'Duplicate' }, { id: '<unsafe>', name: 'Unsafe' }], notes: { 'mapo-tofu': 'x'.repeat(6000), unknown: 'discard' } }, ids);
  assert.deepEqual(actual.favorites, ['mapo-tofu']);
  assert.deepEqual(actual.collections, [{ id: 'one', name: 'Weeknight', dishes: ['mapo-tofu'] }]);
  assert.equal(actual.notes['mapo-tofu'].length, 5000);
  assert.equal(actual.notes.unknown, undefined);
});
test('serving conversion supports fractions and scaled quantities', () => {
  assert.equal(formatAmount(400, 3, 2), '600');
  assert.equal(formatAmount(1.5, 3, 2), '2 ¼');
  assert.equal(formatAmount(0.5, 1, 2), '¼');
  assert.equal(formatAmount(2, 3, 4), '1 ½');
});
test('recipe variants preserve the standard, validate names, and select a durable cover', () => {
  const library = emptyLibrary(), dish = dishes[0];
  const original = [...dish.steps];
  const first = { id: 'mild', name: '少辣版', steps: ['换成少量豆瓣酱。', ...dish.steps.slice(1)] };
  assert.equal(saveRecipeVersion(library, dish, first), null);
  assert.equal(coverRecipe(library, dish).id, 'standard');
  library.coverRecipes[dish.id] = first.id;
  assert.equal(coverRecipe(library, dish).name, '少辣版');
  assert.equal(saveRecipeVersion(library, dish, { id: 'second', name: '少辣版', steps: original }), '已存在同名做法，请换个名称。');
  assert.ok(saveRecipeVersion(library, dish, { id: 'bad', name: '空步骤', steps: ['  '] }));
  assert.ok(saveRecipeVersion(library, dish, { id: 'standard', name: '覆盖标准', steps: original }));
  assert.equal(saveRecipeVersion(library, dish, { ...first, name: '少油少辣版' }), null);
  assert.equal(recipeVersions(library, dish).length, 2);
  const restored = normalizeLibrary(JSON.parse(JSON.stringify(library)), dishes.map(d => d.id));
  assert.equal(coverRecipe(restored, dish).name, '少油少辣版');
  assert.equal(removeRecipeVersion(restored, dish, 'standard'), false);
  assert.equal(removeRecipeVersion(restored, dish, first.id), true);
  assert.equal(coverRecipe(restored, dish).id, 'standard');
  assert.deepEqual(dish.steps, original);
});
test('step comparison distinguishes modifications, insertions and removals without cascading differences', () => {
  const original = ['切菜', '热锅', '炒熟', '装盘'];
  assert.deepEqual(compareRecipeSteps(original, ['切菜', '备酱汁', '热锅', '炒熟', '装盘']).map(r => r.type), ['same', 'added', 'same', 'same', 'same']);
  const rows = compareRecipeSteps(original, ['切菜', '小火热锅', '装盘']);
  assert.deepEqual(rows.map(r => r.type), ['same', 'changed', 'removed', 'same']);
  assert.equal(rows[1].original, '热锅');
  assert.equal(rows[2].original, '炒熟');
  assert.equal(compareRecipeSteps(original, [' 切菜 ', ...original.slice(1)]).filter(r => r.type !== 'same').length, 0);
  assert.deepEqual(compareRecipeSteps(['煮', '煮', '盛出'], ['煮', '盛出']).map(r => r.type), ['same', 'removed', 'same']);
});
test('legacy step edits migrate; malformed variants and stale covers are rejected', () => {
  const ids = dishes.map(d => d.id), dish = dishes[0];
  const old = normalizeLibrary({ favorites: [dish.id], recipeEdits: { [dish.id]: { 0: '个人改法', 1: ' ', 99: '越界' } } }, ids);
  assert.equal(coverRecipe(old, dish).steps[0], '个人改法');
  assert.equal(coverRecipe(old, dish).steps[1], dish.steps[1]);
  const bad = normalizeLibrary({ recipeVersions: { [dish.id]: [{ id: 'standard', name: '替代', steps: ['错'] }, { id: 'v1', name: '有效', steps: ['做法'] }, { id: 'v1', name: '重复', steps: ['重复'] }, { id: 'long', name: '过长', steps: ['字'.repeat(2001)] }], unknown: [{ id: 'v', name: '错', steps: ['错'] }] }, coverRecipes: { [dish.id]: 'missing' } }, ids);
  assert.equal(bad.recipeVersions[dish.id].length, 1);
  assert.equal(coverRecipe(bad, dish).id, 'standard');
  assert.equal(bad.recipeVersions.unknown, undefined);
});
test('backup merging preserves existing recipe edits and covers while adding new variants', () => {
  const library = emptyLibrary(), dish = dishes[0], incoming = emptyLibrary();
  saveRecipeVersion(library, dish, { id: 'one', name: '现有做法', steps: ['本地修改'] });
  library.coverRecipes[dish.id] = 'standard';
  saveRecipeVersion(incoming, dish, { id: 'one', name: '旧备份', steps: ['旧内容'] });
  saveRecipeVersion(incoming, dish, { id: 'two', name: '新做法', steps: ['新内容'] });
  incoming.coverRecipes[dish.id] = 'two';
  mergeRecipeLibrary(library, incoming);
  assert.equal(library.recipeVersions[dish.id][0].steps[0], '本地修改');
  assert.equal(recipeVersions(library, dish).length, 3);
  assert.equal(coverRecipe(library, dish).id, 'standard');
});
