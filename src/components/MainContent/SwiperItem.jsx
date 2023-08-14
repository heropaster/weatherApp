import React from "react";
const SwiperItem = (props) => {
	return (
		<article className={`swiper__item ${props.type}`}>
			<span className="swiper__item__date">{props.date}</span>
			<div className="swiper__item__weather">
				<img src={props.weather} alt="" />
			</div>
			<span className="degrees">
				<span className="degrees__day">{props.temp.day}°C</span>
				{props.type === "week" && (
					<span className="degrees__night">{props.temp.night}°C</span>
				)}
			</span>
		</article>
	);
};
export default SwiperItem;
