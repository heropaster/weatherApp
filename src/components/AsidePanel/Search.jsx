import React from "react";

const Search = () => {
	function closeOverlay() {
		const searchOverlay = document.querySelector(".search-overlay");
		searchOverlay.classList.remove("active");
	}
	return (
		<div className="search-overlay">
			<div className="close" onClick={closeOverlay}>
				<span className="close__line close__line--first"></span>
				<span className="close__line close__line--second"></span>
			</div>
			<div className="search-container">
				<input
					type="text"
					name=""
					id=""
					placeholder="Москва"
					className="search-input"
				/>
				<button className="find">Найти</button>
			</div>
		</div>
	);
};
export default Search;
