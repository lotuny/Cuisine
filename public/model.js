import { cuisines, dishes as standardDishes } from './data.js';
export const STORAGE_KEY = 'wei-kitchen-v1';
export function emptyLibrary() { return { favorites: [], collections: [], notes: {}, categories: {}, recipeVersions: {}, coverRecipes: {} }; }
export function normalizeStepEdits(standardSteps, value) {
  const edits = {};
  if (!value || typeof value !== 'object' || Array.isArray(value)) return edits;
  standardSteps.forEach((standard, index) => {
    const text = value[index];
    if (typeof text === 'string' && text.trim() && text.length <= 2000 && text.trim() !== standard.trim()) edits[index] = text.trim();
  });
  return edits;
}
const validRecipeId = id => typeof id === 'string' && /^[a-zA-Z0-9-]{1,80}$/.test(id) && !['standard', '__proto__', 'constructor', 'prototype'].includes(id);
function validRecipe(recipe) {
  return recipe && validRecipeId(recipe.id) && typeof recipe.name === 'string' && recipe.name.trim() && recipe.name.length <= 60 && Array.isArray(recipe.steps) && recipe.steps.length > 0 && recipe.steps.length <= 30 && recipe.steps.every(step => typeof step === 'string' && step.trim() && step.length <= 2000);
}
export function recipeVersions(library, dish) {
  return [...(dish.steps.length ? [{ id: 'standard', name: '参考做法', steps: dish.steps }] : []), ...(library.recipeVersions[dish.id] || [])];
}
export function coverRecipe(library, dish) {
  const versions = recipeVersions(library, dish);
  return versions.find(v => v.id === library.coverRecipes[dish.id]) || versions[0] || { id: 'standard', name: '做法待补充', steps: [] };
}
export function saveRecipeVersion(library, dish, recipe) {
  if (!validRecipe(recipe)) return '请填写做法名称及步骤，每步最多 2000 字。';
  const versions = library.recipeVersions[dish.id] || [];
  const name = recipe.name.trim();
  if (['标准做法', '参考做法'].includes(name) || versions.some(v => v.id !== recipe.id && v.name === name)) return '已存在同名做法，请换个名称。';
  const index = versions.findIndex(v => v.id === recipe.id);
  if (index < 0 && versions.length >= 20) return '每道菜最多保存 20 种自定义做法。';
  const saved = { id: recipe.id, name, steps: recipe.steps.map(step => step.trim()) };
  library.recipeVersions[dish.id] = index < 0 ? [...versions, saved] : versions.map((v, i) => i === index ? saved : v);
  return null;
}
export function removeRecipeVersion(library, dish, id) {
  if (id === 'standard') return false;
  const versions = library.recipeVersions[dish.id] || [];
  if (!versions.some(v => v.id === id)) return false;
  library.recipeVersions[dish.id] = versions.filter(v => v.id !== id);
  if (library.coverRecipes[dish.id] === id) library.coverRecipes[dish.id] = 'standard';
  return true;
}
export function mergeRecipeLibrary(library, incoming) {
  for (const [dishId, versions] of Object.entries(incoming.recipeVersions)) {
    const existing = library.recipeVersions[dishId] || [];
    library.recipeVersions[dishId] = [...existing, ...versions.filter(v => !existing.some(item => item.id === v.id))].slice(0, 20);
  }
  for (const [dishId, id] of Object.entries(incoming.coverRecipes)) {
    if (!Object.hasOwn(library.coverRecipes, dishId) && (id === 'standard' || library.recipeVersions[dishId]?.some(v => v.id === id))) library.coverRecipes[dishId] = id;
  }
}
// Match unchanged steps first so inserting or removing a step does not mark later steps as changed.
export function compareRecipeSteps(standard, custom) {
  const same = (a, b) => a.trim() === b.trim();
  const table = Array.from({ length: standard.length + 1 }, () => Array(custom.length + 1).fill(0));
  for (let i = standard.length - 1; i >= 0; i--) for (let j = custom.length - 1; j >= 0; j--) {
    table[i][j] = same(standard[i], custom[j]) ? table[i + 1][j + 1] + 1 : Math.max(table[i + 1][j], table[i][j + 1]);
  }
  const matches = [];
  let i = 0, j = 0;
  while (i < standard.length && j < custom.length) {
    if (same(standard[i], custom[j])) { matches.push([i++, j++]); }
    else if (table[i + 1][j] >= table[i][j + 1]) i++;
    else j++;
  }
  matches.push([standard.length, custom.length]);
  const rows = [];
  let oldStart = 0, newStart = 0;
  for (const [oldEnd, newEnd] of matches) {
    const length = Math.max(oldEnd - oldStart, newEnd - newStart);
    for (let offset = 0; offset < length; offset++) {
      const oldIndex = oldStart + offset < oldEnd ? oldStart + offset : null;
      const newIndex = newStart + offset < newEnd ? newStart + offset : null;
      rows.push({ type: oldIndex === null ? 'added' : newIndex === null ? 'removed' : 'changed', original: oldIndex === null ? '' : standard[oldIndex], text: newIndex === null ? '' : custom[newIndex], oldIndex, newIndex });
    }
    if (oldEnd < standard.length) rows.push({ type: 'same', original: standard[oldEnd], text: custom[newEnd], oldIndex: oldEnd, newIndex: newEnd });
    oldStart = oldEnd + 1; newStart = newEnd + 1;
  }
  return rows;
}
export function normalizeLibrary(value, validIds) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return emptyLibrary();
  const ids = new Set(validIds);
  const uniqueValid = list => [...new Set(Array.isArray(list) ? list.filter(id => typeof id === 'string' && ids.has(id)) : [])];
  const favorites = uniqueValid(value.favorites);
  const used = new Set();
  const collections = (Array.isArray(value.collections) ? value.collections : []).filter(c => c && typeof c.id === 'string' && /^[a-zA-Z0-9-]{1,80}$/.test(c.id) && !used.has(c.id) && used.add(c.id) && typeof c.name === 'string' && c.name.trim()).slice(0, 50).map(c => ({ id: c.id, name: c.name.trim().slice(0, 60), dishes: uniqueValid(c.dishes).filter(id => favorites.includes(id)) }));
  const notes = {};
  for (const id of ids) if (typeof value.notes?.[id] === 'string') notes[id] = value.notes[id].slice(0, 5000);
  const categories = {};
  for (const id of ids) if (cuisines.some(c => c.id === value.categories?.[id])) categories[id] = value.categories[id];
  const recipeVersions = {}, coverRecipes = {};
  for (const dish of standardDishes) {
    if (!ids.has(dish.id)) continue;
    const seen = new Set();
    const source = value.recipeVersions?.[dish.id];
    const versions = (Array.isArray(source) ? source : []).filter(v => validRecipe(v) && !seen.has(v.id) && seen.add(v.id)).slice(0, 20).map(v => ({ id: v.id, name: v.name.trim(), steps: v.steps.map(s => s.trim()) }));
    if (!versions.length) {
      const edits = normalizeStepEdits(dish.steps, value.recipeEdits?.[dish.id]);
      if (Object.keys(edits).length) {
        versions.push({ id: 'legacy-custom', name: '我的做法', steps: dish.steps.map((step, index) => edits[index] ?? step) });
        coverRecipes[dish.id] = 'legacy-custom';
      }
    }
    if (versions.length) recipeVersions[dish.id] = versions;
    const cover = value.coverRecipes?.[dish.id];
    if (cover === 'standard' || versions.some(v => v.id === cover)) coverRecipes[dish.id] = cover;
  }
  return { favorites, collections, notes, categories, recipeVersions, coverRecipes };
}
export function filterDishes(dishes, options = {}) {
  const { query = '', cuisine = 'all', difficulty = 'all', maxTime = 0, flavor = 'all', ingredients = [], sort = 'recommended', ids } = options;
  const needle = query.trim().toLowerCase();
  const requiredIngredients = parseIngredientTerms(ingredients);
  const result = dishes.filter(d => (!ids || ids.includes(d.id)) && (cuisine === 'all' || d.cuisine === cuisine) && (difficulty === 'all' || d.difficulty === difficulty) && (!maxTime || (Number.isFinite(d.minutes) && d.minutes > 0 && d.minutes <= Number(maxTime))) && (flavor === 'all' || d.flavors?.includes(flavor)) && requiredIngredients.every(term => d.ingredients.some(i => i[2].split(/[，,（(]/u)[0].toLowerCase().includes(term.toLowerCase()))) && (!needle || [d.name, d.englishName, d.chinese, d.cuisine, cuisines.find(c => c.id === d.cuisine)?.name, d.description, ...(d.sources || []).map(s => s.title), ...(d.flavors || []), ...d.tags, ...d.ingredients.map(i => i[2])].join(' ').toLowerCase().includes(needle)));
  if (sort === 'quickest') result.sort((a, b) => (a.minutes ?? Infinity) - (b.minutes ?? Infinity));
  if (sort === 'az') result.sort((a, b) => a.name.localeCompare(b.name, 'zh-CN'));
  return result;
}
export function parseIngredientTerms(value) {
  const values = Array.isArray(value) ? value : [value];
  const seen = new Set();
  return values.filter(v => typeof v === 'string').flatMap(v => v.split(/[,，、;；\n\r]+/u)).map(v => v.trim()).filter(v => {
    const key = v.toLowerCase();
    if (!key || seen.has(key)) return false;
    seen.add(key); return true;
  });
}
export function toggleFavorite(library, id) {
  if (library.favorites.includes(id)) {
    library.favorites = library.favorites.filter(x => x !== id);
    library.collections.forEach(c => { c.dishes = c.dishes.filter(x => x !== id); });
    return false;
  }
  library.favorites.push(id);
  return true;
}
export function formatAmount(quantity, servings, baseServings) {
  const n = Math.round(quantity * servings / baseServings * 100) / 100;
  const fractions = { 0.25: '¼', 0.5: '½', 0.75: '¾' };
  const whole = Math.floor(n), remainder = Math.round((n - whole) * 100) / 100;
  return fractions[remainder] ? (whole ? `${whole} ` : '') + fractions[remainder] : String(n);
}
