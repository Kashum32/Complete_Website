
/*========= search btn ============*/
let searchBar = document.querySelector('#search');
let searchBtn = document.querySelector('#search-btn');

searchBtn.onclick = () => {
    searchBar.classList.toggle("active");
}

/*========= navbar toggle ===========*/
let navBar = document.querySelector('.navBar');
let closeBtn = document.querySelector('#close');
let menuBtn = document.querySelector('#menuBar');

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('bx-x');
    navBar.classList.toggle('active');
}

closeBtn.onclick = () =>{
    menuBtn.classList.remove('bx-x');
    navBar.classList.remove('active');
}

/*========= popular section ============*/
const buttonElement = document.querySelectorAll('.tablinks');
const tabContent = document.querySelectorAll(".tabContent");

tabContent[0].style.display = "block";

buttonElement.forEach(function (i) {
    i.addEventListener('click', function (event) {

        for (let x = 0; x < buttonElement.length; x++) {
            if (event.target.id == buttonElement[x].id) {
                buttonElement[x].className = buttonElement[x].className.replace(" active", "");
                tabContent[x].style.display = "block";
                event.currentTarget.className += " active";
            } else {
                tabContent[x].style.display = "none";
                buttonElement[x].className = buttonElement[x].className.replace(" active", "");
            }
        }
        
    });
});

/*========== client section start ===========*/
var swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
});