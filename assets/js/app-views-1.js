/* =========================================================
   SOL · 西语日常 — lesson, flashcards & phrasebook views
   ========================================================= */

let lessonView = null;
let cardsView = { stage: "all", session: null };
let phraseView = { category: "all", query: "", favoritesOnly: false };
const CARD_BATCH_DUE = 6;
const CARD_BATCH_NEW = 4;

function newLessonView(id) {
  const numericId = Number(id);
  const completed = state.completedLessons.includes(numericId);
  const saved = !completed ? state.lessonProgress?.[numericId] : null;
  const step = saved ? Math.max(0, Math.min(3, Number(saved.step) || 0)) : 0;
  const quiz = saved && saved.quiz && typeof saved.quiz === "object" ? { ...saved.quiz } : {};
  return {
    id: numericId,
    step,
    resumeStep: step,
    resumed: !completed && step > 0,
    showChinese: state.autoShowChinese !== false,
    quiz,
    completedView: false,
    lastXp: 0
  };
}

function persistLessonProgress() {
  if (!lessonView) return;
  const id = lessonView.id;
  const completed = state.completedLessons.includes(id);
  if (completed || lessonView.completedView || lessonView.step === 0) {
    if (state.lessonProgress[id]) {
      delete state.lessonProgress[id];
      saveState();
    }
    return;
  }
  state.lessonProgress[id] = {
    step: lessonView.step,
    quiz: { ...lessonView.quiz },
    updatedAt: Date.now()
  };
  saveState();
}

