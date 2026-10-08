:root{
  --navy:#081426;
  --ink:#05080e;
  --blue:#4c7cff;
  --blue2:#a9c7ff;
  --sky:#eaf2ff;
  --ice:#f8fbff;
  --white:#fff;
  --silver:#dbe5f5;
  --muted:#71809a;
  --line:rgba(8,20,38,.14);
  --shadow:0 20px 60px rgba(8,20,38,.14);
  --radius:28px;
}

*{
  box-sizing:border-box;
}

html{
  scroll-behavior:smooth;
}

body{
  margin:0;
  background:var(--ice);
  color:var(--navy);
  font-family:'DM Sans',sans-serif;
  overflow-x:hidden;
}

button{
  font:inherit;
}

.hidden{
  display:none!important;
}

.grain{
  position:fixed;
  inset:0;
  pointer-events:none;
  opacity:.035;
  background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  z-index:20;
}

#hearts{
  position:fixed;
  inset:0;
  pointer-events:none;
  z-index:15;
  overflow:hidden;
}

.float-heart{
  position:absolute;
  bottom:-30px;
  color:rgba(76,124,255,.25);
  animation:floatUp linear forwards;
  font-size:18px;
}

@keyframes floatUp{
  to{
    transform:translateY(-110vh) rotate(18deg);
    opacity:0;
  }
}

.screen{
  min-height:100svh;
  display:grid;
  place-items:center;
  position:relative;
  overflow:hidden;
}

