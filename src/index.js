import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider } from './context/themeContext'
import { LoadingProvider } from './context/loadingContext'
import { WeatherProvider } from './context/WeatherContext'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <WeatherProvider>
      <LoadingProvider>
         <ThemeProvider>
            <App />
         </ThemeProvider>
      </LoadingProvider>
   </WeatherProvider>
)

reportWebVitals()
