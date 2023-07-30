import React from "react";
import CurrentWeather from "./CurrentWeather";
import Search from "./Search.jsx";

const Aside = () => {
	// Инициализация появления окошка с поиском
	function initSearchSlider() {
		const searchOverlay = document.querySelector(".search-overlay");
		searchOverlay.classList.add("active");
	}
	// Темная-светлая тема
	function changeTheme() {
		document.body.toggleAttribute("dark");
	}
	return (
		<aside className="little-info">
			<Search />
			<div className="aside-buttons">
				<button className="search-city" onClick={initSearchSlider}>
					Поиск города
				</button>
				<label for="theme-switcher" className="checkbox">
					<input
						type="checkbox"
						name="theme-switcher"
						id="theme-switcher"
						onChange={changeTheme}
					/>
					<span className="checkbox__wrapper">
						<svg
							width="64"
							height="32"
							viewBox="0 0 64 32"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M51.6067 11.1213C50.8345 10.3492 49.8969 9.8358 48.9126 9.57276C49.4472 11.5753 48.9338 13.7942 47.364 15.364C45.7943 16.9337 43.5754 17.4471 41.5728 16.9125C41.8359 17.8968 42.3492 18.8344 43.1214 19.6066C45.4633 21.9485 49.2647 21.9485 51.6067 19.6066C53.9486 17.2647 53.9486 13.4633 51.6067 11.1213Z"
								fill="#212331"
							/>
						</svg>
					</span>
				</label>
			</div>
			<CurrentWeather />
		</aside>
	);
};
export default Aside;
