// Инициализация всего
document.addEventListener('DOMContentLoaded', () => {
  initSearchSlider();
  initChangeWeatherType();
  changeTheme();
} )

// Инициализация появления окошка с поиском
function initSearchSlider() {
  const searchBtn = document.querySelector(".search-city");
  const closeBtn = document.querySelector(".close");
  const searchOverlay = document.querySelector(".search-overlay");
  searchBtn.addEventListener("click", () => {
    searchOverlay.classList.add("active");
  });
  closeBtn.addEventListener("click", () => {
    searchOverlay.classList.remove("active");
  });
}

// forecast init
function initChangeWeatherType() {
  const weekBtn = document.querySelector('.paging__item--week');
  const hourBtn = document.querySelector('.paging__item--hour');
  const weekSwiper = document.querySelector('.swiper--week');
  const hourSwiper = document.querySelector('.swiper--hour');
  weekBtn.addEventListener('click', () => {
    if (weekBtn.classList.contains('active')) {
      return
    }
    else {
      weekBtn.classList.add('active')
      hourBtn.classList.remove('active');
      weekSwiper.classList.add('showed');
      hourSwiper.classList.remove('showed')
    }
  })
  hourBtn.addEventListener('click', () => {
    if (hourBtn.classList.contains('active')) {
      return
    }
    else {
      hourBtn.classList.add('active')
      weekBtn.classList.remove('active');
      hourSwiper.classList.add('showed');
      weekSwiper.classList.remove('showed')
    }
  })
}
// Количество карточек в погоде на неделю / почасовой
// function updateColumns() {
//   const swiper = document.querySelector('.swiper.showed');
//   const screenWidth = window.innerWidth;
//   if (screenWidth < 834) {
//     swiper.style.setProperty('--columns', 'unset');
//     swiper.style.setProperty('max-width', '100%');
//     swiper.style.setProperty('overflow-x', 'unset')
//   }
//   if(screenWidth > 834 && screenWidth < 960) {
//     swiper.style.setProperty('--columns', 3);
//     swiper.style.setProperty('max-width', '348px');
//     swiper.style.setProperty('overflow-x', 'scroll')
//   }
//   if(screenWidth > 960 && screenWidth < 1100) {
//     swiper.style.setProperty('--columns', 4);
//     swiper.style.setProperty('max-width', '472px')
//     swiper.style.setProperty('overflow-x', 'scroll')
//   } 
//   if(screenWidth > 1100 && screenWidth < 1439) {
//     swiper.style.setProperty('--columns', 6);
//     swiper.style.setProperty('max-width', '720px');
//     swiper.style.setProperty('overflow-x', 'hidden')
//   }
//   else return;
// }
// // вызов при загрузке страницы / изменении ширины
// window.addEventListener('load', updateColumns);
// window.addEventListener('resize', updateColumns);

// Темная-светлая тема
function changeTheme() {
  const themeBtn = document.querySelector('#theme-switcher');
  // const btnContainer = document.querySelector('.checkbox');
  themeBtn.addEventListener('change', () => {
    document.body.toggleAttribute('dark');
  })
}