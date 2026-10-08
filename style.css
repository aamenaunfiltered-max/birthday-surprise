/* =========================================================
   CORE
========================================================= */

const TARGET =
  new Date('2026-10-10T00:00:00+05:30');

const SECRET_CODE =
  'infinity1010';

let secretBuffer = '';
let autoOpened = false;

const lockScreen =
  document.getElementById('lockScreen');

const adventure =
  document.getElementById('adventure');

const enterButton =
  document.getElementById('enterButton');

const earlyButton =
  document.getElementById('earlyButton');

const lockNote =
  document.getElementById('lockNote');

const song =
  document.getElementById('song');

const musicToggle =
  document.getElementById('musicToggle');

const chapters =
  [...document.querySelectorAll('.chapter')];


/* =========================================================
   UNLOCK
========================================================= */

function unlockAdventure(){

  if(
    adventure.classList.contains('hidden') === false
  ){
    return;
  }

  lockScreen.classList.add('hidden');

  adventure.classList.remove('hidden');

  window.scrollTo({
    top:0,
    behavior:'instant'
  });

  song.volume=.42;

  song
    .play()
    .catch(() =>
      showToast(
        'Tap the music button once if your browser blocked autoplay. ♫'
      )
    );

  burstHearts(24);

}


/* =========================================================
   SECRET CODE
========================================================= */

function checkSecretCode(key){

  if(
    !key ||
    key.length !== 1
  ){
    return;
  }

  secretBuffer =
    (
      secretBuffer +
      key.toLowerCase()
    ).slice(-SECRET_CODE.length);

  if(
    secretBuffer === SECRET_CODE
  ){

    secretBuffer='';

    showToast(
      'Secret door unlocked. Welcome in. ∞'
    );

    unlockAdventure();

  }

}

document.addEventListener(
  'keydown',
  e => {

    if(e.key === 'Escape'){

      secretBuffer='';

      return;

    }

    if(
      e.ctrlKey ||
      e.metaKey ||
      e.altKey
    ){
      return;
    }

    checkSecretCode(e.key);

  }
);


/* =========================================================
   SECRET INFINITY
========================================================= */

const secretInfinity =
  document.getElementById('secretInfinity');

secretInfinity?.addEventListener(
  'click',
  () =>
    showToast(
      'There is a secret way in. Think infinity. ♡'
    )
);


/* =========================================================
   COUNTDOWN
========================================================= */

function pad(n){

  return String(n).padStart(2,'0');

}

function updateCountdown(){

  const diff =
    TARGET - new Date();

  if(diff <= 0){

    document.getElementById('days').textContent='00';

    document.getElementById('hours').textContent='00';

    document.getElementById('minutes').textContent='00';

    document.getElementById('seconds').textContent='00';

    earlyButton.classList.add('hidden');

    enterButton.classList.remove('hidden');

    lockNote.textContent =
      'The door is open. ♡';

    if(!autoOpened){

      autoOpened=true;

      setTimeout(
        unlockAdventure,
        700
      );

    }

    return;

  }

  const total =
    Math.floor(diff / 1000);

  document.getElementById('days').textContent =
    pad(Math.floor(total / 86400));

  document.getElementById('hours').textContent =
    pad(
      Math.floor(
        total % 86400 / 3600
      )
    );

  document.getElementById('minutes').textContent =
    pad(
      Math.floor(
        total % 3600 / 60
      )
    );

  document.getElementById('seconds').textContent =
    pad(total % 60);

}

updateCountdown();

setInterval(
  updateCountdown,
  1000
);


/* =========================================================
   LOCK BUTTONS
========================================================= */

earlyButton.addEventListener(
  'click',
  () =>
    showToast(
      'Not yet. The countdown is still keeping the secret. ♡'
    )
);

enterButton.addEventListener(
  'click',
  unlockAdventure
);


/* =========================================================
   MUSIC
========================================================= */

musicToggle.addEventListener(
  'click',
  () => {

    if(song.paused){

      song.play();

      musicToggle.innerHTML =
        '♫ <span>Music</span>';

      musicToggle.setAttribute(
        'aria-label',
        'Pause music'
      );

    }else{

      song.pause();

      musicToggle.innerHTML =
        '♫ <span>Paused</span>';

      musicToggle.setAttribute(
        'aria-label',
        'Play music'
      );

    }

  }
);


