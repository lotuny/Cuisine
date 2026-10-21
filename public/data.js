// 分类与菜品标识稳定，保留已有收藏。新增条目只来自可核实的菜名目录。

export const cuisines = [
  {
    "id": "sichuan",
    "name": "川菜",
    "chinese": "川菜",
    "character": "川",
    "region": "四川",
    "flavor": "麻辣鲜香，百菜百味",
    "color": "#a14c3b",
    "description": "以辣椒、花椒、豆瓣和豆豉构筑层次，既有热烈的麻辣，也有清鲜醇厚的滋味。",
    "englishName": "Sichuan",
    "traditional": true
  },
  {
    "id": "cantonese",
    "name": "粤菜",
    "chinese": "粤菜",
    "character": "粤",
    "region": "广东",
    "flavor": "清鲜细腻，讲究本味",
    "color": "#73845b",
    "description": "注重食材新鲜与火候，以蒸、烧、炒呈现本味，饮茶与点心也是不可缺少的一部分。",
    "englishName": "Cantonese",
    "traditional": true
  },
  {
    "id": "shandong",
    "name": "鲁菜",
    "chinese": "鲁菜",
    "character": "鲁",
    "region": "山东",
    "flavor": "咸鲜醇厚，葱香浓郁",
    "color": "#9c7948",
    "description": "擅长海鲜、清汤与葱烧技法，讲究刀工和火候，是北方饮食的重要传统。",
    "englishName": "Shandong",
    "traditional": true
  },
  {
    "id": "jiangsu",
    "name": "苏菜",
    "chinese": "苏菜",
    "character": "苏",
    "region": "江苏",
    "flavor": "清雅平和，鲜中带甜",
    "color": "#657f83",
    "description": "扬州、苏州、南京各有风格，精细刀工、温和炖煮与协调的调味构成苏菜的底色。",
    "englishName": "Jiangsu",
    "traditional": true
  },
  {
    "id": "zhejiang",
    "name": "浙菜",
    "chinese": "浙菜",
    "character": "浙",
    "region": "浙江",
    "flavor": "清鲜爽嫩，顺应时令",
    "color": "#65826f",
    "description": "从杭州到宁波，善用时令蔬菜、河鲜与海鲜，以恰到好处的调味突出食材。",
    "englishName": "Zhejiang",
    "traditional": true
  },
  {
    "id": "fujian",
    "name": "闽菜",
    "chinese": "闽菜",
    "character": "闽",
    "region": "福建",
    "flavor": "鲜醇清香，重汤善烩",
    "color": "#698795",
    "description": "山珍与海味相遇，汤菜层次丰富，红糟、酒香与柔和的酸甜各有特色。",
    "englishName": "Fujian",
    "traditional": true
  },
  {
    "id": "hunan",
    "name": "湘菜",
    "chinese": "湘菜",
    "character": "湘",
    "region": "湖南",
    "flavor": "香辣酸鲜，烟火十足",
    "color": "#a56349",
    "description": "鲜椒和剁椒带来直接的辣味，腌制、熏制与发酵则赋予菜肴更深的香气。",
    "englishName": "Hunan",
    "traditional": true
  },
  {
    "id": "anhui",
    "name": "徽菜",
    "chinese": "徽菜",
    "character": "徽",
    "region": "安徽",
    "flavor": "山野本味，擅长烧炖",
    "color": "#86724f",
    "description": "源于徽州山地的饮食传统，善用笋干、山蔬等食材，以慢烧细炖成就醇厚滋味。",
    "englishName": "Anhui",
    "traditional": true
  },
  {
    "id": "beijing",
    "name": "北京菜",
    "chinese": "北京菜",
    "character": "京",
    "region": "北京",
    "color": "#967154",
    "flavor": "《中国名菜谱》北京风味",
    "traditional": false,
    "geographic": true
  },
  {
    "id": "tianjin",
    "name": "天津菜",
    "chinese": "天津菜",
    "character": "津",
    "region": "天津",
    "color": "#85805c",
    "flavor": "《中国名菜谱》天津风味",
    "traditional": false,
    "geographic": true
  },
  {
    "id": "shanghai",
    "name": "上海菜",
    "chinese": "上海菜",
    "character": "沪",
    "region": "上海",
    "color": "#7d7f6b",
    "flavor": "《中国名菜谱》上海风味",
    "traditional": false,
    "geographic": true
  },
  {
    "id": "hubei",
    "name": "湖北菜",
    "chinese": "湖北菜",
    "character": "鄂",
    "region": "湖北",
    "color": "#738880",
    "flavor": "《中国名菜谱》湖北风味",
    "traditional": false,
    "geographic": true
  },
  {
    "id": "henan",
    "name": "河南菜",
    "chinese": "河南菜",
    "character": "豫",
    "region": "河南",
    "color": "#a08056",
    "flavor": "《中国名菜谱》河南风味",
    "traditional": false,
    "geographic": true
  },
  {
    "id": "shaanxi",
    "name": "陕西菜",
    "chinese": "陕西菜",
    "character": "陕",
    "region": "陕西",
    "color": "#a27b5f",
    "flavor": "《中国名菜谱》陕西风味",
    "traditional": false,
    "geographic": true
  },
  {
    "id": "yunnan",
    "name": "云南菜",
    "chinese": "云南菜",
    "character": "滇",
    "region": "云南",
    "color": "#758b65",
    "flavor": "《中国名菜谱》云南风味",
    "traditional": false,
    "geographic": true
  },
  {
    "id": "liaoning",
    "name": "辽宁菜",
    "chinese": "辽宁菜",
    "character": "辽",
    "region": "辽宁",
    "color": "#7b8491",
    "flavor": "《中国名菜谱》辽宁风味",
    "traditional": false,
    "geographic": true
  },
  {
    "id": "heilongjiang",
    "name": "黑龙江菜",
    "chinese": "黑龙江菜",
    "character": "黑",
    "region": "黑龙江",
    "color": "#718893",
    "flavor": "《中国名菜谱》黑龙江风味",
    "traditional": false,
    "geographic": true
  },
  {
    "id": "home-style",
    "name": "家常菜",
    "chinese": "家常菜",
    "character": "家",
    "region": "日常餐桌",
    "flavor": "不拘菜系，熟悉的家常味",
    "color": "#7b8160",
    "traditional": false,
    "description": "收录菜系不明确、融合多地做法或适合日常餐桌的菜品。"
  }
];

export const restaurants = [
  {
    "id": "chen",
    "name": "陈麻婆豆腐",
    "chinese": "陈麻婆豆腐",
    "city": "成都",
    "cuisine": "sichuan",
    "specialty": "以麻婆豆腐闻名的老字号川菜馆。",
    "note": "适合从一道传统麻婆豆腐认识川味，出发前请确认具体门店和营业时间。",
    "englishName": "Chen Mapo Tofu",
    "englishCity": "Chengdu"
  },
  {
    "id": "ma",
    "name": "马旺子",
    "chinese": "马旺子",
    "city": "成都",
    "cuisine": "sichuan",
    "specialty": "擅长经典川菜的老牌餐馆。",
    "note": "可从招牌川菜入手，点餐时询问当天供应的传统菜式。",
    "englishName": "Ma Wang Zi",
    "englishCity": "Chengdu"
  },
  {
    "id": "tao",
    "name": "陶陶居",
    "chinese": "陶陶居",
    "city": "广州",
    "cuisine": "cantonese",
    "specialty": "广式早茶、传统点心与经典粤菜。",
    "note": "源于广州茶楼文化，各分店的菜单和候位情况可能不同。",
    "englishName": "Tao Tao Ju",
    "englishCity": "Guangzhou"
  },
  {
    "id": "bing",
    "name": "炳胜品味",
    "chinese": "炳胜品味",
    "city": "广州",
    "cuisine": "cantonese",
    "specialty": "以粤式烧味、海鲜和时令菜见长。",
    "note": "适合品尝经典粤味，请先查看计划前往门店的现行菜单。",
    "englishName": "Bing Sheng Pin Wei",
    "englishCity": "Guangzhou"
  },
  {
    "id": "ju",
    "name": "聚丰德",
    "chinese": "聚丰德",
    "city": "济南",
    "cuisine": "shandong",
    "specialty": "传统鲁菜与山东宴席菜。",
    "note": "预订时可询问时令鱼鲜与店内招牌鲁菜。",
    "englishName": "Ju Feng De",
    "englishCity": "Jinan"
  },
  {
    "id": "feng",
    "name": "丰泽园",
    "chinese": "丰泽园",
    "city": "北京",
    "cuisine": "shandong",
    "specialty": "以鲁菜为根基的北京老字号。",
    "note": "葱烧类菜式颇具特色，具体菜品请直接向门店确认。",
    "englishName": "Feng Ze Yuan",
    "englishCity": "Beijing"
  },
  {
    "id": "song",
    "name": "松鹤楼",
    "chinese": "松鹤楼",
    "city": "苏州",
    "cuisine": "jiangsu",
    "specialty": "传统苏帮菜、河鲜与柔和的甜鲜风味。",
    "note": "请选择提供正餐的门店，部分分店以面食为主。",
    "englishName": "Song He Lou",
    "englishCity": "Suzhou"
  },
  {
    "id": "ye",
    "name": "冶春",
    "chinese": "冶春",
    "city": "扬州",
    "cuisine": "jiangsu",
    "specialty": "扬州早茶与淮扬风味。",
    "note": "早茶是不错的入门选择；若想点热菜，请确认门店提供正餐。",
    "englishName": "Ye Chun",
    "englishCity": "Yangzhou"
  },
  {
    "id": "lou",
    "name": "楼外楼",
    "chinese": "楼外楼",
    "city": "杭州",
    "cuisine": "zhejiang",
    "specialty": "西湖畔的杭帮菜老字号。",
    "note": "可了解东坡肉等杭州名菜，热门时段建议提前预订。",
    "englishName": "Lou Wai Lou",
    "englishCity": "Hangzhou"
  },
  {
    "id": "zhi",
    "name": "知味观",
    "chinese": "知味观",
    "city": "杭州",
    "cuisine": "zhejiang",
    "specialty": "杭州小吃、点心与浙式家常菜。",
    "note": "提供正餐的门店通常有更丰富的热菜选择。",
    "englishName": "Zhi Wei Guan",
    "englishCity": "Hangzhou"
  },
  {
    "id": "juchun",
    "name": "聚春园",
    "chinese": "聚春园",
    "city": "福州",
    "cuisine": "fujian",
    "specialty": "传统福州菜与闽式汤品。",
    "note": "适合认识闽菜风味，部分宴席菜需要提前预订。",
    "englishName": "Ju Chun Yuan",
    "englishCity": "Fuzhou"
  },
  {
    "id": "lao",
    "name": "老福洲",
    "chinese": "老福洲",
    "city": "福州",
    "cuisine": "fujian",
    "specialty": "福州家常菜与当地酸甜风味。",
    "note": "可询问荔枝肉和时令菜，不同分店的供应可能有差异。",
    "englishName": "Lao Fu Zhou",
    "englishCity": "Fuzhou"
  },
  {
    "id": "fei",
    "name": "费大厨",
    "chinese": "费大厨",
    "city": "长沙",
    "cuisine": "hunan",
    "specialty": "以现炒辣椒炒肉为招牌的湘菜馆。",
    "note": "招牌辣椒炒肉适合作为湘菜入门，整体氛围热闹随意。",
    "englishName": "Fei Da Chu",
    "englishCity": "Changsha"
  },
  {
    "id": "huo",
    "name": "火宫殿",
    "chinese": "火宫殿",
    "city": "长沙",
    "cuisine": "hunan",
    "specialty": "长沙小吃与湖南地方风味。",
    "note": "适合一次尝试多种地方味道，正餐菜品请以当季菜单为准。",
    "englishName": "Huo Gong Dian",
    "englishCity": "Changsha"
  },
  {
    "id": "tong",
    "name": "同庆楼",
    "chinese": "同庆楼",
    "city": "合肥",
    "cuisine": "anhui",
    "specialty": "安徽老字号，擅长地方风味与宴席菜。",
    "note": "可询问徽州烧炖菜和笋类菜肴，以所选门店供应为准。",
    "englishName": "Tong Qing Lou",
    "englishCity": "Hefei"
  },
  {
    "id": "lin",
    "name": "临湖楼",
    "chinese": "临湖楼",
    "city": "黄山",
    "cuisine": "anhui",
    "specialty": "徽州特色菜与山野食材。",
    "note": "可从烧炖菜和时令山蔬入手，到店前请确认菜单与营业时间。",
    "englishName": "Lin Hu Lou",
    "englishCity": "Huangshan"
  }
];

