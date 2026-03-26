import { stag, olg, init, size, READ, animate_bars_horizontal } from "../../_common/js/basketball.js";

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
  tl.to(listter, { duration: 0.3, opacity: 0 });

  tl.to(".frame2", { duration: 0.3, opacity: 1 }, "t2");

  tl.set(".logos", { opacity: 0, duration: 0.1 }, "-=.5");
  tl.from(".t3", stag(vh));

  tl.from(".t4", { duration: 0.3, opacity: 0 });
  tl.from([".cta", ".legalBtn"], { duration: 0.3, opacity: 0 });

  tl.add(olg());
}

const barOptions = {
  TOTAL: 12,
  WIDTH: 40,
  HEIGHT: 300,
  GAP: 30,
};

start(barOptions, { y: size.h });

module.exports = {};
