/* SOL · 西语日常 — 短语库、语法、发音、情景实战与资源 */
window.SOL_PHRASE_CATEGORIES = [
  { id: "all", label: "全部", icon: "sparkles" },
  { id: "survival", label: "生存必备", icon: "compass" },
  { id: "greeting", label: "问候寒暄", icon: "sun" },
  { id: "food", label: "咖啡与餐桌", icon: "coffee" },
  { id: "transport", label: "出行问路", icon: "map-pin" },
  { id: "shopping", label: "购物", icon: "bag" },
  { id: "housing", label: "住宿租房", icon: "home" },
  { id: "emergency", label: "紧急求助", icon: "first-aid" },
  { id: "social", label: "社交聊天", icon: "users" }
];

window.SOL_PHRASES = [
  { id: "p01", cat: "survival", es: "Hola, ¿qué tal?", zh: "你好，最近怎么样？", pron: "奥拉 · 克 塔尔" },
  { id: "p02", cat: "survival", es: "Perdona, no entiendo.", zh: "抱歉，我不明白。", pron: "佩尔多纳 · 诺 恩铁恩多" },
  { id: "p03", cat: "survival", es: "¿Puedes hablar más despacio?", zh: "你能说慢一点吗？", pron: "普埃德斯 阿布拉尔 马斯 德斯帕西奥" },
  { id: "p04", cat: "survival", es: "¿Cómo se dice esto en español?", zh: "这个用西语怎么说？", pron: "科莫 塞 迪塞 埃斯托 恩 埃斯帕尼奥尔" },
  { id: "p05", cat: "survival", es: "¿Puedes repetirlo, por favor?", zh: "请再重复一遍。", pron: "普埃德斯 雷佩蒂尔洛 波尔 法沃尔" },
  { id: "p06", cat: "survival", es: "No hablo mucho español.", zh: "我西语说得不多。", pron: "诺 阿布洛 穆乔 埃斯帕尼奥尔" },
  { id: "p07", cat: "survival", es: "Estoy aprendiendo.", zh: "我在学。", pron: "埃斯托伊 阿普雷迪恩多" },
  { id: "p08", cat: "survival", es: "¿Hablas inglés?", zh: "你会说英语吗？", pron: "阿布拉斯 因格莱斯" },
  { id: "p09", cat: "survival", es: "¿Me puedes ayudar?", zh: "你能帮我吗？", pron: "梅 普埃德斯 阿尤达尔" },
  { id: "p10", cat: "survival", es: "Un momento, por favor.", zh: "请稍等一下。", pron: "乌恩 莫门托 波尔 法沃尔" },

  { id: "p11", cat: "greeting", es: "Buenos días.", zh: "早上好。", pron: "布埃诺斯 迪亚斯" },
  { id: "p12", cat: "greeting", es: "Buenas tardes.", zh: "下午好。", pron: "布埃纳斯 塔尔德斯" },
  { id: "p13", cat: "greeting", es: "Buenas noches.", zh: "晚上好 / 晚安。", pron: "布埃纳斯 诺切斯" },
  { id: "p14", cat: "greeting", es: "Me llamo...", zh: "我叫……", pron: "梅 亚莫" },
  { id: "p15", cat: "greeting", es: "¿Cómo te llamas?", zh: "你叫什么名字？", pron: "科莫 特 亚马斯" },
  { id: "p16", cat: "greeting", es: "Mucho gusto.", zh: "很高兴认识你。", pron: "穆乔 古斯托" },
  { id: "p17", cat: "greeting", es: "¿De dónde eres?", zh: "你来自哪里？", pron: "德 东德 埃雷斯" },
  { id: "p18", cat: "greeting", es: "Soy de China.", zh: "我来自中国。", pron: "索伊 德 奇纳" },
  { id: "p19", cat: "greeting", es: "¿Cómo estás?", zh: "你好吗？", pron: "科莫 埃斯塔斯" },
  { id: "p20", cat: "greeting", es: "Muy bien, gracias. ¿Y tú?", zh: "很好，谢谢。你呢？", pron: "穆伊 比恩 格拉西亚斯 伊 图" },
  { id: "p21", cat: "greeting", es: "Hasta luego.", zh: "回头见。", pron: "阿斯塔 卢埃戈" },
  { id: "p22", cat: "greeting", es: "Nos vemos.", zh: "再见。", pron: "诺斯 贝莫斯" },
  { id: "p23", cat: "greeting", es: "¡Que tengas un buen día!", zh: "祝你今天愉快！", pron: "克 滕加斯 乌恩 布恩 迪亚" },
  { id: "p24", cat: "greeting", es: "Encantado / Encantada de conocerte.", zh: "很高兴认识你。（男/女）", pron: "恩坎塔多 / 恩坎塔达 德 科诺塞尔特" },

  { id: "p25", cat: "food", es: "Una mesa para dos, por favor.", zh: "请给一张两人桌。", pron: "乌纳 梅萨 帕拉 多斯 波尔 法沃尔" },
  { id: "p26", cat: "food", es: "¿Qué me recomienda?", zh: "你推荐什么？", pron: "克 梅 雷科米恩达" },
  { id: "p27", cat: "food", es: "Para mí, el menú del día.", zh: "我要今日套餐。", pron: "帕拉 米 埃尔 梅努 德尔 迪亚" },
  { id: "p28", cat: "food", es: "Soy alérgico / alérgica a los frutos secos.", zh: "我对坚果过敏。（男/女）", pron: "索伊 阿莱尔希科 / 阿莱尔希卡 阿 洛斯 弗鲁托斯 塞科斯", note: "严重过敏时请慢慢说，并确认 ¿Lleva frutos secos?" },
  { id: "p29", cat: "food", es: "Sin carne, por favor.", zh: "不要肉，谢谢。", pron: "辛 卡尔内 波尔 法沃尔" },
  { id: "p30", cat: "food", es: "¿Tienen opciones vegetarianas?", zh: "有素食选项吗？", pron: "铁嫩 奥普西奥内斯 贝赫塔里亚纳斯" },
  { id: "p31", cat: "food", es: "Una botella de agua sin gas, por favor.", zh: "请来一瓶不含气矿泉水。", pron: "乌纳 博特利亚 德 阿瓜 辛 加斯" },
  { id: "p32", cat: "food", es: "La cuenta, por favor.", zh: "请结账。", pron: "拉 宽塔 波尔 法沃尔" },
  { id: "p33", cat: "food", es: "¿Puedo pagar con tarjeta?", zh: "可以刷卡吗？", pron: "普埃多 帕加尔 孔 塔尔赫塔" },
  { id: "p34", cat: "food", es: "Para llevar, por favor.", zh: "请打包 / 外带。", pron: "帕拉 耶瓦尔 波尔 法沃尔" },
  { id: "p35", cat: "food", es: "Está buenísimo.", zh: "太好吃了。", pron: "埃斯塔 布埃尼西莫" },
  { id: "p36", cat: "food", es: "¿Dónde está el baño?", zh: "洗手间在哪里？", pron: "东德 埃斯塔 埃尔 巴尼奥" },
  { id: "p37", cat: "food", es: "Un café con leche, por favor.", zh: "请来一杯拿铁。", pron: "乌恩 卡费 孔 莱切 波尔 法沃尔" },
  { id: "p38", cat: "food", es: "Sin azúcar, por favor.", zh: "不要糖，谢谢。", pron: "辛 阿苏卡尔 波尔 法沃尔" },

  { id: "p39", cat: "transport", es: "¿Dónde está la estación?", zh: "车站在哪里？", pron: "东德 埃斯塔 拉 埃斯塔西翁" },
  { id: "p40", cat: "transport", es: "¿Cómo llego al centro?", zh: "怎么去市中心？", pron: "科莫 耶戈 阿尔 森特罗" },
  { id: "p41", cat: "transport", es: "¿Está lejos?", zh: "远吗？", pron: "埃斯塔 莱霍斯" },
  { id: "p42", cat: "transport", es: "Todo recto.", zh: "一直走。", pron: "托多 雷克托" },
  { id: "p43", cat: "transport", es: "Gira a la derecha / izquierda.", zh: "右转 / 左转。", pron: "希拉 阿 拉 德雷查 / 伊斯别尔达" },
  { id: "p44", cat: "transport", es: "¿Qué línea tengo que coger?", zh: "我该坐哪条线？", pron: "克 利内亚 滕戈 克 科赫尔" },
  { id: "p45", cat: "transport", es: "Un billete de ida, por favor.", zh: "请来一张单程票。", pron: "乌恩 比耶特 德 伊达 波尔 法沃尔" },
  { id: "p46", cat: "transport", es: "Un billete de ida y vuelta.", zh: "一张往返票。", pron: "乌恩 比耶特 德 伊达 伊 布埃尔塔" },
  { id: "p47", cat: "transport", es: "Bajo en la próxima parada.", zh: "我在下一站下车。", pron: "巴霍 恩 拉 普罗克西马 帕拉达" },
  { id: "p48", cat: "transport", es: "¿Puedo ir andando?", zh: "我可以走过去吗？", pron: "普埃多 伊尔 安当多" },
  { id: "p49", cat: "transport", es: "Estoy perdido / perdida.", zh: "我迷路了。（男/女）", pron: "埃斯托伊 佩尔迪多 / 佩尔迪达" },
  { id: "p50", cat: "transport", es: "¿Cuánto tarda el autobús?", zh: "公交要多久？", pron: "宽托 塔尔达 埃尔 奥托布斯" },

  { id: "p51", cat: "shopping", es: "¿Cuánto cuesta?", zh: "多少钱？", pron: "宽托 奎斯塔" },
  { id: "p52", cat: "shopping", es: "¿Tienes esto en otra talla?", zh: "这个有别的尺码吗？", pron: "铁内斯 埃斯托 恩 奥特拉 塔亚" },
  { id: "p53", cat: "shopping", es: "¿Me lo puedo probar?", zh: "我可以试穿吗？", pron: "梅 洛 普埃多 普罗巴尔" },
  { id: "p54", cat: "shopping", es: "Me lo llevo.", zh: "我买了。", pron: "梅 洛 耶沃" },
  { id: "p55", cat: "shopping", es: "Es demasiado caro.", zh: "太贵了。", pron: "埃斯 德马西亚多 卡罗" },
  { id: "p56", cat: "shopping", es: "¿Hay algo más barato?", zh: "有便宜一点的吗？", pron: "阿伊 阿尔戈 马斯 巴拉托" },
  { id: "p57", cat: "shopping", es: "Solo estoy mirando, gracias.", zh: "我只是看看，谢谢。", pron: "索洛 埃斯托伊 米兰多 格拉西亚斯" },
  { id: "p58", cat: "shopping", es: "¿Aceptan efectivo?", zh: "你们收现金吗？", pron: "阿塞普坦 埃费克蒂沃" },
  { id: "p59", cat: "shopping", es: "Una bolsa, por favor.", zh: "请给一个袋子。", pron: "乌纳 博尔萨 波尔 法沃尔" },

  { id: "p60", cat: "housing", es: "Busco un piso.", zh: "我在找公寓。", pron: "布斯科 乌恩 皮索" },
  { id: "p61", cat: "housing", es: "¿Sigue disponible?", zh: "还在出租吗？", pron: "西格 迪斯波尼布莱" },
  { id: "p62", cat: "housing", es: "¿Los gastos están incluidos?", zh: "费用包含在内吗？", pron: "洛斯 加斯托斯 埃斯坦 因克卢伊多斯" },
  { id: "p63", cat: "housing", es: "¿Cuánto es la fianza?", zh: "押金是多少？", pron: "宽托 埃斯 拉 菲安萨" },
  { id: "p64", cat: "housing", es: "¿Puedo visitarlo mañana?", zh: "我明天可以看房吗？", pron: "普埃多 比西塔尔洛 马尼亚纳" },
  { id: "p65", cat: "housing", es: "¿Está amueblado?", zh: "有家具吗？", pron: "埃斯塔 阿穆埃布拉多" },

  { id: "p66", cat: "emergency", es: "Necesito ayuda.", zh: "我需要帮助。", pron: "内塞西托 阿尤达" },
  { id: "p67", cat: "emergency", es: "Llama a una ambulancia.", zh: "叫一辆救护车。", pron: "亚马 阿 乌纳 安布兰西亚" },
  { id: "p68", cat: "emergency", es: "Me duele aquí.", zh: "我这里疼。", pron: "梅 杜埃莱 阿基" },
  { id: "p69", cat: "emergency", es: "Soy alérgico / alérgica a la penicilina.", zh: "我对青霉素过敏。（男/女）", pron: "索伊 阿莱尔希科 / 阿莱尔希卡 阿 拉 佩尼西利纳" },
  { id: "p70", cat: "emergency", es: "¿Dónde está la farmacia más cercana?", zh: "最近的药店在哪里？", pron: "东德 埃斯塔 拉 法尔马西亚 马斯 塞尔卡纳" },
  { id: "p71", cat: "emergency", es: "He perdido mi pasaporte.", zh: "我的护照丢了。", pron: "埃 佩尔迪多 米 帕萨波尔特" },
  { id: "p72", cat: "emergency", es: "¿Puedo usar tu teléfono?", zh: "可以用一下你的手机吗？", pron: "普埃多 乌萨尔 图 特莱福诺" },
  { id: "p73", cat: "emergency", es: "Necesito un médico.", zh: "我需要医生。", pron: "内塞西托 乌恩 梅迪科" },
  { id: "p74", cat: "emergency", es: "¿Hay una comisaría cerca?", zh: "附近有警察局吗？", pron: "阿伊 乌纳 科米萨里亚 塞尔卡" },

  { id: "p75", cat: "social", es: "¿Te apetece tomar algo?", zh: "想去喝点什么吗？", pron: "特 阿佩特塞 托马尔 阿尔戈" },
  { id: "p76", cat: "social", es: "¿Quedamos mañana?", zh: "明天见个面？", pron: "克达莫斯 马尼亚纳" },
  { id: "p77", cat: "social", es: "Me encanta esta canción.", zh: "我很喜欢这首歌。", pron: "梅 恩坎塔 埃斯塔 坎西翁" },
  { id: "p78", cat: "social", es: "¿Qué haces los fines de semana?", zh: "你周末做什么？", pron: "克 阿塞斯 洛斯 菲内斯 德 塞马纳" },
  { id: "p79", cat: "social", es: "Creo que tienes razón.", zh: "我觉得你说得对。", pron: "克雷奥 克 铁内斯 拉松" },
  { id: "p80", cat: "social", es: "Estoy de acuerdo.", zh: "我同意。", pron: "埃斯托伊 德 阿库埃尔多" },
  { id: "p81", cat: "social", es: "¡Qué guay!", zh: "太酷了！", pron: "克 瓜伊" },
  { id: "p82", cat: "social", es: "Nos lo pasamos genial.", zh: "我们玩得很开心。", pron: "诺斯 洛 帕萨莫斯 赫尼尔" },
  { id: "p83", cat: "social", es: "¿Me cuentas más?", zh: "多给我讲讲？", pron: "梅 宽塔斯 马斯" },
  { id: "p84", cat: "social", es: "Tengo que irme.", zh: "我得走了。", pron: "滕戈 克 伊尔梅" },
  { id: "p85", cat: "social", es: "Lo siento, llego tarde.", zh: "抱歉，我迟到了。", pron: "洛 西恩托 耶戈 塔尔代" },
  { id: "p86", cat: "social", es: "¿En serio?", zh: "真的吗？", pron: "恩 塞里奥" },
  { id: "p87", cat: "social", es: "Vale, perfecto.", zh: "好，完美。", pron: "巴莱 佩尔费克托" },
  { id: "p88", cat: "social", es: "¡Qué envidia!", zh: "好羡慕！", pron: "克 恩维迪亚" },
  { id: "p89", cat: "social", es: "Para gustos, colores.", zh: "萝卜青菜，各有所爱。", pron: "帕拉 古斯托斯 科洛雷斯" },
  { id: "p90", cat: "social", es: "Me lo he pasado muy bien.", zh: "我玩得很开心。", pron: "梅 洛 埃 帕萨多 穆伊 比恩" }
];

