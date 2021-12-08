import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Card from './components/Card';
import Clan from './components/Clan';
//import Navigation from './components/Navigation';
import Player from './components/Player';
import Tournament from './components/Tournament';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';



const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Routes>
       
          <Route exact path="/"  element={<Home/>}/>

          <Route exact path="/a-propos"  element={<About/>} />
        
          <Route exact path="/clans"  element={<Clan/>} />
          
          <Route exact path="/player"  element={<Player/>} />
          
          <Route exact path="/cards"  element={<Card/>} />

          <Route exact path="/tournaments"  element={<Tournament/>} />

          <Route path="*" element={<NotFound/>} />
        
      </Routes>
    </BrowserRouter>
  
    </div>

    
  );
};

export default App;