/* =========================================================
   CHAPTER NAVIGATION
========================================================= */

function goToChapter(index){

  const el =
    chapters.find(
      x =>
        x.dataset.chapter === String(index)
    );

  if(el){

    el.scrollIntoView({
      behavior:'smooth',
      block:'start'
    });

  }

}

document
  .querySelectorAll('.next-btn')
  .forEach(
    btn =>
      btn.addEventListener(
        'click',
        () =>
          goToChapter(
            btn.dataset.next
          )
      )
  );


/* =========================================================
   INFINITY PORTAL
========================================================= */

const infinityPortal =
  document.getElementById('infinityPortal');

if(infinityPortal){

  infinityPortal.addEventListener(
    'click',
    () => {

      goToChapter(1);

      burstHearts(12);

    }
  );

}


/* =========================================================
   INFINITY REVEAL
========================================================= */

const infinityReveal =
  document.getElementById('infinityReveal');

if(infinityReveal){

  infinityReveal.addEventListener(
    'click',
    () => {

      const m =
        document.getElementById(
          'infinityMessage'
        );

      m.textContent =
        'TECH gave us the beginning. SCHBANG became part of the comeback. The infinity is the part where the story keeps going. ∞';

      m.classList.add('revealed');

      document
        .querySelector(
          '.tech-schbang-lockup'
        )
        ?.classList.add('lit');

      burstHearts(16);

    }
  );

}


/* =========================================================
   TECH / SCHBANG CARDS
========================================================= */

const techCard =
  document.getElementById('techCard');

const schbangCard =
  document.getElementById('schbangCard');

techCard?.addEventListener(
  'click',
  () => {

    const message =
      document.getElementById(
        'infinityMessage'
      );

    message.textContent =
      'TECHINFINITY: the place where a flirt, a hand in a river and a lot of talking became the beginning of us. ♡';

    message.classList.add('revealed');

    burstHearts(8);

  }
);

schbangCard?.addEventListener(
  'click',
  () => {

    const message =
      document.getElementById(
        'infinityMessage'
      );

    message.textContent =
      'SCHBANG: the chapter that helped bring two people back to the same story. Still here. Still strong. Still fighting against all odds. ∞';

    message.classList.add('revealed');

    burstHearts(8);

  }
);


/* =========================================================
   REPLAY
========================================================= */

document
  .getElementById('replay')
  .addEventListener(
    'click',
    () =>
      goToChapter(0)
  );


/* =========================================================
   TOAST
========================================================= */

function showToast(message){

  const t =
    document.getElementById('toast');

  t.textContent=message;

  t.classList.add('show');

  clearTimeout(
    showToast.timer
  );

  showToast.timer =
    setTimeout(
      () =>
        t.classList.remove('show'),
      2500
    );

}


/* =========================================================
   FLOATING HEARTS
========================================================= */

function burstHearts(count=12){

  const holder =
    document.getElementById('hearts');

  for(
    let i=0;
    i<count;
    i++
  ){

    const h =
      document.createElement('span');

    h.className='float-heart';

    h.textContent =
      Math.random()>.35
        ? '♡'
        : '∞';

    h.style.left =
      (Math.random()*100)+'%';

    h.style.animationDuration =
      (3+Math.random()*4)+'s';

    h.style.animationDelay =
      (Math.random()*1.4)+'s';

    h.style.fontSize =
      (14+Math.random()*20)+'px';

    holder.appendChild(h);

    setTimeout(
      () => h.remove(),
      8500
    );

  }

}

setInterval(
  () => burstHearts(2),
  1800
);


/* =========================================================
   QUIZ
========================================================= */

