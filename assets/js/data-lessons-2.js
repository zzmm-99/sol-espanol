/* SOL · 西语日常 — 第 9–16 课 */
window.SOL_LESSONS.push(
  {
    id: 9,
    number: "09",
    stage: 3,
    title: "问路与坐车",
    esTitle: "¿Dónde está...?",
    subtitle: "听懂左右、远近和“一直走”。",
    level: "A1+",
    minutes: 11,
    goals: ["礼貌拦下路人问路", "听懂方向指令", "问地铁和步行时间"],
    intro: "你在马德里找地铁站。手机没电时，这几句话能救你。先记住三个方向词：recto、derecha、izquierda。",
    dialogue: [
      { who: "Tú", role: "you", es: "Perdona, ¿dónde está la estación de Sol?", zh: "打扰一下，Sol 车站在哪里？" },
      { who: "Señora", role: "npc", es: "Todo recto y luego gira a la izquierda.", zh: "一直走，然后左转。" },
      { who: "Tú", role: "you", es: "¿Está lejos?", zh: "远吗？" },
      { who: "Señora", role: "npc", es: "No, unos cinco minutos andando.", zh: "不远，走路大约五分钟。" },
      { who: "Tú", role: "you", es: "¿Puedo ir en metro?", zh: "我可以坐地铁去吗？" },
      { who: "Señora", role: "npc", es: "Sí, la línea 1. La boca del metro está allí.", zh: "可以，1 号线。地铁口就在那边。" },
      { who: "Tú", role: "you", es: "Muchas gracias. ¡Que tenga un buen día!", zh: "非常感谢。祝您今天愉快！" },
      { who: "Señora", role: "npc", es: "Igualmente.", zh: "你也是。" }
    ],
    phrases: [
      { es: "Perdona, ¿dónde está la estación?", zh: "打扰一下，车站在哪里？", pron: "佩尔多纳 东德 埃斯塔 拉 埃斯塔西翁" },
      { es: "Todo recto.", zh: "一直走。", pron: "托多 雷克托" },
      { es: "Gira a la derecha / izquierda.", zh: "右转 / 左转。", pron: "希拉 阿 拉 德雷查 / 伊斯别尔达" },
      { es: "¿Está lejos?", zh: "远吗？", pron: "埃斯塔 莱霍斯" },
      { es: "Cinco minutos andando.", zh: "走路五分钟。", pron: "辛科 米努托斯 安当多" },
      { es: "La boca del metro.", zh: "地铁口。", pron: "拉 博卡 德尔 梅特罗" }
    ],
    vocab: [
      { es: "derecha", zh: "右边", pron: "德雷查", pos: "名词", example: "Gira a la derecha.", exampleZh: "右转。" },
      { es: "izquierda", zh: "左边", pron: "伊斯别尔达", pos: "名词", example: "Está a la izquierda.", exampleZh: "在左边。" },
      { es: "recto", zh: "笔直地", pron: "雷克托", pos: "副词", example: "Sigue todo recto.", exampleZh: "一直往前走。" },
      { es: "cerca / lejos", zh: "近 / 远", pron: "塞尔卡 / 莱霍斯", pos: "副词", example: "Está cerca del centro.", exampleZh: "离市中心很近。" },
      { es: "estación", zh: "车站", pron: "埃斯塔西翁", pos: "名词", example: "La estación está aquí.", exampleZh: "车站在这里。" },
      { es: "andando", zh: "步行", pron: "安当多", pos: "副词", example: "Voy andando al trabajo.", exampleZh: "我步行去上班。" }
    ],
    grammar: {
      title: "问路三问 + 指路三动词",
      formula: "¿Dónde está...? / ¿Está lejos? / ¿Cómo llego a...?　·　gira / sigue / coge",
      body: "问位置用 estar：¿Dónde está el baño？。问怎么去用 llegar a：¿Cómo llego al centro？。对方给你指路时，常听到命令式：gira（转）、sigue（继续）、coge（乘坐/拿）。这是对 tú 的随意命令式，不用加主语。",
      examples: [
        { es: "Sigue todo recto y gira a la derecha.", zh: "一直走，然后右转。" },
        { es: "Coge la línea 2 y baja en Sol.", zh: "坐 2 号线，在 Sol 下车。" },
        { es: "¿Cómo llego al museo?", zh: "我怎么去博物馆？" }
      ],
      pitfall: "“在右边”是 a la derecha，不是 en la derecha。问路前先说 Perdona 或 Disculpe，会礼貌很多。"
    },
    culture: {
      title: "boca del metro 是什么口？",
      body: "在马德里，地铁入口常被叫作 la boca del metro，字面意思是“地铁的嘴”。地铁线路用 línea + 数字，换乘叫 hacer transbordo。很多站没有电梯，带大件行李时要提前查好出口。"
    },
    challenge: {
      situation: "一位女士告诉你：Todo recto y luego gira a la izquierda。",
      prompt: "你应该怎么走？",
      options: [
        { es: "先一直走，然后左转。", zh: "先一直走，然后左转。", ok: true, why: "todo recto = 一直走；gira a la izquierda = 左转。" },
        { es: "先左转，然后一直走。", zh: "先左转，然后一直走。", ok: false, why: "luego 表示“然后”，顺序是先直走再左转。" },
        { es: "一直走，然后右转。", zh: "一直走，然后右转。", ok: false, why: "izquierda 是左边；derecha 才是右边。" }
      ]
    },
    speaking: {
      es: "Perdona, ¿dónde está la estación? ¿Está lejos?",
      zh: "打扰一下，车站在哪里？远吗？",
      tip: "先礼貌开场，再问位置，再追问距离。estación 的重音在 ción。"
    }
  },
  {
    id: 10,
    number: "10",
    stage: 3,
    title: "租房与看房",
    esTitle: "Busco piso",
    subtitle: "问租金、押金、家具和看房时间。",
    level: "A1+",
    minutes: 12,
    goals: ["说明找房需求", "问清租金与包含费用", "预约看房"],
    intro: "在西班牙租整套公寓叫 piso，单间叫 habitación。看房时别只问价格，押金、家具、费用是否包含都要确认。",
    dialogue: [
      { who: "Agente", role: "npc", es: "Hola, ¿vienes por el piso del centro?", zh: "你好，你是来看市中心那套公寓的吗？" },
      { who: "Tú", role: "you", es: "Sí, he visto el anuncio. ¿Sigue disponible?", zh: "是的，我看到了广告。还在出租吗？" },
      { who: "Agente", role: "npc", es: "Sí, son mil doscientos euros al mes, gastos incluidos.", zh: "是的，每月一千二百欧，费用包含在内。" },
      { who: "Tú", role: "you", es: "¿Está amueblado?", zh: "家具齐全吗？" },
      { who: "Agente", role: "npc", es: "Sí, tiene una habitación y un salón.", zh: "是的，有一间卧室和一个客厅。" },
      { who: "Tú", role: "you", es: "¿Puedo visitarlo mañana?", zh: "我明天可以来看房吗？" },
      { who: "Agente", role: "npc", es: "Claro, a las seis. ¿Te va bien?", zh: "当然，六点。你方便吗？" },
      { who: "Tú", role: "you", es: "Perfecto. ¿Cómo se paga el alquiler?", zh: "很好。房租怎么付？" },
      { who: "Agente", role: "npc", es: "Por transferencia, y hay un mes de fianza.", zh: "银行转账，另付一个月押金。" }
    ],
    phrases: [
      { es: "Busco un piso / una habitación.", zh: "我在找一套公寓 / 一个房间。", pron: "布斯科 乌恩 皮索 / 乌纳 阿比塔西翁" },
      { es: "¿Sigue disponible?", zh: "还在出租吗？", pron: "西格 迪斯波尼布莱" },
      { es: "¿Los gastos están incluidos?", zh: "水电等费用包含吗？", pron: "洛斯 加斯托斯 埃斯坦 因克卢伊多斯" },
      { es: "¿Está amueblado?", zh: "有家具吗？", pron: "埃斯塔 阿穆埃布拉多" },
      { es: "¿Puedo visitarlo mañana?", zh: "我明天可以看房吗？", pron: "普埃多 比西塔尔洛 马尼亚纳" },
      { es: "¿Cuánto es la fianza?", zh: "押金是多少？", pron: "宽托 埃斯 拉 菲安萨" }
    ],
    vocab: [
      { es: "piso", zh: "公寓（整套）", pron: "皮索", pos: "名词", example: "Busco un piso en el centro.", exampleZh: "我在市中心找公寓。" },
      { es: "habitación", zh: "房间；卧室", pron: "阿比塔西翁", pos: "名词", example: "El piso tiene dos habitaciones.", exampleZh: "这套公寓有两间卧室。" },
      { es: "alquiler", zh: "租金", pron: "阿尔基莱尔", pos: "名词", example: "El alquiler es alto.", exampleZh: "租金很高。" },
      { es: "fianza", zh: "押金", pron: "菲安萨", pos: "名词", example: "Hay que pagar una fianza.", exampleZh: "需要付押金。" },
      { es: "amueblado", zh: "带家具的", pron: "阿穆埃布拉多", pos: "形容词", example: "Está completamente amueblado.", exampleZh: "家具齐全。" },
      { es: "gastos", zh: "费用；开销", pron: "加斯托斯", pos: "名词", example: "Los gastos están incluidos.", exampleZh: "费用已包含。" }
    ],
    grammar: {
      title: "está + 过去分词：描述房子的状态",
      formula: "está amueblado / incluido / reformado　·　se paga + 方式",
      body: "描述状态用 estar + 过去分词：El piso está amueblado（带家具）、Los gastos están incluidos（费用包含）。注意形容词要和主语单复数、阴阳性一致。se paga 是无人称的“付款方式”，租房广告里很常见：Se paga por transferencia。",
      examples: [
        { es: "El alquiler está incluido en el precio.", zh: "租金已包含在价格里。" },
        { es: "Las facturas no están incluidas.", zh: "水电账单不包含在内。" },
        { es: "Se paga el primer mes por adelantado.", zh: "第一个月需预付。" }
      ],
      pitfall: "“费用包含”是 gastos incluidos（阳性复数）；如果指“账单” facturas，则用 incluidas。不要把 incluido 永远说成一个形式。"
    },
    culture: {
      title: "看房别只看照片",
      body: "西班牙租房常见一个月押金（fianza），有的还要担保或收入证明。签约前确认 gastos、muebles、electrodomésticos 是否包含，以及是否允许养宠物。看房时最好拍视频、检查水压和手机信号。"
    },
    challenge: {
      situation: "你想问“费用包含吗？”，最准确的问法是？",
      prompt: "选择一句最自然、语法正确的表达。",
      options: [
        { es: "¿Los gastos están incluidos?", zh: "费用包含吗？", ok: true, why: "gastos 是阳性复数，用 están incluidos。" },
        { es: "¿Los gastos es incluido?", zh: "费用是包含的。", ok: false, why: "复数主语要用 están，incluido 也要变复数 incluidos。" },
        { es: "¿Los gastos tienen incluido?", zh: "费用有包含吗？", ok: false, why: "这里应该用 estar + 过去分词，不用 tener 这样搭配。" }
      ]
    },
    speaking: {
      es: "Hola, busco un piso. ¿Sigue disponible y están incluidos los gastos?",
      zh: "你好，我在找公寓。还在出租吗？费用包含吗？",
      tip: "长句拆成两问：¿Sigue disponible? 停顿，再问 ¿Están incluidos los gastos?。"
    }
  },
  {
    id: 11,
    number: "11",
    stage: 3,
    title: "看医生与买药",
    esTitle: "Me duele la garganta",
    subtitle: "说清症状、听懂用药频率。",
    level: "A1+",
    minutes: 12,
    goals: ["用 doler 说哪里疼", "描述发烧、咳嗽等症状", "听懂处方和服药频率"],
    intro: "身体不舒服时，词汇越简单越好。记住核心句型 Me duele + 身体部位，再加上 desde（从……开始）和 cada（每隔……）。",
    dialogue: [
      { who: "Médica", role: "npc", es: "Buenas tardes. ¿Qué te pasa?", zh: "下午好。你怎么了？" },
      { who: "Tú", role: "you", es: "Me duele la garganta desde ayer y tengo tos.", zh: "我从昨天开始喉咙痛，还咳嗽。" },
      { who: "Médica", role: "npc", es: "¿Tienes fiebre?", zh: "发烧吗？" },
      { who: "Tú", role: "you", es: "No, pero estoy muy cansado / cansada.", zh: "不发烧，但我很累。" },
      { who: "Médica", role: "npc", es: "Te voy a recetar un jarabe. Tómalo cada ocho horas.", zh: "我给你开一瓶糖浆。每八小时吃一次。" },
      { who: "Tú", role: "you", es: "¿Y si no mejoro?", zh: "如果不见好怎么办？" },
      { who: "Médica", role: "npc", es: "Vuelve en tres días. Si empeora, ve a urgencias.", zh: "三天后再来。如果加重，去急诊。" },
      { who: "Tú", role: "you", es: "Entendido. ¿Puedo ir a la farmacia con esta receta?", zh: "明白了。我可以拿这张处方去药店吗？" },
      { who: "Médica", role: "npc", es: "Sí, claro.", zh: "当然可以。" }
    ],
    phrases: [
      { es: "Me duele la garganta.", zh: "我喉咙痛。", pron: "梅 杜埃莱 拉 加尔甘塔" },
      { es: "Me duele la cabeza.", zh: "我头痛。", pron: "梅 杜埃莱 拉 卡贝萨" },
      { es: "Tengo tos y fiebre.", zh: "我咳嗽、发烧。", pron: "滕戈 托斯 伊 菲埃布雷" },
      { es: "Desde ayer.", zh: "从昨天开始。", pron: "德斯德 阿耶尔" },
      { es: "Cada ocho horas.", zh: "每八小时一次。", pron: "卡达 奥乔 奥拉斯" },
      { es: "Soy alérgico / alérgica a la penicilina.", zh: "我对青霉素过敏。", pron: "索伊 阿莱尔希科 / 阿莱尔希卡 阿 拉 佩尼西利纳" }
    ],
    vocab: [
      { es: "cabeza", zh: "头", pron: "卡贝萨", pos: "名词", example: "Me duele la cabeza.", exampleZh: "我头痛。" },
      { es: "garganta", zh: "喉咙", pron: "加尔甘塔", pos: "名词", example: "Tengo la garganta irritada.", exampleZh: "我喉咙发炎。" },
      { es: "estómago", zh: "胃；肚子", pron: "埃斯托马戈", pos: "名词", example: "Me duele el estómago.", exampleZh: "我胃疼。" },
      { es: "fiebre", zh: "发烧", pron: "菲埃布雷", pos: "名词", example: "Tengo fiebre.", exampleZh: "我发烧。" },
      { es: "tos", zh: "咳嗽", pron: "托斯", pos: "名词", example: "Tengo mucha tos.", exampleZh: "我咳得厉害。" },
      { es: "receta", zh: "处方", pron: "雷塞塔", pos: "名词", example: "Necesito una receta.", exampleZh: "我需要处方。" }
    ],
    grammar: {
      title: "doler 像 gustar：疼痛的是身体部位",
      formula: "me / te / le duele + 单数部位　·　me / te / le duelen + 复数部位",
      body: "说“我头痛”不是 Yo duelo la cabeza，而是 Me duele la cabeza，字面像“头让我疼”。身体部位前用定冠词 la/el，不用 mi。如果多个部位，doler 变 duelen：Me duelen los pies。tener 则可以接症状：Tengo fiebre、Tengo tos。",
      examples: [
        { es: "Me duele la cabeza desde esta mañana.", zh: "我从今天早上开始头痛。" },
        { es: "Me duelen los pies.", zh: "我脚疼。" },
        { es: "Tengo tos y un poco de fiebre.", zh: "我咳嗽，还有点发烧。" }
      ],
      pitfall: "别按中文说 Me duele mi cabeza，西语习惯是 Me duele la cabeza。doler 的主语是身体部位，所以动词跟着部位变。"
    },
    culture: {
      title: "绿色十字与 112",
      body: "西班牙药店门口有绿色十字，药剂师可以处理轻微不适并给出建议。紧急情况统一拨 112。看公立医生通常先预约 centro de salud；游客可用保险合作的诊所。记得带护照或居留卡。"
    },
    challenge: {
      situation: "医生问你：¿Qué te pasa?",
      prompt: "你想说“我头痛”，哪句正确？",
      options: [
        { es: "Me duele la cabeza.", zh: "我头痛。", ok: true, why: "doler 的用法是 me duele + 定冠词 + 身体部位。" },
        { es: "Me duele mi cabeza.", zh: "我痛我的头。", ok: false, why: "西语这里不用物主形容词 mi，而用定冠词 la。" },
        { es: "Tengo cabeza.", zh: "我有头。", ok: false, why: "tener 加身体部位不表示疼痛，意思会变成“我有头”。" }
      ]
    },
    speaking: {
      es: "Me duele la garganta desde ayer y tengo tos, pero no tengo fiebre.",
      zh: "我从昨天开始喉咙痛、咳嗽，但没有发烧。",
      tip: "先主诉，再补时间和伴随症状。duele 的重音在 dué；garganta 的重音在 gan。"
    }
  },
  {
    id: 12,
    number: "12",
    stage: 3,
    title: "打电话预约",
    esTitle: "Quería pedir una cita",
    subtitle: "不见面也能把事办成。",
    level: "A1+",
    minutes: 11,
    goals: ["接电话与自报来意", "约时间、改时间", "请对方拼写或重复"],
    intro: "电话里没有表情和手势，最容易慌。记住开场 ¿Dígame? 和来意 Quería pedir una cita，就能稳住。",
    dialogue: [
      { who: "Recepción", role: "npc", es: "Clínica dental, ¿dígame?", zh: "牙科诊所，您好？" },
      { who: "Tú", role: "you", es: "Hola, quería pedir una cita.", zh: "你好，我想预约。" },
      { who: "Recepción", role: "npc", es: "¿Para qué día?", zh: "想约哪天？" },
      { who: "Tú", role: "you", es: "El jueves por la tarde, si es posible.", zh: "如果可能的话，周四下午。" },
      { who: "Recepción", role: "npc", es: "Tenemos a las cinco y a las seis y media.", zh: "我们五点或六点半有空。" },
      { who: "Tú", role: "you", es: "A las cinco, por favor. A nombre de Wang.", zh: "五点吧，谢谢。名字是 Wang。" },
      { who: "Recepción", role: "npc", es: "¿Puedes deletrear tu apellido?", zh: "你能拼一下姓氏吗？" },
      { who: "Tú", role: "you", es: "Sí: uve doble, a, ene, ge.", zh: "可以：W、A、N、G。" },
      { who: "Recepción", role: "npc", es: "Perfecto. Te esperamos el jueves a las cinco.", zh: "好的。周四五点见。" }
    ],
    phrases: [
      { es: "Quería pedir una cita.", zh: "我想预约。", pron: "克里亚 佩迪尔 乌纳 西塔" },
      { es: "A nombre de Wang.", zh: "名字是 Wang。", pron: "阿 诺姆布雷 德 Wang" },
      { es: "¿Me lo puedes repetir?", zh: "你能再给我重复一遍吗？", pron: "梅 洛 普埃德斯 雷佩蒂尔" },
      { es: "¿Puedes deletrearlo?", zh: "你能拼一下吗？", pron: "普埃德斯 德莱特雷阿尔洛" },
      { es: "Me viene bien el jueves.", zh: "周四我方便。", pron: "梅 比埃内 比恩 埃尔 胡埃韦斯" },
      { es: "Tengo que cambiar la cita.", zh: "我需要改预约。", pron: "滕戈 克 坎比亚尔 拉 西塔" }
    ],
    vocab: [
      { es: "cita", zh: "预约", pron: "西塔", pos: "名词", example: "Tengo una cita a las cinco.", exampleZh: "我五点有预约。" },
      { es: "jueves", zh: "星期四", pron: "胡埃韦斯", pos: "名词", example: "El jueves por la tarde.", exampleZh: "周四下午。" },
      { es: "deletrear", zh: "拼写", pron: "德莱特雷阿尔", pos: "动词", example: "¿Puedes deletrear tu nombre?", exampleZh: "你能拼一下名字吗？" },
      { es: "cambiar", zh: "改变；更改", pron: "坎比亚尔", pos: "动词", example: "Quiero cambiar la cita.", exampleZh: "我想改预约。" },
      { es: "clínica", zh: "诊所", pron: "克利尼卡", pos: "名词", example: "La clínica está cerrada.", exampleZh: "诊所关门了。" },
      { es: "esperar", zh: "等待；期待", pron: "埃斯佩拉尔", pos: "动词", example: "Te esperamos mañana.", exampleZh: "我们明天等你。" }
    ],
    grammar: {
      title: "用 quería 把请求变柔和",
      formula: "Quería + 动词原形　·　¿Podrías...? / ¿Me lo puedes repetir?",
      body: "Quiero 是“我要”，语气直接；Quería 用未完成过去时，在服务场景里表示“我想……（劳驾）”，听上去更客气。电话里请对方重复可用 ¿Me lo puedes repetir？；正式场合用 ¿Podría repetírmelo？。",
      examples: [
        { es: "Quería cambiar mi cita.", zh: "我想改一下预约。" },
        { es: "¿Podría repetírmelo más despacio?", zh: "您能慢点再说一遍吗？" },
        { es: "Me viene bien a las seis.", zh: "六点我方便。" }
      ],
      pitfall: "电话开场不是 Hola, ¿quién eres？，而是对方先说 ¿Dígame？。拼写字母时，W 在西班牙叫 uve doble，G 是 ge。"
    },
    culture: {
      title: "¿Dígame? 是“请讲”",
      body: "西班牙人接电话通常说 ¿Dígame？或 ¿Sí？，而不是 ¡Hola！。很多诊所、餐厅也用 WhatsApp 预约。打电话前先把姓名、时间、事项写在纸上，会比临场组织句子轻松很多。"
    },
    challenge: {
      situation: "电话里对方说了一个日期，你没听清。",
      prompt: "最自然的请求是？",
      options: [
        { es: "Perdona, ¿me lo puedes repetir?", zh: "抱歉，你能再重复一遍吗？", ok: true, why: "me lo 指代对方刚说的内容，简短又自然。" },
        { es: "¿Qué?", zh: "什么？", ok: false, why: "太突兀，电话里听起来有点不耐烦；至少加 Perdona。" },
        { es: "No hablo.", zh: "我不说。", ok: false, why: "不完整也不礼貌；应说 No entiendo 或 No hablo mucho español。" }
      ]
    },
    speaking: {
      es: "Hola, quería pedir una cita para el jueves por la tarde.",
      zh: "你好，我想预约周四下午。",
      tip: "quería 后面直接接动词原形 pedir；cita 的 ci 在西班牙读作“西”。"
    }
  },
  {
    id: 13,
    number: "13",
    stage: 4,
    title: "约朋友",
    esTitle: "¿Quedamos?",
    subtitle: "发起邀请、接受、拒绝，都不尴尬。",
    level: "A2",
    minutes: 11,
    goals: ["用 quedar 约时间地点", "接受或婉拒邀请", "用 me va bien 确认安排"],
    intro: "从这一课开始，你不只是“办事”，而是在建立关系。西班牙人约人常用 quedar 和 ¿Te apetece...?，语气轻松。",
    dialogue: [
      { who: "Pablo", role: "npc", es: "¿Qué haces el sábado?", zh: "你周六做什么？" },
      { who: "Tú", role: "you", es: "Nada especial. ¿Por qué?", zh: "没什么特别的。怎么了？" },
      { who: "Pablo", role: "npc", es: "¿Te apetece ir a tomar algo?", zh: "想去喝点什么吗？" },
      { who: "Tú", role: "you", es: "¡Claro! ¿A qué hora quedamos?", zh: "当然！我们几点见？" },
      { who: "Pablo", role: "npc", es: "A las ocho, en la plaza.", zh: "八点，在广场。" },
      { who: "Tú", role: "you", es: "Me va bien. ¿Invito yo la primera ronda?", zh: "我方便。第一轮我请？" },
      { who: "Pablo", role: "npc", es: "¡Vale! Y luego podemos cenar.", zh: "好呀！然后我们可以吃晚饭。" },
      { who: "Tú", role: "you", es: "Perfecto. Nos vemos el sábado.", zh: "完美。周六见。" }
    ],
    phrases: [
      { es: "¿Te apetece tomar algo?", zh: "想去喝点什么吗？", pron: "特 阿佩特塞 托马尔 阿尔戈" },
      { es: "¿Quedamos a las ocho?", zh: "我们八点见？", pron: "克达莫斯 阿 拉斯 奥乔" },
      { es: "Me va bien.", zh: "我方便 / 可以。", pron: "梅 巴 比恩" },
      { es: "Lo siento, no puedo. ¿Otro día?", zh: "抱歉，我去不了。改天？", pron: "洛 西恩托 诺 普埃多 · 奥特罗 迪亚" },
      { es: "Nos vemos allí.", zh: "那儿见。", pron: "诺斯 贝莫斯 阿利" },
      { es: "La primera ronda va por mí.", zh: "第一轮我请。", pron: "拉 普里梅拉 龙达 巴 波尔 米" }
    ],
    vocab: [
      { es: "quedar", zh: "约好见面", pron: "克达尔", pos: "动词", example: "Quedamos a las ocho.", exampleZh: "我们约八点见。" },
      { es: "plan", zh: "计划；安排", pron: "普兰", pos: "名词", example: "¿Tienes planes para el sábado?", exampleZh: "你周六有安排吗？" },
      { es: "ronda", zh: "一轮饮品", pron: "龙达", pos: "名词", example: "La primera ronda va por mí.", exampleZh: "第一轮我请。" },
      { es: "libre", zh: "有空的", pron: "利布雷", pos: "形容词", example: "Estoy libre el viernes.", exampleZh: "我周五有空。" },
      { es: "ocupado / ocupada", zh: "忙的", pron: "奥库帕多 / 奥库帕达", pos: "形容词", example: "Estoy ocupada esta noche.", exampleZh: "我今晚有事。" },
      { es: "plaza", zh: "广场", pron: "普拉萨", pos: "名词", example: "Nos vemos en la plaza.", exampleZh: "我们在广场见。" }
    ],
    grammar: {
      title: "quedar 不是“留下”：约见面的核心动词",
      formula: "¿Quedamos?　·　Quedamos a las + 时间　·　en + 地点",
      body: "quedar 在西班牙日常语里常表示“约好见面”：¿Quedamos mañana？。地点用 en，时间点用 a las。接受邀请可以说 Me va bien / Perfecto / Vale；拒绝时先软后拒：Lo siento, no puedo, pero ¿otro día？。别把 quedar 和 quedarse（留下、待着）混了。",
      examples: [
        { es: "¿Quedamos el viernes a las siete?", zh: "我们周五七点见？" },
        { es: "Me va bien, nos vemos en el bar.", zh: "可以，酒吧见。" },
        { es: "Lo siento, estoy ocupado. ¿El domingo?", zh: "抱歉，我有事。周日呢？" }
      ],
      pitfall: "“我有空”是 Estoy libre，不是 Tengo libre；“我很忙”是 Estoy ocupado/a，不用 ser。"
    },
    culture: {
      title: "计划是灵活的，但确认很重要",
      body: "西班牙人的社交时间相对弹性，但准时仍是基本礼貌。朋友之间常用 WhatsApp 临时确认。喝东西时轮流请客（rondas）很常见，不必每次抢着买单。晚餐通常九点以后开始。"
    },
    challenge: {
      situation: "朋友问：¿Te apetece cenar el viernes? 但你已经另有安排。",
      prompt: "怎样婉拒并保留下次？",
      options: [
        { es: "Lo siento, no puedo. ¿Te va bien el sábado?", zh: "抱歉，我去不了。周六你方便吗？", ok: true, why: "先道歉说明不能，再提出替代时间，既礼貌又继续邀约。" },
        { es: "No.", zh: "不。", ok: false, why: "太生硬，容易让关系变冷；不是语法错误，而是社交上不够礼貌。" },
        { es: "Estoy ocupado, adiós.", zh: "我很忙，再见。", ok: false, why: "拒绝后直接再见，显得不想再联系。" }
      ]
    },
    speaking: {
      es: "¿Te apetece tomar algo el sábado? A las ocho me va bien.",
      zh: "周六想去喝点什么吗？八点我可以。",
      tip: "先邀请、再给时间。apetece 的重音在 pe；quedamos 的重音在 da。"
    }
  },
  {
    id: 14,
    number: "14",
    stage: 4,
    title: "聊经历",
    esTitle: "¿Has estado en...?",
    subtitle: "把“我去过、我吃过、我喜欢”说出来。",
    level: "A2",
    minutes: 12,
    goals: ["用现在完成时问经历", "用简单过去时讲具体一次", "自然接住“真的吗？”"],
    intro: "要聊得起来，不能只会现在时。这一课用“旅行经历”作为线索，把 he estado 和 fui 的区别讲清。",
    dialogue: [
      { who: "Elena", role: "npc", es: "¿Has estado alguna vez en Barcelona?", zh: "你去过巴塞罗那吗？" },
      { who: "Tú", role: "you", es: "Sí, fui el año pasado. Me encantó.", zh: "去过，我去年去的。我很喜欢。" },
      { who: "Elena", role: "npc", es: "¿Qué visitaste?", zh: "你参观了什么？" },
      { who: "Tú", role: "you", es: "La Sagrada Familia y el barrio Gótico. Hacía muy buen tiempo.", zh: "圣家堂和哥特区。当时天气很好。" },
      { who: "Elena", role: "npc", es: "¿Y has probado la paella?", zh: "你尝过海鲜饭吗？" },
      { who: "Tú", role: "you", es: "Sí, pero la mejor fue en Valencia, hace dos años.", zh: "尝过，但最好吃的是两年前在瓦伦西亚。" },
      { who: "Elena", role: "npc", es: "¡Qué envidia! Yo no he ido todavía.", zh: "真羡慕！我还没去过。" },
      { who: "Tú", role: "you", es: "Tienes que ir. Es una ciudad increíble.", zh: "你一定要去。那是一座很棒的城市。" }
    ],
    phrases: [
      { es: "¿Has estado alguna vez en España?", zh: "你去过西班牙吗？", pron: "阿斯 埃斯塔多 阿尔古纳 贝斯 恩 埃斯帕尼亚" },
      { es: "Fui el año pasado.", zh: "我去年去的。", pron: "富伊 埃尔 阿尼奥 帕萨多" },
      { es: "Me encantó.", zh: "我很喜欢（那次体验）。", pron: "梅 恩坎托" },
      { es: "¿Has probado la paella?", zh: "你尝过海鲜饭吗？", pron: "阿斯 普罗巴多 拉 帕埃亚" },
      { es: "Hace dos años.", zh: "两年前。", pron: "阿塞 多斯 阿尼奥斯" },
      { es: "Todavía no he ido.", zh: "我还没去过。", pron: "托达维亚 诺 埃 伊多" }
    ],
    vocab: [
      { es: "viajar", zh: "旅行", pron: "比亚哈尔", pos: "动词", example: "Me gusta viajar sola.", exampleZh: "我喜欢独自旅行。" },
      { es: "probar", zh: "品尝；尝试", pron: "普罗巴尔", pos: "动词", example: "¿Has probado el gazpacho?", exampleZh: "你尝过西班牙冷汤吗？" },
      { es: "visitar", zh: "参观", pron: "比西塔尔", pos: "动词", example: "Visitamos el museo.", exampleZh: "我们参观了博物馆。" },
      { es: "ciudad", zh: "城市", pron: "西乌达德", pos: "名词", example: "Valencia es una ciudad bonita.", exampleZh: "瓦伦西亚是座美丽的城市。" },
      { es: "todavía", zh: "还；仍然", pron: "托达维亚", pos: "副词", example: "Todavía no he ido.", exampleZh: "我还没去。" },
      { es: "año pasado", zh: "去年", pron: "阿尼奥 帕萨多", pos: "时间表达", example: "Fui a España el año pasado.", exampleZh: "我去年去了西班牙。" }
    ],
    grammar: {
      title: "经历用 he hecho，具体那一次用 hice",
      formula: "he / has / ha / hemos / habéis / han + participio　·　fui, visité, probé",
      body: "现在完成时（he + 过去分词）常用来谈经历，不强调何时：¿Has estado en Sevilla？。如果给出明确过去时间，通常用简单过去时：Fui el año pasado。叙述一次旅行中的连续事件，也用简单过去时：Llegué, visité el museo y cené con Ana。西班牙口语中这两种时态区分很明显。",
      examples: [
        { es: "¿Has probado la tortilla?", zh: "你尝过西班牙土豆饼吗？" },
        { es: "He viajado a España tres veces.", zh: "我去过西班牙三次。" },
        { es: "El año pasado visité Madrid y Toledo.", zh: "去年我去了马德里和托莱多。" }
      ],
      pitfall: "有了 ayer、el año pasado 这类明确过去时间，优先用简单过去时；不要说我 he ido ayer。participio 不规则要单独记：hecho、visto、puesto、dicho。"
    },
    culture: {
      title: "¡Qué envidia! 不是恶意",
      body: "西班牙人说 ¡Qué envidia！常表示“好羡慕你啊”，是友好的反应，不是指责。聊旅行时他们喜欢追问细节：¿Con quién fuiste？、¿Qué tal la comida？。准备两三个具体细节，对话就能继续。"
    },
    challenge: {
      situation: "Elena 问：¿Has estado en Sevilla? 你去年去过。",
      prompt: "最自然的回答是？",
      options: [
        { es: "Sí, fui el año pasado.", zh: "去过，我去年去的。", ok: true, why: "有明确过去时间 el año pasado，用简单过去时 fui 最自然。" },
        { es: "Sí, he ido el año pasado.", zh: "去过，我去年去过。", ok: false, why: "很多西班牙地区会认为这种搭配不自然：明确过去时间配简单过去时。" },
        { es: "Sí, voy el año pasado.", zh: "我去年去。", ok: false, why: "时态不对；过去的事不能用现在时 voy。" }
      ]
    },
    speaking: {
      es: "Sí, he estado en Barcelona. Fui el año pasado y me encantó.",
      zh: "是的，我去过巴塞罗那。去年去的，我很喜欢。",
      tip: "先回答经历，再补具体时间。he estado 连读时 h 不发音，听起来像“埃斯塔多”。"
    }
  },
  {
    id: 15,
    number: "15",
    stage: 4,
    title: "喜好与观点",
    esTitle: "A mí me encanta",
    subtitle: "不只说“喜欢”，还能说“为什么”。",
    level: "A2",
    minutes: 11,
    goals: ["用 gustar / encantar 表达喜好", "用 creo que 和 me parece 说观点", "礼貌表达不同意"],
    intro: "聊天真正开始于观点。这一课用电影话题练习：喜欢、偏好、评价、不同意见，都是日常社交的高频动作。",
    dialogue: [
      { who: "Marta", role: "npc", es: "A mí me encanta el cine. ¿Y a ti?", zh: "我很喜欢电影。你呢？" },
      { who: "Tú", role: "you", es: "A mí también, sobre todo las películas de terror.", zh: "我也是，尤其是恐怖片。" },
      { who: "Marta", role: "npc", es: "¿En serio? Yo prefiero las comedias. ¿Qué te parece esta?", zh: "真的吗？我更喜欢喜剧。你觉得这部怎么样？" },
      { who: "Tú", role: "you", es: "Creo que es divertida, pero un poco larga.", zh: "我觉得挺有趣的，但有点长。" },
      { who: "Marta", role: "npc", es: "Estoy de acuerdo. ¿Y el final?", zh: "我同意。结尾呢？" },
      { who: "Tú", role: "you", es: "No me convenció. Pero en general, me gustó.", zh: "结尾没说服我。但整体上我喜欢。" },
      { who: "Marta", role: "npc", es: "Bueno, para gustos, colores.", zh: "嗯，萝卜青菜，各有所爱。" }
    ],
    phrases: [
      { es: "Me encanta el cine.", zh: "我超爱电影。", pron: "梅 恩坎塔 埃尔 西内" },
      { es: "Prefiero las comedias.", zh: "我更喜欢喜剧。", pron: "普雷菲埃罗 拉斯 科梅迪亚斯" },
      { es: "¿Qué te parece?", zh: "你觉得怎么样？", pron: "克 特 帕雷塞" },
      { es: "Creo que es un poco larga.", zh: "我觉得有点长。", pron: "克雷奥 克 埃斯 乌恩 波科 拉尔加" },
      { es: "Estoy de acuerdo.", zh: "我同意。", pron: "埃斯托伊 德 阿库埃尔多" },
      { es: "No me convence.", zh: "这说服不了我 / 我不太喜欢。", pron: "诺 梅 孔本塞" }
    ],
    vocab: [
      { es: "cine", zh: "电影；电影院", pron: "西内", pos: "名词", example: "Vamos al cine el viernes.", exampleZh: "我们周五去看电影。" },
      { es: "película", zh: "电影", pron: "佩利库拉", pos: "名词", example: "Es una película divertida.", exampleZh: "这是一部有趣的电影。" },
      { es: "terror", zh: "恐怖", pron: "特罗尔", pos: "名词", example: "Me gustan las películas de terror.", exampleZh: "我喜欢恐怖片。" },
      { es: "comedia", zh: "喜剧", pron: "科梅迪亚", pos: "名词", example: "Prefiero las comedias.", exampleZh: "我更喜欢喜剧。" },
      { es: "preferir", zh: "更喜欢", pron: "普雷费里尔", pos: "动词", example: "Prefiero quedarme en casa.", exampleZh: "我更喜欢待在家里。" },
      { es: "acuerdo", zh: "同意；一致", pron: "阿库埃尔多", pos: "名词", example: "Estoy de acuerdo contigo.", exampleZh: "我同意你。" }
    ],
    grammar: {
      title: "gustar / encantar：被喜欢的是主语",
      formula: "me / te / le + gusta / gustan　·　me encanta / encantan",
      body: "gustar 的句子结构像“某物让我喜欢”：Me gusta el cine（单数）、Me gustan las películas（复数）。强调对比时说 A mí me gusta...，A ti te gusta...。encantar 语气更强，用法相同：Me encanta viajar。preferir 的 e 在重读音节变 ie：prefiero、prefieres、prefiere。",
      examples: [
        { es: "Me gustan las películas de terror.", zh: "我喜欢恐怖片。" },
        { es: "A mí me encanta, pero a él no le gusta.", zh: "我很喜欢，但他不喜欢。" },
        { es: "Prefiero las comedias porque son más ligeras.", zh: "我更喜欢喜剧，因为更轻松。" }
      ],
      pitfall: "别说 Yo gusto el cine。gustar 的主语是电影；也不要说 Me gusta películas，复数要用 gustan。"
    },
    culture: {
      title: "直接不同，但不攻击人",
      body: "西班牙人讨论电影、足球、政治时可能很直接，但通常对事不对人。不同意可以说 No estoy de acuerdo、No me convence 或 Yo lo veo de otra manera。Para gustos, colores 是结束口味争论的轻松说法，类似“萝卜青菜，各有所爱”。"
    },
    challenge: {
      situation: "Marta 问你：¿Qué te parece la película? 你觉得一般。",
      prompt: "怎样表达“不太喜欢”又不扫兴？",
      options: [
        { es: "No está mal, pero no es lo mío.", zh: "还不错，但不是我的菜。", ok: true, why: "先给一点肯定，再温和表达不喜欢，很自然。" },
        { es: "Es horrible, no me gusta nada.", zh: "太糟糕了，我一点也不喜欢。", ok: false, why: "语法没错，但语气很重；除非你确实想强烈否定。" },
        { es: "Me gusta mucho.", zh: "我很喜欢。", ok: false, why: "这和你真实想法相反，也会让后面的对话变尴尬。" }
      ]
    },
    speaking: {
      es: "Creo que es divertida, pero no me convenció el final.",
      zh: "我觉得挺有趣，但结尾没打动我。",
      tip: "先肯定再转折：...pero...。convenció 的重音在 ció，句尾语调轻微下降。"
    }
  },
  {
    id: 16,
    number: "16",
    stage: 4,
    title: "处理问题",
    esTitle: "No funciona",
    subtitle: "投诉不吵架：描述问题、提出要求、确认时间。",
    level: "A2",
    minutes: 12,
    goals: ["清楚描述故障", "礼貌提出换房或维修", "确认处理时间与结果"],
    intro: "旅途中遇到问题，冷静说清三件事就够了：发生了什么、你要什么、什么时候能解决。这一课把“投诉”变成可执行的对话。",
    dialogue: [
      { who: "Recepción", role: "npc", es: "Buenas tardes, ¿en qué puedo ayudarte?", zh: "下午好，有什么可以帮你？" },
      { who: "Tú", role: "you", es: "Hola, la ducha no funciona y hace mucho ruido.", zh: "你好，淋浴坏了，而且很吵。" },
      { who: "Recepción", role: "npc", es: "Lo siento. ¿Estás en la habitación 302?", zh: "抱歉。您是在 302 房间吗？" },
      { who: "Tú", role: "you", es: "Sí. ¿Podéis cambiarme de habitación?", zh: "是的。能给我换个房间吗？" },
      { who: "Recepción", role: "npc", es: "Ahora mismo no hay habitaciones libres, pero puedo enviar a alguien.", zh: "现在没有空房，但我可以派人过去。" },
      { who: "Tú", role: "you", es: "¿Cuánto tardará?", zh: "要多久？" },
      { who: "Recepción", role: "npc", es: "Unos quince minutos. Disculpa las molestias.", zh: "大约十五分钟。给您添麻烦了。" },
      { who: "Tú", role: "you", es: "Vale, gracias. Si no se arregla, preferiría otra habitación.", zh: "好的，谢谢。如果修不好，我更希望换个房间。" },
      { who: "Recepción", role: "npc", es: "Entendido. Te aviso en cuanto esté.", zh: "明白。一有结果我就通知您。" }
    ],
    phrases: [
      { es: "No funciona.", zh: "它坏了 / 不工作。", pron: "诺 丰西奥纳" },
      { es: "Se ha roto.", zh: "它坏了（刚坏）。", pron: "塞 阿 罗托" },
      { es: "¿Podéis cambiarme de habitación?", zh: "能给我换个房间吗？", pron: "波德斯 坎比亚尔梅 德 阿比塔西翁" },
      { es: "¿Cuánto tardará?", zh: "要多久？", pron: "宽托 塔尔达拉" },
      { es: "Disculpa las molestias.", zh: "抱歉给您添麻烦了。", pron: "迪斯库尔帕 拉斯 莫莱斯提亚斯" },
      { es: "Preferiría hablar con el encargado.", zh: "我更想和负责人谈谈。", pron: "普雷费里亚 阿布拉尔 孔 埃尔 恩卡尔加多" }
    ],
    vocab: [
      { es: "funcionar", zh: "运作；工作", pron: "丰西奥纳尔", pos: "动词", example: "El wifi no funciona.", exampleZh: "WiFi 坏了。" },
      { es: "roto / rota", zh: "坏了的", pron: "罗托 / 罗塔", pos: "形容词", example: "La puerta está rota.", exampleZh: "门坏了。" },
      { es: "avería", zh: "故障", pron: "阿韦里亚", pos: "名词", example: "Hay una avería en el edificio.", exampleZh: "楼里有故障。" },
      { es: "cambiar", zh: "更换；改变", pron: "坎比亚尔", pos: "动词", example: "Quiero cambiar de habitación.", exampleZh: "我想换房间。" },
      { es: "molestia", zh: "麻烦；不便", pron: "莫莱斯提亚", pos: "名词", example: "Disculpa las molestias.", exampleZh: "抱歉给你添麻烦。" },
      { es: "arreglar", zh: "修理；解决", pron: "阿雷格拉尔", pos: "动词", example: "Lo vamos a arreglar.", exampleZh: "我们会修好的。" }
    ],
    grammar: {
      title: "投诉三步：描述 + 要求 + 时间",
      formula: "No funciona...　·　¿Podéis...?　·　¿Cuánto tardará?",
      body: "描述问题用 estar roto 或 no funcionar：La ducha está rota / no funciona。提出要求用 ¿Podéis...?（对一群人，西班牙常用 vosotros）或 ¿Podría...?（正式）。确认时间用 ¿Cuánto tardará？。preferiría 是条件式，表示“我更希望”，比 quiero 柔和。",
      examples: [
        { es: "El aire acondicionado no funciona.", zh: "空调坏了。" },
        { es: "¿Podéis enviar a alguien?", zh: "你们能派人来吗？" },
        { es: "Preferiría cambiar de habitación.", zh: "我更想换个房间。" }
      ],
      pitfall: "“房间坏了”不要说 La habitación está rota，听起来像整间房坏了；要说具体设备：La ducha / El aire no funciona。"
    },
    culture: {
      title: "礼貌而坚定，别吃亏",
      body: "西班牙服务行业交流直接但重视礼貌。先 Hola、Lo siento，再说问题，最后提出明确要求。住酒店可要求 hoja de reclamaciones（投诉单），这是消费者的正式权利；紧急危险拨 112。保留照片和收据，后续沟通会容易很多。"
    },
    challenge: {
      situation: "酒店 WiFi 连不上，你想请前台处理。",
      prompt: "最清楚的表达是？",
      options: [
        { es: "Perdona, el wifi no funciona. ¿Podéis ayudarme?", zh: "抱歉，WiFi 坏了。你们能帮我吗？", ok: true, why: "先描述故障，再提出具体请求，简洁有效。" },
        { es: "El wifi es malo.", zh: "WiFi 很差。", ok: false, why: "只是评价，没有说明具体问题，也没有提出请求。" },
        { es: "¿Por qué el wifi?", zh: "为什么 WiFi？", ok: false, why: "句子不完整，对方不知道你要什么。" }
      ]
    },
    speaking: {
      es: "Hola, la ducha no funciona. ¿Podéis enviar a alguien, por favor?",
      zh: "你好，淋浴坏了。你们能派人来吗？",
      tip: "描述问题后停一下，再提要求。funciona 的重音在 cio；podéis 的重音在 de。"
    }
  }
);
