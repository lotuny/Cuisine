import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { cuisines, dishes, restaurants } from '../public/data.js';
const research = new URL('../../book-research/', import.meta.url);
const clean = s => s.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n))).replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
const regions = [
 ['beijing','北京菜','京','北京','#967154','4119251','9787500501831','bj.html'],
 ['tianjin','天津菜','津','天津','#85805c','5420205','9787500521136'],
 ['shanghai','上海菜','沪','上海','#7d7f6b','35881503','9787500517306'],
 ['hubei','湖北菜','鄂','湖北','#738880','20391488','9787500508557'],
 ['henan','河南菜','豫','河南','#a08056','20391491','9787500511168'],
 ['shaanxi','陕西菜','陕','陕西','#a27b5f','3934760','9787500517351'],
 ['yunnan','云南菜','滇','云南','#758b65','35881501','9787500520726'],
 ['liaoning','辽宁菜','辽','辽宁','#7b8491','35881499','9787500527473'],
 ['heilongjiang','黑龙江菜','黑','黑龙江','#718893','35881502','9787500527367'],
];
const volumeSpecs = [
 ['sichuan','四川','5420206','9787500512684'],['cantonese','广东','36044373','9787500513667'],
 ['shandong','山东','20391487','9787500510598','shan.html'],['jiangsu','江苏','35881500','9787500510505'],
 ['zhejiang','浙江','20391490','9787500502494'],['fujian','福建','4119259','9787500501824'],
 ['hunan','湖南','5420208','9787500502135'],['anhui','安徽','20391489','9787500501848'],
 ...regions.map(([id,name,char,region,color,subject,isbn,file])=>[id,region,subject,isbn,file]),
 ['vegetarian',null,'5420207','9787500518839'],
];
const volumes = volumeSpecs.map(([id,region,subject,isbn,file])=>({id,title:`中国名菜谱·${region ? region+'风味' : '素菜'}`,region,cuisine:region?id:null,isbn,url:`https://book.douban.com/subject/${subject}/`,file:file||`book-${subject}.html`,coverage:'metadata-only',coverageNote:'已核实分册书目，尚未获得可核对的完整菜品目录。',entries:[]}));
const shan = volumes.find(v=>v.id==='shandong');
const html=await readFile(new URL('shan.html',research),'utf8');
const toc=html.match(/id="dir_\d+_full"[^>]*>([\s\S]*?)<\/div>/)?.[1];
if(!toc)throw new Error('山东分册目录缺失');
let section='';
for(const line of toc.split(/<br\s*\/?>/).map(clean)){
 if(!line||line.includes('收起')||line==='概述'||line.startsWith('附录'))continue;
 if(/^[一二三四五六七八九十]+、/.test(line)){section=line;continue;}
 shan.entries.push({name:line,section,sourceUrl:shan.url,locator:`公开目录：${section}`,nameNeedsReview:false});
}
shan.coverage='public-toc'; shan.coverageNote='已导入公开书目目录中的菜名，尚未逐页核对纸书及做法。';
const previews=[
 ['beijing','toc-beijing.html','https://max.book118.com/html/2015/0707/8045005073000024.shtm'],
 ['zhejiang','toc-zhejiang.html','https://max.book118.com/html/2015/0707/20593655.shtm'],
 ['henan','toc-henan.html','https://max.book118.com/html/2017/1115/140118052.shtm'],
];
for(const [id,file,url]of previews){
 const v=volumes.find(v=>v.id===id);
 const text=await readFile(new URL(file,research),'utf8');
 const article=text.match(/<div class="article">([\s\S]*?)<\/div>/)?.[1]||'';
 let section='';
 for(const line of article.split(/\r?\n/).map(clean)){
   if(/^(山珍海味菜|肉菜|禽蛋菜|水产菜|植物菜|其他菜)$/.test(line)){section=line;continue;}
   const m=line.match(/^(\d+)[．.、]\s*(.+)$/u);if(!m)continue;
   const rawName=m[2],name=rawName.replace(/[？?]$/,'');
   v.entries.push({name,rawName,section,sourceUrl:url,locator:`公开目录第 ${m[1]} 项（非页码）`,nameNeedsReview:/[？?]/.test(rawName)||name==='白字焖肉'});
 }
 if(!v.entries.length)throw new Error('目录未提取到菜名：'+id);
 v.coverage='partial-toc';v.coverageNote='仅导入公开预览可见的部分目录，后续条目待补充。';
}
for(const r of regions){if(!cuisines.some(c=>c.id===r[0]))cuisines.splice(cuisines.findIndex(c=>c.id==='home-style'),0,{id:r[0],name:r[1],chinese:r[1],character:r[2],region:r[3],color:r[4],flavor:`《中国名菜谱》${r[3]}风味`,traditional:false,geographic:true});}
const base = dishes.filter(d=>!d.catalogOnly);
for(const d of base){d.sources=[];d.recipeOrigin='应用预置参考做法，未据《中国名菜谱》核对；不是书中原文。';}
const byKey=new Map(base.map(d=>[`${d.cuisine}:${d.name}`,d]));
let imported=0;
for(const v of volumes){
 v.entries=[...new Map(v.entries.map(e=>[e.name,e])).values()].sort((a,b)=>a.name.localeCompare(b.name,'zh-CN'));
 for(const e of v.entries){
   const key=`${v.cuisine}:${e.name}`;
   let d=byKey.get(key);
   if(!d){d={id:'book-'+v.cuisine+'-'+createHash('sha256').update(key).digest('hex').slice(0,12),name:e.name,chinese:e.name,cuisine:v.cuisine,description:'',minutes:null,difficulty:null,heat:null,flavors:[],tags:['仅菜名'],servings:null,restaurants:[],ingredients:[],steps:[],tip:'',allergens:[],catalogOnly:true,sources:[],recipeOrigin:'尚未核实书中做法。'};base.push(d);byKey.set(key,d);imported++;}
   d.sources.push({volumeId:v.id,title:v.title,isbn:v.isbn,url:e.sourceUrl,bookUrl:v.url,locator:e.locator,section:e.section,nameNeedsReview:e.nameNeedsReview,recipeVerified:false});
 }
 v.importedCount=v.entries.length;delete v.file;
}
const catalog={series:'中国名菜谱',publisher:'中国财政经济出版社',checkedOn:'2026-10-21',complete:false,scope:'1980—1990年代地方风味分册；未混入早期分辑本、《中国菜谱》或《中国名菜》其他系列。',knownVolumes:volumes.length,importedNameCount:volumes.reduce((n,v)=>n+v.importedCount,0),newDishCount:imported,volumes};
await mkdir(new URL('../public/catalog/',import.meta.url),{recursive:true});
await writeFile(new URL('../public/catalog/book-catalog.json',import.meta.url),JSON.stringify(catalog,null,2));
await writeFile(new URL('../public/catalog.js',import.meta.url),'export const bookCatalog = '+JSON.stringify({...catalog,volumes:volumes.map(({entries,...v})=>v)},null,2)+';');
await writeFile(new URL('../public/data.js',import.meta.url),['// 分类与菜品标识稳定，保留已有收藏。新增条目只来自可核实的菜名目录。','export const cuisines = '+JSON.stringify(cuisines,null,2)+';','export const restaurants = '+JSON.stringify(restaurants,null,2)+';','export const dishes = '+JSON.stringify(base,null,2)+';'].join(String.fromCharCode(10,10)));
const report=['# 《中国名菜谱》导入记录','',`核对日期：${catalog.checkedOn}。本次确认 ${volumes.length} 个分册书目，导入 ${catalog.importedNameCount} 个有目录来源的菜名，新增 ${imported} 道菜。`, '', '**未完成全套导入。** 仅山东分册取得完整显示的公开目录，北京、浙江、河南仅取得部分目录；其余分册没有可核实的菜名清单。不能以地方常见菜代替书中目录。', '', '原有 16 道菜的做法继续保留，但标记为应用预置参考做法，不冒充书中做法。新增菜品只保留名称、地域和来源，不推测食材、用时、口味、餐馆或烹饪步骤。', '', '同名跨地域菜保留为不同条目；同地域同名合并来源。条目标识由地域和菜名生成，后续补充不影响收藏。', '', '| 分册 | 菜名数 | 核对状态 | 书目 |','|---|---:|---|---|',...volumes.map(v=>`| ${v.title} | ${v.importedCount} | ${v.coverageNote} | [书目](${v.url}) |`),'','待补充：各分册完整目录或可读取的合法书籍文件。文字模糊的目录项保留来源并标记“菜名待核对”。'];
await writeFile(new URL('../CATALOG_IMPORT.md',import.meta.url),report.join(String.fromCharCode(10)));
console.log(JSON.stringify({newDishes:imported,total:base.length,sourceNames:catalog.importedNameCount,volumes:volumes.map(v=>({id:v.id,count:v.importedCount,coverage:v.coverage}))},null,2));
