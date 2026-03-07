// ============================================================
// PYTHON DUNGEON — Logica Principal do Jogo
// ============================================================

// --- Estado do Jogo ---
const STATE = {
  player: null,         // { name, ra }
  currentRoom: 1,       // Sala atual (1-100)
  score: 0,             // Pontuacao total
  wrongAttempts: 0,     // Tentativas erradas na sala atual
  hintUsed: false,      // Dica usada na sala atual?
  roomStartTime: null,  // Quando o aluno entrou na sala
  sessionStartTime: null, // Inicio da sessao
  gameStartTime: null,  // Quando o jogo comecou (apos senha)
  timerInterval: null,  // Interval do timer
};

var GAME_DURATION_MS = 60 * 60 * 1000; // 60 minutos

// --- Login com Nome e RA ---
async function loginWithRA() {
  const nameInput = document.getElementById('login-name');
  const raInput   = document.getElementById('login-ra');
  const name = nameInput.value.trim();
  const ra   = raInput.value.trim();

  if (!name) {
    nameInput.classList.add('shake');
    setTimeout(() => nameInput.classList.remove('shake'), 500);
    showNotification('Digite seu nome completo.', 'error');
    return;
  }
  if (!ra) {
    raInput.classList.add('shake');
    setTimeout(() => raInput.classList.remove('shake'), 500);
    showNotification('Digite seu RA.', 'error');
    return;
  }

  STATE.player = { name, ra };
  STATE.sessionStartTime = new Date().toISOString();
  loadProgress();
  showScreen('password');
}

function logout() {
  stopTimer();
  STATE.player = null;
  STATE.score  = 0;
  STATE.currentRoom = 1;
  showScreen('login');
}

// --- Botao "Cansei" ---
function quitGame() {
  stopTimer();
  saveProgress();
  saveToGoogleSheets();
  showScreen('complete');
  renderCompleteScreen();
}

// --- Timer de 60 minutos ---
function startTimer() {
  STATE.gameStartTime = Date.now();
  updateTimerDisplay();
  STATE.timerInterval = setInterval(updateTimerDisplay, 1000);
}

function stopTimer() {
  if (STATE.timerInterval) {
    clearInterval(STATE.timerInterval);
    STATE.timerInterval = null;
  }
}

function updateTimerDisplay() {
  var elapsed = Date.now() - STATE.gameStartTime;
  var remaining = Math.max(0, GAME_DURATION_MS - elapsed);
  var pct = (elapsed / GAME_DURATION_MS) * 100;
  if (pct > 100) pct = 100;

  // Atualizar barra e posicao do cachorro
  var fill = document.getElementById('timer-fill');
  var dog = document.getElementById('timer-dog');
  var text = document.getElementById('timer-text');

  if (fill) fill.style.width = pct + '%';
  if (dog) dog.style.left = 'calc(' + pct + '% - 20px)';

  // Formatar tempo restante
  var totalSec = Math.ceil(remaining / 1000);
  var min = Math.floor(totalSec / 60);
  var sec = totalSec % 60;
  if (text) text.textContent = (min < 10 ? '0' : '') + min + ':' + (sec < 10 ? '0' : '') + sec;

  // Tempo esgotado
  if (remaining <= 0) {
    stopTimer();
    showNotification('Tempo esgotado!', 'error');
    saveProgress();
    saveToGoogleSheets();
    showScreen('complete');
    renderCompleteScreen();
  }
}

// --- Progresso (localStorage) ---
function saveProgress() {
  if (!STATE.player) return;
  const data = {
    currentRoom: STATE.currentRoom,
    score:       STATE.score,
    updatedAt:   new Date().toISOString()
  };
  localStorage.setItem('dungeon_progress_' + STATE.player.ra, JSON.stringify(data));
}

function loadProgress() {
  if (!STATE.player) return;
  const saved = localStorage.getItem('dungeon_progress_' + STATE.player.ra);
  if (saved) {
    const d = JSON.parse(saved);
    STATE.currentRoom = d.currentRoom || 1;
    STATE.score       = d.score       || 0;
  }
}

