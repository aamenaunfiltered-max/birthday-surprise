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
   DATING DAY HEART MOMENT
========================================================= */

const datingCard =
  document.querySelector('.story-card-3');

if(datingCard){

  const datingObserver =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if(entry.isIntersecting){

            datingCard.classList.add('dating-seen');

            setTimeout(
              () => datingCard.classList.remove('dating-seen'),
              1800
            );

          }

        });

      },
      {threshold:.55}
    );

  datingObserver.observe(datingCard);

}


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

let gameRunning=false;
let gameScore=0;
let gameLevel=0;
let gameTimeLeft=15;
let gameSpawnTimer=null;
let gameTimer=null;
let levelEnding=false;
let finalInfinitySpawned=false;

const game =
  document.getElementById('catchGame');

const player =
  document.getElementById('player');

const levels=[
  {time:15,spawn:700,speed:[2.15,2.9],name:'EASY'},
  {time:15,spawn:560,speed:[1.8,2.55],name:'DATE MODE'},
  {time:15,spawn:440,speed:[1.5,2.2],name:'RELATIONSHIP MODE'},
  {time:15,spawn:340,speed:[1.15,1.8],name:'SURVIVE US'}
];

const goodItems=[
  ['❤️',1,'Heart'],
  ['🥤',2,'Diet Coke'],
  ['🍔',2,'MCD'],
  ['🍜',2,'MOGO Ramen'],
  ['🌸',3,'Flower'],
  ['∞',5,'Infinity']
];

const badItems=[
  ['💼',-2,'Work'],
  ['🥦',-1,'Healthy Food'],
  ['😤',-3,'My Attitude'],
  ['📱',-5,'We Need To Talk']
];

function setPlayer(x){
  if(!game || !player){return;}

  const rect=game.getBoundingClientRect();
  const half=35;
  const px=Math.max(half,Math.min(rect.width-half,x));
  player.style.left=px+'px';
}

function movePlayer(clientX){
  if(!game){return;}
  const rect=game.getBoundingClientRect();
  setPlayer(clientX-rect.left);
}

if(game){
  game.addEventListener('pointermove',e=>{
    if(gameRunning){movePlayer(e.clientX);}
  });

  game.addEventListener('pointerdown',e=>{
    if(gameRunning){movePlayer(e.clientX);}
  });
}

function updateGameHud(){
  document.getElementById('gameLevel').textContent=
    String(gameLevel+1).padStart(2,'0');

  document.getElementById('gameScore').textContent=gameScore;
  document.getElementById('gameTime').textContent=gameTimeLeft;
}

function showGameToast(text){
  const result=document.getElementById('gameResult');
  if(result){result.innerHTML=text;}
}

function clearGameTimers(){
  clearInterval(gameSpawnTimer);
  clearInterval(gameTimer);
  gameSpawnTimer=null;
  gameTimer=null;
}

function clearFallingItems(){
  document.querySelectorAll('#catchGame .falling').forEach(el=>el.remove());
}

function chooseItem(){
  const badChance=Math.min(.18 + gameLevel*.08,.42);
  const useBad=Math.random()<badChance;
  const source=useBad ? badItems : goodItems;
  const item=source[Math.floor(Math.random()*source.length)];
  return {
    symbol:item[0],
    points:item[1],
    name:item[2],
    bad:useBad
  };
}

