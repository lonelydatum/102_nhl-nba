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

  tl.from(".t2", stag(vh), "+=.2");
  tl.to(".t2", { duration: 0.3, opacity: 0 }, `+=${READ.t2}`);

  tl.add("end");
  tl.to(
    ".bar",
    {
      scaleY: 0,
      stagger: 0.03,
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
  WIDTH: 50,
  HEIGHT: 300,
  GAP: 17,
};

start(barOptions, { y: size.h });

module.exports = {};
