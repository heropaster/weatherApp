import React, { useContext } from "react";
import City from "./City";
import WeatherContext from "../../context/WeatherContext";
const CurrentWeather = ({ currentCity }) => {
	const { weather } = useContext(WeatherContext);
	if (!weather) {
		return (
			<div className="loading-bg">
				<div className="lds-ellipsis">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		);
	}
	console.log(weather);

	const icon = weather.weather[0].icon;
	const iconUlr = `http://openweathermap.org/img/wn/${icon}@4x.png`;
	const temp = Math.round(weather.main.temp);
	const feelsLike = Math.round(weather.main["feels_like"]);
	const desc = weather.weather[0].description;
	return (
		<div className="weather">
			<img src={iconUlr} alt="snow" className="weather__icon" />
			<div className="weather-temperature">
				{temp} <span className="degree">°C</span>
			</div>
			<h3 className="weather__name">{desc}</h3>
			<h4 className="feels">Ощущается как {feelsLike} °C</h4>
			<div className="date">
				<h4 className="day">Сегодня</h4>
				<h4 className="weekday">Вс, 13 мар</h4>
			</div>
			<City currentCity={currentCity} />
		</div>
	);
};
export default CurrentWeather;
