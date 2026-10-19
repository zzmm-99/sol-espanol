/* SOL · 西语日常 — 课程地图与 16 个核心场景 */
window.SOL_STAGES = [
  {
    id: 1,
    roman: "01",
    label: "开口",
    es: "Primeras palabras",
    level: "A0",
    weeks: "第 1–2 周",
    desc: "用最少、最稳的句子，完成第一次真正的交流。",
    color: "saffron"
  },
  {
    id: 2,
    roman: "02",
    label: "日常",
    es: "El día a día",
    level: "A1",
    weeks: "第 3–4 周",
    desc: "咖啡、天气、市场、餐厅——每天都用得上的西语。",
    color: "terracotta"
  },
  {
    id: 3,
    roman: "03",
    label: "生活",
    es: "Vida cotidiana",
    level: "A1+",
    weeks: "第 5–6 周",
    desc: "问路、租房、看医生、打电话，不再依赖翻译软件。",
    color: "olive"
  },
  {
    id: 4,
    roman: "04",
    label: "交流",
    es: "Conversación",
    level: "A2",
    weeks: "第 7–8 周",
    desc: "约朋友、聊经历、表达喜好，把对话继续下去。",
    color: "ink"
  }
];

window.SOL_LESSONS = [
  {
    id: 1,
    number: "01",
    stage: 1,
    title: "第一次见面",
    esTitle: "Mucho gusto",
    subtitle: "三句话完成一次不尴尬的自我介绍。",
    level: "A0",
    minutes: 10,
    goals: ["用 Hola / ¿Qué tal? 自然开场", "说出名字和来自哪里", "分清 encantado 与 encantada"],
    intro: "你在一场语言交换活动上遇到 Lucía。别急着背长句，先把这三句话用熟。",
    dialogue: [
      { who: "Lucía", role: "npc", es: "¡Hola! ¿Qué tal?", zh: "你好！最近怎么样？" },
      { who: "Tú", role: "you", es: "¡Hola! Muy bien, gracias. ¿Y tú?", zh: "你好！很好，谢谢。你呢？" },
      { who: "Lucía", role: "npc", es: "Bien. ¿Cómo te llamas?", zh: "挺好的。你叫什么名字？" },
      { who: "Tú", role: "you", es: "Me llamo Lin. Mucho gusto.", zh: "我叫林。很高兴认识你。" },
      { who: "Lucía", role: "npc", es: "Encantada. ¿De dónde eres?", zh: "很高兴认识你。你来自哪里？" },
      { who: "Tú", role: "you", es: "Soy de China. Estoy aprendiendo español.", zh: "我来自中国。我在学西班牙语。" },
      { who: "Lucía", role: "npc", es: "¡Qué bien! Hablas muy bien.", zh: "太好了！你说得很好。" },
      { who: "Tú", role: "you", es: "Gracias, poco a poco.", zh: "谢谢，一步一步来。" }
    ],
    phrases: [
      { es: "¡Hola! ¿Qué tal?", zh: "你好！最近怎么样？", pron: "奥拉 · 克塔尔" },
      { es: "Muy bien, gracias. ¿Y tú?", zh: "很好，谢谢。你呢？", pron: "穆伊 比恩 · 格拉西亚斯 · 伊 图" },
      { es: "Me llamo Lin.", zh: "我叫林。", pron: "梅 亚莫 林" },
      { es: "Mucho gusto. / Encantado, -a.", zh: "很高兴认识你。（男性用 encantado，女性用 encantada）", pron: "穆乔 古斯托 · 恩坎塔多 / 恩坎塔达" },
      { es: "Soy de China.", zh: "我来自中国。", pron: "索伊 德 奇纳" },
      { es: "Poco a poco.", zh: "一步一步来。慢慢来。", pron: "波科 阿 波科" }
    ],
    vocab: [
      { es: "hola", zh: "你好", pron: "奥拉", pos: "感叹词", example: "¡Hola, Ana!", exampleZh: "你好，安娜！" },
      { es: "¿qué tal?", zh: "怎么样？/ 你好吗？", pron: "克 塔尔", pos: "固定表达", example: "Hola, ¿qué tal?", exampleZh: "嗨，最近怎么样？" },
      { es: "mucho gusto", zh: "很高兴认识你", pron: "穆乔 古斯托", pos: "固定表达", example: "Mucho gusto, soy Marta.", exampleZh: "很高兴认识你，我是玛尔塔。" },
      { es: "encantado / encantada", zh: "很高兴认识你（阳性/阴性）", pron: "恩坎塔多 / 恩坎塔达", pos: "形容词", example: "Encantada de conocerte.", exampleZh: "很高兴认识你。" },
      { es: "hasta luego", zh: "回头见", pron: "阿斯塔 卢埃戈", pos: "固定表达", example: "Hasta luego, Lucía.", exampleZh: "回头见，露西亚。" },
      { es: "¿de dónde eres?", zh: "你来自哪里？", pron: "德 东德 埃雷斯", pos: "问句", example: "¿De dónde eres?", exampleZh: "你是哪里人？" }
    ],
    grammar: {
      title: "tú 还是 usted？还有那句会“变性别”的 encantado",
      formula: "tú = 熟人 / 同龄人　·　usted = 礼貌 / 正式",
      body: "西班牙人日常聊天很快会从 usted 切到 tú。第一次见面前，如果不确定，可以先观察对方。遇到长辈、客户或正式场合，用 usted。另一个小细节：说“很高兴认识你”时，说话者是男性用 encantado，女性用 encantada，因为它描述的是说话者自己。",
      examples: [
        { es: "¿Cómo estás?", zh: "你好吗？（tú，轻松）" },
        { es: "¿Cómo está usted?", zh: "您好吗？（usted，正式）" },
        { es: "Mucho gusto, soy Diego. Encantado.", zh: "很高兴认识你，我是迭戈。（男性）" }
      ],
      pitfall: "别把 encantado 说成 encantada，除非你是女性。也不用每句都加 usted，那样会显得很生疏。"
    },
    culture: {
      title: "贴面礼，不是每次都来两下",
      body: "在西班牙，朋友之间常见两次贴面礼（先右后左），但正式场合多用握手。最稳妥的规则：看对方伸手还是侧脸，跟着做就行。疫情后，也有人更习惯握手或挥手。"
    },
    challenge: {
      situation: "第一次见面，Lucía 对你说：Mucho gusto。",
      prompt: "你该怎么回应？",
      options: [
        { es: "Encantado / Encantada, igualmente.", zh: "很高兴认识你，我也是。", ok: true, why: "igualmente 就是“我也一样”，自然又礼貌。" },
        { es: "De nada.", zh: "不客气。", ok: false, why: "De nada 用来回应 gracias，不是回应“很高兴认识你”。" },
        { es: "Estoy bien, gracias.", zh: "我很好，谢谢。", ok: false, why: "句子本身没错，但这里对方并不是在问你好不好。" }
      ]
    },
    speaking: {
      es: "¡Hola! Me llamo Lin. Mucho gusto.",
      zh: "你好！我叫林。很高兴认识你。",
      tip: "先慢后快，注意 hola 的 h 不发音，llamo 的 ll 在西班牙多数地区像“y”。"
    }
  },
  {
    id: 2,
    number: "02",
    stage: 1,
    title: "介绍自己",
    esTitle: "Soy de China",
    subtitle: "名字、家乡、工作和年龄，一口气说清楚。",
    level: "A0",
    minutes: 11,
    goals: ["用 llamarse 介绍名字", "说清工作与居住地", "用 tener 说年龄"],
    intro: "在一堂西语课上，Diego 主动和你聊天。你需要把自己的基本信息串成一段短短的话。",
    dialogue: [
      { who: "Diego", role: "npc", es: "¿Eres nuevo?", zh: "你是新来的吗？" },
      { who: "Tú", role: "you", es: "Sí, soy nuevo / nueva. Me llamo Alex.", zh: "是的，我是新来的。我叫 Alex。" },
      { who: "Diego", role: "npc", es: "Yo soy Diego. ¿De dónde eres?", zh: "我是迭戈。你来自哪里？" },
      { who: "Tú", role: "you", es: "Soy de China, de Shanghái.", zh: "我来自中国，上海。" },
      { who: "Diego", role: "npc", es: "¿A qué te dedicas?", zh: "你是做什么工作的？" },
      { who: "Tú", role: "you", es: "Soy diseñador / diseñadora. Trabajo en una empresa de tecnología.", zh: "我是设计师。我在一家科技公司工作。" },
      { who: "Diego", role: "npc", es: "¡Qué interesante! ¿Cuántos años tienes?", zh: "真有意思！你多大了？" },
      { who: "Tú", role: "you", es: "Tengo veintiocho años. Vivo en Madrid.", zh: "我二十八岁。我住在马德里。" }
    ],
    phrases: [
      { es: "Me llamo Alex.", zh: "我叫 Alex。", pron: "梅 亚莫 亚历克斯" },
      { es: "Soy de China, de Shanghái.", zh: "我来自中国上海。", pron: "索伊 德 奇纳 · 德 上海" },
      { es: "¿A qué te dedicas?", zh: "你做什么工作？", pron: "阿 克 特 德迪卡斯" },
      { es: "Trabajo en una empresa de tecnología.", zh: "我在一家科技公司工作。", pron: "特拉巴霍 恩 乌纳 恩普雷萨 德 特克诺洛希亚" },
      { es: "Vivo en Madrid.", zh: "我住在马德里。", pron: "比沃 恩 马德里" },
      { es: "Tengo veintiocho años.", zh: "我二十八岁。", pron: "滕戈 贝因蒂奥乔 阿尼奥斯" }
    ],
    vocab: [
      { es: "llamarse", zh: "叫……名字", pron: "亚马尔塞", pos: "反身动词", example: "Me llamo Ana.", exampleZh: "我叫安娜。" },
      { es: "vivir", zh: "居住；生活", pron: "比比尔", pos: "动词", example: "Vivo en Barcelona.", exampleZh: "我住在巴塞罗那。" },
      { es: "trabajar", zh: "工作", pron: "特拉巴哈尔", pos: "动词", example: "Trabajo en un hotel.", exampleZh: "我在酒店工作。" },
      { es: "estudiante", zh: "学生", pron: "埃斯图迪安特", pos: "名词", example: "Soy estudiante.", exampleZh: "我是学生。" },
      { es: "empresa", zh: "公司", pron: "恩普雷萨", pos: "名词", example: "Es una empresa española.", exampleZh: "这是一家西班牙公司。" },
      { es: "años", zh: "年；岁", pron: "阿尼奥斯", pos: "名词", example: "Tengo treinta años.", exampleZh: "我三十岁。" }
    ],
    grammar: {
      title: "年龄用 tener，不用 ser",
      formula: "me llamo + 名字　·　soy + 国籍/职业　·　tengo + 数字 + años",
      body: "中文说“我是二十八岁”，西语不能说 soy veintiocho años。年龄是“拥有”的概念，用 tener：Tengo veintiocho años。介绍名字则用反身动词 llamarse：me llamo、te llamas、se llama。职业前通常不加冠词：Soy diseñador，而不是 Soy un diseñador。",
      examples: [
        { es: "Me llamo Lin y soy de China.", zh: "我叫林，来自中国。" },
        { es: "Trabajo en una empresa de tecnología.", zh: "我在一家科技公司工作。" },
        { es: "Tengo veintiocho años y vivo en Madrid.", zh: "我二十八岁，住在马德里。" }
      ],
      pitfall: "职业前一般不加 un/una；年龄别用 soy；说住在某地时，vivir en 的 en 不能丢。"
    },
    culture: {
      title: "西班牙人的姓，通常有两个",
      body: "西班牙人全名通常由“名 + 父姓 + 母姓”组成，日常只用名加第一个姓。问对方姓氏可以说 ¿Cuál es tu apellido？但刚认识时不用急着问——先聊名字和来自哪里就够了。"
    },
    challenge: {
      situation: "有人问你：¿A qué te dedicas?",
      prompt: "你想说“我是学生”，哪种回答最自然？",
      options: [
        { es: "Soy estudiante.", zh: "我是学生。", ok: true, why: "职业/身份前不加冠词，直接说 soy estudiante。" },
        { es: "Tengo estudiante.", zh: "我有学生。", ok: false, why: "tener 表示“拥有”，不能拿来介绍身份。" },
        { es: "Estoy un estudiante.", zh: "我是一个学生。", ok: false, why: "介绍身份用 ser；而且职业前通常不加 un。" }
      ]
    },
    speaking: {
      es: "Me llamo Lin, soy de China y trabajo en una empresa de tecnología.",
      zh: "我叫林，来自中国，在一家科技公司工作。",
      tip: "把一句话分成三段：名字 / 家乡 / 工作。每段之间停半秒，会更清楚。"
    }
  },
  {
    id: 3,
    number: "03",
    stage: 1,
    title: "数字、价格与时间",
    esTitle: "¿Cuánto es?",
    subtitle: "买菜、看时间、问价格，数字先过关。",
    level: "A0",
    minutes: 12,
    goals: ["听懂 1–100 的关键数字", "问价格并付款", "用 Son las... 说时间"],
    intro: "早市是最好的数字课堂。你不用一次记住所有数字，先把 1–10、10 的倍数和常见价格听懂。",
    dialogue: [
      { who: "Vendedora", role: "npc", es: "Buenos días, ¿qué te pongo?", zh: "早上好，要点什么？" },
      { who: "Tú", role: "you", es: "Dos tomates y un kilo de naranjas, por favor. ¿Cuánto es?", zh: "两个西红柿和一公斤橙子，谢谢。多少钱？" },
      { who: "Vendedora", role: "npc", es: "Son cuatro euros con veinte.", zh: "四欧二十。", note: "4,20 € 读作 cuatro euros con veinte" },
      { who: "Tú", role: "you", es: "¿Puedo pagar con tarjeta?", zh: "可以刷卡吗？" },
      { who: "Vendedora", role: "npc", es: "Sí, claro. ¿Algo más?", zh: "当然可以。还要别的吗？" },
      { who: "Tú", role: "you", es: "No, gracias. ¿Qué hora es?", zh: "不用了，谢谢。现在几点？" },
      { who: "Vendedora", role: "npc", es: "Son las once y media.", zh: "十一点半。" },
      { who: "Tú", role: "you", es: "Gracias. ¡Hasta luego!", zh: "谢谢。回头见！" }
    ],
    phrases: [
      { es: "¿Cuánto es?", zh: "多少钱？", pron: "宽托 埃斯" },
      { es: "Son cuatro euros con veinte.", zh: "一共四欧二十。", pron: "松 夸特罗 埃乌罗斯 孔 贝因特" },
      { es: "¿Puedo pagar con tarjeta?", zh: "可以刷卡吗？", pron: "普埃多 帕加尔 孔 塔尔赫塔" },
      { es: "¿Qué hora es?", zh: "现在几点？", pron: "克 奥拉 埃斯" },
      { es: "Son las once y media.", zh: "十一点半。", pron: "松 拉斯 翁塞 伊 梅迪亚" },
      { es: "Un kilo de naranjas, por favor.", zh: "请来一公斤橙子。", pron: "乌恩 基洛 德 纳兰哈斯" }
    ],
    vocab: [
      { es: "uno, dos, tres", zh: "一、二、三", pron: "乌诺 · 多斯 · 特雷斯", pos: "数字", example: "Dos cafés, por favor.", exampleZh: "请来两杯咖啡。" },
      { es: "cuatro, cinco, seis", zh: "四、五、六", pron: "夸特罗 · 辛科 · 塞伊斯", pos: "数字", example: "Son cinco euros.", exampleZh: "一共五欧。" },
      { es: "siete, ocho, nueve, diez", zh: "七、八、九、十", pron: "谢特 · 奥乔 · 努埃韦 · 迭斯", pos: "数字", example: "Tengo diez euros.", exampleZh: "我有十欧元。" },
      { es: "veinte", zh: "二十", pron: "贝因特", pos: "数字", example: "Veinte minutos.", exampleZh: "二十分钟。" },
      { es: "cien", zh: "一百", pron: "西恩", pos: "数字", example: "Cien gramos de queso.", exampleZh: "一百克奶酪。" },
      { es: "y media", zh: "……点半", pron: "伊 梅迪亚", pos: "时间表达", example: "Son las siete y media.", exampleZh: "七点半。" }
    ],
    grammar: {
      title: "价格用 son，时间也用 son",
      formula: "1 € = un euro　·　4,20 € = cuatro euros con veinte　·　1:00 = es la una",
      body: "问价格固定说 ¿Cuánto es？或 ¿Cuánto cuesta？。金额是复数时回答用 son：Son cuatro euros。时间方面，一点是 Es la una，其余是 Son las dos / tres...。“半”用 y media，“一刻”用 y cuarto，“差一刻”用 menos cuarto。",
      examples: [
        { es: "¿Cuánto cuesta esta camiseta?", zh: "这件 T 恤多少钱？" },
        { es: "Son las diez y cuarto.", zh: "十点一刻。" },
        { es: "La clase es a las seis.", zh: "课在六点。", note: "a las 表示“在几点”" }
      ],
      pitfall: "问“在几点”用 ¿A qué hora...?，回答用 a las...；说“现在几点”才用 ¿Qué hora es?。"
    },
    culture: {
      title: "西班牙的午饭，真的比较晚",
      body: "很多西班牙人下午两点左右吃午饭，晚上九点后才吃晚饭。商店中午可能休息，周日不少店不开门。安排见面时，最好确认一句 ¿A qué hora te va bien？比直接假设时间更稳。"
    },
    challenge: {
      situation: "店员说：Son las siete y cuarto。",
      prompt: "现在是几点？",
      options: [
        { es: "七点十五分。", zh: "七点十五分。", ok: true, why: "y cuarto 是“一刻钟”，即十五分钟。" },
        { es: "七点四十五分。", zh: "七点四十五分。", ok: false, why: "quince 才是十五；cuarto 在时间里表示一刻钟。四十五分可以说 menos cuarto。" },
        { es: "六点四十五分。", zh: "六点四十五分。", ok: false, why: "这里说的是七点过一刻，不是差一刻七点。" }
      ]
    },
    speaking: {
      es: "¿Cuánto es? ¿Puedo pagar con tarjeta?",
      zh: "多少钱？可以刷卡吗？",
      tip: "先问价格，再问付款方式。tarjeta 的重音在 te，读作 tar-HE-ta。"
    }
  },
  {
    id: 4,
    number: "04",
    stage: 1,
    title: "听不懂时怎么办",
    esTitle: "Más despacio, por favor",
    subtitle: "不装懂、不沉默，用三句话把对话救回来。",
    level: "A0",
    minutes: 10,
    goals: ["礼貌请对方重复或放慢", "问一个词是什么意思", "掌握 poder 的礼貌用法"],
    intro: "真正的沟通能力，不是每个词都听懂，而是听不懂时还能继续。这一课可能是整个网站最实用的内容。",
    dialogue: [
      { who: "Ana", role: "npc", es: "Vamos a quedar en Malasaña, en el centro.", zh: "我们约在市中心马拉萨尼亚见吧。" },
      { who: "Tú", role: "you", es: "Perdona, ¿puedes repetir más despacio?", zh: "抱歉，你能慢一点再说一遍吗？" },
      { who: "Ana", role: "npc", es: "Claro: Ma-la-sa-ña. Es un barrio del centro.", zh: "当然：马拉萨尼亚。它是市中心的一个街区。" },
      { who: "Tú", role: "you", es: "¿Qué significa “barrio”?", zh: "barrio 是什么意思？" },
      { who: "Ana", role: "npc", es: "Neighbourhood. ¿Lo ves?", zh: "就是“街区”。明白了吗？" },
      { who: "Tú", role: "you", es: "Ahora sí. ¿Puedes escribirlo?", zh: "现在明白了。你能写下来吗？" },
      { who: "Ana", role: "npc", es: "Claro, toma.", zh: "当然，给你。" }
    ],
    phrases: [
      { es: "Perdona, no entiendo.", zh: "抱歉，我不明白。", pron: "佩尔多纳 · 诺 恩铁恩多" },
      { es: "¿Puedes repetir más despacio?", zh: "你能慢一点再说一遍吗？", pron: "普埃德斯 雷佩蒂尔 马斯 德斯帕西奥" },
      { es: "¿Qué significa “barrio”?", zh: "barrio 是什么意思？", pron: "克 西格尼菲卡 巴里奥" },
      { es: "¿Cómo se dice “neighbourhood” en español?", zh: "neighbourhood 用西语怎么说？", pron: "科莫 塞 迪塞 恩 埃斯帕尼奥尔" },
      { es: "¿Puedes escribirlo?", zh: "你能写下来吗？", pron: "普埃德斯 埃斯克里比尔洛" },
      { es: "Un momento, por favor.", zh: "请稍等一下。", pron: "乌恩 莫门托 波尔 法沃尔" }
    ],
    vocab: [
      { es: "entender", zh: "理解；明白", pron: "恩滕德尔", pos: "动词", example: "No entiendo esta frase.", exampleZh: "我不明白这句话。" },
      { es: "repetir", zh: "重复", pron: "雷佩蒂尔", pos: "动词", example: "¿Puedes repetir?", exampleZh: "你能重复一下吗？" },
      { es: "despacio", zh: "慢地", pron: "德斯帕西奥", pos: "副词", example: "Habla más despacio.", exampleZh: "请说慢一点。" },
      { es: "significar", zh: "意思是", pron: "西格尼菲卡尔", pos: "动词", example: "¿Qué significa “vale”?", exampleZh: "vale 是什么意思？" },
      { es: "escribir", zh: "写", pron: "埃斯克里比尔", pos: "动词", example: "¿Puedes escribirlo?", exampleZh: "你能写下来吗？" },
      { es: "palabra", zh: "单词", pron: "帕拉布拉", pos: "名词", example: "No conozco esta palabra.", exampleZh: "我不认识这个词。" }
    ],
    grammar: {
      title: "礼貌请求：¿Puedes...? 和 ¿Puede...?",
      formula: "¿Puedes + 动词原形? （tú）　·　¿Puede + 动词原形? （usted）",
      body: "poder 是“能、可以”。对朋友说 ¿Puedes repetir？，对长辈或陌生人说 ¿Puede repetir？。想更柔和，可以用 ¿Podrías...?（tú）或 ¿Podría...?（usted），相当于“能不能麻烦你……”。加 por favor 永远不会错。",
      examples: [
        { es: "¿Puedes hablar más despacio, por favor?", zh: "你能说慢一点吗？（朋友）" },
        { es: "¿Puede repetirlo, por favor?", zh: "您能重复一下吗？（正式）" },
        { es: "¿Podrías escribirlo?", zh: "能不能麻烦你写下来？" }
      ],
      pitfall: "despacio 是副词，别写成 despacio 加 -mente；请求别人时句尾的 ¿ 和 ? 都别漏，声调会上扬。"
    },
    culture: {
      title: "听不懂，不是失礼",
      body: "西班牙人语速普遍快，而且常省略主语。你完全可以说 No entiendo 或 ¿Cómo?（后者语气别太重，配合抱歉的表情）。当地人通常很愿意放慢、换词，甚至用手机打字给你看。"
    },
    challenge: {
      situation: "对方说了一长串，你只捕捉到几个词。",
      prompt: "最有效、最礼貌的反应是？",
      options: [
        { es: "Perdona, no te he entendido. ¿Puedes repetirlo más despacio?", zh: "抱歉，我没听懂。你能慢点重复一遍吗？", ok: true, why: "明确说出“没听懂”，再给出具体请求，对方最容易帮你。" },
        { es: "Sí, sí, vale.", zh: "嗯嗯，好。", ok: false, why: "假装听懂会让后面的对话更难，也可能造成误会。" },
        { es: "¡Habla bien!", zh: "好好说！", ok: false, why: "这是命令且带责备意味，非常不礼貌。" }
      ]
    },
    speaking: {
      es: "Perdona, ¿puedes repetir más despacio, por favor?",
      zh: "抱歉，你能慢一点再说一遍吗？",
      tip: "把这句话当成护身符。注意 puedes 的重音在 pue，despacio 的重音在 pa。"
    }
  },
  {
    id: 5,
    number: "05",
    stage: 2,
    title: "咖啡馆点单",
    esTitle: "Un café con leche",
    subtitle: "从进门到结账，一杯咖啡的完整流程。",
    level: "A1",
    minutes: 11,
    goals: ["用 un/una 点单", "分清 tomar aquí 与 para llevar", "礼貌结账"],
    intro: "早晨的西班牙咖啡馆很热闹。站着喝、坐着喝、打包带走都可以，关键是别被一连串问题问懵。",
    dialogue: [
      { who: "Camarero", role: "npc", es: "Buenos días. ¿Qué te pongo?", zh: "早上好。你要点什么？" },
      { who: "Tú", role: "you", es: "Un café con leche y un croissant, por favor.", zh: "一杯拿铁和一个可颂，谢谢。" },
      { who: "Camarero", role: "npc", es: "Muy bien. ¿Para tomar aquí o para llevar?", zh: "好的。在这儿喝还是带走？" },
      { who: "Tú", role: "you", es: "Para tomar aquí.", zh: "在这儿喝。" },
      { who: "Camarero", role: "npc", es: "¿Algo más?", zh: "还要别的吗？" },
      { who: "Tú", role: "you", es: "No, gracias. ¿Cuánto es?", zh: "不用了，谢谢。多少钱？" },
      { who: "Camarero", role: "npc", es: "Tres euros con cincuenta.", zh: "三欧五十。" },
      { who: "Tú", role: "you", es: "¿Puedo pagar con tarjeta? Vale, muchas gracias.", zh: "可以刷卡吗？好的，非常感谢。" }
    ],
    phrases: [
      { es: "Un café con leche, por favor.", zh: "请来一杯拿铁。", pron: "乌恩 卡费 孔 莱切" },
      { es: "¿Qué me recomiendas?", zh: "你推荐什么？", pron: "克 梅 雷科米恩达斯" },
      { es: "Para tomar aquí / Para llevar.", zh: "在这儿喝 / 带走。", pron: "帕拉 托马尔 阿基 / 帕拉 耶瓦尔" },
      { es: "Sin azúcar, por favor.", zh: "不要糖，谢谢。", pron: "辛 阿苏卡尔 波尔 法沃尔" },
      { es: "La cuenta, por favor.", zh: "请结账。", pron: "拉 宽塔 波尔 法沃尔" },
      { es: "¿Puedo pagar con tarjeta?", zh: "可以刷卡吗？", pron: "普埃多 帕加尔 孔 塔尔赫塔" }
    ],
    vocab: [
      { es: "café solo", zh: "浓缩咖啡", pron: "卡费 索洛", pos: "名词", example: "Un café solo, por favor.", exampleZh: "请来一杯浓缩咖啡。" },
      { es: "café con leche", zh: "拿铁 / 牛奶咖啡", pron: "卡费 孔 莱切", pos: "名词", example: "Un café con leche.", exampleZh: "一杯拿铁。" },
      { es: "cortado", zh: "浓缩加少量牛奶", pron: "科尔塔多", pos: "名词", example: "Yo tomo un cortado.", exampleZh: "我喝一杯 cortado。" },
      { es: "zumo", zh: "果汁", pron: "苏莫", pos: "名词", example: "Un zumo de naranja.", exampleZh: "一杯橙汁。" },
      { es: "tostada", zh: "烤面包片", pron: "托斯塔达", pos: "名词", example: "Una tostada con tomate.", exampleZh: "一份番茄烤面包。" },
      { es: "cuenta", zh: "账单", pron: "宽塔", pos: "名词", example: "La cuenta, por favor.", exampleZh: "请结账。" }
    ],
    grammar: {
      title: "点单三句式：Quiero / Me gustaría / ¿Me pones?",
      formula: "Quiero + 名词　·　Me gustaría + 名词　·　¿Me pones + 名词?",
      body: "Quiero un café 直接、清楚；Me gustaría un café 更礼貌、更柔和；在西班牙酒吧里，¿Me pones un café？也很常用，语气轻松。点单时通常不需要说 yo。注意 un/una 要和名词阴阳性一致：un café、una tostada、un zumo。",
      examples: [
        { es: "Quiero un cortado, por favor.", zh: "我要一杯 cortado，谢谢。" },
        { es: "Me gustaría una tostada con tomate.", zh: "我想要一份番茄烤面包。" },
        { es: "¿Me pones un zumo de naranja?", zh: "给我来一杯橙汁好吗？" }
      ],
      pitfall: "café con leche 是“咖啡加牛奶”，不是拿铁玛奇朵。点“茶”说 un té；水的种类要说明 con gas / sin gas。"
    },
    culture: {
      title: "咖啡馆是西班牙人的第二个客厅",
      body: "早上很多人在咖啡馆站着喝一杯咖啡、吃块烤面包，再去上班。中午和晚上则可能点 caña（小杯啤酒）配小食。结账时说 La cuenta, por favor 即可，服务费通常已包含，小额找零可以留下。"
    },
    challenge: {
      situation: "服务员问：¿Para tomar aquí o para llevar?",
      prompt: "你想“带走”，应该回答？",
      options: [
        { es: "Para llevar, por favor.", zh: "带走，谢谢。", ok: true, why: "para llevar 是固定表达，意思是“外带”。" },
        { es: "Para aquí, por favor.", zh: "给这里。", ok: false, why: "不自然；在店里喝应说 para tomar aquí。" },
        { es: "A la izquierda.", zh: "在左边。", ok: false, why: "这是在回答方向问题，不是回答堂食/外带。" }
      ]
    },
    speaking: {
      es: "Un café con leche y una tostada, por favor. Para tomar aquí.",
      zh: "请来一杯拿铁和一份烤面包，在这儿吃。",
      tip: "点单时把名词和冠词连在一起记：un café、una tostada。这样阴阳性不会卡住。"
    }
  },
  {
    id: 6,
    number: "06",
    stage: 2,
    title: "天气与近况",
    esTitle: "¿Qué tal el día?",
    subtitle: "电梯里、楼道里，用 30 秒完成一次小聊。",
    level: "A1",
    minutes: 10,
    goals: ["用 estar 描述状态", "聊天气的三种句型", "用 ir a 说即将发生的事"],
    intro: "邻居 Carmen 在电梯里遇到你。这类对话不需要深刻内容，接住对方的话、再抛回一个小问题就够了。",
    dialogue: [
      { who: "Carmen", role: "npc", es: "¡Hola, vecino! ¿Qué tal?", zh: "你好呀，邻居！最近怎么样？" },
      { who: "Tú", role: "you", es: "Bien, un poco cansado / cansada. ¿Y tú?", zh: "挺好的，有点累。你呢？" },
      { who: "Carmen", role: "npc", es: "Regular, con este calor...", zh: "一般般，这天气太热了……" },
      { who: "Tú", role: "you", es: "Sí, hace mucho calor hoy. Dicen que mañana va a llover.", zh: "是啊，今天很热。听说明天要下雨。" },
      { who: "Carmen", role: "npc", es: "¡Menos mal! No puedo más con este sol.", zh: "幸好！我快受不了这太阳了。" },
      { who: "Tú", role: "you", es: "Yo prefiero el frío. Bueno, ¡que tengas un buen día!", zh: "我更喜欢冷一点。好啦，祝你今天愉快！" },
      { who: "Carmen", role: "npc", es: "Igualmente, hasta luego.", zh: "你也是，回头见。" }
    ],
    phrases: [
      { es: "¿Qué tal?", zh: "怎么样？/ 你好吗？", pron: "克 塔尔" },
      { es: "Estoy un poco cansado / cansada.", zh: "我有点累。（阳/阴性）", pron: "埃斯托伊 乌恩 波科 坎萨多 / 坎萨达" },
      { es: "Hace mucho calor / frío.", zh: "天气很热 / 很冷。", pron: "阿塞 穆乔 卡洛尔 / 弗里奥" },
      { es: "Va a llover.", zh: "要下雨了。", pron: "巴 阿 约韦尔" },
      { es: "¡Menos mal!", zh: "幸好！/ 还好！", pron: "梅诺斯 马尔" },
      { es: "¡Que tengas un buen día!", zh: "祝你今天愉快！", pron: "克 滕加斯 乌恩 布恩 迪亚" }
    ],
    vocab: [
      { es: "cansado / cansada", zh: "累的（阳/阴）", pron: "坎萨多 / 坎萨达", pos: "形容词", example: "Estoy muy cansada.", exampleZh: "我很累。" },
      { es: "contento / contenta", zh: "开心的", pron: "孔滕托 / 孔滕塔", pos: "形容词", example: "Estoy contento hoy.", exampleZh: "我今天很开心。" },
      { es: "calor", zh: "热", pron: "卡洛尔", pos: "名词", example: "Hace calor.", exampleZh: "天气热。" },
      { es: "frío", zh: "冷", pron: "弗里奥", pos: "名词/形容词", example: "Hace frío.", exampleZh: "天气冷。" },
      { es: "sol", zh: "太阳；阳光", pron: "索尔", pos: "名词", example: "Hay mucho sol.", exampleZh: "阳光很足。" },
      { es: "tiempo", zh: "天气；时间", pron: "铁恩波", pos: "名词", example: "¿Qué tiempo hace?", exampleZh: "天气怎么样？" }
    ],
    grammar: {
      title: "天气三句型：hace、está、va a",
      formula: "hace + 名词　·　está + 形容词　·　va a + 动词原形",
      body: "天气热说 Hace calor（不是 Es calor）；天气晴朗说 Está soleado；要下雨说 Va a llover。状态则用 estar：Estoy cansado。ir a + 动词原形表示“将要……”，是日常聊计划、预测最常用的结构之一。",
      examples: [
        { es: "Hace mucho frío en enero.", zh: "一月很冷。" },
        { es: "Está nublado y va a llover.", zh: "天阴了，要下雨了。" },
        { es: "Estoy un poco cansado, pero contento.", zh: "我有点累，但很开心。" }
      ],
      pitfall: "“我很热”不要说 Soy caliente（在西班牙语里有暧昧含义）。说 Tengo calor 或 Hace calor。人的状态用 tener/estar，不用 ser。"
    },
    culture: {
      title: "小聊不是查户口",
      body: "西班牙人很习惯和邻居、店员、陌生人寒暄几句。天气是最安全的开场。回答 ¿Qué tal? 不一定要“很好”，regular 也很自然。寒暄通常不超过一分钟，最后一句 ¡Que tengas un buen día! 就能漂亮收尾。"
    },
    challenge: {
      situation: "Carmen 说：Hace mucho calor hoy。",
      prompt: "你想接一句“是啊，而且明天要下雨”，怎么说？",
      options: [
        { es: "Sí, y mañana va a llover.", zh: "是啊，而且明天要下雨。", ok: true, why: "ir a + 动词原形表示即将发生：va a llover。" },
        { es: "Sí, y mañana es llover.", zh: "是啊，明天是下雨。", ok: false, why: "llover 是动词，不能用 ser + 动词原形。" },
        { es: "Sí, y mañana tengo llover.", zh: "是啊，明天我有下雨。", ok: false, why: "tener 不能这样接动词；要说 va a llover。" }
      ]
    },
    speaking: {
      es: "Hoy hace mucho calor, pero mañana va a llover.",
      zh: "今天很热，但明天要下雨。",
      tip: "hace 的 h 不发音；llover 的 ll 像 y。整句的重心放在 calor 和 llover 上。"
    }
  },
  {
    id: 7,
    number: "07",
    stage: 2,
    title: "市场与超市",
    esTitle: "En el mercado",
    subtitle: "买数量、找商品、结账，一次买齐。",
    level: "A1",
    minutes: 11,
    goals: ["说清重量和数量", "用 ¿tiene...? 询问商品", "表达“不用袋子”"],
    intro: "在市场里，说错数字还能用手比划，但先说清楚“要多少”最省事。这一课把数量词和购物句打包学会。",
    dialogue: [
      { who: "Vendedora", role: "npc", es: "¿Qué desea?", zh: "您要什么？" },
      { who: "Tú", role: "you", es: "Medio kilo de manzanas y una docena de huevos, por favor.", zh: "半公斤苹果和一打鸡蛋，谢谢。" },
      { who: "Vendedora", role: "npc", es: "¿Algo más?", zh: "还要别的吗？" },
      { who: "Tú", role: "you", es: "Sí, ¿tiene leche sin lactosa?", zh: "有，你们有无乳糖牛奶吗？" },
      { who: "Vendedora", role: "npc", es: "Sí, está al fondo, a la derecha.", zh: "有，在最后面，右手边。" },
      { who: "Tú", role: "you", es: "Gracias. ¿Cuánto es todo?", zh: "谢谢。一共多少钱？" },
      { who: "Vendedora", role: "npc", es: "Seis euros con ochenta. ¿Quiere bolsa?", zh: "六欧八十。要袋子吗？" },
      { who: "Tú", role: "you", es: "No, gracias, llevo la mía.", zh: "不用，谢谢，我带了自己的。" }
    ],
    phrases: [
      { es: "Medio kilo de manzanas, por favor.", zh: "请来半公斤苹果。", pron: "梅迪奥 基洛 德 曼萨纳斯" },
      { es: "Una docena de huevos.", zh: "一打鸡蛋。", pron: "乌纳 多塞纳 德 韦沃斯" },
      { es: "¿Tiene leche sin lactosa?", zh: "你们有无乳糖牛奶吗？", pron: "铁内 莱切 辛 拉克托萨" },
      { es: "¿Dónde está...?", zh: "……在哪里？", pron: "东德 埃斯塔" },
      { es: "¿Cuánto es todo?", zh: "一共多少钱？", pron: "宽托 埃斯 托多" },
      { es: "No, gracias, llevo bolsa.", zh: "不用，谢谢，我带了袋子。", pron: "诺 格拉西亚斯 耶沃 博尔萨" }
    ],
    vocab: [
      { es: "manzana", zh: "苹果", pron: "曼萨纳", pos: "名词", example: "Una manzana, por favor.", exampleZh: "请来一个苹果。" },
      { es: "huevo", zh: "鸡蛋", pron: "韦沃", pos: "名词", example: "Una docena de huevos.", exampleZh: "一打鸡蛋。" },
      { es: "leche", zh: "牛奶", pron: "莱切", pos: "名词", example: "Leche sin lactosa.", exampleZh: "无乳糖牛奶。" },
      { es: "pan", zh: "面包", pron: "潘", pos: "名词", example: "Un pan integral.", exampleZh: "一个全麦面包。" },
      { es: "queso", zh: "奶酪", pron: "克索", pos: "名词", example: "Cien gramos de queso.", exampleZh: "一百克奶酪。" },
      { es: "bolsa", zh: "袋子", pron: "博尔萨", pos: "名词", example: "¿Quiere bolsa?", exampleZh: "要袋子吗？" }
    ],
    grammar: {
      title: "数量 + de：un kilo de...",
      formula: "medio kilo / un kilo / cien gramos / una docena + de + 名词",
      body: "说数量时，名词前要用 de：un kilo de naranjas、una docena de huevos、un poco de queso。商店有没有某商品用 tener：¿Tiene leche？；商品在哪里用 estar：La leche está al fondo。别把 hay/tener/estar 混用。",
      examples: [
        { es: "Quiero medio kilo de tomates.", zh: "我要半公斤西红柿。" },
        { es: "¿Tiene pan sin gluten?", zh: "你们有无麸质面包吗？" },
        { es: "La leche está al fondo.", zh: "牛奶在最后面。" }
      ],
      pitfall: "una docena de... 是“一打……”，不是“一打”。不能说 una docena huevos，de 不能少。购物时问“有没有”用 tener，比 hay 更自然。"
    },
    culture: {
      title: "带上自己的袋子",
      body: "西班牙超市塑料袋通常收费，很多人自带布袋。市场里说 ¿Me pone...?（给我称……）很常见，摊主也可能直接问 ¿Algo más？。买水果时，用手指数量配合数字最稳妥。"
    },
    challenge: {
      situation: "摊主问：¿Algo más?",
      prompt: "你只想买这些，怎么回答？",
      options: [
        { es: "No, nada más. ¿Cuánto es?", zh: "没有了。多少钱？", ok: true, why: "nada más 是“没有别的了”，然后自然问价格。" },
        { es: "Sí, soy chino.", zh: "是的，我是中国人。", ok: false, why: "答非所问；对方在问还要不要别的东西。" },
        { es: "No entiendo.", zh: "我不明白。", ok: false, why: "可以用，但如果你听懂了，直接回答更顺畅。" }
      ]
    },
    speaking: {
      es: "Medio kilo de manzanas y una docena de huevos, por favor.",
      zh: "请来半公斤苹果和一打鸡蛋。",
      tip: "数量词和 de 要连在一起读：medio kilo de...、una docena de...。"
    }
  },
  {
    id: 8,
    number: "08",
    stage: 2,
    title: "餐厅吃饭",
    esTitle: "La cuenta, por favor",
    subtitle: "订位、推荐、过敏、结账，完整吃一顿。",
    level: "A1",
    minutes: 12,
    goals: ["说清人数与预订", "请服务员推荐并点套餐", "说明过敏并结账"],
    intro: "在西班牙餐厅，点菜节奏比国内慢，服务员不会一直催你。学会几个关键句，就能从容吃完一顿饭。",
    dialogue: [
      { who: "Camarero", role: "npc", es: "Buenas tardes. ¿Tienen reserva?", zh: "下午好。有预订吗？" },
      { who: "Tú", role: "you", es: "Sí, a nombre de Li, para dos.", zh: "有，李，两位。" },
      { who: "Camarero", role: "npc", es: "Perfecto. ¿Quieren ver el menú?", zh: "好的。你们要看菜单吗？" },
      { who: "Tú", role: "you", es: "Sí. ¿Qué nos recomienda?", zh: "好的。你给我们推荐什么？" },
      { who: "Camarero", role: "npc", es: "El salmón está muy bueno. El menú del día incluye postre.", zh: "三文鱼很不错。今日套餐包含甜点。" },
      { who: "Tú", role: "you", es: "Entonces, un menú del día y una ensalada. Soy alérgico / alérgica a los frutos secos.", zh: "那要一份今日套餐和一份沙拉。我对坚果过敏。" },
      { who: "Camarero", role: "npc", es: "Muy bien, lo tendré en cuenta. ¿Algo para beber?", zh: "好的，我会注意。喝点什么？" },
      { who: "Tú", role: "you", es: "Una botella de agua sin gas, por favor. La cuenta al final.", zh: "一瓶不含气矿泉水，谢谢。最后结账。" }
    ],
    phrases: [
      { es: "Una mesa para dos, por favor.", zh: "请给两人桌。", pron: "乌纳 梅萨 帕拉 多斯" },
      { es: "¿Qué nos recomienda?", zh: "你推荐什么？", pron: "克 诺斯 雷科米恩达" },
      { es: "Quiero el menú del día.", zh: "我要今日套餐。", pron: "基埃罗 埃尔 梅努 德尔 迪亚" },
      { es: "Soy alérgico / alérgica a los frutos secos.", zh: "我对坚果过敏。（男/女）", pron: "索伊 阿莱尔希科 / 阿莱尔希卡 阿 洛斯 弗鲁托斯 塞科斯" },
      { es: "La cuenta, por favor.", zh: "请结账。", pron: "拉 宽塔 波尔 法沃尔" },
      { es: "Está buenísimo.", zh: "太好吃了。", pron: "埃斯塔 布埃尼西莫" }
    ],
    vocab: [
      { es: "reserva", zh: "预订", pron: "雷塞尔瓦", pos: "名词", example: "Tengo una reserva.", exampleZh: "我有预订。" },
      { es: "menú del día", zh: "今日套餐", pron: "梅努 德尔 迪亚", pos: "名词", example: "El menú del día incluye postre.", exampleZh: "今日套餐含甜点。" },
      { es: "primero / segundo", zh: "第一道菜 / 第二道菜", pron: "普里梅罗 / 塞贡多", pos: "名词", example: "De primero, una sopa.", exampleZh: "第一道要汤。" },
      { es: "postre", zh: "甜点", pron: "波斯特雷", pos: "名词", example: "¿Qué hay de postre?", exampleZh: "甜点有什么？" },
      { es: "alergia", zh: "过敏", pron: "阿莱尔希亚", pos: "名词", example: "Tengo alergia al marisco.", exampleZh: "我对海鲜过敏。" },
      { es: "cuenta", zh: "账单", pron: "宽塔", pos: "名词", example: "La cuenta, por favor.", exampleZh: "请结账。" }
    ],
    grammar: {
      title: "为两个人点单 & 用 nos 表示“给我们”",
      formula: "para dos　·　nos recomienda　·　me trae / nos trae",
      body: "para dos 表示“两人份”。服务员对你们说话时用 nos：¿Qué nos recomienda？。请对方拿东西可用 ¿Me trae...?（给我拿……）或 ¿Nos trae...?（给我们拿……）。过敏是严肃信息，说清 alérgico/a a + 食物，不要只说 no me gusta。",
      examples: [
        { es: "Una mesa para dos, por favor.", zh: "请给一张两人桌。" },
        { es: "¿Nos trae la carta?", zh: "能给我们拿菜单吗？" },
        { es: "De postre, prefiero fruta.", zh: "甜点我想要水果。" }
      ],
      pitfall: "“我对坚果过敏”要用 alérgico a，不是 alérgico de。菜单上 frutos secos 是坚果；marisco 是海鲜，别弄混。"
    },
    culture: {
      title: "sobremesa：吃完还不走",
      body: "西班牙人吃完常会继续坐在桌边聊天，这叫 la sobremesa。服务员通常不会主动把账单拍在桌上，你需要说 La cuenta, por favor。午餐的 menú del día 往往含前菜、主菜、甜点或饮料，性价比高。"
    },
    challenge: {
      situation: "服务员问：¿Algo para beber?",
      prompt: "你想要一瓶不含气矿泉水，怎么说？",
      options: [
        { es: "Una botella de agua sin gas, por favor.", zh: "一瓶不含气矿泉水，谢谢。", ok: true, why: "botella 是瓶子，sin gas 是不含气。" },
        { es: "Una botella de agua con gas, por favor.", zh: "一瓶含气矿泉水，谢谢。", ok: false, why: "con gas 是含气，和你要的相反。" },
        { es: "Una cuenta sin gas, por favor.", zh: "一份不含气的账单。", ok: false, why: "cuenta 是账单，不是水。" }
      ]
    },
    speaking: {
      es: "Soy alérgico a los frutos secos. ¿Qué me recomienda?",
      zh: "我对坚果过敏。你推荐什么？",
      tip: "alérgico 的重音在 ler；过敏信息要说得慢、清楚，可以再补一句 ¿Lleva frutos secos?（含坚果吗？）。"
    }
  }
];