const quiz=[

  {
    q:'When I say “I\'M ENDING IT” during a fight, what happens next?',
    a:[
      'We actually break up',
      'We stop talking for three days',
      'We are giggling again five minutes later',
      'I move to another country'
    ],
    c:2,
    r:'Correct. Our dramatic era has a very short runtime. 😂'
  },

  {
    q:'What is our most reliable healthy-eating strategy?',
    a:[
      'Meal prep',
      'Salad',
      'MCD after promising no junk',
      'Drinking more water'
    ],
    c:2,
    r:'Exactly. The MCD plot twist arrives every single time. 🍔'
  },

  {
    q:'What kind of dates are the most “us”?',
    a:[
      'Perfectly planned six months ahead',
      'Random “let\'s go” plans that become wholesome days',
      'Only expensive dates',
      'Staying home and never leaving'
    ],
    c:1,
    r:'Correct. We somehow turn random plans into the best memories. ♡'
  },

  {
    q:'What is my favourite thing about the way you love me?',
    a:[
      'You notice the tiny things',
      'You treat me like a princess',
      'You make me laugh',
      'All of the above'
    ],
    c:3,
    r:'Obviously all of the above. I was not going to make this one difficult. 🥹'
  },

  {
    q:'What is our relationship\'s unofficial third wheel?',
    a:[
      'The office',
      'A calendar',
      'Diet Coke',
      'A sensible adult'
    ],
    c:2,
    r:'DIET COKE. It has been involved in too many of our important decisions. 🥤'
  },

  {
    q:'Which description sounds most like us?',
    a:[
      'Calm, organised and predictable',
      'Slightly chaotic, ridiculously funny and very loving',
      'Always serious',
      'We never annoy each other'
    ],
    c:1,
    r:'That\'s us. Fighting, laughing, roasting, loving, repeating. ♡'
  }

];

let qIndex=0;
let qScore=0;

const questionText =
  document.getElementById(
    'questionText'
  );

const answers =
  document.getElementById(
    'answers'
  );

const feedback =
  document.getElementById(
    'quizFeedback'
  );

const nextQuestion =
  document.getElementById(
    'nextQuestion'
  );


function renderQuestion(){

  const q =
    quiz[qIndex];

  document.getElementById(
    'questionCount'
  ).textContent =
    `${pad(qIndex+1)} / ${pad(quiz.length)}`;

  document.getElementById(
    'quizScore'
  ).textContent =
    `${qScore} points`;

  questionText.textContent=q.q;

  answers.innerHTML='';

  feedback.textContent='';

  nextQuestion.classList.add(
    'hidden'
  );

  q.a.forEach(
    (answer,i) => {

      const b =
        document.createElement(
          'button'
        );

      b.className='answer';

      b.textContent=answer;

      b.onclick =
        () =>
          chooseAnswer(i,b);

      answers.appendChild(b);

    }
  );

}


function chooseAnswer(i,button){

  const q =
    quiz[qIndex];

  [...answers.children]
    .forEach(
      b =>
        b.disabled=true
    );

  if(i===q.c){

    qScore++;

    button.classList.add(
      'correct'
    );

  }else{

    button.classList.add(
      'wrong'
    );

    answers.children[
      q.c
    ].classList.add(
      'correct'
    );

  }

  feedback.textContent=q.r;

  nextQuestion.classList.remove(
    'hidden'
  );

  document.getElementById(
    'quizScore'
  ).textContent =
    `${qScore} points`;

}


nextQuestion.addEventListener(
  'click',
  () => {

    qIndex++;

    if(
      qIndex < quiz.length
    ){

      renderQuestion();

    }else{

      finishQuiz();

    }

  }
);


function finishQuiz(){

  document
    .getElementById(
      'quizCard'
    )
    .classList.add(
      'hidden'
    );

  document
    .getElementById(
      'quizResult'
    )
    .classList.remove(
      'hidden'
    );

  document
    .getElementById(
      'finalScore'
    )
    .textContent =
      `${qScore}/${quiz.length}`;

  document
    .getElementById(
      'scoreMessage'
    )
    .textContent =
      qScore===quiz.length
        ? 'HOW DO YOU KNOW EVERYTHING??? 🥹♡'
        : qScore>=4
          ? 'Okayyy, you actually know us. 👀♡'
          : 'We may need a tiny revision class. 😂♡';

  burstHearts(20);

  confetti(45);

}

renderQuestion();


