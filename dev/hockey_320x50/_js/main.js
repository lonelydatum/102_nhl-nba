import {
  init,
  olg,
  size,
  animate_bars_horizontal,
  animate_bars_vertical,
  stag,
  READ,
} from "../../_common/js/hockey.js";

function start(barOptions, vh = { x: -size.w }) {
  const tl = init();

  const fun = barOptions.HEIGHT > barOptions.WIDTH ? animate_bars_horizontal : animate_bars_vertical;
  fun(barOptions);
  TweenLite.to(".hero img", { duration: 3, ...barOptions.scale });

  tl.from(".t1", stag(vh), "+=.4");
  tl.to(".t1", { duration: 0.3, opacity: 0 }, `+=${READ.t1}`);

  tl.from(".t2", stag(vh));
  const listter = [".frame1", ".logos"];

  tl.to(listter, { duration: 0.3, opacity: 0 }, `+=${READ.t2}`);

  tl.to([".frame2"], { duration: 0.3, opacity: 1 }, "t2");

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
