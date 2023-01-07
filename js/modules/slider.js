new Swiper('.first-screen__content', {
   //Количетсво слайдов для показа
   slidesPerView: 1,
   //Количество скипнутых слайдов
   slidesPerGroup: 1,
   //Мультирядность
   slidesPerColumn: 1,
   //Отсуп между слайдами 
   spaceBetween: 0,
   //перетаскивание на пк 
   simulateTouch: true,
   autoplay: {
      //Пауза между прокруткой
      delay: 4000,
      //Закончить на последнем слайде
      stopOnLastSlide: false,
      //Отключить после ручного переключения
      didableOnInteraction: true,
   },
   //перетаскивание на пк 
   simulateTouch: true,
   //Курсор перетаскивания 
   grabCursor: false,
   //Зум картинок
   //zoom: {
   //Максимальное увеличение
   //maxRatio: 5,
   //Минимальное увеличение
   //minRatio: 1,
   //},
   //virtual: {
   //   slides: (function () {
   //      //let chooseSlidesAfter = document.querySelectorAll('._choose__slide-after');
   //      for (let i = 0; i < 15; i++) {
   //         let el = chooseSlidesAfter[i]
   //         slide.push(${ i });
   //      }
   //      return slide;
   //   }()),
   //},
   //Стрелки
   navigation: {
      nextEl: '.arrow-right',
      prevEl: '.arrow-left',
   },
   // Обновить свайпер
   // При изменении элементов слайдера
   oserver: true,
   // Обновить свайпер
   // при изменении родительских
   // элементов славйдера
   oserverParents: true,
   // Обновить свайпер
   // при изменении дочерних
   // элементов славйдера
   oserverSlideChildren: true,
   // fade, slide, flip, cube, coverflow
   effect: 'fade',
   //Количество дублирющих слайдов 
   //parallax: true,
   //Бесканечность
   loop: true,
   pagination: {
      el: '.first-screen__navigation-bullet',
      //Булеты
      clickable: true,
      //Номера 
      //type: 'fraction',
      //renderFraction: function (currentClass, totalClass) {
      //   return 'Фото <span class="' + currentClass + '"></span>' + ' из ' + '<span class"' + totalClass + '"></span>';
      //},
      //dynamicBullets: true,
      renderBullet: function (index, className) {
         return '<span class="' + className + '">0' + (index + 1) + '</span>';
      }
      //type: 'progressbar',
   },
});
new Swiper('.slider__container', {
   //перетаскивание на пк 
   simulateTouch: true,
   //Количетсво слайдов для показа
   slidesPerView: 1,
   //Количество скипнутых слайдов
   slidesPerGroup: 1,
   // fade, slide, flip, cube, coverflow
   effect: 'fade',
   pagination: {
      el: '.slider__pagination',
      //Булеты
      clickable: true,
      //Номера 
      //type: 'fraction',
      //dynamicBullets: true,
      //renderFraction: function (currentClass, totalClass) {
      //   return 'Фото <span class="' + currentClass + '"></span>' + ' из ' + '<span class"' + totalClass + '"></span>';
      //}
      //type: 'progressbar',
   },
   //Бесканечность
   loop: true,
   autoplay: {
      //Пауза между прокруткой
      delay: 4000,
      //Закончить на последнем слайде
      stopOnLastSlide: false,
      //Отключить после ручного переключения
      didableOnInteraction: true,
   },
   //перетаскивание на пк 
   simulateTouch: true,
});
new Swiper('.patio__slider', {
   //перетаскивание на пк 
   simulateTouch: true,
   //Количетсво слайдов для показа
   slidesPerView: 1,
   //Количество скипнутых слайдов
   slidesPerGroup: 1,
   //Бесканечность
   loop: true,
   //Скорость
   speed: 800,
   autoplay: {
      //Пауза между прокруткой
      delay: 4000,
      //Закончить на последнем слайде
      stopOnLastSlide: false,
      //Отключить после ручного переключения
      didableOnInteraction: true,
   },
});
//==================================================================
let pastObjwSwiper = {
   //Количетсво слайдов для показа
   slidesPerView: 2,
   //Количество скипнутых слайдов
   slidesPerGroup: 2,
   //Мультирядность
   slidesPerColumn: 1,
   //Отсуп между слайдами 
   spaceBetween: 32,
   //Активный слайд по центру
   centeredSlides: false,
   //Бесканечность
   loop: false,
   // Эффект переключения слайдов

   loopedSlides: 0,
   //Скорость
   speed: 300,
   // Свободный режим
   freeMode: false,
   //responsive first mbile
   //breakpoints: {
   //   320: {
   //      slidesPerView: 1,
   //   },
   //   480: {
   //      slidesPerView: 2,
   //   },
   //   992: {
   //      slidesPerView: 3,
   //   },
   //},
   //Стрелки
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   // Обновить свайпер
   // При изменении элементов слайдера
   oserver: true,
   // Обновить свайпер
   // при изменении родительских
   // элементов славйдера
   oserverParents: true,
   // Обновить свайпер
   // при изменении дочерних
   // элементов славйдера
   oserverSlideChildren: true,

   // Эффект переключения слайдов
   // fade, slide, flip, cube, coverflow
   effect: 'slide',

   // Дополнение к fade
   fadeEffect: {
      // Параллельная смена прозрачности
      crossFade: true,
   },
   flipEffect: {
      //Тень
      slideShadow: true,
      // Поках только активного слайда 
      limitRotation: true,
   },
   cubeEffect: {
      //Настройка тени
      slideShadow: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94,
   },
   coverflowEffect: {
      rotate: 20,
      stretch: 50,
      slideShadows: true,
   },
   autoplay: {
      //Пауза между прокруткой
      delay: 4000,
      //Закончить на последнем слайде
      stopOnLastSlide: true,
      //Отключить после ручного переключения
      didableOnInteraction: false,
   },
   pagination: {
      el: '.swiper-pagination',
      //Булеты
      //clickable: true,
      //Номера 
      //type: 'fraction',
      //renderFraction: function (currentClass, totalClass) {
      //   return 'Фото <span class="' + currentClass + '"></span>' + ' из ' + '<span class"' + totalClass + '"></span>';
      //}
      //type: 'progressbar',
   },
   scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
   },
   //Виртикальный слайдер
   //direction: 'vertical',
   //перетаскивание на пк 
   simulateTouch: true,
   //Чувствительность 
   touchRatio: 1,
   //Угол срабатывания 
   touchAngle: 45,
   //Курсор перетаскивания 
   grabCursor: true,
   //Переключение при клике на слайд 
   slideToClickedSlide: false,

   // Навигация по хешу
   hashNavigation: {
      // Отслеживание состояние
      watchState: true,
   },

   // Управление клавиатурой
   keyboard: {
      // Включить \ Выключить
      enebled: true,
      //Включение когда слайдер в пределах вьюпорта
      onlyInViewport: true,
      //Управление клавиатурой
      //pageUp, pageDown 
      pageUpDown: true,
   },

   //Управление колесом мыши
   mousewheel: {
      //Чуствительность
      sensitivity: 1,
      //Класс объекта на котором
      //Будет срабатывать прокрутка мыши
      //eventsTarget: ".page__slider-body",
   },
   //Адаптивная высота слайдера
   autoHeight: false,
   //Отключение функционала
   //Если слайдов меньше чем нужно
   wathOverflow: true,
   //Стартовый слайд
   initialSlide: 0,
};