window.SOL_GRAMMAR = [
  {
    id: "articles",
    level: "A0",
    title: "名词的性别与冠词",
    es: "el, la, un, una",
    intro: "西语名词都有语法性别。大多数 -o 结尾是阳性，-a 结尾是阴性，但会有例外。冠词要和名词一起记，不要只背单词。",
    formula: "el / un + 阳性　·　la / una + 阴性",
    table: {
      headers: ["", "阳性", "阴性"],
      rows: [
        ["定冠词", "el libro", "la mesa"],
        ["不定冠词", "un libro", "una mesa"],
        ["复数", "los libros", "las mesas"],
        ["复数不定", "unos libros", "unas mesas"]
      ]
    },
    examples: [
      { es: "El café está caliente.", zh: "咖啡是热的。" },
      { es: "Quiero una tostada.", zh: "我要一份烤面包。" },
      { es: "Los baños están al fondo.", zh: "洗手间在最后面。" }
    ],
    tip: "别用“这个东西没有生命，所以没有性别”的思路。把 el café、la leche 当成一个整体来记，会更省力。"
  },
  {
    id: "ser-estar",
    level: "A0",
    title: "ser 还是 estar",
    es: "Soy / Estoy",
    intro: "ser 描述“是什么”，estar 描述“现在处于什么状态/在哪里”。中文里都常翻译成“是/在”，所以需要靠场景区分。",
    formula: "ser：身份、来源、职业、本质　·　estar：状态、位置、暂时情况",
    table: {
      headers: ["用法", "ser", "estar"],
      rows: [
        ["身份", "Soy estudiante.", "—"],
        ["来源", "Soy de China.", "—"],
        ["特征", "Es alto.", "—"],
        ["状态", "—", "Estoy cansado."],
        ["位置", "—", "El baño está allí."]
      ]
    },
    examples: [
      { es: "Soy diseñador, pero hoy estoy muy cansado.", zh: "我是设计师，但今天很累。" },
      { es: "La sopa está fría.", zh: "汤凉了。（状态）" },
      { es: "Madrid está en el centro de España.", zh: "马德里在西班牙中部。" }
    ],
    tip: "“我很热”不要说 Soy caliente。说 Tengo calor 或 Estoy acalorado。人的冷热多用 tener。"
  },
  {
    id: "present-regular",
    level: "A0",
    title: "现在时：规则动词三步走",
    es: "hablar, comer, vivir",
    intro: "西语动词按结尾分 -ar、-er、-ir 三类。去掉词尾，加上对应的词尾，就能表达现在做的事。",
    formula: "-ar: o / as / a / amos / áis / an　·　-er: o / es / e / emos / éis / en　·　-ir: o / es / e / imos / ís / en",
    table: {
      headers: ["主语", "hablar", "comer", "vivir"],
      rows: [
        ["yo", "hablo", "como", "vivo"],
        ["tú", "hablas", "comes", "vives"],
        ["él / ella / usted", "habla", "come", "vive"],
        ["nosotros", "hablamos", "comemos", "vivimos"],
        ["vosotros", "habláis", "coméis", "vivís"],
        ["ellos / ustedes", "hablan", "comen", "viven"]
      ]
    },
    examples: [
      { es: "Hablo un poco de español.", zh: "我说一点西语。" },
      { es: "Comemos a las dos.", zh: "我们两点吃午饭。" },
      { es: "Vivo en Madrid.", zh: "我住在马德里。" }
    ],
    tip: "主语代词常可省略，因为动词词尾已经说明是谁：Hablo 就是“我说”。但 yo / tú 可用于强调对比。"
  },
  {
    id: "irregular",
    level: "A0",
    title: "先拿下 7 个高频不规则动词",
    es: "ser, estar, tener, ir, hacer, querer, poder",
    intro: "不规则动词不需要一次背全部。先记 yo / tú / él 三个人称，已经能覆盖大量日常对话。",
    formula: "先记三根柱子，再扩展到 nosotros / vosotros",
    table: {
      headers: ["", "yo", "tú", "él / ella"],
      rows: [
        ["ser", "soy", "eres", "es"],
        ["estar", "estoy", "estás", "está"],
        ["tener", "tengo", "tienes", "tiene"],
        ["ir", "voy", "vas", "va"],
        ["hacer", "hago", "haces", "hace"],
        ["querer", "quiero", "quieres", "quiere"],
        ["poder", "puedo", "puedes", "puede"]
      ]
    },
    examples: [
      { es: "Tengo una reserva a nombre de Li.", zh: "我有一份李的预订。" },
      { es: "Voy al centro.", zh: "我去市中心。" },
      { es: "¿Puedes repetir?", zh: "你能重复一下吗？" }
    ],
    tip: "tener 还用于年龄和冷热：Tengo veintiocho años、Tengo frío。querer / poder 的 e→ie、o→ue 变化只发生在重读音节。"
  },
  {
    id: "hay-estar",
    level: "A1",
    title: "hay 和 está：有 vs 在",
    es: "Hay / Está",
    intro: "hay 表示“存在、有”，不特指哪一个；está/están 表示已知的人或物“在哪里”。",
    formula: "hay + 不定冠词/数量/复数　·　está/están + 定冠词/已知对象",
    table: {
      headers: ["句子", "含义"],
      rows: [
        ["Hay un banco aquí.", "这里有一家银行。（存在）"],
        ["El banco está aquí.", "那家银行在这里。（位置）"],
        ["Hay tres habitaciones.", "有三个房间。"],
        ["Las habitaciones están arriba.", "房间在楼上。"],
        ["¿Hay wifi?", "有 WiFi 吗？"],
        ["¿Dónde está el wifi?", "WiFi 在哪里？"]
      ]
    },
    examples: [
      { es: "¿Hay una farmacia cerca?", zh: "附近有药店吗？" },
      { es: "La farmacia está al lado.", zh: "药店在旁边。" },
      { es: "Hay mucha gente hoy.", zh: "今天人很多。" }
    ],
    tip: "问“有没有”用 hay；问“在哪里”用 está。不要把 Hay el baño 说出口。"
  },
  {
    id: "gustar",
    level: "A1",
    title: "gustar：喜欢是“被喜欢”",
    es: "Me gusta / Me gustan",
    intro: "gustar 的主语是被喜欢的东西，不是人。所以动词跟着“东西”变单复数，前面用 me/te/le/nos/os/les。",
    formula: "me / te / le / nos / os / les + gusta（单数/动词）+ gustan（复数）",
    table: {
      headers: ["句子", "为什么"],
      rows: [
        ["Me gusta el café.", "el café 单数，用 gusta"],
        ["Me gustan las tapas.", "las tapas 复数，用 gustan"],
        ["Me encanta viajar.", "动词原形，用 encanta"],
        ["A mí me gusta, a él no.", "加 a mí 表示强调/对比"],
        ["¿Te gusta el cine?", "问对方喜欢什么"]
      ]
    },
    examples: [
      { es: "Me gustan las películas de terror.", zh: "我喜欢恐怖片。" },
      { es: "¿Te apetece un café?", zh: "你想来杯咖啡吗？" },
      { es: "A ella le encanta bailar.", zh: "她很喜欢跳舞。" }
    ],
    tip: "别说 Yo gusto el cine。想说我爱你，是 Te quiero，不是 Te gusto（后者是“你喜欢我”）。"
  },
  {
    id: "questions",
    level: "A0",
    title: "疑问词：把问题问到点上",
    es: "qué, quién, dónde...",
    intro: "西语疑问词都带重音，疑问句首尾分别用 ¿ 和 ?。语序常是“疑问词 + 动词 + 主语”。",
    formula: "¿Qué...? / ¿Quién...? / ¿Dónde...? / ¿Cuándo...? / ¿Cómo...? / ¿Cuánto...?",
    table: {
      headers: ["疑问词", "意思", "例句"],
      rows: [
        ["qué", "什么", "¿Qué quieres?"],
        ["quién", "谁", "¿Quién es?"],
        ["dónde", "哪里", "¿Dónde está?"],
        ["cuándo", "什么时候", "¿Cuándo vienes?"],
        ["cómo", "怎么", "¿Cómo se dice?"],
        ["cuánto", "多少", "¿Cuánto cuesta?"],
        ["por qué", "为什么", "¿Por qué no?"],
        ["cuál", "哪一个", "¿Cuál prefieres?"]
      ]
    },
    examples: [
      { es: "¿Qué me recomiendas?", zh: "你推荐什么？" },
      { es: "¿Dónde está el baño?", zh: "洗手间在哪里？" },
      { es: "¿Cuánto tarda?", zh: "要多久？" }
    ],
    tip: "por qué（为什么）和 porque（因为）拼写不同；疑问词 qué 有重音，关系词 que 没有。"
  },
  {
    id: "ir-a",
    level: "A1",
    title: "ir a + 动词：把计划说出口",
    es: "Voy a...",
    intro: "想表达“我要/打算/即将做某事”，用 ir 的变位 + a + 动词原形。这是日常最实用的未来表达。",
    formula: "voy / vas / va / vamos / vais / van + a + 动词原形",
    table: {
      headers: ["主语", "ir", "例句"],
      rows: [
        ["yo", "voy", "Voy a llamar."],
        ["tú", "vas", "¿Vas a venir?"],
        ["él / ella", "va", "Va a llover."],
        ["nosotros", "vamos", "Vamos a cenar."],
        ["vosotros", "vais", "¿Vais a salir?"],
        ["ellos", "van", "Van a viajar."]
      ]
    },
    examples: [
      { es: "Voy a pedir una cita.", zh: "我要预约。" },
      { es: "¿Vas a venir mañana?", zh: "你明天会来吗？" },
      { es: "Vamos a tomar algo.", zh: "我们去喝点什么吧。" }
    ],
    tip: "ir a 后面永远接动词原形，不要变位：Voy a comer，不是 Voy a como。天气预测也常用 va a llover。"
  },
  {
    id: "polite",
    level: "A1",
    title: "礼貌请求：别只会 quiero",
    es: "Me gustaría / ¿Podrías...?",
    intro: "quiero 很直接，朋友之间没问题；在商店、餐厅、诊所等场景，用 me gustaría 或条件式会更柔和。",
    formula: "Me gustaría + 名词/动词　·　¿Podrías + 动词?　·　¿Me trae...?",
    table: {
      headers: ["场景", "直接", "更礼貌"],
      rows: [
        ["点单", "Quiero un café.", "Me gustaría un café."],
        ["请求", "Repite.", "¿Puedes repetir?"],
        ["正式请求", "—", "¿Podría repetirlo?"],
        ["餐厅", "Dame la cuenta.", "¿Me trae la cuenta?"]
      ]
    },
    examples: [
      { es: "Me gustaría cambiar la cita.", zh: "我想更改预约。" },
      { es: "¿Podrías hablar más despacio?", zh: "你能说慢一点吗？" },
      { es: "¿Me trae una botella de agua?", zh: "能给我拿一瓶水吗？" }
    ],
    tip: "por favor 不是越短越没礼貌；加在句尾就很自然。别用 quiero 命令陌生人，听起来会像要求。"
  },
  {
    id: "present-perfect",
    level: "A2",
    title: "现在完成时：聊经历与刚刚发生",
    es: "he hablado",
    intro: "haber 的现在时 + 过去分词，用来谈经历、今天发生的事，或与现在有关的结果。西班牙口语里非常高频。",
    formula: "he / has / ha / hemos / habéis / han + participio",
    table: {
      headers: ["主语", "haber", "hablar", "comer", "vivir"],
      rows: [
        ["yo", "he", "hablado", "comido", "vivido"],
        ["tú", "has", "hablado", "comido", "vivido"],
        ["él / ella", "ha", "hablado", "comido", "vivido"],
        ["nosotros", "hemos", "hablado", "comido", "vivido"],
        ["vosotros", "habéis", "hablado", "comido", "vivido"],
        ["ellos", "han", "hablado", "comido", "vivido"]
      ]
    },
    examples: [
      { es: "¿Has estado en España?", zh: "你去过西班牙吗？" },
      { es: "Hoy he tomado dos cafés.", zh: "我今天喝了两杯咖啡。" },
      { es: "Todavía no he comido.", zh: "我还没吃饭。" }
    ],
    tip: "常见不规则分词：hecho、visto、puesto、dicho、escrito、abierto。与 ayer 等明确过去时间同用时，通常改用简单过去时。"
  },
  {
    id: "preterite",
    level: "A2",
    title: "简单过去时：讲清“那一次”",
    es: "hablé, fui",
    intro: "讲故事、说具体过去时间发生的事，用简单过去时。规则动词有重音符号，要读准。",
    formula: "-ar: é / aste / ó / amos / asteis / aron　·　-er/-ir: í / iste / ió / imos / isteis / ieron",
    table: {
      headers: ["主语", "hablar", "comer", "vivir"],
      rows: [
        ["yo", "hablé", "comí", "viví"],
        ["tú", "hablaste", "comiste", "viviste"],
        ["él / ella", "habló", "comió", "vivió"],
        ["nosotros", "hablamos", "comimos", "vivimos"],
        ["vosotros", "hablasteis", "comisteis", "vivisteis"],
        ["ellos", "hablaron", "comieron", "vivieron"]
      ]
    },
    examples: [
      { es: "El año pasado fui a Barcelona.", zh: "去年我去了巴塞罗那。" },
      { es: "Ayer comí paella.", zh: "昨天我吃了海鲜饭。" },
      { es: "Visitamos el museo y luego cenamos.", zh: "我们参观了博物馆，然后吃了晚饭。" }
    ],
    tip: "不规则高频：fui（ir/ser）、hice（hacer）、tuve（tener）、estuve（estar）、dije（decir）。先记 fui、hice、tuve。"
  },
  {
    id: "reflexive",
    level: "A1+",
    title: "反身动词：日常生活从“自己”开始",
    es: "me levanto",
    intro: "洗漱、起床、睡觉等动作常带反身代词 me/te/se/nos/os/se。代词要跟主语一致，放在变位动词前。",
    formula: "me / te / se / nos / os / se + 变位动词",
    table: {
      headers: ["动词", "意思", "yo", "tú"],
      rows: [
        ["levantarse", "起床", "me levanto", "te levantas"],
        ["ducharse", "洗澡", "me ducho", "te duchas"],
        ["acostarse", "上床睡觉", "me acuesto", "te acuestas"],
        ["vestirse", "穿衣", "me visto", "te vistes"],
        ["llamarse", "叫……名字", "me llamo", "te llamas"]
      ]
    },
    examples: [
      { es: "Me levanto a las siete.", zh: "我七点起床。" },
      { es: "¿A qué hora te acuestas?", zh: "你几点睡觉？" },
      { es: "Me ducho por la mañana.", zh: "我早上洗澡。" }
    ],
    tip: "反身代词不是“自己给自己”逐字翻译，而是动词搭配的一部分。说“我起床”用 me levanto，不必加 yo。"
  }
];

