/* =========================================================
   SOL · 西语日常 — 个人中心、设置抽屉与轻量庆祝动画
   ========================================================= */

const AVATAR_PALETTES = {
  sun: ["#e08a4f", "#bd4d30"],
  olive: ["#819368", "#43533a"],
  marine: ["#628f99", "#365765"]
};

const SETTINGS_AVATAR_LABELS = {
  sun: "赤陶暖阳",
  olive: "橄榄绿",
  marine: "海盐蓝"
};

function userInitial() {
  return (state.name || "S").trim().charAt(0).toUpperCase() || "S";
}

function applyAppearance() {
  const palette = AVATAR_PALETTES[state.avatarStyle] || AVATAR_PALETTES.sun;
  document.documentElement.style.setProperty("--avatar-a", palette[0]);
  document.documentElement.style.setProperty("--avatar-b", palette[1]);
  document.documentElement.dataset.avatarStyle = state.avatarStyle || "sun";
  document.documentElement.dataset.reduceMotion = state.reduceMotion ? "true" : "false";
}

/* ---------- Settings drawer ---------- */

let settingsLastFocus = null;

function settingsRateLabel(rate = state.dialogueRate) {
  if (Number(rate) < 1) return "慢速 0.9×";
  if (Number(rate) > 1) return "快速 1.1×";
  return "标准 1.0×";
}

function settingsToggle(action, title, description, isOn) {
  return `
    <button class="settings-toggle-row" data-action="${action}" aria-pressed="${isOn}">
      <span class="settings-toggle-copy"><strong>${escapeHtml(title)}</strong><small>${escapeHtml(description)}</small></span>
      <span class="setting-switch${isOn ? " is-on" : ""}" aria-hidden="true"><span></span></span>
    </button>`;
}

function renderSettings() {
  const body = $("#settings-body");
  if (!body) return;
  const level = getLevel();
  const goalOptions = [10, 15, 20, 30, 45].map((value) => `
    <button class="goal-option${Number(state.dailyGoal) === value ? " is-active" : ""}" data-action="settings-goal" data-value="${value}" aria-pressed="${Number(state.dailyGoal) === value}">${value} 分钟</button>`).join("");
  const rateOptions = [
    { value: 0.9, label: "慢速", hint: "0.9×" },
    { value: 1, label: "标准", hint: "1.0×" },
    { value: 1.12, label: "快速", hint: "1.1×" }
  ].map((item) => `
    <button class="speed-option${Number(state.dialogueRate) === item.value ? " is-active" : ""}" data-action="settings-speed" data-value="${item.value}" aria-pressed="${Number(state.dialogueRate) === item.value}">
      <strong>${item.label}</strong><span>${item.hint}</span>
    </button>`).join("");
  const swatches = Object.entries(AVATAR_PALETTES).map(([key, colors]) => `
    <button class="avatar-swatch${state.avatarStyle === key ? " is-active" : ""}" data-action="settings-avatar" data-value="${key}" aria-label="${escapeHtml(SETTINGS_AVATAR_LABELS[key])}" aria-pressed="${state.avatarStyle === key}" style="--swatch-a:${colors[0]};--swatch-b:${colors[1]};">
      ${state.avatarStyle === key ? icon("check") : ""}
    </button>`).join("");

  body.innerHTML = `
    <div class="settings-profile-strip">
      <span class="avatar settings-avatar" id="settings-avatar-preview">${escapeHtml(userInitial())}</span>
      <div>
        <strong id="settings-profile-name">${escapeHtml(state.name || "同学")}</strong>
        <span>${escapeHtml(level.es)} · Nivel ${pad2(level.number)}</span>
      </div>
      <span class="chip chip-saffron">${state.xp} XP</span>
    </div>

    <section class="settings-group">
      <div class="settings-group-head">
        <h3>个人资料</h3>
        <span>你的学习身份</span>
      </div>
      <div class="settings-name-row">
        <label for="drawer-name">怎么称呼你</label>
        <div class="settings-name-input">
          <input id="drawer-name" maxlength="18" placeholder="比如：小林" value="${escapeHtml(state.name)}">
          <button class="btn btn-primary btn-sm" data-action="settings-save-name">保存</button>
        </div>
      </div>
      <div class="settings-subrow">
        <span class="settings-sub-label">头像色调</span>
        <div class="avatar-swatches" aria-label="选择头像色调">${swatches}</div>
      </div>
    </section>

    <section class="settings-group">
      <div class="settings-group-head">
        <h3>学习目标</h3>
        <span>每天留一点时间给自己</span>
      </div>
      <div class="settings-subrow settings-subrow-top">
        <span class="settings-sub-label">每日目标</span>
        <div class="goal-options">${goalOptions}</div>
      </div>
    </section>

    <section class="settings-group">
      <div class="settings-group-head">
        <h3>学习偏好</h3>
        <span>这些会立即生效</span>
      </div>
      <div class="settings-subrow settings-subrow-top">
        <span class="settings-sub-label">对话语速</span>
        <div class="speed-options">${rateOptions}</div>
      </div>
      <div class="settings-divider"></div>
      ${settingsToggle("settings-toggle-chinese", "默认显示中文", "进入新课时自动展开中文翻译。", state.autoShowChinese !== false)}
      ${settingsToggle("settings-toggle-motion", "减少界面动效", "关闭入场、庆祝等装饰性动画。", state.reduceMotion === true)}
    </section>

    <section class="settings-group">
      <div class="settings-group-head">
        <h3>数据</h3>
        <span>只属于这台设备</span>
      </div>
      <div class="settings-data-actions">
        <button class="settings-data-btn" data-action="settings-export">${icon("download")}<span><strong>导出学习进度</strong><small>下载 JSON 留档</small></span></button>
        <button class="settings-data-btn is-danger" data-action="reset-request">${icon("rotate")}<span><strong>清空学习数据</strong><small>课程、词卡和成就会重置</small></span></button>
      </div>
    </section>

    <p class="settings-footnote">${icon("check")} 所有设置自动保存在此浏览器，不会上传。</p>
    <button class="btn btn-secondary settings-done" data-action="close-settings">完成设置</button>
  `;
}