function restartCurrentLesson() {
  if (!lessonView) return;
  stopAllAudio();
  lessonView.step = 0;
  lessonView.resumeStep = 0;
  lessonView.resumed = false;
  lessonView.quiz = {};
  lessonView.completedView = false;
  delete state.lessonProgress[lessonView.id];
  saveState();
  renderView();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function quizQuestionsFor(lesson) {
  const questions = [];
  const picks = [lesson.vocab[0], lesson.vocab[1], lesson.vocab[2]].filter(Boolean);
  const rotate = (items, shift) => {
    const offset = shift % items.length;
    return [...items.slice(offset), ...items.slice(0, offset)];
  };

  picks.forEach((word, index) => {
    const reverse = index === 1;
    const others = lesson.vocab.filter((item) => item.es !== word.es && item.zh !== word.zh).slice(0, 2);
    const raw = [
      { text: reverse ? word.es : word.zh, ok: true },
      ...others.map((item) => ({ text: reverse ? item.es : item.zh, ok: false }))
    ];
    const options = rotate(raw, index + 1);
    questions.push({
      id: `vocab-${index}`,
      kind: "vocab",
      prompt: reverse ? `“${word.zh}” 用西语怎么说？` : `“${word.es}” 是什么意思？`,
      highlight: reverse ? word.zh : word.es,
      options,
      explanation: `${word.es} = ${word.zh}。例句：${word.example}（${word.exampleZh}）`
    });
  });

  const challenge = lesson.challenge;
  const challengeOptions = challenge.options.map((option) => ({ ...option }));
  const correctChallengeIndex = challengeOptions.findIndex((option) => option.ok);
  const challengeTarget = lesson.id % challengeOptions.length;
  if (correctChallengeIndex >= 0) {
    const [correct] = challengeOptions.splice(correctChallengeIndex, 1);
    challengeOptions.splice(challengeTarget, 0, correct);
  }
  questions.push({
    id: "challenge",
    kind: "challenge",
    prompt: challenge.prompt,
    situation: challenge.situation,
    options: challengeOptions.map((option) => ({ text: option.es, sub: option.zh, ok: option.ok })),
    explanation: challengeOptions.find((option) => option.ok)?.why || ""
  });
  return questions;
}

function speakingCard(es, zh, tip, key, variant = "dark") {
  const target = escapeHtml(es);
  if (variant === "shadow") {
    return `
      <div class="shadow-card speaking-widget" data-target-key="${escapeHtml(key)}" data-target="${target}">
        <div class="shadow-top">
          <div>
            <div class="shadow-es">${escapeHtml(es)}</div>
            <div class="shadow-zh">${escapeHtml(zh)}</div>
          </div>
          ${speakButton(es)}
        </div>
        <div class="shadow-focus">${escapeHtml(tip)}</div>
        <div class="shadow-actions">
          <button class="mic-button" data-action="start-speaking" aria-label="开始跟读评分">${icon("mic")}</button>
          <span>点击麦克风，读完看匹配度</span>
        </div>
        <div class="speaking-result" aria-live="polite"></div>
      </div>`;
  }
  return `
    <div class="speaking-card speaking-widget" data-target-key="${escapeHtml(key)}" data-target="${target}">
      <div>
        <div class="speaking-label">${icon("mic")} SPEAK IT OUT · 开口挑战</div>
        <div class="speaking-es">${escapeHtml(es)}</div>
        <div class="speaking-zh">${escapeHtml(zh)}</div>
        <div class="speaking-tip">${escapeHtml(tip)}</div>
      </div>
      <div class="speaking-side">
        ${speakButton(es)}
        <button class="mic-button" data-action="start-speaking" aria-label="开始跟读评分">${icon("mic")}</button>
      </div>
      <div class="speaking-result" aria-live="polite"></div>
    </div>`;
}

function cultureBlock(lesson) {
  return `
    <div class="culture-note">
      <div class="culture-note-head">${icon("sun")} CULTURA · 文化胶囊</div>
      <h3>${escapeHtml(lesson.culture.title)}</h3>
      <p>${escapeHtml(lesson.culture.body)}</p>
    </div>`;
}

function renderDialogueStep(lesson) {
  const lines = lesson.dialogue.map((line, index) => `
    <div class="dialogue-row ${line.role === "you" ? "you" : ""}">
      <div class="dialogue-avatar" aria-hidden="true">${escapeHtml(line.who.charAt(0))}</div>
      <div class="dialogue-bubble">
        <div class="dialogue-meta">
          <span class="dialogue-who">${escapeHtml(line.who)}</span>
          ${audioButton(dialogueAudioPath(lesson.id, index), line.es)}
        </div>
        <div class="dialogue-es">${escapeHtml(line.es)}</div>
        <div class="dialogue-zh${lessonView.showChinese ? "" : " is-hidden"}">${escapeHtml(line.zh)}</div>
        ${line.note ? `<span class="dialogue-note">${escapeHtml(line.note)}</span>` : ""}
      </div>
    </div>`).join("");

  return `
    <div class="step-head">
      <div>
        <span class="eyebrow">ESCUCHA · 先听</span>
        <h2>把对话听成“一整块”</h2>
        <p>先不看中文，听两句，猜场景。每句旁的喇叭播放西班牙（es-ES）语音，顶部可以整段连播。再点开中文确认意思。</p>
      </div>
      <div class="step-toolbar">
        <button class="btn btn-secondary btn-sm dialogue-play-btn" data-action="play-dialogue" data-lesson="${lesson.id}">
          ${icon("play")} <span class="dialogue-play-label">连播对话</span>
        </button>
        <button class="toggle-control ${lessonView.showChinese ? "is-on" : ""}" data-action="toggle-translation" aria-pressed="${lessonView.showChinese}">
          <span class="toggle" aria-hidden="true"></span>
          ${lessonView.showChinese ? "中文已显示" : "显示中文"}
        </button>
      </div>
    </div>
    <div class="dialogue-list">${lines}</div>
    <div class="tip-strip">
      ${icon("headphones")}
      <span><strong>西班牙（es-ES）神经语音：</strong>每句都是独立音频，NPC 和“你”使用不同声线。可以逐句听，也可以用顶部「连播对话」一次听完。先听两遍，再看中文。</span>
    </div>
    ${cultureBlock(lesson)}`;
}

function renderPhraseStep(lesson) {
  const phrases = lesson.phrases.map((phrase) => `
    <article class="core-phrase">
      <div class="core-phrase-top">
        <div>
          <div class="core-phrase-es">${escapeHtml(phrase.es)}</div>
          <div class="core-phrase-zh">${escapeHtml(phrase.zh)}</div>
          <div class="core-phrase-pron">${escapeHtml(phrase.pron)}</div>
        </div>
        ${speakButton(phrase.es)}
      </div>
    </article>`).join("");
  return `
    <div class="step-head">
      <div>
        <span class="eyebrow">FRASES CLAVE · 核心句</span>
        <h2>今天只带走这几块积木</h2>
        <p>不要背整段对话。先挑 3 句最可能用到的，反复听到能在脑子里自动接上。中文和拟音只是拐杖，熟悉后把它们丢掉。</p>
      </div>
      <div class="step-toolbar"><span class="chip chip-olive">${lesson.phrases.length} 句</span><span class="chip">建议跟读 3 遍</span></div>
    </div>
    <div class="phrase-grid">${phrases}</div>
    <div class="tip-strip">
      ${icon("sparkles")}
      <span><strong>练法：</strong>先看西班牙语读一遍 → 遮住中文再读一遍 → 只听音频跟读一遍。遇到长句，按“意群”停一下，不要一口气背完。</span>
    </div>`;
}

function renderWordStep(lesson) {
  const words = lesson.vocab.map((word) => `
    <article class="vocab-card">
      <div class="vocab-top">
        <div>
          <div class="vocab-es">${escapeHtml(word.es)}</div>
          <div class="vocab-pos">${escapeHtml(word.pos)}</div>
        </div>
        ${speakButton(word.es)}
      </div>
      <div class="vocab-zh">${escapeHtml(word.zh)}</div>
      <div class="vocab-pron">${escapeHtml(word.pron)}</div>
      <div class="vocab-example">
        <div class="vocab-example-es">${escapeHtml(word.example)}</div>
        <div class="vocab-example-zh">${escapeHtml(word.exampleZh)}</div>
      </div>
    </article>`).join("");

  const grammar = lesson.grammar;
  const examples = grammar.examples.map((example) => `
    <div class="grammar-example"><span class="es">${escapeHtml(example.es)}</span><span class="zh">${escapeHtml(example.zh)}</span></div>`).join("");

  return `
    <div class="step-head">
      <div>
        <span class="eyebrow">LADRILLOS · 词汇与语法</span>
        <h2>把句子拆开看，但别拆散</h2>
        <p>先看单词，再读下面的语法小条。每个语法点只服务这一课，不需要一次记住所有规则。</p>
      </div>
      <div class="step-toolbar"><span class="chip chip-saffron">${lesson.vocab.length} 个词</span></div>
    </div>
    <div class="vocab-grid">${words}</div>
    <div class="grammar-note">
      <div class="grammar-note-top">${icon("grammar")}<h3>${escapeHtml(grammar.title)}</h3></div>
      <div class="grammar-note-body">${escapeHtml(grammar.body)}</div>
      <span class="formula">${escapeHtml(grammar.formula)}</span>
      <div class="grammar-examples">${examples}</div>
      <div class="pitfall"><strong>注意</strong><span>${escapeHtml(grammar.pitfall)}</span></div>
    </div>
    ${cultureBlock(lesson)}
    <div class="tip-strip">
      ${icon("book")}
      <span>想系统补语法？去 <a href="#/gramatica" style="font-weight:750;text-decoration:underline;text-underline-offset:2px;">语法锦囊</a> 看同一主题的完整表格。这里只要求“够用”。</span>
    </div>`;
}

function renderPracticeStep(lesson) {
  const questions = quizQuestionsFor(lesson);
  const answeredCount = Object.keys(lessonView.quiz).length;
  const correctCount = questions.filter((question) => lessonView.quiz[question.id]?.ok).length;

  const quizCards = questions.map((question) => {
    const answered = lessonView.quiz[question.id];
    const options = question.options.map((option, index) => {
      let classes = "";
      if (answered) {
        if (option.ok) classes = " is-correct";
        else if (answered.index === index) classes = " is-wrong";
        else classes = " is-dimmed";
      }
      return `
        <button class="quiz-option${classes}" data-action="quiz-answer" data-question="${question.id}" data-index="${index}" ${answered ? "disabled" : ""}>
          <span class="option-letter">${String.fromCharCode(65 + index)}</span>
          <span>${escapeHtml(option.text)}${option.sub ? `<span class="muted" style="display:block;font-size:8px;">${escapeHtml(option.sub)}</span>` : ""}</span>
        </button>`;
    }).join("");

    let feedback = "";
    if (answered) {
      const correct = question.options.find((option) => option.ok);
      feedback = `<div class="quiz-feedback"><strong>${answered.ok ? "答对了。" : `正确答案：${escapeHtml(correct.text)}。`}</strong> ${escapeHtml(question.explanation)}</div>`;
    }

    return `
      <article class="quiz-card" data-quiz-id="${question.id}">
        <div class="quiz-kicker">${question.kind === "challenge" ? "REAL SITUATION · 场景选择" : "VOCAB CHECK · 词义检查"}</div>
        ${question.situation ? `<div class="quiz-prompt" style="font-weight:600;color:var(--muted);font-size:10px;">${escapeHtml(question.situation)}</div>` : ""}
        <div class="quiz-prompt">${question.kind === "challenge"
          ? escapeHtml(question.prompt)
          : escapeHtml(question.prompt).replace(escapeHtml(question.highlight), `<span class="quiz-es">${escapeHtml(question.highlight)}</span>`)}</div>
        <div class="quiz-options">${options}</div>
        ${feedback}
      </article>`;
  }).join("");

  return `
    <div class="step-head">
      <div>
        <span class="eyebrow">PRÁCTICA · 练习</span>
        <h2>先选对，再开口</h2>
        <p>4 道小题检验理解，然后读一遍本课的“开口挑战”。答完所有题，就可以完成本课。</p>
      </div>
      <div class="step-toolbar"><span class="chip chip-accent">${answeredCount}/${questions.length} 已回答</span></div>
    </div>
    <div class="quiz-list">${quizCards}</div>
    <div class="quiz-scorebar">
      <span>当前得分</span>
      <strong>${correctCount} / ${questions.length}</strong>
      <span>${answeredCount === questions.length ? (correctCount === questions.length ? "满分，漂亮。" : "完成比完美更重要。") : "选完答案会立刻看到解释"}</span>
    </div>
    ${speakingCard(lesson.speaking.es, lesson.speaking.zh, lesson.speaking.tip, `lesson-${lesson.id}`)}
    <div class="tip-strip">
      ${icon("mic")}
      <span>麦克风评分依赖浏览器的语音识别服务，需要允许麦克风并联网。若不可用，先用喇叭听两遍、跟读两遍，效果同样真实。</span>
    </div>`;
}

function renderLesson() {
  const lesson = getLesson(currentRoute.param);
  if (!lesson) return `<div class="empty-state"><h3>没有找到这一课</h3><a class="btn btn-primary" href="#/mapa">回到学习地图</a></div>`;
  if (!lessonView || lessonView.id !== lesson.id) lessonView = newLessonView(lesson.id);

  const lessonCompleted = state.completedLessons.includes(lesson.id);
  const bestScore = state.lessonScores[lesson.id];
  const steps = [
    { label: "对话", sub: "听完整场景" },
    { label: "核心句", sub: "拿走能用的" },
    { label: "单词 & 语法", sub: "拆解积木" },
    { label: "练习 & 开口", sub: "用出来" }
  ];

  const goals = lesson.goals.map((goal) => `<li>${escapeHtml(goal)}</li>`).join("");
  const tabs = steps.map((step, index) => `
    <button class="step-tab${lessonView.step === index ? " is-active" : ""}${index < lessonView.step ? " is-done" : ""}" data-action="lesson-step" data-step="${index}" aria-current="${lessonView.step === index ? "step" : "false"}">
      <span class="step-tab-no">${index < lessonView.step ? icon("check") : index + 1}</span>
      <span class="step-tab-copy"><strong>${step.label}</strong><span>${step.sub}</span></span>
    </button>`).join("");

  let content = "";
  if (!lessonView.completedView) {
    if (lessonView.step === 0) content = renderDialogueStep(lesson);
    if (lessonView.step === 1) content = renderPhraseStep(lesson);
    if (lessonView.step === 2) content = renderWordStep(lesson);
    if (lessonView.step === 3) content = renderPracticeStep(lesson);
  }

  const questions = quizQuestionsFor(lesson);
  const answeredCount = Object.keys(lessonView.quiz).length;
  const correctCount = questions.filter((question) => lessonView.quiz[question.id]?.ok).length;
  const canComplete = answeredCount === questions.length;

  const nextStepLabel = lessonView.step < 3 ? steps[lessonView.step + 1].label : "";
  const footer = lessonView.completedView ? "" : `
    <div class="lesson-footer">
      <button class="btn btn-secondary btn-sm" data-action="lesson-prev" ${lessonView.step === 0 ? "disabled" : ""}>${icon("arrow-left")} 上一步</button>
      <div class="lesson-footer-mid">
        <span>STEP ${lessonView.step + 1} / 4 · 本课 ${lesson.minutes} 分钟</span>
        <div class="progress"><span style="width:${((lessonView.step + 1) / 4) * 100}%"></span></div>
      </div>
      ${lessonView.step < 3
        ? `<button class="btn btn-primary btn-sm" data-action="lesson-next">${nextStepLabel} ${icon("arrow-right")}</button>`
        : `<button class="btn btn-primary btn-sm" data-action="lesson-complete" ${canComplete ? "" : "disabled"} title="${canComplete ? "" : "先答完 4 道小测"}">${lessonCompleted ? "完成复习" : "完成本课"} ${icon("check")}</button>`}
    </div>`;

  const completionCard = lessonView.completedView ? `
    <section class="step-content">
      <div class="lesson-complete-card">
        <div class="complete-badge">${icon("check")}</div>
        <h2>${lessonView.step >= 0 ? "这一课，拿下了。" : "完成本课"}</h2>
        <div class="complete-es">${escapeHtml(lesson.esTitle)} · ¡Muy bien!</div>
        <p>${lessonView.lastXp ? "你不是“看过”这一课，而是完成了一次听、读、选、说。现在去真实场景里用一次吧。" : "你已经完成过这一课。复习也很重要，下次可以挑战不看中文再听一遍对话。"}</p>
        <div class="complete-stats">
          <div class="complete-stat"><strong>${correctCount}/${questions.length}</strong><span>小测正确</span></div>
          <div class="complete-stat"><strong>${lesson.vocab.length}</strong><span>本课词卡</span></div>
          <div class="complete-stat"><strong>${lessonView.lastXp || 0}</strong><span>XP 获得</span></div>
          <div class="complete-stat"><strong>${Math.round(lesson.minutes)}</strong><span>预计分钟</span></div>
        </div>
        <div class="complete-actions">
          ${getNextLessonAfter(lesson.id)
            ? `<a class="btn btn-primary" href="#/leccion/${getNextLessonAfter(lesson.id).id}">下一课：${escapeHtml(getNextLessonAfter(lesson.id).title)} ${icon("arrow-right")}</a>`
            : `<a class="btn btn-primary" href="#/progreso">看看完整学习成果 ${icon("arrow-right")}</a>`}
          <a class="btn btn-secondary" href="#/mapa">回到学习地图</a>
          <a class="btn btn-ghost" href="#/practica">去情景实战</a>
        </div>
      </div>
    </section>` : "";

  return `
    <a class="back-link" href="#/mapa">${icon("arrow-left")} 学习地图</a>
    <header class="lesson-head">
      <div class="lesson-head-copy">
        <span class="eyebrow">LECCIÓN ${lesson.number} · ${escapeHtml(lesson.level)} · ETAPA ${pad2(lesson.stage)}</span>
        <h1>${escapeHtml(lesson.title)}<span class="lesson-es-title">${escapeHtml(lesson.esTitle)}</span></h1>
        <p class="lesson-head-sub">${escapeHtml(lesson.subtitle)}</p>
        <div class="lesson-meta">
          <span class="chip">${icon("clock")} ${lesson.minutes} 分钟</span>
          <span class="chip">${lesson.dialogue.length} 句对话</span>
          <span class="chip">${lesson.phrases.length} 个核心句</span>
          <span class="chip">${lesson.vocab.length} 个词</span>
          ${dialogueAudioPaths(lesson.id).length >= lesson.dialogue.length
            ? `<span class="chip chip-olive">${icon("audio")} 全对话 es-ES 配音</span>`
            : ""}
          ${bestScore != null ? `<span class="chip chip-olive">${icon("star")} 最佳 ${bestScore}/4</span>` : ""}
        </div>
        ${lessonCompleted ? `<div class="lesson-completed-banner">${icon("check")} 已完成本课 · 可以随时回来复习</div>` : ""}
        ${lessonView.resumed && !lessonCompleted ? `
          <div class="lesson-resume-banner">
            <span>${icon("rotate")} 已恢复上次进度：第 ${lessonView.resumeStep + 1} 步 · ${escapeHtml(LESSON_STEP_NAMES[lessonView.resumeStep])}</span>
            <button data-action="lesson-restart">从头开始</button>
          </div>` : ""}
      </div>
      <aside class="lesson-goal-card">
        <h4>${icon("target")} 学完你会</h4>
        <ul class="lesson-goals">${goals}</ul>
      </aside>
    </header>

    ${lessonView.completedView ? completionCard : `
      <div class="lesson-shell">
        <div class="step-tabs" aria-label="课程步骤">${tabs}</div>
        <section class="step-content">
          ${content}
        </section>
        ${footer}
      </div>`}`;
}

function goLessonStep(step) {
  if (!lessonView) return;
  stopAllAudio();
  lessonView.step = Math.max(0, Math.min(3, step));
  lessonView.completedView = false;
  lessonView.resumed = false;
  persistLessonProgress();
  renderView({ scrollTarget: ".lesson-shell" });
}

function completeCurrentLesson() {
  const lesson = getLesson(currentRoute.param);
  if (!lesson || !lessonView) return;
  const questions = quizQuestionsFor(lesson);
  const answeredCount = Object.keys(lessonView.quiz).length;
  if (answeredCount < questions.length) {
    showToast(`还有 ${questions.length - answeredCount} 道小测没做，先答完再完成本课。`, "error");
    return;
  }
  const correctCount = questions.filter((question) => lessonView.quiz[question.id]?.ok).length;
  const alreadyCompleted = state.completedLessons.includes(lesson.id);
  state.lessonScores[lesson.id] = Math.max(Number(state.lessonScores[lesson.id] || 0), correctCount);
  delete state.lessonProgress[lesson.id];
  let awarded = 0;
  if (!alreadyCompleted) {
    state.completedLessons = [...new Set([...state.completedLessons, lesson.id])];
    awarded = 30 + correctCount * 2;
    lessonView.lastXp = awarded;
    addStudy({ xp: awarded, minutes: lesson.minutes, lessons: 1 });
  } else {
    lessonView.lastXp = 0;
    saveState();
    updateChrome();
  }
  lessonView.completedView = true;
  renderView();
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (awarded) {
    showToast(`完成第 ${lesson.id} 课，+${awarded} XP。继续下一课吧。`, "success");
    celebrate();
  }
}

/* ---------- Flashcards ---------- */

function cardSessionQueue(stage, mode = "daily") {
  const pool = DECK.filter((card) => stage === "all" || card.stage === Number(stage));
  if (mode === "free") {
    return [...pool].sort(() => Math.random() - 0.5).slice(0, 10).map((card) => card.id);
  }
  const due = dueCards(stage).slice(0, CARD_BATCH_DUE).map((card) => card.id);
  const fresh = newCards(stage).slice(0, CARD_BATCH_NEW).map((card) => card.id);
  return [...due, ...fresh];
}

function startCardSession(mode = "daily") {
  const ids = cardSessionQueue(cardsView.stage, mode);
  if (!ids.length) {
    showToast("这一组暂时没有需要复习的卡片，试试自由复习。");
    return;
  }
  cardsView.session = {
    ids,
    index: 0,
    revealed: false,
    results: { again: 0, hard: 0, good: 0, easy: 0 },
    mode
  };
  renderView();
  window.scrollTo({ top: 0, behavior: "auto" });
}

function rateCurrentCard(rating) {
  const session = cardsView.session;
  if (!session || session.index >= session.ids.length) return;
  const card = DECK.find((item) => item.id === session.ids[session.index]);
  if (!card) return;
  const current = state.cards[card.id] && typeof state.cards[card.id] === "object"
    ? { box: 0, seen: false, reviews: 0, lapses: 0, due: 0, ...state.cards[card.id] }
    : { box: 0, seen: false, reviews: 0, lapses: 0, due: 0 };
  let nextBox = Number(current.box) || 0;
  let dueInMs = 0;

  if (rating === "again") {
    nextBox = 0;
    dueInMs = 10 * 60 * 1000;
    current.lapses = Number(current.lapses || 0) + 1;
  } else if (rating === "hard") {
    nextBox = Math.max(1, Math.min(4, Number(current.box) || 0));
    dueInMs = 86400000;
  } else if (rating === "good") {
    nextBox = Math.min(4, Math.max(1, (Number(current.box) || 0) + 1));
    dueInMs = [0, 2, 4, 8, 16, 30][nextBox] * 86400000;
  } else if (rating === "easy") {
    nextBox = Math.min(4, Math.max(2, (Number(current.box) || 0) + 2));
    dueInMs = [0, 4, 8, 16, 30, 45][nextBox] * 86400000;
  }

  current.box = nextBox;
  current.seen = true;
  current.reviews = Number(current.reviews || 0) + 1;
  current.due = Date.now() + dueInMs;
  current.lastReviewed = Date.now();
  state.cards[card.id] = current;
  session.results[rating] = (session.results[rating] || 0) + 1;
  session.index += 1;
  session.revealed = false;
  addStudy({ xp: rating === "again" ? 1 : 2, minutes: 0.45, cards: 1 });
  renderView({ preserveScroll: true });
}

function renderFlashSession() {
  const session = cardsView.session;
  if (!session) return "";
  if (session.index >= session.ids.length) {
    const total = session.ids.length;
    const results = session.results;
    const remaining = Math.min(CARD_BATCH_DUE, dueCards(cardsView.stage).length)
      + Math.min(CARD_BATCH_NEW, newCards(cardsView.stage).length);
    return `
      <div class="flash-wrap">
        <div class="flash-top">
          <a class="back-link" href="#/tarjetas" data-action="cards-exit" style="margin:0;">${icon("arrow-left")} 回到单词卡</a>
          <div class="flash-progress"><div class="progress"><span style="width:100%"></span></div><span>${total} / ${total}</span></div>
        </div>
        <div class="flash-summary">
          <div class="complete-badge">${icon("check")}</div>
          <h2>这一组，完成了。</h2>
          <p>刚刚你主动回忆了 ${total} 张卡。错过的会在十分钟后回来，记得的会去更远的地方等你。${remaining ? `还有 ${remaining} 张可以再来一组。` : ""}</p>
          <div class="summary-stats">
            <div class="summary-stat"><strong>${results.again + results.hard}</strong><span>需要再见</span></div>
            <div class="summary-stat"><strong>${results.good + results.easy}</strong><span>记住了</span></div>
            <div class="summary-stat"><strong>${masteredCount()}</strong><span>累计掌握</span></div>
          </div>
          <div class="flash-summary-actions">
            ${remaining
              ? `<button class="btn btn-primary" data-action="cards-start">再来一组 · ${remaining} 张 ${icon("arrow-right")}</button>`
              : `<button class="btn btn-primary" data-action="cards-free">自由复习 10 张 ${icon("rotate")}</button>`}
            <button class="btn btn-secondary" data-action="cards-exit">回到概览</button>
          </div>
        </div>
      </div>`;
  }

  const card = DECK.find((item) => item.id === session.ids[session.index]);
  if (!card) return "";
  const current = session.index + 1;
  const total = session.ids.length;
  const stage = getStage(card.stage);
  return `
    <div class="flash-wrap">
      <div class="flash-top">
        <button class="back-link" data-action="cards-exit" style="margin:0;border:0;background:none;cursor:pointer;">${icon("arrow-left")} 退出本轮</button>
        <div class="flash-progress"><div class="progress"><span style="width:${(session.index / total) * 100}%"></span></div><span>${current} / ${total}</span></div>
        <span class="chip">${escapeHtml(stage?.label || "词汇")}</span>
      </div>
      <div class="flash-card">
        <div class="flash-tags">
          <span class="chip chip-accent">LECCIÓN ${pad2(card.lessonId)}</span>
          <span class="chip">${escapeHtml(card.pos)}</span>
        </div>
        <div class="flash-front">
          <div class="flash-es">${escapeHtml(card.es)}</div>
          <div class="flash-pron">${escapeHtml(card.pron)}</div>
          ${speakButton(card.es)}
        </div>
        ${session.revealed ? `
          <div class="flash-divider"></div>
          <div class="flash-back">
            <div class="flash-zh">${escapeHtml(card.zh)}</div>
            <div class="flash-example">
              <div class="flash-example-es">${escapeHtml(card.example)}</div>
              <div class="flash-example-zh">${escapeHtml(card.exampleZh)}</div>
            </div>
          </div>` : `
          <div class="flash-reveal">
            <button class="btn btn-primary" data-action="cards-reveal">显示答案</button>
            <span>先在心里回忆，再翻面 · 按空格也行</span>
          </div>`}
      </div>
      ${session.revealed ? `
        <div class="rating-grid">
          <button class="rating-btn again" data-action="cards-rate" data-rating="again"><strong>忘记</strong><span>10 分钟后再来</span></button>
          <button class="rating-btn hard" data-action="cards-rate" data-rating="hard"><strong>有点难</strong><span>明天再见</span></button>
          <button class="rating-btn good" data-action="cards-rate" data-rating="good"><strong>记得</strong><span>按节奏复习</span></button>
          <button class="rating-btn easy" data-action="cards-rate" data-rating="easy"><strong>太简单</strong><span>拉长间隔</span></button>
        </div>
        <div class="flash-keys"><kbd>1</kbd> 忘记 · <kbd>2</kbd> 有点难 · <kbd>3</kbd> 记得 · <kbd>4</kbd> 太简单</div>` : `<div class="flash-keys"><kbd>Space</kbd> 显示答案</div>`}
    </div>`;
}

function renderCards() {
  const stage = cardsView.stage;
  const due = dueCards(stage);
  const fresh = newCards(stage);
  const dueAll = dueCards("all");
  const newAll = newCards("all");
  const today = todayRecord();
  const stageOptions = `<option value="all"${stage === "all" ? " selected" : ""}>全部场景 · ${DECK.length} 张</option>${DATA.stages.map((item) => `<option value="${item.id}"${String(stage) === String(item.id) ? " selected" : ""}>${escapeHtml(item.label)} · ${stageLessons(item.id).reduce((sum, lesson) => sum + lesson.vocab.length, 0)} 张</option>`).join("")}`;

  if (cardsView.session) {
    return `
      <header class="page-head">
        <div class="page-head-copy">
          <span class="eyebrow">VOCABULARIO · 单词卡</span>
          <h1>主动回忆 <span class="head-es">Repaso</span></h1>
          <p>不要只是“看着眼熟”。先让大脑把答案捞出来，再翻面确认。</p>
        </div>
        <div class="page-head-actions"><span class="page-head-stat"><strong>${today.cards || 0}</strong><span>今日已复习</span></span></div>
      </header>
      ${renderFlashSession()}`;
  }

  const dueTake = Math.min(CARD_BATCH_DUE, due.length);
  const freshTake = Math.min(CARD_BATCH_NEW, fresh.length);
  const batchTotal = dueTake + freshTake;
  const estimate = Math.max(1, Math.round(batchTotal * 0.45));
  const hasQueue = batchTotal > 0;
  return `
    <header class="page-head">
      <div class="page-head-copy">
        <span class="eyebrow">VOCABULARIO · 单词卡</span>
        <h1>单词卡 <span class="head-es">Repaso espaciado</span></h1>
        <p>不是一次性背完，而是在快忘记的时候再见一面。每张卡的复习间隔会随你的熟悉程度自动拉长。</p>
      </div>
      <div class="page-head-actions">
        <div class="page-head-stat"><strong>${today.cards || 0}</strong><span>今日复习</span></div>
        <a class="btn btn-secondary btn-sm" href="#/practica">去情景实战 ${icon("chat")}</a>
      </div>
    </header>

    <div class="stats-four">
      <div class="mini-stat">
        <span class="mini-stat-icon">${icon("clock")}</span>
        <div class="mini-stat-copy"><strong>${dueAll.length}</strong><span>到期卡</span></div>
      </div>
      <div class="mini-stat">
        <span class="mini-stat-icon">${icon("sparkles")}</span>
        <div class="mini-stat-copy"><strong>${newAll.length}</strong><span>未学新词</span></div>
      </div>
      <div class="mini-stat">
        <span class="mini-stat-icon">${icon("target")}</span>
        <div class="mini-stat-copy"><strong>${masteredCount()}</strong><span>已掌握</span></div>
      </div>
      <div class="mini-stat">
        <span class="mini-stat-icon">${icon("cards")}</span>
        <div class="mini-stat-copy"><strong>${DECK.length}</strong><span>词汇总量</span></div>
      </div>
    </div>

    <section class="deck-panel">
      <div class="deck-main">
        <div>
          <span class="eyebrow">TODAY'S DECK · 今天这一组</span>
          <h2>${hasQueue ? (due.length ? `${dueTake} 张到期，${freshTake} 张新词。` : `先认识 ${freshTake} 张新词。`) : "今天的卡，已经清空了。"}</h2>
          <p>${hasQueue ? `一次 10 张以内，约 ${estimate} 分钟。先清到期，再学新词；剩下的可以下一组继续，不会一次压垮你。` : "没有到期的卡，也不代表不用碰西语。可以自由复习，或去跟读三句。"}</p>
          <div class="deck-numbers">
            <div class="deck-number"><strong>${due.length}</strong><span>待复习</span></div>
            <div class="deck-number"><strong>${fresh.length}</strong><span>新词</span></div>
            <div class="deck-number"><strong>${masteredCount()}</strong><span>已掌握</span></div>
          </div>
        </div>
        <div class="deck-main-actions">
          ${hasQueue ? `<button class="btn btn-primary" data-action="cards-start">${due.length ? "开始复习" : "开始学新词"} · ${batchTotal} 张 ${icon("arrow-right")}</button>` : `<button class="btn btn-primary" data-action="cards-free">自由复习 10 张 ${icon("rotate")}</button>`}
          <a class="btn btn-secondary" href="#/pronunciacion" style="color:#fbf5e8;border-color:rgba(255,255,255,.24);background:rgba(255,255,255,.08)">去跟读</a>
        </div>
      </div>
      <aside class="deck-side">
        <h3>学习设置</h3>
        <p>先只复习一个阶段，减少“信息过载”。</p>
        <div class="deck-setting">
          <label for="card-stage">词汇范围</label>
          <select class="select-control" id="card-stage">${stageOptions}</select>
        </div>
        <div class="srs-rules">
          <div class="srs-rule"><b>01</b><span>先自己回忆，别急着翻面。</span></div>
          <div class="srs-rule"><b>02</b><span>如实评价：忘记就点忘记，系统会安排再见。</span></div>
          <div class="srs-rule"><b>03</b><span>每天 5–10 分钟，比周末突击 1 小时更有效。</span></div>
        </div>
      </aside>
    </section>

    <section class="section">
      <div class="section-head">
        <div><span class="eyebrow">HOW IT WORKS · 复习原理</span><h2>三件小事，让记忆留下来</h2></div>
      </div>
      <div class="card-how">
        <div class="how-card"><div class="how-no">01</div><h3>主动回忆</h3><p>看到西语先想中文，而不是立刻翻答案。回忆本身就在加固记忆。</p></div>
        <div class="how-card"><div class="how-no">02</div><h3>间隔重复</h3><p>答得越轻松，下次见面越晚；答错就很快回来。把时间花在快忘的词上。</p></div>
        <div class="how-card"><div class="how-no">03</div><h3>回到句子里</h3><p>每张卡都有例句。记不住词时，记一句能说出口的话，反而更快。</p></div>
      </div>
    </section>`;
}

/* ---------- Phrasebook ---------- */

function filteredPhrases() {
  const query = normalizeText(phraseView.query);
  return DATA.phrases.filter((phrase) => {
    if (phraseView.category !== "all" && phrase.cat !== phraseView.category) return false;
    if (phraseView.favoritesOnly && !state.favorites.includes(phrase.id)) return false;
    if (!query) return true;
    return normalizeText(phrase.es).includes(query)
      || normalizeText(phrase.zh).includes(query)
      || normalizeText(phrase.pron).includes(query);
  });
}

function phraseCard(phrase) {
  const favorite = state.favorites.includes(phrase.id);
  const category = DATA.categories.find((item) => item.id === phrase.cat);
  return `
    <article class="phrase-card" data-phrase-card="${phrase.id}">
      <div class="phrase-card-top">
        <div>
          <span class="chip" style="margin-bottom:6px;">${escapeHtml(category?.label || "短语")}</span>
          <div class="phrase-card-es">${escapeHtml(phrase.es)}</div>
          <div class="phrase-card-zh">${escapeHtml(phrase.zh)}</div>
          <div class="phrase-card-pron">${escapeHtml(phrase.pron)}</div>
          ${phrase.note ? `<div class="phrase-card-note">${escapeHtml(phrase.note)}</div>` : ""}
        </div>
        <div class="phrase-card-actions">
          <button class="fav-btn${favorite ? " is-fav" : ""}" data-action="toggle-favorite" data-id="${phrase.id}" aria-label="${favorite ? "取消收藏" : "收藏短语"}" aria-pressed="${favorite}">${icon("star")}</button>
          ${speakButton(phrase.es)}
        </div>
      </div>
    </article>`;
}

function phraseGridHtml() {
  const list = filteredPhrases();
  if (!list.length) {
    return `
      <div class="empty-state" style="grid-column:1/-1;">
        <span class="empty-icon">${icon("search")}</span>
        <h3>暂时没有匹配的短语</h3>
        <p>换个关键词，或清空筛选。也可以去情景课里找一句新的。</p>
        <button class="btn btn-secondary btn-sm" data-action="phrase-clear">清空筛选</button>
      </div>`;
  }
  return list.map(phraseCard).join("");
}

function updatePhraseGrid() {
  const grid = $("#phrase-grid");
  const count = $("#phrase-count");
  if (grid) grid.innerHTML = phraseGridHtml();
  if (count) count.textContent = `共 ${filteredPhrases().length} 句`;
}

function updatePhraseFilterUI() {
  $$(".filter-chip[data-category]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.category === phraseView.category && !phraseView.favoritesOnly);
  });
  const favoriteChip = $("[data-action='phrase-favorites']");
  if (favoriteChip) favoriteChip.classList.toggle("is-active", phraseView.favoritesOnly);
}

