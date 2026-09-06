import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Inicio from './components/Inicio';
import SobreMi from './components/SobreMi';
import Skills from './components/Skills';
import Curriculum from './components/Curriculum';
import Portfolio from './components/Portfolio';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';
import './App.css';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Temporizador de 3 segundos para el Splash Screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Lógica del Scroll Progress Bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Si está cargando, muestra solo la animación
  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: `${scrollProgress}%`,
          height: '4px',
          backgroundColor: '#10B981',
          boxShadow: '0 0 10px #10B981',
          zIndex: 9999,
          transition: 'width 0.1s ease-out'
        }}
      />

      <Header /> 
      <Inicio />
      <SobreMi />
      <Skills />
      <Curriculum />
      <Portfolio />
      <Contacto />
      <Footer />
    </>
  );
}

export default App;