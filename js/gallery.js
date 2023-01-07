"use strict"

function ibg() {
   let ibg = document.querySelectorAll("._ibg");
   for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector('img')) {
         ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
      }
   }
}
ibg();
function testWebP(callback) {

   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {

   if (support == true) {
      document.querySelector('body').classList.add('webp');
   } else {
      document.querySelector('body').classList.add('no-webp');
   }
});

window.onload = function () {
   document.addEventListener("click", documentAction);

   const ShowAll = document.querySelector('.gallery__sorting-show-all');
   let activeGalleryLink = document.querySelector('.gallery__sorting-show-all');
   let galleryActiveRow = document.querySelector('.gallery__sorting-row');
   let galleryImageActive = 1;
   let galleryImageArr = document.querySelectorAll('.gallery__image');

   function documentAction(e) {
      const targetElement = e.target;
      const galleryLink = document.querySelectorAll('.gallery__sorting-link');
      const galleryAllRow = document.querySelector('.gallery__sorting-row');

      if (window.innerWidth <= 1100) {
         if (targetElement.closest('.header__burger') && document.querySelector('.header__burger').classList.contains('_active')) {
            document.querySelector('.header__menu').classList.remove('_active');
            document.querySelector('.header__burger').classList.remove('_active');
         } else if (targetElement.closest('.header__burger')) {
            document.querySelector('.header__menu').classList.add('_active');
            document.querySelector('.header__burger').classList.add('_active');
         } else if (!targetElement.closest('.header__menu')) {
            document.querySelector('.header__menu').classList.remove('_active');
            document.querySelector('.header__burger').classList.remove('_active');
         }
      } if ((targetElement.closest('.scroll__top'))) {
         document.querySelector('.scroll__top').classList.remove('_visible')
         window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
         })
      } else if (targetElement.classList.contains('gallery__sorting-link')) {
         activeGalleryLink.classList.remove('_active');
         targetElement.classList.add('_active');
         activeGalleryLink = targetElement;

         let sortingRow = targetElement.dataset.gallerylink;
         galleryActiveRow.classList.remove('_visible');
         galleryActiveRow.classList.remove('_active');
         document.querySelector(`${sortingRow}`).classList.add('_visible');
         document.querySelector(`${sortingRow}`).classList.add('_active');
         galleryActiveRow = document.querySelector(`${sortingRow}`);
      }
   }
}


//else if (targetElement.closest('.gallery__image')) {
//   if (targetElement.classList.contains('_zoom')) {
//      targetElement.classList.remove('_zoom');
//   } else {
//      for (let i = 0; i < galleryImageArr.length; i++) {
//         let element = galleryImageArr[i];
//         if (element.classList.contains('_zoom')) {
//            element.classList.remove('_zoom');
//         }
//         targetElement.classList.add('_zoom');
//         addZoom(targetElement);
//      }
//   }
//}
//function addZoom(target) {
//   // (A) FETCH CONTAINER + IMAGE
//   var container = target,
//      imgsrc = container.currentStyle || window.getComputedStyle(container, false),
//      imgsrc = imgsrc.backgroundImage.slice(4, -1).replace(/"/g, ""),
//      img = new Image();

//   // (B) LOAD IMAGE + ATTACH ZOOM
//   img.src = imgsrc;
//   img.onload = function () {
//      var imgWidth = img.naturalWidth,
//         imgHeight = img.naturalHeight,
//         ratio = imgHeight / imgWidth,
//         percentage = ratio * 100 + '%';

//      // (C) ZOOM ON MOUSE MOVE
//      container.onmousemove = function (e) {
//         var boxWidth = container.clientWidth,
//            rect = e.target.getBoundingClientRect(),
//            xPos = e.clientX - rect.left,
//            yPos = e.clientY - rect.top,
//            xPercent = xPos / (boxWidth / 100) + "%",
//            yPercent = yPos / ((boxWidth * ratio) / 100) + "%";

//         Object.assign(container.style, {
//            backgroundPosition: xPercent + ' ' + yPercent,
//            //backgroundSize: imgWidth + 'px',
//            backgroundSize: '250%'
//         });
//      };

//      // (D) RESET ON MOUSE LEAVE
//      container.onmouseleave = function (e) {
//         Object.assign(container.style, {
//            backgroundPosition: 'center',
//            backgroundSize: 'cover'
//         });
//      };
//   }
//};