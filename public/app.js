import { cuisines, dishes, restaurants } from './data.js';
import { bookCatalog } from './catalog.js';
import { STORAGE_KEY, emptyLibrary, normalizeLibrary, filterDishes, parseIngredientTerms, toggleFavorite, formatAmount, recipeVersions, coverRecipe, saveRecipeVersion, removeRecipeVersion, mergeRecipeLibrary, compareRecipeSteps } from './model.js';

const paths = {
  grid: '<rect x="3" y="3" width="7" height="7" rx="1.3"/><rect x="14" y="3" width="7" height="7" rx="1.3"/><rect x="3" y="14" width="7" height="7" rx="1.3"/><rect x="14" y="14" width="7" height="7" rx="1.3"/>',
  heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',
  pin: '<path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  bowl: '<path d="M3 12h18a9 9 0 0 1-18 0ZM8 21h8M5 3l12 7M10 2l10 7"/>',
  book: '<path d="M12 5v16M12 5C9 3 5 3 2 4v15c3-1 7-1 10 2 3-3 7-3 10-2V4c-3-1-7-1-10 1Z"/>',
  folder: '<path d="M3 7V5a2 2 0 0 1 2-2h5l2 3h7a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  arrow: '<path d="M4 12h15m-5-5 5 5-5 5"/>',
  chevron: '<path d="m9 5 7 7-7 7"/>',
  search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
  filter: '<path d="M3 6h5m4 0h9M3 12h11m4 0h3M3 18h3m4 0h11"/><circle cx="10" cy="6" r="2"/><circle cx="16" cy="12" r="2"/><circle cx="8" cy="18" r="2"/>',
  list: '<path d="M8 5h13M8 12h13M8 19h13M3 5h.01M3 12h.01M3 19h.01"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  chart: '<path d="M5 20v-5M12 20V9M19 20V3"/>',
  close: '<path d="m6 6 12 12M6 18 18 6"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  external: '<path d="M14 3h7v7m0-7L10 14M10 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5"/>',
  leaf: '<path d="M20 3C9 2 3 7 4 14c.5 4 6 6 10 3 5-4 5-10 6-14ZM4 21 15 10"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7h.01"/>',
  help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 8.5a2.5 2.5 0 1 1 4.4 1.6c-1 1-1.9 1.2-1.9 2.9M12 17h.01"/>',
  home: '<path d="m3 10 9-7 9 7v10H3V10ZM9 20v-7h6v7"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  note: '<path d="M14 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9M14 3v7h7M14 3l7 7M7 14h10M7 17h7"/>',
  download: '<path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/>',
  upload: '<path d="M12 16V3m-5 5 5-5 5 5M4 16v5h16v-5"/>',
};
const icon = name => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.bowl}</svg>`;
const escape = value => String(value ?? '').replace(/[&<>"']/g, ch => `&#${ch.charCodeAt(0)};`);
const cuisineById = id => cuisines.find(c => c.id === id);
const personalDish = d => ({ ...d, cuisine: library.categories[d.id] || d.cuisine });
const dishById = id => { const d = dishes.find(d => d.id === id); return d ? personalDish(d) : undefined; };
const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);
let library = emptyLibrary();
let storageAvailable = true;
try { library = normalizeLibrary(JSON.parse(localStorage.getItem(STORAGE_KEY)), dishes.map(d => d.id)); } catch { storageAvailable = false; }
const state = { page: 'explore', cuisine: 'all', query: '', difficulty: 'all', maxTime: 0, flavor: 'all', ingredients: [], ingredientDraft: '', sort: 'recommended', view: 'grid', filtersOpen: false, collection: null, city: 'all', detailId: null, detailTab: 'recipe', servings: 2, collectionMode: 'create' };
let toastTimer;
let noteTimer;
const recipeDrafts = new Map();
function notify(message) { const el = $('#toast'); el.textContent = message; el.classList.add('visible'); clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove('visible'), 3200); }
function persist() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(library)); storageAvailable = true; return true; }
  catch { storageAvailable = false; notify('浏览器暂时无法保存，请导出菜谱备份。'); return false; }
}
function resetFilters() { Object.assign(state, { query: '', cuisine: 'all', difficulty: 'all', maxTime: 0, flavor: 'all', ingredients: [], ingredientDraft: '', sort: 'recommended', city: 'all', filtersOpen: false }); }
function pageName() { return state.page === 'favorites' ? '我的收藏' : state.page === 'restaurants' ? '餐馆指南' : '公共菜谱'; }
function navItem(page, label, name, count) { return `<button class="nav-item ${state.page === page ? 'active' : ''}" data-action="navigate" data-page="${page}" ${state.page === page ? 'aria-current="page"' : ''}>${icon(name)}<span>${label}</span>${count !== undefined ? `<span class="nav-count">${count}</span>` : ''}</button>`; }
function renderSidebar() {
  $('#sidebar').innerHTML = `<a class="brand" href="#explore" aria-label="味集首页"><span class="brand-seal">味</span><span><span class="brand-wordmark">味集</span><span class="brand-caption">一餐一味，寻味中国</span></span></a>
    <div class="nav-section-title">发现好味道</div>
    <nav class="main-nav" aria-label="主导航">${navItem('explore', '公共菜谱', 'grid')}${navItem('favorites', '我的收藏', 'heart', library.favorites.length)}${navItem('restaurants', '餐馆指南', 'pin')}</nav>
    <div class="collections-heading"><div class="nav-section-title">我的收藏夹</div><button class="mini-button" data-action="new-collection" aria-label="新建收藏夹" title="新建收藏夹">${icon('plus')}</button></div>
    <nav class="collection-nav" aria-label="我的收藏夹">${library.collections.length ? library.collections.map(c => `<button class="nav-item ${state.collection === c.id && state.page === 'favorites' ? 'active' : ''}" data-action="collection" data-id="${escape(c.id)}">${icon('folder')}<span>${escape(c.name)}</span><span class="nav-count">${c.dishes.length}</span></button>`).join('') : '<p class="collection-empty">为喜欢的味道，<br>留一个专属位置。</p>'}</nav>
    <div class="sidebar-bottom"><div class="sidebar-note">${icon('leaf')}<p>一菜一故事，<br>一餐一欢喜。</p><small>八方风味，家常烟火。<br>慢慢尝，也慢慢记。</small></div><div class="sidebar-user"><span class="user-avatar">食</span><div class="user-details"><strong>我的厨房</strong><span>记录自己的餐桌滋味</span></div><button class="icon-button" data-action="navigate" data-page="favorites" aria-label="打开我的收藏">${icon('chevron')}</button></div></div>`;
}
function renderTopbar() {
  $('#topbar').innerHTML = `<div class="breadcrumb"><button class="icon-button mobile-menu" data-action="menu" aria-label="展开或收起导航" aria-expanded="${$('#sidebar').classList.contains('open')}">${icon('menu')}</button><span class="home-icon">${icon('home')}</span><span class="root-crumb">我的厨房</span><span class="slash">/</span><span class="current">${pageName()}</span></div><div class="topbar-right"><span class="topbar-motto">人间有味，三餐有期。</span><span class="status-pill"><span class="status-dot"></span>我的专属菜谱</span></div>`;
}
function intro() {
  if (state.page === 'favorites') return `<section class="intro favorite-intro"><div><div class="eyebrow">把喜欢的味道，留在身边</div><h1>我的收藏，<em>我的味道。</em></h1><p class="intro-description">收藏喜欢的菜，也记下下一次想尝试的味道。<br class="desktop-break">整理专属收藏夹，留住每一次下厨的心得。</p><div class="favorite-tools"><button class="text-button" data-action="export">${icon('download')} 导出我的菜谱</button><button class="text-button" data-action="import">${icon('upload')} 导入备份</button></div></div><button class="primary-button" data-action="new-collection">${icon('plus')} 新建收藏夹</button></section>`;
  if (state.page === 'restaurants') return `<section class="intro"><div><div class="eyebrow">循着好味道，找到好去处</div><h1>寻一方风味，<em>赴一席好菜。</em></h1><p class="intro-description">认识传承地方风味的餐馆，<br>为下一次出门寻味，找一个值得期待的去处。</p></div><div class="intro-side"><span class="big-character">寻味</span><div><strong>以一餐一饭，<br>遇见一方风土。</strong><small>随心寻味。</small></div></div></section>`;
  return `<section class="intro"><div><div class="eyebrow">从八大菜系，到家常烟火</div><h1>寻味八方，<br>也爱这一口<em>家常。</em></h1><p class="intro-description">读懂经典菜的做法，把好味道带回自家厨房，<br class="desktop-break">也找到值得专程去尝的餐馆。</p></div><div class="intro-side"><span class="big-character">人间烟火</span><div><strong>好好吃饭，<br>便是日常的小欢喜。</strong><small>从一道菜开始。</small></div></div></section>`;
}
function cuisineTiles() {
  return `<section class="cuisine-section" aria-labelledby="cuisines-title"><div class="section-heading"><h2 id="cuisines-title">菜品分类 <span>八大菜系 · 地方风味 · 家常菜</span></h2>${state.cuisine !== 'all' ? `<button class="text-button" data-action="all-cuisines">查看全部分类 ${icon('arrow')}</button>` : ''}</div><div class="catalog-categories">${cuisines.map(c => `<button class="cuisine-tile ${state.cuisine === c.id ? 'selected' : ''}" style="--cuisine-color:${c.color}" data-action="cuisine" data-id="${c.id}" aria-pressed="${state.cuisine === c.id}" aria-label="按${c.name}筛选"><span class="cuisine-name">${c.name}</span><span class="category-count">${dishes.filter(d => personalDish(d).cuisine === c.id).length}</span>${state.cuisine === c.id ? `<span class="tile-check">${icon('check')}</span>` : ''}</button>`).join('')}</div></section>`;
}
function collectionTabs() {
  const current = library.collections.find(c => c.id === state.collection);
  return `<div class="collection-tabs" aria-label="收藏夹分类"><button class="collection-tab ${!current ? 'active' : ''}" data-action="collection" data-id="all">${icon('heart')} 全部收藏 <span>${library.favorites.length}</span></button>${library.collections.map(c => `<button class="collection-tab ${state.collection === c.id ? 'active' : ''}" data-action="collection" data-id="${escape(c.id)}">${icon('folder')}${escape(c.name)}<span>${c.dishes.length}</span></button>`).join('')}${current ? '<div class="collection-actions"><button class="text-button" data-action="rename-collection">重命名</button><button class="text-button danger-text" data-action="delete-collection">删除收藏夹</button></div>' : ''}</div>`;
}
function searchField(placeholder) { return `<div class="search-field">${icon('search')}<input type="search" id="gallery-search" value="${escape(state.query)}" placeholder="${placeholder}" aria-label="${placeholder}" autocomplete="off"><button class="search-clear" data-action="clear-search" aria-label="清除搜索" ${state.query ? '' : 'hidden'}>×</button></div>`; }
function toolbar() {
  const hasFilters = hasActiveFilters();
  return `<div class="toolbar">${searchField('搜索菜名、口味或喜欢的食材…')}<button class="filter-button ${state.filtersOpen || hasFilters ? 'active' : ''}" data-action="filters" aria-expanded="${state.filtersOpen}" aria-controls="filter-panel">${icon('filter')} 筛选 ${hasFilters ? '<span class="filter-dot"></span>' : ''}</button><div class="select-wrap"><label for="sort-select">排序：</label><select id="sort-select" aria-label="菜品排序"><option value="recommended" ${state.sort === 'recommended' ? 'selected' : ''}>推荐顺序</option><option value="quickest" ${state.sort === 'quickest' ? 'selected' : ''}>用时最短</option><option value="az" ${state.sort === 'az' ? 'selected' : ''}>菜名拼音</option></select></div></div>
    ${state.filtersOpen ? `<div class="filter-panel" id="filter-panel"><label>烹饪时间<select data-filter="maxTime"><option value="0">不限时间</option>${[30, 60, 90].map(n => `<option value="${n}" ${state.maxTime === n ? 'selected' : ''}>${n} 分钟以内</option>`).join('')}</select></label><label>难度<select data-filter="difficulty"><option value="all">不限难度</option><option value="Easy" ${state.difficulty === 'Easy' ? 'selected' : ''}>简单</option><option value="Intermediate" ${state.difficulty === 'Intermediate' ? 'selected' : ''}>进阶</option></select></label><label>口味<select data-filter="flavor"><option value="all">不限口味</option>${[...new Set(dishes.flatMap(d => d.flavors || []))].map(flavor => `<option value="${escape(flavor)}" ${state.flavor === flavor ? 'selected' : ''}>${escape(flavor)}</option>`).join('')}</select></label><div class="ingredient-filter"><label for="ingredient-input">食材（可添加多个）</label><div class="ingredient-entry"><div id="ingredient-tags" class="ingredient-tags">${ingredientTags()}</div><input type="text" id="ingredient-input" value="${escape(state.ingredientDraft)}" placeholder="输入食材，回车添加" aria-describedby="ingredient-hint" autocomplete="off"><button type="button" class="ingredient-add" data-action="add-ingredient" aria-label="添加食材">${icon('plus')}</button></div><small id="ingredient-hint">例如：豆腐、香菇；同时包含全部食材，可用逗号分隔。</small></div><button class="text-button" data-action="reset-filters">重置筛选</button></div>` : ''}`;
}
function ingredientTags() { return state.ingredients.map((term, index) => `<button type="button" class="ingredient-token" data-action="remove-ingredient" data-index="${index}" aria-label="移除食材：${escape(term)}">${escape(term)}${icon('close')}</button>`).join(''); }
function ingredientTerms() { return parseIngredientTerms([...state.ingredients, state.ingredientDraft]); }
function hasActiveFilters() { return state.cuisine !== 'all' || state.difficulty !== 'all' || state.maxTime !== 0 || state.flavor !== 'all' || ingredientTerms().length > 0; }
function commitIngredientInput() {
  state.ingredients = ingredientTerms(); state.ingredientDraft = '';
  const input = $('#ingredient-input'); if (input) input.value = '';
  if ($('#ingredient-tags')) $('#ingredient-tags').innerHTML = ingredientTags();
  renderResults();
}
function heatMarkup(d) { return d.heat ? `<span title="${d.heat === 3 ? '香辣' : '中辣'}" aria-label="${d.heat === 3 ? '香辣' : '中辣'}"><span class="heat-dots" aria-hidden="true">${[1, 2, 3].map(n => `<i class="${n <= d.heat ? 'on' : ''}"></i>`).join('')}</span></span>` : '<span>不辣</span>'; }
function favoriteButton(d) { const saved = library.favorites.includes(d.id); return `<button class="favorite-button ${saved ? 'saved' : ''}" data-action="favorite" data-id="${d.id}" aria-pressed="${saved}" aria-label="${saved ? '取消收藏' : '收藏'}${escape(d.name)}" title="${saved ? '取消收藏' : '加入收藏'}">${icon('heart')}</button>`; }
function catalogSummary() {
  return `<details class="catalog-coverage"><summary>《中国名菜谱》已核对 ${bookCatalog.importedNameCount} 个菜名 · 全套目录尚未齐全</summary><p>仅收录有来源的菜名；做法不明时留空。当前 ${bookCatalog.volumes.filter(v=>v.importedCount).length} 个分册有菜名来源，其余分册等待完整目录。</p><div class="coverage-list">${bookCatalog.volumes.map(v=>`<a href="${v.url}" target="_blank" rel="noopener noreferrer">${v.title.replace('中国名菜谱·','')}<span>${v.importedCount ? `${v.importedCount} 个菜名${v.coverage === 'partial-toc' ? '（部分）' : '（公开目录）'}` : '目录待补充'}</span></a>`).join('')}</div></details>`;
}
function sourceMarkup(d) {
  return `<div class="recipe-source">${d.sources?.length ? d.sources.map(s=>`<a href="${s.url}" target="_blank" rel="noopener noreferrer">${escape(s.title)} ${icon('external')}</a><span>${escape(s.locator)}${s.nameNeedsReview ? ' · 菜名文字待核对' : ''} · 仅核对菜名</span>`).join('') : ''}<p>${escape(d.recipeOrigin || '')}</p></div>`;
}
function dishMeta(d) {
  if (d.catalogOnly) return '<span>仅收录菜名 · 做法待补充</span>';
  return `<span>${icon('clock')}${d.minutes} 分钟</span><i class="meta-separator"></i><span>${icon('chart')}${d.difficulty === 'Easy' ? '简单' : '进阶'}</span><i class="meta-separator"></i>${heatMarkup(d)}`;
}
function coverDescription(d) {
  const cover=coverRecipe(library,d);
  return cover.id !== 'standard' ? cover.steps[0] : d.description || d.sources?.[0]?.title || '';
}
function dishCard(d) {
  const c = cuisineById(d.cuisine);
  return `<article class="dish-card" data-dish="${d.id}"><div class="dish-card-top"><button class="cuisine-tag" style="--cuisine-color:${c.color}" data-action="cuisine" data-id="${c.id}" aria-label="筛选${c.name}菜品">${c.name} · ${c.region}</button>${favoriteButton(d)}</div><button class="dish-title" data-action="dish" data-id="${d.id}" aria-label="打开${escape(d.name)}的做法" aria-haspopup="dialog">${d.name}</button><p class="dish-chinese">${escape(coverRecipe(library, d).name)}${(library.recipeVersions[d.id] || []).length ? ` · ${recipeVersions(library, d).length} 种做法` : ''}</p><p class="dish-description">${escape(coverDescription(d))}</p><div class="dish-meta">${dishMeta(d)}</div><div class="dish-card-footer"><button class="places-link" data-action="dish-restaurants" data-id="${d.id}">${icon('pin')}${d.restaurants.length ? `${d.restaurants.length} 家餐馆` : '餐馆待补充'}</button></div></article>`;
}
function emptyMarkup() {
  if(state.page==='explore' && state.cuisine!=='all' && !state.query && !hasActiveFiltersExceptCuisine()) {
    const v=bookCatalog.volumes.find(v=>v.cuisine===state.cuisine);
    if(v&&!v.importedCount&&!dishes.some(d=>personalDish(d).cuisine===state.cuisine)) return `<div class="empty-state"><h3>${escape(cuisineById(state.cuisine).name)}目录待补充</h3><p>已确认《${escape(v.title)}》分册，尚未取得可核对的菜品目录。</p><a class="secondary-button" href="${v.url}" target="_blank" rel="noopener noreferrer">查看分册书目</a></div>`;
  }
  const noFavorites = state.page === 'favorites' && !library.favorites.length;
  const emptyCollection = state.page === 'favorites' && state.collection && !library.collections.find(c => c.id === state.collection)?.dishes.length;
  if (noFavorites || emptyCollection) return `<div class="empty-state"><div class="empty-icon">${icon(noFavorites ? 'heart' : 'folder')}</div><h3>${noFavorites ? '从收藏一道喜欢的菜开始。' : '新的收藏夹，等你装入好味道。'}</h3><p>${noFavorites ? '点击菜品上的爱心即可收藏，在这里随时查看它的做法与推荐餐馆。' : '打开菜品的“我的笔记”，勾选这个收藏夹，就能把喜欢的菜整理到这里。'}</p><button class="primary-button" data-action="navigate" data-page="explore">去公共菜谱逛逛 ${icon('arrow')}</button></div>`;
  return `<div class="empty-state"><div class="empty-icon">${icon('search')}</div><h3>暂时没有找到合适的菜。</h3><p>换个关键词，或减少一些筛选条件，再找找喜欢的味道。</p><button class="secondary-button" data-action="reset-filters">清除搜索与筛选</button></div>`;
}
function hasActiveFiltersExceptCuisine() { return state.difficulty !== 'all' || state.maxTime !== 0 || state.flavor !== 'all' || ingredientTerms().length > 0; }
function activeFilters() {
  const chips = [];
  if (state.flavor !== 'all') chips.push(`<button class="filter-chip" data-action="clear-flavor" aria-label="清除口味筛选">口味：${escape(state.flavor)} ${icon('close')}</button>`);
  if (!state.filtersOpen) {
    state.ingredients.forEach((term, index) => chips.push(`<button class="filter-chip" data-action="remove-ingredient" data-index="${index}" aria-label="移除食材：${escape(term)}">食材：${escape(term)} ${icon('close')}</button>`));
    if (state.ingredientDraft.trim()) chips.push(`<button class="filter-chip" data-action="clear-ingredient-draft">食材：${escape(state.ingredientDraft.trim())} ${icon('close')}</button>`);
  }
  return `<div id="active-filter-chips" class="active-filters" ${chips.length ? '' : 'hidden'}>${chips.join('')}</div>`;
}
function getResults() {
  let ids;
  if (state.page === 'favorites') ids = state.collection ? library.collections.find(c => c.id === state.collection)?.dishes || [] : library.favorites;
  return filterDishes(dishes.map(personalDish), { ...state, ids, ingredients: ingredientTerms() });
}
function galleryMarkup() {
  const results = getResults();
  const current = library.collections.find(c => c.id === state.collection);
  return `<section class="gallery-section" aria-labelledby="gallery-title"><div class="section-heading gallery-heading"><div class="gallery-heading-left"><h2 id="gallery-title">${state.page === 'favorites' ? escape(current?.name || '已收藏的菜') : '公共菜谱'}</h2><span class="result-count" id="result-count">${results.length}</span></div><div class="view-toggle" aria-label="菜谱显示方式"><button class="view-button ${state.view === 'grid' ? 'active' : ''}" data-action="view" data-view="grid" aria-pressed="${state.view === 'grid'}" aria-label="卡片视图">${icon('grid')}</button><button class="view-button ${state.view === 'list' ? 'active' : ''}" data-action="view" data-view="list" aria-pressed="${state.view === 'list'}" aria-label="列表视图">${icon('list')}</button></div></div>${toolbar()}${activeFilters()}<div class="dish-grid ${state.view === 'list' ? 'list-view' : ''}" id="gallery-results">${results.length ? results.map(dishCard).join('') : emptyMarkup()}</div><div class="gallery-footnote" id="gallery-footnote">共 ${results.length} 道菜 <span>·</span> 为下一餐，添一点灵感</div><span id="results-announcement" class="sr-only" role="status" aria-live="polite"></span></section>`;
}
function restaurantCard(r) {
  const c = cuisineById(r.cuisine);
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${r.name} ${r.city} 中国`)}`;
  const researchUrl = `https://www.bing.com/search?q=${encodeURIComponent(`${r.name} ${r.city} 餐馆 官方 菜单`)}`;
  return `<article class="restaurant-card"><div class="restaurant-top"><span class="cuisine-tag" style="--cuisine-color:${c.color}">${c.name} · ${c.region}</span><span class="location-tag">${icon('pin')}${r.city}</span></div><h3>${r.name}</h3><span class="dish-chinese">${r.city} · ${c.name}</span><p>${r.specialty}</p><p class="restaurant-note">${r.note}</p><div class="restaurant-bottom"><a class="text-button" href="${mapUrl}" target="_blank" rel="noopener noreferrer">查看地图 ${icon('external')}</a><a class="text-button" href="${researchUrl}" target="_blank" rel="noopener noreferrer">查询菜单 ${icon('arrow')}</a></div></article>`;
}
const restaurantNotice = () => `<div class="restaurant-notice">${icon('info')}<span>这里收录具有地方特色的餐馆，供寻味参考，并非实时排名。菜单、门店与营业时间可能变化，想吃某道菜时，建议先向餐馆确认。</span></div>`;
function getRestaurants() { return restaurants.filter(r => (state.cuisine === 'all' || r.cuisine === state.cuisine) && (state.city === 'all' || r.city === state.city) && (!state.query || [r.name, r.englishName, r.englishCity, r.chinese, r.city, r.cuisine, cuisineById(r.cuisine)?.name, r.specialty].join(' ').toLowerCase().includes(state.query.trim().toLowerCase()))); }
function restaurantEmpty() { return '<div class="empty-state"><h3>暂时没有匹配的餐馆。</h3><p>试试其他城市、菜系或餐馆名称。</p><button class="secondary-button" data-action="reset-filters">清除搜索与筛选</button></div>'; }
function restaurantsMarkup() {
  const list = getRestaurants();
  return `${restaurantNotice()}<section class="gallery-section"><div class="section-heading gallery-heading"><div class="gallery-heading-left"><h2>值得一尝</h2><span class="result-count" id="result-count">${list.length}</span></div><span class="restaurant-count">寻味八方，各有好去处</span></div><div class="toolbar restaurant-sort-row">${searchField('搜索餐馆、城市或菜系…')}<div class="select-wrap"><select id="restaurant-cuisine" aria-label="按分类筛选餐馆"><option value="all">全部分类</option>${cuisines.map(c => `<option value="${c.id}" ${state.cuisine === c.id ? 'selected' : ''}>${c.name}</option>`).join('')}</select></div><div class="select-wrap"><select id="city-select" aria-label="按城市筛选餐馆"><option value="all">全部城市</option>${[...new Set(restaurants.map(r => r.city))].sort().map(city => `<option ${state.city === city ? 'selected' : ''}>${city}</option>`).join('')}</select></div></div><div class="restaurant-grid" id="gallery-results">${list.length ? list.map(restaurantCard).join('') : restaurantEmpty()}</div><div id="gallery-footnote" class="gallery-footnote">多了解一点当地味道，下一餐就多一点期待。</div><span id="results-announcement" class="sr-only" role="status" aria-live="polite"></span></section>`;
}
function renderMain() {
  $('#main').innerHTML = `${!storageAvailable ? '<div class="storage-warning">浏览器暂时无法保存更改。请到“我的收藏”中选择“导出我的菜谱”保留备份。</div>' : ''}${intro()}${state.page === 'explore' ? catalogSummary()+cuisineTiles() : state.page === 'favorites' ? collectionTabs() : ''}${state.page === 'restaurants' ? restaurantsMarkup() : galleryMarkup()}${state.page === 'favorites' ? `<div class="storage-note">${icon('check')} 已保存在当前浏览器，可导出备份，带走自己的菜谱。</div>` : ''}`;
}
function render() { renderSidebar(); renderTopbar(); renderMain(); document.title = `${pageName()} — 味集`; }
function renderResults() {
  const list = state.page === 'restaurants' ? getRestaurants() : getResults();
  $('#gallery-results').innerHTML = list.length ? list.map(d => state.page === 'restaurants' ? restaurantCard(d) : dishCard(d)).join('') : state.page === 'restaurants' ? restaurantEmpty() : emptyMarkup();
  $('#result-count').textContent = list.length;
  $('#results-announcement').textContent = `找到 ${list.length} ${state.page === 'restaurants' ? '家餐馆' : '道菜'}`;
  if (state.page !== 'restaurants') $('#gallery-footnote').innerHTML = `共 ${list.length} 道菜 <span>·</span> 为下一餐，添一点灵感`;
  $('.search-clear').hidden = !state.query;
  if (state.page !== 'restaurants') {
    $('#active-filter-chips').outerHTML = activeFilters();
    const button = $('[data-action="filters"]');
    const active = hasActiveFilters();
    button.classList.toggle('active', state.filtersOpen || active);
    button.querySelector('.filter-dot')?.remove();
    if (active) button.insertAdjacentHTML('beforeend', '<span class="filter-dot"></span>');
  }
}
function navigate(page, collection = null) {
  if (!['explore', 'favorites', 'restaurants'].includes(page)) return;
  resetFilters(); state.page = page; state.collection = collection;
  const nextHash = `#${page}${collection ? '/' + encodeURIComponent(collection) : ''}`;
  if (location.hash !== nextHash) history.pushState(null, '', nextHash);
  $('#sidebar').classList.remove('open'); render();
  window.scrollTo({ top: 0, behavior: 'instant' });
}
function routeFromHash() {
  const [page, collection] = location.hash.slice(1).split('/');
  state.page = ['explore', 'favorites', 'restaurants'].includes(page) ? page : 'explore';
  state.collection = state.page === 'favorites' && library.collections.some(c => c.id === collection) ? collection : null;
  resetFilters(); render();
}
function openDish(id, tab = 'recipe') {
  const d = dishById(id); if (!d) return;
  state.detailId = id; state.detailTab = tab; state.servings = d.servings;
  state.recipeId = coverRecipe(library, d).id;
  renderDetail(); $('#detail-dialog').showModal(); $('#detail-dialog').scrollTop = 0;
}
function renderDetail() {
  const d = dishById(state.detailId), c = cuisineById(d.cuisine);
  $('#detail-dialog').innerHTML = `<div class="dialog-topline"><label class="dish-category-field" for="dish-category">菜品分类<select id="dish-category" aria-label="调整菜品分类">${cuisines.map(category => `<option value="${category.id}" ${d.cuisine === category.id ? 'selected' : ''}>${category.name}</option>`).join('')}</select></label><div class="dialog-controls">${favoriteButton(d)}<button class="icon-button" data-action="close-dialog" aria-label="关闭菜品详情">${icon('close')}</button></div></div><div class="dialog-hero"><h2 id="dish-dialog-title">${d.name}</h2><p class="dish-chinese">${escape(coverRecipe(library, d).name)}${(library.recipeVersions[d.id] || []).length ? ` · ${recipeVersions(library, d).length} 种做法` : ''}</p><p class="dish-description">${escape(coverDescription(d))}</p><div class="dish-meta">${dishMeta(d)}</div>${d.extraTime ? `<p class="time-note">${d.extraTime}</p>` : ''}</div><div class="dialog-tabs" role="tablist" aria-label="菜品信息">${[['recipe', 'book', '做法步骤'], ['restaurants', 'pin', '推荐餐馆'], ['notes', 'note', '我的笔记']].map(([id, name, label]) => `<button class="dialog-tab ${state.detailTab === id ? 'active' : ''}" role="tab" id="tab-${id}" tabindex="${state.detailTab === id ? '0' : '-1'}" aria-selected="${state.detailTab === id}" aria-controls="detail-content" data-action="detail-tab" data-tab="${id}">${icon(name)}${label}</button>`).join('')}</div><div class="detail-body" id="detail-content" role="tabpanel" aria-labelledby="tab-${state.detailTab}"></div>`;
  $('#detail-dialog').setAttribute('aria-labelledby', 'dish-dialog-title'); renderDetailBody();
}
function ingredientsMarkup(d) { return d.ingredients.map(([amount, unit, name], index) => `<label class="ingredient"><input type="checkbox" data-ingredient="${index}"><span><strong>${formatAmount(amount, state.servings, d.servings)} ${unit}</strong> ${name}</span></label>`).join(''); }
function methodMarkup(d) {
  const standard = dishes.find(item => item.id === d.id);
  const versions = recipeVersions(library, standard);
  const current = versions.find(v => v.id === state.recipeId) || coverRecipe(library, standard);
  state.recipeId = current.id;
  const draft = recipeDrafts.get(d.id);
  if (draft) return `<form id="recipe-edit-form"><div class="method-heading"><h3 class="subheading">${draft.isNew ? '新增做法' : '修改做法'}</h3>${standard.steps.length ? '<button type="button" class="text-button" data-action="reset-method">填回参考步骤</button>' : ''}</div><label class="recipe-name-label" for="recipe-name">做法名称</label><input id="recipe-name" maxlength="60" required value="${escape(draft.name)}" placeholder="例如：少辣版、妈妈的做法"><p class="method-hint">${standard.steps.length ? '修改或增减步骤，保存后会标记与参考做法的差异。' : '这是你补充的个人做法，当前没有书中做法可供对照。'}</p><ol class="method-list method-edit-list">${draft.steps.map((step, index) => `<li><div class="step-content"><label class="sr-only" for="recipe-step-${index}">第 ${index + 1} 步</label><textarea id="recipe-step-${index}" data-recipe-step="${index}" rows="3" maxlength="2000" required>${escape(step)}</textarea><button type="button" class="text-button remove-step" data-action="remove-step" data-index="${index}" ${draft.steps.length === 1 ? 'disabled' : ''}>删除这一步</button></div></li>`).join('')}</ol><button type="button" class="text-button" data-action="add-step" ${draft.steps.length >= 30 ? 'disabled' : ''}>${icon('plus')} 添加步骤</button><p id="recipe-edit-error" class="form-error" role="alert"></p><div class="method-edit-actions"><button class="secondary-button" type="button" data-action="cancel-method">取消</button><button class="primary-button" type="submit">保存做法</button></div></form>`;
  if (!current.steps.length) return `<div class="empty-method"><h3 class="subheading">做法待补充</h3><p class="method-hint">当前仅核实菜品名称，未录入书中做法。</p><button class="secondary-button" data-action="new-method">${icon('plus')} 添加我的做法</button></div>`;
  const rows = standard.steps.length ? compareRecipeSteps(standard.steps, current.steps) : current.steps.map((text,index)=>({type:'same',text,newIndex:index,oldIndex:null,original:''}));
  const changed = rows.filter(row => row.type !== 'same').length;
  const isCover = coverRecipe(library, standard).id === current.id;
  return `<div class="method-heading"><h3 class="subheading">做法步骤</h3><button class="text-button" data-action="new-method">${icon('plus')} 新增做法</button></div><div class="recipe-version-bar"><label class="sr-only" for="recipe-version">选择做法</label><select id="recipe-version">${versions.map(v => `<option value="${escape(v.id)}" ${v.id === current.id ? 'selected' : ''}>${escape(v.name)}${coverRecipe(library, standard).id === v.id ? ' · 封面' : ''}</option>`).join('')}</select>${isCover ? '<span class="cover-badge">封面做法</span>' : '<button class="text-button" data-action="cover-method">设为封面</button>'}<button class="text-button" data-action="edit-method">修改</button>${current.id !== 'standard' ? '<button class="text-button danger-text" data-action="delete-method">删除</button>' : ''}</div><p class="method-hint">${changed ? `${changed} 处不同 · 悬停或点击标记，查看参考步骤` : '封面做法会在菜品卡片及打开时优先展示。'}</p><ol class="method-list">${rows.map((row, index) => {
    const modified = row.type !== 'same';
    const label = { changed: '已修改', added: '新增', removed: '已省略' }[row.type];
    return `<li class="recipe-step ${modified ? 'step-modified' : ''} ${row.type === 'removed' ? 'step-removed' : ''}" data-step-index="${index}" style="--step-number:'${row.newIndex === null ? '−' : String(row.newIndex + 1).padStart(2, '0')}'"><div class="step-content">${modified ? `<button class="step-change" data-action="standard-step" aria-label="${label}，查看参考做法" aria-expanded="false" aria-controls="standard-step-${index}" aria-describedby="standard-step-${index}">${label} ${icon('info')}</button>` : ''}<p class="step-text">${escape(row.type === 'removed' ? `省略了参考做法的第 ${row.oldIndex + 1} 步` : row.text)}</p>${modified ? `<div id="standard-step-${index}" class="standard-tooltip" role="tooltip" hidden><strong>${row.oldIndex === null ? '参考做法' : `参考做法 · 第 ${row.oldIndex + 1} 步`}</strong><p>${escape(row.oldIndex === null ? '参考做法中没有此步骤。' : row.original)}</p></div>` : ''}</div></li>`;
  }).join('')}</ol>`;
}
function refreshMethod() {
  const panel = $('.method-panel');
  if (!panel) return;
  const d = dishById(state.detailId);
  panel.innerHTML = `${sourceMarkup(d)}${methodMarkup(d)}${d.tip ? `<aside class="cook-tip"><strong>下厨小贴士</strong>${escape(d.tip)}</aside>` : ''}`;
  const headerName = $('.dialog-hero .dish-chinese');
  const headerDescription = $('.dialog-hero .dish-description');
  if (headerName) headerName.textContent = `${coverRecipe(library, d).name}${(library.recipeVersions[d.id] || []).length ? ` · ${recipeVersions(library, d).length} 种做法` : ''}`;
  if (headerDescription) headerDescription.textContent = coverDescription(d);
}
function setStandardVisible(row, visible) {
  const tooltip = row?.querySelector('.standard-tooltip');
  if (!tooltip) return;
  tooltip.hidden = !visible;
  row.querySelector('.step-change').setAttribute('aria-expanded', String(visible));
}
function renderDetailBody() {
  const d = dishById(state.detailId);
  if (state.detailTab === 'recipe' && d.catalogOnly) {
    $('#detail-content').innerHTML = `<section class="method-panel catalog-method">${sourceMarkup(d)}<p class="method-hint">食材、用量、烹饪时间及书中做法尚未核实。可以收藏此菜，或补充自己的做法。</p>${methodMarkup(d)}</section>`;
    return;
  }
  if (state.detailTab === 'restaurants' && !d.restaurants.length) {
    $('#detail-content').innerHTML='<div class="empty-state"><h3>暂无已核实的餐馆</h3><p>本条目来自书籍菜名目录，尚未核对供应这道菜的餐馆。</p></div>';return;
  }
  if (state.detailTab === 'recipe') {
    $('#detail-content').innerHTML = `<div class="recipe-layout"><section class="ingredients-panel"><h3 class="subheading">食材清单</h3><div class="serving-control"><span>用餐人数</span><div class="stepper"><button data-action="servings" data-delta="-1" aria-label="减少人数" ${state.servings <= 1 ? 'disabled' : ''}>−</button><strong id="serving-count" aria-live="polite">${state.servings}</strong><button data-action="servings" data-delta="1" aria-label="增加人数" ${state.servings >= 12 ? 'disabled' : ''}>+</button></div></div><div class="ingredients-list">${ingredientsMarkup(d)}</div><p class="allergen-note">含有：${d.allergens.join('、')}。<br>请同时查看所用调味料的配料表。</p></section><section class="method-panel">${sourceMarkup(d)}${methodMarkup(d)}<aside class="cook-tip"><strong>下厨小贴士</strong>${d.tip}</aside></section></div>`;
  } else if (state.detailTab === 'restaurants') {
    $('#detail-content').innerHTML = `${restaurantNotice()}<div class="restaurant-grid">${d.restaurants.map(id => restaurantCard(restaurants.find(r => r.id === id))).join('')}</div>`;
  } else {
    $('#detail-content').innerHTML = `<h3 class="subheading">记下自己的做法。</h3><p class="notes-description">少一点辣椒，或记下一家喜欢的餐馆，把值得记住的细节留在这里。</p><label class="sr-only" for="dish-note">${d.name}的个人笔记</label><textarea class="note-textarea" id="dish-note" maxlength="5000" placeholder="下次做这道菜，我想试试……">${escape(library.notes[d.id] || '')}</textarea><div class="note-actions"><small id="note-save-state">笔记会自动保存在当前浏览器。</small><button class="secondary-button" data-action="save-note">${icon('check')} 保存笔记</button></div><section class="collection-checklist"><h3 class="subheading">加入收藏夹</h3><p class="notes-description">加入收藏夹后，这道菜也会出现在“全部收藏”中。</p>${library.collections.length ? library.collections.map(c => `<label class="collection-check"><input type="checkbox" data-collection-id="${escape(c.id)}" ${c.dishes.includes(d.id) ? 'checked' : ''}>${escape(c.name)}</label>`).join('') : '<p class="notes-description">试着建一个“工作日晚餐”或“下次想吃”的收藏夹吧。</p>'}<button class="text-button" data-action="new-collection" style="margin-top:12px">${icon('plus')} 新建收藏夹</button></section>`;
  }
}
function saveNote() {
  const field = $('#dish-note'); if (!field || !state.detailId || !$('#detail-dialog').open) return;
  library.notes[state.detailId] = field.value;
  const saved = persist();
  if ($('#note-save-state')) $('#note-save-state').textContent = saved ? '已保存在当前浏览器。' : '保存失败，请到“我的收藏”导出备份。';
}
function openCollectionDialog(mode = 'create') {
  state.collectionMode = mode;
  const current = library.collections.find(c => c.id === state.collection);
  const deleting = mode === 'delete', renaming = mode === 'rename';
  $('#collection-dialog').innerHTML = `<div class="small-dialog-head"><h2 id="collection-dialog-title">${deleting ? '删除这个收藏夹？' : renaming ? '给收藏夹换个名字。' : '留一个位置，装下好味道。'}</h2><button class="icon-button" data-action="close-dialog" aria-label="关闭收藏夹窗口">${icon('close')}</button></div><p>${deleting ? `将删除“${escape(current?.name)}”。其中的菜仍会保留在“全部收藏”中。` : renaming ? '为这个收藏夹取一个合适的名字。' : '整理工作日晚餐、周末大菜，或一直想尝试的菜品。'}</p><form id="collection-form">${!deleting ? `<label for="collection-name">收藏夹名称</label><input id="collection-name" name="name" placeholder="例如：周末想做的菜" maxlength="60" required value="${renaming ? escape(current?.name) : ''}" autocomplete="off"><div class="form-error" id="collection-error" role="alert"></div>` : ''}<div class="form-actions"><button class="secondary-button" type="button" data-action="close-dialog">取消</button><button class="primary-button" type="submit">${deleting ? '删除收藏夹' : renaming ? '保存名称' : '创建收藏夹'}</button></div></form>`;
  $('#collection-dialog').setAttribute('aria-labelledby', 'collection-dialog-title'); $('#collection-dialog').showModal();
  if (!deleting) $('#collection-name').focus();
}
function exportLibrary() {
  const blob = new Blob([JSON.stringify({ app: 'wei-cuisine', version: 1, ...library }, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob), anchor = document.createElement('a');
  anchor.href = url; anchor.download = 'wei-my-cookbook.json'; anchor.click();
  setTimeout(() => URL.revokeObjectURL(url), 2000); notify('菜谱备份已准备好。');
}
function importLibrary() {
  const input = document.createElement('input'); input.type = 'file'; input.accept = '.json,application/json';
  input.addEventListener('change', async () => {
    const file = input.files?.[0]; if (!file) return;
    if (file.size > 2_000_000) { notify('请选择小于 2 MB 的菜谱备份文件。'); return; }
    try {
      const parsed = JSON.parse(await file.text());
      if (parsed.app !== 'wei-cuisine' || parsed.version !== 1 || !Array.isArray(parsed.favorites)) throw new Error('Invalid format');
      const incoming = normalizeLibrary(parsed, dishes.map(d => d.id));
      library.favorites = [...new Set([...library.favorites, ...incoming.favorites])];
      for (const c of incoming.collections) {
        const existing = library.collections.find(item => item.id === c.id || item.name.toLowerCase() === c.name.toLowerCase());
        if (existing) existing.dishes = [...new Set([...existing.dishes, ...c.dishes])];
        else if (library.collections.length < 50) library.collections.push(c);
      }
      library.notes = { ...incoming.notes, ...library.notes };
      library.categories = { ...incoming.categories, ...library.categories };
      mergeRecipeLibrary(library, incoming);
      const saved = persist(); render(); if (saved) notify('备份已导入，原有收藏与笔记已保留。');
    } catch { notify('这不是有效的味集菜谱备份文件。'); }
  });
  input.click();
}

document.addEventListener('click', event => {
  const button = event.target.closest('[data-action]');
  if (!button) { if ($('#sidebar').classList.contains('open') && !event.target.closest('.sidebar')) { $('#sidebar').classList.remove('open'); renderTopbar(); } return; }
  const { action, id } = button.dataset;
  if (action === 'navigate') navigate(button.dataset.page);
  else if (action === 'menu') { $('#sidebar').classList.toggle('open'); renderTopbar(); }
  else if (action === 'cuisine' || action === 'all-cuisines') {
    state.cuisine = action === 'all-cuisines' || (action === 'cuisine' && state.cuisine === id) ? 'all' : id; renderMain();
  } else if (action === 'filters') { state.filtersOpen = !state.filtersOpen; renderMain(); $('[data-action="filters"]').focus(); }
  else if (action === 'reset-filters') { resetFilters(); renderMain(); }
  else if (action === 'add-ingredient') { commitIngredientInput(); $('#ingredient-input')?.focus(); }
  else if (action === 'remove-ingredient') {
    state.ingredients.splice(Number(button.dataset.index), 1);
    if ($('#ingredient-tags')) $('#ingredient-tags').innerHTML = ingredientTags();
    renderResults(); ($('#ingredient-input') || $('[data-action="filters"]'))?.focus();
  } else if (action === 'clear-ingredient-draft') { state.ingredientDraft = ''; renderResults(); }
  else if (action === 'clear-flavor') {
    state.flavor = 'all'; if ($('[data-filter="flavor"]')) $('[data-filter="flavor"]').value = 'all'; renderResults();
  }
  else if (action === 'clear-search') { state.query = ''; $('#gallery-search').value = ''; renderResults(); $('#gallery-search').focus(); }
  else if (action === 'view') { state.view = button.dataset.view; renderMain(); $(`[data-view="${state.view}"]`).focus(); }
  else if (action === 'favorite') {
    const inDialog = Boolean(button.closest('dialog'));
    const saved = toggleFavorite(library, id);
    const stored = persist(); renderSidebar(); renderMain();
    if (inDialog) {
      button.outerHTML = favoriteButton(dishById(id));
      $('#detail-dialog [data-action="favorite"]').focus();
      if (state.detailTab === 'notes') { saveNote(); renderDetailBody(); }
    } else { $(`[data-dish="${id}"] [data-action="favorite"]`)?.focus(); }
    if (stored) notify(saved ? `已收藏「${dishById(id).name}」。` : '已从收藏和收藏夹中移除。');
  } else if (action === 'dish' || action === 'dish-restaurants') openDish(id, action === 'dish-restaurants' ? 'restaurants' : 'recipe');
  else if (action === 'close-dialog') { saveNote(); button.closest('dialog').close(); }
  else if (action === 'detail-tab') {
    saveNote(); state.detailTab = button.dataset.tab;
    $$('.dialog-tab').forEach(tab => { const active = tab.dataset.tab === state.detailTab; tab.classList.toggle('active', active); tab.setAttribute('aria-selected', active); tab.tabIndex = active ? 0 : -1; });
    $('#detail-content').setAttribute('aria-labelledby', `tab-${state.detailTab}`); renderDetailBody();
  } else if (action === 'servings') {
    const checked = [...document.querySelectorAll('[data-ingredient]:checked')].map(el => el.dataset.ingredient);
    state.servings = Math.min(12, Math.max(1, state.servings + Number(button.dataset.delta)));
    $('.ingredients-list').innerHTML = ingredientsMarkup(dishById(state.detailId));
    checked.forEach(index => { $(`[data-ingredient="${index}"]`).checked = true; });
    $('#serving-count').textContent = state.servings;
    $('[data-action="servings"][data-delta="-1"]').disabled = state.servings <= 1;
    $('[data-action="servings"][data-delta="1"]').disabled = state.servings >= 12;
  } else if (action === 'collection') navigate('favorites', id === 'all' ? null : id);
  else if (action === 'new-collection') openCollectionDialog();
  else if (action === 'rename-collection') openCollectionDialog('rename');
  else if (action === 'delete-collection') openCollectionDialog('delete');
  else if (action === 'save-note') { saveNote(); if (storageAvailable) notify('下厨笔记已保存。'); }
  else if (action === 'edit-method' || action === 'new-method') {
    const d = dishById(state.detailId);
    const current = recipeVersions(library, d).find(v => v.id === state.recipeId) || coverRecipe(library, d);
    const isNew = action === 'new-method' || current.id === 'standard';
    recipeDrafts.set(d.id, { id: isNew ? crypto.randomUUID() : current.id, name: isNew ? '' : current.name, steps: current.steps.length ? [...current.steps] : [''], isNew });
    refreshMethod(); $('#recipe-name')?.focus();
  } else if (action === 'cancel-method') {
    recipeDrafts.delete(state.detailId); refreshMethod(); $('[data-action="edit-method"]')?.focus();
  } else if (action === 'reset-method') {
    recipeDrafts.get(state.detailId).steps = dishes.find(d => d.id === state.detailId).steps.length ? [...dishes.find(d => d.id === state.detailId).steps] : [''];
    refreshMethod(); $('[data-recipe-step]')?.focus();
  } else if (action === 'add-step') {
    const draft = recipeDrafts.get(state.detailId);
    if (draft.steps.length < 30) draft.steps.push('');
    refreshMethod(); [...$$('[data-recipe-step]')].at(-1)?.focus();
  } else if (action === 'remove-step') {
    const draft = recipeDrafts.get(state.detailId);
    if (draft.steps.length > 1) draft.steps.splice(Number(button.dataset.index), 1);
    refreshMethod(); $('[data-recipe-step]')?.focus();
  } else if (action === 'cover-method') {
    library.coverRecipes[state.detailId] = state.recipeId;
    const saved = persist(); renderMain(); refreshMethod();
    if (saved) notify('已设为封面做法。');
  } else if (action === 'delete-method') {
    const d = dishById(state.detailId);
    if (removeRecipeVersion(library, d, state.recipeId)) {
      state.recipeId = coverRecipe(library, d).id;
      const saved = persist(); renderMain(); refreshMethod();
      if (saved) notify('做法已删除。');
    }
  } else if (action === 'standard-step') setStandardVisible(button.closest('.recipe-step'), true);
  else if (action === 'export') exportLibrary();
  else if (action === 'import') importLibrary();
});
document.addEventListener('input', event => {
  if (event.target.id === 'ingredient-input') {
    state.ingredientDraft = event.target.value;
    if (event.isComposing) return;
    if (/[,，、;；]/u.test(state.ingredientDraft)) commitIngredientInput(); else renderResults();
  }
  if (event.target.matches('[data-recipe-step]')) {
    const draft = recipeDrafts.get(state.detailId);
    if (draft) draft.steps[Number(event.target.dataset.recipeStep)] = event.target.value;
    if ($('#recipe-edit-error')) $('#recipe-edit-error').textContent = '';
  }
  if (event.target.id === 'recipe-name') recipeDrafts.get(state.detailId).name = event.target.value;
  if (event.target.id === 'gallery-search') { state.query = event.target.value; renderResults(); }
  if (event.target.id === 'dish-note') {
    library.notes[state.detailId] = event.target.value;
    $('#note-save-state').textContent = '正在保存……';
    clearTimeout(noteTimer); noteTimer = setTimeout(saveNote, 400);
  }
});
document.addEventListener('change', event => {
  const el = event.target;
  if (el.id === 'recipe-version') { state.recipeId = el.value; refreshMethod(); $('#recipe-version')?.focus(); }
  if (el.id === 'sort-select') { state.sort = el.value; renderResults(); }
  if (el.dataset.filter) {
    state[el.dataset.filter] = el.dataset.filter === 'maxTime' ? Number(el.value) : el.value;
    renderResults();
  }
  if (el.id === 'city-select') { state.city = el.value; renderResults(); }
  if (el.id === 'restaurant-cuisine') { state.cuisine = el.value; renderResults(); }
  if (el.id === 'dish-category' && state.detailId && cuisines.some(c => c.id === el.value)) {
    saveNote();
    const original = dishes.find(d => d.id === state.detailId);
    if (el.value === original.cuisine) delete library.categories[state.detailId];
    else library.categories[state.detailId] = el.value;
    const saved = persist();
    renderMain();
    $('#dish-category').focus();
    if (saved) notify(`已归入「${cuisineById(el.value).name}」。`);
  }
  if (el.dataset.collectionId) {
    const collection = library.collections.find(c => c.id === el.dataset.collectionId); if (!collection) return;
    if (el.checked) { if (!collection.dishes.includes(state.detailId)) collection.dishes.push(state.detailId); if (!library.favorites.includes(state.detailId)) library.favorites.push(state.detailId); }
    else collection.dishes = collection.dishes.filter(id => id !== state.detailId);
    persist(); renderSidebar(); renderMain();
    $('#detail-dialog [data-action="favorite"]').outerHTML = favoriteButton(dishById(state.detailId));
  }
});
document.addEventListener('submit', event => {
  if (event.target.id === 'recipe-edit-form') {
    event.preventDefault();
    const d = dishes.find(item => item.id === state.detailId);
    const steps = [...$$('[data-recipe-step]')].map(el => el.value);
    const draft = recipeDrafts.get(d.id);
    const error = saveRecipeVersion(library, d, { ...draft, name: $('#recipe-name').value, steps });
    if (error) { $('#recipe-edit-error').textContent = error; return; }
    state.recipeId = draft.id;
    const saved = persist(); recipeDrafts.delete(d.id); renderMain(); refreshMethod();
    $('[data-action="edit-method"]')?.focus();
    if (saved) notify('做法已保存，可设为封面。');
    return;
  }
  if (event.target.id !== 'collection-form') return;
  event.preventDefault();
  const mode = state.collectionMode;
  if (mode === 'delete') {
    library.collections = library.collections.filter(c => c.id !== state.collection);
    state.collection = null; history.replaceState(null, '', '#favorites');
  } else {
    const name = $('#collection-name').value.trim();
    if (!name) { $('#collection-error').textContent = '请填写收藏夹名称。'; return; }
    if (library.collections.some(c => c.name.toLowerCase() === name.toLowerCase() && (mode !== 'rename' || c.id !== state.collection))) { $('#collection-error').textContent = '已存在同名收藏夹，请换个名称。'; return; }
    if (mode === 'create') {
      if (library.collections.length >= 50) { $('#collection-error').textContent = '最多可创建 50 个收藏夹。'; return; }
      const id = crypto.randomUUID(); library.collections.push({ id, name, dishes: [] });
      if (!$('#detail-dialog').open && state.page === 'favorites') { state.collection = id; history.replaceState(null, '', `#favorites/${id}`); }
    } else { const c = library.collections.find(c => c.id === state.collection); if (c) c.name = name; }
  }
  const saved = persist(); $('#collection-dialog').close(); render();
  if ($('#detail-dialog').open && state.detailTab === 'notes') { saveNote(); renderDetailBody(); }
  if (saved) notify(mode === 'delete' ? '收藏夹已删除，收藏的菜品仍然保留。' : mode === 'rename' ? '收藏夹已重命名。' : '新收藏夹已创建。');
});
document.addEventListener('keydown', event => {
  if (event.target.id === 'ingredient-input') {
    if (event.isComposing || event.keyCode === 229) return;
    if (event.key === 'Enter') { event.preventDefault(); commitIngredientInput(); return; }
    if (event.key === 'Backspace' && !event.target.value && state.ingredients.length) {
      event.preventDefault(); state.ingredients.pop(); $('#ingredient-tags').innerHTML = ingredientTags(); renderResults(); return;
    }
  }
  if (event.key === 'Escape' && $('.standard-tooltip:not([hidden])')) {
    event.preventDefault(); event.stopPropagation();
    $$('.step-modified').forEach(row => setStandardVisible(row, false)); return;
  }
  if (event.target.matches('.dialog-tab') && ['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) {
    event.preventDefault();
    const tabs = [...$$('.dialog-tab')], index = tabs.indexOf(event.target);
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
    tabs[next].click(); tabs[next].focus();
  }
  if (event.key === '/' && !event.target.matches('input,textarea,select') && !$('dialog[open]')) { event.preventDefault(); $('#gallery-search')?.focus(); }
  if (event.key === 'Escape' && $('#sidebar').classList.contains('open')) { $('#sidebar').classList.remove('open'); renderTopbar(); }
});
document.addEventListener('compositionend', event => {
  if (event.target.id !== 'ingredient-input') return;
  state.ingredientDraft = event.target.value;
  if (/[,，、;；]/u.test(state.ingredientDraft)) commitIngredientInput(); else renderResults();
});
document.addEventListener('pointerover', event => {
  const row = event.target.closest('.step-modified');
  if (row && !row.contains(event.relatedTarget)) setStandardVisible(row, true);
});
document.addEventListener('pointerout', event => {
  const row = event.target.closest('.step-modified');
  if (row && !row.contains(event.relatedTarget) && !row.contains(document.activeElement)) setStandardVisible(row, false);
});
document.addEventListener('focusin', event => {
  if (event.target.matches('.step-change')) setStandardVisible(event.target.closest('.recipe-step'), true);
});
document.addEventListener('focusout', event => {
  const row = event.target.closest('.step-modified');
  if (row && !row.contains(event.relatedTarget) && !row.matches(':hover')) setStandardVisible(row, false);
});
$$('dialog').forEach(dialog => {
  dialog.addEventListener('click', event => { if (event.target === dialog) { const bounds = dialog.getBoundingClientRect(); if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) { saveNote(); dialog.close(); } } });
  dialog.addEventListener('cancel', () => saveNote());
  if (dialog.id === 'detail-dialog') dialog.addEventListener('close', () => { if (!dialog.open) { clearTimeout(noteTimer); dialog.innerHTML = ''; state.detailId = null; } });
});
window.addEventListener('hashchange', routeFromHash);
window.addEventListener('pagehide', () => { if ($('#dish-note')) saveNote(); });
window.addEventListener('storage', event => { if (event.key === STORAGE_KEY) { try { library = normalizeLibrary(JSON.parse(event.newValue), dishes.map(d => d.id)); render(); if ($('#detail-dialog').open && state.detailTab !== 'notes') renderDetail(); } catch {} } });
routeFromHash();
