import { render, screen, fireEvent } from '@testing-library/react';
import HomePage from '../page'; // Cambia esto si tu componente principal tiene otro nombre/ruta

describe('Landing Page Secciones Principales', () => {
  it('muestra la sección Inicio', () => {
    expect(screen.getByText(/inicio/i)).toBeInTheDocument();
  });

  it('muestra la sección Sobre Nosotros', () => {
    expect(screen.getByText(/sobre nosotros/i)).toBeInTheDocument();
  });

  it('muestra la sección Servicios', () => {
    expect(screen.getByText(/servicios/i)).toBeInTheDocument();
  });

  it('muestra la sección Contáctanos', () => {
    expect(screen.getByText(/contáctanos/i)).toBeInTheDocument();
  });
});

describe('Navegación y botones', () => {
  beforeEach(() => {
    render(<HomePage />);
  });

  it('renderiza los links de navegación', () => {
    expect(screen.getByRole('link', { name: /inicio/i })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /sobre nosotros/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /servicios/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /contáctanos/i })
    ).toBeInTheDocument();
  });

  it('existe el botón de enviar en el formulario de contacto', () => {
    expect(screen.getByRole('button', { name: /enviar/i })).toBeInTheDocument();
  });

  it('puede llenar y enviar el formulario de contacto', () => {
    fireEvent.change(screen.getByLabelText(/nombre/i), {
      target: { value: 'Juan' },
    });
    fireEvent.change(screen.getByLabelText(/correo/i), {
      target: { value: 'juan@email.com' },
    });
    fireEvent.change(screen.getByLabelText(/mensaje/i), {
      target: { value: 'Hola, quiero info' },
    });
    fireEvent.click(screen.getByRole('button', { name: /enviar/i }));
    // Aquí puedes esperar un mensaje de éxito, por ejemplo:
    // expect(screen.getByText(/gracias/i)).toBeInTheDocument();
  });
});