function spawnItem(forcedItem=null){
  if(!gameRunning || !game || levelEnding){return;}

  const item=forcedItem || chooseItem();
  const el=document.createElement('div');

  el.className='falling';
  el.dataset.points=item.points;
  el.dataset.kind=item.bad?'bad':'good';
  el.dataset.name=item.name;
  el.textContent=item.symbol;
  el.style.left=(4+Math.random()*90)+'%';

  const current=levels[gameLevel];
  const min=current.speed[0];
  const max=current.speed[1];
  const duration=min+Math.random()*(max-min);
  el.style.animationDuration=duration+'s';

  game.appendChild(el);

  const tick=setInterval(()=>{
    if(!el.isConnected){clearInterval(tick);return;}

    const a=el.getBoundingClientRect();
    const b=player.getBoundingClientRect();

    if(
      a.bottom>=b.top &&
      a.left<b.right &&
      a.right>b.left
    ){
      const points=Number(el.dataset.points);
      gameScore+=points;
      updateGameHud();

      if(points>0){
        el.classList.add('caught-good');
        showGameToast(`<small>+${points} · ${el.dataset.name}</small>`);
        burstHearts(points>=3?5:2);
      }else{
        el.classList.add('caught-bad');
        showGameToast(`<small>${points} · ${el.dataset.name}</small>`);
      }

      clearInterval(tick);
      el.remove();
    }
  },35);

  setTimeout(()=>{
    clearInterval(tick);
    el.remove();
  },Math.max(duration*1000+600,1200));
}

function startLevel(){
  levelEnding=false;
  gameTimeLeft=levels[gameLevel].time;
  updateGameHud();

  showGameToast(`<small>LEVEL ${String(gameLevel+1).padStart(2,'0')} · ${levels[gameLevel].name}</small>`);

  gameSpawnTimer=setInterval(()=>spawnItem(),levels[gameLevel].spawn);

  gameTimer=setInterval(()=>{
    gameTimeLeft--;
    updateGameHud();

    if(gameTimeLeft<=0){
      finishLevel();
    }
  },1000);
}

function finishLevel(){
  if(levelEnding){return;}

  levelEnding=true;
  clearGameTimers();
  clearFallingItems();

  if(gameLevel<levels.length-1){
    showGameToast(
      `<small>LEVEL ${String(gameLevel+1).padStart(2,'0')} CLEARED. Next: ${levels[gameLevel+1].name}.</small>`
    );

    setTimeout(()=>{
      if(!gameRunning){return;}
      gameLevel++;
      startLevel();
    },850);

    return;
  }

  spawnFinalInfinity();
}

function spawnFinalInfinity(){
  if(finalInfinitySpawned){return;}

  finalInfinitySpawned=true;
  levelEnding=true;
  clearGameTimers();
  clearFallingItems();

  const infinity={
    symbol:'∞',
    points:5,
    name:'Infinity',
    bad:false
  };

  const el=document.createElement('div');
  el.className='falling final-infinity-item';
  el.dataset.points='5';
  el.dataset.kind='final';
  el.dataset.name='Infinity';
  el.textContent='∞';
  el.style.left='50%';
  el.style.animationDuration='2.8s';
  game.appendChild(el);

  showGameToast('<small>FINAL CHALLENGE · CATCH THE ∞</small>');

  const tick=setInterval(()=>{
    if(!el.isConnected){clearInterval(tick);return;}

    const a=el.getBoundingClientRect();
    const b=player.getBoundingClientRect();

    if(
      a.bottom>=b.top &&
      a.left<b.right &&
      a.right>b.left
    ){
      clearInterval(tick);
      el.remove();
      gameScore+=infinity.points;
      updateGameHud();
      finishGame(true);
    }
  },35);

  setTimeout(()=>{
    clearInterval(tick);
    if(el.isConnected){el.remove();}

    // The infinity is guaranteed again if the first fall is missed.
    if(gameRunning){
      finalInfinitySpawned=false;
      spawnFinalInfinity();
    }
  },3400);
}

function startGame(){
  if(gameRunning){return;}

  gameRunning=true;
  gameScore=0;
  gameLevel=0;
  gameTimeLeft=levels[0].time;
  finalInfinitySpawned=false;
  levelEnding=false;

  clearGameTimers();
  clearFallingItems();
  updateGameHud();

  document.getElementById('gameOverlay').classList.add('hidden');
  document.getElementById('continueAfterGame').classList.add('hidden');

  startLevel();
}