/* =========================================================
   CATCH MY HEART GAME
========================================================= */

const gel = id => document.getElementById(id);

const LEVELS = [
  {
    name:'LEVEL 01 · EASY',
    sub:'Slow objects. Learn the controls.',
    time:20, gap:.95, vmin:130, vmax:170, target:10,
    pool:[['heart',6],['coke',3]]
  },
  {
    name:'LEVEL 02 · DATE MODE',
    sub:'More hearts, Diet Cokes, MCD, ramen.',
    time:22, gap:.8, vmin:160, vmax:220, target:16,
    pool:[['heart',4],['coke',3],['mcd',3],['ramen',3],['flower',1],['inf',.4]]
  },
  {
    name:'LEVEL 03 · RELATIONSHIP MODE',
    sub:'Negative objects start appearing.',
    time:22, gap:.7, vmin:190, vmax:260, target:18,
    pool:[['heart',3],['coke',2],['mcd',2],['ramen',2],['flower',1],['inf',.4],
          ['work',2],['healthy',2],['attitude',1],['talk',.5]]
  },
  {
    name:'LEVEL 04 · SURVIVE US',
    sub:'Everything gets fast. The final object is the ∞.',
    time:24, gap:.5, vmin:280, vmax:390, target:22,
    pool:[['heart',3],['coke',2],['mcd',2],['ramen',2],['flower',1],['inf',.5],
          ['work',2.5],['healthy',2],['attitude',2],['talk',1.5]]
  }
];

const ITEMS = {
  heart:['❤️',1],
  coke:['🥤',2],
  mcd:['🍔',2],
  ramen:['🍜',2],
  flower:['🌸',3],
  inf:['∞',5],
  work:['💼',-2],
  healthy:['🥦',-1],
  attitude:['😤',-3],
  talk:['📱',-5]
};

const game = gel('catchGame');
const player = gel('player');

let G = null;
let items = [];
let raf = 0;
let lastTs = 0;
let playerX = 0;
let arenaW = 0;
let arenaH = 0;
let overlayAction = null;
const keys = { left:false, right:false };


function measure(){
  arenaW = game.clientWidth;
  arenaH = game.clientHeight;
}

function setPlayer(x){
  measure();
  playerX = Math.max(32, Math.min(arenaW - 32, x));
  player.style.left = playerX + 'px';
}

function movePlayer(clientX){
  const rect = game.getBoundingClientRect();
  setPlayer(clientX - rect.left);
}

function gameActive(){
  return G && G.phase !== 'over';
}

game.addEventListener('pointermove', e => {
  if(gameActive()) movePlayer(e.clientX);
});

game.addEventListener('pointerdown', e => {
  if(gameActive()) movePlayer(e.clientX);
});

document.addEventListener('keydown', e => {
  if(!gameActive()) return;
  if(e.key === 'ArrowLeft'){ keys.left = true; e.preventDefault(); }
  if(e.key === 'ArrowRight'){ keys.right = true; e.preventDefault(); }
});

document.addEventListener('keyup', e => {
  if(e.key === 'ArrowLeft') keys.left = false;
  if(e.key === 'ArrowRight') keys.right = false;
});

window.addEventListener('resize', () => {
  if(G) setPlayer(playerX);
});


/* ---------- HUD, banner, overlay ---------- */

function setBest(){
  let best = 0;
  try{ best = Number(localStorage.getItem('birthdayBest') || 0); }catch(e){}
  gel('bestScore').textContent = best;
  return best;
}

function hud(){
  const L = LEVELS[G.level];
  gel('gameLevel').textContent = pad(G.level + 1) + '/04';
  gel('gameScore').textContent = G.total;
  gel('gameTime').textContent =
    G.phase === 'finale' ? '∞' : Math.max(0, Math.ceil(G.time));
  const shown = Math.max(0, G.lv);
  gel('targetLabel').textContent = `GOAL ${Math.min(shown, L.target)} / ${L.target}`;
  const fill = gel('targetFill');
  fill.style.width = Math.min(100, shown / L.target * 100) + '%';
  fill.classList.toggle('met', G.lv >= L.target);
}

