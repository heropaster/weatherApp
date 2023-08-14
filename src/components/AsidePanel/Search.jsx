import React, { useState, useEffect, useContext } from 'react'
import searchCity from '../../utils/searchCity'
import getWeather from '../../utils/getWeather'
import LoadingContext from '../../context/loadingContext'
import { useWeather } from '../../context/WeatherContext'
const Search = ({ updateCity }) => {
   const loading = useContext(LoadingContext)
   const { setCity, setWeather } = useWeather()
   const [value, setValue] = useState('')
   const [finded, setFinded] = useState(true)
   const [searchError, setSearchError] = useState('')
   const [selectedCityIndex, setSelectedCityIndex] = useState(null)
   const [lastCitys, setLastCitys] = useState(['Москва'])
   const MAX_RESULTS = 5
   useEffect(() => {
      const storedCitys = localStorage.getItem('lastCitys')
      const storedCityIndex = localStorage.getItem('selectedCityIndex')
      if (storedCitys) {
         setLastCitys(JSON.parse(storedCitys))
      }
      if (storedCityIndex) {
         setSelectedCityIndex(Number(storedCityIndex))
      }
   }, [])

   const closeOverlay = () => {
      const searchOverlay = document.querySelector('.search-overlay')
      searchOverlay.classList.remove('active')
   }

   const handleChange = (event) => {
      setValue(event.target.value)
   }
   const changeCity = (newCity) => {
      closeOverlay()
      updateCity(newCity.location)
      localStorage.setItem('city', newCity.location)
   }
   const handleSearch = async () => {
      if (!value.trim()) {
         setSearchError('Поле поиска не может быть пустым')
         setFinded(false)
      }
      loading.setIsLoading(true)
      const locationData = await searchCity(value)
      if (!locationData) {
         loading.setIsLoading(false)
         setSearchError('Город не найден!')
         setFinded(false)
         setValue('')
      } else {
         loading.setIsLoading(false)
         const weatherData = await getWeather(
            locationData.lat,
            locationData.lon
         )
         localStorage.setItem('weather', JSON.stringify(weatherData))
         setFinded(true)
         const newCitys = [locationData.location, ...lastCitys].slice(
            0,
            MAX_RESULTS
         )
         changeCity(locationData)
         setLastCitys(newCitys)
         setSelectedCityIndex(0)
         localStorage.setItem('lastCitys', JSON.stringify(newCitys))
         localStorage.setItem('selectedCityIndex', '0')
         setValue('')
         // Обновляем город и погоду в контексте WeatherContext
         setWeather(weatherData)
         setCity(locationData.location)
      }
   }
   const handleClickHistoryItem = async (location, index) => {
      setSelectedCityIndex(index)
      loading.setIsLoading(true)
      const locationData = await searchCity(location)
      if (locationData) {
         loading.setIsLoading(false)
      }
      const weatherData = await getWeather(locationData.lat, locationData.lon) //Погода
      localStorage.setItem('weather', JSON.stringify(weatherData))

      changeCity(locationData)
      localStorage.setItem('selectedCityIndex', index.toString())
      closeOverlay()

      // Обновляем  город и погоду в контексте WeatherContext
      setWeather(weatherData)
      setCity(locationData.location)
   }
   return (
      <div className="search-overlay">
         <div
            className="close"
            onClick={closeOverlay}>
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
               autoComplete="off"
               value={value}
               onChange={handleChange}
            />
            <button
               className="find"
               onClick={handleSearch}>
               Найти
            </button>
         </div>
         {!finded && <div className="not-find">{searchError}</div>}

         <ul className="last-citys">
            {/* Отображаем последние пять результатов */}
            {lastCitys.map((city, index) => (
               <li
                  className={`last-citys__name last-citys__name${
                     index === selectedCityIndex ? ' city-choosen' : ''
                  }`}
                  key={index}
                  onClick={() => handleClickHistoryItem(city, index)}>
                  <span className="container__city">{city}</span>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default Search
