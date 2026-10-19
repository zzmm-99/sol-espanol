/* =========================================================
   SOL · 西语日常 — core, state, routing, home & map
   ========================================================= */

const DATA = {
  stages: window.SOL_STAGES || [],
  lessons: window.SOL_LESSONS || [],
  phrases: window.SOL_PHRASES || [],
  categories: window.SOL_PHRASE_CATEGORIES || [],
  grammar: window.SOL_GRAMMAR || [],
  pronunciation: window.SOL_PRONUNCIATION || {},
  roleplays: window.SOL_ROLEPLAYS || [],
  resources: window.SOL_RESOURCES || [],
  achievements: window.SOL_ACHIEVEMENTS || [],
  culture: window.SOL_CULTURE_NOTES || []
};

const STORAGE_KEY = "sol-espanol-v1";
const DEFAULT_DAILY_GOAL = 20;

/* Keep the correct roleplay reply from always sitting in position A. */
(function arrangeRoleplayOptions() {
  DATA.roleplays.forEach((scenario, scenarioIndex) => {
    scenario.steps.forEach((step, stepIndex) => {
      if (!Array.isArray(step.options) || step.options.length < 2) return;
      const correctIndex = step.options.findIndex((option) => option.ok);
      if (correctIndex < 0) return;
      const target = (scenarioIndex + stepIndex) % step.options.length;
      if (target !== correctIndex) {
        const [correct] = step.options.splice(correctIndex, 1);
        step.options.splice(target, 0, correct);
      }
    });
  });
})();

const LEVELS = [
  { min: 0, es: "Primeros pasos", zh: "刚刚起步", cefr: "A0" },
  { min: 150, es: "Me presento", zh: "能介绍自己", cefr: "A0+" },
  { min: 350, es: "Me defiendo", zh: "日常能应付", cefr: "A1" },
  { min: 650, es: "Conversación", zh: "聊得起来", cefr: "A1+" },
  { min: 1000, es: "En confianza", zh: "自在交流", cefr: "A2" }
];

const STAGE_THEMES = {
  1: { bg: "#f7e3b4", ink: "#745017", color: "#f2b63f" },
  2: { bg: "#f5d6c9", ink: "#8b3d26", color: "#e25a33" },
  3: { bg: "#dce7d3", ink: "#3a513b", color: "#3b5845" },
  4: { bg: "#dce4e1", ink: "#263b35", color: "#13251f" }
};

function freshDay() {
  return { minutes: 0, xp: 0, cards: 0, lessons: 0, speaking: 0, grammar: 0, roleplay: 0 };
}

function freshState() {
  return {
    version: 1,
    name: "",
    avatarStyle: "sun",
    dailyGoal: DEFAULT_DAILY_GOAL,
    dialogueRate: 1,
    autoShowChinese: true,
    reduceMotion: false,
    xp: 0,
    streak: 0,
    lastStudyDate: null,
    completedLessons: [],
    lessonScores: {},
    lessonProgress: {},
    cards: {},
    favorites: [],
    grammarRead: [],
    spoken: {},
    roleplays: {},
    activity: {}
  };
}

function loadState() {
  const base = freshState();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return base;
    const saved = JSON.parse(raw);
    const merged = { ...base, ...saved };
    merged.name = typeof merged.name === "string" ? merged.name : "";
    merged.avatarStyle = ["sun", "olive", "marine"].includes(merged.avatarStyle) ? merged.avatarStyle : "sun";
    merged.dailyGoal = [10, 15, 20, 30, 45].includes(Number(merged.dailyGoal)) ? Number(merged.dailyGoal) : DEFAULT_DAILY_GOAL;
    merged.dialogueRate = [0.9, 1, 1.12].includes(Number(merged.dialogueRate)) ? Number(merged.dialogueRate) : 1;
    merged.autoShowChinese = merged.autoShowChinese !== false;
    merged.reduceMotion = merged.reduceMotion === true;
    merged.xp = Number.isFinite(Number(merged.xp)) ? Math.max(0, Number(merged.xp)) : 0;
    merged.streak = Number.isFinite(Number(merged.streak)) ? Math.max(0, Number(merged.streak)) : 0;
    merged.completedLessons = Array.isArray(merged.completedLessons) ? merged.completedLessons.map(Number).filter(Boolean) : [];
    merged.favorites = Array.isArray(merged.favorites) ? merged.favorites : [];
    merged.grammarRead = Array.isArray(merged.grammarRead) ? merged.grammarRead : [];
    merged.lessonScores = merged.lessonScores && typeof merged.lessonScores === "object" ? merged.lessonScores : {};
    merged.lessonProgress = merged.lessonProgress && typeof merged.lessonProgress === "object" ? merged.lessonProgress : {};
    merged.cards = merged.cards && typeof merged.cards === "object" ? merged.cards : {};
    merged.spoken = merged.spoken && typeof merged.spoken === "object" ? merged.spoken : {};
    merged.roleplays = merged.roleplays && typeof merged.roleplays === "object" ? merged.roleplays : {};
    merged.activity = merged.activity && typeof merged.activity === "object" ? merged.activity : {};
    return merged;
  } catch (error) {
    return base;
  }
}

let state = loadState();

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    /* Private mode / quota: the session still works, it just won't persist. */
  }
}

/* ---------- Utilities ---------- */

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[character]));
}

function icon(name, className = "") {
  return `<svg class="icon ${className}" aria-hidden="true"><use href="#i-${name}"></use></svg>`;
}

function pad2(number) {
  return String(number).padStart(2, "0");
}

function localDateKey(date = new Date()) {
  return `${date.getFullYear()}-${pad2(date.getMonth() + 1)}-${pad2(date.getDate())}`;
}

