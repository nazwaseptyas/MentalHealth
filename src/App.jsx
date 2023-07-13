import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home';
import About from './about';
import Konsultasi from './konsultasi';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/konsultasi" element={<Konsultasi />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
