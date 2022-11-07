import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Footer, Navbar } from './components';
import { Home, Menu } from './pages';

function App(props) {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/menu' element={<Menu />}></Route>
      </Routes>
      <Footer />
  </Router>
  );
}

export default App;