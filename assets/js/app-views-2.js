/* =========================================================
   SOL · 西语日常 — pronunciation, grammar, roleplay, progress,
   route lifecycle, interactions & boot
   ========================================================= */

let pronView = null;
let grammarView = { filter: "all", open: new Set() };
let roleplayView = null;

const ROLEPLAY_SPEAKERS = {
  cafe: "Camarero",
  directions: "Señora",
  plans: "Pablo",
  pharmacy: "Farmacéutico",
  hotel: "Recepción"
};

/* ---------- Pronunciation ---------- */

function randomPairSide() {
  return Math.random() < 0.5 ? "a" : "b";
}

function newPronunciationView() {
  return {
    pairIndex: 0,
    correctSide: randomPairSide(),
    chosen: null,
    score: 0,
    finished: false,
    awarded: false
  };
}

function renderPronunciation() {
  if (!pronView) pronView = newPronunciationView();
  const pronunciation = DATA.pronunciation || {};
  const pairs = pronunciation.minimalPairs || [];
  const pair = pairs[pronView.pairIndex] || null;
  const played = pair ? pair[pronView.correctSide] : null;

  const vowels = (pronunciation.vowels || []).map((vowel) => `
    <div class="vowel-card">
      <div class="vowel-letter">${escapeHtml(vowel.letter)}</div>
      <p>${escapeHtml(vowel.tip)}</p>
      <div class="vowel-examples">
        ${vowel.examples.map((example) => `<button class="mini-audio" data-speak="${escapeHtml(example)}">${icon("volume")} ${escapeHtml(example)}</button>`).join("")}
      </div>
    </div>`).join("");

  const sounds = (pronunciation.tricky || []).map((sound) => `
    <article class="sound-card">
      <div class="sound-top">
        <span class="sound-name">${escapeHtml(sound.name)}</span>
        <span class="sound-ipa">${escapeHtml(sound.ipa)}</span>
      </div>
      <p>${escapeHtml(sound.tip)}</p>
      <div class="sound-examples">
        ${sound.examples.map((example) => `<button class="mini-audio" data-speak="${escapeHtml(example)}">${icon("volume")} ${escapeHtml(example)}</button>`).join("")}
      </div>
    </article>`).join("");

  const stressExamples = [
    { first: "ca", rest: "sa", es: "casa", zh: "房子 · 倒数第二音节" },
    { first: "ha", rest: "blar", es: "hablar", zh: "说话 · 最后音节" },
    { first: "es", rest: "ta", tail: "ción", es: "estación", zh: "车站 · 重音符号" }
  ].map((item) => {
    const marked = item.tail
      ? `${escapeHtml(item.first)}${escapeHtml(item.rest)}<em>${escapeHtml(item.tail)}</em>`
      : `${escapeHtml(item.first)}<em>${escapeHtml(item.rest)}</em>`;
    return `
      <div class="stress-example">
        <div>
          <div class="stress-example-es">${marked}</div>
          <div class="stress-example-zh">${escapeHtml(item.zh)}</div>
        </div>
        <button class="speak-btn" data-speak="${escapeHtml(item.es)}" aria-label="朗读 ${escapeHtml(item.es)}">${icon("volume")}</button>
      </div>`;
  }).join("");

  let listenBody = "";
  if (pronView.finished) {
    const perfect = pronView.score === pairs.length;
    listenBody = `
      <div class="listen-head">
        <div><span class="eyebrow">OYE Y ELIGE · 听音辨词</span><h2>${perfect ? "耳朵很准。" : "听出来了，就有机会说对。"}</h2><p>你完成了本组 ${pairs.length} 组最小对立对。辅音和重音不是靠“看懂”，而是靠反复听。</p></div>
        <span class="listen-score">${pronView.score} / ${pairs.length}</span>
      </div>
      <div class="listen-body" style="grid-template-columns:1fr;">
        <div style="text-align:center;padding:10px 0 6px;">
          <div class="listen-score" style="font-size:42px;">${pronView.score}<span style="font-size:13px;color:rgba(255,250,240,.45);"> / ${pairs.length}</span></div>
          <p style="margin-top:8px;color:rgba(255,250,240,.58);font-size:10px;">${perfect ? "全部听对。下一轮可以试着自己先读，再听系统发音对比。" : "不用急着满分。把 perro、pero 这组多听几遍，差异会越来越明显。"}</p>
          <div class="listen-footer" style="justify-content:center;margin-top:16px;">
            <button class="btn btn-secondary btn-sm" data-action="pron-restart" style="border-color:rgba(255,255,255,.2);background:rgba(255,255,255,.08);color:#fbf5e8;">再听一轮 ${icon("rotate")}</button>
          </div>
        </div>
      </div>`;
  } else if (pair) {
    const chosen = pronView.chosen;
    const isCorrect = chosen === pronView.correctSide;
    const feedback = chosen ? `你听到的是「${played.es}」（${played.zh}）。${pair.tip}` : "先点播放，再选你听到的那个。连续点两次可以重听。";
    const optionA = `
      <button class="pair-btn${chosen ? (pronView.correctSide === "a" ? " is-correct" : chosen === "a" ? " is-wrong" : "") : ""}" data-action="pron-pair" data-side="a" ${chosen ? "disabled" : ""}>
        <strong>${escapeHtml(pair.a)}</strong><span>${escapeHtml(pair.aZh)}</span>
      </button>`;
    const optionB = `
      <button class="pair-btn${chosen ? (pronView.correctSide === "b" ? " is-correct" : chosen === "b" ? " is-wrong" : "") : ""}" data-action="pron-pair" data-side="b" ${chosen ? "disabled" : ""}>
        <strong>${escapeHtml(pair.b)}</strong><span>${escapeHtml(pair.bZh)}</span>
      </button>`;
    listenBody = `
      <div class="listen-head">
        <div><span class="eyebrow">OYE Y ELIGE · 听音辨词</span><h2>你听到的是哪一个？</h2><p>答案不会提前出现。先让耳朵做决定，再点选项。</p></div>
        <span class="listen-score">${pronView.score} / ${pairs.length}</span>
      </div>
      <div class="listen-body">
        <div class="listen-play">
          <button class="listen-play-btn" data-speak="${escapeHtml(played.es)}" aria-label="播放发音">${icon("play")}</button>
          <span>点击播放 · 可重复听</span>
        </div>
        <div>
          <div class="listen-question">听到的词是下面哪一个？</div>
          <div class="pair-options">${optionA}${optionB}</div>
          <div class="listen-feedback" aria-live="polite">${escapeHtml(feedback)}</div>
          <div class="listen-footer">
            <div class="listen-progress" aria-label="进度">
              ${pairs.map((item, index) => `<span class="listen-dot${index < pronView.pairIndex || chosen ? (index === pronView.pairIndex || index < pronView.pairIndex ? " is-done" : "") : ""}${index === pronView.pairIndex ? " is-active" : ""}"></span>`).join("")}
            </div>
            ${chosen && pronView.pairIndex < pairs.length - 1 ? `<button class="listen-next" data-action="pron-next">下一组 ${icon("arrow-right")}</button>` : `<span style="color:rgba(255,250,240,.35);font-size:8px;">第 ${pronView.pairIndex + 1} / ${pairs.length} 组</span>`}
          </div>
        </div>
      </div>`;
  }

  const shadowCards = (pronunciation.shadowing || []).map((item, index) => speakingCard(item.es, item.zh, item.focus, `shadow-${index}`, "shadow")).join("");

  return `
    <header class="page-head">
      <div class="page-head-copy">
        <span class="eyebrow">PRONUNCIACIÓN · 发音实验室</span>
        <h1>发音实验室 <span class="head-es">Suena bien</span></h1>
        <p>西语拼读很规律：五个元音始终清楚，看到字母基本就能读。先修好最容易让中文母语者卡住的几个音。</p>
      </div>
      <div class="page-head-actions">
        <span class="page-head-stat"><strong>${(pronunciation.shadowing || []).length}</strong><span>句跟读素材</span></span>
        <a class="btn btn-secondary btn-sm" href="#/leccion/1">从第 1 课开始 ${icon("arrow-right")}</a>
      </div>
    </header>

    <section class="pron-intro">
      <div>
        <span class="eyebrow">5 VOCALES · 先练元音</span>
        <h2>西语的元音，短、清楚、不滑动。</h2>
        <p>${escapeHtml(pronunciation.intro || "")} 中文母语者最容易把 o 读成“ou”、把 e 读成“ei”。记住：每个元音只有一个稳定口型。</p>
      </div>
      <div class="pron-intro-note">
        <div class="tip-strip">
          ${icon("headphones")}
          <span><strong>练习顺序：</strong>听 → 看口型 → 慢读 → 正常速度。不要一开始就追求快。</span>
        </div>
      </div>
    </section>

    <div class="vowel-grid">${vowels}</div>

    <section class="pron-section">
      <div class="pron-section-head">
        <div><span class="eyebrow">SONIDOS DIFÍCILES · 难音诊所</span><h2>中文母语者最容易混的 10 个点</h2></div>
        <p>点例子直接听。建议一次只修一个音。</p>
      </div>
      <div class="sound-grid">${sounds}</div>
    </section>

    <section class="pron-section">
      <div class="stress-panel">
        <div>
          <span class="eyebrow">EL ACENTO · 重音</span>
          <h3 style="margin-top:5px;">重音放错，词就变了。</h3>
          <ol class="stress-list">
            ${(pronunciation.stress || []).map((rule) => `<li>${escapeHtml(rule)}</li>`).join("")}
          </ol>
        </div>
        <div class="stress-examples">${stressExamples}</div>
      </div>
    </section>

    <section class="pron-section">
      <div class="listen-panel">${listenBody}</div>
    </section>

    <section class="pron-section">
      <div class="pron-section-head">
        <div><span class="eyebrow">SHADOWING · 影子跟读</span><h2>跟着读，不要等“准备好了”</h2></div>
        <p>先听一遍，再和声音重叠着读。允许自己读得不准。</p>
      </div>
      <div class="shadow-grid">${shadowCards}</div>
      <div class="tip-strip" style="margin-top:12px;">
        ${icon("mic")}
        <span><strong>三步法：</strong>① 听完整句，不跟；② 分两段，每段跟 3 遍；③ 整句跟读并录音。录音时注意重音和停顿，不用追求“像西班牙人一样”，先追求清楚。</span>
      </div>
    </section>`;
}

