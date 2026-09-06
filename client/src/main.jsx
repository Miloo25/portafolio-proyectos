import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import ClimaPage from './pages/ClimaPage';
import ParallaxMlasela from './components/ParallaxMlasela'; // <-- Agregamos el import
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/proyecto/clima" element={<ClimaPage />} />
        {/* Nueva ruta agregada aquí */}
        <Route path="/proyecto/parallax" element={<ParallaxMlasela />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);