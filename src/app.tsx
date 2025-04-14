import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

//componentes
import Header from './components/header';
import Footer from './components/footer';

//diseños
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//pg
import Home from './pages/home';
import About from './pages/about';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