window.SOL_PRONUNCIATION = {
  intro: "西语的拼读规则很稳定：看到字母，基本就能读出来。先练 5 个纯元音，再处理中国学习者最容易混的辅音。",
  vowels: [
    { letter: "a", tip: "像“啊”，嘴张大，短而清楚", examples: ["casa", "para", "mañana"] },
    { letter: "e", tip: "像“诶”但更短，不要滑成“ei”", examples: ["mesa", "que", "leche"] },
    { letter: "i", tip: "像“衣”，嘴角向两边，短促", examples: ["vino", "sí", "cita"] },
    { letter: "o", tip: "像“哦”，嘴唇圆，不要滑成“ou”", examples: ["hola", "como", "dos"] },
    { letter: "u", tip: "像“乌”，嘴唇收圆；在 que/qui 中不发音", examples: ["uno", "mucha", "que"] }
  ],
  tricky: [
    { name: "h", ipa: "silent", tip: "永远不发音。hola 读“奥拉”，hasta 读“阿斯塔”。", examples: ["hola", "hasta", "hotel"] },
    { name: "r / rr", ipa: "ɾ / r", tip: "单击 r 轻弹舌；rr 和多击的 r 要连续颤舌。先练“特拉”去掉 t。", examples: ["pero", "perro", "carro"] },
    { name: "ñ", ipa: "ɲ", tip: "像“尼”和“亚”之间的鼻音，舌面贴硬腭。", examples: ["mañana", "año", "niño"] },
    { name: "j / ge / gi", ipa: "x", tip: "像喉咙深处呵气的“赫”，不是英语 j。", examples: ["hola", "gente", "jugar"] },
    { name: "c / z", ipa: "θ", tip: "西班牙大部分地区读成咬舌的 th，舌尖轻放在上下齿之间。", examples: ["gracias", "caza", "zumo"] },
    { name: "ll / y", ipa: "ʝ", tip: "多数地区像“亚”；部分地区仍保留“利亚”的读音。", examples: ["llamo", "paella", "calle"] },
    { name: "b / v", ipa: "b / β", tip: "在西班牙语里 b 和 v 发音几乎相同，别按英语区分。", examples: ["vaca", "baca", "vivir"] },
    { name: "d", ipa: "d / ð", tip: "词首较硬；在两个元音之间会变软，像轻轻咬舌的 th。", examples: ["dos", "nada", "Madrid"] },
    { name: "gu / gü", ipa: "g / ɣw", tip: "gue/gui 中 u 不发音；güe/güi 中 u 要发音。", examples: ["guerra", "guitarra", "pingüino"] },
    { name: "que / qui", ipa: "k", tip: "u 不发音，读“克 / 基”。", examples: ["que", "quiero", "paquete"] }
  ],
  stress: [
    "以元音、n 或 s 结尾的词，重音通常在倒数第二个音节：ca-sa、ha-blan、li-bros。",
    "以其他辅音结尾的词，重音通常在最后一个音节：ha-blar、ciu-dad、es-pa-ñol。",
    "有重音符号时，直接按符号读：café、estación、médico。",
    "疑问词都有重音：qué、dónde、cómo、cuánto。"
  ],
  minimalPairs: [
    { id: "mp1", a: "pero", aZh: "但是", b: "perro", bZh: "狗", tip: "pero 轻弹一次舌；perro 要颤舌。" },
    { id: "mp2", a: "casa", aZh: "房子", b: "caza", bZh: "打猎", tip: "casa 的 s 是咝音；caza 的 z 是咬舌音。" },
    { id: "mp3", a: "hola", aZh: "你好", b: "ola", bZh: "波浪", tip: "hola 的 h 不发音，所以这两个词听起来一样。" },
    { id: "mp4", a: "caro", aZh: "贵的", b: "carro", bZh: "车（部分拉美地区）", tip: "caro 轻弹舌；carro 颤舌更长。" },
    { id: "mp5", a: "calló", aZh: "他沉默了", b: "cayó", bZh: "他摔倒了", tip: "ll 和 y 在多数西班牙地区已经合流，听起来相同。" }
  ],
  shadowing: [
    { es: "¡Hola! ¿Qué tal?", zh: "你好！最近怎么样？", focus: "h 不发音，qué 的重音在 e" },
    { es: "Me llamo Lin, mucho gusto.", zh: "我叫林，很高兴认识你。", focus: "ll 像 y；gusto 的 u 清晰" },
    { es: "Un café con leche, por favor.", zh: "一杯拿铁，谢谢。", focus: "café 重音在 fé，leche 的 ch 像“切”的 ch" },
    { es: "¿Dónde está el baño?", zh: "洗手间在哪里？", focus: "ñ 是鼻音，dónde 和 está 都有重音" },
    { es: "La cuenta, por favor.", zh: "请结账。", focus: "cuenta 的 ue 连读，不要分成两个音节" }
  ]
};