/* ---------- Grammar ---------- */

function grammarTable(table) {
  if (!table) return "";
  return `
    <div class="grammar-table-wrap">
      <table class="grammar-table">
        <thead><tr>${table.headers.map((header) => `<th>${escapeHtml(header)}</th>`).join("")}</tr></thead>
        <tbody>${table.rows.map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`).join("")}</tbody>
      </table>
    </div>`;
}

function renderGrammar() {
  if (!grammarView) grammarView = { filter: "all", open: new Set() };
  if (!(grammarView.open instanceof Set)) grammarView.open = new Set();
  const levels = ["all", "A0", "A1", "A1+", "A2"];
  const items = DATA.grammar.filter((item) => grammarView.filter === "all" || item.level === grammarView.filter);
  const readCount = state.grammarRead.filter((id) => DATA.grammar.some((item) => item.id === id)).length;

  const filterButtons = levels.map((level) => `
    <button class="filter-chip${grammarView.filter === level ? " is-active" : ""}" data-action="grammar-filter" data-level="${level}">
      ${level === "all" ? "全部" : level}
    </button>`).join("");

  const itemCards = items.map((item, index) => {
    const isOpen = grammarView.open.has(item.id);
    const isRead = state.grammarRead.includes(item.id);
    const table = grammarTable(item.table);
    const examples = item.examples.map((example) => `
      <div class="grammar-example-row">
        <span class="es">${escapeHtml(example.es)}</span>
        <span class="zh">${escapeHtml(example.zh)}</span>
      </div>`).join("");
    return `
      <article class="grammar-item${isOpen ? " is-open" : ""}" data-grammar-id="${item.id}">
        <button class="grammar-item-head" data-action="grammar-toggle" data-id="${item.id}" aria-expanded="${isOpen}" aria-controls="grammar-body-${item.id}">
          <span class="grammar-index">${pad2(index + 1)}</span>
          <span class="grammar-head-copy">
            <strong>${escapeHtml(item.title)} <span class="chip" style="margin-left:4px;">${escapeHtml(item.level)}</span></strong>
            <span>${escapeHtml(item.es)}</span>
          </span>
          <span class="grammar-read">${isRead ? `${icon("check")} 已读` : ""}</span>
          ${icon("chevron", "grammar-chevron")}
        </button>
        <div class="grammar-body" id="grammar-body-${item.id}" ${isOpen ? "" : "hidden"}>
          <p>${escapeHtml(item.intro)}</p>
          <span class="formula">${escapeHtml(item.formula)}</span>
          ${table}
          <div class="grammar-example-list">${examples}</div>
          <div class="grammar-tip-line"><strong>提示</strong><span>${escapeHtml(item.tip)}</span></div>
        </div>
      </article>`;
  }).join("");

  return `
    <header class="page-head">
      <div class="page-head-copy">
        <span class="eyebrow">GRAMÁTICA · 语法锦囊</span>
        <h1>语法锦囊 <span class="head-es">Lo esencial</span></h1>
        <p>只收日常交流真正会用到的 12 个语法点。每个点都配“能说出口”的例句，先会用，再补术语。</p>
      </div>
      <div class="page-head-actions">
        <span class="page-head-stat"><strong id="grammar-read-count">${readCount}</strong><span>/ ${DATA.grammar.length} 已读</span></span>
        <a class="btn btn-secondary btn-sm" href="#/practica">去句子里练 ${icon("chat")}</a>
      </div>
    </header>

    <div class="grammar-toolbar">
      <div class="filter-row">${filterButtons}</div>
      <span class="grammar-progress-label" id="grammar-progress-label">已读 ${readCount} / ${DATA.grammar.length} · 点开一张卡会自动标记</span>
    </div>

    <div class="grammar-list">${itemCards || `<div class="empty-state"><h3>这个级别还没有语法卡</h3></div>`}</div>`;
}

function toggleGrammarItem(id) {
  const item = DATA.grammar.find((entry) => entry.id === id);
  const article = document.querySelector(`.grammar-item[data-grammar-id="${id}"]`);
  if (!item || !article) return;
  const head = article.querySelector(".grammar-item-head");
  const body = article.querySelector(".grammar-body");
  const willOpen = body.hidden;
  body.hidden = !willOpen;
  head.setAttribute("aria-expanded", String(willOpen));
  article.classList.toggle("is-open", willOpen);
  if (willOpen) grammarView.open.add(id);
  else grammarView.open.delete(id);

  if (willOpen && !state.grammarRead.includes(id)) {
    state.grammarRead.push(id);
    addStudy({ xp: 5, minutes: 2, grammar: 1 });
    const read = article.querySelector(".grammar-read");
    if (read) read.innerHTML = `${icon("check")} 已读`;
    const label = $("#grammar-progress-label");
    if (label) label.textContent = `已读 ${state.grammarRead.length} / ${DATA.grammar.length} · 点开一张卡会自动标记`;
    const headerCount = $("#grammar-read-count");
    if (headerCount) headerCount.textContent = String(state.grammarRead.length);
    showToast("语法卡已读，+5 XP。下一张不用急着看。", "success");
  }
}

/* ---------- Roleplay ---------- */

function firstRoleplayId() {
  return DATA.roleplays[0]?.id || null;
}

function newRoleplayView(id = firstRoleplayId()) {
  return {
    id: id || firstRoleplayId(),
    step: 0,
    history: [],
    chosen: null,
    score: 0,
    finished: false,
    xpAwarded: 0
  };
}

function roleplayById(id) {
  return DATA.roleplays.find((scenario) => scenario.id === id) || DATA.roleplays[0];
}

function roleplayStars(best) {
  return [0, 1, 2, 3].map((index) => `<span class="icon ${index < best ? "filled" : ""}" style="display:inline-grid;">${index < best ? icon("star", "filled") : icon("star")}</span>`).join("");
}

function finishRoleplay() {
  if (!roleplayView || roleplayView.finished) return;
  const scenario = roleplayById(roleplayView.id);
  if (!scenario) return;
  const existing = state.roleplays[scenario.id] || { best: 0, completions: 0 };
  const firstTime = Number(existing.completions || 0) === 0;
  state.roleplays[scenario.id] = {
    best: Math.max(Number(existing.best || 0), roleplayView.score),
    completions: Number(existing.completions || 0) + 1
  };
  const awarded = firstTime ? 20 + roleplayView.score * 2 : 0;
  roleplayView.finished = true;
  roleplayView.xpAwarded = awarded;
  saveState();
  if (firstTime) addStudy({ xp: awarded, minutes: 4, roleplay: 1 });
  else updateChrome();
  renderView({ preserveScroll: false });
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (firstTime) celebrate();
}

function renderPractice() {
  if (!roleplayView) roleplayView = newRoleplayView();
  const scenario = roleplayById(roleplayView.id);
  if (!scenario) return `<div class="empty-state"><h3>还没有情景练习</h3></div>`;
  const totalSteps = scenario.steps.length;
  const speaker = ROLEPLAY_SPEAKERS[scenario.id] || "Interlocutor";
  const best = Number(state.roleplays[scenario.id]?.best || 0);

  const scenarioItems = DATA.roleplays.map((item) => {
    const itemBest = Number(state.roleplays[item.id]?.best || 0);
    return `
      <button class="scenario-item${item.id === scenario.id ? " is-active" : ""}" data-action="roleplay-select" data-id="${item.id}">
        <span class="scenario-icon">${icon(item.icon)}</span>
        <span class="scenario-copy">
          <strong>${escapeHtml(item.title)}</strong>
          <span>${escapeHtml(item.es)} · ${escapeHtml(item.level)}</span>
          <span class="scenario-stars" aria-label="最佳 ${itemBest} / 4">${[0, 1, 2, 3].map((index) => icon("star", index < itemBest ? "filled" : "")).join("")}</span>
        </span>
      </button>`;
  }).join("");

  let panel = "";
  if (roleplayView.finished) {
    const total = scenario.steps.length;
    const perfect = roleplayView.score === total;
    panel = `
      <div class="rp-complete">
        <div class="complete-badge">${icon(perfect ? "trophy" : "check")}</div>
        <h2>${perfect ? "¡Perfecto! 全对。" : "对话完成。"}</h2>
        <p>${escapeHtml(scenario.success)}</p>
        <div class="rp-score">${roleplayView.score}<span> / ${total} 个回答正确</span></div>
        ${roleplayView.xpAwarded ? `<span class="chip chip-saffron">${icon("sparkles")} 首次完成 +${roleplayView.xpAwarded} XP</span>` : `<span class="chip">最佳成绩已记录</span>`}
        <div class="complete-actions">
          <button class="btn btn-primary" data-action="roleplay-restart">再练一次 ${icon("rotate")}</button>
          <button class="btn btn-secondary" data-action="roleplay-next">换一个场景 ${icon("arrow-right")}</button>
          <a class="btn btn-ghost" href="#/mapa">回到学习地图</a>
        </div>
      </div>`;
  } else {
    const step = scenario.steps[roleplayView.step];
    const chosenOption = roleplayView.chosen != null ? step.options[roleplayView.chosen] : null;
    const historyHtml = roleplayView.history.map((exchange, exchangeIndex) => {
      const npcAudio = roleplayNpcAudioPath(scenario.id, exchangeIndex);
      const choiceAudio = roleplayOptionAudioPath(scenario.id, exchange.choice.es);
      return `
        <div class="chat-line">
          <span class="chat-avatar">${escapeHtml(speaker.charAt(0))}</span>
          <div class="chat-bubble">
            <div class="chat-top"><strong>${escapeHtml(speaker)}</strong>${audioButton(npcAudio, exchange.npc)}</div>
            <div class="chat-es">${escapeHtml(exchange.npc)}</div>
            <div class="chat-zh">${escapeHtml(exchange.npcZh)}</div>
          </div>
        </div>
        <div class="chat-line user">
          <span class="chat-avatar">T</span>
          <div class="chat-bubble">
            <div class="chat-top"><strong>Tú</strong>${audioButton(choiceAudio, exchange.choice.es)}</div>
            <div class="chat-es">${escapeHtml(exchange.choice.es)}</div>
            <div class="chat-zh">${escapeHtml(exchange.choice.zh)}</div>
          </div>
        </div>`;
    }).join("");

    const currentNpc = `
      <div class="chat-line">
        <span class="chat-avatar">${escapeHtml(speaker.charAt(0))}</span>
        <div class="chat-bubble">
          <div class="chat-top"><strong>${escapeHtml(speaker)}</strong>${audioButton(roleplayNpcAudioPath(scenario.id, roleplayView.step), step.npc)}</div>
          <div class="chat-es">${escapeHtml(step.npc)}</div>
          <div class="chat-zh">${escapeHtml(step.npcZh)}</div>
        </div>
      </div>`;

    const chosenUser = chosenOption ? `
      <div class="chat-line user">
        <span class="chat-avatar">T</span>
        <div class="chat-bubble">
          <div class="chat-top"><strong>Tú</strong>${audioButton(roleplayOptionAudioPath(scenario.id, chosenOption.es), chosenOption.es)}</div>
          <div class="chat-es">${escapeHtml(chosenOption.es)}</div>
          <div class="chat-zh">${escapeHtml(chosenOption.zh)}</div>
        </div>
      </div>` : "";

    const optionsHtml = roleplayView.chosen == null ? `
      <div class="roleplay-options">
        <div class="rp-options-label">${icon("chat")} 选一句回应 · 选择后自动播放你的西语回答</div>
        <div class="rp-option-list">
          ${step.options.map((option, index) => `
            <button class="rp-option" data-action="roleplay-option" data-index="${index}">
              <span class="rp-option-prefix">${String.fromCharCode(65 + index)}</span>
              <span class="rp-option-copy"><strong>${escapeHtml(option.es)}</strong><span>${escapeHtml(option.zh)}</span></span>
            </button>`).join("")}
        </div>
        <div class="tip-strip" style="margin-top:10px;padding:9px 11px;background:#f3ecdd;border-color:#e5d9c3;color:#6e654f;">
          ${icon("sparkles")}<span>${escapeHtml(step.hint)}</span>
        </div>
      </div>` : "";

    const feedbackHtml = chosenOption ? `
      <div class="rp-feedback ${chosenOption.ok ? "is-correct" : "is-wrong"}">
        <strong>${chosenOption.ok ? "这条很自然。" : "这条不太合适。"}</strong> ${escapeHtml(chosenOption.why)}
      </div>` : "";

    panel = `
      <div class="chat-window">
        ${historyHtml}
        ${currentNpc}
        ${chosenUser}
      </div>
      ${optionsHtml}
      ${feedbackHtml}
      <div class="roleplay-footer">
        <span class="roleplay-footer-note">${roleplayView.step === totalSteps - 1 ? "最后一步" : `第 ${roleplayView.step + 1} / ${totalSteps} 步`} · 选错也会继续，先敢说</span>
        ${chosenOption
          ? `<button class="btn btn-primary btn-sm" data-action="roleplay-continue">${roleplayView.step === totalSteps - 1 ? "完成实战" : "继续对话"} ${icon("arrow-right")}</button>`
          : `<button class="btn btn-primary btn-sm" disabled>先选一句 ${icon("arrow-right")}</button>`}
      </div>`;
  }

  return `
    <header class="page-head">
      <div class="page-head-copy">
        <span class="eyebrow">CONVERSACIÓN · 情景实战</span>
        <h1>情景实战 <span class="head-es">Habla de verdad</span></h1>
        <p>五种最常见的日常场景，每一步都要你选一句回应。选择后会自动播放西语语音；点 NPC 气泡旁的喇叭可以先听题。</p>
      </div>
      <div class="page-head-actions">
        <span class="page-head-stat"><strong>${roleplayCompletedCount()}</strong><span>/ ${DATA.roleplays.length} 场景完成</span></span>
      </div>
    </header>

    <div class="practice-layout">
      <aside class="scenario-list" aria-label="情景列表">
        <div class="scenario-list-head"><h2>选择场景</h2><p>先易后难，也可以直接挑战。</p></div>
        ${scenarioItems}
      </aside>
      <section class="roleplay-panel">
        <div class="roleplay-head">
          <span class="roleplay-head-icon">${icon(scenario.icon)}</span>
          <div class="roleplay-head-copy">
            <h2>${escapeHtml(scenario.title)}</h2>
            <p>${escapeHtml(scenario.setting)}</p>
            <span class="roleplay-audio-label">${icon("audio")} es-ES 西班牙语音 · 点气泡喇叭听题</span>
          </div>
          <div class="roleplay-head-progress">
            <span>${roleplayView.finished ? "已完成" : `${roleplayView.step + 1} / ${totalSteps}`}</span>
            <div class="step-dots">
              ${scenario.steps.map((item, index) => `<span class="step-dot${roleplayView.finished || index < roleplayView.step ? " is-done" : ""}${!roleplayView.finished && index === roleplayView.step ? " is-active" : ""}"></span>`).join("")}
            </div>
          </div>
        </div>
        ${panel}
      </section>
    </div>

    <section class="section">
      <div class="section-head">
        <div><span class="eyebrow">TIPS · 实战提示</span><h2>说错，比不说好。</h2></div>
      </div>
      <div class="card-how">
        <div class="how-card"><div class="how-no">01</div><h3>先选意思，再抠语法</h3><p>真实对话里，对方先理解你的意图。用短句、关键词，比憋一个完美长句更有效。</p></div>
        <div class="how-card"><div class="how-no">02</div><h3>记住“为什么”</h3><p>每次选错都看解释。不是记住正确选项的位置，而是记住那句话为什么更自然。</p></div>
        <div class="how-card"><div class="how-no">03</div><h3>换角色再练</h3><p>完成一次后重新进入，尝试不看中文完成。也可以把 NPC 的话读出来，练听力。</p></div>
      </div>
    </section>`;
}

/* ---------- Progress ---------- */

function renderProgress() {
  const level = getLevel();
  const today = todayRecord();
  const streak = displayStreak();
  const completed = completedCount();
  const coverage = getCefrCoverage();

  const week = [];
  for (let offset = 6; offset >= 0; offset -= 1) {
    const date = daysAgo(offset);
    const key = localDateKey(date);
    const record = state.activity[key] || freshDay();
    const weekday = new Intl.DateTimeFormat("zh-CN", { weekday: "short" }).format(date).replace("周", "");
    week.push({
      key,
      label: offset === 0 ? "今天" : weekday,
      minutes: Math.round(Number(record.minutes || 0)),
      isToday: offset === 0
    });
  }
  const weekTotal = week.reduce((sum, day) => sum + day.minutes, 0);
  const activeDays = week.filter((day) => day.minutes > 0).length;
  const maxMinutes = Math.max(20, ...week.map((day) => day.minutes));

  const chart = week.map((day) => {
    const height = day.minutes > 0 ? Math.max(8, Math.round((day.minutes / maxMinutes) * 100)) : 4;
    return `
      <div class="chart-col" title="${escapeHtml(day.key)} · ${day.minutes} 分钟">
        <div class="chart-bar-wrap">
          <div class="chart-bar${day.minutes ? "" : " empty"}" style="height:${height}%">
            ${day.minutes ? `<span class="chart-bar-value">${day.minutes}</span>` : ""}
          </div>
        </div>
        <span class="chart-label${day.isToday ? " today" : ""}">${escapeHtml(day.label)}</span>
      </div>`;
  }).join("");

  const vocabPct = Math.round((masteredCount() / Math.max(1, DECK.length)) * 100);
  const listeningPct = Math.round((completed / Math.max(1, DATA.lessons.length)) * 100);
  const speakingPct = Math.round((Object.keys(state.spoken).length / Math.max(1, 10)) * 100);
  const grammarPct = Math.round((state.grammarRead.length / Math.max(1, DATA.grammar.length)) * 100);
  const skills = [
    { label: "词汇", value: Math.min(100, vocabPct), note: `${masteredCount()} 词掌握` },
    { label: "听力", value: Math.min(100, listeningPct), note: `${completed} 课完成` },
    { label: "口语", value: Math.min(100, speakingPct), note: `${Object.keys(state.spoken).length} 句开口` },
    { label: "语法", value: Math.min(100, grammarPct), note: `${state.grammarRead.length} 卡已读` }
  ];

  const achievementCards = DATA.achievements.map((achievement) => {
    let value = 0;
    if (achievement.type === "lessons") value = completed;
    if (achievement.type === "streak") value = Math.max(streak, state.streak);
    if (achievement.type === "mastered") value = masteredCount();
    if (achievement.type === "speaking") value = Object.keys(state.spoken).length;
    if (achievement.type === "roleplay") value = roleplayCompletedCount();
    const unlocked = value >= achievement.target;
    return `
      <div class="achievement${unlocked ? " is-unlocked" : ""}">
        <span class="achievement-icon">${icon(achievement.icon)}</span>
        <span class="achievement-copy">
          <strong>${escapeHtml(achievement.title)}</strong>
          <span>${escapeHtml(achievement.desc)}</span>
          <span class="achievement-progress">${unlocked ? "已解锁" : `${Math.min(value, achievement.target)} / ${achievement.target}`}</span>
        </span>
      </div>`;
  }).join("");

  const resume = getResumeInfo();
  const next = resume.lesson;
  const due = dueCards("all").length;
  let nextTitle = "先把第一步走稳";
  let nextDesc = "你还没有完成第 1 课。先听一段真实对话，再把三句核心句说出口。";
  let nextHref = "#/leccion/1";
  let nextLabel = "开始第 1 课";
  if (completed > 0 && due > 0) {
    nextTitle = "先清掉到期词卡";
    nextDesc = `有 ${due} 张卡已经到复习时间。花 5 分钟回忆一遍，再继续新课，记忆会更牢。`;
    nextHref = "#/tarjetas";
    nextLabel = "去复习词卡";
  } else if (resume.inProgress) {
    nextTitle = "把上次的进度走完";
    nextDesc = `你停在第 ${next.id} 课的第 ${resume.step + 1} 步（${LESSON_STEP_NAMES[resume.step]}）。课程已保存，直接接着来，不用重看前面的内容。`;
    nextHref = `#/leccion/${next.id}`;
    nextLabel = `从第 ${resume.step + 1} 步继续`;
  } else if (completed > 0 && !Object.keys(state.spoken).length) {
    nextTitle = "让嘴巴参与一次";
    nextDesc = "你已经看过一些句子，但还没有做过跟读评分。开口说一句，比再看十个词更有用。";
    nextHref = "#/pronunciacion";
    nextLabel = "去发音实验室";
  } else if (completed > 0) {
    nextTitle = `下一站：${next.title}`;
    nextDesc = `已走到 ${coverage}，继续按每周 2 个场景的节奏推进。第 ${next.id} 课会带你进入一个新的生活场景。`;
    nextHref = `#/leccion/${next.id}`;
    nextLabel = allDoneLabel(completed);
  }

  const resources = DATA.resources.map((resource) => `
    <a class="resource-card" href="${escapeHtml(resource.url)}" target="_blank" rel="noopener noreferrer">
      <div class="resource-top"><span class="resource-name">${escapeHtml(resource.name)}</span>${icon("external")}</div>
      <span class="resource-tag">${escapeHtml(resource.tag)}</span>
      <p>${escapeHtml(resource.desc)}</p>
      <span class="resource-free">${escapeHtml(resource.free)}</span>
    </a>`).join("");

  return `
    <header class="page-head">
      <div class="page-head-copy">
        <span class="eyebrow">MI PROGRESO · 我的进度</span>
        <h1>你的进步，不只靠感觉。 <span class="head-es">Paso a paso</span></h1>
        <p>所有数据只保存在这台设备的浏览器里。没有排行榜，也不需要打卡给别人看，你只需要看见自己一直在往前。</p>
      </div>
      <div class="page-head-actions">
        <span class="page-head-stat"><strong>${streak}</strong><span>天连续学习</span></span>
        <button class="btn btn-secondary btn-sm" data-action="open-settings">${icon("settings")} 设置</button>
        <a class="btn btn-primary btn-sm" href="#/leccion/${next.id}">今天继续 ${icon("arrow-right")}</a>
      </div>
    </header>

    <div class="progress-top">
      <section class="level-card">
        <div class="level-card-top">
          <span class="eyebrow">TU NIVEL · SOL 学习等级</span>
          <span class="level-badge">CEFR ${coverage}</span>
        </div>
        <div>
          <h2>${escapeHtml(level.es)}<span>${escapeHtml(level.zh)} · Nivel ${pad2(level.number)}</span></h2>
          <div class="level-progress">
            <div class="progress"><span style="width:${level.progress}%"></span></div>
            <div class="level-progress-meta">
              <span><strong>${state.xp}</strong> XP</span>
              <span>${level.next ? `距下一级还需 ${Math.max(0, level.next.min - state.xp)} XP` : "已达到最高等级"}</span>
            </div>
          </div>
        </div>
      </section>
      <div class="progress-stat-grid">
        <div class="stat-tile">
          <div class="stat-tile-top"><span class="stat-tile-icon">${icon("flame")}</span><span class="chip">连续</span></div>
          <strong>${streak}</strong><span>天连续学习</span>
        </div>
        <div class="stat-tile">
          <div class="stat-tile-top"><span class="stat-tile-icon">${icon("map")}</span><span class="chip">路线</span></div>
          <strong>${completed}/${DATA.lessons.length}</strong><span>情景课完成</span>
        </div>
        <div class="stat-tile">
          <div class="stat-tile-top"><span class="stat-tile-icon">${icon("cards")}</span><span class="chip">词汇</span></div>
          <strong>${masteredCount()}</strong><span>张单词卡掌握</span>
        </div>
        <div class="stat-tile">
          <div class="stat-tile-top"><span class="stat-tile-icon">${icon("mic")}</span><span class="chip">开口</span></div>
          <strong>${Object.keys(state.spoken).length}</strong><span>句跟读练习</span>
        </div>
      </div>
    </div>

    <div class="progress-grid">
      <section class="progress-panel">
        <div class="progress-panel-head">
          <div><span class="eyebrow">ESTA SEMANA · 本周</span><h2>最近 7 天的节奏</h2></div>
          <div class="activity-total"><strong>${weekTotal}</strong> 分钟 · ${activeDays}/7 天</div>
        </div>
        <div class="activity-chart">${chart}</div>
        <div class="tip-strip" style="margin-top:12px;padding:9px 11px;">
          ${icon("flame")}
          <span>${weekTotal ? `本周已学习 ${weekTotal} 分钟。保持每天 10 分钟，比一次学两小时更容易形成长期记忆。` : "还没有本周记录。从今天的第一个小任务开始，图表就会长出来。"}</span>
        </div>
      </section>
      <section class="progress-panel">
        <div class="progress-panel-head">
          <div><span class="eyebrow">HABILIDADES · 四项能力</span><h2>哪里已经稳了？</h2></div>
        </div>
        <div class="skills-list">
          ${skills.map((skill) => `
            <div class="skill-row">
              <div class="skill-label"><span>${skill.label} · ${skill.note}</span><strong>${skill.value}%</strong></div>
              <div class="progress"><span style="width:${skill.value}%"></span></div>
            </div>`).join("")}
        </div>
        <div class="tip-strip" style="margin-top:14px;padding:9px 11px;">
          ${icon("target")}
          <span>这些百分比是学习行为指标，不是官方语言等级。真实交流能力还需要真人对话来检验。</span>
        </div>
      </section>
    </div>

    <div class="progress-grid">
      <section class="progress-panel">
        <div class="progress-panel-head">
          <div><span class="eyebrow">LOGROS · 成就</span><h2>一些值得记住的小节点</h2></div>
          <span class="chip chip-saffron">${DATA.achievements.filter((achievement) => {
            let value = 0;
            if (achievement.type === "lessons") value = completed;
            if (achievement.type === "streak") value = Math.max(streak, state.streak);
            if (achievement.type === "mastered") value = masteredCount();
            if (achievement.type === "speaking") value = Object.keys(state.spoken).length;
            if (achievement.type === "roleplay") value = roleplayCompletedCount();
            return value >= achievement.target;
          }).length}/${DATA.achievements.length} 已解锁</span>
        </div>
        <div class="achievements-grid">${achievementCards}</div>
      </section>
      <aside class="next-card">
        <div>
          <span class="eyebrow">SIGUIENTE PASO · 下一步</span>
          <h2>${escapeHtml(nextTitle)}</h2>
          <p>${escapeHtml(nextDesc)}</p>
          <div class="next-steps">
            <div class="next-step"><span>01</span><span>先完成 10 分钟的小任务</span></div>
            <div class="next-step"><span>02</span><span>把句子读出声，而不是默看</span></div>
            <div class="next-step"><span>03</span><span>明天回来，先复习再学新的</span></div>
          </div>
        </div>
        <a class="btn btn-primary btn-sm" href="${nextHref}">${escapeHtml(nextLabel)} ${icon("arrow-right")}</a>
      </aside>
    </div>

    <section class="progress-panel" style="margin-top:14px;" id="resources">
      <div class="progress-panel-head">
        <div><span class="eyebrow">RECURSOS GRATIS · 免费加餐</span><h2>把耳朵和嘴巴带出这个网站</h2><p style="margin-top:3px;">这些是编辑挑选的免费外部资源，不是广告。链接会在新标签页打开。</p></div>
      </div>
      <div class="resources-grid">${resources}</div>
    </section>`;
}