function renderPhrases() {
  const filters = DATA.categories.map((category) => `
    <button class="filter-chip${phraseView.category === category.id && !phraseView.favoritesOnly ? " is-active" : ""}" data-action="phrase-filter" data-category="${category.id}">
      ${icon(category.icon)} ${escapeHtml(category.label)}
    </button>`).join("");
  const count = filteredPhrases().length;

  return `
    <header class="page-head">
      <div class="page-head-copy">
        <span class="eyebrow">FRASES · 随身短语</span>
        <h1>随身短语 <span class="head-es">A mano</span></h1>
        <p>90 句真实生活里用得上的表达。按场景筛选、收藏最常用的，出门前翻一眼。</p>
      </div>
      <div class="page-head-actions">
        <button class="btn btn-primary btn-sm" data-action="random-phrase">${icon("sparkles")} 随机抽一句</button>
        <a class="btn btn-secondary btn-sm" href="#/practica">去实战 ${icon("chat")}</a>
      </div>
    </header>

    <div class="phrase-toolbar">
      <div class="search-wrap">
        ${icon("search")}
        <input id="phrase-search" type="search" placeholder="搜索中文、西班牙语或关键词…" value="${escapeHtml(phraseView.query)}" autocomplete="off" aria-label="搜索短语">
      </div>
      <div class="phrase-toolbar-right">
        <span class="phrase-count" id="phrase-count">共 ${count} 句</span>
        <button class="fav-btn${phraseView.favoritesOnly ? " is-fav" : ""}" data-action="phrase-favorites" aria-label="只看收藏" style="width:auto;height:30px;padding:0 8px;border:1px solid var(--line);border-radius:999px;gap:4px;display:inline-flex;align-items:center;font-size:9px;font-weight:700;">${icon("star")} 收藏</button>
      </div>
    </div>

    <div class="filter-row" aria-label="短语分类">
      ${filters}
    </div>
    <div class="phrase-grid" id="phrase-grid">${phraseGridHtml()}</div>`;
}

