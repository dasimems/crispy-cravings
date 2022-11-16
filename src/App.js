import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Footer, Navbar } from './components';
import { Home, Menu } from './pages';

function App(props) {
  return (
    <Router>
      <Navbar />
      <div className="body-content">
        
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/menu' element={<Menu />}></Route>
        </Routes>
        
      </div>
      <Footer />
  </Router>
  );
}

export default App;