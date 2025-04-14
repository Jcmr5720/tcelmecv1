import { FunctionalComponent } from 'preact';
import '../css/header.css';
import'../css/headerres.css';
import icon1 from '../imgs/icon1.png';

const Header: FunctionalComponent = () => {
  return (
    <header>
      <div className="head">
        <div className="head1">
          <span className="head-t">TCELMEC LTDA</span>
        </div>

        <a
          href="https://wa.me/573168302206"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-contact"
        >
          <img
            src={icon1}
            alt="WhatsApp"
            width="24"
            height="24"
          />
          <span>316 830 2206</span>
        </a>
      </div>

      <nav className="head-menu">
        <a href="/home">Inicio</a>
        <a href="/about">Información</a>
      </nav>
    </header>
  );
};

export default Header;
