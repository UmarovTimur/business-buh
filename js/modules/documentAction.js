// Делегирование события "клик"
document.addEventListener("click", documentActions);

// Actions (делегирование события click)
function documentActions(e) {
   const targetElement = e.target;
   if (window.innerWidth <= 920) {
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
   } if (window.innerWidth <= 768) {
      if (targetElement.classList.contains('_arrow-down')) {
         targetElement.closest('.header__list_li').classList.toggle('_hover');
      } else if (!targetElement.classList.contains('_arrow-down') && !targetElement.closest('.sub-menu__lsit')) {
         const headerListLi = document.querySelectorAll('.header__list_li');
         for (let i = 0; headerListLi.length > i; i++) {
            if (headerListLi[i].classList.contains('_hover')) {
               headerListLi[i].classList.remove('_hover');
            }
         }
      }
   }
}