function showBanner(title, sub){
  gel('bannerTitle').textContent = title;
  gel('bannerSub').textContent = sub;
  gel('levelBanner').classList.add('show');
}

function hideBanner(){
  gel('levelBanner').classList.remove('show');
}

function showOverlay(title, text, btn, action, mark){
  gel('overlayMark').textContent = mark || '';
  gel('overlayMark').classList.toggle('hidden', !mark);
  gel('overlayTitle').textContent = title;
  gel('overlayText').innerHTML = text;
  gel('overlayBtn').textContent = btn;
  overlayAction = action;
  gel('gameOverlay').classList.remove('hidden');
}

gel('overlayBtn').addEventListener('click', () => {
  gel('gameOverlay').classList.add('hidden');
  if(overlayAction) overlayAction();
});


/* ---------- items ---------- */

function clearItems(){
  items.forEach(i => i.el.remove());
  items = [];
  game.querySelectorAll('.pop').forEach(p => p.remove());
}

function pick(pool){
  const total = pool.reduce((s,p) => s + p[1], 0);
  let r = Math.random() * total;
  for(const [k,w] of pool){
    r -= w;
    if(r <= 0) return k;
  }
  return pool[0][0];
}

function placeItem(it){
  it.el.style.transform =
    `translate(${it.x - it.size/2}px, ${it.y}px)`;
}

function addItem(kind, speed, finale){
  const [sym, pts] = ITEMS[kind];
  const size = finale ? 90 : 36;
  const el = document.createElement('div');
  el.className =
    'item' +
    (pts < 0 ? ' bad' : '') +
    (kind === 'inf' ? ' inf' : '') +
    (finale ? ' finale' : '');
  el.textContent = sym;
  const it = {
    el, kind, pts, size, finale,
    v:speed,
    y:-size,
    x:size/2 + 8 + Math.random() * (arenaW - size - 16)
  };
  placeItem(it);
  game.appendChild(el);
  items.push(it);
}

function pop(x, y, text, bad){
  const p = document.createElement('span');
  p.className = 'pop ' + (bad ? 'bad' : 'good');
  p.textContent = text;
  p.style.left = (x - 14) + 'px';
  p.style.top = (y - 10) + 'px';
  game.appendChild(p);
  setTimeout(() => p.remove(), 800);
}

function caughtItem(it){
  G.total = Math.max(0, G.total + it.pts);
  G.lv += it.pts;
  const label = (it.pts > 0 ? '+' : '−') + Math.abs(it.pts);
  pop(it.x, it.y, label, it.pts < 0);
  if(it.pts < 0){
    game.classList.remove('hit');
    void game.offsetWidth;
    game.classList.add('hit');
  }
  hud();
  if(it.finale) winGame();
}

function moveItems(dt){
  const pTop = arenaH - 16 - 64;
  for(let n = items.length - 1; n >= 0; n--){
    const it = items[n];
    it.y += it.v * dt;
    placeItem(it);

    const hit =
      it.y + it.size > pTop + 10 &&
      it.y < pTop + 54 &&
      Math.abs(it.x - playerX) < 32 + it.size/2 - 6;

    if(hit){
      items.splice(n,1);
      it.el.remove();
      caughtItem(it);
      continue;
    }

    if(it.y > arenaH + 10){
      items.splice(n,1);
      it.el.remove();
      if(it.finale) G.finaleWait = .5;
    }
  }
}


/* ---------- flow ---------- */

function startRun(){
  gel('briefing').classList.add('hidden');
  gel('arena').classList.remove('hidden');
  gel('gameResult').textContent = '';
  setBest();
  measure();
  setPlayer(arenaW / 2);
  G = { level:0, total:0, base:0, lv:0, time:0, spawn:0, phase:'intro', t:0, finaleWait:0 };
  gel('arena').scrollIntoView({ behavior:'smooth', block:'center' });
  beginLevel(0);
  startLoop();
}

function startLoop(){
  if(raf) return;
  lastTs = performance.now();
  raf = requestAnimationFrame(loop);
}

