import './App.css';
import { useState } from 'react';
import emailjs from "emailjs-com";


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
  const terrenos = [
    { id: 1, nombre: "Terreno 1", m2: 500, info: "Ubicación céntrica." },
    { id: 2, nombre: "Terreno 2", m2: 750, info: "Ideal para comercio." },
    { id: 3, nombre: "Terreno 3", m2: 600, info: "Vista panorámica." },
    { id: 4, nombre: "Terreno 4", m2: 400, info: "Zona residencial." },
    { id: 5, nombre: "Terreno 5", m2: 800, info: "Cerca de la playa." },
    { id: 6, nombre: "Terreno 6", m2: 900, info: "Con conexión eléctrica." },
  ];

  const placeholderImages = [
    "https://th.bing.com/th/id/OIP.ucvIDzhtQeBv_UVjLZzcbQHaFj?w=840&h=630&rs=1&pid=ImgDetMain",
    "https://colinasdemontebello.construccionesr.com/wp-content/uploads/Terrenos-a-la-Venta.jpg",
    "https://th.bing.com/th/id/R.302f9959bc489adca3194d1f6eee390b?rik=5dixDlxYD6V1AA&pid=ImgRaw&r=0",
  ];

  return (
    <section id="terrenos">
      <div className="terrenos-grid">
        {terrenos.map((terreno) => (
          <div key={terreno.id} className="card">
            <div className="carousel">
              {placeholderImages.map((src, index) => (
                <img key={index} src={src} alt={`Imagen ${index + 1} del ${terreno.nombre}`} />
              ))}
            </div>
            <div className="card-content">
              <h3>{terreno.nombre}</h3>
              <p>{terreno.m2} m²</p>
              <p>{terreno.info}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
      <h2>Contáctanos</h2>
      <p>Déjanos tus datos y nos pondremos en contacto contigo.</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre</label>
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
