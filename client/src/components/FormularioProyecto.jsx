import React, { useState } from 'react';
import { db } from '../config/firebaseConfig'; // Asegúrate de que esta ruta apunte a tu archivo de configuración
import { collection, addDoc } from 'firebase/firestore';

const FormularioProyecto = () => {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Intentamos guardar en la colección 'proyectos'
      await addDoc(collection(db, 'proyectos'), {
        titulo: titulo,
        descripcion: descripcion,
        fecha: new Date()
      });
      
      alert('¡Proyecto guardado con éxito!');
      setTitulo('');
      setDescripcion('');
    } catch (error) {
      console.error("Error al guardar: ", error);
      alert('Hubo un error al guardar el proyecto');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Nuevo Proyecto</h3>
      <input 
        type="text" 
        placeholder="Título" 
        value={titulo} 
        onChange={(e) => setTitulo(e.target.value)} 
        required
      />
      <textarea 
        placeholder="Descripción" 
        value={descripcion} 
        onChange={(e) => setDescripcion(e.target.value)} 
        required
      />
      <button type="submit">Guardar en Firebase</button>
    </form>
  );
};

export default FormularioProyecto;