function finishGame(caughtInfinity=false){
  if(!gameRunning){return;}

  gameRunning=false;
  clearGameTimers();
  clearFallingItems();

  const oldBest=Number(localStorage.getItem('birthdayBest')||0);
  const best=Math.max(oldBest,gameScore);
  localStorage.setItem('birthdayBest',best);
  document.getElementById('bestScore').textContent=best;

  const overlay=document.getElementById('gameOverlay');
  const title=document.getElementById('gameOverlayTitle');
  const text=document.getElementById('gameOverlayText');
  const start=document.getElementById('startGame');

  if(caughtInfinity){
    title.textContent='YOU CAUGHT IT.';
    text.textContent='Just like you caught my heart. ♡';
    showGameToast(`<small>FINAL SCORE · ${gameScore}</small>`);
    confetti(55);
    burstHearts(24);
  }else{
    title.textContent='CHAOS COMPLETE.';
    text.textContent=`You survived all four levels with ${gameScore} points. ♡`;
  }

  start.textContent='PLAY AGAIN ♡';
  overlay.classList.remove('hidden');
  document.getElementById('continueAfterGame').classList.remove('hidden');
}

document.getElementById('bestScore').textContent=
  localStorage.getItem('birthdayBest')||0;

document.getElementById('startGame').addEventListener('click',startGame);

document.getElementById('continueAfterGame').addEventListener(
  'click',
  () => goToChapter(5)
);


/* =========================================================
   THE WAY I SEE YOU
========================================================= */

const seeYouLines=[
  ['✦','I notice the tiny things you think nobody notices.'],
  ['♡','I notice how you can make me laugh when I am trying very hard to stay mad.'],
  ['∞','I notice how random plans with you somehow become days I remember forever.'],
  ['✧','I notice how ordinary places become special just because we are there together.'],
  ['♡','I notice the softness underneath all the roasting, rage baiting and stupid jokes.'],
  ['∞','And I notice that, after everything, my heart still looks for you.']
];

let seeYouIndex=0;

const seeYouText=document.getElementById('seeYouText');
const seeYouSymbol=document.getElementById('seeYouSymbol');
const seeYouNumber=document.getElementById('seeYouNumber');
const seeYouProgressBar=document.getElementById('seeYouProgressBar');
const seeYouNext=document.getElementById('seeYouNext');
const seeYouFinal=document.getElementById('seeYouFinal');
const seeYouContinue=document.getElementById('seeYouContinue');

function renderSeeYou(){
  if(!seeYouText || !seeYouSymbol || !seeYouNumber || !seeYouProgressBar || !seeYouNext){return;}

  const item=seeYouLines[seeYouIndex];
  seeYouNumber.textContent=String(seeYouIndex+1).padStart(2,'0');
  seeYouSymbol.textContent=item[0];
  seeYouText.textContent=item[1];
  seeYouProgressBar.style.width=`${((seeYouIndex+1)/seeYouLines.length)*100}%`;
  seeYouNext.textContent=seeYouIndex===seeYouLines.length-1?'SEE WHAT I MEAN ♡':'SHOW ME ANOTHER ♡';

  const card=document.querySelector('.see-you-card');
  if(card){
    card.classList.remove('see-you-card-pulse');
    void card.offsetWidth;
    card.classList.add('see-you-card-pulse');
  }
}

seeYouNext?.addEventListener('click',()=>{
  if(seeYouIndex<seeYouLines.length-1){
    seeYouIndex++;
    renderSeeYou();
    return;
  }

  seeYouNext.classList.add('hidden');
  seeYouFinal?.classList.remove('hidden');
  seeYouContinue?.classList.remove('hidden');
  burstHearts(18);
  confetti(24);
});

seeYouContinue?.addEventListener('click',()=>goToChapter(6));
renderSeeYou();


/* =========================================================
   PHOTO SYSTEM
========================================================= */
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

const memoryPhotos=ALL_PHOTOS.slice(0,10);
let memoryIndex=0;
let memoryAnswers=Array(10).fill('');