.lock-screen{
  background:radial-gradient(circle at 50% 15%,#dceaff 0,#eef5ff 38%,#f8fbff 75%);
  padding:28px;
}

.lock-content{
  width:min(850px,100%);
  text-align:center;
  position:relative;
  z-index:2;
}

.eyebrow{
  font:700 .72rem/1.2 'Space Mono',monospace;
  letter-spacing:.18em;
  color:var(--blue);
  margin:0 0 20px;
  text-transform:uppercase;
}

.infinity-mark{
  font:500 5rem/1 'Playfair Display',serif;
  color:var(--blue);
  text-shadow:0 10px 30px rgba(76,124,255,.25);
}

.infinity-mark.large{
  font-size:7rem;
  margin-top:-8px;
}

.lock-content h1,
.chapter h2{
  font:600 clamp(3rem,8vw,7rem)/.92 'Playfair Display',serif;
  letter-spacing:-.045em;
  margin:8px 0 20px;
}

.lock-content h1 span,
.chapter h2 span{
  color:var(--blue);
}

.lock-copy{
  font-size:1.05rem;
  color:var(--muted);
  max-width:540px;
  margin:0 auto 28px;
}

.countdown{
  display:flex;
  justify-content:center;
  align-items:center;
  gap:14px;
  margin:28px auto 18px;
}

.countdown div{
  min-width:90px;
}

.countdown strong{
  display:block;
  font:700 clamp(1.8rem,5vw,3rem)/1 'Space Mono',monospace;
}

.countdown span{
  display:block;
  font:700 .58rem/1.2 'Space Mono',monospace;
  color:var(--muted);
  letter-spacing:.12em;
  margin-top:8px;
}

.countdown i{
  font:700 1.5rem 'Space Mono',monospace;
  color:var(--blue);
}

.unlock-date{
  font:700 .72rem 'Space Mono',monospace;
  letter-spacing:.14em;
  color:var(--navy);
}

.lock-note{
  color:var(--muted);
  font-size:.85rem;
  margin-top:18px;
}

.primary-btn,
.ghost-btn{
  border:0;
  border-radius:999px;
  padding:14px 20px;
  cursor:pointer;
  font-weight:700;
  letter-spacing:.03em;
  transition:.2s transform,.2s box-shadow,.2s background;
}

.primary-btn{
  background:var(--navy);
  color:#fff;
  box-shadow:0 10px 28px rgba(8,20,38,.18);
}

.primary-btn:hover,
.ghost-btn:hover{
  transform:translateY(-2px);
}

.ghost-btn{
  background:rgba(255,255,255,.72);
  color:var(--navy);
  border:1px solid var(--line);
}

.orbit{
  position:absolute;
  border:1px solid rgba(76,124,255,.18);
  border-radius:50%;
  width:55vw;
  height:55vw;
  max-width:720px;
  max-height:720px;
}

.orbit-a{
  animation:spin 35s linear infinite;
}

.orbit-b{
  width:35vw;
  height:35vw;
  animation:spin 23s linear infinite reverse;
}

@keyframes spin{
  to{
    transform:rotate(360deg);
  }
}

.music-toggle{
  position:fixed;
  top:18px;
  right:18px;
  z-index:50;
  border:1px solid var(--line);
  background:rgba(255,255,255,.82);
  backdrop-filter:blur(14px);
  border-radius:999px;
  padding:10px 14px;
  color:var(--navy);
  cursor:pointer;
  box-shadow:0 8px 25px rgba(8,20,38,.08);
}

.chapter{
  min-height:100svh;
  padding:100px max(22px,5vw);
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  text-align:center;
  position:relative;
  overflow:hidden;
}

.chapter>h2{
  max-width:900px;
}

.hero-chapter{
  background:radial-gradient(circle at 50% 20%,#dceaff,#f8fbff 62%);
}

.hero-glow{
  position:absolute;
  width:60vw;
  height:60vw;
  border-radius:50%;
  background:rgba(76,124,255,.09);
  filter:blur(30px);
}

.hero-copy{
  max-width:620px;
  font-size:1.18rem;
  margin:8px auto;
  color:var(--navy);
}

.hero-copy.soft{
  color:var(--muted);
}

.chapter-number{
  position:absolute;
  top:34px;
  left:34px;
  font:700 .65rem 'Space Mono',monospace;
  color:var(--muted);
  letter-spacing:.15em;
}

.split-chapter{
  background:#fff;
}

.split-chapter p{
  max-width:680px;
  font-size:1.1rem;
  line-height:1.8;
}

.date-chip{
  padding:10px 15px;
  border:1px solid var(--line);
  border-radius:999px;
  font:700 .7rem 'Space Mono',monospace;
  letter-spacing:.12em;
  margin:24px 0;
  background:var(--sky);
}

.infinity-line{
  display:flex;
  align-items:center;
  gap:14px;
  width:min(500px,80%);
  color:var(--blue);
  font:2rem 'Playfair Display',serif;
  margin:28px 0;
}

.infinity-line span{
  height:1px;
  background:var(--line);
  flex:1;
}

/* THE STORY SO FAR */

.timeline-chapter{
  background:
    radial-gradient(circle at 50% 0,#12264a 0,transparent 55%),
    var(--navy);
  color:#fff;
}

.timeline-chapter .eyebrow{
  color:var(--blue2);
}

.timeline-chapter h2 span{
  color:var(--blue2);
}

.timeline-chapter .next-btn{
  background:#fff;
  color:var(--navy);
}

.story-lead{
  font:italic 500 1.2rem/1.5 'Playfair Display',serif;
  color:#c4d0e4;
  max-width:460px;
  margin:0 auto 34px;
}

.story{
  position:relative;
  width:min(960px,100%);
  display:flex;
  flex-direction:column;
  text-align:left;
  margin:0 0 40px;
  padding:20px 0;
  isolation:isolate;
}

.story-path{
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
  z-index:-1;
  overflow:visible;
}

.story-path path{
  fill:none;
  stroke:rgba(169,199,255,.38);
  stroke-width:1.2;
  stroke-dasharray:3 9;
  stroke-linecap:round;
}

.story-orbit{
  position:absolute;
  border:1px solid rgba(169,199,255,.14);
  border-radius:50%;
  z-index:-2;
  pointer-events:none;
}

.so-1{
  width:92%;
  height:46%;
  left:4%;
  top:6%;
  transform:rotate(-9deg);
}

.so-2{
  width:78%;
  height:38%;
  left:11%;
  bottom:6%;
  transform:rotate(11deg);
  border-color:rgba(169,199,255,.1);
}

.story-mark{
  position:absolute;
  z-index:-1;
  color:var(--blue2);
  pointer-events:none;
  animation:twinkle 4.2s ease-in-out infinite;
}

.sm-1{ top:-18px; left:49%; font:500 3rem/1 'Playfair Display',serif; }
.sm-2{ top:15%; left:52%; font-size:1.1rem; animation-delay:.6s; }
.sm-3{ top:33%; left:12%; font-size:.9rem; animation-delay:1.4s; }
.sm-4{ top:63%; left:47%; font:500 2.4rem/1 'Playfair Display',serif; animation-delay:2s; }
.sm-5{ top:50%; left:88%; font-size:1.2rem; animation-delay:.9s; }
.sm-6{ top:85%; left:8%; font-size:.85rem; animation-delay:2.6s; }

@keyframes twinkle{
  50%{ opacity:.35; }
}

.story-card{
  position:relative;
  width:min(410px,78%);
  padding:26px 28px 28px;
  border:1px solid rgba(169,199,255,.28);
  border-radius:30px 30px 30px 8px;
  background:
    linear-gradient(155deg,rgba(169,199,255,.16),rgba(169,199,255,.04)),
    #0b1b34;
  box-shadow:0 22px 50px rgba(0,0,0,.32);
  transform:rotate(var(--r,0deg));
  animation:cardFloat 7s ease-in-out infinite;
}

.story-card+.story-card{
  margin-top:-26px;
}

.story-card.left{
  align-self:flex-start;
  margin-left:2%;
}

.story-card.right{
  align-self:flex-end;
  margin-right:2%;
  border-radius:30px 30px 8px 30px;
  animation-delay:-3s;
}

.story-card:nth-of-type(3){ margin-left:9%; }
.story-card:nth-of-type(4){ margin-right:7%; }
.story-card:nth-of-type(5){ margin-left:4%; }

@keyframes cardFloat{
  50%{
    transform:rotate(var(--r,0deg)) translateY(-7px);
  }
}

.story-no{
  position:absolute;
  top:16px;
  right:22px;
  font:italic 500 2.6rem/1 'Playfair Display',serif;
  color:rgba(169,199,255,.2);
}

.story-card small{
  display:block;
  font:700 .62rem 'Space Mono',monospace;
  letter-spacing:.15em;
  color:var(--blue2);
  margin-bottom:12px;
  max-width:80%;
}

.story-card h3{
  font:600 clamp(1.35rem,3vw,1.75rem)/1.12 'Playfair Display',serif;
  margin:0 0 10px;
  letter-spacing:-.01em;
}

.story-card p{
  margin:0;
  color:#c4d0e4;
  line-height:1.6;
  max-width:30ch;
}

.story-card.pivot{
  width:min(450px,82%);
  border-color:rgba(169,199,255,.6);
  background:
    radial-gradient(circle at 20% 0,rgba(169,199,255,.3),transparent 60%),
    #0e2243;
  box-shadow:0 0 0 6px rgba(169,199,255,.06),0 0 60px rgba(76,124,255,.28),0 22px 50px rgba(0,0,0,.35);
}

.story-card.pivot h3{
  font-size:clamp(1.6rem,4vw,2.2rem);
}

.story-card.hard{
  border-style:dashed;
  border-color:rgba(169,199,255,.34);
  background:#091426;
}

.story-card.now{
  border-color:rgba(255,255,255,.7);
  background:
    radial-gradient(circle at 80% 0,rgba(255,255,255,.2),transparent 55%),
    #11284d;
  box-shadow:0 0 70px rgba(169,199,255,.35),0 22px 50px rgba(0,0,0,.35);
}

.story-card.now .story-no{
  color:rgba(255,255,255,.55);
  font-size:3.2rem;
}

.story-card.now h3{
  font-size:clamp(1.8rem,4.4vw,2.5rem);
}

@media(max-width:700px){

  .story-card{
    width:88%;
    padding:22px 22px 24px;
  }

  .story-card.pivot{
    width:92%;
  }

  .story-card:nth-of-type(3),
  .story-card:nth-of-type(4),
  .story-card:nth-of-type(5){
    margin-left:0;
    margin-right:0;
  }

  .story-card.left{ margin-left:0; }
  .story-card.right{ margin-right:0; }

  .story-card p{
    max-width:none;
  }

  .story-mark.sm-3,
  .story-mark.sm-6{
    display:none;
  }
}

@media(prefers-reduced-motion:reduce){

  .story-card,
  .story-mark{
    animation:none;
  }
}

.quiz-chapter{
  background:var(--sky);
}

.game-card,
.result-card{
  width:min(700px,100%);
  background:#fff;
  border:1px solid var(--line);
  border-radius:var(--radius);
  box-shadow:var(--shadow);
  padding:30px;
}

.quiz-meta,
.game-hud{
  display:flex;
  justify-content:space-between;
  font:700 .65rem 'Space Mono',monospace;
  color:var(--muted);
  letter-spacing:.08em;
}

.game-card h3{
  font:600 clamp(1.5rem,4vw,2.2rem)/1.2 'Playfair Display',serif;
  margin:30px 0;
}

.answers{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:12px;
}

.answer{
  border:1px solid var(--line);
  background:var(--ice);
  border-radius:18px;
  padding:15px;
  text-align:left;
  cursor:pointer;
  font-weight:600;
}

.answer:hover{
  border-color:var(--blue);
  background:#f0f5ff;
}

.answer.correct{
  background:#dff7ea;
  border-color:#56a77b;
}

.answer.wrong{
  background:#fff0f1;
  border-color:#d87883;
}

.feedback{
  min-height:24px;
  color:var(--muted);
  font-weight:600;
}

.big-score{
  font:700 4rem 'Space Mono',monospace;
  color:var(--blue);
}

.game-chapter{
  background:linear-gradient(180deg,#f8fbff,#e9f1ff);
}

.game-chapter>.eyebrow{
  margin-bottom:26px;
}


/* MISSION BRIEFING */

.briefing{
  position:relative;
  width:min(720px,100%);
  text-align:left;
  background:#07101f;
  color:#e6eefb;
  border:1px solid rgba(169,199,255,.24);
  border-radius:22px;
  padding:clamp(24px,5vw,44px);
  box-shadow:0 30px 80px rgba(8,20,38,.28);
  overflow:hidden;
}

.briefing:before{
  content:"";
  position:absolute;
  inset:0;
  pointer-events:none;
  background:repeating-linear-gradient(0deg,rgba(169,199,255,.035) 0 1px,transparent 1px 4px);
}

.briefing>*{
  position:relative;
}

.briefing-stamp{
  position:absolute;
  top:24px;
  right:18px;
  transform:rotate(7deg);
  border:2px solid #ff7d8a;
  color:#ff7d8a;
  font:700 .66rem 'Space Mono',monospace;
  letter-spacing:.2em;
  padding:5px 12px;
  border-radius:4px;
  opacity:.9;
}

.briefing-head small{
  font:700 .62rem 'Space Mono',monospace;
  letter-spacing:.16em;
  color:#8fa4c2;
}

.briefing-head h3{
  font:600 clamp(2.3rem,8vw,3.8rem)/.95 'Playfair Display',serif;
  letter-spacing:-.03em;
  color:#fff;
  margin:14px 0 10px;
}

.briefing-head p{
  margin:0;
  color:var(--blue2);
  font-size:1.05rem;
}

.brief-block{
  margin-top:28px;
  padding-top:24px;
  border-top:1px dashed rgba(169,199,255,.26);
}

.brief-block h4{
  font:700 .7rem 'Space Mono',monospace;
  letter-spacing:.18em;
  color:var(--blue2);
  margin:0 0 12px;
}

.brief-block h4.sub{
  margin-top:22px;
}

.how{
  margin:0;
  color:#c4d0e4;
  line-height:1.6;
}

.loot{
  list-style:none;
  margin:0;
  padding:0;
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:8px;
}

.loot li{
  display:flex;
  align-items:center;
  gap:10px;
  padding:10px 14px;
  border-radius:12px;
  background:rgba(169,199,255,.07);
}

.loot .em{
  width:1.8rem;
  text-align:center;
  font-size:1.35rem;
}

.loot .nm{
  flex:1;
  font-weight:600;
  font-size:.95rem;
}

.loot b{
  font:700 .95rem 'Space Mono',monospace;
  color:#9be7b5;
}

.brief-block.warning{
  border:1px solid rgba(255,125,138,.42);
  border-radius:16px;
  padding:22px;
  background:rgba(255,125,138,.06);
}

.brief-block.warning h4{
  color:#ff9aa4;
}

.warning .loot li{
  background:rgba(255,125,138,.1);
}

.warning .loot b{
  color:#ff9aa4;
}

.warn-note{
  margin:18px 0 0;
  font:600 1.2rem/1.45 'Playfair Display',serif;
  color:#fff;
}

.start-btn{
  display:block;
  width:100%;
  margin-top:30px;
  padding:18px 20px;
  border:0;
  border-radius:14px;
  background:#fff;
  color:#07101f;
  font:700 .85rem 'Space Mono',monospace;
  letter-spacing:.2em;
  cursor:pointer;
  transition:.2s transform,.2s box-shadow;
}

.start-btn:hover{
  transform:translateY(-2px);
  box-shadow:0 12px 30px rgba(169,199,255,.3);
}

.route{
  list-style:none;
  margin:30px 0 0;
  padding:0;
  text-align:center;
}

.route li+li:before{
  content:"↓";
  display:block;
  color:var(--blue2);
  margin:10px 0;
}

.route strong{
  display:block;
  font:700 .72rem 'Space Mono',monospace;
  letter-spacing:.14em;
  color:#fff;
  margin-bottom:4px;
}

.route span{
  color:#9eb1cb;
  font-size:.9rem;
}


/* ARENA */

.arena{
  width:min(700px,100%);
}

.game-hud{
  width:100%;
  margin:0 0 8px;
}

.game-hud b{
  color:var(--navy);
}

.target-bar{
  margin:0 0 12px;
  text-align:left;
}

.target-bar>span{
  font:700 .62rem 'Space Mono',monospace;
  letter-spacing:.12em;
  color:var(--muted);
}

.target-bar>div{
  height:8px;
  border-radius:99px;
  background:#d6e1f3;
  overflow:hidden;
  margin-top:7px;
}

.target-bar i{
  display:block;
  width:0;
  height:100%;
  background:var(--blue);
  transition:.2s width,.2s background;
}

.target-bar i.met{
  background:#3fbf7f;
}

.catch-game{
  width:100%;
  height:440px;
  background:radial-gradient(circle at 50% 0,#17305c 0,#0a1830 55%,#060d1b 100%);
  border:1px solid rgba(169,199,255,.3);
  border-radius:24px;
  position:relative;
  overflow:hidden;
  box-shadow:var(--shadow);
  touch-action:none;
}

.catch-game.hit{
  animation:gameShake .35s;
  box-shadow:inset 0 0 0 3px rgba(255,125,138,.85),var(--shadow);
}

@keyframes gameShake{
  20%{ transform:translateX(-7px); }
  40%{ transform:translateX(6px); }
  60%{ transform:translateX(-4px); }
  80%{ transform:translateX(3px); }
}

.player{
  position:absolute;
  bottom:16px;
  left:50%;
  transform:translateX(-50%);
  width:64px;
  height:64px;
  border-radius:50%;
  background:#fff;
  color:#081426;
  display:grid;
  place-items:center;
  font-size:2rem;
  z-index:2;
  box-shadow:0 0 30px rgba(169,199,255,.45);
}

.item{
  position:absolute;
  left:0;
  top:0;
  width:36px;
  height:36px;
  display:grid;
  place-items:center;
  font-size:28px;
  line-height:1;
  will-change:transform;
  user-select:none;
  pointer-events:none;
}

.item.bad{
  filter:drop-shadow(0 0 7px rgba(255,125,138,.9));
}

.item.inf{
  font:500 40px/1 'Playfair Display',serif;
  color:#fff;
  text-shadow:0 0 14px rgba(169,199,255,.9);
}

.item.finale{
  width:90px;
  height:90px;
  font-size:84px;
  text-shadow:0 0 30px #a9c7ff,0 0 80px #4c7cff;
}

.pop{
  position:absolute;
  z-index:3;
  font:700 1.05rem 'Space Mono',monospace;
  pointer-events:none;
  animation:popUp .8s ease-out forwards;
}

.pop.good{ color:#9be7b5; }
.pop.bad{ color:#ff9aa4; }

@keyframes popUp{
  to{
    transform:translateY(-44px);
    opacity:0;
  }
}

.level-banner{
  position:absolute;
  inset:0;
  z-index:4;
  display:grid;
  place-content:center;
  gap:10px;
  padding:20px;
  text-align:center;
  background:rgba(6,13,27,.82);
  color:#fff;
  opacity:0;
  pointer-events:none;
  transition:opacity .25s;
}

.level-banner.show{
  opacity:1;
}

.level-banner strong{
  font:600 clamp(1.5rem,5.5vw,2.5rem)/1.1 'Playfair Display',serif;
}

.level-banner span{
  color:var(--blue2);
}

.game-start-overlay{
  position:absolute;
  inset:0;
  z-index:5;
  display:grid;
  place-items:center;
  padding:22px;
  background:rgba(6,13,27,.9);
  backdrop-filter:blur(5px);
  color:#fff;
  text-align:center;
}

.overlay-inner{
  max-width:420px;
}

.overlay-mark{
  font:500 5rem/1 'Playfair Display',serif;
  color:#fff;
  text-shadow:0 0 30px #a9c7ff,0 0 70px #4c7cff;
}

.overlay-inner h3{
  font:600 clamp(1.5rem,5vw,2.3rem)/1.12 'Playfair Display',serif;
  margin:8px 0 10px;
  color:#fff;
}

.overlay-inner p{
  color:#c4d0e4;
  line-height:1.6;
  margin:0;
}

.overlay-inner small{
  display:block;
  margin-top:8px;
  color:var(--blue2);
}

.game-chapter .feedback{
  margin-top:16px;
}

@media(max-width:720px){

  .loot{
    grid-template-columns:1fr;
  }

  .briefing-stamp{
    position:static;
    display:inline-block;
    transform:none;
    margin-bottom:14px;
  }

  .catch-game{
    height:400px;
  }
}

.gift-chapter{
  background:#fff;
}

.gift-grid{
  display:grid;
  grid-template-columns:repeat(5,1fr);
  gap:12px;
  width:min(850px,100%);
  margin:30px 0;
}

.gift{
  aspect-ratio:1;
  border:0;
  border-radius:24px;
  background:linear-gradient(145deg,#0b1d36,#254f8e);
  color:#fff;
  cursor:pointer;
  position:relative;
  overflow:hidden;
  box-shadow:0 14px 28px rgba(8,20,38,.12);
}

.gift:before,
.gift:after{
  content:"";
  position:absolute;
  background:var(--blue2);
}

.gift:before{
  width:16%;
  height:100%;
  left:42%;
}

.gift:after{
  height:16%;
  width:100%;
  top:42%;
}

.gift span{
  position:relative;
  z-index:2;
  font:700 2.2rem 'Playfair Display',serif;
}

.gift.opened{
  opacity:.55;
}

.gift-reveal{
  max-width:650px;
  border-radius:24px;
  background:var(--sky);
  padding:20px;
  font-size:1rem;
  line-height:1.7;
}

.gift-reveal strong{
  display:block;
  font:600 1.5rem 'Playfair Display',serif;
  margin-bottom:7px;
}

/* DIET COKE
   One surface, one palette: deep navy, silver and icy blue.
   Change --coke-bg to match the exact edge colour of the poster image. */

.coke-chapter{
  --coke-bg:#060d1b;
  --coke-silver:#dbe5f5;
  --coke-ice:#a9c7ff;
  background:var(--coke-bg);
  color:var(--coke-silver);
  padding-top:clamp(86px,8vh,112px);
  padding-bottom:clamp(60px,7vh,92px);
}

.coke-chapter .chapter-number{
  color:#8fa4c2;
}

.coke-chapter .eyebrow{
  color:var(--coke-ice);
}

.coke-chapter h2{
  color:var(--coke-silver);
}

.coke-chapter h2 span{
  color:var(--coke-ice);
}

.coke-lead{
  width:min(640px,100%);
  margin:0 auto 10px;
  line-height:1.6;
  color:#b9c8de;
}

.coke-poster-wrap{
  width:min(920px,100%);
  margin:6px auto 0;
}

.coke-poster{
  position:relative;
  width:100%;
  background:transparent;
  -webkit-mask-image:
    linear-gradient(to right,transparent,#000 7%,#000 93%,transparent),
    linear-gradient(to bottom,transparent,#000 9%,#000 91%,transparent);
  -webkit-mask-composite:source-in;
  mask-image:
    linear-gradient(to right,transparent,#000 7%,#000 93%,transparent),
    linear-gradient(to bottom,transparent,#000 9%,#000 91%,transparent);
  mask-composite:intersect;
}

.coke-poster>img{
  display:block;
  width:100%;
  height:auto;
}

.coke-hit-area{
  position:absolute;
  left:39%;
  top:24%;
  width:22%;
  height:54%;
  border:0;
  background:transparent;
  cursor:pointer;
  border-radius:40%;
  z-index:2;
  touch-action:manipulation;
}

.coke-hit-area:focus-visible{
  outline:2px solid var(--coke-ice);
  outline-offset:6px;
}

.coke-hit-area.tapped{
  animation:cokeTap .22s ease;
}

@keyframes cokeTap{
  50%{
    transform:scale(.94);
  }
}

.coke-spark{
  position:absolute;
  z-index:3;
  color:var(--coke-ice);
  font-size:1rem;
  pointer-events:none;
  animation:cokeSpark .9s ease-out forwards;
}

@keyframes cokeSpark{
  to{
    transform:translate(var(--dx),var(--dy)) scale(.4);
    opacity:0;
  }
}

.coke-cta{
  display:inline-flex;
  align-items:center;
  gap:10px;
  margin:6px 0 0;
  padding:9px 18px;
  border:1px solid rgba(169,199,255,.4);
  border-radius:999px;
  color:var(--coke-silver);
  font-size:.9rem;
  font-weight:600;
  letter-spacing:.04em;
}

.coke-cta i{
  width:8px;
  height:8px;
  border-radius:50%;
  background:var(--coke-ice);
  box-shadow:0 0 0 0 rgba(169,199,255,.6);
  animation:cokePulse 1.8s ease-out infinite;
}

.coke-cta.done{
  opacity:.45;
}

.coke-cta.done i{
  animation:none;
}

@keyframes cokePulse{
  to{
    box-shadow:0 0 0 12px rgba(169,199,255,0);
  }
}

.coke-counter{
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:8px;
  margin-top:18px;
}

.coke-counter span{
  font:500 2.4rem/1 'Playfair Display',serif;
  color:var(--coke-silver);
}

.coke-pips{
  display:flex;
  gap:8px;
}

.coke-pips i{
  width:26px;
  height:3px;
  border-radius:3px;
  background:rgba(169,199,255,.22);
  transition:.25s background,.25s box-shadow;
}

.coke-pips i.on{
  background:var(--coke-ice);
  box-shadow:0 0 10px rgba(169,199,255,.7);
}

.coke-counter small{
  font-size:.75rem;
  letter-spacing:.1em;
  color:#8fa4c2;
}

.coke-message{
  width:min(560px,100%);
  min-height:48px;
  margin:12px auto 0;
  color:#b9c8de;
  line-height:1.55;
}

.coke-final{
  width:min(580px,100%);
  margin:14px auto 0;
  padding:26px 22px 4px;
  border-top:1px solid rgba(169,199,255,.28);
}

.coke-final strong{
  display:block;
  font:600 1.5rem/1.2 'Playfair Display',serif;
  color:var(--coke-silver);
}

.coke-final p{
  margin:8px 0 0;
  color:#b9c8de;
  line-height:1.6;
}

.coke-final .coke-line{
  display:block;
  margin-top:22px;
  font:italic 500 clamp(1.5rem,4.5vw,2.1rem)/1.25 'Playfair Display',serif;
  color:#fff;
  text-shadow:0 0 28px rgba(169,199,255,.45);
}

.coke-chapter .next-btn{
  margin-top:24px;
  background:var(--coke-silver);
  color:var(--coke-bg);
  box-shadow:0 10px 28px rgba(169,199,255,.18);
}

@media(max-width:700px){

  .coke-chapter{
    padding:78px 16px 54px;
  }

  .coke-chapter .chapter-number{
    top:22px;
    left:20px;
  }

  .coke-chapter .eyebrow{
    font-size:.58rem;
    letter-spacing:.13em;
    margin-bottom:13px;
  }

  .coke-chapter>h2{
    font-size:clamp(2.35rem,11vw,3.8rem);
    line-height:.94;
    margin-bottom:12px;
  }

  .coke-lead{
    font-size:.94rem;
    max-width:340px;
  }

  .coke-counter span{
    font-size:2rem;
  }

  .coke-message{
    font-size:.9rem;
  }

  .coke-chapter .next-btn{
    padding:12px 16px;
    font-size:.82rem;
  }
}

/* GALLERY */

.gallery-chapter{
  background:var(--ice);
}

.photo-grid{
  width:min(1050px,100%);
  display:grid;
  grid-template-columns:repeat(5,1fr);
  gap:14px;
  margin:30px 0;
  align-items:start;
}

.photo-grid img{
  width:100%;
  aspect-ratio:4/5;
  object-fit:cover;
  border-radius:20px;
  border:2px solid var(--navy);
  background:#fff;
  box-shadow:4px 4px 0 var(--navy);
  transition:.25s;
}

.photo-grid img:hover{
  transform:translateY(-4px) rotate(-1deg);
}

/* LETTER */

.letter-chapter{
  background:#fff;
}

.letter-card{
  width:min(760px,100%);
  text-align:left;
  background:#fbfcff;
  border:1px solid var(--line);
  border-radius:30px;
  padding:clamp(26px,5vw,55px);
  box-shadow:var(--shadow);
  font:1.05rem/1.9 'Playfair Display',serif;
}

.letter-card p{
  margin:0 0 20px;
}

.letter-card .signature{
  text-align:right;
  margin-top:35px;
  color:var(--blue);
  font-size:1.2rem;
}

/* FINAL */

.final-chapter{
  background:radial-gradient(circle at 50% 20%,#dceaff,#071224 60%);
  color:#fff;
  min-height:100svh;
}

.final-chapter .eyebrow{
  color:var(--blue2);
}

.final-chapter h2 span{
  color:var(--blue2);
}

.final-copy,
.final-line{
  max-width:620px;
  font-size:1.15rem;
  line-height:1.7;
  color:#d2dded;
}

.final-photo{
  width:min(330px,75vw);
  margin:30px auto 18px;
  transform:rotate(-2deg);
}

.final-photo img{
  display:block;
  width:100%;
  border:7px solid #fff;
  box-shadow:0 20px 50px rgba(0,0,0,.3);
}

.final-infinity{
  font:1.4rem 'Space Mono',monospace;
  color:var(--blue2);
  margin:15px 0 25px;
}

.final-chapter .ghost-btn{
  background:rgba(255,255,255,.1);
  color:#fff;
  border-color:rgba(255,255,255,.25);
}

/* INFINITY */

.hero-chapter > *:not(.hero-glow){
  position:relative;
  z-index:2;
}

.infinity-portal{
  border:0;
  background:transparent;
  cursor:pointer;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:8px;
  margin:0 auto 8px;
  color:var(--blue);
}

.infinity-portal span{
  font:500 7rem/.8 'Playfair Display',serif;
  text-shadow:0 12px 35px rgba(76,124,255,.28);
  transition:.25s transform,.25s text-shadow;
}

.infinity-portal:hover span{
  transform:scale(1.08) rotate(-3deg);
  text-shadow:0 18px 45px rgba(76,124,255,.4);
}

.infinity-portal small{
  font:700 .58rem 'Space Mono',monospace;
  letter-spacing:.16em;
  color:var(--muted);
}

.infinity-chapter{
  background:radial-gradient(circle at 50% 20%,#eef5ff,#fff 62%);
}

.techinfinity-word{
  font:700 clamp(2.1rem,7vw,5.5rem)/1 'Space Mono',monospace;
  letter-spacing:-.08em;
  color:var(--navy);
  margin:5px 0 20px;
}

.techinfinity-word span{
  color:var(--blue);
  font-family:'Playfair Display',serif;
  display:inline-block;
  transform:scale(1.18);
  margin:0 .04em;
}

.infinity-button{
  border:1px solid var(--navy);
  background:var(--navy);
  color:#fff;
  border-radius:999px;
  padding:12px 18px;
  cursor:pointer;
  font:700 .7rem 'Space Mono',monospace;
  letter-spacing:.08em;
  box-shadow:0 10px 25px rgba(8,20,38,.15);
  transition:.2s transform,.2s box-shadow;
}

.infinity-button:hover{
  transform:translateY(-2px);
  box-shadow:0 14px 30px rgba(8,20,38,.22);
}

.infinity-message{
  min-height:26px;
  margin:14px auto 0;
  max-width:650px;
  transition:.25s;
  color:var(--muted);
}

.infinity-message.revealed{
  color:var(--navy);
  font-weight:700;
}

.vault-grid{
  display:grid;
  grid-template-columns:repeat(5,1fr);
  gap:14px;
  width:min(1000px,100%);
  margin:30px 0;
}

.vault-card{
  aspect-ratio:1/1.12;
  border:1px solid rgba(76,124,255,.22);
  border-radius:24px;
  background:linear-gradient(160deg,#f8fbff,#e6efff);
  color:var(--navy);
  padding:20px;
  text-align:left;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  cursor:pointer;
  box-shadow:0 14px 30px rgba(8,20,38,.08);
  transition:.25s transform,.25s box-shadow,.25s background;
}

.vault-card:hover{
  transform:translateY(-6px) rotate(-1deg);
  box-shadow:0 20px 40px rgba(8,20,38,.14);
}

.vault-card.opened{
  background:var(--navy);
  color:#fff;
  opacity:1;
}

.vault-card strong{
  font:600 clamp(1.1rem,2vw,1.5rem)/1.05 'Playfair Display',serif;
}

.vault-card small{
  font:700 .58rem 'Space Mono',monospace;
  letter-spacing:.1em;
  color:var(--muted);
}

.vault-card.opened small{
  color:var(--blue2);
}

.vault-number{
  font:700 1.4rem 'Space Mono',monospace;
  color:var(--blue);
}

.vault-card.opened .vault-number{
  color:var(--blue2);
}

/* TECH × SCHBANG */

.tech-schbang-lockup{
  display:flex;
  align-items:center;
  justify-content:center;
  gap:14px;
  font:700 clamp(1.5rem,5vw,3.7rem)/1 'Space Mono',monospace;
  letter-spacing:-.08em;
  margin:8px 0 22px;
  color:var(--navy);
}

.tech-schbang-lockup b{
  font:500 1.15em 'Playfair Display',serif;
  color:var(--blue);
  transition:.35s transform,.35s text-shadow;
}

.tech-schbang-lockup.lit b{
  transform:scale(1.25) rotate(8deg);
  text-shadow:0 0 28px rgba(76,124,255,.65);
}

.origin-cards{
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:14px;
  width:min(900px,100%);
  margin:26px 0 18px;
}

.origin-card{
  border:1px solid var(--line);
  border-radius:24px;
  background:#fff;
  padding:24px;
  text-align:left;
  cursor:pointer;
  box-shadow:var(--shadow);
  transition:.25s transform,.25s border-color,.25s background;
}

.origin-card:hover{
  transform:translateY(-5px);
  border-color:var(--blue);
  background:#f8fbff;
}

.origin-card.schbang{
  background:var(--navy);
  color:#fff;
  border-color:rgba(169,199,255,.25);
}

.origin-card small{
  display:block;
  font:700 .58rem 'Space Mono',monospace;
  letter-spacing:.12em;
  color:var(--blue);
  margin-bottom:10px;
}

.origin-card.schbang small{
  color:var(--blue2);
}

.origin-card strong{
  display:block;
  font:600 clamp(1.2rem,3vw,2rem) 'Playfair Display',serif;
  margin-bottom:9px;
}

.origin-card span{
  font-size:.86rem;
  color:var(--muted);
}

.origin-card.schbang span{
  color:#cbd8eb;
}

/* SIDE QUEST */

.sidequest-chapter{
  background:linear-gradient(180deg,#fff,#f3f7ff);
}

.sidequest-progress{
  width:min(800px,100%);
  margin:24px 0 8px;
  text-align:left;
}

.sidequest-progress>span{
  font:700 .62rem 'Space Mono',monospace;
  color:var(--muted);
  letter-spacing:.1em;
}

.sidequest-progress>div{
  height:8px;
  border-radius:99px;
  background:#e3eaf5;
  overflow:hidden;
  margin-top:9px;
}

.sidequest-progress i{
  display:block;
  width:0;
  height:100%;
  background:var(--blue);
  transition:.35s width;
}

.sidequest-grid{
  display:grid;
  grid-template-columns:repeat(5,1fr);
  gap:12px;
  width:min(1000px,100%);
  margin:22px 0;
}

.sidequest-card{
  min-height:190px;
  border:1px solid var(--line);
  border-radius:22px;
  background:#fff;
  padding:18px;
  text-align:left;
  cursor:pointer;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  box-shadow:0 12px 28px rgba(8,20,38,.07);
  transition:.25s transform,.25s background,.25s color;
}

.sidequest-card:hover{
  transform:translateY(-5px);
}

.sidequest-card small{
  font:700 1.2rem 'Space Mono',monospace;
  color:var(--blue);
}

.sidequest-card strong{
  font:600 1.25rem/1.05 'Playfair Display',serif;
}

.sidequest-card span{
  font:700 .56rem/1.4 'Space Mono',monospace;
  letter-spacing:.08em;
  color:var(--muted);
}

.sidequest-card.done{
  background:var(--navy);
  color:#fff;
}

.sidequest-card.done small,
.sidequest-card.done span{
  color:var(--blue2);
}

.sidequest-reveal{
  width:min(760px,100%);
  min-height:54px;
  padding:16px 20px;
  border-radius:18px;
  background:#eaf1ff;
  color:var(--navy);
  font-weight:600;
}

/* MEMORY LANE */

.memory-lane-chapter{
  background:radial-gradient(circle at 15% 10%,#eef5ff 0,#fff 42%,#f4f7fb 100%);
}

.memory-progress{
  width:min(820px,100%);
  margin:22px 0 20px;
  text-align:left;
}

.memory-progress>span{
  font:700 .62rem 'Space Mono',monospace;
  letter-spacing:.12em;
  color:var(--muted);
}

.memory-progress>div{
  height:7px;
  background:#e4eaf3;
  border-radius:99px;
  margin-top:8px;
  overflow:hidden;
}

.memory-progress i{
  display:block;
  width:10%;
  height:100%;
  background:var(--blue);
  transition:.35s width;
}

.memory-card{
  width:min(1040px,100%);
  display:grid;
  grid-template-columns:minmax(0,1.08fr) minmax(320px,.92fr);
  gap:28px;
  align-items:stretch;
  margin:8px 0 20px;
}

.memory-photo-wrap{
  min-height:520px;
  padding:14px;
  background:#fff;
  border:1px solid #dfe6f0;
  box-shadow:0 20px 55px rgba(8,20,38,.11);
  transform:rotate(-1.2deg);
  display:flex;
  width:100%;
  overflow:hidden;
}

.memory-photo-wrap img{
  width:100%;
  height:100%;
  object-fit:cover;
  min-height:490px;
  display:block;
  max-width:100%;
  opacity:1;
  visibility:visible;
}

.memory-prompt{
  background:#0b1d36;
  color:#fff;
  border-radius:28px;
  padding:30px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  box-shadow:0 22px 50px rgba(8,20,38,.18);
}

.memory-prompt .eyebrow{
  color:#a9c7ff;
}

.memory-prompt h3{
  font:600 clamp(1.6rem,3vw,2.45rem)/1.08 'Playfair Display',serif;
  margin:4px 0 22px;
}

.memory-prompt textarea{
  width:100%;
  min-height:210px;
  resize:vertical;
  border:1px solid rgba(169,199,255,.25);
  border-radius:18px;
  background:rgba(255,255,255,.06);
  color:#fff;
  padding:16px;
  font:500 .95rem/1.6 'DM Sans',sans-serif;
  outline:none;
}

.memory-prompt textarea::placeholder{
  color:#9baec8;
}

.memory-prompt textarea:focus{
  border-color:#a9c7ff;
  box-shadow:0 0 0 3px rgba(76,124,255,.16);
}

.memory-actions{
  display:flex;
  justify-content:flex-end;
  margin-top:15px;
}

.memory-finish{
  width:min(760px,100%);
  padding:42px 28px;
  border:1px solid #dbe5f3;
  border-radius:30px;
  background:#fff;
  box-shadow:var(--shadow);
}

.memory-finish h3{
  font:600 clamp(2rem,5vw,3.2rem)/1.02 'Playfair Display',serif;
  margin:6px 0 12px;
}

.memory-finish h3 span{
  color:var(--blue);
}

.memory-finish p{
  color:var(--muted);
}

.memory-finish form{
  margin:24px 0 8px;
}

.memory-note{
  font-size:.76rem!important;
  max-width:620px;
  margin:12px auto 0;
}

.infinity-mark.small{
  font-size:4rem;
  margin-bottom:5px;
}

.memory-lane-chapter>.primary-btn{
  margin-top:22px;
}

/* SCRAPBOOK */

.scrapbook-chapter{
  background:linear-gradient(180deg,#f6f8fc,#fff 30%,#eef3fa);
}

.marquee{
  width:100vw;
  max-width:none;
  overflow:hidden;
  position:relative;
  left:50%;
  transform:translateX(-50%);
  margin:20px 0 34px;
  border-top:1px solid #dbe3ee;
  border-bottom:1px solid #dbe3ee;
  background:#0b1d36;
  color:#fff;
  padding:11px 0;
  white-space:nowrap;
}

.marquee>div{
  display:inline-block;
  min-width:100%;
  font:700 .7rem 'Space Mono',monospace;
  letter-spacing:.12em;
  animation:marquee 28s linear infinite;
}

.marquee>div+div{
  position:absolute;
  left:100%;
  top:0;
  padding:11px 0;
}

@keyframes marquee{
  from{
    transform:translateX(0);
  }
  to{
    transform:translateX(-100%);
  }
}

.scrapbook{
  width:min(1080px,100%);
  display:grid;
  grid-template-columns:repeat(12,1fr);
  gap:20px;
  align-items:start;
}

.scrap-card{
  margin:0;
  background:#fff;
  padding:10px 10px 18px;
  border:1px solid #d9e1ec;
  box-shadow:0 16px 35px rgba(8,20,38,.10);
  transform:rotate(var(--tilt));
  transition:.25s transform,.25s box-shadow;
  grid-column:span 3;
}

.scrap-card:nth-child(5n+1){
  grid-column:span 4;
}

.scrap-card:nth-child(5n+2){
  grid-column:span 3;
}

.scrap-card:nth-child(5n+3){
  grid-column:span 2;
}

.scrap-card:nth-child(5n+4){
  grid-column:span 3;
}

.scrap-card:nth-child(5n){
  grid-column:span 4;
}

.scrap-card:hover{
  transform:translateY(-7px) rotate(0);
  box-shadow:0 24px 45px rgba(8,20,38,.16);
  z-index:2;
}

.scrap-card img{
  width:100%;
  aspect-ratio:1/1.06;
  object-fit:cover;
  display:block;
}

.scrap-card figcaption{
  font:700 .53rem 'Space Mono',monospace;
  letter-spacing:.07em;
  text-transform:uppercase;
  color:#65748a;
  margin:11px 3px 0;
}

.scrapbook-end{
  margin:46px auto 28px;
  text-align:center;
}

.scrapbook-end span{
  font:700 .6rem 'Space Mono',monospace;
  letter-spacing:.14em;
  color:var(--muted);
}

.scrapbook-end strong{
  display:block;
  font:500 5rem/.9 'Playfair Display',serif;
  color:var(--blue);
  margin:12px;
}

.scrapbook-end p{
  color:var(--muted);
}

/* OPENING GATE */

.lock-screen{
  background:radial-gradient(circle at 50% 12%,#172e58 0,#0a1830 38%,#030810 100%);
  color:#fff;
  padding:24px;
  isolation:isolate;
}

.lock-screen:before{
  content:"";
  position:absolute;
  inset:0;
  background:radial-gradient(circle at 50% 55%,rgba(76,124,255,.18),transparent 34%),linear-gradient(transparent,rgba(0,0,0,.18));
  z-index:-1;
}

.lock-stars{
  position:absolute;
  inset:0;
  opacity:.55;
  background-image:
    radial-gradient(circle at 12% 22%,#fff 0 1px,transparent 1.5px),
    radial-gradient(circle at 78% 18%,#a9c7ff 0 1px,transparent 1.5px),
    radial-gradient(circle at 88% 72%,#fff 0 1px,transparent 1.5px),
    radial-gradient(circle at 22% 78%,#a9c7ff 0 1px,transparent 1.5px);
  background-size:260px 220px,310px 280px,370px 330px,430px 360px;
  animation:starDrift 20s linear infinite;
}

@keyframes starDrift{
  to{
    background-position:60px 35px,-80px 50px,40px -50px,-70px -30px;
  }
}

.lock-content{
  width:min(960px,100%);
}

.lock-kicker{
  color:var(--blue2);
  margin-bottom:10px;
}

.lock-infinity{
  border:0;
  background:transparent;
  color:#fff;
  font:500 clamp(5.5rem,14vw,10rem)/.8 'Playfair Display',serif;
  text-shadow:0 0 35px rgba(169,199,255,.5),0 0 90px rgba(76,124,255,.25);
  cursor:pointer;
  transition:.35s transform,.35s text-shadow;
  padding:10px 28px;
}

.lock-infinity:hover{
  transform:scale(1.05);
  text-shadow:0 0 45px rgba(169,199,255,.72),0 0 120px rgba(76,124,255,.35);
}

.lock-label{
  font:700 .62rem 'Space Mono',monospace;
  letter-spacing:.2em;
  color:#9eb1cb;
  margin:8px 0 12px;
}

.lock-content h1{
  font-size:clamp(2.9rem,7vw,6.8rem);
  color:#fff;
  margin:0 auto 18px;
  max-width:1000px;
}

.lock-content h1 span{
  color:var(--blue2);
}

.lock-copy{
  color:#bdcbe0;
  max-width:680px;
  font-size:clamp(.95rem,2vw,1.12rem);
  line-height:1.7;
}

.countdown-shell{
  width:min(760px,100%);
  margin:24px auto 14px;
  padding:17px 20px;
  border:1px solid rgba(169,199,255,.16);
  border-radius:28px;
  background:rgba(255,255,255,.045);
  box-shadow:inset 0 1px rgba(255,255,255,.05),0 20px 60px rgba(0,0,0,.2);
  backdrop-filter:blur(12px);
}

.countdown{
  margin:0;
  gap:clamp(7px,2vw,18px);
}

.countdown div{
  min-width:clamp(58px,10vw,100px);
}

.countdown strong{
  color:#fff;
}

.countdown span{
  color:#8fa4c2;
}

.countdown i{
  color:var(--blue2);
}

.unlock-date{
  color:#a9c7ff;
  margin:14px 0 18px;
}

.lock-screen .ghost-btn{
  background:rgba(255,255,255,.06);
  color:#e9f1ff;
  border-color:rgba(169,199,255,.25);
}

.lock-screen .primary-btn{
  background:#fff;
  color:#081426;
}

.lock-note{
  color:#8fa4c2;
  margin-top:14px;
}

.lock-secret-hint{
  position:absolute;
  bottom:8px;
  left:50%;
  transform:translateX(-50%);
  font:1rem 'Playfair Display',serif;
  color:rgba(169,199,255,.08);
  pointer-events:none;
}

.orbit-a{
  border-color:rgba(169,199,255,.12);
}

.orbit-b{
  border-color:rgba(76,124,255,.18);
}

.hero-chapter{
  background:radial-gradient(circle at 50% 20%,#d8e8ff 0,#f7faff 48%,#fff 100%);
  padding-top:90px;
}

.hero-chapter:before{
  content:"";
  position:absolute;
  inset:0;
  background:radial-gradient(circle at 50% 52%,rgba(76,124,255,.08),transparent 25%);
  pointer-events:none;
}

.hero-orbit{
  position:absolute;
  border:1px solid rgba(76,124,255,.14);
  border-radius:50%;
  pointer-events:none;
}

.hero-orbit-one{
  width:min(76vw,780px);
  height:min(34vw,340px);
  transform:rotate(-12deg);
  animation:heroFloat 8s ease-in-out infinite;
}

.hero-orbit-two{
  width:min(60vw,620px);
  height:min(28vw,280px);
  transform:rotate(19deg);
  border-color:rgba(8,20,38,.08);
  animation:heroFloat 10s ease-in-out infinite reverse;
}

@keyframes heroFloat{
  50%{
    transform:rotate(-8deg) translateY(-10px);
  }
}

.hero-chapter>*:not(.hero-glow):not(.hero-orbit){
  z-index:1;
}

.hero-mini{
  font:700 .6rem 'Space Mono',monospace;
  letter-spacing:.16em;
  color:var(--muted);
  margin:4px 0 16px;
}

.hero-chapter h2{
  font-size:clamp(3.2rem,8vw,7.2rem);
  margin:0 0 18px;
}

.hero-trust-row{
  display:flex;
  align-items:center;
  justify-content:center;
  gap:12px;
  margin:24px 0 26px;
  font:700 .58rem 'Space Mono',monospace;
  letter-spacing:.14em;
  color:#687a94;
}

.hero-trust-row i{
  font:1.3rem 'Playfair Display',serif;
  color:var(--blue);
}

.hero-start{
  padding-left:25px;
  padding-right:25px;
}

.hero-footnote{
  font-size:.72rem;
  color:#8291a6;
  margin:15px 0 0;
}

/* RESPONSIVE */

@media(max-width:900px){

  .vault-grid{
    grid-template-columns:repeat(3,1fr);
  }

  .photo-grid{
    grid-template-columns:repeat(3,1fr);
  }

  .memory-card{
    grid-template-columns:1fr;
  }

  .memory-photo-wrap{
    min-height:400px;
  }

  .memory-photo-wrap img{
    min-height:370px;
    height:370px;
  }

  .scrap-card,
  .scrap-card:nth-child(5n+1),
  .scrap-card:nth-child(5n+2),
  .scrap-card:nth-child(5n+3),
  .scrap-card:nth-child(5n+4),
  .scrap-card:nth-child(5n){
    grid-column:span 4;
  }
}

@media(max-width:720px){

  .countdown{
    gap:5px;
  }

  .countdown div{
    min-width:62px;
  }

  .countdown i{
    font-size:1rem;
  }

  .answers{
    grid-template-columns:1fr;
  }

  .gift-grid{
    grid-template-columns:repeat(3,1fr);
  }

  .photo-grid{
    grid-template-columns:repeat(2,1fr);
  }

  .catch-game{
    height:360px;
  }

  .chapter{
    padding-left:18px;
    padding-right:18px;
  }

  .chapter-number{
    left:18px;
  }

  .music-toggle span{
    display:none;
  }

  .vault-grid{
    grid-template-columns:repeat(2,1fr);
  }

  .coke-stats{
    grid-template-columns:1fr;
  }

  .coke-stamp{
    right:0;
    bottom:5px;
  }

  .infinity-portal span{
    font-size:5.8rem;
  }

  .memory-photo-wrap{
    min-height:330px;
  }

  .memory-photo-wrap img{
    min-height:300px;
    height:300px;
  }

  .memory-prompt{
    padding:22px;
  }

  .memory-prompt textarea{
    min-height:180px;
  }

  .scrapbook{
    grid-template-columns:repeat(6,1fr);
    gap:13px;
  }

  .scrap-card,
  .scrap-card:nth-child(5n+1),
  .scrap-card:nth-child(5n+2),
  .scrap-card:nth-child(5n+3),
  .scrap-card:nth-child(5n+4),
  .scrap-card:nth-child(5n){
    grid-column:span 3;
  }

  .marquee>div{
    animation-duration:22s;
  }
}

@media(max-width:600px){

  .lock-screen{
    padding:18px;
  }

  .lock-infinity{
    font-size:6.2rem;
    padding:12px 22px;
  }

  .lock-content h1{
    font-size:clamp(2.35rem,12vw,4rem);
    line-height:.98;
  }

  .lock-copy{
    font-size:.9rem;
    line-height:1.55;
  }

  .countdown-shell{
    padding:14px 8px;
    border-radius:22px;
  }

  .countdown{
    gap:4px;
  }

  .countdown div{
    min-width:56px;
  }

  .countdown strong{
    font-size:1.35rem;
  }

  .countdown span{
    font-size:.47rem;
    letter-spacing:.08em;
    margin-top:6px;
  }

  .countdown i{
    font-size:1rem;
  }

  .unlock-date{
    font-size:.55rem;
    letter-spacing:.09em;
  }

  .lock-screen .ghost-btn,
  .lock-screen .primary-btn{
    width:100%;
    max-width:320px;
  }

  .hero-chapter{
    padding-top:76px;
    padding-bottom:60px;
  }

  .hero-orbit-one{
    width:120vw;
    height:55vw;
  }

  .hero-orbit-two{
    width:100vw;
    height:45vw;
  }

  .hero-mini{
    font-size:.5rem;
    line-height:1.5;
    max-width:280px;
  }

  .hero-chapter h2{
    font-size:clamp(2.7rem,14vw,4.6rem);
  }

  .hero-copy{
    font-size:1rem;
    line-height:1.55;
  }

  .hero-trust-row{
    gap:7px;
    font-size:.48rem;
    letter-spacing:.09em;
  }

  .hero-trust-row i{
    font-size:1.05rem;
  }

  .hero-start{
    width:min(320px,100%);
  }
}

/* ACCESSIBILITY */

.sr-only{
  position:absolute!important;
  width:1px!important;
  height:1px!important;
  padding:0!important;
  margin:-1px!important;
  overflow:hidden!important;
  clip:rect(0,0,0,0)!important;
  white-space:nowrap!important;
  border:0!important;
}

/* =========================================================
   FINAL IMAGE SAFETY FIX
   ========================================================= */

.memory-photo-wrap{
  display:flex !important;
  width:100% !important;
  min-height:520px !important;
  overflow:hidden !important;
  background:#fff !important;
}

.memory-photo-wrap img#memoryPhoto{
  display:block !important;
  width:100% !important;
  height:490px !important;
  min-height:490px !important;
  max-width:100% !important;
  object-fit:cover !important;
  opacity:1 !important;
  visibility:visible !important;
}

.scrap-card img{
  display:block !important;
  width:100% !important;
  max-width:100% !important;
  opacity:1 !important;
  visibility:visible !important;
}

@media(max-width:900px){
  .memory-photo-wrap{
    min-height:400px !important;
  }

  .memory-photo-wrap img#memoryPhoto{
    height:370px !important;
    min-height:370px !important;
  }
}

@media(max-width:720px){
  .memory-photo-wrap{
    min-height:330px !important;
  }

  .memory-photo-wrap img#memoryPhoto{
    height:300px !important;
    min-height:300px !important;
  }
}