// --- Salvar no Google Sheets ---
async function saveToGoogleSheets() {
  const url = CONFIG.GOOGLE_SHEETS_URL;
  if (!url) {
    console.log('[Google Sheets] URL nao configurada. Dados nao enviados.');
    return false;
  }

  const totalPossible = QUESTIONS.reduce((s, q) => s + q.points, 0);
  const pct = Math.round((STATE.score / totalPossible) * 100);

  const payload = {
    nome:       STATE.player.name,
    ra:         STATE.player.ra,
    pontos:     STATE.score,
    totalFases: QUESTIONS.length,
    faseAtual:  STATE.currentRoom > QUESTIONS.length ? QUESTIONS.length : STATE.currentRoom,
    aproveitamento: pct,
    dataInicio: STATE.sessionStartTime,
    dataFim:    new Date().toISOString(),
  };

  try {
    await fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    console.log('[Google Sheets] Dados enviados com sucesso.');
    return true;
  } catch (e) {
    console.error('[Google Sheets] Erro ao enviar:', e);
    return false;
  }
}

// --- Verificacao de Senha ---
function checkPassword() {
  const input    = document.getElementById('class-password');
  const entered  = input.value.trim();
  const btn      = document.getElementById('btn-enter');

  if (!entered) return;

  if (entered === CONFIG.CLASS_PASSWORD) {
    btn.textContent = 'Entrando...';
    btn.classList.add('success');
    setTimeout(() => {
      showScreen('game');
      renderGame();
      startTimer();
    }, 800);
  } else {
    input.classList.add('shake');
    input.value = '';
    setTimeout(() => input.classList.remove('shake'), 500);
    showNotification('Senha incorreta! Verifique com o professor.', 'error');
  }
}

// --- Nucleo do Jogo ---
function getCurrentQuestion() {
  return QUESTIONS[STATE.currentRoom - 1];
}

function normalizeAnswer(ans) {
  return ans.toString().trim().replace(/\s+/g, ' ').toLowerCase();
}

function checkAnswer() {
  const q      = getCurrentQuestion();
  const input  = document.getElementById('answer-input');
  const raw    = input.value.trim();

  if (!raw) {
    input.classList.add('shake');
    setTimeout(() => input.classList.remove('shake'), 400);
    return;
  }

  const userAns   = normalizeAnswer(raw);
  const correct   = normalizeAnswer(q.answer);
  const isCorrect = userAns === correct;

  if (isCorrect) {
    handleCorrectAnswer(q, input);
  } else {
    handleWrongAnswer(input);
  }
}

function handleCorrectAnswer(q, input) {
  let earned = q.points;
  if (STATE.hintUsed) earned = Math.floor(earned * 0.5);

  const elapsed = (Date.now() - STATE.roomStartTime) / 1000;
  if (elapsed <= CONFIG.GAME.SPEED_BONUS_SECONDS && !STATE.hintUsed) {
    earned += CONFIG.GAME.SPEED_BONUS_POINTS;
    showNotification('Resposta rapida! +' + CONFIG.GAME.SPEED_BONUS_POINTS + ' bonus!', 'bonus');
  }

  STATE.score += earned;

  input.classList.add('correct');
  showAnswerFeedback(true, earned, q.explanation);

  markCellDone(STATE.currentRoom);

  saveProgress();

  setTimeout(() => {
    STATE.currentRoom++;
    STATE.wrongAttempts = 0;
    STATE.hintUsed      = false;
    input.classList.remove('correct');

    if (STATE.currentRoom > QUESTIONS.length) {
      stopTimer();
      saveProgress();
      saveToGoogleSheets();
      showScreen('complete');
      renderCompleteScreen();
    } else {
      renderQuestion();
      scrollMapToCell(STATE.currentRoom);
    }
  }, 2000);
}

