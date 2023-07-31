import React from "react";

const Details = () => {
	return (
		<div className="details">
			<h2 className="details__title title">Подробно на сегодня</h2>
			<div className="details__cards cards">
				<div className="cards__item card--big wind">
					<h3 className="cards__item__subtitle">Скорость ветра</h3>
					<div className="cards__item__content content__primary wind-speed">
						7 <span className="content__primary__small">м/с</span>
					</div>
					<div className="cards__item__content content__secondary wind-direction">
						<div className="wind-direction__image">
							<svg
								width="38"
								height="38"
								viewBox="0 0 38 38"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle cx="19" cy="19" r="19" fill="#48484A" />
								<path
									d="M18.1951 31.0029L10.0872 10.8978C9.76221 10.092 10.5487 9.28365 11.3631 9.58643L31.9073 17.2246C32.7267 17.5293 32.7906 18.6717 32.0237 19.0912C26.1915 22.2822 23.1612 25.3608 20.0501 31.0907C19.6388 31.8482 18.5175 31.8023 18.1951 31.0029Z"
									fill="#E6E6E6"
								/>
							</svg>
						</div>
						<span className="wind-direction__text">СЗ</span>
					</div>
				</div>
				<div className="cards__item card--big wetness">
					<h3 className="cards__item__subtitle">Влажность</h3>
					<div className="cards__item__content content__primary wetness-percentile">
						84 <span className="content__primary__small">%</span>
					</div>
				</div>
				<div className="cards__item card--small visibility">
					<h3 className="cards__item__subtitle">Видимость</h3>
					<div className="cards__item__content content__primary visibility-range">
						6.2 <span className="content__primary__small">км</span>
					</div>
				</div>
				<div className="cards__item card--small pressure">
					<h3 className="cards__item__subtitle">Давление</h3>
					<div className="cards__item__content content__primary pressure-size">
						742 <span className="content__primary__small">мм рт. ст.</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Details;
