import { FunctionalComponent } from 'preact';
import '../css/footer.css';
import '../css/footerres.css';
import { FaWhatsapp } from "react-icons/fa6";
import { PiMicrosoftOutlookLogoLight } from "react-icons/pi";

const Footer: FunctionalComponent = () => {
  return (
    <footer>
      <div className="footer-section f1">
        <span className="foot-t"><PiMicrosoftOutlookLogoLight /> tcelmec@hotmail.com</span>
        <span className="foot-t"><FaWhatsapp /> 316 830 2206</span>
        <span className="foot-t">Bucaramanga - Colombia</span>
      </div>
      
      <div className="footer-section f2">
        <span className="foot-t company">TCELMEC LTDA</span>
        <span className="foot-t">Industría de mantenimiento industrial</span>
        <span className="foot-t">© 2025</span>
      </div>
      
      <div className="footer-section f3">
        <span className="foot-t">Desarrollado por</span>
        <a 
          className="foot-link"
          href="https://viteportafoliojcmr.netlify.app/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          JCMR
        </a>
      </div>
    </footer>
  );
};

export default Footer;
