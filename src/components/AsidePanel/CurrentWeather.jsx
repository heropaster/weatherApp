import React from "react";
import City from "./City";
import snow from "../../images/png/snow.png";
const CurrentWeather = () => {
	return (
		<div className="weather">
			<img src={snow} alt="snow" className="weather__icon" />
			<div className="weather-temperature">
				1 <span className="degree">°C</span>
			</div>
			<h3 className="weather__name">Снег</h3>
			<h4 className="feels">Ощущается как -3 °C</h4>
			<div className="date">
				<h4 className="day">Сегодня</h4>
				<h4 className="weekday">Вс, 13 мар</h4>
			</div>
			<City />
		</div>
	);
};
export default CurrentWeather;