window.SOL_ROLEPLAYS = [
  {
    id: "cafe",
    title: "在咖啡馆",
    es: "En la cafetería",
    icon: "coffee",
    level: "A1",
    setting: "早晨 9:00，马德里街角咖啡馆。你要点一杯咖啡带走。",
    intro: "服务员语速很快，但问题很固定。听关键词：tomar、llevar、algo más。",
    steps: [
      {
        npc: "¡Hola! ¿Qué te pongo?",
        npcZh: "你好！你要点什么？",
        hint: "点单：un + 阳性名词，或 una + 阴性名词。",
        options: [
          { es: "Un café con leche, por favor.", zh: "一杯拿铁，谢谢。", ok: true, why: "自然点单：un café + por favor。也可以说 Quiero un café。" },
          { es: "Soy un café.", zh: "我是一杯咖啡。", ok: false, why: "这句意思是“我是一杯咖啡”，服务员会愣住。" },
          { es: "Tengo café.", zh: "我有咖啡。", ok: false, why: "tener 是“拥有”，不是点单；而且你还没有咖啡。" }
        ]
      },
      {
        npc: "¿Para tomar aquí o para llevar?",
        npcZh: "在这儿喝还是带走？",
        hint: "带走用 para llevar；堂食说 para tomar aquí。",
        options: [
          { es: "Para llevar, por favor.", zh: "带走，谢谢。", ok: true, why: "干净利落。para llevar 是固定搭配。" },
          { es: "Para aquí.", zh: "给这里。", ok: false, why: "不自然；堂食说 Para tomar aquí。" },
          { es: "A la izquierda.", zh: "在左边。", ok: false, why: "这是方向回答，不是堂食/外带。" }
        ]
      },
      {
        npc: "Muy bien. ¿Algo más?",
        npcZh: "好的。还要别的吗？",
        hint: "不要别的：No, gracias。然后可以问价格。",
        options: [
          { es: "No, gracias. ¿Cuánto es?", zh: "不用了，谢谢。多少钱？", ok: true, why: "先结束点单，再问价格，对话自然推进。" },
          { es: "Sí, soy chino.", zh: "是的，我是中国人。", ok: false, why: "答非所问；对方问的是还要不要别的。" },
          { es: "La cuenta, por favor.", zh: "请结账。", ok: false, why: "还没拿到咖啡就结账有点急；可以点完再问 ¿Cuánto es?" }
        ]
      },
      {
        npc: "Son dos euros con cincuenta. ¿Efectivo o tarjeta?",
        npcZh: "两欧五十。现金还是刷卡？",
        hint: "tarjeta 是卡，efectivo 是现金。",
        options: [
          { es: "Con tarjeta, por favor.", zh: "刷卡，谢谢。", ok: true, why: "完整回答付款方式。也可以说 ¿Puedo pagar con tarjeta?" },
          { es: "Soy estudiante.", zh: "我是学生。", ok: false, why: "对方问付款方式，不是身份。" },
          { es: "Hasta luego.", zh: "回头见。", ok: false, why: "还没付款就告别太早；先完成付款。" }
        ]
      }
    ],
    success: "¡Perfecto! 你完成了点单、选择堂食/外带、问价和付款。下次试试加一句 ¿Tienen leche de avena?（有燕麦奶吗？）。"
  },
  {
    id: "directions",
    title: "在街上问路",
    es: "Perdido en el centro",
    icon: "map-pin",
    level: "A1+",
    setting: "马德里市中心，手机没电了。你想去普拉多博物馆。",
    intro: "问路不需要长句。先礼貌开场，再问地点；听不懂就请对方重复。",
    steps: [
      {
        npc: "Hola, pareces un poco perdido. ¿Te ayudo?",
        npcZh: "你好，你看起来有点迷路。需要帮忙吗？",
        hint: "直接说你要找的地方。",
        options: [
          { es: "Sí, estoy buscando el Museo del Prado.", zh: "是的，我在找普拉多博物馆。", ok: true, why: "buscar 是“寻找”；estoy buscando 是正在找。" },
          { es: "Sí, soy un museo.", zh: "是的，我是一个博物馆。", ok: false, why: "这句是“我是个博物馆”，会闹笑话。" },
          { es: "No, tengo hambre.", zh: "不，我饿了。", ok: false, why: "对方问你是否迷路，不是问饿不饿。" }
        ]
      },
      {
        npc: "Está cerca. Sigue todo recto y gira a la derecha.",
        npcZh: "很近。一直走，然后右转。",
        hint: "可以追问步行时间，确认自己有没有理解。",
        options: [
          { es: "¿Cuánto se tarda andando?", zh: "走路要多久？", ok: true, why: "tardar 表示“花费时间”，问步行时间很自然。" },
          { es: "¿Dónde está el baño?", zh: "洗手间在哪里？", ok: false, why: "话题突然跳走；先把路线确认清楚。" },
          { es: "No, gracias.", zh: "不用，谢谢。", ok: false, why: "对方已经在帮你；直接拒绝会让对话中断。" }
        ]
      },
      {
        npc: "Unos diez minutos. ¿Vas en metro?",
        npcZh: "大约十分钟。你坐地铁吗？",
        hint: "metro 是地铁；andando 是步行。",
        options: [
          { es: "No, prefiero ir andando.", zh: "不，我更喜欢走过去。", ok: true, why: "prefiero + 动词原形，表达偏好。" },
          { es: "Sí, soy el metro.", zh: "是的，我是地铁。", ok: false, why: "把地铁当成身份了；应说 Sí, voy en metro。" },
          { es: "No, gracias, soy chino.", zh: "不，谢谢，我是中国人。", ok: false, why: "国籍和坐不坐地铁无关。" }
        ]
      },
      {
        npc: "Muy bien. La entrada está justo allí.",
        npcZh: "好的。入口就在那里。",
        hint: "收尾：感谢 + 祝对方一天愉快。",
        options: [
          { es: "Muchas gracias. ¡Que tenga un buen día!", zh: "非常感谢。祝您今天愉快！", ok: true, why: "完整、礼貌，适合对陌生人使用 usted 的收尾。" },
          { es: "De nada.", zh: "不客气。", ok: false, why: "这是别人谢谢你时说的；现在该你道谢。" },
          { es: "No entiendo.", zh: "我不明白。", ok: false, why: "对方已经指到入口；如果确实没看见，可以问 ¿Dónde exactamente?" }
        ]
      }
    ],
    success: "你成功找到了博物馆。记住问路三件套：Perdona 开场、¿Dónde está...? 问位置、¿Está lejos? 确认距离。"
  },
  {
    id: "plans",
    title: "约朋友周六见",
    es: "Un plan para el sábado",
    icon: "users",
    level: "A1+",
    setting: "同学 Pablo 发来消息，想约你周六出去。",
    intro: "用 ¿Te apetece...? 发起邀请，用 quedar 约时间地点，用 me va bien 确认。",
    steps: [
      {
        npc: "¿Qué haces este sábado?",
        npcZh: "你周六做什么？",
        hint: "先回答有没有安排，再主动提议。",
        options: [
          { es: "Nada especial. ¿Te apetece tomar algo?", zh: "没什么特别的。想去喝点什么吗？", ok: true, why: "先回答，再发起邀请，非常自然。" },
          { es: "Soy del sábado.", zh: "我是星期六的。", ok: false, why: "语法上像“我属于星期六”，意思不通。" },
          { es: "Tengo veinte años.", zh: "我二十岁。", ok: false, why: "对方问的是周六安排，不是年龄。" }
        ]
      },
      {
        npc: "¡Genial! ¿A qué hora quedamos?",
        npcZh: "太好了！我们几点见？",
        hint: "时间点用 a las + 数字。",
        options: [
          { es: "A las ocho me va bien.", zh: "八点我可以。", ok: true, why: "a las ocho 表示“在八点”，me va bien 表示“对我合适”。" },
          { es: "Son las ocho.", zh: "现在八点。", ok: false, why: "这回答的是“现在几点”，不是“几点见”。" },
          { es: "El sábado.", zh: "星期六。", ok: false, why: "对方已经知道是周六，现在问具体几点。" }
        ]
      },
      {
        npc: "Perfecto, en la plaza. ¿Invitas tú?",
        npcZh: "好，在广场。你请客吗？",
        hint: "轻松接受，可以说第一轮我请。",
        options: [
          { es: "Vale, la primera ronda va por mí.", zh: "好呀，第一轮我请。", ok: true, why: "ronda 是一轮饮品，va por mí 表示“算我的”。" },
          { es: "No, soy tacaño.", zh: "不，我很小气。", ok: false, why: "语法没错，但这样评价自己既不自然也不礼貌。" },
          { es: "La cuenta, por favor.", zh: "请结账。", ok: false, why: "还没到酒吧，现在说结账太早。" }
        ]
      },
      {
        npc: "¡Trato hecho! Nos vemos el sábado.",
        npcZh: "成交！周六见。",
        hint: "收尾确认见面。",
        options: [
          { es: "Nos vemos. ¡Hasta luego!", zh: "周六见。回头见！", ok: true, why: "简洁地确认并道别。" },
          { es: "Encantado de conocerte.", zh: "很高兴认识你。", ok: false, why: "你们已经认识；这句更适合初次见面。" },
          { es: "No funciona.", zh: "它坏了。", ok: false, why: "完全跑题。" }
        ]
      }
    ],
    success: "¡Trato hecho! 你完成了一次自然的邀请、定时间、请客和确认。下次可以加一句 No puedo, ¿otro día? 练习婉拒。"
  },
  {
    id: "pharmacy",
    title: "在药店",
    es: "En la farmacia",
    icon: "first-aid",
    level: "A1+",
    setting: "你喉咙痛、咳嗽，走进一家绿色十字药店。",
    intro: "药剂师会先问症状，再给建议。doler、tener、cada + 时间 是关键词。",
    steps: [
      {
        npc: "Buenos días, ¿en qué puedo ayudarte?",
        npcZh: "早上好，有什么可以帮你？",
        hint: "直接说主要症状：喉咙痛 + 咳嗽。",
        options: [
          { es: "Me duele la garganta y tengo tos.", zh: "我喉咙痛，还咳嗽。", ok: true, why: "两个症状用 me duele / tengo 分开说，准确清楚。" },
          { es: "Quiero un café.", zh: "我要一杯咖啡。", ok: false, why: "这里是药店，不是咖啡馆。" },
          { es: "Me gusta la farmacia.", zh: "我喜欢这家药店。", ok: false, why: "答非所问；对方在问你的症状。" }
        ]
      },
      {
        npc: "¿Tienes fiebre?",
        npcZh: "你发烧吗？",
        hint: "没有发烧：No, creo que no. 更自然。",
        options: [
          { es: "No, creo que no.", zh: "没有，我想没有。", ok: true, why: "creo que no 让回答不那么绝对，符合日常表达。" },
          { es: "Sí, soy la fiebre.", zh: "是的，我是发烧。", ok: false, why: "发烧是症状，不是你本人；应说 Sí, tengo fiebre。" },
          { es: "A las ocho.", zh: "八点。", ok: false, why: "对方问有没有发烧，不是问时间。" }
        ]
      },
      {
        npc: "Toma este jarabe. Tómalo cada ocho horas.",
        npcZh: "吃这个糖浆。每八小时一次。",
        hint: "确认频率，可以用 ¿Cada cuántas horas?",
        options: [
          { es: "¿Cada cuántas horas?", zh: "每几小时一次？", ok: true, why: "复述并确认频率，是安全用药的关键。" },
          { es: "¿Cuánto cuesta el avión?", zh: "飞机票多少钱？", ok: false, why: "跑题；这里该确认用药方法。" },
          { es: "Soy alérgico al jarabe.", zh: "我对糖浆过敏。", ok: false, why: "如果确实过敏要立刻说；但这不是确认频率的常规回答。" }
        ]
      },
      {
        npc: "Cada ocho horas, durante tres días.",
        npcZh: "每八小时一次，连续三天。",
        hint: "确认听懂了，再道谢。",
        options: [
          { es: "Entendido. Muchas gracias.", zh: "明白了。非常感谢。", ok: true, why: "entendido 表示“明白了”，收尾清楚。" },
          { es: "No entiendo nada.", zh: "我完全不明白。", ok: false, why: "如果没懂可以这样说，但这里更建议先请对方重复。" },
          { es: "Hasta mañana.", zh: "明天见。", ok: false, why: "药店场景没有约定明天见。" }
        ]
      }
    ],
    success: "¡Bien hecho! 你说清了症状、确认了频率。真实买药时，别忘了告诉药剂师你的过敏史。"
  },
  {
    id: "hotel",
    title: "酒店出问题",
    es: "Un problema en el hotel",
    icon: "home",
    level: "A2",
    setting: "晚上回到酒店，发现空调坏了。你要去前台沟通。",
    intro: "礼貌而坚定：描述故障、提出要求、确认时间。不需要吵架。",
    steps: [
      {
        npc: "Buenas tardes, ¿en qué puedo ayudarte?",
        npcZh: "下午好，有什么可以帮你？",
        hint: "先说清设备 + no funciona。",
        options: [
          { es: "Hola, el aire acondicionado no funciona.", zh: "你好，空调坏了。", ok: true, why: "直接描述具体设备，前台能立刻理解。" },
          { es: "La habitación está rota.", zh: "房间坏了。", ok: false, why: "听起来像整间房坏了；应说具体设备坏了。" },
          { es: "Hace mucho calor.", zh: "很热。", ok: false, why: "只是陈述天气/感受，没有说明要修什么。" }
        ]
      },
      {
        npc: "Lo siento. ¿Estás en la habitación 305?",
        npcZh: "抱歉。您是在 305 房间吗？",
        hint: "确认房号，并提出换房请求。",
        options: [
          { es: "Sí. ¿Podéis cambiarme de habitación?", zh: "是的。能给我换个房间吗？", ok: true, why: "先确认信息，再提出明确请求。" },
          { es: "No, gracias.", zh: "不，谢谢。", ok: false, why: "你没有回答问题，也放弃了处理问题。" },
          { es: "Soy el hotel.", zh: "我是酒店。", ok: false, why: "意思不通；对方在确认房号。" }
        ]
      },
      {
        npc: "Ahora mismo no hay habitaciones libres, pero puedo enviar a alguien.",
        npcZh: "现在没有空房，但我可以派人过去。",
        hint: "问清要多久，方便安排。",
        options: [
          { es: "¿Cuánto tardará?", zh: "要多久？", ok: true, why: "tardar 表示花费时间，问维修进度很自然。" },
          { es: "¿Dónde está el baño?", zh: "洗手间在哪里？", ok: false, why: "跑题；当前问题是空调维修。" },
          { es: "No hay problema.", zh: "没问题。", ok: false, why: "太轻易接受，没有确认时间；当然如果对方马上来也可以。" }
        ]
      },
      {
        npc: "Unos quince minutos.",
        npcZh: "大约十五分钟。",
        hint: "接受方案，同时保留换房的要求。",
        options: [
          { es: "Vale, gracias. Si no se arregla, preferiría otra habitación.", zh: "好的，谢谢。如果修不好，我更希望换个房间。", ok: true, why: "先接受维修，再温和设置后续条件。" },
          { es: "No, quiero hablar con la policía.", zh: "不，我要找警察。", ok: false, why: "空调故障不是警察事务，过度升级会让沟通变僵。" },
          { es: "Hasta luego.", zh: "回头见。", ok: false, why: "问题还没解决，直接离开不合适。" }
        ]
      }
    ],
    success: "¡Bien! 你清楚描述了问题、提出维修与换房、确认了时间。记住：礼貌 + 具体 + 明确要求，比提高音量更有效。"
  }
];

