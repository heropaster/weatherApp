import './styles/style.css'
import React, { useContext } from 'react'
import Aside from './components/AsidePanel/Aside'
import Main from './components/MainContent/Main'
import ThemeContext from './context/themeContext'
import LoadingContext from './context/loadingContext'
function App() {
   const isLoading = useContext(LoadingContext).isLoading

   const { darkTheme } = useContext(ThemeContext)
   const themeClass = darkTheme ? 'dark' : 'light'
   return (
      <div className={`App container ${themeClass}`}>
         {isLoading && (
            <div className="loading-bg">
               <div className="lds-ellipsis">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
               </div>
            </div>
         )}

         <Aside />
         <Main />
      </div>
   )
}

export default App
