"use strict"
// Class add,remove,contains
//import "./modules/class.js"
// Проверка на поддержку формата WebP
//import "./modules/isWebp.js";
// Проверка телефон или пк
//import "./modules/isMob.js"
// Header
// import "./libs/header.js"
function ibg() {
   let ibg = document.querySelectorAll("._ibg");
   for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector('img')) {
         ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
      }
   }
}
ibg();
//====================================================


document.addEventListener("DOMContentLoaded", readyBuh);
let scrollX = 0;
let scrollToPlusMoveToTop = window.innerWidth <= 991.98 ? 80 : 50;
scrollAction();

function readyBuh() {   
   // Делегирование события "клик"
   document.addEventListener("click", documentActions);
   window.addEventListener("scroll", scrollAction);

   // Actions (делегирование события click)
   function documentActions(e) {
      const targetElement = e.target;
      if (window.innerWidth <= 991.98) {
         if (targetElement.closest('.header__burger') && document.querySelector('.header__burger').classList.contains('_active') || targetElement.closest('.header__menu-link')) {
            document.querySelector('.header__menu').classList.remove('_active');
            document.querySelector('.header__burger').classList.remove('_active');
         } else if (targetElement.closest('.header__burger')) {
            document.querySelector('.header__menu').classList.add('_active');
            document.querySelector('.header__burger').classList.add('_active');
         } else if (!targetElement.closest('.header__menu') && !targetElement.closest('.header__phone')) {
            document.querySelector('.header__menu').classList.remove('_active');
            document.querySelector('.header__burger').classList.remove('_active');
         } if (targetElement.closest('.header__phone-image')) {
            if (document.querySelector(".header__phone").querySelector(".header__phone-link").classList.contains('_show')) {
               document.querySelector(".header__phone").querySelector(".header__phone-link").classList.remove('_show');
            } else {
               document.querySelector(".header__phone").querySelector(".header__phone-link").classList.add('_show');
            }
            // console.log(document.querySelector(".header__phone").querySelector(".header__phone-link")); classList.add('_show');
         }
      } if (targetElement.closest('.header__menu-link')) {
         e.preventDefault();
         if (targetElement.classList.contains("_decisions-header")) {
            window.scrollTo({
               top:document.querySelector(".decisions").offsetTop - scrollToPlusMoveToTop,
               left:0,
               behavior:"smooth"
            })
         } else if (targetElement.classList.contains("_company-header")) {
            window.scrollTo({
               top:document.querySelector(".company").offsetTop - scrollToPlusMoveToTop,
               left:0,
               behavior:"smooth"
            })
         } else if (targetElement.classList.contains("_consultation-header")) {
            window.scrollTo({
               top:document.querySelector(".consultation").offsetTop - scrollToPlusMoveToTop,
               left:0,
               behavior:"smooth"
            })
         } else if (targetElement.classList.contains("_contacts-header")) {
            window.scrollTo({
               top:document.querySelector(".contacts").offsetTop - scrollToPlusMoveToTop,
               left:0,
               behavior:"smooth"
            })
         }
         // _decisions-header
         // _company-header
         // _consultation-header
         // _contacts-header
      } if (targetElement.closest('._to-contacts')) {
         e.preventDefault();
         window.scrollTo({
               top:document.querySelector(".contacts").offsetTop - scrollToPlusMoveToTop,
               left:0,
               behavior:"smooth"
            })
      }
   }
   // Actions (делегирование события scroll)
   function scrollAction() {
      let scrollTop = Math.floor(window.pageYOffset || document.documentElement.scrollTop, -1);
      if (scrollTop > 50) {
         document.querySelector('.header').classList.add("_resize");
      } else {
         document.querySelector('.header').classList.remove("_resize");
      }
      if (scrollTop > scrollX) {// scroll bottom
         scrollX = scrollTop;
         if (window.innerWidth >= 991.98) {
            document.querySelector('.header').classList.remove("_show");
         }
      } else {
         scrollX = scrollTop;
         document.querySelector('.header').classList.add("_show");

      }
   }

}









//====================================================

// import Swiper JS =========================
//import Swiper from 'swiper';

// import Swiper styles =====================
//import 'swiper/css';

// Динамический адаптив =====================
//import "./libs/dynamic_adapt_dev.js";
//import "./libs/dynamic_adapt.js"

// Спойлеры =================================
//import "./libs/spoller.js";

// Анимации =================================
//import "./libs/animation.js";

// Валидация фомы ===========================
import "./libs/formsend.js";

// Библиотека галерей =======================
//import "./libs/glightbox.js";
