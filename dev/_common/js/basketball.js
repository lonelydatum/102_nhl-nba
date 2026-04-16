import { olg } from "./proline";
const banner = document.getElementById("banner");
const size = { w: banner.offsetWidth, h: banner.offsetHeight };

gsap.defaults({
  ease: "power3.out",
});

const { w, h } = size;

let READ = {
  t1: 2,
  t2: 1.7,
  t3: 2.1,
};

if (universalBanner.name === "agnostic") {
  READ = {
    t1: 1.8,
    t2: 1.6,
    t3: 2.1,
  };
}

function init() {
  if (universalBanner.name === "agnostic") {
    document.getElementById("legalContent").innerHTML = "Individuals must be 18+ to play in-store with PROLINE.";
  }
  const tl = new TimelineMax({
    onComplete: () => {
      if (document.getElementById("legalBtn")) {
        TweenLite.set("#legalBtn", { display: "block" });
      }
    },
  });
  tl.set(".frame1", { opacity: 1 });
  return tl;
}

const colors = [
  "ffffff",
  "ECFBF1",
  "D9F7E4",
  "C3F3D5",
  "B1EDC7",
  "9EE9B9",
  "8AE6AC",
  "75E19D",
  "62DD8F",
  "4ED881",
  "3CD574",
  "26D065",
  "15CC58",
];

function stag(vh) {
  return { duration: 0.35, opacity: 0, stagger: 0.1, ...vh };
}

function start(barOptions, vh = { x: -size.w }) {
  let ignoreText2 = barOptions.ignoreText2 || false;
  console.log(ignoreText2);

  const tl = init();

  const fun = barOptions.HEIGHT > barOptions.WIDTH ? animate_bars_horizontal : animate_bars_vertical;
  fun(barOptions);
  TweenLite.to(".hero img", { duration: 3, ...barOptions.scale });

  tl.from(".t1", stag(vh), "+=.4");
  tl.to(".t1", { duration: 0.3, opacity: 0 }, `+=${READ.t1}`);
  const listter = [".frame1"];
  if (ignoreText2) {
    tl.to(listter, { duration: 0.3, opacity: 0 });
  } else {
    tl.from(".t2", stag(vh));
    tl.to(listter, { duration: 0.3, opacity: 0 }, `+=${READ.t2}`);
  }

  tl.to(".frame2", { duration: 0.3, opacity: 1 }, "t2");

  if (universalBanner.size === "300x250" || universalBanner.size === "160x600" || universalBanner.size === "300x600") {
    tl.to([".logos"], { duration: 0.2, opacity: 0 }, "-=.5");
    tl.from(".t4", { duration: 0.35, opacity: 0 });
    tl.from(".t3", stag(vh), "+=.1");
  } else {
    tl.set(".logos", { opacity: 0, duration: 0.1 }, "-=.5");
    tl.from(".t3", stag(vh));
    tl.to([".t3"], { duration: 0.3, opacity: 0 }, `+=${READ.t3}`);
    tl.from(".t4", { duration: 0.3, opacity: 0 });
  }
  // else{
  // 	tl.from('.t3', stag(vh));
  // 	tl.to('.logos', {opacity:0,duration:.3}, "-=1");
  // 	tl.to([".t3"], {duration:.3, opacity:0}, `+=${READ.t3}`)
  // 	tl.from(".t4", {duration:.3, opacity:0})
  // 	console.log('sldkfjksdlfj');
  // }

  tl.from([".cta", ".legalBtn"], { duration: 0.3, opacity: 0 }, "+=.3");

  tl.add(olg());
}

function animate_bars_horizontal(barOptions) {
  const { TOTAL, WIDTH, HEIGHT, GAP } = barOptions;

  const bars = document.getElementById("bars");

  for (let i = 0; i < TOTAL; i++) {
    const barItem = document.createElement("div");
    const height = HEIGHT - i * GAP;

    TweenLite.set(barItem, {
      transformOrigin: "0% 100%",
      className: `bar bar_${i}`,
      width: WIDTH,
      height,

      scale: 1,
      y: HEIGHT - height,
      backgroundColor: `#${colors[i]}`,
    });

    bars.appendChild(barItem);
  }

  const tl = new TimelineMax();

  tl.from(".bar", {
    scaleY: 0,
    stagger: 0.06,
  });
  return tl;
}

function animate_bars_vertical(barOptions) {
  const { TOTAL, WIDTH, HEIGHT, GAP } = barOptions;

  const bars = document.getElementById("bars");

  for (let i = 0; i < TOTAL; i++) {
    const barItem = document.createElement("div");
    TweenLite.set(barItem, {
      className: `bar bar_${i}`,
      height: HEIGHT,
      width: WIDTH - i * GAP,
      y: HEIGHT * i,
      backgroundColor: `#${colors[i]}`,
    });

    bars.appendChild(barItem);
  }

  const tl = new TimelineMax();

  tl.from(".bar", {
    width: 0,
    stagger: 0.06,
  });
  return tl;
}

export { size, init, start, colors, READ, animate_bars_horizontal, stag, olg };
