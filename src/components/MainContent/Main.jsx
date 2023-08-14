import React, { useContext } from "react";
import Forecast from "./Forecast";
import Details from "./Details";
import WeatherContext from "../../context/WeatherContext";
const Main = () => {
	const { weather, todayWeather, weekWeather } = useContext(WeatherContext);

	return (
		<main className="main">
			<Forecast weather={{ todayWeather, weekWeather }} />
			<Details weather={weather} />
		</main>
	);
};
export default Main;