function beginLevel(i){
  const L = LEVELS[i];
  measure();
  clearItems();
  G.level = i;
  G.base = G.total;
  G.lv = 0;
  G.time = L.time;
  G.spawn = .4;
  G.phase = 'intro';
  G.t = 1.9;
  showBanner(L.name, L.sub);
  hud();
}

function loop(ts){
  if(!G || G.phase === 'over'){
    raf = 0;
    return;
  }

  const dt = Math.min((ts - lastTs) / 1000 || 0, .05);
  lastTs = ts;

  if(keys.left) setPlayer(playerX - 560 * dt);
  if(keys.right) setPlayer(playerX + 560 * dt);

  const L = LEVELS[G.level];

  if(G.phase === 'intro'){
    G.t -= dt;
    if(G.t <= 0){
      G.phase = 'play';
      hideBanner();
    }
  }

  else if(G.phase === 'play'){
    G.time -= dt;
    G.spawn -= dt;
    if(G.spawn <= 0){
      addItem(
        pick(L.pool),
        L.vmin + Math.random() * (L.vmax - L.vmin),
        false
      );
      G.spawn = L.gap * (.7 + Math.random() * .6);
    }
    moveItems(dt);
    hud();
    if(G.time <= 0) endLevel();
  }

  else if(G.phase === 'clear'){
    moveItems(dt);
    G.t -= dt;
    if(G.t <= 0) beginLevel(G.level + 1);
  }

  else if(G.phase === 'finaleIntro'){
    G.t -= dt;
    if(G.t <= 0){
      G.phase = 'finale';
      hideBanner();
      hud();
      G.finaleWait = .2;
    }
  }

  else if(G.phase === 'finale'){
    if(!items.length){
      G.finaleWait -= dt;
      if(G.finaleWait <= 0) addItem('inf', 170, true);
    }
    moveItems(dt);
  }

  if(G.phase !== 'over') raf = requestAnimationFrame(loop);
  else raf = 0;
}

function endLevel(){
  const L = LEVELS[G.level];
  clearItems();

  if(G.lv >= L.target){
    if(G.level < 3){
      G.phase = 'clear';
      G.t = 1.7;
      showBanner('LEVEL CLEARED', 'Relationship status: still surviving.');
      confetti(14);
    }else{
      G.phase = 'finaleIntro';
      G.t = 2.2;
      showBanner('ONE LAST THING', 'Catch the ∞.');
    }
    return;
  }

  failLevel();
}

function failLevel(){
  const L = LEVELS[G.level];
  const n = pad(G.level + 1);
  G.phase = 'over';
  const got = Math.max(0, G.lv);
  showOverlay(
    `The relationship did not survive level ${n}.`,
    `You needed ${L.target} points on this level. You got ${got}.`,
    `RETRY LEVEL ${n}`,
    () => {
      G.total = G.base;
      G.phase = 'intro';
      beginLevel(G.level);
      startLoop();
    }
  );
  gel('continueAfterGame').classList.remove('hidden');
}

function winGame(){
  G.phase = 'over';
  clearItems();
  hideBanner();

  const best = Math.max(setBest(), G.total);
  try{ localStorage.setItem('birthdayBest', best); }catch(e){}
  gel('bestScore').textContent = best;

  showOverlay(
    'YOU CAUGHT IT.',
    `Just like you caught my heart. ♡<br><small>Final score ${G.total}</small>`,
    'PLAY AGAIN',
    () => {
      gel('gameResult').textContent = '';
      G = { level:0, total:0, base:0, lv:0, time:0, spawn:0, phase:'intro', t:0, finaleWait:0 };
      beginLevel(0);
      startLoop();
    },
    '∞'
  );

  gel('gameResult').textContent =
    G.total >= 120
      ? `SCORE ${G.total}. Okay, heart thief. ♡`
      : `SCORE ${G.total}. Survived us. ♡`;

  gel('continueAfterGame').classList.remove('hidden');
  confetti(60);
  burstHearts(20);
}

gel('startGame').addEventListener('click', startRun);

gel('continueAfterGame').addEventListener('click', () => goToChapter(5));

setBest();


/* =========================================================
   DIET COKE
========================================================= */

