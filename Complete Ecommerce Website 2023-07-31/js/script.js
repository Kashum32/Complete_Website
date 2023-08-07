
/*=========== home section / swiper demos =============*/
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    hashNavigation: {
      watchState: true,
    },
    autoplay: {
        delay: 2500,
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

  /*=========== toggle =============*/
  let navBar = document.querySelector('.navbar');
  let menuBar = document.querySelector('#menuBar');

  menuBar.onclick = () => {
    menuBar.classList.toggle('bx-x');
    navBar.classList.toggle('active');
  }

  
/*=========== featured section / swiper demos =============*/
var swiper = new Swiper(".featured-slider", {
    slidesPerView: 1,
    spaceBetween:25,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    navigation:{
          nextEl:".swiper-button-next",
          prevEl:".swiper-button-prev",
      },
    breakpoints: {
        0: {
            slidesPerView:1,
      },
      330: {
        slidesPerView:2,
      },
      550: {
        slidesPerView:3,
      },
      768: {
        slidesPerView:4,
      },
      1050: {
        slidesPerView:5,
      },
    },
  });

/*======== latest product ==========*/

  function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("latest-product");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

/*=========== category section / swiper demos =============*/
var swiper = new Swiper(".category-slider", {
  slidesPerView: 1,
  spaceBetween:25,
  loop:true,
  centeredSlides:true,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
  breakpoints: {
    0: {
      slidesPerView:1,
    },
    330: {
      slidesPerView:2,
    },
    550: {
      slidesPerView:3,
    },
    768: {
      slidesPerView:4,
    },
    1050: {
      slidesPerView:5,
    },
  },
});