function showRandomPhrase() {
  const pool = filteredPhrases().length ? filteredPhrases() : DATA.phrases;
  const phrase = pool[Math.floor(Math.random() * pool.length)];
  if (!phrase) return;
  const category = DATA.categories.find((item) => item.id === phrase.cat);
  const favorite = state.favorites.includes(phrase.id);
  openModal(`
    <span class="eyebrow">UNA FRASE AL AZAR · 随机一句</span>
    <h2 style="margin-top:6px;">出门前，带走一句。</h2>
    <div class="modal-phrase">
      <span class="chip chip-saffron">${escapeHtml(category?.label || "短语")}</span>
      <div class="es">${escapeHtml(phrase.es)}</div>
      <div class="zh">${escapeHtml(phrase.zh)}</div>
      <div class="pron">${escapeHtml(phrase.pron)}</div>
      ${speakButton(phrase.es)}
    </div>
    <div class="modal-actions">
      <button class="btn btn-secondary btn-sm" data-action="toggle-favorite" data-id="${phrase.id}">${icon("star")} ${favorite ? "取消收藏" : "收藏这句"}</button>
      <button class="btn btn-primary btn-sm" data-action="close-modal">继续浏览</button>
    </div>
  `, "随机短语");
}

function toggleFavorite(id) {
  const phrase = DATA.phrases.find((item) => item.id === id);
  if (!phrase) return;
  const index = state.favorites.indexOf(id);
  if (index >= 0) state.favorites.splice(index, 1);
  else state.favorites.push(id);
  saveState();
  $$(`[data-action="toggle-favorite"][data-id="${id}"]`).forEach((button) => {
    const favorite = state.favorites.includes(id);
    button.classList.toggle("is-fav", favorite);
    button.setAttribute("aria-pressed", String(favorite));
    if (button.classList.contains("btn")) {
      button.innerHTML = `${icon("star")} ${favorite ? "取消收藏" : "收藏这句"}`;
    }
  });
  updatePhraseGrid();
}