function handleWrongAnswer(input) {
  STATE.wrongAttempts++;
  input.classList.add('wrong');
  input.value = '';
  setTimeout(() => input.classList.remove('wrong'), 500);

  if (STATE.wrongAttempts >= CONFIG.GAME.AUTO_HINT_AFTER && !STATE.hintUsed) {
    showAnswerFeedback(false, 0, null, true);
  } else {
    showAnswerFeedback(false, 0, null, false);
  }
}

// --- Dica ---
function useHint() {
  const q = getCurrentQuestion();
  if (STATE.hintUsed) return;

  STATE.hintUsed = true;
  STATE.score    = Math.max(0, STATE.score - CONFIG.GAME.HINT_PENALTY);

  const hintBox = document.getElementById('hint-box');
  const hintText = document.getElementById('hint-text');
  hintText.textContent = q.hint;
  hintBox.classList.remove('hidden');

  document.getElementById('btn-hint').disabled = true;
  document.getElementById('btn-hint').textContent = 'Dica usada';

  showNotification('Dica: -' + CONFIG.GAME.HINT_PENALTY + ' pts', 'warning');
  updateScoreDisplay();
}

// --- Renderizacao ---
function renderGame() {
  renderMiniMap();
  renderQuestion();
  updateScoreDisplay();
  updatePlayerHeader();
}

function renderQuestion() {
  const q = getCurrentQuestion();
  if (!q) return;

  STATE.roomStartTime  = Date.now();
  STATE.hintUsed       = false;
  STATE.wrongAttempts  = 0;

  document.getElementById('room-number').textContent    = 'Fase ' + q.id;
  document.getElementById('room-category').textContent  = q.category;
  document.getElementById('room-title').textContent     = q.title;
  document.getElementById('room-phase').textContent     = 'Fase ' + q.phase;
  document.getElementById('room-points').textContent    = q.points + ' pts';
  document.getElementById('question-text').textContent  = q.question;

  renderCode(q);

  const input = document.getElementById('answer-input');
  input.value       = '';
  input.className   = 'answer-input';
  input.placeholder = getPlaceholder(q);

  const hintBox = document.getElementById('hint-box');
  hintBox.classList.add('hidden');
  const btnHint = document.getElementById('btn-hint');
  btnHint.disabled    = false;
  btnHint.textContent = 'Dica';

  document.getElementById('feedback-box').classList.add('hidden');

  const pct = ((q.id - 1) / QUESTIONS.length) * 100;
  document.getElementById('progress-bar-fill').style.width = pct + '%';
  document.getElementById('progress-text').textContent = (q.id - 1) + ' / ' + QUESTIONS.length;

  highlightCurrentCell(q.id);

  setTimeout(() => input.focus(), 100);
}

function renderCode(q) {
  const container = document.getElementById('code-container');

  if (q.type === 'fill_blank') {
    const parts = q.code.split('_____');
    if (parts.length < 2) {
      container.innerHTML = '<pre class="code-block"><code>' + escapeHtml(q.code) + '</code></pre>';
      return;
    }
    container.innerHTML =
      '<div class="code-with-blank">' +
        '<pre class="code-block">' + escapeHtml(parts[0]) + '<span class="blank-highlight">_____</span>' + escapeHtml(parts[1]) + '</pre>' +
        '<div class="blank-label">O que vai aqui?</div>' +
      '</div>';
  } else {
    const highlighted = highlightPython(q.code);
    container.innerHTML = '<pre class="code-block"><code>' + highlighted + '</code></pre>';
  }
}

function getPlaceholder(q) {
  if (q.type === 'fill_print') return 'Digite o que sera impresso...';
  if (q.type === 'fill_blank') return 'Digite o que vai no lugar de _____';
  return 'Sua resposta...';
}