function dateFromKey(key) {
  const [year, month, day] = key.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function dayDifference(fromKey, toKey) {
  const from = dateFromKey(fromKey);
  const to = dateFromKey(toKey);
  return Math.round((to.getTime() - from.getTime()) / 86400000);
}

function daysAgo(count) {
  const date = new Date();
  date.setHours(12, 0, 0, 0);
  date.setDate(date.getDate() - count);
  return date;
}

function dayOfYear(date = new Date()) {
  const start = new Date(date.getFullYear(), 0, 0);
  return Math.floor((date - start) / 86400000);
}

function normalizeText(value) {
  return String(value ?? "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[¿?¡!.,;:()"'“”‘’]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function todayRecord() {
  return state.activity[localDateKey()] || freshDay();
}

function displayStreak() {
  if (!state.lastStudyDate) return 0;
  const difference = dayDifference(state.lastStudyDate, localDateKey());
  return difference <= 1 ? state.streak : 0;
}

function getLevel() {
  let index = 0;
  LEVELS.forEach((level, levelIndex) => {
    if (state.xp >= level.min) index = levelIndex;
  });
  const current = LEVELS[index];
  const next = LEVELS[index + 1] || null;
  const span = next ? next.min - current.min : 1;
  const progress = next ? Math.min(100, Math.round(((state.xp - current.min) / span) * 100)) : 100;
  return { ...current, number: index + 1, next, progress };
}

function getCefrCoverage() {
  const count = state.completedLessons.length;
  if (count >= 12) return "A2";
  if (count >= 8) return "A1+";
  if (count >= 4) return "A1";
  return "A0";
}

function getLesson(id) {
  return DATA.lessons.find((lesson) => Number(lesson.id) === Number(id)) || null;
}

function getNextLesson() {
  const sorted = [...DATA.lessons].sort((a, b) => a.id - b.id);
  return sorted.find((lesson) => !state.completedLessons.includes(lesson.id)) || sorted[sorted.length - 1];
}

function getNextLessonAfter(id) {
  return DATA.lessons.find((lesson) => lesson.id === Number(id) + 1) || null;
}

const LESSON_STEP_NAMES = ["对话", "核心句", "单词 & 语法", "练习 & 开口"];

function getResumeInfo() {
  const completed = new Set(state.completedLessons);
  const inProgress = Object.entries(state.lessonProgress || {})
    .map(([id, saved]) => {
      const lesson = getLesson(id);
      const step = Math.max(0, Math.min(3, Number(saved?.step) || 0));
      return { lesson, saved, step };
    })
    .filter((item) => item.lesson && !completed.has(item.lesson.id) && item.step > 0)
    .sort((a, b) => Number(b.saved?.updatedAt || 0) - Number(a.saved?.updatedAt || 0));

  if (inProgress.length) {
    const active = inProgress[0];
    return { lesson: active.lesson, step: active.step, inProgress: true };
  }
  return { lesson: getNextLesson(), step: 0, inProgress: false };
}

function getStage(id) {
  return DATA.stages.find((stage) => stage.id === Number(id)) || null;
}

function stageLessons(stageId) {
  return DATA.lessons.filter((lesson) => lesson.stage === Number(stageId));
}

function buildDeck() {
  const deck = [];
  DATA.lessons.forEach((lesson) => {
    lesson.vocab.forEach((word, index) => {
      deck.push({
        id: `v${lesson.id}-${index}`,
        es: word.es,
        zh: word.zh,
        pron: word.pron,
        pos: word.pos,
        example: word.example,
        exampleZh: word.exampleZh,
        lessonId: lesson.id,
        lessonTitle: lesson.title,
        lessonEs: lesson.esTitle,
        stage: lesson.stage
      });
    });
  });
  return deck;
}

const DECK = buildDeck();

function dueCards(stage = "all") {
  const now = Date.now();
  return DECK.filter((card) => {
    if (stage !== "all" && card.stage !== Number(stage)) return false;
    const cardState = state.cards[card.id];
    return cardState && cardState.seen && Number(cardState.due || 0) <= now;
  }).sort((a, b) => Number(state.cards[a.id]?.due || 0) - Number(state.cards[b.id]?.due || 0));
}

function newCards(stage = "all") {
  return DECK.filter((card) => {
    if (stage !== "all" && card.stage !== Number(stage)) return false;
    return !state.cards[card.id]?.seen;
  });
}

function masteredCount() {
  return DECK.filter((card) => Number(state.cards[card.id]?.box || 0) >= 3).length;
}

function completedCount() {
  return state.completedLessons.length;
}

function roleplayCompletedCount() {
  return Object.values(state.roleplays).filter((entry) => Number(entry.completions || 0) > 0).length;
}

function taskSummary() {
  const day = todayRecord();
  const tasks = [
    { id: "cards", label: "单词热身", done: Number(day.cards || 0) > 0, href: "#/tarjetas", icon: "cards", time: "2–5 MIN", title: "复习今天的词卡", desc: "一组最多 10 张，先清到期，再学新词。" },
    { id: "lesson", label: "情景课", done: Number(day.lessons || 0) > 0, href: "#/leccion/__NEXT__", icon: "chat", time: "10 MIN", title: "学一个真实场景", desc: "听对话、拆句型、做小测，最后说出口。" },
    { id: "speaking", label: "开口", done: Number(day.speaking || 0) > 0, href: "#/pronunciacion", icon: "mic", time: "3 MIN", title: "跟读 3 句", desc: "让嘴巴先记住节奏，别只在心里默念。" }
  ];
  const resume = getResumeInfo();
  const next = resume.lesson;
  tasks[1].href = `#/leccion/${next.id}`;
  tasks[1].title = `情景课 · ${next.title}`;
  tasks[1].desc = resume.inProgress
    ? `已保存到第 ${resume.step + 1} 步（${LESSON_STEP_NAMES[resume.step]}），接着上次继续。`
    : next.subtitle;
  return tasks;
}

function getDailyPhrase() {
  if (!DATA.phrases.length) return null;
  return DATA.phrases[dayOfYear() % DATA.phrases.length];
}

function getDailyCulture() {
  if (!DATA.culture.length) return null;
  return DATA.culture[dayOfYear() % DATA.culture.length];
}

function addStudy({ xp = 0, minutes = 0, cards = 0, lessons = 0, speaking = 0, grammar = 0, roleplay = 0 } = {}) {
  const key = localDateKey();
  if (!state.activity[key]) state.activity[key] = freshDay();
  const day = state.activity[key];
  const previous = state.lastStudyDate;
  if (previous !== key) {
    if (previous && dayDifference(previous, key) === 1) state.streak = Math.max(1, state.streak) + 1;
    else state.streak = 1;
    state.lastStudyDate = key;
  }
  day.xp = Number(day.xp || 0) + xp;
  day.minutes = Number((Number(day.minutes || 0) + minutes).toFixed(1));
  day.cards = Number(day.cards || 0) + cards;
  day.lessons = Number(day.lessons || 0) + lessons;
  day.speaking = Number(day.speaking || 0) + speaking;
  day.grammar = Number(day.grammar || 0) + grammar;
  day.roleplay = Number(day.roleplay || 0) + roleplay;
  state.xp += xp;
  saveState();
  updateChrome();
}

function reviewInterval(box) {
  const days = [1, 2, 4, 8, 16, 30];
  return days[Math.max(0, Math.min(days.length - 1, box))] * 86400000;
}

/* ---------- Dates & page meta ---------- */

function spanishDate() {
  const formatted = new Intl.DateTimeFormat("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long"
  }).format(new Date());
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}

const ROUTE_META = {
  inicio: { nav: "inicio", kicker: "HOY · 今天", title: "今天", document: "今天" },
  mapa: { nav: "mapa", kicker: "TU CAMINO · 学习地图", title: "学习地图", document: "学习地图" },
  leccion: { nav: "mapa", kicker: "LECCIÓN · 情景课", title: "情景课", document: "情景课" },
  tarjetas: { nav: "tarjetas", kicker: "VOCABULARIO · 单词卡", title: "单词卡", document: "单词卡" },
  frases: { nav: "frases", kicker: "FRASES · 随身短语", title: "随身短语", document: "随身短语" },
  pronunciacion: { nav: "pronunciacion", kicker: "PRONUNCIACIÓN · 发音", title: "发音实验室", document: "发音实验室" },
  gramatica: { nav: "gramatica", kicker: "GRAMÁTICA · 语法", title: "语法锦囊", document: "语法锦囊" },
  practica: { nav: "practica", kicker: "CONVERSACIÓN · 实战", title: "情景实战", document: "情景实战" },
  perfil: { nav: "perfil", kicker: "MI ESPACIO · 个人中心", title: "个人中心", document: "个人中心" },
  progreso: { nav: "progreso", kicker: "MI PROGRESO · 进度", title: "我的进度", document: "我的进度" }
};

function updateChrome() {
  const today = todayRecord();
  const goal = state.dailyGoal || DEFAULT_DAILY_GOAL;
  const percent = Math.min(100, Math.round((Number(today.minutes || 0) / goal) * 100));
  const minutes = Math.round(Number(today.minutes || 0));
  const streak = displayStreak();
  const level = getLevel();
  const initial = (state.name || "S").trim().charAt(0).toUpperCase() || "S";

  const dateEl = $("#topbar-date");
  if (dateEl) dateEl.textContent = spanishDate();

  const ring = $("#goal-ring");
  if (ring) ring.style.setProperty("--p", String(percent));

  const goalMinutes = $("#goal-minutes");
  if (goalMinutes) goalMinutes.textContent = `${minutes} / ${goal} 分钟`;

  const topbarGoal = $("#topbar-goal");
  if (topbarGoal) topbarGoal.innerHTML = `<span class="topbar-goal-dot"></span> 今日 ${minutes} / ${goal} 分钟`;

  const streakIcon = icon("flame");
  ["#topbar-streak", "#mobile-streak"].forEach((selector) => {
    const el = $(selector);
    if (!el) return;
    el.innerHTML = `${streakIcon} ${selector === "#topbar-streak" ? `连续 ${streak} 天` : streak}`;
  });

  $$("#topbar-avatar, #sidebar-avatar").forEach((el) => { el.textContent = initial; });
  const sidebarName = $("#sidebar-name");
  if (sidebarName) sidebarName.textContent = state.name ? `Hola, ${state.name}` : "同学，加油";
  const sidebarLevel = $("#sidebar-level");
  if (sidebarLevel) sidebarLevel.textContent = `Nivel ${pad2(level.number)} · ${level.zh}`;

  const meta = ROUTE_META[currentRoute.name] || ROUTE_META.inicio;
  const kicker = $("#topbar-kicker");
  if (kicker) kicker.textContent = currentRoute.name === "leccion" ? `LECCIÓN ${pad2(Number(currentRoute.param) || 1)}` : meta.kicker;
  document.title = `${meta.document} · SOL 西语日常`;
}

function setActiveNav(nav) {
  $$("[data-nav]").forEach((link) => {
    const active = link.dataset.nav === nav;
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  const mobileMe = $('.mobile-nav-item[data-nav="perfil"]');
  if (mobileMe && (nav === "perfil" || nav === "progreso")) {
    mobileMe.classList.add("active");
    mobileMe.setAttribute("aria-current", "page");
  }
}

function closeSidebar() {
  const sidebar = $("#sidebar");
  const backdrop = $("#sidebar-backdrop");
  const button = $("#mobile-menu-btn");
  if (sidebar) sidebar.classList.remove("is-open");
  if (backdrop) backdrop.classList.remove("is-open");
  if (button) button.setAttribute("aria-expanded", "false");
}

function openSidebar() {
  const sidebar = $("#sidebar");
  const backdrop = $("#sidebar-backdrop");
  const button = $("#mobile-menu-btn");
  if (sidebar) sidebar.classList.add("is-open");
  if (backdrop) backdrop.classList.add("is-open");
  if (button) button.setAttribute("aria-expanded", "true");
}

/* ---------- Toast & modal ---------- */

let toastTimer = null;

function showToast(message, type = "default") {
  const region = $("#toast-region");
  if (!region) return;
  const toast = document.createElement("div");
  toast.className = `toast ${type === "error" ? "is-error" : type === "success" ? "is-success" : ""}`;
  toast.innerHTML = `${icon(type === "error" ? "x" : type === "success" ? "check" : "sparkles")}<span>${escapeHtml(message)}</span>`;
  region.appendChild(toast);
  window.setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(6px)";
    toast.style.transition = "opacity .2s ease, transform .2s ease";
    window.setTimeout(() => toast.remove(), 230);
  }, 3400);
  if (toastTimer) window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {}, 0);
}

