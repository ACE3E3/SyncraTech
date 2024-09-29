import './App.css';
import { useRef } from 'react';
import { Parallax } from 'react-parallax';
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/products/Products';
import Services from './components/services/Services';
import About from './components/about/About';
// import Testimonial from './components/testimonials/Testimonial';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';

function App() {
  const scrollToId = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="App">
      <div id='header'>
        <Header scrollToId={scrollToId} />
      </div>
      
      <Parallax strength={300}>
        <div id='home'>
          <Home />
        </div>
      </Parallax>

      <Parallax strength={200}>
        <div id='products'>
          <Products />
        </div>
      </Parallax>

      <Parallax strength={200}>
        <div id='services'>
          <Services />
        </div>
      </Parallax>

      <Parallax strength={200}>
        <div id='about'>
          <About />
        </div>
      </Parallax>

      {/* <Parallax strength={200}>
        <div id='testimonial'>
          <Testimonial />
        </div>
      </Parallax> */}

      <div id='footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
