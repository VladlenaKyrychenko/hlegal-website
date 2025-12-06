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

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("username");
    const msg = document.getElementById("message");
    const tel = document.getElementById("tel");
    const email = document.getElementById("email");
    const btn = document.getElementById("submitBtn");

    [name, msg, tel, email].forEach(el => el.classList.remove("invalid"));

    let ok = true;

    if (name.value.trim() === "") { name.classList.add("invalid"); ok = false; }
    if (msg.value.trim() === "") { msg.classList.add("invalid"); ok = false; }
    if (tel.value.trim() === "" && email.value.trim() === "") {
        tel.classList.add("invalid");
        email.classList.add("invalid");
        ok = false;
    }

    if (!ok) return;

    btn.classList.add("loading");

    setTimeout(() => {
        btn.classList.remove("loading");
        btn.classList.add("sent");
        btn.textContent = "";
        document.getElementById("contactForm").reset();
    }, 1500);
});
document.getElementById("contactForm")
