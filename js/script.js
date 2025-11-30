$('.owl-carousel').owlCarousel( {
autoplay:true,
autoplayTimeout: 2500,
autoplaySpeed: 1000,
loop: true,
responsive:{
    0:{
        items:1
    }, 
    1100:{
        items:1
    }
}
});

function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("open");
  document.getElementById("overlay").classList.toggle("open");
}