import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import '@testing-library/jest-dom';
import Inicio from './Inicio';

describe('Pruebas en el componente <Inicio />', () => {

  test('Debe mostrar el nombre Camilo en el encabezado', () => {
    render(<Inicio />);
    const elementoNombre = screen.getByText(/Camilo/i);
    // Corregido: toBeInTheDocument
    expect(elementoNombre).toBeInTheDocument();
  });

  test('Debe mostrar el badge de disponibilidad para trabajar', () => {
    render(<Inicio />);
    const badgeDisponibilidad = screen.getByText(/Disponible para nuevas oportunidades/i);
    // Corregido: toBeInTheDocument
    expect(badgeDisponibilidad).toBeInTheDocument();
  });

});