// --- Mini Mapa ---
function renderMiniMap() {
  const grid = document.getElementById('maze-grid');
  grid.innerHTML = '';

  for (let n = 1; n <= QUESTIONS.length; n++) {
    const cell = document.createElement('div');
    cell.className  = 'maze-cell';
    cell.id         = 'cell-' + n;
    cell.title      = 'Fase ' + n;
    cell.dataset.n  = n;

    if (n < STATE.currentRoom)       cell.classList.add('done');
    else if (n === STATE.currentRoom) cell.classList.add('current');
    else                              cell.classList.add('locked');

    const row = Math.floor((n - 1) / 10);
    const col = row % 2 === 0 ? (n - 1) % 10 : 9 - ((n - 1) % 10);
    cell.style.gridRow    = row + 1;
    cell.style.gridColumn = col + 1;

    grid.appendChild(cell);
  }

  const exitCell = document.getElementById('cell-100');
  if (exitCell) exitCell.setAttribute('title', 'Fase 100 — BOSS FINAL!');
}

function markCellDone(n) {
  const cell = document.getElementById('cell-' + n);
  if (!cell) return;
  cell.classList.remove('current');
  cell.classList.add('done');
}

function highlightCurrentCell(n) {
  document.querySelectorAll('.maze-cell.current').forEach(c => {
    c.classList.remove('current');
    if (parseInt(c.dataset.n) < n) c.classList.add('done');
    else c.classList.add('locked');
  });
  const cell = document.getElementById('cell-' + n);
  if (cell) {
    cell.classList.remove('locked', 'done');
    cell.classList.add('current');
  }
}

function scrollMapToCell(n) {
  const cell = document.getElementById('cell-' + n);
  if (cell) cell.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// --- Feedback ---
function showAnswerFeedback(correct, points, explanation, autoHint) {
  const box = document.getElementById('feedback-box');
  const ico = document.getElementById('feedback-icon');
  const txt = document.getElementById('feedback-text');
  const exp = document.getElementById('feedback-explanation');

  box.classList.remove('hidden', 'feedback-correct', 'feedback-wrong');

  if (correct) {
    box.classList.add('feedback-correct');
    ico.textContent = 'V';
    txt.textContent = 'Correto! +' + points + ' pontos';
    exp.textContent = explanation || '';
    exp.style.display = explanation ? 'block' : 'none';
    updateScoreDisplay();
  } else {
    box.classList.add('feedback-wrong');
    ico.textContent = 'X';
    if (autoHint) {
      txt.textContent = 'Ainda nao! Veja a dica abaixo:';
      useHint();
    } else {
      const rem = CONFIG.GAME.AUTO_HINT_AFTER - STATE.wrongAttempts;
      txt.textContent = 'Tente novamente! (' + (rem > 0 ? rem + ' tentativas para dica automatica' : 'use a dica!') + ')';
    }
    exp.style.display = 'none';
  }
}

// --- Tela de Conclusao ---
function renderCompleteScreen() {
  var completedRooms = Math.min(STATE.currentRoom - 1, QUESTIONS.length);
  if (completedRooms < 0) completedRooms = 0;
  var totalPossible = QUESTIONS.reduce(function(s, q) { return s + q.points; }, 0);
  var pct = totalPossible > 0 ? Math.round((STATE.score / totalPossible) * 100) : 0;

  document.getElementById('final-score').textContent   = STATE.score.toLocaleString('pt-BR');
  document.getElementById('final-pct').textContent     = pct + '%';
  document.getElementById('final-name').textContent    = STATE.player?.name || 'Estudante';
  document.getElementById('final-rooms').textContent   = completedRooms + ' / ' + QUESTIONS.length;

  var medal = 'Medal';
  if (pct >= 90) medal = 'Ouro';
  else if (pct >= 75) medal = 'Prata';
  else if (pct >= 60) medal = 'Bronze';
  document.getElementById('final-medal').textContent = medal;

  if (completedRooms >= QUESTIONS.length) {
    launchConfetti();
  }
}

function restartGame() {
  stopTimer();
  STATE.currentRoom   = 1;
  STATE.score         = 0;
  STATE.wrongAttempts = 0;
  STATE.hintUsed      = false;
  STATE.sessionStartTime = new Date().toISOString();
  saveProgress();
  showScreen('game');
  renderGame();
  startTimer();
}

// --- Confetti ---
function launchConfetti() {
  const canvas  = document.getElementById('confetti-canvas');
  const ctx     = canvas.getContext('2d');
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.display = 'block';

  const particles = Array.from({ length: 120 }, () => ({
    x:   Math.random() * canvas.width,
    y:   Math.random() * canvas.height - canvas.height,
    r:   Math.random() * 6 + 3,
    d:   Math.random() * 5 + 1,
    color: 'hsl(' + Math.random() * 360 + ', 80%, 60%)',
    tilt: Math.random() * 10 - 10
  }));

  let frame = 0;
  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.fillStyle = p.color;
      ctx.ellipse(p.x, p.y, p.r, p.r * 0.5, p.tilt, 0, Math.PI * 2);
      ctx.fill();
      p.y += p.d;
      p.tilt += 0.1;
      if (p.y > canvas.height) { p.y = -10; p.x = Math.random() * canvas.width; }
    });
    frame++;
    if (frame < 300) requestAnimationFrame(draw);
    else canvas.style.display = 'none';
  };
  draw();
}

