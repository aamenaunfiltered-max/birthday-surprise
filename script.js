/* =========================================================
   CINEMATIC OPENING
========================================================= */

const cinematicIntro =
  document.getElementById('cinematicIntro');

function finishCinematicIntro(){

  if(!cinematicIntro) return;

  cinematicIntro.classList.add('intro-finished');

  setTimeout(() => {

    cinematicIntro.remove();

  },1500);

}

/*
  The opening gets enough time for:
  ∞ to appear
  first line to appear
  second line to appear
  then the whole screen fades away.
*/
if(cinematicIntro){

  setTimeout(
    finishCinematicIntro,
    6200
  );

}


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

let gameRunning=false;
let score=0;
let timeLeft=20;
let spawnTimer;
let gameTimer;

const game =
  document.getElementById(
    'catchGame'
  );

const player =
  document.getElementById(
    'player'
  );


function setPlayer(x){

  const rect =
    game.getBoundingClientRect();

  const half=32;

  const px =
    Math.max(
      half,
      Math.min(
        rect.width-half,
        x
      )
    );

  player.style.left =
    px+'px';

}


function movePlayer(clientX){

  const rect =
    game.getBoundingClientRect();

  setPlayer(
    clientX-rect.left
  );

}


game.addEventListener(
  'pointermove',
  e => {

    if(gameRunning){

      movePlayer(
        e.clientX
      );

    }

  }
);


function startGame(){

  if(gameRunning){
    return;
  }

  gameRunning=true;

  score=0;

  timeLeft=20;

  document.getElementById(
    'gameScore'
  ).textContent='0';

  document.getElementById(
    'gameTime'
  ).textContent='20';

  document.getElementById(
    'gameOverlay'
  ).classList.add(
    'hidden'
  );

  document.getElementById(
    'gameResult'
  ).textContent =
    'Catch everything good. ♡';

  spawnTimer =
    setInterval(
      spawnItem,
      480
    );

  gameTimer =
    setInterval(
      () => {

        timeLeft--;

        document.getElementById(
          'gameTime'
        ).textContent =
          timeLeft;

        if(timeLeft<=0){
          endGame();
        }

      },
      1000
    );

}


document
  .getElementById('startGame')
  .addEventListener(
    'click',
    startGame
  );


function spawnItem(){

  if(!gameRunning){
    return;
  }

  const el =
    document.createElement(
      'div'
    );

  el.className='falling';

  const types=[
    ['♡',10],
    ['💋',20],
    ['🍔',15],
    ['🥤',25],
    ['🎂',50],
    ['💔',-15]
  ];

  const [
    symbol,
    points
  ] =
    types[
      Math.floor(
        Math.random()*types.length
      )
    ];

  el.textContent=symbol;

  el.dataset.points=points;

  el.style.left =
    (5+Math.random()*88)+'%';

  el.style.animationDuration =
    (1.6+Math.random()*1.2)+'s';

  game.appendChild(el);

  const tick =
    setInterval(
      () => {

        const a =
          el.getBoundingClientRect();

        const b =
          player.getBoundingClientRect();

        if(
          a.bottom>=b.top &&
          a.left<b.right &&
          a.right>b.left
        ){

          score =
            Math.max(
              0,
              score+
              Number(el.dataset.points)
            );

          document.getElementById(
            'gameScore'
          ).textContent =
            score;

          el.remove();

          clearInterval(tick);

        }

      },
      40
    );

  setTimeout(
    () => {

      clearInterval(tick);

      el.remove();

    },
    3200
  );

}


function endGame(){

  gameRunning=false;

  clearInterval(
    spawnTimer
  );

  clearInterval(
    gameTimer
  );

  document
    .querySelectorAll('.falling')
    .forEach(
      x => x.remove()
    );

  const best =
    Math.max(
      Number(
        localStorage.getItem(
          'birthdayBest'
        ) || 0
      ),
      score
    );

  localStorage.setItem(
    'birthdayBest',
    best
  );

  document.getElementById(
    'bestScore'
  ).textContent =
    best;

  document.getElementById(
    'gameResult'
  ).textContent =
    score>=150
      ? `SCORE ${score}. Okay, heart thief. 😭♡`
      : score>=80
        ? `SCORE ${score}. Respectable birthday-boy behaviour. ♡`
        : `SCORE ${score}. We are blaming the broken hearts. 😂`;

  document
    .getElementById(
      'gameOverlay'
    )
    .classList.remove(
      'hidden'
    );

  document.getElementById(
    'startGame'
  ).textContent =
    'PLAY AGAIN ♡';

  document
    .getElementById(
      'continueAfterGame'
    )
    .classList.remove(
      'hidden'
    );

  confetti(35);

}


document.getElementById(
  'bestScore'
).textContent =
  localStorage.getItem(
    'birthdayBest'
  ) || 0;


document
  .getElementById(
    'continueAfterGame'
  )
  .addEventListener(
    'click',
    () => goToChapter(5)
  );


/* =========================================================
   DIET COKE
========================================================= */

const cokeMessages=[

  'Correct answer: Diet Coke.',

  'This is not a drink anymore. This is relationship lore. 🥤',

  'MCD without Diet Coke? Unacceptable.',

  'You may have your Diet Coke. I will continue being your favourite. 👀',

  'Okay. You are officially Diet Coke certified.'

];

let cokeClicks=0;


function tapCoke(){

  cokeClicks++;

  document.getElementById(
    'cokeCount'
  ).textContent =
    String(cokeClicks).padStart(
      2,
      '0'
    );

  document.getElementById(
    'cokeMessage'
  ).textContent =
    cokeMessages[
      Math.min(
        cokeClicks-1,
        cokeMessages.length-1
      )
    ];

  document.getElementById(
    'cokeCan'
  ).classList.add(
    'tapped'
  );

  setTimeout(
    () =>
      document
        .getElementById(
          'cokeCan'
        )
        .classList.remove(
          'tapped'
        ),
    220
  );

  if(cokeClicks>=5){

    document
      .getElementById(
        'cokeFinal'
      )
      .classList.remove(
        'hidden'
      );

    confetti(20);

  }

}


document
  .getElementById('cokeCan')
  .addEventListener(
    'click',
    tapCoke
  );


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
