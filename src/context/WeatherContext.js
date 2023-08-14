import { createContext, useEffect, useState, useContext } from "react";
import getWeather from "../utils/getWeather";
import { getForecastWeek } from "../utils/getForecast";
import { getForecastHours } from "../utils/getForecast";
import searchCity from "../utils/searchCity";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
	const [city, setCity] = useState(localStorage.getItem("city") || "Москва");
	const [weather, setWeather] = useState(
		JSON.parse(localStorage.getItem("weather")) || null
	);
	const [todayWeather, setTodayWeather] = useState(
		JSON.parse(localStorage.getItem("hours")) || null
	);
	const [weekWeather, setWeekWeather] = useState(
		JSON.parse(localStorage.getItem("week")) || null
	);
	useEffect(() => {
		async function fetchData(city) {
			const location = await searchCity(city);
			const dataWeather = await getWeather(location.lat, location.lon);
			localStorage.setItem("weather", JSON.stringify(dataWeather));
			setWeather(dataWeather);

			// По часам(бесплатная версия API не дает доступ на каждый час, поэтому 12 карточек с 3 часовым интервалом)
			const dataForecastHours = await getForecastHours(
				location.lat,
				location.lon
			);
			localStorage.setItem("hours", JSON.stringify(dataForecastHours));
			setTodayWeather(dataForecastHours);
			//Неделя
			const dataForecastWeek = await getForecastWeek(
				location.lat,
				location.lon
			);
			localStorage.setItem("week", JSON.stringify(dataForecastWeek));
			setWeekWeather(dataForecastWeek);
		}
		if (!localStorage.getItem("city")) {
			localStorage.setItem("city", city);
			fetchData("Москва");
		} else {
			const currentCity = localStorage.getItem("city");
			fetchData(currentCity);
		}
	}, [city]);
	return (
		<WeatherContext.Provider
			value={{
				city,
				setCity,
				weather,
				setWeather,
				todayWeather,
				setTodayWeather,
				weekWeather,
				setWeekWeather,
			}}
		>
			{children}
		</WeatherContext.Provider>
	);
};
export const useWeather = () => {
	return useContext(WeatherContext);
};
export default WeatherContext;
