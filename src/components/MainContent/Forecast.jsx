import React, { useState, useEffect } from "react";

import SwiperItem from "./SwiperItem";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Forecast = ({ weather }) => {
	const [swiperInstanceWeek, setSwiperInstanceWeek] = useState(null);
	const [swiperInstanceHour, setSwiperInstanceHour] = useState(null);
	const [isFirstSlideWeek, setIsFirstSlideWeek] = useState(true);
	const [isLastSlideWeek, setIsLastSlideWeek] = useState(false);
	const [isFirstSlideHour, setIsFirstSlideHour] = useState(true);
	const [isLastSlideHour, setIsLastSlideHour] = useState(false);

	const [slidesPerView, setSlidesPerView] = useState(6);
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 833);

	const updateWidth = () => {
		if (window.innerWidth <= 833) {
			setIsMobile(true);
		} else setIsMobile(false);
		if (window.innerWidth <= 1439) {
			setSlidesPerView(3);
		} else setSlidesPerView(6);
	};

	useEffect(() => {
		// Обновляем slidesPerView при загрузке и изменении размера окна
		updateWidth();
		window.addEventListener("resize", updateWidth);
		return () => {
			window.removeEventListener("resize", updateWidth);
		};
	}, []);

	if (!weather.todayWeather || !weather.weekWeather) {
		return (
			<div className="loading-bg first-loading">
				<div className="lds-ellipsis">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		);
	}
	let hoursForecast = weather?.todayWeather?.list;
	let weekForecast = weather?.weekWeather?.list;

	const goNextWeek = () => {
		if (swiperInstanceWeek !== null) {
			swiperInstanceWeek.slideNext();
		}
	};

	const goPrevWeek = () => {
		if (swiperInstanceWeek !== null) {
			swiperInstanceWeek.slidePrev();
		}
	};

	const goNextHour = () => {
		if (swiperInstanceHour !== null) {
			swiperInstanceHour.slideNext();
		}
	};

	const goPrevHour = () => {
		if (swiperInstanceHour !== null) {
			swiperInstanceHour.slidePrev();
		}
	};

	const handleWeekSlideChange = (swiper) => {
		if (swiper) {
			setIsFirstSlideWeek(swiper.isBeginning);
			setIsLastSlideWeek(swiper.isEnd);
		}
	};

	const handleHourSlideChange = (swiper) => {
		if (swiper) {
			setIsFirstSlideHour(swiper.isBeginning);
			setIsLastSlideHour(swiper.isEnd);
		}
	};

	const swiperItemsWeekData = [
		{ type: "week", date: "Завтра" },
		{ type: "week", date: "Пн, 15 мар" },
		{ type: "week", date: "Вт, 16 мар" },
		{ type: "week", date: "Ср, 17 мар" },
		{ type: "week", date: "Чт, 18 мар" },
		{ type: "week", date: "Пт, 19 мар" },
		{ type: "week", date: "Сб, 20 мар" },
	];
	for (let i = 0; i < swiperItemsWeekData.length; i++) {
		let j;
		i !== 0 ? (j = i * 7) : (j = i);
		j > 39 ? (j = Math.round(Math.random() * 38)) : (j = i * 7);
		swiperItemsWeekData[i].temp = {
			day: Math.round(weekForecast[j].main.temp),
			night: Math.round(weekForecast[j + 5 > 39 ? 39 : j + 5].main.temp),
		};
		const icon = weekForecast[j].weather[0].icon.replace(/n/, "d");
		const iconUlr = `http://openweathermap.org/img/wn/${icon}@2x.png`;
		swiperItemsWeekData[i].weather = iconUlr;
	}
	const swiperItemsWeek = swiperItemsWeekData.map((item, index) => (
		<SwiperSlide key={index}>
			<SwiperItem
				type={item.type}
				weather={item.weather}
				date={item.date}
				temp={item.temp}
			/>
		</SwiperSlide>
	));

	const swiperItemsHoursData = [
		{ type: "hour", date: "15:00" },
		{ type: "hour", date: "16:00" },
		{ type: "hour", date: "17:00" },
		{ type: "hour", date: "18:00" },
		{ type: "hour", date: "19:00" },
		{ type: "hour", date: "20:00" },
		{ type: "hour", date: "21:00" },
		{ type: "hour", date: "22:00" },
		{ type: "hour", date: "23:00" },
		{ type: "hour", date: "00:00" },
		{ type: "hour", date: "01:00" },
		{ type: "hour", date: "02:00" },
	];
	for (let i = 0; i < swiperItemsHoursData.length; i++) {
		swiperItemsHoursData[i].temp = {
			day: Math.round(hoursForecast[i].main.temp),
		};
		const icon = hoursForecast[i].weather[0].icon;
		const iconUlr = `http://openweathermap.org/img/wn/${icon}@2x.png`;
		swiperItemsHoursData[i].weather = iconUlr;
	}
	const swiperItemsHours = swiperItemsHoursData.map((item, index) => (
		<SwiperSlide key={index}>
			<SwiperItem
				key={index}
				type={item.type}
				weather={item.weather}
				date={item.date}
				temp={item.temp}
			/>
		</SwiperSlide>
	));

	function changeWeatherType(type) {
		const weekBtn = document.querySelector(".paging__item--week");
		const hourBtn = document.querySelector(".paging__item--hour");

		const weekSwiper = document.querySelector(".swiper--week");
		const hourSwiper = document.querySelector(".swiper--hour");

		const weekBtns = document.querySelector(".forecast-slider--week");
		const hourBtns = document.querySelector(".forecast-slider--hour");

		if (type === "week") {
			if (weekBtn.classList.contains("active")) {
				return;
			} else {
				weekBtn.classList.add("active");
				hourBtn.classList.remove("active");
				weekSwiper.classList.add("showed");
				hourSwiper.classList.remove("showed");
				hourBtns.classList.add("showed");
				weekBtns.classList.remove("showed");
			}
		} else {
			if (hourBtn.classList.contains("active")) {
				return;
			} else {
				hourBtn.classList.add("active");
				weekBtn.classList.remove("active");
				hourSwiper.classList.add("showed");
				weekSwiper.classList.remove("showed");
				weekBtns.classList.add("showed");
				hourBtns.classList.remove("showed");
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
								changeWeatherType("week");
							}}
						>
							на неделю
						</a>
					</li>
					<li className="paging__item paging__item--hour">
						<a
							href="#"
							onClick={() => {
								changeWeatherType("hour");
							}}
						>
							почасовой
						</a>
					</li>
				</ul>
			</div>
			<div className="forecast-slider forecast-slider--week">
				<div
					className={`forecast-slider__prev ${
						isFirstSlideWeek ? "disabled" : ""
					}`}
					onClick={goPrevWeek}
				>
					<svg
						width="38"
						height="38"
						viewBox="0 0 38 38"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g id="Button-slider/light/inactive">
							<circle
								id="Ellipse 41"
								opacity="1"
								cx="19"
								cy="19"
								r="19"
								transform="rotate(-180 19 19)"
								fill="white"
							/>
							<path
								id="Vector 5"
								opacity="1"
								d="M23 24.5L13.8735 18.8503C13.242 18.4593 13.242 17.5407 13.8735 17.1497L23 11.5"
								stroke="#ACACAC"
								strokeWidth="3"
							/>
						</g>
					</svg>
				</div>
				<div
					className={`forecast-slider__next ${
						isLastSlideWeek ? "disabled" : ""
					}`}
					onClick={goNextWeek}
				>
					<svg
						width="38"
						height="38"
						viewBox="0 0 38 38"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g id="Button-slider/light/active">
							<circle id="Ellipse 41" cx="19" cy="19" r="19" fill="white" />
							<path
								id="Vector 5"
								d="M15 13.5L24.1265 19.1497C24.758 19.5407 24.758 20.4593 24.1265 20.8503L15 26.5"
								stroke="#ACACAC"
								strokeWidth="3"
							/>
						</g>
					</svg>
				</div>
			</div>
			<div className="forecast-slider forecast-slider--hour showed">
				<div
					className={`forecast-slider__prev ${
						isFirstSlideHour ? "disabled" : ""
					}`}
					onClick={goPrevHour}
				>
					<svg
						width="38"
						height="38"
						viewBox="0 0 38 38"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g id="Button-slider/light/inactive">
							<circle
								id="Ellipse 41"
								opacity="1"
								cx="19"
								cy="19"
								r="19"
								transform="rotate(-180 19 19)"
								fill="white"
							/>
							<path
								id="Vector 5"
								opacity="1"
								d="M23 24.5L13.8735 18.8503C13.242 18.4593 13.242 17.5407 13.8735 17.1497L23 11.5"
								stroke="#ACACAC"
								strokeWidth="3"
							/>
						</g>
					</svg>
				</div>
				<div
					className={`forecast-slider__next ${
						isLastSlideHour ? "disabled" : ""
					}`}
					onClick={goNextHour}
				>
					<svg
						width="38"
						height="38"
						viewBox="0 0 38 38"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g id="Button-slider/light/active">
							<circle id="Ellipse 41" cx="19" cy="19" r="19" fill="white" />
							<path
								id="Vector 5"
								d="M15 13.5L24.1265 19.1497C24.758 19.5407 24.758 20.4593 24.1265 20.8503L15 26.5"
								stroke="#ACACAC"
								strokeWidth="3"
							/>
						</g>
					</svg>
				</div>
			</div>
			<div className="weather-swiper">
				<div className="swiper--week forecast__swiper showed">
					{isMobile ? (
						swiperItemsWeek
					) : (
						<Swiper
							modules={[Navigation, Pagination, Scrollbar, A11y]}
							spaceBetween={24}
							slidesPerView={slidesPerView}
							navigation={false}
							onSwiper={setSwiperInstanceWeek}
							onSlideChange={handleWeekSlideChange}
						>
							{swiperItemsWeek}
						</Swiper>
					)}
				</div>

				<div className="swiper--hour forecast__swiper">
					{isMobile ? (
						swiperItemsHours
					) : (
						<Swiper
							modules={[Navigation, Pagination, Scrollbar, A11y]}
							spaceBetween={24}
							slidesPerView={slidesPerView}
							navigation={false}
							onSwiper={setSwiperInstanceHour}
							onSlideChange={handleHourSlideChange}
						>
							{swiperItemsHours}
						</Swiper>
					)}
				</div>
			</div>
		</div>
	);
};
export default Forecast;
