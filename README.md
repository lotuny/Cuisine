# 味集 — 一餐一味，寻味中国

中文、无图片的本地菜谱应用，包含公共菜谱、个人收藏和餐馆指南。按川、粤、鲁、苏、浙、闽、湘、徽八大菜系分类，另设“家常菜”收纳菜系不明确的菜。

现有 346 道菜：16 道应用预置参考菜谱，以及 330 道从《中国名菜谱》公开目录新增的菜名。共关联 331 个目录菜名（东坡肉合并到原有条目），**尚未完成全套导入**。已建立北京、天津、上海、湖北、河南、陕西、云南、辽宁、黑龙江独立分类。未取得目录的分类保持为空，未核实的做法、食材和餐馆保持为空。

分册覆盖范围见 [CATALOG_IMPORT.md](CATALOG_IMPORT.md)，可追溯目录在 `public/catalog/book-catalog.json`。`scripts/import-book-catalog.mjs` 根据工作区 `../book-research` 已核对的公开网页生成数据，不获取书籍全文，也不把应用原有做法冒充书中原文。

“家常菜”是内置的普通菜品分类，与其他分类使用相同的浏览和筛选方式。打开菜品后，可直接在详情顶部修改“菜品分类”；“我的笔记”只用于记录心得和整理收藏。分类调整会保存在当前浏览器，包含在导出备份中；旧版收藏与笔记可继续使用。

打开菜品 → 做法步骤，可新增、命名、修改多种做法，并增减步骤。选择一种做法后点击“设为封面”，菜品卡片与下次打开时会优先展示它。标准做法始终保留；修改标准做法会另存一份个人版本。

不同的步骤会标为“已修改”“新增”或“已省略”。鼠标悬停、键盘聚焦或手机点击标记，即可查看对应标准步骤。个人做法与封面选择保存在当前浏览器，并随备份一起导出；删除封面做法后会回到标准做法。已移除菜系指南。

## GitHub Pages

部署地址：https://lotuny.github.io/Cuisine/ （成功部署后可访问）

推送到 `main` 分支后，GitHub Actions 会运行测试并将 `public/` 部署到 GitHub Pages。网页为纯静态应用，无需在服务器运行 Node.js。

需在仓库的 Settings → Pages 中选择 GitHub Actions。私有仓库需要支持 GitHub Pages 的付费套餐；不支持时，需先升级套餐或将仓库设为公开。

收藏、笔记、自定义做法保存在各设备的浏览器中，不会自动同步。可在“我的收藏”导出备份，再到线上网站或其他设备导入。

## 本地运行

Requires Node.js 20 or newer. No installation or external dependencies.

```powershell
git clone https://github.com/lotuny/Cuisine.git
cd Cuisine
npm start
```

Open http://127.0.0.1:4173. Set the `PORT` environment variable to use another port.

## Included

- 16 recipes with quantities, adjustable servings, ingredient checklists and step-by-step instructions.
- Search in English or Chinese, filter by cuisine, time, difficulty or heat, and switch gallery layouts.
- 16 regional restaurant suggestions with city filters, map links and menu lookup links. Restaurant suggestions are editorial starting points, not verified live rankings; confirm branches, menus and hours before a visit.
- Favorite dishes, create/rename/delete personal collections and save cooking notes.
- Browser-local persistence with JSON export/import. Import merges favorites and preserves existing notes. No account or cloud synchronization.
- Responsive layouts, keyboard navigation, accessible dialogs and reduced-motion support.

## Validation

```powershell
npm test
# With the app running, using locally installed Chrome on Windows:
node tests/browser-check.mjs
```

Browser checks use Chrome’s debugging protocol without installing testing packages. They use a separate browser profile and leave screenshots in `test-artifacts`.

## Files

The app is served from `public`. Recipe, cuisine and restaurant content lives in `public/data.js`. No remote fonts, pictures or scripts are loaded. External links open only when selected.