window.SOL_RESOURCES = [
  {
    name: "Dreaming Spanish",
    tag: "听力 · 可理解输入",
    desc: "从零开始的真人和动画视频，靠画面和手势理解西语，适合每天 15 分钟“泡耳朵”。",
    url: "https://www.dreaming.com/spanish",
    free: "有免费视频"
  },
  {
    name: "Language Transfer",
    tag: "语法 · 免费音频课",
    desc: "Complete Spanish 用英语讲西语结构，像聊天一样推导语法，适合通勤听。",
    url: "https://www.languagetransfer.org/complete-spanish",
    free: "完全免费"
  },
  {
    name: "SpanishDict",
    tag: "词典 · 变位",
    desc: "查词、听发音、看动词变位和例句。遇到本网站没覆盖的表达，用它补齐。",
    url: "https://www.spanishdict.com/",
    free: "免费可用"
  },
  {
    name: "Forvo",
    tag: "发音 · 真人录音",
    desc: "听西班牙各地母语者怎么读一个词，适合核对地名、姓名和地区口音。",
    url: "https://forvo.com/languages/es/",
    free: "免费"
  },
  {
    name: "Notes in Spanish",
    tag: "播客 · 真实对话",
    desc: "西班牙夫妻的真实闲聊播客，从初级到高级都有，适合完成 A2 后继续进阶。",
    url: "https://www.notesinspanish.com/",
    free: "有免费节目"
  },
  {
    name: "Anki",
    tag: "复习 · 间隔重复",
    desc: "如果想长期积累词汇，可以把本网站的单词卡导入 Anki，按遗忘曲线复习。",
    url: "https://apps.ankiweb.net/",
    free: "桌面版免费"
  }
];

