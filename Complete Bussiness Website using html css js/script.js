
/*====== onscroll and onload ===========*/

window.onscroll = () => {
    
    if(window.scrollY > 0){
        document.querySelector('.header-two').classList.add('active');
    }
    else{
        document.querySelector('.header-two').classList.remove('active');
    }
}

window.onload = () => {
    
    if(window.scrollY > 80){
        document.querySelector('.header-two').classList.add('active');
    }
    else{
        document.querySelector('.header-two').classList.remove('active');
    }
}

/*========= swiper wrapper ========*/

var swiper = new Swiper(".mySlide", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});

/*====== navbar toggle ===========*/

let navBar = document.querySelector('.navbar');
let bars = document.querySelector('#bars');
let close = document.querySelector('#times');

bars.onclick = () => {
  navBar.classList.toggle('act');
}

close.onclick = () =>{
  navBar.classList.remove('act');
}