function syncSettingsUI() {
  const level = getLevel();
  $$('[data-action="settings-goal"]').forEach((button) => {
    const active = Number(button.dataset.value) === Number(state.dailyGoal);
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  $$('[data-action="settings-speed"]').forEach((button) => {
    const active = Number(button.dataset.value) === Number(state.dialogueRate);
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  $$('[data-action="settings-avatar"]').forEach((button) => {
    const active = button.dataset.value === state.avatarStyle;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
    button.innerHTML = active ? icon("check") : "";
  });
  $$('[data-action="settings-toggle-chinese"], [data-action="settings-toggle-motion"]').forEach((button) => {
    const isChinese = button.dataset.action === "settings-toggle-chinese";
    const active = isChinese ? state.autoShowChinese !== false : state.reduceMotion === true;
    button.setAttribute("aria-pressed", String(active));
    const switchEl = button.querySelector(".setting-switch");
    if (switchEl) switchEl.classList.toggle("is-on", active);
  });
  const preview = $("#settings-avatar-preview");
  if (preview) preview.textContent = userInitial();
  const miniName = $("#settings-profile-name");
  if (miniName) miniName.textContent = state.name || "同学";
  const stripChip = $(".settings-profile-strip .chip");
  if (stripChip) stripChip.textContent = `${state.xp} XP`;
  const levelHint = $(".settings-profile-strip div span");
  if (levelHint) levelHint.textContent = `${level.es} · Nivel ${pad2(level.number)}`;
}

function refreshViewAfterSettings() {
  updateChrome();
  if (["inicio", "perfil", "progreso", "leccion"].includes(currentRoute.name)) {
    renderView({ preserveScroll: true });
  }
}

function openSettings() {
  const layer = $("#settings-layer");
  if (!layer) return;
  stopAllAudio();
  closeSidebar();
  closeModal();
  settingsLastFocus = document.activeElement;
  renderSettings();
  layer.classList.add("is-open");
  layer.setAttribute("aria-hidden", "false");
  document.body.classList.add("settings-open");
  const close = layer.querySelector('[data-action="close-settings"]');
  if (close) window.setTimeout(() => close.focus(), 80);
}

function closeSettings() {
  const layer = $("#settings-layer");
  if (!layer || !layer.classList.contains("is-open")) return;
  layer.classList.remove("is-open");
  layer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("settings-open");
  if (settingsLastFocus instanceof HTMLElement) {
    settingsLastFocus.focus({ preventScroll: true });
  }
  settingsLastFocus = null;
}

function exportProgress() {
  const payload = {
    app: "SOL 西语日常",
    exportedAt: new Date().toISOString(),
    version: 1,
    state
  };
  try {
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    const date = new Date();
    anchor.href = url;
    anchor.download = `sol-spanish-progress-${date.getFullYear()}-${pad2(date.getMonth() + 1)}-${pad2(date.getDate())}.json`;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    showToast("学习进度已导出为 JSON。", "success");
  } catch (error) {
    showToast("导出失败，请检查浏览器下载权限。", "error");
  }
}

function handleSettingsAction(action, element) {
  switch (action) {
    case "open-settings":
      openSettings();
      return true;
    case "close-settings":
      closeSettings();
      return true;
    case "settings-save-name": {
      const input = $("#drawer-name");
      const value = input ? input.value.trim().slice(0, 18) : "";
      state.name = value;
      saveState();
      updateChrome();
      syncSettingsUI();
      refreshViewAfterSettings();
      showToast(value ? `名字已更新为 ${value}。` : "名字已清空。", "success");
      return true;
    }
    case "settings-avatar": {
      const value = element.dataset.value;
      if (!AVATAR_PALETTES[value]) return true;
      state.avatarStyle = value;
      saveState();
      applyAppearance();
      updateChrome();
      syncSettingsUI();
      refreshViewAfterSettings();
      return true;
    }
    case "settings-goal": {
      const value = Number(element.dataset.value);
      if (!value) return true;
      state.dailyGoal = value;
      saveState();
      syncSettingsUI();
      refreshViewAfterSettings();
      showToast(`每日目标已设为 ${value} 分钟。`, "success");
      return true;
    }
    case "settings-speed": {
      const value = Number(element.dataset.value);
      if (![0.9, 1, 1.12].includes(value)) return true;
      stopAllAudio();
      state.dialogueRate = value;
      saveState();
      syncSettingsUI();
      refreshViewAfterSettings();
      showToast(`对话语速：${settingsRateLabel(value)}。`);
      return true;
    }
    case "settings-toggle-chinese":
      state.autoShowChinese = !(state.autoShowChinese !== false);
      if (lessonView) lessonView.showChinese = state.autoShowChinese;
      saveState();
      syncSettingsUI();
      refreshViewAfterSettings();
      showToast(state.autoShowChinese ? "新课程会默认显示中文。" : "新课程会先隐藏中文。");
      return true;
    case "settings-toggle-motion":
      state.reduceMotion = !(state.reduceMotion === true);
      saveState();
      applyAppearance();
      syncSettingsUI();
      showToast(state.reduceMotion ? "已减少界面动效。" : "已恢复普通动效。");
      return true;
    case "settings-export":
      exportProgress();
      return true;
    default:
      return false;
  }
}

/* ---------- Personal center ---------- */

function heatmapData() {
  const today = new Date();
  today.setHours(12, 0, 0, 0);
  const mondayOffset = (today.getDay() + 6) % 7;
  const start = new Date(today);
  start.setDate(today.getDate() - 21 - mondayOffset);
  const days = [];
  for (let index = 0; index < 28; index += 1) {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    const key = localDateKey(date);
    const record = state.activity[key] || freshDay();
    const minutes = Math.round(Number(record.minutes || 0));
    const isFuture = date > today;
    let level = 0;
    if (!isFuture && minutes > 0) level = 1;
    if (!isFuture && minutes >= 5) level = 2;
    if (!isFuture && minutes >= 15) level = 3;
    if (!isFuture && minutes >= 30) level = 4;
    days.push({
      key,
      date,
      minutes,
      isFuture,
      level,
      label: `${date.getMonth() + 1}月${date.getDate()}日`
    });
  }
  return days;
}

function profileAchievementValue(achievement) {
  if (achievement.type === "lessons") return completedCount();
  if (achievement.type === "streak") return Math.max(displayStreak(), state.streak);
  if (achievement.type === "mastered") return masteredCount();
  if (achievement.type === "speaking") return Object.keys(state.spoken).length;
  if (achievement.type === "roleplay") return roleplayCompletedCount();
  return 0;
}

function renderProfile() {
  const level = getLevel();
  const streak = displayStreak();
  const completed = completedCount();
  const mastered = masteredCount();
  const spoken = Object.keys(state.spoken).length;
  const coverage = getCefrCoverage();
  const today = todayRecord();
  const goal = state.dailyGoal || DEFAULT_DAILY_GOAL;
  const todayMinutes = Math.round(Number(today.minutes || 0));
  const resume = getResumeInfo();
  const next = resume.lesson;
  const displayName = state.name || "同学";
  const favoritePhrases = state.favorites
    .map((id) => DATA.phrases.find((phrase) => phrase.id === id))
    .filter(Boolean)
    .slice(0, 4);
  const heatmapDays = heatmapData();
  const activeDays = heatmapDays.filter((day) => !day.isFuture && day.minutes > 0).length;
  const heatmapMinutes = heatmapDays.filter((day) => !day.isFuture).reduce((sum, day) => sum + day.minutes, 0);
  const unlocked = DATA.achievements.map((achievement) => ({
    ...achievement,
    value: profileAchievementValue(achievement),
    unlocked: profileAchievementValue(achievement) >= achievement.target
  })).sort((a, b) => Number(b.unlocked) - Number(a.unlocked));
  const achievementCards = unlocked.slice(0, 4).map((achievement) => `
    <div class="profile-achievement${achievement.unlocked ? " is-unlocked" : ""}">
      <span class="profile-achievement-icon">${icon(achievement.icon)}</span>
      <div><strong>${escapeHtml(achievement.title)}</strong><span>${achievement.unlocked ? "已解锁" : `${Math.min(achievement.value, achievement.target)} / ${achievement.target}`}</span></div>
    </div>`).join("");

  const heatmapCells = heatmapDays.map((day) => `
    <span class="heat-cell heat-level-${day.level}${day.isFuture ? " is-future" : ""}" role="img" aria-label="${escapeHtml(day.label)}，学习 ${day.minutes} 分钟" title="${escapeHtml(day.label)} · ${day.minutes} 分钟"></span>`).join("");
  const favoriteCards = favoritePhrases.length
    ? favoritePhrases.map((phrase) => `
      <div class="profile-favorite">
        <div class="profile-favorite-copy">
          <span class="profile-favorite-cat">${escapeHtml(DATA.categories.find((cat) => cat.id === phrase.cat)?.label || "短语")}</span>
          <strong>${escapeHtml(phrase.es)}</strong>
          <span>${escapeHtml(phrase.zh)}</span>
        </div>
        ${speakButton(phrase.es)}
      </div>`).join("")
    : `<div class="profile-empty">
        <span class="profile-empty-icon">${icon("star")}</span>
        <p>还没有收藏的短语。<br>在“随身短语”里点星星，把想带走的句子留在这里。</p>
        <a class="btn btn-secondary btn-sm" href="#/frases">去翻短语</a>
      </div>`;

  return `
    <section class="profile-hero">
      <div class="profile-sun" aria-hidden="true"></div>
      <div class="profile-orbit" aria-hidden="true"></div>
      <div class="profile-hero-copy">
        <span class="eyebrow">MI ESPACIO · 个人中心</span>
        <div class="profile-identity">
          <span class="avatar profile-avatar" aria-hidden="true">${escapeHtml(userInitial())}</span>
          <div>
            <h1>Hola, <em>${escapeHtml(displayName)}</em>.</h1>
            <p>${completed
              ? `你已经完成 ${completed} 个生活场景。今天也留一点时间，把西语放进真实对话里。`
              : "你的西语旅程刚刚开始。先完成第 1 课，再回来看看自己的节奏。"}</p>
          </div>
        </div>
        <div class="profile-chips">
          <span class="chip chip-saffron">${streak} 天连续</span>
          <span class="chip">CEFR ${coverage}</span>
          <span class="chip">今日 ${todayMinutes} / ${goal} 分钟</span>
        </div>
        <div class="profile-actions">
          <a class="btn btn-primary" href="#/leccion/${next.id}">${resume.inProgress ? `从第 ${resume.step + 1} 步继续` : "继续学习"} ${icon("arrow-right")}</a>
          <button class="btn btn-secondary" data-action="open-settings">${icon("settings")} 打开设置</button>
        </div>
      </div>
      <div class="profile-hero-card">
        <div class="profile-card-label">${icon("sparkles")} TU NIVEL · 学习等级</div>
        <strong>${escapeHtml(level.es)}</strong>
        <span>${escapeHtml(level.zh)} · Nivel ${pad2(level.number)} · ${coverage}</span>
        <div class="profile-level-progress"><span style="width:${level.progress}%"></span></div>
        <div class="profile-level-meta"><span>${state.xp} XP</span><span>${level.next ? `还差 ${Math.max(0, level.next.min - state.xp)} XP` : "最高等级"}</span></div>
        <div class="profile-goal-ring" style="--p:${Math.min(100, Math.round((todayMinutes / goal) * 100))}">
          <div><strong>${Math.min(100, Math.round((todayMinutes / goal) * 100))}%</strong><span>今日目标</span></div>
        </div>
      </div>
    </section>

    <div class="profile-stat-grid">
      <div class="profile-stat"><span>${icon("flame")}</span><strong>${streak}</strong><small>连续学习天数</small></div>
      <div class="profile-stat"><span>${icon("map")}</span><strong>${completed}<em>/${DATA.lessons.length}</em></strong><small>情景课完成</small></div>
      <div class="profile-stat"><span>${icon("cards")}</span><strong>${mastered}</strong><small>单词卡掌握</small></div>
      <div class="profile-stat"><span>${icon("mic")}</span><strong>${spoken}</strong><small>句开口练习</small></div>
    </div>

    <div class="profile-grid">
      <section class="profile-panel profile-heatmap-panel">
        <div class="profile-panel-head">
          <div><span class="eyebrow">TU RITMO · 学习轨迹</span><h2>最近四周</h2></div>
          <div class="profile-panel-meta"><strong>${heatmapMinutes}</strong> 分钟 · ${activeDays} 天有学习</div>
        </div>
        <div class="heatmap-weekdays"><span>一</span><span>二</span><span>三</span><span>四</span><span>五</span><span>六</span><span>日</span></div>
        <div class="heatmap-grid">${heatmapCells}</div>
        <div class="heatmap-legend"><span>少</span><i class="heat-level-1"></i><i class="heat-level-2"></i><i class="heat-level-3"></i><i class="heat-level-4"></i><span>多</span><a href="#/progreso">查看详细数据 ${icon("arrow-right")}</a></div>
      </section>

      <section class="profile-panel profile-preferences">
        <div class="profile-panel-head">
          <div><span class="eyebrow">PREFERENCIAS · 偏好</span><h2>你的学习方式</h2></div>
          <button class="icon-btn" data-action="open-settings" aria-label="修改设置">${icon("settings")}</button>
        </div>
        <div class="preference-list">
          <div class="preference-row"><span>每日目标</span><strong>${goal} 分钟</strong></div>
          <div class="preference-row"><span>对话语速</span><strong>${escapeHtml(settingsRateLabel())}</strong></div>
          <div class="preference-row"><span>默认显示中文</span><strong>${state.autoShowChinese !== false ? "开启" : "关闭"}</strong></div>
          <div class="preference-row"><span>界面动效</span><strong>${state.reduceMotion ? "精简" : "标准"}</strong></div>
        </div>
        <button class="profile-settings-link" data-action="open-settings">${icon("settings")} 管理全部设置 ${icon("arrow-right")}</button>
      </section>

      <section class="profile-panel profile-favorites-panel">
        <div class="profile-panel-head">
          <div><span class="eyebrow">FAVORITOS · 收藏</span><h2>想带走的句子</h2></div>
          <a class="section-link" href="#/frases/favoritos">全部 ${state.favorites.length ? `(${state.favorites.length})` : ""} ${icon("arrow-right")}</a>
        </div>
        <div class="profile-favorites">${favoriteCards}</div>
      </section>

      <section class="profile-panel profile-badges-panel">
        <div class="profile-panel-head">
          <div><span class="eyebrow">LOGROS · 徽章</span><h2>一点点积累</h2></div>
          <a class="section-link" href="#/progreso">全部成就 ${icon("arrow-right")}</a>
        </div>
        <div class="profile-achievements">${achievementCards}</div>
        <p class="profile-note">${icon("sun")} 没有排行榜，也没有别人在看你。你只需要比自己昨天多会一句。</p>
      </section>
    </div>`;
}

/* ---------- Completion celebration ---------- */

function celebrate() {
  if (state.reduceMotion) return;
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const layer = document.createElement("div");
  layer.className = "confetti-layer";
  const colors = ["#d95a3b", "#e7b34a", "#5a6d4c", "#f4d79c", "#e08a6c"];
  for (let index = 0; index < 26; index += 1) {
    const piece = document.createElement("i");
    piece.style.setProperty("--x", `${5 + Math.random() * 90}%`);
    piece.style.setProperty("--r", `${Math.round(Math.random() * 360)}deg`);
    piece.style.setProperty("--d", `${1.4 + Math.random() * 1.1}s`);
    piece.style.setProperty("--delay", `${Math.random() * 0.35}s`);
    piece.style.setProperty("--drift", `${Math.round((Math.random() - 0.5) * 140)}px`);
    piece.style.background = colors[index % colors.length];
    layer.appendChild(piece);
  }
  document.body.appendChild(layer);
  window.setTimeout(() => layer.remove(), 2800);
}