let lastFocusedElement = null;

function openModal(content, label = "对话框") {
  const root = $("#modal-root");
  if (!root) return;
  lastFocusedElement = document.activeElement;
  root.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true" aria-label="${escapeHtml(label)}">
      <button class="icon-btn modal-close" data-action="close-modal" aria-label="关闭">${icon("x")}</button>
      ${content}
    </div>`;
  root.classList.add("is-open");
  document.body.classList.add("modal-open");
  const focusable = root.querySelector("button, a, input, select");
  if (focusable) window.setTimeout(() => focusable.focus(), 30);
}

function closeModal() {
  const root = $("#modal-root");
  if (!root) return;
  root.classList.remove("is-open");
  root.innerHTML = "";
  document.body.classList.remove("modal-open");
  if (lastFocusedElement instanceof HTMLElement) {
    lastFocusedElement.focus({ preventScroll: true });
  }
  lastFocusedElement = null;
}

/* ---------- Speech synthesis ---------- */

let availableVoices = [];
let ttsWarningShown = false;

function loadVoices() {
  if (!("speechSynthesis" in window)) return;
  availableVoices = window.speechSynthesis.getVoices() || [];
}

function speakText(text, rate = 0.88, button = null) {
  if (!("speechSynthesis" in window)) {
    showToast("当前浏览器不支持语音朗读，请换用最新版 Chrome 或 Edge。", "error");
    return;
  }
  try {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(String(text));
    utterance.lang = "es-ES";
    utterance.rate = Math.min(1.2, Math.max(0.5, Number(rate) || 0.88));
    utterance.pitch = 1;
    const voice = availableVoices.find((item) => /^es-ES/i.test(item.lang))
      || availableVoices.find((item) => /^es/i.test(item.lang));
    if (voice) utterance.voice = voice;
    else if (!ttsWarningShown && availableVoices.length) {
      ttsWarningShown = true;
      showToast("没有找到西班牙语语音包，发音可能不准确。可在系统设置中安装西班牙语语音。");
    }
    if (button) {
      button.classList.add("is-speaking");
      utterance.onend = () => button.classList.remove("is-speaking");
      utterance.onerror = () => button.classList.remove("is-speaking");
      window.setTimeout(() => button.classList.remove("is-speaking"), 4000);
    }
    window.speechSynthesis.speak(utterance);
  } catch (error) {
    showToast("朗读暂时不可用，请稍后再试。", "error");
  }
}

function speakButton(text, extraClass = "") {
  return `<button class="speak-btn ${extraClass}" data-speak="${escapeHtml(text)}" aria-label="朗读：${escapeHtml(text)}">${icon("volume")}</button>`;
}

/* ---------- Local Spanish audio (recorded neural es-ES voice) ---------- */

const AUDIO_MANIFEST = window.SOL_AUDIO || { dialogues: {}, roleplayNpc: {}, roleplayOptions: {} };
let singleAudio = null;
let singleAudioButton = null;
let dialoguePlayer = null;

function dialogueAudioPaths(lessonId) {
  const paths = AUDIO_MANIFEST.dialogues?.[String(lessonId)];
  return Array.isArray(paths) ? paths : [];
}

function dialogueAudioPath(lessonId, lineIndex) {
  return dialogueAudioPaths(lessonId)[lineIndex] || "";
}

function roleplayNpcAudioPath(scenarioId, stepIndex) {
  const paths = AUDIO_MANIFEST.roleplayNpc?.[scenarioId];
  return Array.isArray(paths) ? paths[stepIndex] || "" : "";
}

function roleplayOptionAudioPath(scenarioId, text) {
  return AUDIO_MANIFEST.roleplayOptions?.[scenarioId]?.[text] || "";
}

function audioButton(src, label, extraClass = "") {
  if (!src) return speakButton(label, extraClass);
  return `<button class="speak-btn audio-btn ${extraClass}" data-audio="${escapeHtml(src)}" data-fallback="${escapeHtml(label)}" aria-label="播放西语语音：${escapeHtml(label)}">${icon("volume")}</button>`;
}

function stopSingleAudio() {
  if (singleAudio) {
    singleAudio.onended = null;
    singleAudio.onerror = null;
    try {
      singleAudio.pause();
      singleAudio.currentTime = 0;
    } catch (error) { /* noop */ }
  }
  if (singleAudioButton) singleAudioButton.classList.remove("is-speaking");
  singleAudioButton = null;
}

function stopDialoguePlayer() {
  if (!dialoguePlayer) return;
  const player = dialoguePlayer;
  dialoguePlayer = null;
  if (player.timer) window.clearTimeout(player.timer);
  try {
    player.audio.pause();
    player.audio.onended = null;
    player.audio.onerror = null;
    player.audio.currentTime = 0;
  } catch (error) { /* noop */ }
  if (player.button) {
    player.button.classList.remove("is-playing");
    const label = player.button.querySelector(".dialogue-play-label");
    if (label) label.textContent = "连播对话";
  }
}

function stopAllAudio() {
  stopSingleAudio();
  stopDialoguePlayer();
  if ("speechSynthesis" in window) {
    try { window.speechSynthesis.cancel(); } catch (error) { /* noop */ }
  }
}

function audioFallback(text, button) {
  if (!text) {
    showToast("音频加载失败，请稍后再试。", "error");
    return;
  }
  showToast("本地对话音频加载失败，暂时使用系统语音。", "error");
  speakText(text, 0.9, button);
}

function playAudioFile(src, button = null, fallbackText = "") {
  if (!src) {
    audioFallback(fallbackText, button);
    return;
  }
  stopAllAudio();
  if (!singleAudio) singleAudio = new Audio();
  const audio = singleAudio;
  let failed = false;
  audio.onended = null;
  audio.onerror = null;
  audio.pause();
  audio.src = src;
  audio.currentTime = 0;
  audio.playbackRate = Number(state.dialogueRate) || 1;
  singleAudioButton = button || null;
  if (button) button.classList.add("is-speaking");

  const cleanup = () => {
    if (singleAudioButton === button) {
      if (button) button.classList.remove("is-speaking");
      singleAudioButton = null;
    }
  };
  const fail = () => {
    if (failed) return;
    failed = true;
    cleanup();
    audioFallback(fallbackText, button);
  };
  audio.onended = cleanup;
  audio.onerror = fail;
  const playPromise = audio.play();
  if (playPromise && typeof playPromise.catch === "function") playPromise.catch(fail);
}

function playDialogueSequence(lesson, button) {
  if (!lesson) return;
  if (dialoguePlayer && dialoguePlayer.lessonId === lesson.id) {
    stopAllAudio();
    return;
  }
  stopAllAudio();
  const paths = dialogueAudioPaths(lesson.id).filter(Boolean);
  if (!paths.length) {
    showToast("这一课的对话音频还没有生成。", "error");
    return;
  }
  const player = {
    lessonId: lesson.id,
    audio: new Audio(),
    button,
    index: 0,
    timer: null
  };
  dialoguePlayer = player;
  if (button) {
    button.classList.add("is-playing");
    const label = button.querySelector(".dialogue-play-label");
    if (label) label.textContent = "停止连播";
  }

  const playNext = () => {
    if (dialoguePlayer !== player) return;
    if (player.index >= paths.length) {
      stopAllAudio();
      showToast("对话播放完毕。可以再听一遍，或点击单句跟读。", "success");
      return;
    }
    const audio = player.audio;
    audio.onended = null;
    audio.onerror = null;
    try { audio.pause(); } catch (error) { /* noop */ }
    audio.src = paths[player.index];
    audio.currentTime = 0;
    audio.playbackRate = Number(state.dialogueRate) || 1;
    audio.onended = () => {
      if (dialoguePlayer !== player) return;
      player.index += 1;
      player.timer = window.setTimeout(playNext, 360);
    };
    audio.onerror = () => {
      if (dialoguePlayer !== player) return;
      stopAllAudio();
      showToast("连播中断：有音频文件未能加载。请逐句重试。", "error");
    };
    const promise = audio.play();
    if (promise && typeof promise.catch === "function") {
      promise.catch(() => {
        if (dialoguePlayer !== player) return;
        stopAllAudio();
        showToast("浏览器阻止了连播，请逐句点击播放。", "error");
      });
    }
  };
  playNext();
}

/* ---------- Router ---------- */

let currentRoute = { name: "inicio", param: null };
let activeRouteKey = "";
let routeRenderCount = 0;

function parseHash() {
  const raw = (window.location.hash || "#/inicio").replace(/^#\/?/, "");
  const parts = raw.split("/").filter(Boolean);
  const name = parts[0] || "inicio";
  const param = parts[1] || null;
  if (!ROUTE_META[name]) return { name: "inicio", param: null };
  return { name, param };
}

function routeKey(route) {
  return `${route.name}/${route.param || ""}`;
}

function renderRouteView() {
  switch (currentRoute.name) {
    case "inicio": return renderHome();
    case "mapa": return renderMap();
    case "leccion": return renderLesson();
    case "tarjetas": return renderCards();
    case "frases": return renderPhrases();
    case "pronunciacion": return renderPronunciation();
    case "gramatica": return renderGrammar();
    case "practica": return renderPractice();
    case "perfil": return renderProfile();
    case "progreso": return renderProgress();
    default: return renderHome();
  }
}

function renderView({ animate = false, preserveScroll = false, scrollTarget = null } = {}) {
  const view = $("#view");
  if (!view) return;
  const scrollY = window.scrollY;
  const html = renderRouteView();
  view.innerHTML = `<div class="view-inner${animate ? " route-enter" : ""}">${html}</div>`;
  updateChrome();
  if (scrollTarget) {
    const target = $(scrollTarget);
    if (target) {
      window.requestAnimationFrame(() => target.scrollIntoView({ behavior: "smooth", block: "start" }));
      return;
    }
  }
  if (preserveScroll) window.scrollTo(0, scrollY);
}

function routeToHash() {
  const route = parseHash();
  const key = routeKey(route);
  const isNewRoute = key !== activeRouteKey;
  if (route.name === "leccion") {
    const lesson = getLesson(route.param);
    if (!lesson) {
      if (isNewRoute) {
        window.location.hash = "#/mapa";
        return;
      }
    }
  }
  if (isNewRoute) stopAllAudio();
  currentRoute = route;
  activeRouteKey = key;
  if (isNewRoute) onEnterRoute(route);
  const meta = ROUTE_META[route.name] || ROUTE_META.inicio;
  setActiveNav(meta.nav);
  closeSidebar();
  const resourcesTarget = route.name === "progreso" && route.param === "recursos";
  renderView({ animate: isNewRoute, scrollTarget: resourcesTarget ? "#resources" : null });
  if (isNewRoute) {
    routeRenderCount += 1;
    if (!resourcesTarget) window.scrollTo({ top: 0, behavior: "auto" });
    const view = $("#view");
    if (view) {
      try { view.focus({ preventScroll: true }); } catch (error) { /* noop */ }
    }
  }
}

function navigate(path) {
  window.location.hash = path.startsWith("#") ? path : `#/${path}`;
}