const cokeMessages=[

  'Correct answer: Diet Coke.',

  'This is not a drink anymore. This is relationship lore.',

  'MCD without Diet Coke? Unacceptable.',

  'You may have your Diet Coke. I will continue being your favourite.',

  'Okay. You are officially Diet Coke certified.'

];

let cokeClicks=0;

function cokeSpark(e){

  const poster = document.getElementById('cokePoster');
  const rect = poster.getBoundingClientRect();

  const fromPointer = e && e.clientX;

  const x = fromPointer ? e.clientX - rect.left : rect.width/2;
  const y = fromPointer ? e.clientY - rect.top : rect.height/2;

  for(let i=0;i<6;i++){

    const s = document.createElement('span');

    s.className = 'coke-spark';
    s.textContent = '✦';

    s.style.left = x + 'px';
    s.style.top = y + 'px';

    s.style.setProperty('--dx', (Math.random()*160-80)+'px');
    s.style.setProperty('--dy', (Math.random()*-130-20)+'px');

    poster.appendChild(s);

    setTimeout(() => s.remove(), 900);

  }

}

function tapCoke(e){

  cokeClicks++;

  document.getElementById('cokeCount').textContent =
    String(cokeClicks).padStart(2,'0');

  document.getElementById('cokeMessage').textContent =
    cokeMessages[Math.min(cokeClicks-1, cokeMessages.length-1)];

  document.querySelectorAll('#cokePips i').forEach((p,i) =>
    p.classList.toggle('on', i < cokeClicks)
  );

  const cta = document.getElementById('cokeCta');

  if(cokeClicks >= 5){
    cta.classList.add('done');
    cta.lastChild.textContent = 'Certified';
  }else{
    cta.lastChild.textContent = 'Keep tapping';
  }

  const can = document.getElementById('cokeCan');

  can.classList.add('tapped');

  setTimeout(() => can.classList.remove('tapped'), 220);

  cokeSpark(e);

  if(cokeClicks === 5){

    document.getElementById('cokeFinal').classList.remove('hidden');

    confetti(20);

  }

}

document
  .getElementById('cokeCan')
  .addEventListener('click', tapCoke);


/* =========================================================
   PHOTO SYSTEM
========================================================= */

const IMAGE_PATH =
  'images/';


/*
   ALL 51 PHOTOS

   memory-01.jpg
   memory-02.jpg
   ...
   memory-51.jpg
*/

const ALL_PHOTOS =
  Array.from(
    {length:51},
    (_,i) =>
      `memory-${String(i+1).padStart(2,'0')}.jpg`
  );


/* =========================================================
   MEMORY LANE
========================================================= */

const memoryPhotos =
  ALL_PHOTOS.slice(
    0,
    10
  );

const memoryAnswers =
  Array(10).fill('');

let memoryIndex=0;


const memoryPhoto =
  document.getElementById(
    'memoryPhoto'
  );

const memoryAnswer =
  document.getElementById(
    'memoryAnswer'
  );

const memoryProgress =
  document.getElementById(
    'memoryProgress'
  );

const memoryBar =
  document.getElementById(
    'memoryBar'
  );

const memoryNext =
  document.getElementById(
    'memoryNext'
  );

const memoryFinish =
  document.getElementById(
    'memoryFinish'
  );

const memoryForm =
  document.getElementById(
    'memoryForm'
  );

const memoryContinue =
  document.getElementById(
    'memoryContinue'
  );


function renderMemory(){

  const filename =
    memoryPhotos[
      memoryIndex
    ];

  memoryPhoto.src =
    IMAGE_PATH + filename;

  memoryPhoto.alt =
    `Memory ${memoryIndex+1} of us`;

  memoryProgress.textContent =
    `MEMORY ${String(
      memoryIndex+1
    ).padStart(2,'0')} / 10`;

  memoryBar.style.width =
    `${(memoryIndex+1)*10}%`;

  memoryAnswer.value =
    memoryAnswers[
      memoryIndex
    ] || '';

  memoryPhoto.classList.remove(
    'image-missing'
  );

}


memoryPhoto?.addEventListener(
  'error',
  () => {

    console.error(
      'Could not load:',
      memoryPhoto.src
    );

    showToast(
      `Memory ${memoryIndex+1} image could not be loaded.`
    );

  }
);


