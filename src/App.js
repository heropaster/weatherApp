import './styles/style.css'
import React from 'react'
import Aside from './components/AsidePanel/Aside'
import Main from './components/MainContent/Main'
function App() {
   return (
      <div className="App container">
         <Aside />
         <Main />
      </div>
   )
}

export default App