/* ---------- Home view ---------- */

function renderHome() {
  const resume = getResumeInfo();
  const next = resume.lesson;
  const completed = completedCount();
  const allDone = completed >= DATA.lessons.length;
  const tasks = taskSummary();
  const doneCount = tasks.filter((task) => task.done).length;
  const today = todayRecord();
  const goal = state.dailyGoal || DEFAULT_DAILY_GOAL;
  const minutes = Math.round(Number(today.minutes || 0));
  const goalPct = Math.min(100, Math.round((minutes / goal) * 100));
  const dailyPhrase = getDailyPhrase();
  const culture = getDailyCulture();
  const rawName = state.name ? String(state.name) : "";
  const streak = displayStreak();
  const dialogueLineCount = DATA.lessons.reduce((sum, lesson) => sum + lesson.dialogue.length, 0);
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Buenos días" : hour < 20 ? "Buenas tardes" : "Buenas noches";
  const heroCta = allDone
    ? "复习最后一课"
    : resume.inProgress
      ? `继续第 ${next.id} 课 · 第 ${resume.step + 1} 步`
      : completed
        ? `继续第 ${next.id} 课`
        : "开始第 1 课";
  const continueCta = allDone ? "再复习一次" : resume.inProgress ? `从第 ${resume.step + 1} 步继续` : "继续学习";

  const week = [];
  for (let offset = 6; offset >= 0; offset -= 1) {
    const date = daysAgo(offset);
    const key = localDateKey(date);
    const record = state.activity[key] || freshDay();
    const weekday = new Intl.DateTimeFormat("zh-CN", { weekday: "short" }).format(date).replace("周", "");
    week.push({
      key,
      label: offset === 0 ? "今" : weekday,
      minutes: Math.round(Number(record.minutes || 0)),
      isToday: offset === 0
    });
  }
  const weekTotal = week.reduce((sum, day) => sum + day.minutes, 0);
  const weekActive = week.filter((day) => day.minutes > 0).length;
  const weekMax = Math.max(10, ...week.map((day) => day.minutes));

  const taskMarkup = tasks.map((task) => `
    <a class="home-task${task.done ? " done" : ""}" href="${task.href}">
      <span class="home-task-icon">${icon(task.icon)}</span>
      <span class="home-task-copy">
        <strong>${escapeHtml(task.title)}</strong>
        <small>${task.done ? "今天已经完成" : escapeHtml(task.desc)}</small>
      </span>
      <span class="home-task-go">${task.done ? `${icon("check")} 已完成` : `${task.time} ${icon("arrow-right")}`}</span>
    </a>`).join("");

  const weekBars = week.map((day) => `
    <div class="week-col${day.isToday ? " is-today" : ""}">
      <div class="week-col-track"><i style="height:${day.minutes ? Math.max(6, Math.round((day.minutes / weekMax) * 100)) : 4}%"></i></div>
      <span>${escapeHtml(day.label)}</span>
    </div>`).join("");

  const stageCards = DATA.stages.map((stage) => {
    const lessons = stageLessons(stage.id);
    const stageDone = lessons.filter((lesson) => state.completedLessons.includes(lesson.id)).length;
    const pct = lessons.length ? Math.round((stageDone / lessons.length) * 100) : 0;
    const theme = STAGE_THEMES[stage.id] || STAGE_THEMES[1];
    return `
      <a class="home-stage" href="#/mapa" style="--stage-color:${theme.color}">
        <div class="home-stage-top">
          <span class="home-stage-number">ETAPA ${stage.roman}</span>
          <span class="home-stage-level">${escapeHtml(stage.level)} · ${escapeHtml(stage.weeks)}</span>
        </div>
        <h3>${escapeHtml(stage.label)}</h3>
        <span class="home-stage-es">${escapeHtml(stage.es)}</span>
        <p class="home-stage-desc">${escapeHtml(stage.desc)}</p>
        <div class="home-stage-foot">
          <div class="progress"><span style="width:${pct}%"></span></div>
          <span>${stageDone}/${lessons.length}</span>
        </div>
      </a>`;
  }).join("");

  const tools = [
    { href: "#/frases", icon: "book", title: "随身短语", desc: "90 句，随时查、随时听" },
    { href: "#/pronunciacion", icon: "audio", title: "发音实验室", desc: "治好 rr、ñ、j 和重音" },
    { href: "#/gramatica", icon: "grammar", title: "语法锦囊", desc: "只学对话里用得上的语法" },
    { href: "#/practica", icon: "chat", title: "情景实战", desc: "把学过的话放回对话里" }
  ].map((tool) => `
    <a class="home-tool" href="${tool.href}">
      <span class="home-tool-icon">${icon(tool.icon)}</span>
      <span class="home-tool-copy"><strong>${escapeHtml(tool.title)}</strong><span>${escapeHtml(tool.desc)}</span></span>
      ${icon("arrow-up-right")}
    </a>`).join("");

  return `
    <header class="home-head">
      <div class="home-head-copy">
        <span class="home-kicker">
          <span class="home-kicker-dot"></span>
          ${greeting}${rawName ? `, ${escapeHtml(rawName)}` : ""}
          <span class="home-kicker-sep">/</span>
          8 周日常交流路线
        </span>
        <h1>今天，<span>说一点西语。</span></h1>
        <p>${completed
          ? `你已经完成 ${completed} 个生活场景。今天也留一点时间，把西语放进真实对话里。`
          : "每天 20 分钟，用 16 个真实生活场景，把西语练成能马上说出口的话。零基础也能从今天开始。"}</p>
      </div>
      <div class="home-head-status">
        <div class="home-head-ring" style="--p:${goalPct}" aria-label="今日学习目标完成 ${goalPct}%">
          <div><strong>${minutes}<small>/${goal}</small></strong><span>今日分钟</span></div>
        </div>
        <div class="home-head-streak">
          <span>${icon("flame")} 连续学习</span>
          <strong>${streak}<small>天</small></strong>
          <a href="#/progreso">查看进度 ${icon("arrow-right")}</a>
        </div>
      </div>
    </header>

    <div class="home-bento">
      <article class="home-hero">
        <div class="home-hero-copy">
          <span class="home-label">DE «HOLA» A CONVERSACIÓN</span>
          <h2>从一句 <span class="home-hola">Hola</span>，<br>到聊完一个晚上。</h2>
          <p>不是背完一本语法书，而是把真实场景练成第二反应。听、说、选、用，一次完成。</p>
          <div class="home-hero-actions">
            <a class="btn btn-primary" href="#/leccion/${next.id}">${icon("play")} ${heroCta}</a>
            <a class="home-link" href="#/mapa">看看 8 周路线 ${icon("arrow-up-right")}</a>
          </div>
          <div class="home-stats">
            <div class="home-stat"><strong>16</strong><span>真实场景</span></div>
            <div class="home-stat"><strong>${dialogueLineCount}</strong><span>句对话语音</span></div>
            <div class="home-stat"><strong>A0 → A2</strong><span>核心路线</span></div>
          </div>
        </div>
        <div class="home-poster" aria-label="今日短语 ¿Qué tal?">
          <div class="poster-sun"></div>
          <div class="poster-orbit"></div>
          <div class="poster-arch"></div>
          <div class="poster-card">
            <div class="poster-label">FRASE DEL DÍA · 今日一句</div>
            <div class="poster-es">¿Qué tal?</div>
            <div class="poster-zh">你好吗？最近怎么样？</div>
            <div class="poster-pron">克 · 塔尔 · 最常用的万能寒暄</div>
            <div class="poster-actions">
              <button class="poster-play" data-speak="¿Qué tal?" aria-label="朗读 ¿Qué tal?">${icon("play")}</button>
              <span>点击听发音 · 全对话 es-ES 语音</span>
            </div>
          </div>
          <div class="poster-note">Poco a poco.<span>一步一步来。</span></div>
          <span class="poster-coords">MADRID · 40.4° N</span>
        </div>
      </article>

      <aside class="home-route">
        <div class="home-panel-head">
          <div><span class="home-label">HOY · 今天</span><h2>3 个小任务</h2></div>
          <span class="home-badge">${doneCount}/3</span>
        </div>
        <div class="home-route-progress"><span style="width:${(doneCount / 3) * 100}%"></span></div>
        <div class="home-task-list">${taskMarkup}</div>
        <div class="home-route-foot">
          <span>今天已学 ${minutes} 分钟</span>
          <button data-action="open-settings">调整目标 ${icon("arrow-right")}</button>
        </div>
      </aside>

      <section class="home-continue">
        <div class="home-panel-top"><span>CONTINUAR · 继续</span><span>已完成 ${completed}/${DATA.lessons.length}</span></div>
        <div class="home-continue-main">
          <span class="home-continue-number">${pad2(next.id)}</span>
          <div class="home-continue-copy">
            <h3>${escapeHtml(next.title)}</h3>
            <span>${escapeHtml(next.esTitle)}</span>
            <p>${resume.inProgress
              ? `上次停在第 ${resume.step + 1} 步 · ${escapeHtml(LESSON_STEP_NAMES[resume.step])}，已经为你保存。`
              : `${escapeHtml(next.subtitle)} 约 ${next.minutes} 分钟。`}</p>
          </div>
        </div>
        <div class="home-continue-bottom">
          <div class="home-continue-progress-row"><span>学习地图进度</span><span>${Math.round((completed / DATA.lessons.length) * 100)}%</span></div>
          <div class="progress"><span style="width:${(completed / DATA.lessons.length) * 100}%"></span></div>
          <a class="btn btn-sm btn-sun" href="#/leccion/${next.id}">${continueCta} ${icon("arrow-right")}</a>
        </div>
      </section>

      <aside class="home-phrase">
        <div class="home-phrase-top">
          <span class="home-label">LA FRASE DEL DÍA</span>
          <span class="chip">${escapeHtml(DATA.categories.find((category) => category.id === dailyPhrase.cat)?.label || "随身短语")}</span>
        </div>
        <div class="home-phrase-es">${escapeHtml(dailyPhrase.es)}</div>
        <div class="home-phrase-zh">${escapeHtml(dailyPhrase.zh)}</div>
        <div class="home-phrase-pron">${escapeHtml(dailyPhrase.pron)}</div>
        <div class="home-phrase-foot">
          <span style="color:rgba(255,249,237,.52);font-size:8px;">今天就带走这一句。</span>
          ${speakButton(dailyPhrase.es)}
        </div>
      </aside>

      <aside class="home-week">
        <div class="home-week-head">
          <div><span class="home-label">ESTA SEMANA · 本周</span><h2>保持一点节奏</h2></div>
          <div class="home-week-total">${weekTotal}<small> 分钟</small></div>
        </div>
        <div class="home-week-bars" aria-label="最近 7 天学习分钟">${weekBars}</div>
        <div class="home-week-foot">
          <span>${weekActive}/7 天有学习</span>
          <div class="home-week-goal">
            <span>今日 ${minutes}/${goal}</span>
            <div class="progress"><span style="width:${goalPct}%"></span></div>
          </div>
        </div>
      </aside>
    </div>

    <section class="home-roadmap-section">
      <div class="home-section-head">
        <div>
          <span class="home-label">TU CAMINO · 学习路线</span>
          <h2>四个阶段，从开口到聊天</h2>
          <p>不用一次学完。每周 2 个场景，先把最需要的生活脚本练熟。</p>
        </div>
        <a class="home-section-link" href="#/mapa">完整地图 ${icon("arrow-right")}</a>
      </div>
      <div class="home-roadmap-grid">${stageCards}</div>
    </section>

    <section class="home-tools-section">
      <div class="home-section-head">
        <div>
          <span class="home-label">CAJA DE HERRAMIENTAS · 工具箱</span>
          <h2>卡住的时候，来这里</h2>
        </div>
        <a class="home-section-link" href="#/progreso/recursos">免费学习资源 ${icon("arrow-right")}</a>
      </div>
      <div class="home-tools-grid">${tools}</div>
    </section>

    <section class="home-culture">
      <span class="home-culture-icon">${icon("sun")}</span>
      <div class="home-culture-copy">
        <span class="home-label">CULTURA · 文化胶囊</span>
        <h3>${escapeHtml(culture.title)} · ${escapeHtml(culture.zh)}</h3>
        <p>${escapeHtml(culture.body)}</p>
      </div>
      <a class="home-culture-link" href="#/progreso/recursos">继续探索 ${icon("arrow-up-right")}</a>
    </section>`;
}


