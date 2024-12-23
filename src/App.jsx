import './App.css';
import { useState } from 'react';
import emailjs from "emailjs-com";
import { Carousel, Image } from 'antd';
import { InstagramOutlined, WhatsAppOutlined, FileTextOutlined, GlobalOutlined } from "@ant-design/icons";

function IntroScreen({ onWebClick }) {
  return (
    <div className="intro-container">
      <div className="intro-logo">
        <div className="logo-circle">SA</div>
      </div>
      <h1 className="intro-title">BARRIO SAN AGUSTÍN</h1>
      <p className="intro-subtitle">
        Un nuevo barrio con alma de campo en Gral. Hornos.
        <div className="icon-links">
          <a href="https://www.instagram.com" target='_blank'><InstagramOutlined style={{ fontSize: "32px", margin: "0 10px", color: "#fff" }} /></a>
          <a href="https://wa.me" target='_blank'><WhatsAppOutlined style={{ fontSize: "32px", margin: "0 10px", color: "#fff" }} /></a>
        </div>
      </p>
      <div className="intro-buttons">
        <button onClick={() => window.open('https://wa.me', '_blank')}>
          <WhatsAppOutlined style={{ marginRight: "8px" }} />
          Whatsapp
        </button>
        <button onClick={() => window.open('https://www.instagram.com', '_blank')}>
          <InstagramOutlined style={{ marginRight: "8px" }} />
          Instagram
        </button>
        <button onClick={() => window.open('https://www.google.com', '_blank')}>
          <FileTextOutlined style={{ marginRight: "8px" }} />
          Presentación
        </button>
        <button onClick={onWebClick}>
          <GlobalOutlined style={{ marginRight: "8px" }} />
          Web
        </button>
      </div>
    </div>
  );
}
function Home() {
  return (
    <header id="home">
      <Carousel autoplay autoplaySpeed={3000} dots={false}>
        <div>
          <div className="slide" style={{backgroundImage: 'url(Hero1.jpeg)'}} >
            <div className='overlay'></div>
            <h1 className='text'>
              ¿Estás en búsqueda de tu terreno soñado? <br />
              Nosotros lo tenemos.
            </h1>
          </div>
        </div>
        <div>
          <div className="slide" style={{backgroundImage: 'url(Hero1.jpeg)'}} >
            <div className='overlay'></div>
            <h1 className='text'>TRANQUILIDAD</h1>
          </div>
        </div>
        <div>
          <div className="slide" style={{backgroundImage: 'url(Hero2.jpg)'}}>
            <div className='overlay'></div>
            <h1 className='text'>NATURALEZA</h1>
          </div>
        </div>
        <div>
          <div className="slide" style={{backgroundImage: 'url(Hero6.jpg)'}}>
            <div className='overlay'></div>
            <h1 className='text'>SEGURIDAD</h1>
          </div>
        </div>
      </Carousel>
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
              <button onClick={() => window.open('https://wa.me', '_blank')}>
              <WhatsAppOutlined style={{ marginRight: "8px", color:"#1b4332" }} />
              Whatsapp
            </button>
            <button onClick={() => window.open('https://www.instagram.com', '_blank')}>
              <InstagramOutlined style={{ marginRight: "8px", color:"#1b4332" }} />
              Instagram
            </button>
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
    src="/1.png"
    className="responsive-image"
  />
  <Image
    src="/2.png"
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
        <h2>CHACRAS SAN AGUSTÍN</h2>
        <p>
          Presentamos la inauguración de un barrio de chacras, este nuevo amanzanamiento en zona urbana, con un entorno rodeado de <strong>naturaleza y paz.</strong>
        </p>
        <p>
          Ubicado en la Localidad de General Hornos y a solo 10 cuadras de la Ruta Provincial N°40
        </p>
        <p>
          Las parcelas que van de <strong>7.500 a 10.000 m2</strong> forman una zona exclusiva para cumplir tu sueño de vivir en un lugar tranquilo, seguro y a pocos metros de la ciudad
        </p>
        <p className="final-note">Contactanos para mayor información</p>
        <a href="#contacto"><button className="bton-hoverrut">¡Contáctanos!</button></a>
      </section>
    </div>
    </>
  )
}

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWebClick = () => {
    setShowIntro(false); // Cambiar a la página principal
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {showIntro ? (
        <IntroScreen onWebClick={handleWebClick} />
      ) : (
        <>
          <div className="nav">
            <h1>
              <a href="#home">San Agustín</a>
            </h1>
            <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
              <ul>
                <li>
                  <a href="#terrenos">Terrenos</a>
                </li>
                <li>
                  <a href="#nosotros">Nosotros</a>
                </li>
                <li>
                  <a href="#contacto">Contacto</a>
                </li>
                <li>
                  <a href="#ubicacion">Ubicación</a>
                </li>
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
              <p>
                <strong>Teléfono:</strong> (123) 456-7890
              </p>
              <p>
                <strong>Email:</strong> contacto@hornos.com
              </p>
              <p>
                <strong>Dirección:</strong> Calle Principal 123, Hornos, Ciudad
              </p>
              <div className="footer-links">
                <a href="#home">Inicio</a> | <a href="#terrenos">Terrenos</a> |{' '}
                <a href="#nosotros">Nosotros</a> |{' '}
                <a href="#contacto">Contacto</a> |{' '}
                <a href="#ubicacion">Ubicación</a>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}


export default App;