export const dishes = [
  {
    "id": "mapo-tofu",
    "flavors": [
      "麻辣",
      "咸鲜"
    ],
    "name": "麻婆豆腐",
    "chinese": "麻婆豆腐",
    "cuisine": "sichuan",
    "description": "嫩豆腐裹着浓郁豆瓣酱汁，肉末添鲜，花椒收尾。麻、辣、鲜、香，一口就想添饭。",
    "minutes": 25,
    "difficulty": "Easy",
    "heat": 3,
    "tags": [
      "家常下饭",
      "经典小炒"
    ],
    "servings": 2,
    "restaurants": [
      "chen",
      "ma"
    ],
    "ingredients": [
      [
        400,
        "克",
        "嫩豆腐，切块"
      ],
      [
        100,
        "克",
        "牛肉末"
      ],
      [
        1.5,
        "汤匙",
        "郫县豆瓣酱"
      ],
      [
        1,
        "茶匙",
        "豆豉，切碎"
      ],
      [
        2,
        "茶匙",
        "花椒粉"
      ],
      [
        200,
        "毫升",
        "清水或无盐高汤"
      ],
      [
        2,
        "茶匙",
        "玉米淀粉，用两倍清水调匀"
      ],
      [
        2,
        "汤匙",
        "食用油"
      ],
      [
        2,
        "瓣",
        "蒜瓣，切末"
      ],
      [
        2,
        "根",
        "小葱，切葱花"
      ]
    ],
    "steps": [
      "豆腐放入淡盐水中，小火煮 3 分钟，轻轻沥干备用。",
      "锅中放油，中大火炒散牛肉末。转小火，加入豆瓣酱、豆豉和蒜末，炒香约 1 分钟。",
      "倒入高汤，煮开后滑入豆腐，小火煮 5 分钟。轻推锅底，避免把豆腐翻碎。",
      "将水淀粉搅匀，分次倒入，煮至酱汁能附着在豆腐上。牛肉末应完全熟透，中心温度达到 71℃。",
      "撒上花椒粉和葱花，趁热配米饭食用。"
    ],
    "tip": "整粒花椒先小火焙香，再现磨成粉，柑橘般的清香会更明显。",
    "allergens": [
      "大豆",
      "小麦（请查看豆瓣酱配料）"
    ],
    "englishName": "Mapo Tofu",
    "sources": [],
    "recipeOrigin": "应用预置参考做法，未据《中国名菜谱》核对；不是书中原文。"
  },
  {
    "id": "kung-pao",
    "flavors": [
      "酸甜",
      "香辣"
    ],
    "name": "宫保鸡丁",
    "chinese": "宫保鸡丁",
    "cuisine": "sichuan",
    "description": "鸡丁滑嫩，花生香脆，干辣椒与微酸微甜的酱汁相映成趣，是川菜里耐吃的一道经典。",
    "minutes": 30,
    "difficulty": "Easy",
    "heat": 2,
    "tags": [
      "酸甜微辣",
      "经典小炒"
    ],
    "servings": 2,
    "restaurants": [
      "ma",
      "chen"
    ],
    "ingredients": [
      [
        300,
        "克",
        "去骨鸡腿肉，切丁"
      ],
      [
        50,
        "克",
        "熟花生米，无盐"
      ],
      [
        6,
        "根",
        "干辣椒，剪段"
      ],
      [
        1,
        "茶匙",
        "花椒"
      ],
      [
        2,
        "汤匙",
        "生抽"
      ],
      [
        1,
        "汤匙",
        "镇江香醋"
      ],
      [
        2,
        "茶匙",
        "白糖"
      ],
      [
        2,
        "茶匙",
        "玉米淀粉"
      ],
      [
        2,
        "汤匙",
        "食用油"
      ],
      [
        3,
        "根",
        "大葱，切小段"
      ],
      [
        2,
        "瓣",
        "蒜瓣，切片"
      ]
    ],
    "steps": [
      "鸡丁拌入一半生抽和一半淀粉，腌制 10 分钟。",
      "将剩余生抽、淀粉与香醋、白糖、3 汤匙清水混合成碗汁。",
      "热锅放油，中火将干辣椒和花椒略煸出香，注意不要炒焦。",
      "转大火，加入鸡丁炒至接近熟透，再加入蒜片、葱段，倒入碗汁。",
      "炒至酱汁明亮、鸡肉中心达到 74℃。最后拌入花生米，立即出锅。"
    ],
    "tip": "花生米最后再放，才能保持酥脆。",
    "allergens": [
      "花生",
      "大豆",
      "小麦"
    ],
    "englishName": "Kung Pao Chicken",
    "sources": [],
    "recipeOrigin": "应用预置参考做法，未据《中国名菜谱》核对；不是书中原文。"
  },
  {
    "id": "char-siu",
    "flavors": [
      "甜咸",
      "酱香"
    ],
    "name": "蜜汁叉烧",
    "chinese": "蜜汁叉烧",
    "cuisine": "cantonese",
    "description": "猪肉在烘烤中浸入酱香，边缘微焦，表面裹着薄薄蜜汁。等它出炉的时间也值得期待。",
    "minutes": 55,
    "extraTime": "另需冷藏腌制 4–12 小时",
    "difficulty": "Intermediate",
    "heat": 0,
    "tags": [
      "经典烧味",
      "可提前准备"
    ],
    "servings": 4,
    "restaurants": [
      "bing",
      "tao"
    ],
    "ingredients": [
      [
        600,
        "克",
        "猪肩肉，切粗条"
      ],
      [
        2,
        "汤匙",
        "海鲜酱"
      ],
      [
        1,
        "汤匙",
        "生抽"
      ],
      [
        1,
        "汤匙",
        "绍兴酒"
      ],
      [
        2,
        "汤匙",
        "蜂蜜"
      ],
      [
        1,
        "汤匙",
        "白糖"
      ],
      [
        0.5,
        "茶匙",
        "五香粉"
      ],
      [
        2,
        "瓣",
        "蒜瓣，擦成泥"
      ]
    ],
    "steps": [
      "将海鲜酱、生抽、绍兴酒、糖、五香粉、蒜泥与一半蜂蜜混合，裹匀猪肉，冷藏腌制 4–12 小时。",
      "烤箱预热至 200℃。烤盘垫纸，上置烤架，摆上猪肉；丢弃接触过生肉的腌汁。",
      "先烤 20 分钟，翻面再烤 15–20 分钟。",
      "将剩余蜂蜜加少量清水调开，刷在表面，继续烤 5–10 分钟。留意上色，肉中心至少达到 63℃。",
      "出炉静置至少 3 分钟，逆纹切片，淋上烤熟的肉汁即可。"
    ],
    "tip": "猪肩肉带有适量脂肪，口感更润；过瘦的肉容易烤干。",
    "allergens": [
      "大豆",
      "小麦",
      "芝麻（请查看海鲜酱配料）"
    ],
    "englishName": "Char Siu",
    "sources": [],
    "recipeOrigin": "应用预置参考做法，未据《中国名菜谱》核对；不是书中原文。"
  },
  {
    "id": "steamed-fish",
    "flavors": [
      "清淡",
      "咸鲜"
    ],
    "name": "清蒸鲈鱼",
    "chinese": "清蒸鲈鱼",
    "cuisine": "cantonese",
    "description": "鱼肉清蒸至刚熟，淋上鲜味酱汁，再以热油激出姜葱香。简单的做法，最见食材本味。",
    "minutes": 25,
    "difficulty": "Easy",
    "heat": 0,
    "tags": [
      "清鲜爽口",
      "清蒸"
    ],
    "servings": 2,
    "restaurants": [
      "bing",
      "tao"
    ],
    "ingredients": [
      [
        450,
        "克",
        "鲈鱼鱼柳"
      ],
      [
        25,
        "克",
        "生姜，切细丝"
      ],
      [
        3,
        "根",
        "小葱，切细丝"
      ],
      [
        2,
        "汤匙",
        "生抽"
      ],
      [
        2,
        "汤匙",
        "食用油"
      ],
      [
        1,
        "汤匙",
        "绍兴酒"
      ],
      [
        0.5,
        "茶匙",
        "白糖"
      ]
    ],
    "steps": [
      "蒸锅水烧开。鱼柳放入耐热盘，铺上一半姜丝。",
      "淋上绍兴酒，盖盖蒸 8–12 分钟，时间按厚度调整，鱼肉中心应达到 63℃。",
      "小心倒掉盘中蒸出的水。生抽、糖与 1 汤匙热水混匀，淋在鱼肉四周。",
      "铺上剩余姜丝与葱丝。油烧至微微起波纹，小心浇在姜葱上，趁热食用。"
    ],
    "tip": "蒸鱼时间主要取决于厚度，而不是总重量；刚熟的鱼肉最鲜嫩。",
    "allergens": [
      "鱼类",
      "大豆",
      "小麦"
    ],
    "englishName": "Ginger-Scallion Fish",
    "sources": [],
    "recipeOrigin": "应用预置参考做法，未据《中国名菜谱》核对；不是书中原文。"
  },
  {
    "id": "sweet-sour-fish",
    "flavors": [
      "酸甜"
    ],
    "name": "糖醋鱼",
    "chinese": "糖醋鱼",
    "cuisine": "shandong",
    "description": "外酥内嫩的鱼块裹上明亮的糖醋汁。以更容易操作的鱼块，做出鲁菜经典的酸甜滋味。",
    "minutes": 35,
    "difficulty": "Intermediate",
    "heat": 0,
    "tags": [
      "酥香金黄",
      "全家共享"
    ],
    "servings": 2,
    "restaurants": [
      "ju",
      "feng"
    ],
    "ingredients": [
      [
        400,
        "克",
        "肉质紧实的白肉鱼，切大块"
      ],
      [
        50,
        "克",
        "玉米淀粉"
      ],
      [
        3,
        "汤匙",
        "米醋"
      ],
      [
        2,
        "汤匙",
        "白糖"
      ],
      [
        2,
        "汤匙",
        "番茄酱"
      ],
      [
        1,
        "汤匙",
        "生抽"
      ],
      [
        1,
        "茶匙",
        "勾芡用玉米淀粉"
      ],
      [
        150,
        "毫升",
        "浅炸用食用油"
      ],
      [
        2,
        "瓣",
        "蒜瓣，切末"
      ]
    ],
    "steps": [
      "鱼块擦干，均匀裹上较大份量的淀粉。",
      "将米醋、白糖、番茄酱、生抽、勾芡用淀粉与 4 汤匙清水混匀。",
      "锅中油烧至约 175℃，分批浅炸鱼块，至金黄酥脆、中心达到 63℃，放架上沥油。",
      "小心倒出多余油，仅留约 1 茶匙。炒香蒜末，倒入碗汁，煮至浓稠明亮。",
      "临上桌时再将热糖醋汁浇在鱼块上，尽量保留酥脆口感。"
    ],
    "tip": "这是鱼块家常版；济南传统宴席做法常使用整条鲤鱼。",
    "allergens": [
      "鱼类",
      "大豆",
      "小麦"
    ],
    "englishName": "Sweet & Sour Fish",
    "sources": [],
    "recipeOrigin": "应用预置参考做法，未据《中国名菜谱》核对；不是书中原文。"
  },
  {
    "id": "scallion-braised-mushrooms",
    "flavors": [
      "咸鲜",
      "葱香"
    ],
    "name": "葱烧香菇",
    "chinese": "葱烧香菇",
    "cuisine": "shandong",
    "description": "香菇吸足葱香酱汁，口感厚实鲜润。借用鲁菜葱烧技法，让一盘素菜也有浓厚滋味。",
    "minutes": 30,
    "difficulty": "Easy",
    "heat": 0,
    "tags": [
      "植物食材",
      "家常改良"
    ],
    "servings": 2,
    "restaurants": [
      "ju",
      "feng"
    ],
    "ingredients": [
      [
        350,
        "克",
        "鲜香菇，去硬蒂"
      ],
      [
        5,
        "根",
        "大葱，切长段"
      ],
      [
        2,
        "汤匙",
        "生抽"
      ],
      [
        1,
        "茶匙",
        "老抽"
      ],
      [
        1,
        "茶匙",
        "白糖"
      ],
      [
        150,
        "毫升",
        "蔬菜高汤"
      ],
      [
        2,
        "汤匙",
        "食用油"
      ],
      [
        1,
        "茶匙",
        "玉米淀粉，用两倍清水调匀"
      ]
    ],
    "steps": [
      "中火热油，放入葱段慢煎 4–5 分钟，至金黄出香，捞出备用。",
      "放入香菇炒 3 分钟，加入生抽、老抽、糖和高汤。",
      "盖盖小火焖煮 12–15 分钟，至香菇软嫩。",
      "放回葱段，倒入水淀粉，煮至酱汁薄薄裹住食材，配米饭食用。"
    ],
    "tip": "这道素菜借鉴了鲁菜葱烧技法。所列餐馆擅长鲁菜，但未必供应这一家常改良版本。",
    "allergens": [
      "大豆",
      "小麦"
    ],
    "englishName": "Scallion-Braised Mushrooms",
    "sources": [],
    "recipeOrigin": "应用预置参考做法，未据《中国名菜谱》核对；不是书中原文。"
  },
  {
    "id": "lions-head",
    "flavors": [
      "清淡",
      "咸鲜"
    ],
    "name": "清炖狮子头",
    "chinese": "清炖狮子头",
    "cuisine": "jiangsu",
    "description": "松软的猪肉丸与白菜在清汤里慢慢炖煮。汤鲜、肉嫩，是淮扬菜里温润的一味。",
    "minutes": 75,
    "difficulty": "Intermediate",
    "heat": 0,
    "tags": [
      "小火慢炖",
      "暖心家常"
    ],
    "servings": 4,
    "restaurants": [
      "ye",
      "song"
    ],
    "ingredients": [
      [
        500,
        "克",
        "带适量肥肉的猪肉末"
      ],
      [
        100,
        "克",
        "荸荠，切细末"
      ],
      [
        400,
        "克",
        "大白菜"
      ],
      [
        800,
        "毫升",
        "清鸡汤"
      ],
      [
        1,
        "个",
        "鸡蛋"
      ],
      [
        1,
        "汤匙",
        "生抽"
      ],
      [
        1,
        "汤匙",
        "绍兴酒"
      ],
      [
        2,
        "茶匙",
        "玉米淀粉"
      ],
      [
        15,
        "克",
        "生姜，擦成泥"
      ]
    ],
    "steps": [
      "猪肉末加入荸荠、鸡蛋、生抽、绍兴酒、淀粉和姜泥，沿同一方向搅拌至略有黏性。",
      "双手沾水，轻轻团成 4 个较大的肉丸，不要压得过实。",
      "厚底锅铺上较厚的白菜叶，摆入肉丸，倒入鸡汤，再盖上嫩叶。",
      "煮至微沸后盖盖，小火炖 50–60 分钟。保持轻微翻动的状态，避免大滚冲散肉丸。",
      "确认肉丸中心达到 71℃，尝汤并按需调味后上桌。"
    ],
    "tip": "团肉丸时手法轻一点，口感才会松软。",
    "allergens": [
      "鸡蛋",
      "大豆",
      "小麦"
    ],
    "englishName": "Lion’s Head Meatballs",
    "sources": [],
    "recipeOrigin": "应用预置参考做法，未据《中国名菜谱》核对；不是书中原文。"
  },
  {
    "id": "yangzhou-rice",
    "flavors": [
      "咸鲜"
    ],
    "name": "扬州炒饭",
    "chinese": "扬州炒饭",
    "cuisine": "jiangsu",
    "description": "米粒松散，鸡蛋、虾仁与各色小丁均匀交织。看似简单，却把炒饭的鲜香与火候写得明白。",
    "minutes": 20,
    "difficulty": "Easy",
    "heat": 0,
    "tags": [
      "快手料理",
      "经典小炒"
    ],
    "servings": 2,
    "restaurants": [
      "ye",
      "song"
    ],
    "ingredients": [
      [
        400,
        "克",
        "熟米饭，及时冷却后冷藏"
      ],
      [
        100,
        "克",
        "虾仁，切小块"
      ],
      [
        50,
        "克",
        "熟火腿，切丁"
      ],
      [
        2,
        "个",
        "鸡蛋，打散"
      ],
      [
        60,
        "克",
        "豌豆"
      ],
      [
        50,
        "克",
        "胡萝卜，切细丁"
      ],
      [
        2,
        "根",
        "小葱，切葱花"
      ],
      [
        2,
        "汤匙",
        "食用油"
      ],
      [
        0.5,
        "茶匙",
        "盐，按口味调整"
      ]
    ],
    "steps": [
      "将冷米饭轻轻拨散，所有配料提前备好。",
      "锅中放一半油，将鸡蛋炒至刚凝固，盛出。",
      "加剩余油，炒胡萝卜与豌豆 2 分钟，再下虾仁和火腿，炒至虾仁变色。",
      "加入米饭大火翻炒，至整体热透、达到 74℃，倒回鸡蛋，用盐调味。",
      "拌入葱花，出锅后及时食用。"
    ],
    "tip": "熟米饭应迅速冷却，1 小时内放入冰箱，24 小时内食用；只复热一次。",
    "allergens": [
      "甲壳类",
      "鸡蛋"
    ],
    "englishName": "Yangzhou Fried Rice",
    "sources": [],
    "recipeOrigin": "应用预置参考做法，未据《中国名菜谱》核对；不是书中原文。"
  },
  {
    "id": "dongpo-pork",
    "flavors": [
      "甜咸",
      "酱香"
    ],
    "name": "东坡肉",
    "chinese": "东坡肉",
    "cuisine": "zhejiang",
    "description": "带皮五花肉与绍兴酒小火慢煨，酱汁红亮，肉质酥润。杭州名菜里的耐心与醇香。",
    "minutes": 150,
    "difficulty": "Intermediate",
    "heat": 0,
    "tags": [
      "慢火烧炖",
      "周末下厨"
    ],
    "servings": 4,
    "restaurants": [
      "lou",
      "zhi"
    ],
    "ingredients": [
      [
        700,
        "克",
        "带皮五花肉"
      ],
      [
        200,
        "毫升",
        "绍兴酒"
      ],
      [
        3,
        "汤匙",
        "生抽"
      ],
      [
        1,
        "汤匙",
        "老抽"
      ],
      [
        40,
        "克",
        "冰糖"
      ],
      [
        40,
        "克",
        "生姜，切片"
      ],
      [
        5,
        "根",
        "小葱"
      ],
      [
        350,
        "毫升",
        "清水"
      ]
    ],
    "steps": [
      "五花肉冷水下锅，煮开后再煮 5 分钟，捞出洗净，切成约 5 厘米见方的块。",
      "葱和姜铺在大小合适的厚底锅内，五花肉皮朝下摆好。",
      "加入绍兴酒、生抽、老抽、冰糖与清水，烧至微沸，盖盖极小火炖 90 分钟。",
      "小心翻面，再炖 30–40 分钟，至肉酥软；水量不足时补少量热水。",
      "盛出肉块，将汤汁略收浓，淋在肉上，搭配青菜与米饭。"
    ],
    "tip": "始终保持很轻的沸腾，让肉质酥软的同时仍能保持完整。",
    "allergens": [
      "大豆",
      "小麦"
    ],
    "englishName": "Dongpo Pork",
    "sources": [
      {
        "volumeId": "zhejiang",
        "title": "中国名菜谱·浙江风味",
        "isbn": "9787500502494",
        "url": "https://max.book118.com/html/2015/0707/20593655.shtm",
        "bookUrl": "https://book.douban.com/subject/20391490/",
        "locator": "公开目录第 31 项（非页码）",
        "section": "肉菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "应用预置参考做法，未据《中国名菜谱》核对；不是书中原文。"
  },
  {
    "id": "longjing-shrimp",
    "flavors": [
      "清淡",
      "茶香"
    ],
    "name": "龙井虾仁",
    "chinese": "龙井虾仁",
    "cuisine": "zhejiang",
    "description": "鲜嫩虾仁带着龙井茶的清香，色泽素雅、味道轻盈。用一道菜感受杭州的清润。",
    "minutes": 25,
    "difficulty": "Intermediate",
    "heat": 0,
    "tags": [
      "清鲜爽口",
      "淡雅茶香"
    ],
    "servings": 2,
    "restaurants": [
      "lou",
      "zhi"
    ],
    "ingredients": [
      [
        300,
        "克",
        "生虾仁"
      ],
      [
        2,
        "茶匙",
        "龙井茶叶"
      ],
      [
        1,
        "个",
        "蛋清"
      ],
      [
        1,
        "茶匙",
        "玉米淀粉"
      ],
      [
        2,
        "汤匙",
        "食用油"
      ],
      [
        0.25,
        "茶匙",
        "盐"
      ],
      [
        1,
        "茶匙",
        "绍兴酒"
      ]
    ],
    "steps": [
      "龙井茶用 80 毫升、约 80℃ 的水泡 2 分钟，留茶汤及少量嫩叶。",
      "虾仁擦干，拌入盐、蛋清和淀粉，冷藏静置 10 分钟。",
      "中火热油，轻轻滑炒虾仁，至变色熟透、中心达到 63℃。",
      "加入绍兴酒、2 汤匙茶汤和少量茶叶，快速翻匀即可出锅。"
    ],
    "tip": "茶汤宜淡不宜浓，绿茶泡得太久容易发苦。",
    "allergens": [
      "甲壳类",
      "鸡蛋"
    ],
    "englishName": "Longjing Tea Shrimp",
    "sources": [],
    "recipeOrigin": "应用预置参考做法，未据《中国名菜谱》核对；不是书中原文。"
  },
  {
    "id": "lychee-pork",
    "flavors": [
      "酸甜"
    ],
    "name": "荔枝肉",
    "chinese": "荔枝肉",
    "cuisine": "fujian",
    "description": "酥香肉块裹着酸甜酱汁，传统造型仿若荔枝。是福州餐桌上颇受欢迎的一道菜。",
    "minutes": 40,
    "difficulty": "Intermediate",
    "heat": 0,
    "tags": [
      "酸甜开胃",
      "福州经典"
    ],
    "servings": 2,
    "restaurants": [
      "lao",
      "juchun"
    ],
    "ingredients": [
      [
        300,
        "克",
        "猪里脊，切适口小块"
      ],
      [
        150,
        "克",
        "土豆，切小丁"
      ],
      [
        50,
        "克",
        "玉米淀粉"
      ],
      [
        2,
        "汤匙",
        "米醋"
      ],
      [
        2,
        "汤匙",
        "番茄酱"
      ],
      [
        1.5,
        "汤匙",
        "白糖"
      ],
      [
        1,
        "汤匙",
        "生抽"
      ],
      [
        150,
        "毫升",
        "浅炸用食用油"
      ],
      [
        2,
        "瓣",
        "蒜瓣，切末"
      ]
    ],
    "steps": [
      "猪肉与土豆分别裹淀粉。将米醋、番茄酱、糖、生抽与 3 汤匙清水混匀。",
      "油烧至约 170℃，先将土豆炸至金黄熟软，捞出沥油。",
      "分批炸猪肉，至表面酥脆、中心至少达到 63℃，捞出后静置 3 分钟。",
      "锅内留约 1 茶匙油，炒香蒜末，倒入酱汁煮至略稠。",
      "倒回肉块与土豆，快速翻匀，趁热上桌。"
    ],
    "tip": "菜名中的“荔枝”形容的是造型，传统做法并不需要放荔枝果肉。",
    "allergens": [
      "大豆",
      "小麦"
    ],
    "englishName": "Lychee Pork",
    "sources": [],
    "recipeOrigin": "应用预置参考做法，未据《中国名菜谱》核对；不是书中原文。"
  },
  {
    "id": "fujian-noodles",
    "flavors": [
      "咸鲜"
    ],
    "name": "福建卤面",
    "chinese": "福建卤面",
    "cuisine": "fujian",
    "description": "面条与肉片、香菇、虾仁同煮，汤汁鲜厚，热气腾腾。一碗便能安顿好胃口。",
    "minutes": 35,
    "difficulty": "Easy",
    "heat": 0,
    "tags": [
      "一锅完成",
      "暖心家常"
    ],
    "servings": 2,
    "restaurants": [
      "lao",
      "juchun"
    ],
    "ingredients": [
      [
        250,
        "克",
        "鲜小麦面条"
      ],
      [
        100,
        "克",
        "猪肉，切薄片"
      ],
      [
        100,
        "克",
        "虾仁"
      ],
      [
        100,
        "克",
        "香菇，切片"
      ],
      [
        150,
        "克",
        "大白菜，切丝"
      ],
      [
        700,
        "毫升",
        "鸡汤"
      ],
      [
        1,
        "汤匙",
        "生抽"
      ],
      [
        1,
        "个",
        "鸡蛋，打散"
      ],
      [
        1,
        "汤匙",
        "食用油"
      ]
    ],
    "steps": [
      "深锅热油，炒肉片 2 分钟，加入香菇炒香。",
      "倒入鸡汤与生抽，煮开后加入白菜，再煮 3 分钟。",
      "放入面条，按包装建议的时间煮熟，不时搅动防粘，必要时补少量水。",
      "最后 3 分钟放入虾仁，淋入蛋液并轻推至凝固。猪肉达到 63℃ 后继续小火煮 3 分钟，虾仁应完全变色熟透。",
      "尝味调整后，盛入温热的碗中。"
    ],
    "tip": "福建各地卤面做法不同，这里提供的是便于在家操作的版本。",
    "allergens": [
      "小麦",
      "大豆",
      "甲壳类",
      "鸡蛋"
    ],
    "englishName": "Fujian Braised Noodles",
    "sources": [],
    "recipeOrigin": "应用预置参考做法，未据《中国名菜谱》核对；不是书中原文。"
  },
  {
    "id": "pepper-pork",
    "flavors": [
      "香辣",
      "咸鲜"
    ],
    "name": "辣椒炒肉",
    "chinese": "辣椒炒肉",
    "cuisine": "hunan",
    "description": "青椒煸出焦香，薄肉片大火快炒，咸鲜带辣。满满烟火气，最适合配上一碗热饭。",
    "minutes": 25,
    "difficulty": "Easy",
    "heat": 3,
    "tags": [
      "家常下饭",
      "经典小炒"
    ],
    "servings": 2,
    "restaurants": [
      "fei",
      "huo"
    ],
    "ingredients": [
      [
        250,
        "克",
        "猪肩肉，切薄片"
      ],
      [
        200,
        "克",
        "长青椒或青辣椒"
      ],
      [
        1,
        "汤匙",
        "生抽"
      ],
      [
        1,
        "茶匙",
        "老抽"
      ],
      [
        1,
        "茶匙",
        "豆豉"
      ],
      [
        3,
        "瓣",
        "蒜瓣，切片"
      ],
      [
        1,
        "汤匙",
        "食用油"
      ],
      [
        1,
        "茶匙",
        "绍兴酒"
      ]
    ],
    "steps": [
      "青椒斜切成段，肉片加生抽和绍兴酒腌 10 分钟。",
      "干锅烧热，将青椒按压煸炒 2–3 分钟，至表面略起虎皮，盛出。",
      "锅中放油，炒肉片至接近熟透，加入蒜片、豆豉再炒 30 秒。",
      "倒回青椒，加老抽，大火翻炒均匀。薄肉片应完全熟透，中心以达到 71℃ 为宜。",
      "趁热出锅，配米饭食用。"
    ],
    "tip": "选择较温和的长青椒可保留香气、降低辣度；喜欢辣味可换成更辣的品种。",
    "allergens": [
      "大豆",
      "小麦"
    ],
    "englishName": "Hunan Pepper Pork",
    "sources": [],
    "recipeOrigin": "应用预置参考做法，未据《中国名菜谱》核对；不是书中原文。"
  },
  {
    "id": "chopped-chili-fish",
    "flavors": [
      "酸辣"
    ],
    "name": "剁椒蒸鱼",
    "chinese": "剁椒蒸鱼",
    "cuisine": "hunan",
    "description": "鲜嫩鱼肉铺满红亮剁椒，蒸出酸鲜辣香。用鱼柳做一道更方便的湘味家常菜。",
    "minutes": 30,
    "difficulty": "Easy",
    "heat": 3,
    "tags": [
      "清蒸",
      "酸鲜香辣"
    ],
    "servings": 2,
    "restaurants": [
      "huo",
      "fei"
    ],
    "ingredients": [
      [
        450,
        "克",
        "肉质紧实的白肉鱼柳"
      ],
      [
        3,
        "汤匙",
        "发酵剁椒"
      ],
      [
        15,
        "克",
        "生姜，切片"
      ],
      [
        2,
        "瓣",
        "蒜瓣，切末"
      ],
      [
        2,
        "根",
        "小葱，切葱花"
      ],
      [
        1,
        "汤匙",
        "绍兴酒"
      ],
      [
        1,
        "汤匙",
        "食用油"
      ]
    ],
    "steps": [
      "蒸锅水烧开。耐热盘铺姜片，上面摆好鱼柳。",
      "剁椒与蒜末拌匀，铺在鱼肉表面，淋上绍兴酒。",
      "按鱼肉厚度蒸 10–14 分钟，中心达到 63℃。",
      "撒葱花，将油烧至微微起波纹，小心淋在表面。可配米饭或清水面。"
    ],
    "tip": "灵感来自剁椒鱼头，改用鱼柳更便于家庭操作；剁椒本身已有咸味。",
    "allergens": [
      "鱼类"
    ],
    "englishName": "Chopped-Chili Steamed Fish",
    "sources": [],
    "recipeOrigin": "应用预置参考做法，未据《中国名菜谱》核对；不是书中原文。"
  },
  {
    "id": "bamboo-shoots",
    "flavors": [
      "咸鲜",
      "酱香"
    ],
    "name": "笋干烧肉",
    "chinese": "笋干烧肉",
    "cuisine": "anhui",
    "description": "五花肉与笋干一同慢烧，肉香入笋，笋香入肉。以朴实的食材，炖出徽州山野滋味。",
    "minutes": 100,
    "extraTime": "使用笋干时，另需按包装说明泡发",
    "difficulty": "Easy",
    "heat": 0,
    "tags": [
      "慢火烧炖",
      "山野风味"
    ],
    "servings": 4,
    "restaurants": [
      "tong",
      "lin"
    ],
    "ingredients": [
      [
        500,
        "克",
        "五花肉，切块"
      ],
      [
        300,
        "克",
        "已泡发并煮熟的笋干"
      ],
      [
        2,
        "汤匙",
        "生抽"
      ],
      [
        1,
        "汤匙",
        "老抽"
      ],
      [
        1,
        "汤匙",
        "绍兴酒"
      ],
      [
        15,
        "克",
        "冰糖"
      ],
      [
        20,
        "克",
        "生姜，切片"
      ],
      [
        600,
        "毫升",
        "清水"
      ]
    ],
    "steps": [
      "使用笋干时，按包装说明泡发并煮熟，倒掉泡发水与煮笋水；也可改用包装熟笋。",
      "猪肉沸水焯 5 分钟，捞出冲洗干净。",
      "将肉、熟笋、姜片、生抽、老抽、绍兴酒、冰糖与清水放入厚底锅。",
      "烧开后转小火，盖盖炖 75–90 分钟，至肉与笋都软嫩。",
      "开盖收汁 5–10 分钟，尝味后再决定是否加盐。"
    ],
    "tip": "笋干香味更浓；处理好的包装熟笋使用更方便。",
    "allergens": [
      "大豆",
      "小麦"
    ],
    "englishName": "Braised Bamboo Shoots",
    "sources": [],
    "recipeOrigin": "应用预置参考做法，未据《中国名菜谱》核对；不是书中原文。"
  },
  {
    "id": "huizhou-tofu",
    "flavors": [
      "咸鲜"
    ],
    "name": "徽州家常豆腐",
    "chinese": "徽州家常豆腐",
    "cuisine": "anhui",
    "description": "煎至金黄的豆腐，配香菇与笋片轻轻焖煮。鲜香醇和，是一道适合日常餐桌的素菜。",
    "minutes": 35,
    "difficulty": "Easy",
    "heat": 0,
    "tags": [
      "植物食材",
      "家常改良"
    ],
    "servings": 2,
    "restaurants": [
      "tong",
      "lin"
    ],
    "ingredients": [
      [
        400,
        "克",
        "老豆腐，切片"
      ],
      [
        100,
        "克",
        "香菇，切片"
      ],
      [
        100,
        "克",
        "熟笋，切片"
      ],
      [
        2,
        "汤匙",
        "生抽"
      ],
      [
        200,
        "毫升",
        "蔬菜高汤"
      ],
      [
        2,
        "汤匙",
        "食用油"
      ],
      [
        2,
        "根",
        "小葱，切葱花"
      ],
      [
        1,
        "茶匙",
        "玉米淀粉，用两倍清水调匀"
      ]
    ],
    "steps": [
      "豆腐擦干，不粘锅热油，将两面煎至金黄，盛出。",
      "锅中放香菇和熟笋，翻炒 2–3 分钟。",
      "倒回豆腐，加入生抽和高汤，小火焖 10 分钟。",
      "淋入水淀粉，煮至汤汁略稠，撒葱花即可。"
    ],
    "tip": "这是借鉴徽州风味的鲜豆腐家常版，与当地发酵毛豆腐不同。",
    "allergens": [
      "大豆",
      "小麦"
    ],
    "englishName": "Huizhou Braised Tofu",
    "sources": [],
    "recipeOrigin": "应用预置参考做法，未据《中国名菜谱》核对；不是书中原文。"
  },
  {
    "id": "book-shandong-9efdbe03eaa7",
    "name": "鹌鹑三味",
    "chinese": "鹌鹑三味",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：三、禽蛋菜",
        "section": "三、禽蛋菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-91d06cfc7bee",
    "name": "熬黄花鱼",
    "chinese": "熬黄花鱼",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-afb029a080fa",
    "name": "八宝梨罐",
    "chinese": "八宝梨罐",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：五、植物菜",
        "section": "五、植物菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-ff5c55826d56",
    "name": "八宝原壳鲜贝",
    "chinese": "八宝原壳鲜贝",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：一、山珍海味菜",
        "section": "一、山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-8a35961b5ac4",
    "name": "八仙瑶池聚会",
    "chinese": "八仙瑶池聚会",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：六、其他菜",
        "section": "六、其他菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-05827b0f36e3",
    "name": "扒鲍鱼冬瓜球",
    "chinese": "扒鲍鱼冬瓜球",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：一、山珍海味菜",
        "section": "一、山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-fd2228565f49",
    "name": "扒鲍鱼芦笋",
    "chinese": "扒鲍鱼芦笋",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：一、山珍海味菜",
        "section": "一、山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-2d53c588f553",
    "name": "扒酿海参",
    "chinese": "扒酿海参",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：一、山珍海味菜",
        "section": "一、山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-72c058f7bcff",
    "name": "扒牛肉条",
    "chinese": "扒牛肉条",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：二、肉菜",
        "section": "二、肉菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-9531aafd44c8",
    "name": "扒熊掌围龙眼鲍鱼",
    "chinese": "扒熊掌围龙眼鲍鱼",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：一、山珍海味菜",
        "section": "一、山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-0cd49349d7c1",
    "name": "扒原壳湖蟹",
    "chinese": "扒原壳湖蟹",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-1ed8e2868b62",
    "name": "拔丝空心小枣",
    "chinese": "拔丝空心小枣",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：五、植物菜",
        "section": "五、植物菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-8484e4a44386",
    "name": "拔丝山药",
    "chinese": "拔丝山药",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：五、植物菜",
        "section": "五、植物菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-c20fee7ee3f2",
    "name": "拔丝珍珠苹果",
    "chinese": "拔丝珍珠苹果",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：五、植物菜",
        "section": "五、植物菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-f9bd907589de",
    "name": "白扒鱼翅",
    "chinese": "白扒鱼翅",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：一、山珍海味菜",
        "section": "一、山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-1812e158de34",
    "name": "白汁酿鱼",
    "chinese": "白汁酿鱼",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-5c980086063d",
    "name": "白汁裙边",
    "chinese": "白汁裙边",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：一、山珍海味菜",
        "section": "一、山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-dd2fbd1936b1",
    "name": "百花大虾",
    "chinese": "百花大虾",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-5e2fa00aeab0",
    "name": "百花鸡排拼樱桃肉",
    "chinese": "百花鸡排拼樱桃肉",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：六、其他菜",
        "section": "六、其他菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-169b0af21cc0",
    "name": "百鸟朝凤",
    "chinese": "百鸟朝凤",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：六、其他菜",
        "section": "六、其他菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-dd336ff21a74",
    "name": "板栗山鸡",
    "chinese": "板栗山鸡",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：三、禽蛋菜",
        "section": "三、禽蛋菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-b531e8f3677c",
    "name": "爆炒腰花",
    "chinese": "爆炒腰花",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：二、肉菜",
        "section": "二、肉菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-94ecd9fe4034",
    "name": "爆鱼丁",
    "chinese": "爆鱼丁",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-77f56d229646",
    "name": "冰糖鲜莲",
    "chinese": "冰糖鲜莲",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：五、植物菜",
        "section": "五、植物菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-dc9b8ed2d851",
    "name": "冰糖银耳",
    "chinese": "冰糖银耳",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：五、植物菜",
        "section": "五、植物菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-7b5828481c5f",
    "name": "冰糖肘子",
    "chinese": "冰糖肘子",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：二、肉菜",
        "section": "二、肉菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-6045f674d1fa",
    "name": "博山豆腐箱",
    "chinese": "博山豆腐箱",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：六、其他菜",
        "section": "六、其他菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-54f5e7ecb567",
    "name": "彩云鱼肚",
    "chinese": "彩云鱼肚",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：一、山珍海味菜",
        "section": "一、山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-1c9e21b75185",
    "name": "炒鸡米",
    "chinese": "炒鸡米",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：三、禽蛋菜",
        "section": "三、禽蛋菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-ffdc4e5f424c",
    "name": "炒鸡丝",
    "chinese": "炒鸡丝",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：三、禽蛋菜",
        "section": "三、禽蛋菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-e779009973e2",
    "name": "炒鸡丝蜇头",
    "chinese": "炒鸡丝蜇头",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：三、禽蛋菜",
        "section": "三、禽蛋菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-7960e748915a",
    "name": "炒金针",
    "chinese": "炒金针",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：五、植物菜",
        "section": "五、植物菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-20e52e76977b",
    "name": "炒肉丝拉皮",
    "chinese": "炒肉丝拉皮",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：二、肉菜",
        "section": "二、肉菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-77da8165765e",
    "name": "炒三泥",
    "chinese": "炒三泥",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：五、植物菜",
        "section": "五、植物菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-7e8bb0237b2a",
    "name": "炒虾片",
    "chinese": "炒虾片",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-ef03eb6d1f3b",
    "name": "炒虾丝",
    "chinese": "炒虾丝",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-4e7b3178a183",
    "name": "炒原汁虾仁",
    "chinese": "炒原汁虾仁",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-e5b060414e98",
    "name": "捶烩鸡片",
    "chinese": "捶烩鸡片",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：三、禽蛋菜",
        "section": "三、禽蛋菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-782484679f2d",
    "name": "葱爆羊肉丁",
    "chinese": "葱爆羊肉丁",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：二、肉菜",
        "section": "二、肉菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-08b8372b4414",
    "name": "葱烧海参",
    "chinese": "葱烧海参",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：一、山珍海味菜",
        "section": "一、山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-d204e28bdc3a",
    "name": "醋椒桂鱼",
    "chinese": "醋椒桂鱼",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-9f80a3b1fb16",
    "name": "汆发菜三丝",
    "chinese": "汆发菜三丝",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：五、植物菜",
        "section": "五、植物菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-c20fd3b42f25",
    "name": "汆芙蓉黄管",
    "chinese": "汆芙蓉黄管",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：二、肉菜",
        "section": "二、肉菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-a3edb8000ef5",
    "name": "汆西施舌",
    "chinese": "汆西施舌",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-d86c4a713d99",
    "name": "汆虾蘑海",
    "chinese": "汆虾蘑海",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：一、山珍海味菜",
        "section": "一、山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-61424d3553c4",
    "name": "脆炸网油卷",
    "chinese": "脆炸网油卷",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：二、肉菜",
        "section": "二、肉菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-ad121a2ca0bf",
    "name": "单县羊肉汤",
    "chinese": "单县羊肉汤",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：二、肉菜",
        "section": "二、肉菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-19f56c926f1c",
    "name": "德州五香脱骨扒鸡",
    "chinese": "德州五香脱骨扒鸡",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：三、禽蛋菜",
        "section": "三、禽蛋菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-98850af6d1e0",
    "name": "冬菇烧蹄筋",
    "chinese": "冬菇烧蹄筋",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：二、肉菜",
        "section": "二、肉菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-bbfdcd6e8706",
    "name": "冬瓜盅",
    "chinese": "冬瓜盅",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：六、其他菜",
        "section": "六、其他菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-b3cc5d8b72fc",
    "name": "豆豉肉",
    "chinese": "豆豉肉",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：二、肉菜",
        "section": "二、肉菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-2caf3dc00005",
    "name": "豆豉烧鲫鱼",
    "chinese": "豆豉烧鲫鱼",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-b2b331a3b101",
    "name": "番茄松鼠鱼",
    "chinese": "番茄松鼠鱼",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-421dc6dbe569",
    "name": "凤凰鱼翅",
    "chinese": "凤凰鱼翅",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：一、山珍海味菜",
        "section": "一、山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-336b702ee545",
    "name": "凤尾金鱼",
    "chinese": "凤尾金鱼",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-2f4ea049393d",
    "name": "芙蓉干贝",
    "chinese": "芙蓉干贝",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：一、山珍海味菜",
        "section": "一、山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-03cdfef32e48",
    "name": "芙蓉菊蟹",
    "chinese": "芙蓉菊蟹",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-8d0e7ff82229",
    "name": "浮油鸡片",
    "chinese": "浮油鸡片",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：三、禽蛋菜",
        "section": "三、禽蛋菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-f3c22f91ebfd",
    "name": "福山烧小鸡",
    "chinese": "福山烧小鸡",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：三、禽蛋菜",
        "section": "三、禽蛋菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-0d3ca9b266c2",
    "name": "干烂虾仁",
    "chinese": "干烂虾仁",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-6b607bffb04e",
    "name": "干炸赤鳞鱼",
    "chinese": "干炸赤鳞鱼",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：一、山珍海味菜",
        "section": "一、山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-4b906c12de84",
    "name": "挂霜丸子",
    "chinese": "挂霜丸子",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：二、肉菜",
        "section": "二、肉菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-717397ef7d58",
    "name": "锅烧鸡",
    "chinese": "锅烧鸡",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：三、禽蛋菜",
        "section": "三、禽蛋菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-aec4cca08475",
    "name": "锅烧鸭",
    "chinese": "锅烧鸭",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：三、禽蛋菜",
        "section": "三、禽蛋菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-04e0a3f10e97",
    "name": "锅烧肘子",
    "chinese": "锅烧肘子",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：二、肉菜",
        "section": "二、肉菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-f19a0d9c5be7",
    "name": "锅塌黄鱼",
    "chinese": "锅塌黄鱼",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-5be0a660ec43",
    "name": "锅塌鸡片",
    "chinese": "锅塌鸡片",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：三、禽蛋菜",
        "section": "三、禽蛋菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-ffbaeaa7e00e",
    "name": "锅塌鸡签",
    "chinese": "锅塌鸡签",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：三、禽蛋菜",
        "section": "三、禽蛋菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-d68021de8998",
    "name": "锅塌蒲菜",
    "chinese": "锅塌蒲菜",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：五、植物菜",
        "section": "五、植物菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-46028e1f5d82",
    "name": "锅塌三鲜菜盒",
    "chinese": "锅塌三鲜菜盒",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：六、其他菜",
        "section": "六、其他菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-757c8c943524",
    "name": "锅塌腰盒",
    "chinese": "锅塌腰盒",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：二、肉菜",
        "section": "二、肉菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-d4f17c29c757",
    "name": "锅塌鱼盒",
    "chinese": "锅塌鱼盒",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-babeac2ea85f",
    "name": "海参肘子",
    "chinese": "海参肘子",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：一、山珍海味菜",
        "section": "一、山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-7b98dcc66cd2",
    "name": "海米珍珠笋",
    "chinese": "海米珍珠笋",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：五、植物菜",
        "section": "五、植物菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-aac401f9d21a",
    "name": "荷花金鱼虾",
    "chinese": "荷花金鱼虾",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-8064e1b75cbc",
    "name": "荷花鱼翅",
    "chinese": "荷花鱼翅",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：一、山珍海味菜",
        "section": "一、山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-9d11c9c1ee48",
    "name": "荷叶米粉鸡",
    "chinese": "荷叶米粉鸡",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：三、禽蛋菜",
        "section": "三、禽蛋菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-993c53e0b77e",
    "name": "荷叶肉",
    "chinese": "荷叶肉",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：二、肉菜",
        "section": "二、肉菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-fe95fbf164f3",
    "name": "红扒熊掌",
    "chinese": "红扒熊掌",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：一、山珍海味菜",
        "section": "一、山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-3616b8001a04",
    "name": "红扒鱼翅",
    "chinese": "红扒鱼翅",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：一、山珍海味菜",
        "section": "一、山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-d2d225118249",
    "name": "红烧海螺",
    "chinese": "红烧海螺",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-d28ae1a1dfb7",
    "name": "红烧甲鱼",
    "chinese": "红烧甲鱼",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-9c323236b4c0",
    "name": "红烧鱼唇",
    "chinese": "红烧鱼唇",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：一、山珍海味菜",
        "section": "一、山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-f5a1152affeb",
    "name": "红烧鱼皮",
    "chinese": "红烧鱼皮",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：一、山珍海味菜",
        "section": "一、山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-c885a1fe6a7d",
    "name": "猴头蘑煨鸡",
    "chinese": "猴头蘑煨鸡",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：一、山珍海味菜",
        "section": "一、山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-15f5d1d062e3",
    "name": "蝴蝶海参",
    "chinese": "蝴蝶海参",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：一、山珍海味菜",
        "section": "一、山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-6b2fdff081c9",
    "name": "琥珀莲子",
    "chinese": "琥珀莲子",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：五、植物菜",
        "section": "五、植物菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-fd9578588567",
    "name": "滑炒里脊丝",
    "chinese": "滑炒里脊丝",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：二、肉菜",
        "section": "二、肉菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-d5dc27b68cea",
    "name": "黄焖全鸡",
    "chinese": "黄焖全鸡",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：三、禽蛋菜",
        "section": "三、禽蛋菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-6b7d019aa93b",
    "name": "黄焖鸭肝",
    "chinese": "黄焖鸭肝",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：三、禽蛋菜",
        "section": "三、禽蛋菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-d879ed374f3f",
    "name": "烩鸭四宝",
    "chinese": "烩鸭四宝",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：三、禽蛋菜",
        "section": "三、禽蛋菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-aeb1f7a8f0d2",
    "name": "火爆燎肉",
    "chinese": "火爆燎肉",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：二、肉菜",
        "section": "二、肉菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-919d4c2911f4",
    "name": "鸡里爆",
    "chinese": "鸡里爆",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：三、禽蛋菜",
        "section": "三、禽蛋菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-7a5555e845b0",
    "name": "鸡茸海蜇",
    "chinese": "鸡茸海蜇",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-0f47fd2d42b7",
    "name": "鸡茸鱼骨",
    "chinese": "鸡茸鱼骨",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：一、山珍海味菜",
        "section": "一、山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-504f403b6945",
    "name": "鸡蓉虾仁",
    "chinese": "鸡蓉虾仁",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-5d361e975d66",
    "name": "鸡汁牛蛙籽",
    "chinese": "鸡汁牛蛙籽",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-bd6d1976cdca",
    "name": "荠菜黄鱼卷",
    "chinese": "荠菜黄鱼卷",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-19490625dbc5",
    "name": "荠菜烧冬笋",
    "chinese": "荠菜烧冬笋",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：五、植物菜",
        "section": "五、植物菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-a51a7b00a404",
    "name": "煎雏肉",
    "chinese": "煎雏肉",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：二、肉菜",
        "section": "二、肉菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-31af443ad001",
    "name": "煎烹虾饼",
    "chinese": "煎烹虾饼",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-ab2ee77f86e8",
    "name": "煎蒸黄鱼",
    "chinese": "煎蒸黄鱼",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-61326615b47d",
    "name": "酱汁鸭方",
    "chinese": "酱汁鸭方",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：三、禽蛋菜",
        "section": "三、禽蛋菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-d96fd793d5d5",
    "name": "酱渍鳎目鱼",
    "chinese": "酱渍鳎目鱼",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-2f397a91f3f4",
    "name": "金蟾戏荷花",
    "chinese": "金蟾戏荷花",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：三、禽蛋菜",
        "section": "三、禽蛋菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-af3c3354c188",
    "name": "金银裹蛎子",
    "chinese": "金银裹蛎子",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-a8836c449d69",
    "name": "金鱼鸭掌",
    "chinese": "金鱼鸭掌",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：三、禽蛋菜",
        "section": "三、禽蛋菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-43269a55c619",
    "name": "九转大肠",
    "chinese": "九转大肠",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：二、肉菜",
        "section": "二、肉菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-e4732705e694",
    "name": "韭黄烧蛏子",
    "chinese": "韭黄烧蛏子",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-a65f6ec018e2",
    "name": "菊花锅",
    "chinese": "菊花锅",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：六、其他菜",
        "section": "六、其他菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-efce9a3b48e9",
    "name": "菊花全蝎",
    "chinese": "菊花全蝎",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：一、山珍海味菜",
        "section": "一、山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-78d8d7e4ac1e",
    "name": "菊花虾仁",
    "chinese": "菊花虾仁",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-769731531b7f",
    "name": "烤花揽桂鱼",
    "chinese": "烤花揽桂鱼",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-7c0d57496d92",
    "name": "烤加吉鱼",
    "chinese": "烤加吉鱼",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-e2a4df7100a6",
    "name": "烤网油签",
    "chinese": "烤网油签",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：二、肉菜",
        "section": "二、肉菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-bc1d4ad23d8b",
    "name": "烤小鸡",
    "chinese": "烤小鸡",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：三、禽蛋菜",
        "section": "三、禽蛋菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-d67b877c2823",
    "name": "烤整兔",
    "chinese": "烤整兔",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：二、肉菜",
        "section": "二、肉菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-97645bf629e9",
    "name": "㸆大虾",
    "chinese": "㸆大虾",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-c28502d12336",
    "name": "㸆红果",
    "chinese": "㸆红果",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：五、植物菜",
        "section": "五、植物菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-02ba3fa2f0f4",
    "name": "空心琉璃丸子",
    "chinese": "空心琉璃丸子",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：五、植物菜",
        "section": "五、植物菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-bc38fcf254b9",
    "name": "孔雀开屏",
    "chinese": "孔雀开屏",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：六、其他菜",
        "section": "六、其他菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-2731a7da726a",
    "name": "口蘑扒鱼脯",
    "chinese": "口蘑扒鱼脯",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-9feaa48ed478",
    "name": "口蘑椒油小白菜",
    "chinese": "口蘑椒油小白菜",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：五、植物菜",
        "section": "五、植物菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-7dc0e6ba11f2",
    "name": "口蘑烧蒲菜",
    "chinese": "口蘑烧蒲菜",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：五、植物菜",
        "section": "五、植物菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-608cb72130c2",
    "name": "侉炖加吉鱼",
    "chinese": "侉炖加吉鱼",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-e73e794e99c9",
    "name": "侉炖驼峰",
    "chinese": "侉炖驼峰",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：一、山珍海味菜",
        "section": "一、山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-8c166d4f057b",
    "name": "辣爆蛏子",
    "chinese": "辣爆蛏子",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-5c77106cb4bb",
    "name": "栗子烧白菜",
    "chinese": "栗子烧白菜",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：五、植物菜",
        "section": "五、植物菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-69715fe7240b",
    "name": "溜蟹黄",
    "chinese": "溜蟹黄",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-b661243292cf",
    "name": "溜鱼片",
    "chinese": "溜鱼片",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-77813734834b",
    "name": "龙凤双腿",
    "chinese": "龙凤双腿",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：三、禽蛋菜",
        "section": "三、禽蛋菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-af7e77773185",
    "name": "龙潭钓玉牌",
    "chinese": "龙潭钓玉牌",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：六、其他菜",
        "section": "六、其他菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-10853d2c26f4",
    "name": "龙眼凤肝",
    "chinese": "龙眼凤肝",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：二、肉菜",
        "section": "二、肉菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-56af62fe7fa6",
    "name": "罗汉面筋琵琶虾",
    "chinese": "罗汉面筋琵琶虾",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：六、其他菜",
        "section": "六、其他菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-78dcab5547c4",
    "name": "萝卜鱼",
    "chinese": "萝卜鱼",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-93bfc03a790f",
    "name": "落叶琵琶虾",
    "chinese": "落叶琵琶虾",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-cf50cbfc6d34",
    "name": "麻粉肘子",
    "chinese": "麻粉肘子",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：二、肉菜",
        "section": "二、肉菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-14ec4bb1f4a7",
    "name": "麻酱紫鲍",
    "chinese": "麻酱紫鲍",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：一、山珍海味菜",
        "section": "一、山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-735f649a2f04",
    "name": "玛瑙银杏",
    "chinese": "玛瑙银杏",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：五、植物菜",
        "section": "五、植物菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-10f678295846",
    "name": "蜜三果",
    "chinese": "蜜三果",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：五、植物菜",
        "section": "五、植物菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-041a60558652",
    "name": "蜜汁肥桃",
    "chinese": "蜜汁肥桃",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：五、植物菜",
        "section": "五、植物菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-91e098fe390b",
    "name": "蜜汁金枣",
    "chinese": "蜜汁金枣",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：五、植物菜",
        "section": "五、植物菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-b28664374115",
    "name": "苜蓿蛏子",
    "chinese": "苜蓿蛏子",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-14b8d12a4f83",
    "name": "奶汤八宝布袋鸡",
    "chinese": "奶汤八宝布袋鸡",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：三、禽蛋菜",
        "section": "三、禽蛋菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-0d89f1d81425",
    "name": "奶汤桂鱼",
    "chinese": "奶汤桂鱼",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-cde933da7bfd",
    "name": "奶汤核桃肉",
    "chinese": "奶汤核桃肉",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：二、肉菜",
        "section": "二、肉菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-9e2af2d5c02e",
    "name": "奶汤蒲菜",
    "chinese": "奶汤蒲菜",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：五、植物菜",
        "section": "五、植物菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-8bd04a58e39e",
    "name": "奶汤鲜核桃仁",
    "chinese": "奶汤鲜核桃仁",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：五、植物菜",
        "section": "五、植物菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-6826f043c51b",
    "name": "酿荷包鸡蛋",
    "chinese": "酿荷包鸡蛋",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：三、禽蛋菜",
        "section": "三、禽蛋菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-c04bc4713497",
    "name": "酿荷包鲫鱼",
    "chinese": "酿荷包鲫鱼",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-2ead49dce8c8",
    "name": "酿茄斗",
    "chinese": "酿茄斗",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：五、植物菜",
        "section": "五、植物菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-1dfd67acc485",
    "name": "酿银瓜",
    "chinese": "酿银瓜",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：五、植物菜",
        "section": "五、植物菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-70dda808d2cb",
    "name": "拼八宝",
    "chinese": "拼八宝",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：六、其他菜",
        "section": "六、其他菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-191f73507a8a",
    "name": "脯酥全鱼",
    "chinese": "脯酥全鱼",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-8c4b4d182eb9",
    "name": "七星螃蟹",
    "chinese": "七星螃蟹",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-c1704a38209f",
    "name": "清汆蛎子",
    "chinese": "清汆蛎子",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-421e8121e0f8",
    "name": "清汆丸子",
    "chinese": "清汆丸子",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：二、肉菜",
        "section": "二、肉菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-b8a3b9ae1205",
    "name": "清炖甲鱼",
    "chinese": "清炖甲鱼",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-705926f81b7e",
    "name": "清汤鸡蒙冬菇",
    "chinese": "清汤鸡蒙冬菇",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：三、禽蛋菜",
        "section": "三、禽蛋菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-cc1a6acd5087",
    "name": "清汤柳叶燕菜",
    "chinese": "清汤柳叶燕菜",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：一、山珍海味菜",
        "section": "一、山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-70de9da8d17d",
    "name": "清汤全家福",
    "chinese": "清汤全家福",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：六、其他菜",
        "section": "六、其他菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-61ce43037eb4",
    "name": "清炸大肠",
    "chinese": "清炸大肠",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：二、肉菜",
        "section": "二、肉菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-2086f6773a33",
    "name": "清炸黄河刀鱼",
    "chinese": "清炸黄河刀鱼",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-6e7d37204071",
    "name": "清蒸八宝甲鱼",
    "chinese": "清蒸八宝甲鱼",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-997be5b8abd3",
    "name": "清蒸加吉鱼",
    "chinese": "清蒸加吉鱼",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-d50b033eb447",
    "name": "清蒸龙骨大虾",
    "chinese": "清蒸龙骨大虾",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：一、山珍海味菜",
        "section": "一、山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-468a99a504f0",
    "name": "全爆",
    "chinese": "全爆",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：二、肉菜",
        "section": "二、肉菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-4fa417c6b79b",
    "name": "全虾三做",
    "chinese": "全虾三做",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-108def93e3b5",
    "name": "群蝶戏牡丹",
    "chinese": "群蝶戏牡丹",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-f913e7ad5348",
    "name": "软烧豆腐",
    "chinese": "软烧豆腐",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：五、植物菜",
        "section": "五、植物菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-e724f4a4e300",
    "name": "软炸虾腰",
    "chinese": "软炸虾腰",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：三、禽蛋菜",
        "section": "三、禽蛋菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-9d32b33b706b",
    "name": "软炸鲜贝",
    "chinese": "软炸鲜贝",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：一、山珍海味菜",
        "section": "一、山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-b49e51f1538f",
    "name": "软炸腰花",
    "chinese": "软炸腰花",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：二、肉菜",
        "section": "二、肉菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-c4bda0b9c460",
    "name": "赛螃蟹",
    "chinese": "赛螃蟹",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-8e785a31103b",
    "name": "三彩大虾",
    "chinese": "三彩大虾",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-0760f483e0c0",
    "name": "三美豆腐",
    "chinese": "三美豆腐",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：五、植物菜",
        "section": "五、植物菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-96604fc7837d",
    "name": "三色鸡鱼丸",
    "chinese": "三色鸡鱼丸",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：六、其他菜",
        "section": "六、其他菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-d7973d426d58",
    "name": "三鲜鹌鹑蛋",
    "chinese": "三鲜鹌鹑蛋",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：三、禽蛋菜",
        "section": "三、禽蛋菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-95888a19a15e",
    "name": "三鲜酿面筋",
    "chinese": "三鲜酿面筋",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：六、其他菜",
        "section": "六、其他菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-388641ad3387",
    "name": "砂锅三味",
    "chinese": "砂锅三味",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：六、其他菜",
        "section": "六、其他菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-f0e3666f2a77",
    "name": "山东蒸丸",
    "chinese": "山东蒸丸",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：二、肉菜",
        "section": "二、肉菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-87ae2254af13",
    "name": "烧鸡酥",
    "chinese": "烧鸡酥",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：三、禽蛋菜",
        "section": "三、禽蛋菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-b32c198d20a8",
    "name": "烧罗汉面筋",
    "chinese": "烧罗汉面筋",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：五、植物菜",
        "section": "五、植物菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-ead57b513fa2",
    "name": "烧麦爆乌鱼花",
    "chinese": "烧麦爆乌鱼花",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：六、其他菜",
        "section": "六、其他菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-a9e31660a796",
    "name": "烧素鱼翅",
    "chinese": "烧素鱼翅",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：五、植物菜",
        "section": "五、植物菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-0d9b53443272",
    "name": "烧五丝",
    "chinese": "烧五丝",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：六、其他菜",
        "section": "六、其他菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-14f67e39f341",
    "name": "什锦蜂窝豆腐",
    "chinese": "什锦蜂窝豆腐",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：五、植物菜",
        "section": "五、植物菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-d6c0ef033e68",
    "name": "什锦西瓜花篮",
    "chinese": "什锦西瓜花篮",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：五、植物菜",
        "section": "五、植物菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-dbf6527f9348",
    "name": "什锦一品锅",
    "chinese": "什锦一品锅",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：六、其他菜",
        "section": "六、其他菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-aba2363ae84c",
    "name": "寿字鸭羹",
    "chinese": "寿字鸭羹",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：三、禽蛋菜",
        "section": "三、禽蛋菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-9ffe4a0e6abe",
    "name": "双色鱿鱼卷",
    "chinese": "双色鱿鱼卷",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-e5ea4c6df9d6",
    "name": "双味蹄筋",
    "chinese": "双味蹄筋",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：二、肉菜",
        "section": "二、肉菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-b53f811b2d6c",
    "name": "水焖鸡蛋",
    "chinese": "水焖鸡蛋",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：三、禽蛋菜",
        "section": "三、禽蛋菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-38883c7300d2",
    "name": "四龙相会",
    "chinese": "四龙相会",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-42b5d1dbd391",
    "name": "四喜丸子",
    "chinese": "四喜丸子",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：二、肉菜",
        "section": "二、肉菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-e57599799a47",
    "name": "四喜鸭子",
    "chinese": "四喜鸭子",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：三、禽蛋菜",
        "section": "三、禽蛋菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-5533f5e95bda",
    "name": "四喜鱼卷",
    "chinese": "四喜鱼卷",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-7eba46f7a60b",
    "name": "酥炸春花肉",
    "chinese": "酥炸春花肉",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：二、肉菜",
        "section": "二、肉菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-9d536d97d31e",
    "name": "酥炸蹄筋",
    "chinese": "酥炸蹄筋",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：二、肉菜",
        "section": "二、肉菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-bbc56f21d911",
    "name": "素锅烤鸭",
    "chinese": "素锅烤鸭",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：五、植物菜",
        "section": "五、植物菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-febc8340b5dc",
    "name": "素火腿",
    "chinese": "素火腿",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：五、植物菜",
        "section": "五、植物菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-6baec67f24ef",
    "name": "素卷肘",
    "chinese": "素卷肘",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：五、植物菜",
        "section": "五、植物菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-8349f56a7478",
    "name": "坛子肉",
    "chinese": "坛子肉",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：二、肉菜",
        "section": "二、肉菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-716b470e253d",
    "name": "汤爆双脆",
    "chinese": "汤爆双脆",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：二、肉菜",
        "section": "二、肉菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-cb1c57761bf1",
    "name": "糖醋黄河鲤鱼",
    "chinese": "糖醋黄河鲤鱼",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-e288a5fa71c4",
    "name": "糖醋鱼条",
    "chinese": "糖醋鱼条",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-36829421079a",
    "name": "糖酱鸡块",
    "chinese": "糖酱鸡块",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：三、禽蛋菜",
        "section": "三、禽蛋菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-a1ddccf62de6",
    "name": "糖溜鲤鱼",
    "chinese": "糖溜鲤鱼",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-d47aff11a610",
    "name": "雾溜桂鱼",
    "chinese": "雾溜桂鱼",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-0d792381a057",
    "name": "虾子茭白",
    "chinese": "虾子茭白",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：六、其他菜",
        "section": "六、其他菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-6c43c84daa1c",
    "name": "鲜贝冬瓜球",
    "chinese": "鲜贝冬瓜球",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：一、山珍海味菜",
        "section": "一、山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-e7fdb58145c6",
    "name": "香酥鸡",
    "chinese": "香酥鸡",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：三、禽蛋菜",
        "section": "三、禽蛋菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-e401bd039c16",
    "name": "象眼鸽蛋",
    "chinese": "象眼鸽蛋",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：三、禽蛋菜",
        "section": "三、禽蛋菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-f82a3a21713b",
    "name": "蟹黄海参",
    "chinese": "蟹黄海参",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：一、山珍海味菜",
        "section": "一、山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-ec0aeae16388",
    "name": "蟹黄蹄筋",
    "chinese": "蟹黄蹄筋",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：二、肉菜",
        "section": "二、肉菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-22d299e0fa2a",
    "name": "蟹黄鱼翅",
    "chinese": "蟹黄鱼翅",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：一、山珍海味菜",
        "section": "一、山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-5f579e6db804",
    "name": "杏仁豆腐",
    "chinese": "杏仁豆腐",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：五、植物菜",
        "section": "五、植物菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-2ceb808f715d",
    "name": "绣球干贝",
    "chinese": "绣球干贝",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：一、山珍海味菜",
        "section": "一、山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-3562e3909c7e",
    "name": "绣球全鱼",
    "chinese": "绣球全鱼",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-2dab2c8abdf0",
    "name": "雪里蕻烧茭白",
    "chinese": "雪里蕻烧茭白",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：五、植物菜",
        "section": "五、植物菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-ca921d8cfb08",
    "name": "雪丽大蟹",
    "chinese": "雪丽大蟹",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-8edf2453a13e",
    "name": "芫爆肚仁",
    "chinese": "芫爆肚仁",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：二、肉菜",
        "section": "二、肉菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-c7529ffabd18",
    "name": "芫爆乌鱼条",
    "chinese": "芫爆乌鱼条",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-5a3a35a66dff",
    "name": "一品寿桃",
    "chinese": "一品寿桃",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：五、植物菜",
        "section": "五、植物菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-7a63356f4c95",
    "name": "油爆大蛤",
    "chinese": "油爆大蛤",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-bbe5c5ce38c7",
    "name": "油爆海螺",
    "chinese": "油爆海螺",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-9473e765a907",
    "name": "油爆鸡丁",
    "chinese": "油爆鸡丁",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：三、禽蛋菜",
        "section": "三、禽蛋菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-dd52e2191e53",
    "name": "油爆双脆",
    "chinese": "油爆双脆",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：二、肉菜",
        "section": "二、肉菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-4f6abed96792",
    "name": "油爆鲜贝",
    "chinese": "油爆鲜贝",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：一、山珍海味菜",
        "section": "一、山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-1a25479b26c8",
    "name": "油爆鱼芹",
    "chinese": "油爆鱼芹",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-13b4e0cb4bae",
    "name": "油焖凤尾鱼",
    "chinese": "油焖凤尾鱼",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-8c23ccf8c6ff",
    "name": "油泼鸡",
    "chinese": "油泼鸡",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：三、禽蛋菜",
        "section": "三、禽蛋菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-aa24705b79fe",
    "name": "鱿鱼松子",
    "chinese": "鱿鱼松子",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-b0244fa87376",
    "name": "鱼包三丝",
    "chinese": "鱼包三丝",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-34e4e4bf72d9",
    "name": "鱼腹藏羊肉",
    "chinese": "鱼腹藏羊肉",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：六、其他菜",
        "section": "六、其他菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-a090e4874027",
    "name": "鸳鸯珍珠汤",
    "chinese": "鸳鸯珍珠汤",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-1a36d055f0af",
    "name": "原壳鲍鱼",
    "chinese": "原壳鲍鱼",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：一、山珍海味菜",
        "section": "一、山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-873e0f833889",
    "name": "云片鹿角菜",
    "chinese": "云片鹿角菜",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：五、植物菜",
        "section": "五、植物菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-e797b755662a",
    "name": "糟炒厚鱼片",
    "chinese": "糟炒厚鱼片",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-29994baa9f15",
    "name": "炸菠菜脯",
    "chinese": "炸菠菜脯",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：五、植物菜",
        "section": "五、植物菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-be05cf0ec48e",
    "name": "炸蚕蛹鸡",
    "chinese": "炸蚕蛹鸡",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：三、禽蛋菜",
        "section": "三、禽蛋菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-94b17c74c592",
    "name": "炸椿芽丸子",
    "chinese": "炸椿芽丸子",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：二、肉菜",
        "section": "二、肉菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-8f35293cf42b",
    "name": "炸大扁",
    "chinese": "炸大扁",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：二、肉菜",
        "section": "二、肉菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-d2a65fc5329e",
    "name": "炸豆腐丸子",
    "chinese": "炸豆腐丸子",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：五、植物菜",
        "section": "五、植物菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-fd4aa8bae1b2",
    "name": "炸凤尾虾排",
    "chinese": "炸凤尾虾排",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-fe1cd489075e",
    "name": "炸灌汤丸子",
    "chinese": "炸灌汤丸子",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：二、肉菜",
        "section": "二、肉菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-921e63c2fac6",
    "name": "炸藿香",
    "chinese": "炸藿香",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：五、植物菜",
        "section": "五、植物菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-2905f1c8f0fd",
    "name": "炸鸡椒",
    "chinese": "炸鸡椒",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：三、禽蛋菜",
        "section": "三、禽蛋菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-30356776d30d",
    "name": "炸蛎黄",
    "chinese": "炸蛎黄",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-e4ac3e178b20",
    "name": "炸溜松花",
    "chinese": "炸溜松花",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：三、禽蛋菜",
        "section": "三、禽蛋菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-d2237e2533c7",
    "name": "炸龙肠",
    "chinese": "炸龙肠",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：六、其他菜",
        "section": "六、其他菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-330e549f0ad5",
    "name": "炸龙凤丝托",
    "chinese": "炸龙凤丝托",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：六、其他菜",
        "section": "六、其他菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-3ba3e7f1886d",
    "name": "炸素鸡排",
    "chinese": "炸素鸡排",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：五、植物菜",
        "section": "五、植物菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-ad8144f81f9d",
    "name": "炸虾串",
    "chinese": "炸虾串",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-6f5d63b173de",
    "name": "炸虾铃",
    "chinese": "炸虾铃",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-0ee776b08290",
    "name": "炸鸳鸯嘎渣",
    "chinese": "炸鸳鸯嘎渣",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：三、禽蛋菜",
        "section": "三、禽蛋菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-1e09d6c7ff72",
    "name": "炸芝麻里脊",
    "chinese": "炸芝麻里脊",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：二、肉菜",
        "section": "二、肉菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-705402c39e51",
    "name": "炸脂盖",
    "chinese": "炸脂盖",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：二、肉菜",
        "section": "二、肉菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-18dd7c01f8d2",
    "name": "涨蛋",
    "chinese": "涨蛋",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：三、禽蛋菜",
        "section": "三、禽蛋菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-9cebb9eae3e3",
    "name": "珍珠豆腐羹",
    "chinese": "珍珠豆腐羹",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：五、植物菜",
        "section": "五、植物菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-e620a9f7698a",
    "name": "珍珠海参",
    "chinese": "珍珠海参",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：一、山珍海味菜",
        "section": "一、山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-ede5061ea030",
    "name": "蒸扒三丝干贝",
    "chinese": "蒸扒三丝干贝",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：一、山珍海味菜",
        "section": "一、山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-87f7941eab5a",
    "name": "整鱼两吃",
    "chinese": "整鱼两吃",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-3509c9b45dad",
    "name": "芝麻鱼球",
    "chinese": "芝麻鱼球",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-7c466f21b8cb",
    "name": "纸包鸡",
    "chinese": "纸包鸡",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：三、禽蛋菜",
        "section": "三、禽蛋菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-3c349d7cf2be",
    "name": "纸包三鲜",
    "chinese": "纸包三鲜",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：六、其他菜",
        "section": "六、其他菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-54188f34a81f",
    "name": "纸包虾",
    "chinese": "纸包虾",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-7ea782a1b0f0",
    "name": "绉纱肉",
    "chinese": "绉纱肉",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：二、肉菜",
        "section": "二、肉菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-shandong-9370c683de85",
    "name": "抓炒鱼仁",
    "chinese": "抓炒鱼仁",
    "cuisine": "shandong",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "shandong",
        "title": "中国名菜谱·山东风味",
        "isbn": "9787500510598",
        "url": "https://book.douban.com/subject/20391487/",
        "bookUrl": "https://book.douban.com/subject/20391487/",
        "locator": "公开目录：四、水产菜",
        "section": "四、水产菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-zhejiang-0e88151a67b4",
    "name": "扒八珍",
    "chinese": "扒八珍",
    "cuisine": "zhejiang",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "zhejiang",
        "title": "中国名菜谱·浙江风味",
        "isbn": "9787500502494",
        "url": "https://max.book118.com/html/2015/0707/20593655.shtm",
        "bookUrl": "https://book.douban.com/subject/20391490/",
        "locator": "公开目录第 13 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-zhejiang-7199466b5c0f",
    "name": "白汁鲍脯",
    "chinese": "白汁鲍脯",
    "cuisine": "zhejiang",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "zhejiang",
        "title": "中国名菜谱·浙江风味",
        "isbn": "9787500502494",
        "url": "https://max.book118.com/html/2015/0707/20593655.shtm",
        "bookUrl": "https://book.douban.com/subject/20391490/",
        "locator": "公开目录第 7 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-zhejiang-0d23530fa966",
    "name": "白字焖肉",
    "chinese": "白字焖肉",
    "cuisine": "zhejiang",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "zhejiang",
        "title": "中国名菜谱·浙江风味",
        "isbn": "9787500502494",
        "url": "https://max.book118.com/html/2015/0707/20593655.shtm",
        "bookUrl": "https://book.douban.com/subject/20391490/",
        "locator": "公开目录第 33 项（非页码）",
        "section": "肉菜",
        "nameNeedsReview": true,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-zhejiang-14ace66d12a5",
    "name": "冰糖明骨",
    "chinese": "冰糖明骨",
    "cuisine": "zhejiang",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "zhejiang",
        "title": "中国名菜谱·浙江风味",
        "isbn": "9787500502494",
        "url": "https://max.book118.com/html/2015/0707/20593655.shtm",
        "bookUrl": "https://book.douban.com/subject/20391490/",
        "locator": "公开目录第 15 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-zhejiang-b76e84cffbaf",
    "name": "炒芙蓉鲍片",
    "chinese": "炒芙蓉鲍片",
    "cuisine": "zhejiang",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "zhejiang",
        "title": "中国名菜谱·浙江风味",
        "isbn": "9787500502494",
        "url": "https://max.book118.com/html/2015/0707/20593655.shtm",
        "bookUrl": "https://book.douban.com/subject/20391490/",
        "locator": "公开目录第 8 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-zhejiang-ee47692c4594",
    "name": "芙蓉燕窝",
    "chinese": "芙蓉燕窝",
    "cuisine": "zhejiang",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "zhejiang",
        "title": "中国名菜谱·浙江风味",
        "isbn": "9787500502494",
        "url": "https://max.book118.com/html/2015/0707/20593655.shtm",
        "bookUrl": "https://book.douban.com/subject/20391490/",
        "locator": "公开目录第 2 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-zhejiang-91857ed7ad08",
    "name": "干菜焖肉",
    "chinese": "干菜焖肉",
    "cuisine": "zhejiang",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "zhejiang",
        "title": "中国名菜谱·浙江风味",
        "isbn": "9787500502494",
        "url": "https://max.book118.com/html/2015/0707/20593655.shtm",
        "bookUrl": "https://book.douban.com/subject/20391490/",
        "locator": "公开目录第 32 项（非页码）",
        "section": "肉菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-zhejiang-316fd3d9bccc",
    "name": "鸽蛋鱼脑",
    "chinese": "鸽蛋鱼脑",
    "cuisine": "zhejiang",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "zhejiang",
        "title": "中国名菜谱·浙江风味",
        "isbn": "9787500502494",
        "url": "https://max.book118.com/html/2015/0707/20593655.shtm",
        "bookUrl": "https://book.douban.com/subject/20391490/",
        "locator": "公开目录第 16 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-zhejiang-74223cb6b5d9",
    "name": "红烧裙边",
    "chinese": "红烧裙边",
    "cuisine": "zhejiang",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "zhejiang",
        "title": "中国名菜谱·浙江风味",
        "isbn": "9787500502494",
        "url": "https://max.book118.com/html/2015/0707/20593655.shtm",
        "bookUrl": "https://book.douban.com/subject/20391490/",
        "locator": "公开目录第 25 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-zhejiang-ed60261ff7ef",
    "name": "猴头四宝",
    "chinese": "猴头四宝",
    "cuisine": "zhejiang",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "zhejiang",
        "title": "中国名菜谱·浙江风味",
        "isbn": "9787500502494",
        "url": "https://max.book118.com/html/2015/0707/20593655.shtm",
        "bookUrl": "https://book.douban.com/subject/20391490/",
        "locator": "公开目录第 29 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-zhejiang-371dfcbf4b00",
    "name": "黄鱼海参",
    "chinese": "黄鱼海参",
    "cuisine": "zhejiang",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "zhejiang",
        "title": "中国名菜谱·浙江风味",
        "isbn": "9787500502494",
        "url": "https://max.book118.com/html/2015/0707/20593655.shtm",
        "bookUrl": "https://book.douban.com/subject/20391490/",
        "locator": "公开目录第 22 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-zhejiang-70abbef382b6",
    "name": "黄鱼溜翅",
    "chinese": "黄鱼溜翅",
    "cuisine": "zhejiang",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "zhejiang",
        "title": "中国名菜谱·浙江风味",
        "isbn": "9787500502494",
        "url": "https://max.book118.com/html/2015/0707/20593655.shtm",
        "bookUrl": "https://book.douban.com/subject/20391490/",
        "locator": "公开目录第 6 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-zhejiang-1cf9cf47c896",
    "name": "火踵鱼翅",
    "chinese": "火踵鱼翅",
    "cuisine": "zhejiang",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "zhejiang",
        "title": "中国名菜谱·浙江风味",
        "isbn": "9787500502494",
        "url": "https://max.book118.com/html/2015/0707/20593655.shtm",
        "bookUrl": "https://book.douban.com/subject/20391490/",
        "locator": "公开目录第 5 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-zhejiang-7fee8559dff6",
    "name": "鸡翅海参",
    "chinese": "鸡翅海参",
    "cuisine": "zhejiang",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "zhejiang",
        "title": "中国名菜谱·浙江风味",
        "isbn": "9787500502494",
        "url": "https://max.book118.com/html/2015/0707/20593655.shtm",
        "bookUrl": "https://book.douban.com/subject/20391490/",
        "locator": "公开目录第 21 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-zhejiang-3bb71d9a3584",
    "name": "鸡火鱼唇",
    "chinese": "鸡火鱼唇",
    "cuisine": "zhejiang",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "zhejiang",
        "title": "中国名菜谱·浙江风味",
        "isbn": "9787500502494",
        "url": "https://max.book118.com/html/2015/0707/20593655.shtm",
        "bookUrl": "https://book.douban.com/subject/20391490/",
        "locator": "公开目录第 12 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-zhejiang-b9927af1eada",
    "name": "鸡茸哈士蟆",
    "chinese": "鸡茸哈士蟆",
    "cuisine": "zhejiang",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "zhejiang",
        "title": "中国名菜谱·浙江风味",
        "isbn": "9787500502494",
        "url": "https://max.book118.com/html/2015/0707/20593655.shtm",
        "bookUrl": "https://book.douban.com/subject/20391490/",
        "locator": "公开目录第 27 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-zhejiang-b5e29d51f53c",
    "name": "鸡汁燕窝",
    "chinese": "鸡汁燕窝",
    "cuisine": "zhejiang",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "zhejiang",
        "title": "中国名菜谱·浙江风味",
        "isbn": "9787500502494",
        "url": "https://max.book118.com/html/2015/0707/20593655.shtm",
        "bookUrl": "https://book.douban.com/subject/20391490/",
        "locator": "公开目录第 1 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-zhejiang-0ed5619df1e4",
    "name": "鸡汁鱼唇",
    "chinese": "鸡汁鱼唇",
    "cuisine": "zhejiang",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "zhejiang",
        "title": "中国名菜谱·浙江风味",
        "isbn": "9787500502494",
        "url": "https://max.book118.com/html/2015/0707/20593655.shtm",
        "bookUrl": "https://book.douban.com/subject/20391490/",
        "locator": "公开目录第 10 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-zhejiang-f4be75493bc7",
    "name": "桔络明骨",
    "chinese": "桔络明骨",
    "cuisine": "zhejiang",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "zhejiang",
        "title": "中国名菜谱·浙江风味",
        "isbn": "9787500502494",
        "url": "https://max.book118.com/html/2015/0707/20593655.shtm",
        "bookUrl": "https://book.douban.com/subject/20391490/",
        "locator": "公开目录第 14 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-zhejiang-1c190b4f524f",
    "name": "芥菜鱼肚",
    "chinese": "芥菜鱼肚",
    "cuisine": "zhejiang",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "zhejiang",
        "title": "中国名菜谱·浙江风味",
        "isbn": "9787500502494",
        "url": "https://max.book118.com/html/2015/0707/20593655.shtm",
        "bookUrl": "https://book.douban.com/subject/20391490/",
        "locator": "公开目录第 9 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-zhejiang-00e4334f10a0",
    "name": "金钱鲜贝合",
    "chinese": "金钱鲜贝合",
    "cuisine": "zhejiang",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "zhejiang",
        "title": "中国名菜谱·浙江风味",
        "isbn": "9787500502494",
        "url": "https://max.book118.com/html/2015/0707/20593655.shtm",
        "bookUrl": "https://book.douban.com/subject/20391490/",
        "locator": "公开目录第 24 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-zhejiang-a744d95eb29c",
    "name": "金腿猴蘑",
    "chinese": "金腿猴蘑",
    "cuisine": "zhejiang",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "zhejiang",
        "title": "中国名菜谱·浙江风味",
        "isbn": "9787500502494",
        "url": "https://max.book118.com/html/2015/0707/20593655.shtm",
        "bookUrl": "https://book.douban.com/subject/20391490/",
        "locator": "公开目录第 30 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-zhejiang-b80999e38efb",
    "name": "清扒鱼翅",
    "chinese": "清扒鱼翅",
    "cuisine": "zhejiang",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "zhejiang",
        "title": "中国名菜谱·浙江风味",
        "isbn": "9787500502494",
        "url": "https://max.book118.com/html/2015/0707/20593655.shtm",
        "bookUrl": "https://book.douban.com/subject/20391490/",
        "locator": "公开目录第 3 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-zhejiang-50c1a8d22394",
    "name": "清蒸干贝",
    "chinese": "清蒸干贝",
    "cuisine": "zhejiang",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "zhejiang",
        "title": "中国名菜谱·浙江风味",
        "isbn": "9787500502494",
        "url": "https://max.book118.com/html/2015/0707/20593655.shtm",
        "bookUrl": "https://book.douban.com/subject/20391490/",
        "locator": "公开目录第 23 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-zhejiang-c32128804f57",
    "name": "人参乌骨鸡",
    "chinese": "人参乌骨鸡",
    "cuisine": "zhejiang",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "zhejiang",
        "title": "中国名菜谱·浙江风味",
        "isbn": "9787500502494",
        "url": "https://max.book118.com/html/2015/0707/20593655.shtm",
        "bookUrl": "https://book.douban.com/subject/20391490/",
        "locator": "公开目录第 26 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-zhejiang-c2478f878e04",
    "name": "三鲜海参",
    "chinese": "三鲜海参",
    "cuisine": "zhejiang",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "zhejiang",
        "title": "中国名菜谱·浙江风味",
        "isbn": "9787500502494",
        "url": "https://max.book118.com/html/2015/0707/20593655.shtm",
        "bookUrl": "https://book.douban.com/subject/20391490/",
        "locator": "公开目录第 20 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-zhejiang-d68f608de2f6",
    "name": "沙锅鱼唇",
    "chinese": "沙锅鱼唇",
    "cuisine": "zhejiang",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "zhejiang",
        "title": "中国名菜谱·浙江风味",
        "isbn": "9787500502494",
        "url": "https://max.book118.com/html/2015/0707/20593655.shtm",
        "bookUrl": "https://book.douban.com/subject/20391490/",
        "locator": "公开目录第 11 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-zhejiang-800d1389b144",
    "name": "绍式小扣",
    "chinese": "绍式小扣",
    "cuisine": "zhejiang",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "zhejiang",
        "title": "中国名菜谱·浙江风味",
        "isbn": "9787500502494",
        "url": "https://max.book118.com/html/2015/0707/20593655.shtm",
        "bookUrl": "https://book.douban.com/subject/20391490/",
        "locator": "公开目录第 34 项（非页码）",
        "section": "肉菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-zhejiang-a6aef28bea77",
    "name": "蒜子鱼皮",
    "chinese": "蒜子鱼皮",
    "cuisine": "zhejiang",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "zhejiang",
        "title": "中国名菜谱·浙江风味",
        "isbn": "9787500502494",
        "url": "https://max.book118.com/html/2015/0707/20593655.shtm",
        "bookUrl": "https://book.douban.com/subject/20391490/",
        "locator": "公开目录第 17 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-zhejiang-aef95f56d316",
    "name": "苔菜小方",
    "chinese": "苔菜小方",
    "cuisine": "zhejiang",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "zhejiang",
        "title": "中国名菜谱·浙江风味",
        "isbn": "9787500502494",
        "url": "https://max.book118.com/html/2015/0707/20593655.shtm",
        "bookUrl": "https://book.douban.com/subject/20391490/",
        "locator": "公开目录第 35 项（非页码）",
        "section": "肉菜",
        "nameNeedsReview": true,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-zhejiang-eebc6eab6c20",
    "name": "虾仁鱼皮",
    "chinese": "虾仁鱼皮",
    "cuisine": "zhejiang",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "zhejiang",
        "title": "中国名菜谱·浙江风味",
        "isbn": "9787500502494",
        "url": "https://max.book118.com/html/2015/0707/20593655.shtm",
        "bookUrl": "https://book.douban.com/subject/20391490/",
        "locator": "公开目录第 18 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-zhejiang-94984e526a2a",
    "name": "虾子扒刺参",
    "chinese": "虾子扒刺参",
    "cuisine": "zhejiang",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "zhejiang",
        "title": "中国名菜谱·浙江风味",
        "isbn": "9787500502494",
        "url": "https://max.book118.com/html/2015/0707/20593655.shtm",
        "bookUrl": "https://book.douban.com/subject/20391490/",
        "locator": "公开目录第 19 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-zhejiang-b06c9273d8b8",
    "name": "蟹粉鱼翅",
    "chinese": "蟹粉鱼翅",
    "cuisine": "zhejiang",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "zhejiang",
        "title": "中国名菜谱·浙江风味",
        "isbn": "9787500502494",
        "url": "https://max.book118.com/html/2015/0707/20593655.shtm",
        "bookUrl": "https://book.douban.com/subject/20391490/",
        "locator": "公开目录第 4 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-zhejiang-42acd6a6257e",
    "name": "枣莲炖雪哈",
    "chinese": "枣莲炖雪哈",
    "cuisine": "zhejiang",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "zhejiang",
        "title": "中国名菜谱·浙江风味",
        "isbn": "9787500502494",
        "url": "https://max.book118.com/html/2015/0707/20593655.shtm",
        "bookUrl": "https://book.douban.com/subject/20391490/",
        "locator": "公开目录第 28 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-beijing-b08cc536ee83",
    "name": "白扒燕菜卷",
    "chinese": "白扒燕菜卷",
    "cuisine": "beijing",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "beijing",
        "title": "中国名菜谱·北京风味",
        "isbn": "9787500501831",
        "url": "https://max.book118.com/html/2015/0707/8045005073000024.shtm",
        "bookUrl": "https://book.douban.com/subject/4119251/",
        "locator": "公开目录第 2 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-beijing-e11c484562fa",
    "name": "汆银耳鸭舌",
    "chinese": "汆银耳鸭舌",
    "cuisine": "beijing",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "beijing",
        "title": "中国名菜谱·北京风味",
        "isbn": "9787500501831",
        "url": "https://max.book118.com/html/2015/0707/8045005073000024.shtm",
        "bookUrl": "https://book.douban.com/subject/4119251/",
        "locator": "公开目录第 10 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-beijing-218edda47001",
    "name": "海红鱼唇",
    "chinese": "海红鱼唇",
    "cuisine": "beijing",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "beijing",
        "title": "中国名菜谱·北京风味",
        "isbn": "9787500501831",
        "url": "https://max.book118.com/html/2015/0707/8045005073000024.shtm",
        "bookUrl": "https://book.douban.com/subject/4119251/",
        "locator": "公开目录第 3 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-beijing-e1f81d3c85cd",
    "name": "红烧驼掌",
    "chinese": "红烧驼掌",
    "cuisine": "beijing",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "beijing",
        "title": "中国名菜谱·北京风味",
        "isbn": "9787500501831",
        "url": "https://max.book118.com/html/2015/0707/8045005073000024.shtm",
        "bookUrl": "https://book.douban.com/subject/4119251/",
        "locator": "公开目录第 7 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-beijing-d0db578d5c0f",
    "name": "红烧熊掌",
    "chinese": "红烧熊掌",
    "cuisine": "beijing",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "beijing",
        "title": "中国名菜谱·北京风味",
        "isbn": "9787500501831",
        "url": "https://max.book118.com/html/2015/0707/8045005073000024.shtm",
        "bookUrl": "https://book.douban.com/subject/4119251/",
        "locator": "公开目录第 4 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-beijing-04a2caafea51",
    "name": "黄焖鱼翅",
    "chinese": "黄焖鱼翅",
    "cuisine": "beijing",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "beijing",
        "title": "中国名菜谱·北京风味",
        "isbn": "9787500501831",
        "url": "https://max.book118.com/html/2015/0707/8045005073000024.shtm",
        "bookUrl": "https://book.douban.com/subject/4119251/",
        "locator": "公开目录第 12 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-beijing-5372d5ac5521",
    "name": "鸡米鹿筋",
    "chinese": "鸡米鹿筋",
    "cuisine": "beijing",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "beijing",
        "title": "中国名菜谱·北京风味",
        "isbn": "9787500501831",
        "url": "https://max.book118.com/html/2015/0707/8045005073000024.shtm",
        "bookUrl": "https://book.douban.com/subject/4119251/",
        "locator": "公开目录第 6 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-beijing-20bf41499401",
    "name": "鸡茸银耳",
    "chinese": "鸡茸银耳",
    "cuisine": "beijing",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "beijing",
        "title": "中国名菜谱·北京风味",
        "isbn": "9787500501831",
        "url": "https://max.book118.com/html/2015/0707/8045005073000024.shtm",
        "bookUrl": "https://book.douban.com/subject/4119251/",
        "locator": "公开目录第 9 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-beijing-77d9edff7bc8",
    "name": "鹿茸三珍",
    "chinese": "鹿茸三珍",
    "cuisine": "beijing",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "beijing",
        "title": "中国名菜谱·北京风味",
        "isbn": "9787500501831",
        "url": "https://max.book118.com/html/2015/0707/8045005073000024.shtm",
        "bookUrl": "https://book.douban.com/subject/4119251/",
        "locator": "公开目录第 5 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-beijing-a3ff206b494b",
    "name": "清炒驼峰丝",
    "chinese": "清炒驼峰丝",
    "cuisine": "beijing",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "beijing",
        "title": "中国名菜谱·北京风味",
        "isbn": "9787500501831",
        "url": "https://max.book118.com/html/2015/0707/8045005073000024.shtm",
        "bookUrl": "https://book.douban.com/subject/4119251/",
        "locator": "公开目录第 8 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-beijing-53bb72d44d9e",
    "name": "清汤燕菜",
    "chinese": "清汤燕菜",
    "cuisine": "beijing",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "beijing",
        "title": "中国名菜谱·北京风味",
        "isbn": "9787500501831",
        "url": "https://max.book118.com/html/2015/0707/8045005073000024.shtm",
        "bookUrl": "https://book.douban.com/subject/4119251/",
        "locator": "公开目录第 1 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-beijing-246a6a513687",
    "name": "清汤银耳",
    "chinese": "清汤银耳",
    "cuisine": "beijing",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "beijing",
        "title": "中国名菜谱·北京风味",
        "isbn": "9787500501831",
        "url": "https://max.book118.com/html/2015/0707/8045005073000024.shtm",
        "bookUrl": "https://book.douban.com/subject/4119251/",
        "locator": "公开目录第 11 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-henan-77192ac80dc4",
    "name": "扒猴头",
    "chinese": "扒猴头",
    "cuisine": "henan",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "henan",
        "title": "中国名菜谱·河南风味",
        "isbn": "9787500511168",
        "url": "https://max.book118.com/html/2017/1115/140118052.shtm",
        "bookUrl": "https://book.douban.com/subject/20391491/",
        "locator": "公开目录第 7 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-henan-a3c6bde41032",
    "name": "扒竹荪带底",
    "chinese": "扒竹荪带底",
    "cuisine": "henan",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "henan",
        "title": "中国名菜谱·河南风味",
        "isbn": "9787500511168",
        "url": "https://max.book118.com/html/2017/1115/140118052.shtm",
        "bookUrl": "https://book.douban.com/subject/20391491/",
        "locator": "公开目录第 4 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-henan-fc3d5d4cea38",
    "name": "白扒鱼翅",
    "chinese": "白扒鱼翅",
    "cuisine": "henan",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "henan",
        "title": "中国名菜谱·河南风味",
        "isbn": "9787500511168",
        "url": "https://max.book118.com/html/2017/1115/140118052.shtm",
        "bookUrl": "https://book.douban.com/subject/20391491/",
        "locator": "公开目录第 14 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-henan-280d1a031a7b",
    "name": "猴头干贝",
    "chinese": "猴头干贝",
    "cuisine": "henan",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "henan",
        "title": "中国名菜谱·河南风味",
        "isbn": "9787500511168",
        "url": "https://max.book118.com/html/2017/1115/140118052.shtm",
        "bookUrl": "https://book.douban.com/subject/20391491/",
        "locator": "公开目录第 10 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-henan-36b772a4deba",
    "name": "火腿扒鹿筋",
    "chinese": "火腿扒鹿筋",
    "cuisine": "henan",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "henan",
        "title": "中国名菜谱·河南风味",
        "isbn": "9787500511168",
        "url": "https://max.book118.com/html/2017/1115/140118052.shtm",
        "bookUrl": "https://book.douban.com/subject/20391491/",
        "locator": "公开目录第 11 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-henan-759d853e45cb",
    "name": "鸡茸酿竹荪",
    "chinese": "鸡茸酿竹荪",
    "cuisine": "henan",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "henan",
        "title": "中国名菜谱·河南风味",
        "isbn": "9787500511168",
        "url": "https://max.book118.com/html/2017/1115/140118052.shtm",
        "bookUrl": "https://book.douban.com/subject/20391491/",
        "locator": "公开目录第 5 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-henan-621ff1f8cc74",
    "name": "丽参鹿筋汆鱼丸",
    "chinese": "丽参鹿筋汆鱼丸",
    "cuisine": "henan",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "henan",
        "title": "中国名菜谱·河南风味",
        "isbn": "9787500511168",
        "url": "https://max.book118.com/html/2017/1115/140118052.shtm",
        "bookUrl": "https://book.douban.com/subject/20391491/",
        "locator": "公开目录第 12 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-henan-241b0acdce45",
    "name": "奶汤炖熊掌",
    "chinese": "奶汤炖熊掌",
    "cuisine": "henan",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "henan",
        "title": "中国名菜谱·河南风味",
        "isbn": "9787500511168",
        "url": "https://max.book118.com/html/2017/1115/140118052.shtm",
        "bookUrl": "https://book.douban.com/subject/20391491/",
        "locator": "公开目录第 2 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-henan-87c1db3c1ac7",
    "name": "清汤燕菜",
    "chinese": "清汤燕菜",
    "cuisine": "henan",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "henan",
        "title": "中国名菜谱·河南风味",
        "isbn": "9787500511168",
        "url": "https://max.book118.com/html/2017/1115/140118052.shtm",
        "bookUrl": "https://book.douban.com/subject/20391491/",
        "locator": "公开目录第 13 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-henan-b7f923d1f609",
    "name": "清汤竹荪",
    "chinese": "清汤竹荪",
    "cuisine": "henan",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "henan",
        "title": "中国名菜谱·河南风味",
        "isbn": "9787500511168",
        "url": "https://max.book118.com/html/2017/1115/140118052.shtm",
        "bookUrl": "https://book.douban.com/subject/20391491/",
        "locator": "公开目录第 3 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-henan-c09659863aaf",
    "name": "三丝网包鱼翅",
    "chinese": "三丝网包鱼翅",
    "cuisine": "henan",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "henan",
        "title": "中国名菜谱·河南风味",
        "isbn": "9787500511168",
        "url": "https://max.book118.com/html/2017/1115/140118052.shtm",
        "bookUrl": "https://book.douban.com/subject/20391491/",
        "locator": "公开目录第 15 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-henan-15ec35469ab9",
    "name": "烧酿猴头",
    "chinese": "烧酿猴头",
    "cuisine": "henan",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "henan",
        "title": "中国名菜谱·河南风味",
        "isbn": "9787500511168",
        "url": "https://max.book118.com/html/2017/1115/140118052.shtm",
        "bookUrl": "https://book.douban.com/subject/20391491/",
        "locator": "公开目录第 6 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-henan-fe60a73fad8f",
    "name": "烧酿羊素肚",
    "chinese": "烧酿羊素肚",
    "cuisine": "henan",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "henan",
        "title": "中国名菜谱·河南风味",
        "isbn": "9787500511168",
        "url": "https://max.book118.com/html/2017/1115/140118052.shtm",
        "bookUrl": "https://book.douban.com/subject/20391491/",
        "locator": "公开目录第 9 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-henan-d42fd25f4e29",
    "name": "银珠扒熊掌",
    "chinese": "银珠扒熊掌",
    "cuisine": "henan",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "henan",
        "title": "中国名菜谱·河南风味",
        "isbn": "9787500511168",
        "url": "https://max.book118.com/html/2017/1115/140118052.shtm",
        "bookUrl": "https://book.douban.com/subject/20391491/",
        "locator": "公开目录第 1 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  },
  {
    "id": "book-henan-208514acc45e",
    "name": "玉珠双珍",
    "chinese": "玉珠双珍",
    "cuisine": "henan",
    "description": "",
    "minutes": null,
    "difficulty": null,
    "heat": null,
    "flavors": [],
    "tags": [
      "仅菜名"
    ],
    "servings": null,
    "restaurants": [],
    "ingredients": [],
    "steps": [],
    "tip": "",
    "allergens": [],
    "catalogOnly": true,
    "sources": [
      {
        "volumeId": "henan",
        "title": "中国名菜谱·河南风味",
        "isbn": "9787500511168",
        "url": "https://max.book118.com/html/2017/1115/140118052.shtm",
        "bookUrl": "https://book.douban.com/subject/20391491/",
        "locator": "公开目录第 8 项（非页码）",
        "section": "山珍海味菜",
        "nameNeedsReview": false,
        "recipeVerified": false
      }
    ],
    "recipeOrigin": "尚未核实书中做法。"
  }
];