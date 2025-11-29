"use strict";

$('.owl-carousel').owlCarousel({
  autoplay: true,
  autoplayTimeout: 2500,
  autoplaySpeed: 1000,
  loop: true,
  responsive: {
    0: {
      items: 1
    },
    1100: {
      items: 1
    }
  }
});