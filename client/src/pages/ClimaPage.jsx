import React from 'react';
import { Link } from 'react-router-dom';
import ClimaApp from '../components/ClimaApp';
import './ClimaPage.css';

function ClimaPage() {
  return (
    <div className="clima-page-container">
      <div className="clima-page-header">
        <Link to="/" className="btn-volver">
          ← Volver al Portafolio
        </Link>
      </div>
      
      <div className="clima-page-content">
        <ClimaApp />
      </div>
    </div>
  );
}

export default ClimaPage;   