try{
  const saved=JSON.parse(localStorage.getItem('birthdayMemoryAnswers')||'null');
  if(Array.isArray(saved) && saved.length===10){memoryAnswers=saved;}
}catch(e){}

const memoryPhoto=document.getElementById('memoryPhoto');
const memoryAnswer=document.getElementById('memoryAnswer');
const memoryProgress=document.getElementById('memoryProgress');
const memoryBar=document.getElementById('memoryBar');
const memoryNext=document.getElementById('memoryNext');
const memoryFinish=document.getElementById('memoryFinish');
const memoryForm=document.getElementById('memoryForm');
const memoryContinue=document.getElementById('memoryContinue');

function renderMemory(){
  if(!memoryPhoto || !memoryAnswer || !memoryProgress || !memoryBar){return;}
  const filename=memoryPhotos[memoryIndex];
  memoryPhoto.src=IMAGE_PATH+filename;
  memoryPhoto.alt=`Memory ${memoryIndex+1} of us`;
  memoryProgress.textContent=`MEMORY ${String(memoryIndex+1).padStart(2,'0')} / 10`;
  memoryBar.style.width=`${(memoryIndex+1)*10}%`;
  memoryAnswer.value=memoryAnswers[memoryIndex]||'';
}

memoryPhoto?.addEventListener('error',()=>{
  memoryPhoto.classList.add('image-missing');
  memoryPhoto.alt=`Memory ${memoryIndex+1} could not be loaded`;
});

memoryAnswer?.addEventListener('input',()=>{
  memoryAnswers[memoryIndex]=memoryAnswer.value;
  localStorage.setItem('birthdayMemoryAnswers',JSON.stringify(memoryAnswers));
});

memoryNext?.addEventListener('click',()=>{
  memoryAnswers[memoryIndex]=memoryAnswer?.value.trim()||'';
  localStorage.setItem('birthdayMemoryAnswers',JSON.stringify(memoryAnswers));

  if(memoryIndex<9){
    memoryIndex++;
    renderMemory();
    document.querySelector('.memory-lane-chapter')?.scrollIntoView({behavior:'smooth',block:'start'});
    return;
  }

  for(let i=0;i<10;i++){
    const field=document.getElementById(`memory${String(i+1).padStart(2,'0')}Field`);
    if(field) field.value=memoryAnswers[i]||'(left blank)';
  }

  document.querySelector('.memory-card')?.classList.add('hidden');
  memoryFinish?.classList.remove('hidden');
  memoryContinue?.classList.remove('hidden');
  confetti(30);
});

memoryForm?.addEventListener('submit',()=>{
  for(let i=0;i<10;i++){
    const field=document.getElementById(`memory${String(i+1).padStart(2,'0')}Field`);
    if(field) field.value=memoryAnswers[i]||'(left blank)';
  }
});

memoryContinue?.addEventListener('click',()=>goToChapter(7));


/* =========================================================
   SCRAPBOOK
========================================================= */

const scrapbook=document.getElementById('scrapbook');
const scrapbookPhotos=ALL_PHOTOS.slice(10);

if(scrapbook){
  scrapbook.innerHTML='';
  scrapbookPhotos.forEach((filename,index)=>{
    const card=document.createElement('figure');
    card.className='scrap-card';
    card.style.setProperty('--tilt',`${(index%5-2)*1.4}deg`);

    const img=document.createElement('img');
    img.src=IMAGE_PATH+filename;
    img.alt=`Memory ${index+11} of us`;
    img.loading='lazy';
    img.decoding='async';
    img.addEventListener('error',()=>{
      img.classList.add('image-missing');
      card.classList.add('scrap-card-missing');
    });

    const captions=['one of those days','still laughing','just us','another little moment','proof we were here'];
    const caption=document.createElement('figcaption');
    caption.textContent=`${captions[index%captions.length]} · ${String(index+11).padStart(2,'0')}`;
    card.append(img,caption);
    scrapbook.appendChild(card);
  });
}


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
        '#081426',
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
