import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Footer, Navbar } from './components';
import { About, Home, Menu } from './pages';
import { useGlobalContext } from './utils/context';

function App(props) {

  const {productLoaded} = useGlobalContext();

  return (
    <Router>
      <Navbar />
      <div className="body-content">

        {productLoaded.message === "success" && 
        
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/menu' element={<Menu />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path="*" element={<Home />} />
          </Routes>

        }
        
      </div>
      <Footer />
  </Router>
  );
}

export default App;