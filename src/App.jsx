import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home';
import About from './about';
import Konsultasi from './konsultasi';
import Kontak from './kontak';
import Artikel from './artikel';
import Login from './login';
import Register from './register';
import Detail from './detail';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/konsultasi" element={<Konsultasi />} />
          <Route path="/artikel" element={<Artikel />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