/* ---------- Learning map ---------- */

function renderMap() {
  const completed = completedCount();
  const total = DATA.lessons.length;
  const overall = Math.round((completed / total) * 100);
  const resume = getResumeInfo();
  const next = resume.lesson;

  const stageBlocks = DATA.stages.map((stage) => {
    const lessons = stageLessons(stage.id);
    const stageDone = lessons.filter((lesson) => state.completedLessons.includes(lesson.id)).length;
    const theme = STAGE_THEMES[stage.id] || STAGE_THEMES[1];
    const stagePct = lessons.length ? Math.round((stageDone / lessons.length) * 100) : 0;

    const lessonCards = lessons.map((lesson) => {
      const done = state.completedLessons.includes(lesson.id);
      const savedStep = Number(state.lessonProgress?.[lesson.id]?.step || 0);
      const inProgress = !done && savedStep > 0;
      return `
        <a class="lesson-card${done ? " is-done" : ""}" href="#/leccion/${lesson.id}">
          <div class="lesson-card-top">
            <span class="lesson-no">LECCIÓN ${lesson.number}</span>
            ${done ? `<span class="lesson-done-mark" aria-label="已完成">${icon("check")}</span>` : inProgress ? `<span class="chip chip-saffron">第 ${savedStep + 1} 步</span>` : `<span class="chip">${escapeHtml(lesson.level)}</span>`}
          </div>
          <h3>${escapeHtml(lesson.title)}</h3>
          <span class="lesson-card-es">${escapeHtml(lesson.esTitle)}</span>
          <p>${escapeHtml(lesson.subtitle)}</p>
          <div class="lesson-card-foot">
            <span>${icon("clock")} ${lesson.minutes} 分钟 · ${lesson.goals.length} 个目标</span>
            <span>${done ? "复习" : inProgress ? `从第 ${savedStep + 1} 步继续` : "开始"} ${icon("arrow-right")}</span>
          </div>
        </a>`;
    }).join("");

    return `
      <section class="stage-block" style="--stage-bg:${theme.bg};--stage-ink:${theme.ink};" aria-labelledby="stage-${stage.id}-title">
        <aside class="stage-aside">
          <span class="stage-roman">ETAPA ${stage.roman} · ${escapeHtml(stage.weeks)}</span>
          <h2 id="stage-${stage.id}-title">${escapeHtml(stage.label)}</h2>
          <span class="stage-es">${escapeHtml(stage.es)}</span>
          <p>${escapeHtml(stage.desc)}</p>
          <div class="stage-meta">
            <span class="chip">${escapeHtml(stage.level)}</span>
            <span class="chip">${lessons.length} 课</span>
            <span class="chip">约 ${lessons.reduce((sum, lesson) => sum + lesson.minutes, 0)} 分钟</span>
          </div>
          <div class="stage-aside-progress">
            <div class="progress"><span style="width:${stagePct}%;background:${theme.ink}"></span></div>
            <span>${stageDone}/${lessons.length}</span>
          </div>
        </aside>
        <div class="stage-main">${lessonCards}</div>
      </section>`;
  }).join("");

  return `
    <header class="page-head">
      <div class="page-head-copy">
        <span class="eyebrow">TU CAMINO · 学习地图</span>
        <h1>学习地图 <span class="head-es">El camino</span></h1>
        <p>16 个真实场景，按“先能活下来，再能聊起来”的顺序排列。每课 10–12 分钟，建议每周完成 2 课，其余时间用单词卡和跟读巩固。</p>
      </div>
      <div class="page-head-actions">
        <div class="page-head-stat"><strong>${completed}</strong><span>/ ${total} 课完成</span></div>
        <a class="btn btn-primary btn-sm" href="#/leccion/${next.id}">${resume.inProgress ? `从第 ${resume.step + 1} 步继续` : completed ? "继续学习" : "从第 1 课开始"} ${icon("arrow-right")}</a>
      </div>
    </header>

    <section class="map-banner">
      <div>
        <span class="eyebrow">8 SEMANAS · 8 周路线</span>
        <h2>每周 2 个场景，8 周走完日常交流核心。</h2>
        <p>这不是“背完 5000 词”的路线，而是把最常用的 16 个生活脚本练到能反应。学完可覆盖点餐、购物、问路、租房、就医、约朋友等场景，约为 A2 入门交流水平。</p>
      </div>
      <div class="map-banner-stats">
        <div class="map-banner-stat"><strong>${overall}%</strong><span>总进度</span></div>
        <div class="map-banner-stat"><strong>16</strong><span>核心场景</span></div>
        <div class="map-banner-stat"><strong>8</strong><span>建议周数</span></div>
      </div>
    </section>

    ${stageBlocks}

    <div class="stage-end-note">
      ${icon("sparkles")}
      <span><strong>学完全部之后：</strong>用情景实战复习高频场景，再去“我的进度”里打开免费外部资源。真正流利还需要每周 2–3 次真人对话，把这里当你的起跑线。</span>
    </div>`;
}