window.SOL_ACHIEVEMENTS = [
  { id: "first-step", icon: "flag", title: "迈出第一步", desc: "完成第 1 课", type: "lessons", target: 1 },
  { id: "three-streak", icon: "flame", title: "三天不断线", desc: "连续学习 3 天", type: "streak", target: 3 },
  { id: "week-streak", icon: "calendar", title: "一周上瘾", desc: "连续学习 7 天", type: "streak", target: 7 },
  { id: "words-25", icon: "cards", title: "二十五词", desc: "掌握 25 张单词卡", type: "mastered", target: 25 },
  { id: "words-60", icon: "book", title: "词汇小金库", desc: "掌握 60 张单词卡", type: "mastered", target: 60 },
  { id: "first-speak", icon: "mic", title: "敢开口", desc: "完成 1 次跟读评分", type: "speaking", target: 1 },
  { id: "cafe", icon: "coffee", title: "咖啡自由", desc: "完成咖啡馆情景实战", type: "roleplay", target: 1 },
  { id: "half-way", icon: "map", title: "走过一半", desc: "完成 8 节情景课", type: "lessons", target: 8 },
  { id: "finisher", icon: "trophy", title: "日常交流达成", desc: "完成全部 16 课", type: "lessons", target: 16 }
];

window.SOL_CULTURE_NOTES = [
  {
    title: "La sobremesa",
    zh: "饭后不急着走",
    body: "吃完饭后继续坐在桌边聊天，是西班牙生活里很重要的社交时间。别急着收碗或起身，多聊十分钟，关系会更近。"
  },
  {
    title: "Dos besos",
    zh: "贴面礼的默契",
    body: "朋友间常见两次贴面礼，先右后左，通常不真正碰到脸。正式场合、商务初见多握手。最稳的方式：跟着对方的动作。"
  },
  {
    title: "Vale",
    zh: "一个万能的口头禅",
    body: "vale 相当于“好、行、知道了”，使用频率极高。放在句首或句尾都可以：Vale, nos vemos a las ocho。"
  },
  {
    title: "Horarios",
    zh: "晚饭真的比较晚",
    body: "很多家庭晚上九点后才吃晚饭，周末更晚。餐厅午餐高峰常在一两点。约饭时问一句 ¿A qué hora te va bien? 最保险。"
  },
  {
    title: "No pasa nada",
    zh: "松弛一点",
    body: "别人道歉或发生小意外时，常说 no pasa nada（没事）。它不是冷漠，而是让对方别太在意。"
  },
  {
    title: "Lenguas cooficiales",
    zh: "不只是 castellano",
    body: "西班牙有加泰罗尼亚语、巴斯克语、加利西亚语等共同官方语言。招牌上可能同时出现两种语言，不必惊讶。"
  },
  {
    title: "La cuenta",
    zh: "结账要说出口",
    body: "西班牙餐厅通常不会主动把账单拿来。吃完了就招手说 La cuenta, por favor。服务费一般已包含，小额找零可留可不留。"
  },
  {
    title: "112",
    zh: "一个号码管急事",
    body: "医疗、火警、报警等紧急情况都可拨 112。药店认绿色十字；轻症可以直接问药剂师。"
  }
];