function allDoneLabel(completed) {
  return completed >= DATA.lessons.length ? "自由复习" : "继续下一课";
}

/* ---------- Route lifecycle ---------- */

function onEnterRoute(route) {
  closeModal();
  closeSettings();
  closeSidebar();
  if (route.name === "leccion") {
    const lesson = getLesson(route.param);
    lessonView = newLessonView(lesson ? lesson.id : 1);
  }
  if (route.name === "tarjetas") {
    cardsView.session = null;
  }
  if (route.name === "frases") {
    phraseView = { category: "all", query: "", favoritesOnly: route.param === "favoritos" };
  }
  if (route.name === "pronunciacion") {
    pronView = newPronunciationView();
  }
  if (route.name === "gramatica") {
    grammarView = { filter: "all", open: new Set() };
  }
  if (route.name === "practica") {
    roleplayView = newRoleplayView();
  }
}

/* ---------- Speech recognition ---------- */

let activeRecognition = null;

function wordSimilarity(a, b) {
  if (a === b) return true;
  if (Math.abs(a.length - b.length) > 1 || a.length < 4) return false;
  let edits = 0;
  let i = 0;
  let j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) { i += 1; j += 1; continue; }
    edits += 1;
    if (edits > 1) return false;
    if (a.length > b.length) i += 1;
    else if (b.length > a.length) j += 1;
    else { i += 1; j += 1; }
  }
  edits += (a.length - i) + (b.length - j);
  return edits <= 1;
}

