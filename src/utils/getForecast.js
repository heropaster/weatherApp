const getForecastHours = async (lat, lon) => {
	const apiKey = "b4991705a96d48eacfc59c634745ae15";
	const cnt = 12; //Прогноз на 7 дней
	const url = `https://api.openweathermap.org/data/2.5/forecast/?lat=${lat}&lon=${lon}&cnt=${cnt}&appid=${apiKey}&units=metric`;

	const response = await fetch(url);
	const data = await response.json();
	if (response.ok) {
		return data;
	} else {
		throw new Error("Не удалось загрузить прогноз погоды");
	}
};
const getForecastWeek = async (lat, lon) => {
	const apiKey = "b4991705a96d48eacfc59c634745ae15";
	const cnt = 40; //Прогноз на 7 дней
	const url = `https://api.openweathermap.org/data/2.5/forecast/?lat=${lat}&lon=${lon}&cnt=${cnt}&appid=${apiKey}&units=metric`;

	const response = await fetch(url);
	const data = await response.json();
	if (response.ok) {
		return data;
	} else {
		throw new Error("Не удалось загрузить прогноз погоды");
	}
};

export { getForecastWeek, getForecastHours };
