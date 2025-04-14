import Carousel from 'react-bootstrap/Carousel';
import '../css/home.css';
import '../css/homeres.css';
import a1 from '../imgs/a1.jpg';
import a2 from '../imgs/a2.jpg';
import a3 from '../imgs/a3.jpg';
import b1 from '../imgs/b1.jpg';
import b2 from '../imgs/b2.jpg';
import b3 from '../imgs/b3.jpg';

const Home = () => {
  return (
    <div className="app1">
      {/* 1 BLOQUE */}
      <div className="app1-a">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="app1-a-carr-img"
              src={a1}
              alt="First slide"
            />
            <Carousel.Caption>
              <div className="carousel1">
                <span className="carousel-title1">First slide label</span>
                <p className="carousel-desc">Nulla vitae elit libero, a pharetra augue mollis interdum.</p></div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="app1-a-carr-img"
              src={a2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <div className="carousel1">
                <span className="carousel-title2">First slide label</span>
                <p className="carousel-desc">Nulla vitae elit libero, a pharetra augue mollis interdum.</p></div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="app1-a-carr-img"
              src={a3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <div className="carousel1">
                <span className="carousel-title3">First slide label</span>
                <p className="carousel-desc">Nulla vitae elit libero, a pharetra augue mollis interdum.</p></div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* 2 BLOQUE */}
      <div className="app1-b">
        <span className="app1-b-t">SOMOS LOS MEJORES</span>
        <span className="app1-b-t2">Potencia tu empresa</span>
      </div>
      {/* 3 BLOQUE */}
      <div className="app1-c">
        <div className="app1-c-cont">
          <div className="app1-c1">
            <img src={b1} className="app1-c1-img" alt="Análisis Estático" />
          </div>
          <div className="app1-c2">
            <span className="app1-c2-t">Análisis Estático de Cargas</span>
            <p className="app1-c2-d">
              Evaluamos cómo responden tus estructuras ante diferentes condiciones de carga.
              Precisión garantizada para un diseño seguro y optimizado.
            </p>
          </div>
        </div>
        <div className="app1-c-cont">
          <div className="app1-c1">
            <img src={b2} className="app1-c1-img" alt="Diseño de Piezas" />
          </div>
          <div className="app1-c2">
            <span className="app1-c2-t">Cálculo y Diseño de Piezas</span>
            <p className="app1-c2-d">
              Diseñamos componentes mecánicos a la medida de tus necesidades.
              Combinamos eficiencia, durabilidad y rendimiento sin compromisos.
            </p>
          </div>
        </div>
        <div className="app1-c-cont">
          <div className="app1-c1">
            <img src={b3} className="app1-c1-img" alt="Diseño de Piezas" />
          </div>
          <div className="app1-c2">
            <span className="app1-c2-t">Planeación de proyectos</span>
            <p className="app1-c2-d">
              Planificamos recursos,
              tiempos y tareas con precisión, garantizando eficiencia, control y cumplimiento de objetivos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
