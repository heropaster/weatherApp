const getWeather = async (lat, lon) => {
	const apiKey = "b4991705a96d48eacfc59c634745ae15";
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=ru`;

	const response = await fetch(url);
	const data = await response.json();
	if (response.ok) {
		return data;
	} else {
		throw new Error("Не удалось загрузить прогноз погоды");
	}
};

export default getWeather;
