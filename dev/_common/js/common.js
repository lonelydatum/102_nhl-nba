import { olg } from "./proline";
const banner = document.getElementById("banner");
const size = { w: banner.offsetWidth, h: banner.offsetHeight };

gsap.defaults({
  ease: "power3.out",
});

const { w, h } = size;

const READ = {
  t1: 1.3,
  t2: 1.7,
  t3: 2.1,
};

function init() {
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
  "d4f035",
  "c4ed37",
  "b3ea38",
  "a3e73a",
  "93e43b",
  "82e13d",
  "72de3e",
  "62da40",
  "52d741",
  "41d443",
  "31d144",
  "21ce46",
  "10cb47",
  "00c849",
];

function stag(vh) {
  return { duration: 0.3, opacity: 0, stagger: 0.1, ...vh };
}

function start(barOptions, vh = { x: -size.w }) {
  const tl = init();

  const fun = barOptions.HEIGHT > barOptions.WIDTH ? animate_bars_horizontal : animate_bars_vertical;
  fun(barOptions);
  if (universalBanner.size === "300x250") {
    TweenLite.to(".hero img", { duration: 3, scale: 0.55 });
  } else {
    TweenLite.from(".hero img", { duration: 3, scale: "-=.1" });
  }

  // return
  console.log(stag(vh));
  tl.from(".t1", stag(vh), "+=.4");
  tl.to(".t1", { duration: 0.3, opacity: 0 }, `+=${READ.t1}`);

  tl.from(".t2", stag(vh));
  const listter = [".frame1"];

  if (universalBanner.size != "300x250" && universalBanner.size != "160x600") {
    // console.log(universalBanner.size);
    listter.push(".logos");
  }
  console.log(listter);
  tl.to(listter, { duration: 0.3, opacity: 0 }, `+=${READ.t2}`);

  tl.to(".frame2", { duration: 0.3, opacity: 1 }, "t2");

  tl.from(".t3", stag(vh));

  tl.to([".logos", ".t3"], { duration: 0.3, opacity: 0 }, `+=${READ.t3}`);

  tl.from(".t4", { duration: 0.3, opacity: 0 });
  tl.from([".cta", ".legalBtn"], { duration: 0.3, opacity: 0 });

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

export { size, init, start, colors };
