import React from 'react'
import rain from '../../images/png/rain.png'
import fog from '../../images/png/fog.png'
import thunder from '../../images/png/thunder.png'
import SwiperItem from './SwiperItem'
const Forecast = () => {
   function changeWeatherType(type) {
      const weekBtn = document.querySelector('.paging__item--week')
      const hourBtn = document.querySelector('.paging__item--hour')
      const weekSwiper = document.querySelector('.swiper--week')
      const hourSwiper = document.querySelector('.swiper--hour')
      if (type === 'week') {
         if (weekBtn.classList.contains('active')) {
            return
         } else {
            weekBtn.classList.add('active')
            hourBtn.classList.remove('active')
            weekSwiper.classList.add('showed')
            hourSwiper.classList.remove('showed')
         }
      } else {
         if (hourBtn.classList.contains('active')) {
            return
         } else {
            hourBtn.classList.add('active')
            weekBtn.classList.remove('active')
            hourSwiper.classList.add('showed')
            weekSwiper.classList.remove('showed')
         }
      }
   }
   return (
      <div className="forecast">
         <div className="forecast__heading">
            <h2 className="forecast__title title">Прогноз</h2>
            <ul className="forecast__paging paging">
               <li className="paging__item paging__item--week active">
                  <a
                     href="#"
                     onClick={() => {
                        changeWeatherType('week')
                     }}>
                     на неделю
                  </a>
               </li>
               <li className="paging__item paging__item--hour">
                  <a
                     href="#"
                     onClick={() => {
                        changeWeatherType('hour')
                     }}>
                     почасовой
                  </a>
               </li>
            </ul>
         </div>
         <div className="forecast-slider"></div>
         <div className="weather-swiper">
            <div className="swiper--week swiper showed">
               <SwiperItem
                  type={'week'}
                  weather={fog}
                  date={'Завтра'}
               />
               <SwiperItem
                  type={'week'}
                  weather={rain}
                  date={'Пн, 15 мар'}
               />
               <SwiperItem
                  type={'week'}
                  weather={rain}
                  date={'Вт, 16 мар'}
               />
               <SwiperItem
                  type={'week'}
                  weather={thunder}
                  date={'Ср, 17 мар'}
               />
               <SwiperItem
                  type={'week'}
                  weather={thunder}
                  date={'Чт, 18 мар'}
               />
               <SwiperItem
                  type={'week'}
                  weather={thunder}
                  date={'Пт, 19 мар'}
               />
               <SwiperItem
                  type={'week'}
                  weather={thunder}
                  date={'Сб, 20 мар'}
               />
            </div>
            <div className="swiper--hour swiper">
               <div className="swiper__item">
                  <span className="swiper__item__date">15:00</span>
                  <div className="swiper__item__weather">
                     <img
                        src={fog}
                        alt=""
                     />
                  </div>
                  <span className="degrees">
                     <span className="degrees__day">10°C</span>
                  </span>
               </div>
               <div className="swiper__item">
                  <span className="swiper__item__date">16:00</span>
                  <div className="swiper__item__weather">
                     <img
                        src={fog}
                        alt=""
                     />
                  </div>
                  <span className="degrees">
                     <span className="degrees__day">10°C</span>
                  </span>
               </div>
               <div className="swiper__item">
                  <span className="swiper__item__date">17:00</span>
                  <div className="swiper__item__weather">
                     <img
                        src={fog}
                        alt=""
                     />
                  </div>
                  <span className="degrees">
                     <span className="degrees__day">10°C</span>
                  </span>
               </div>
               <div className="swiper__item">
                  <span className="swiper__item__date">18:00</span>
                  <div className="swiper__item__weather">
                     <img
                        src={fog}
                        alt=""
                     />
                  </div>
                  <span className="degrees">
                     <span className="degrees__day">10°C</span>
                  </span>
               </div>
               <div className="swiper__item">
                  <span className="swiper__item__date">19:00</span>
                  <div className="swiper__item__weather">
                     <img
                        src={thunder}
                        alt=""
                     />
                  </div>
                  <span className="degrees">
                     <span className="degrees__day">10°C</span>
                  </span>
               </div>
               <div className="swiper__item">
                  <span className="swiper__item__date">20:00</span>
                  <div className="swiper__item__weather">
                     <img
                        src={thunder}
                        alt=""
                     />
                  </div>
                  <span className="degrees">
                     <span className="degrees__day">10°C</span>
                  </span>
               </div>
               <div className="swiper__item">
                  <span className="swiper__item__date">21:00</span>
                  <div className="swiper__item__weather">
                     <img
                        src={fog}
                        alt=""
                     />
                  </div>
                  <span className="degrees">
                     <span className="degrees__day">10°C</span>
                  </span>
               </div>
               <div className="swiper__item">
                  <span className="swiper__item__date">22:00</span>
                  <div className="swiper__item__weather">
                     <img
                        src={fog}
                        alt=""
                     />
                  </div>
                  <span className="degrees">
                     <span className="degrees__day">10°C</span>
                  </span>
               </div>
               <div className="swiper__item">
                  <span className="swiper__item__date">23:00</span>
                  <div className="swiper__item__weather">
                     <img
                        src={thunder}
                        alt=""
                     />
                  </div>
                  <span className="degrees">
                     <span className="degrees__day">10°C</span>
                  </span>
               </div>
               <div className="swiper__item">
                  <span className="swiper__item__date">00:00</span>
                  <div className="swiper__item__weather">
                     <img
                        src={fog}
                        alt=""
                     />
                  </div>
                  <span className="degrees">
                     <span className="degrees__day">10°C</span>
                  </span>
               </div>
               <div className="swiper__item">
                  <span className="swiper__item__date">01:00</span>
                  <div className="swiper__item__weather">
                     <img
                        src={fog}
                        alt=""
                     />
                  </div>
                  <span className="degrees">
                     <span className="degrees__day">10°C</span>
                  </span>
               </div>
               <div className="swiper__item">
                  <span className="swiper__item__date">02:00</span>
                  <div className="swiper__item__weather">
                     <img
                        src={fog}
                        alt=""
                     />
                  </div>
                  <span className="degrees">
                     <span className="degrees__day">10°C</span>
                  </span>
               </div>
            </div>
         </div>
      </div>
   )
}
export default Forecast
