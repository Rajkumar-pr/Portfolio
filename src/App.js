import React from 'react'
import Education from './Pages/Education'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/'Component={Education}/>
        <Route path='/skill'Component={Skills}/>
        <Route path='/proj' Component={Projects}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