function scoreSpeech(target, transcript) {
  const targetWords = normalizeText(target).split(" ").filter(Boolean);
  const saidWords = normalizeText(transcript).split(" ").filter(Boolean);
  if (!targetWords.length || !saidWords.length) return 0;
  let matched = 0;
  targetWords.forEach((word) => {
    if (saidWords.some((said) => wordSimilarity(word, said))) matched += 1;
  });
  return Math.max(0, Math.min(100, Math.round((matched / targetWords.length) * 100)));
}

function speechSupport() {
  return window.SpeechRecognition || window.webkitSpeechRecognition || null;
}

function setSpeakingResult(widget, html) {
  const result = widget.querySelector(".speaking-result");
  if (!result) return;
  result.innerHTML = html;
  result.classList.add("is-visible");
}

function startSpeaking(widget) {
  if (!widget) return;
  const Recognition = speechSupport();
  if (!Recognition) {
    setSpeakingResult(widget, `<strong>当前浏览器不支持语音识别。</strong> 请使用最新版 Chrome 或 Edge。也可以先用喇叭听两遍，再跟读。`);
    showToast("当前浏览器不支持语音识别，已为你保留跟读练习。", "error");
    return;
  }
  if (activeRecognition) {
    try { activeRecognition.abort(); } catch (error) { /* noop */ }
    activeRecognition = null;
  }
  const target = widget.dataset.target || "";
  const key = widget.dataset.targetKey || target;
  const mic = widget.querySelector(".mic-button");
  const recognition = new Recognition();
  activeRecognition = recognition;
  recognition.lang = "es-ES";
  recognition.interimResults = true;
  recognition.continuous = false;
  recognition.maxAlternatives = 1;
  let handled = false;

  if (mic) mic.classList.add("is-listening");
  setSpeakingResult(widget, "正在听… 请用正常音量读一遍上面的句子。");

  recognition.onresult = (event) => {
    let interim = "";
    let final = "";
    for (let index = event.resultIndex; index < event.results.length; index += 1) {
      const result = event.results[index];
      const text = result[0]?.transcript || "";
      if (result.isFinal) final += text;
      else interim += text;
    }
    if (interim) {
      setSpeakingResult(widget, `听到：<strong>${escapeHtml(interim)}</strong> …`);
    }
    if (final && !handled) {
      handled = true;
      const score = scoreSpeech(target, final);
      const previous = Number(state.spoken[key] || 0);
      state.spoken[key] = Math.max(previous, score);
      saveState();
      if (score > previous && score >= 50) {
        addStudy({ xp: 5, minutes: 1, speaking: 1 });
        showToast(`跟读完成，匹配 ${score}%，+5 XP。`, "success");
      } else {
        updateChrome();
      }
      const message = score >= 85
        ? "很准。节奏和词都跟上了。"
        : score >= 65
          ? "不错，关键词基本都在。再注意一下重音和停顿。"
          : "识别到一部分。可以放慢一点，按意群分段再试。";
      setSpeakingResult(widget, `
        <div><strong>匹配度 ${score}%</strong> · 识别到：${escapeHtml(final)}</div>
        <div style="margin-top:5px;color:inherit;opacity:.78;">${message}${previous && previous > score ? ` 历史最佳：${previous}%。` : ""}</div>`);
    }
  };

  recognition.onerror = (event) => {
    if (event.error === "aborted") return;
    let message = "没有听清，再试一次。";
    if (event.error === "not-allowed" || event.error === "service-not-allowed") message = "需要麦克风权限。允许后再点一次麦克风。";
    if (event.error === "network") message = "语音识别需要联网，当前连接不可用。可以先关掉评分，直接跟读。";
    if (event.error === "no-speech") message = "没听到声音。靠近麦克风，读得稍大一点。";
    setSpeakingResult(widget, `<strong>${escapeHtml(message)}</strong>`);
  };

  recognition.onend = () => {
    if (mic) mic.classList.remove("is-listening");
    if (activeRecognition === recognition) activeRecognition = null;
    if (!handled) {
      const result = widget.querySelector(".speaking-result");
      if (result && result.textContent.includes("正在听")) {
        setSpeakingResult(widget, "没有收到结果。允许麦克风权限后再试一次。");
      }
    }
  };

  try {
    recognition.start();
  } catch (error) {
    setSpeakingResult(widget, "麦克风暂时无法启动。请检查浏览器权限。");
    if (mic) mic.classList.remove("is-listening");
    activeRecognition = null;
  }
}