memoryAnswer?.addEventListener(
  'input',
  () => {

    memoryAnswers[
      memoryIndex
    ] =
      memoryAnswer.value;

    localStorage.setItem(
      'birthdayMemoryAnswers',
      JSON.stringify(
        memoryAnswers
      )
    );

  }
);


memoryNext?.addEventListener(
  'click',
  () => {

    memoryAnswers[
      memoryIndex
    ] =
      memoryAnswer.value.trim();

    localStorage.setItem(
      'birthdayMemoryAnswers',
      JSON.stringify(
        memoryAnswers
      )
    );


    if(memoryIndex<9){

      memoryIndex++;

      renderMemory();

      window.scrollTo({
        top:
          document
            .querySelector(
              '.memory-lane-chapter'
            )
            .offsetTop + 120,
        behavior:'smooth'
      });

    }else{

      for(
        let i=0;
        i<10;
        i++
      ){

        const field =
          document.getElementById(
            `memory${String(
              i+1
            ).padStart(
              2,
              '0'
            )}Field`
          );

        if(field){

          field.value =
            memoryAnswers[i] ||
            '(left blank)';

        }

      }


      document
        .querySelector(
          '.memory-card'
        )
        ?.classList.add(
          'hidden'
        );

      memoryFinish?.classList.remove(
        'hidden'
      );

      memoryContinue?.classList.remove(
        'hidden'
      );

      confetti(30);

    }

  }
);


memoryForm?.addEventListener(
  'submit',
  e => {

    if(
      location.protocol === 'file:'
    ){

      e.preventDefault();

      showToast(
        'Memory Lane will send your answers once the website is live on GitHub Pages. ♡'
      );

      return;

    }


    for(
      let i=0;
      i<10;
      i++
    ){

      const field =
        document.getElementById(
          `memory${String(
            i+1
          ).padStart(
            2,
            '0'
          )}Field`
        );

      if(field){

        field.value =
          memoryAnswers[i] ||
          '(left blank)';

      }

    }

  }
);


memoryContinue?.addEventListener(
  'click',
  () =>
    goToChapter(7)
);


/* =========================================================
   SCRAPBOOK
========================================================= */

const scrapbook =
  document.getElementById(
    'scrapbook'
  );

const scrapbookPhotos =
  ALL_PHOTOS.slice(
    10
  );


scrapbookPhotos.forEach(
  (filename,index) => {

    const card =
      document.createElement(
        'figure'
      );

    card.className =
      'scrap-card';

    card.style.setProperty(
      '--tilt',
      `${(
        index % 5 - 2
      ) * 1.4}deg`
    );


    const img =
      document.createElement(
        'img'
      );

    img.src =
      IMAGE_PATH + filename;

    img.alt =
      `Memory ${index+11} of us`;

    img.loading='lazy';


    const captions=[

      'one of those days',

      'still laughing',

      'just us',

      'another little moment',

      'proof we were here'

    ];


    const caption =
      document.createElement(
        'figcaption'
      );

    caption.textContent =
      `${captions[
        index % captions.length
      ]} · ${String(
        index+11
      ).padStart(
        2,
        '0'
      )}`;


    card.appendChild(img);

    card.appendChild(caption);

    scrapbook.appendChild(card);

  }
);


/* =========================================================
   START MEMORY LANE
========================================================= */

renderMemory();


/* =========================================================
   CONFETTI
========================================================= */

function confetti(count=30){

  for(
    let i=0;
    i<count;
    i++
  ){

    const c =
      document.createElement(
        'span'
      );

    c.className =
      'confetti-piece';

    c.style.left =
      (Math.random()*100)+'vw';

    c.style.animationDelay =
      (Math.random()*.5)+'s';

    c.style.transform =
      `rotate(${Math.random()*180}deg)`;

    c.style.background =
      [
        '#4c7cff',
        '#dbe5f5',
        '#a9c7ff',
        '#ffffff'
      ][
        Math.floor(
          Math.random()*4
        )
      ];

    document.body.appendChild(c);

    setTimeout(
      () => c.remove(),
      3500
    );

  }

}
