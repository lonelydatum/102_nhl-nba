import { init, size, colors, READ, stag, animate_bars_horizontal, olg } from "../../_common/js/basketball.js";
function start(barOptions, vh = { x: -size.w }) {
  let ignoreText2 = barOptions.ignoreText2 || false;
  console.log(ignoreText2);

  const tl = init();

  const fun = barOptions.HEIGHT > barOptions.WIDTH ? animate_bars_horizontal : animate_bars_vertical;
  fun(barOptions);
  TweenLite.to(".hero img", { duration: 3, ...barOptions.scale });

  tl.from(".t1", stag(vh), "+=.4");
  tl.to(".t1", { duration: 0.3, opacity: 0 }, `+=${READ.t1}`);
  tl.from(".t2", stag(vh), "+=.2");
  tl.to(".t2", { duration: 0.3, opacity: 0 }, `+=${READ.t2}`);

  tl.add("end");
  tl.to(
    ".bar",
    {
      duration: 0.3,
      opacity: 0,
      y: "+=50",
      // stagger: 0.02,
    },
    "end",
  );
  tl.to(".logos", { opacity: 0, duration: 0.3 }, "end");

  tl.set(".frame2", { opacity: 1 }, "end");

  tl.from(".t3", stag(vh));

  tl.from(".t4", { duration: 0.3, opacity: 0 });

  tl.from([".cta", ".legalBtn"], { duration: 0.3, opacity: 0 });

  tl.add(olg());
}

const barOptions = {
  TOTAL: 14,
  WIDTH: 17,
  HEIGHT: 300,
  GAP: 3,
  scale: { scale: 0.72, x: -132, y: -155 },
};

start(barOptions, { y: size.h });

module.exports = {};
