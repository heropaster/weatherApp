import React from 'react'
const SwiperItem = (props) => {
   return (
      <div className={`swiper__item ${props.type}`}>
         <span className="swiper__item__date">{props.date}</span>
         <div className="swiper__item__weather">
            <img
               src={props.weather}
               alt=""
            />
         </div>
         <span className="degrees">
            <span className="degrees__day">10°C</span>
            {props.type === 'week' && (
               <span className="degrees__night">4°C</span>
            )}
         </span>
      </div>
   )
}
export default SwiperItem
