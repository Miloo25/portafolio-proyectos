import React, { useState } from 'react';
import { auth } from '../config/firebaseConfig'; // Fíjate en la ruta actualizada
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = ({ setSesionActiva }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const manejarLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSesionActiva(true); // Esto desbloquea el acceso al panel admin
      alert("¡Bienvenido, Camilo!");
    } catch (error) {
      alert("Error al iniciar sesión: " + error.message);
    }
  };

  return (
    <form onSubmit={manejarLogin} className="formulario-login">
      <h2>🔐 Acceso Administrador</h2>
      <input 
        type="email" 
        placeholder="Correo" 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Contraseña" 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button type="submit">Entrar</button>
    </form>
  );
};

export default Login;