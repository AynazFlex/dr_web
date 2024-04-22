"use strict";

const anchor = document.querySelector("#link"),
  animationTime = 300,
  framesCount = 20;

console.log(anchor);

anchor.addEventListener("click", (e) => {
  e.preventDefault();

  const coordY =
    document.querySelector(anchor.getAttribute("href")).getBoundingClientRect()
      .top + window.scrollY;
  const scroller = setInterval(function () {
    let scrollBy = coordY / framesCount;

    if (
      scrollBy > window.scrollY - coordY &&
      window.innerHeight + window.scrollY < document.body.offsetHeight
    ) {
      window.scrollBy(0, scrollBy);
    } else {
      window.scrollTo(0, coordY);
      clearInterval(scroller);
    }
  }, animationTime / framesCount);
});
