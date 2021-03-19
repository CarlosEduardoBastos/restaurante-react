import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './pages/Header';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Menu from './pages/Menu'
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="sobre" element={<Sobre />}/>
        <Route path="menu" element={<Menu />}/>
        <Route path="login" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
