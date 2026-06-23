import React from 'react';
import Header from './components/Header';
import Inicio from './components/Inicio';
import SobreMi from './components/SobreMi';
import Skills from './components/Skills';
import Curriculum from './components/Curriculum';
import Portfolio from './components/Portfolio';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import './App.css'; // Aquí vive tu CSS

function App() {
  return (
    <>
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