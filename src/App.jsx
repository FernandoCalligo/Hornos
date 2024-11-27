import './App.css';
import { useState } from 'react';
import emailjs from "emailjs-com";
import { Carousel, Image  } from 'antd';
import { BulbOutlined, FireOutlined, EnvironmentOutlined, AppstoreOutlined } from "@ant-design/icons";
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Button, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
function Home() {
  return (
    <header id="home">
      <h2>¿Estás en búsqueda de un terreno en Hornos?</h2>
      <h3>¡Nosotros lo tenemos!</h3>
      <a href="#contacto"><button className="bton-hoverrut">¡Contáctanos!</button></a>
    </header>
  );
}

function Terrenos() {
  const images = [
    "https://fotos.perfil.com/2023/05/23/trim/987/555/procrear-ii-lotes-con-servicios-1573634.jpg",
    "https://www.argentina.gob.ar/sites/default/files/2017/05/lcsheader.jpeg",
    "https://media.tycsports.com/files/2023/09/27/623405/terrenos_862x485_wmk.webp"
  ];

  const ImgCarrousel = {
    width: "100%", // Ocupa todo el ancho
    height: "480px", // Altura fija
    objectFit: "cover", // Recorta la imagen para cubrir el espacio
  };

  return (
    <section id="terrenos">
      <Carousel autoplay>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} style={ImgCarrousel} alt={`Imagen ${index + 1}`} />
          </div>
        ))}
      </Carousel>
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
            <p>Whatsapp</p>
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
      <h2>Infraestructura / Factibles</h2>
      <div className='factibles'>
        <div className="feature">
          <BulbOutlined className="feature-icon" />
          <p>Red Eléctrica</p>
        </div>
        <div className="feature">
          <FireOutlined className="feature-icon" />
          <p>Red de Agua</p>
        </div>
        <div className="feature">
          <EnvironmentOutlined className="feature-icon" />
          <p>Forestación</p>
        </div>
        <div className="feature">
          <AppstoreOutlined className="feature-icon" />
          <p>Calles Empedradas</p>
        </div>
      </div>
      <div className='video'>
          <p>Video de los terrenos</p>
      </div>
    </section>
  );
};

function Ubicacion() {
  return (
    <section id="ubicacion">
      <h2>Ubicación</h2>
      <div className='InfoUbicacion'>
        <div>
          <h3>Distancia:</h3>
          <p>A 7 cuadras de la plaza principal y de la estación del ferrocarril Sarmiento.</p>
          <p>A 10 cuadras de la Ruta Provincial N°40</p>
          <p>Frente al casco urbano de Gral. Hornos</p>
        </div>
        <div>
          <h3>Datos catastrales:</h3>
          <p>Partido 41 (General Las Heras)</p>
          <p>Circunsripción: 2</p>
          <p>Sección: C</p>
        </div>
      </div>
      <div className="ImagenesUbicacion">
  <Image
    src="public\1.png"
    className="responsive-image"
  />
  <Image
    src="public/2.png"
    className="responsive-image"
  />
</div>
    </section>
  );
}

function Hero() {
  return (
    <>
    <div className="herobody">
      <section className="hero">
        <h2>Barrio San Agustín en Gral. Hornos</h2>
        <p>
          Presentamos la inaguracion de un nuevo barrio <span className="highlight">con un entorno tranquilo</span>,
          rodeado de <span className="highlight">naturaleza y paz</span>.
        </p>
        <p>
          <strong>Lotes de 1000 m²</strong>, ubicado en Ruta Provincial 40 a pocos Km de la Ruta Provincial 6 Gral. Hornos, Las Heras.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo hic temporibus quam porro <strong>lorem ipsum</strong> Lorem ipsum dolor sit amet 
          <strong> Lorem ipsum dolor sit amet</strong>.
        </p>
        <p className="final-note">Sin expensas, con escrituración.</p>
      </section>
    </div>
    </>
  )
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
        <Hero />
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

