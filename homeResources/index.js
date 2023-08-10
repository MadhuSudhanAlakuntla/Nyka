let swiper = new Swiper(".swiper", {
  modules: [myPlugin],
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    700: {
      slidesPerView: 1.1,
      spaceBetween: 20,
    },
    750: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    800: {
      slidesPerView: 1.3,
      spaceBetween: 20,
    },

    850: {
      slidesPerView: 1.4,
      spaceBetween: 20,
    },
    900: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    950: {
      slidesPerView: 1.6,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 1.7,
      spaceBetween: 20,
    },

    1050: {
      slidesPerView: 1.8,
      spaceBetween: 20,
    },

    1100: {
      slidesPerView: 1.9,
      spaceBetween: 20,
    },
    1150: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
  debugger: true,
});

function myPlugin({ swiper, extendParams, on }) {
  extendParams({
    debugger: false,
  });

  on("init", () => {
    if (!swiper.params.debugger) return;
    console.log("init");
  });
  on("click", (swiper, e) => {
    if (!swiper.params.debugger) return;
    console.log("click");
  });
  on("tap", (swiper, e) => {
    if (!swiper.params.debugger) return;
    console.log("tap");
  });
  on("doubleTap", (swiper, e) => {
    if (!swiper.params.debugger) return;
    console.log("doubleTap");
  });
  on("sliderMove", (swiper, e) => {
    if (!swiper.params.debugger) return;
    console.log("sliderMove");
  });
  on("slideChange", () => {
    if (!swiper.params.debugger) return;
    console.log("slideChange", swiper.previousIndex, "->", swiper.activeIndex);
  });
  on("slideChangeTransitionStart", () => {
    if (!swiper.params.debugger) return;
    console.log("slideChangeTransitionStart");
  });
  on("slideChangeTransitionEnd", () => {
    if (!swiper.params.debugger) return;
    console.log("slideChangeTransitionEnd");
  });
  on("transitionStart", () => {
    if (!swiper.params.debugger) return;
    console.log("transitionStart");
  });
  on("transitionEnd", () => {
    if (!swiper.params.debugger) return;
    console.log("transitionEnd");
  });
  on("fromEdge", () => {
    if (!swiper.params.debugger) return;
    console.log("fromEdge");
  });
  on("reachBeginning", () => {
    if (!swiper.params.debugger) return;
    console.log("reachBeginning");
  });
  on("reachEnd", () => {
    if (!swiper.params.debugger) return;
    console.log("reachEnd");
  });
}
