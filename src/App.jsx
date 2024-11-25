import './App.css';
import { useState, useRef } from 'react';
import emailjs from "emailjs-com";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

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
  const images = [
    "https://img.resemmedia.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzL2QxMWEyNWFjLWZjYWYtNDExZC1hM2MzLTg5ZTMwYzdjZTRhNS83NDIzZTgzZS1lNGNkLTRlMzMtYmFkNC0yY2EzNjY0OTUzN2UuanBnIiwiYnJhbmQiOiJSRVNFTSIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODQwLCJoZWlnaHQiOjYzMCwiZml0IjoiY292ZXIifX19",
    "https://img.resemmedia.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzL2QxMWEyNWFjLWZjYWYtNDExZC1hM2MzLTg5ZTMwYzdjZTRhNS83NDIzZTgzZS1lNGNkLTRlMzMtYmFkNC0yY2EzNjY0OTUzN2UuanBnIiwiYnJhbmQiOiJSRVNFTSIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODQwLCJoZWlnaHQiOjYzMCwiZml0IjoiY292ZXIifX19",
    "https://img.resemmedia.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzL2QxMWEyNWFjLWZjYWYtNDExZC1hM2MzLTg5ZTMwYzdjZTRhNS83NDIzZTgzZS1lNGNkLTRlMzMtYmFkNC0yY2EzNjY0OTUzN2UuanBnIiwiYnJhbmQiOiJSRVNFTSIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODQwLCJoZWlnaHQiOjYzMCwiZml0IjoiY292ZXIifX19",
    "https://img.resemmedia.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzL2QxMWEyNWFjLWZjYWYtNDExZC1hM2MzLTg5ZTMwYzdjZTRhNS83NDIzZTgzZS1lNGNkLTRlMzMtYmFkNC0yY2EzNjY0OTUzN2UuanBnIiwiYnJhbmQiOiJSRVNFTSIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODQwLCJoZWlnaHQiOjYzMCwiZml0IjoiY292ZXIifX19",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="terrenos">
      <h2>Terrenos disponibles</h2>
      <p>Todos nuestros terrenos tienen una hectárea de tamaño.</p>
      <div className="carousel-container">
        <button className="carousel-button prev" onClick={handlePrev}>
          &#8249;
        </button>
        <div
          className="carousel"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((src, index) => (
            <div className="carousel-item" key={index}>
              <img src={src} alt={`Terreno ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="carousel-button next" onClick={handleNext}>
          &#8250;
        </button>
      </div>
    </section>
  );
}

function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "your_service_id", // Reemplaza con tu Service ID de EmailJS
        "your_template_id", // Reemplaza con tu Template ID de EmailJS
        formData,
        "your_user_id" // Reemplaza con tu Public Key de EmailJS
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          setSuccess(true);
        },
        (error) => {
          console.error("FAILED...", error);
        }
      );
  };

  return (
    <section id="contacto">
      <div className="contacto-container">
        <div className="contacto-info">
          <h2>¿Necesitas ayuda?</h2>
          <p>Déjanos tus datos y en breve te estaremos contactando</p>
          <p>Tambien podes contactarnos por estos medios</p>
          <div className='info-contacto'>
            <p>Instagram</p>
            <p>WhatsAppIcon</p>
          </div>
        </div>
        <div className="contacto-form">
          <h2>Contáctanos</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Nombre Completo</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="phone">Celular</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Enviar</button>
          </form>
          {success && <p>¡Mensaje enviado con éxito!</p>}
        </div>
      </div>
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
        <h1><a href="#home">Barrio San Agustín</a></h1>
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