/* ---------- Actions ---------- */

function handleAction(element, event) {
  const action = element.dataset.action;
  if (!action) return;
  const needsPrevent = element.tagName === "A" || element.tagName === "BUTTON";
  if (needsPrevent) event.preventDefault();
  if (handleSettingsAction(action, element)) return;

  switch (action) {
    case "close-modal":
      closeModal();
      return;
    case "lesson-step":
      goLessonStep(Number(element.dataset.step) || 0);
      return;
    case "lesson-restart":
      restartCurrentLesson();
      return;
    case "lesson-prev":
      if (!lessonView) return;
      goLessonStep(lessonView.step - 1);
      return;
    case "lesson-next":
      if (!lessonView) return;
      goLessonStep(lessonView.step + 1);
      return;
    case "toggle-translation":
      if (!lessonView) return;
      stopAllAudio();
      lessonView.showChinese = !lessonView.showChinese;
      renderView({ preserveScroll: true });
      return;
    case "play-dialogue": {
      const lesson = getLesson(element.dataset.lesson);
      playDialogueSequence(lesson, element);
      return;
    }
    case "quiz-answer": {
      if (!lessonView) return;
      const lesson = getLesson(currentRoute.param);
      if (!lesson) return;
      const questionId = element.dataset.question;
      const index = Number(element.dataset.index);
      if (lessonView.quiz[questionId]) return;
      const question = quizQuestionsFor(lesson).find((item) => item.id === questionId);
      if (!question || !question.options[index]) return;
      lessonView.quiz[questionId] = { index, ok: Boolean(question.options[index].ok) };
      lessonView.resumed = false;
      persistLessonProgress();
      renderView({ preserveScroll: true });
      return;
    }
    case "lesson-complete":
      completeCurrentLesson();
      return;
    case "cards-start":
      startCardSession("daily");
      return;
    case "cards-free":
      startCardSession("free");
      return;
    case "cards-reveal":
      if (!cardsView.session) return;
      cardsView.session.revealed = true;
      renderView({ preserveScroll: true });
      return;
    case "cards-rate":
      rateCurrentCard(element.dataset.rating);
      return;
    case "cards-exit":
      cardsView.session = null;
      renderView({ preserveScroll: false });
      return;
    case "phrase-filter":
      phraseView.category = element.dataset.category || "all";
      phraseView.favoritesOnly = false;
      updatePhraseFilterUI();
      updatePhraseGrid();
      return;
    case "phrase-favorites":
      phraseView.favoritesOnly = !phraseView.favoritesOnly;
      updatePhraseFilterUI();
      updatePhraseGrid();
      return;
    case "phrase-clear":
      phraseView = { category: "all", query: "", favoritesOnly: false };
      {
        const input = $("#phrase-search");
        if (input) input.value = "";
      }
      updatePhraseFilterUI();
      updatePhraseGrid();
      return;
    case "toggle-favorite":
      toggleFavorite(element.dataset.id);
      return;
    case "random-phrase":
      showRandomPhrase();
      return;
    case "pron-pair": {
      if (!pronView || pronView.chosen !== null) return;
      const side = element.dataset.side;
      pronView.chosen = side;
      if (side === pronView.correctSide) pronView.score += 1;
      const pairs = DATA.pronunciation.minimalPairs || [];
      if (pronView.pairIndex >= pairs.length - 1) {
        pronView.finished = true;
        if (!pronView.awarded) {
          pronView.awarded = true;
          addStudy({ xp: 10, minutes: 2 });
          showToast(`听音辨词完成：${pronView.score}/${pairs.length}，+10 XP。`, "success");
        }
      }
      renderView({ preserveScroll: true });
      return;
    }
    case "pron-next":
      if (!pronView) return;
      if (pronView.chosen === null) return;
      pronView.pairIndex += 1;
      pronView.chosen = null;
      pronView.correctSide = randomPairSide();
      renderView({ preserveScroll: true });
      return;
    case "pron-restart":
      pronView = newPronunciationView();
      renderView({ preserveScroll: true });
      return;
    case "grammar-filter":
      grammarView.filter = element.dataset.level || "all";
      renderView({ preserveScroll: true });
      return;
    case "grammar-toggle":
      toggleGrammarItem(element.dataset.id);
      return;
    case "roleplay-select":
      stopAllAudio();
      roleplayView = newRoleplayView(element.dataset.id);
      renderView();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    case "roleplay-option": {
      if (!roleplayView || roleplayView.finished || roleplayView.chosen !== null) return;
      const scenario = roleplayById(roleplayView.id);
      const step = scenario?.steps[roleplayView.step];
      const option = step?.options[Number(element.dataset.index)];
      if (!option) return;
      roleplayView.chosen = Number(element.dataset.index);
      if (option.ok) roleplayView.score += 1;
      playAudioFile(roleplayOptionAudioPath(scenario.id, option.es), null, option.es);
      renderView({ preserveScroll: true });
      return;
    }
    case "roleplay-continue": {
      if (!roleplayView || roleplayView.finished || roleplayView.chosen === null) return;
      const scenario = roleplayById(roleplayView.id);
      const step = scenario?.steps[roleplayView.step];
      const option = step?.options[roleplayView.chosen];
      if (!step || !option) return;
      roleplayView.history.push({
        npc: step.npc,
        npcZh: step.npcZh,
        choice: option
      });
      if (roleplayView.step >= scenario.steps.length - 1) {
        finishRoleplay();
      } else {
        roleplayView.step += 1;
        roleplayView.chosen = null;
        renderView({ preserveScroll: false });
      }
      return;
    }
    case "roleplay-restart":
      stopAllAudio();
      roleplayView = newRoleplayView(roleplayView.id);
      renderView();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    case "roleplay-next": {
      stopAllAudio();
      const currentIndex = DATA.roleplays.findIndex((scenario) => scenario.id === roleplayView.id);
      const nextScenario = DATA.roleplays[(currentIndex + 1) % DATA.roleplays.length];
      roleplayView = newRoleplayView(nextScenario.id);
      renderView();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    case "start-speaking":
      startSpeaking(element.closest(".speaking-widget"));
      return;
    case "reset-request":
      openModal(`
        <span class="eyebrow">RESET · 清空数据</span>
        <h2 style="margin-top:6px;">确定要清空全部进度吗？</h2>
        <p>这会删除本机上所有课程完成记录、单词卡复习状态、连续天数、XP 和收藏，也会一并清除个人资料与偏好设置。操作不能撤销，但不会影响网站内容。</p>
        <div class="modal-actions">
          <button class="btn btn-secondary btn-sm" data-action="close-modal">先不清空</button>
          <button class="btn btn-accent btn-sm" data-action="confirm-reset">清空全部数据</button>
        </div>
      `, "清空学习数据");
      return;
    case "confirm-reset":
      state = freshState();
      saveState();
      closeModal();
      closeSettings();
      applyAppearance();
      updateChrome();
      lessonView = null;
      roleplayView = newRoleplayView();
      cardsView.session = null;
      renderView({ preserveScroll: false });
      showToast("进度已清空。随时可以重新开始。");
      return;
    default:
      return;
  }
}

function handleGlobalClick(event) {
  const audioTarget = event.target.closest("[data-audio]");
  if (audioTarget) {
    event.preventDefault();
    playAudioFile(audioTarget.dataset.audio, audioTarget, audioTarget.dataset.fallback || "");
    return;
  }
  const speakTarget = event.target.closest("[data-speak]");
  if (speakTarget) {
    event.preventDefault();
    stopAllAudio();
    const rate = speakTarget.dataset.rate ? Number(speakTarget.dataset.rate) : 0.88;
    speakText(speakTarget.dataset.speak || speakTarget.textContent, rate, speakTarget);
    return;
  }
  const actionTarget = event.target.closest("[data-action]");
  if (actionTarget) {
    handleAction(actionTarget, event);
    return;
  }
  const navLink = event.target.closest("a[data-nav], .mobile-nav-item, .brand");
  if (navLink) closeSidebar();
}

function handleInput(event) {
  if (event.target.id === "phrase-search") {
    phraseView.query = event.target.value;
    updatePhraseGrid();
  }
}

function handleChange(event) {
  if (event.target.id === "card-stage") {
    cardsView.stage = event.target.value;
    cardsView.session = null;
    renderView({ preserveScroll: true });
  }
}

function handleKeydown(event) {
  if (event.key === "Escape") {
    const modal = $("#modal-root");
    if (modal?.classList.contains("is-open")) {
      closeModal();
      return;
    }
    const settingsLayer = $("#settings-layer");
    if (settingsLayer?.classList.contains("is-open")) {
      closeSettings();
      return;
    }
    closeSidebar();
  }

  const settingsLayer = $("#settings-layer");
  if (settingsLayer?.classList.contains("is-open")) {
    if (event.key === "Tab") {
      const focusables = $$("#settings-layer button, #settings-layer input, #settings-layer a[href], #settings-layer [tabindex]")
        .filter((element) => !element.disabled && element.getClientRects().length > 0);
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
    return;
  }

  if (event.target instanceof HTMLElement && ["INPUT", "TEXTAREA", "SELECT"].includes(event.target.tagName)) return;
  if (!$("#modal-root")?.classList.contains("is-open") && currentRoute.name === "tarjetas" && cardsView.session) {
    const session = cardsView.session;
    if (event.code === "Space" && session.index < session.ids.length && !session.revealed) {
      event.preventDefault();
      session.revealed = true;
      renderView({ preserveScroll: true });
      return;
    }
    if (session.revealed && ["1", "2", "3", "4"].includes(event.key)) {
      event.preventDefault();
      const ratings = { "1": "again", "2": "hard", "3": "good", "4": "easy" };
      rateCurrentCard(ratings[event.key]);
    }
  }
}

/* ---------- Boot ---------- */

function boot() {
  if ("speechSynthesis" in window) {
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }

  applyAppearance();

  document.addEventListener("click", handleGlobalClick);
  document.addEventListener("input", handleInput);
  document.addEventListener("change", handleChange);
  document.addEventListener("keydown", handleKeydown);
  window.addEventListener("hashchange", routeToHash);

  const menuButton = $("#mobile-menu-btn");
  if (menuButton) menuButton.addEventListener("click", openSidebar);
  const closeButton = $("#sidebar-close");
  if (closeButton) closeButton.addEventListener("click", closeSidebar);
  const backdrop = $("#sidebar-backdrop");
  if (backdrop) backdrop.addEventListener("click", closeSidebar);

  const modalRoot = $("#modal-root");
  if (modalRoot) {
    modalRoot.addEventListener("click", (event) => {
      if (event.target === modalRoot) closeModal();
    });
  }

  if (!window.location.hash) {
    window.history.replaceState(null, "", "#/inicio");
  }
  routeToHash();
}

boot();