// --- UI Helpers ---
function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
  document.getElementById('screen-' + name).classList.remove('hidden');

  if (name === 'password' && STATE.player) {
    const el = document.getElementById('welcome-name');
    if (el) el.textContent = STATE.player.name;
  }
}

function updateScoreDisplay() {
  document.querySelectorAll('.score-display').forEach(el => {
    el.textContent = STATE.score.toLocaleString('pt-BR');
  });
}

function updatePlayerHeader() {
  const p = STATE.player;
  if (!p) return;
  document.getElementById('player-name-display').textContent = p.name;
  document.getElementById('player-avatar').style.display = 'none';
}

function showLoading(msg) {
  const el = document.getElementById('loading-overlay');
  el.querySelector('.loading-text').textContent = msg || 'Carregando...';
  el.classList.remove('hidden');
}

function hideLoading() {
  document.getElementById('loading-overlay').classList.add('hidden');
}

function showNotification(msg, type) {
  type = type || 'info';
  const el    = document.createElement('div');
  el.className = 'notification notification-' + type;
  el.textContent = msg;
  document.getElementById('notifications').appendChild(el);
  setTimeout(() => { el.classList.add('fade-out'); setTimeout(() => el.remove(), 400); }, 2500);
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// --- Syntax Highlight Simples (Python) ---
function highlightPython(code) {
  const escaped = escapeHtml(code);
  return escaped
    .replace(/\b(print|input|int|float|str|len|range|True|False|None|and|or|not|in|is|if|else|elif|for|while|def|return|import|from)\b/g,
      '<span class="kw">$1</span>')
    .replace(/(#[^\n]*)/g, '<span class="comment">$1</span>')
    .replace(/(&quot;[^&]*?&quot;|&#039;[^&]*?&#039;)/g, '<span class="str">$1</span>')
    .replace(/\b(\d+\.?\d*)\b/g, '<span class="num">$1</span>');
}

// --- Teclas de Atalho ---
document.addEventListener('keydown', function(e) {
  if (e.key === 'Enter' && document.activeElement.id === 'answer-input') {
    checkAnswer();
  }
  if (e.key === 'Enter' && document.activeElement.id === 'class-password') {
    checkPassword();
  }
  if (e.key === 'Enter' && (document.activeElement.id === 'login-name' || document.activeElement.id === 'login-ra')) {
    loginWithRA();
  }
});

// --- Inicializacao ---
window.addEventListener('DOMContentLoaded', function() {
  document.getElementById('game-title').textContent    = CONFIG.GAME_TITLE;
  document.getElementById('game-subtitle').textContent = CONFIG.GAME_SUBTITLE;
  showScreen('login');
});
