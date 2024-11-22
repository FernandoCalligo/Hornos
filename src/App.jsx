import './App.css';
import { useState } from 'react';



function Home() {
  return (
    <header id="home">
      <h2>¿Estás en búsqueda de un terreno en Hornos?</h2>
      <h3>¡Nosotros lo tenemos!</h3>
      <a href="#contacto"><button className="btn-hover">¡Contáctanos!</button></a>
    </header>
  );
}

function Terrenos() {
  return (
    <section id="terrenos">
      <h2>Terrenos</h2>
      <p>Explora nuestra oferta de terrenos disponibles.</p>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto">
      <h2>Contáctanos</h2>
      <p>Déjanos tus datos y nos pondremos en contacto contigo.</p>
    </section>
  );
}

function Nosotros() {
  return (
    <section id="nosotros">
      <h2>Sobre Nosotros</h2>
      <p>Conoce más sobre nuestra empresa y misión.</p>
    </section>
  );
}

function Ubicacion() {
  return (
    <section id="ubicacion">
      <h2>Ubicacion</h2>
    </section>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="nav">
        <h1><a href="#home">Logo</a></h1>
        <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#terrenos">Terrenos</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#contacto">Contacto</a></li>
            <li><a href="#ubicacion">Ubicación</a></li>
          </ul>
        </nav>
        <button className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
      <main>
        <Home />
        <Terrenos />
        <Nosotros />
        <Contacto />
        <Ubicacion />
      </main>
      <footer>
        <div className="footer-content">
          <h4>Información de Contacto</h4>
          <p><strong>Teléfono:</strong> (123) 456-7890</p>
          <p><strong>Email:</strong> contacto@hornos.com</p>
          <p><strong>Dirección:</strong> Calle Principal 123, Hornos, Ciudad</p>
          <div className="footer-links">
            <a href="#home">Inicio</a> | <a href="#terrenos">Terrenos</a> | <a href="#nosotros">Nosotros</a> | <a href="#contacto">Contacto</a> | <a href="#ubicacion">Ubicación</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
