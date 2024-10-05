import './App.css';
import { useRef } from 'react';
import { Parallax } from 'react-parallax';
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/products/Products';
import Services from './components/services/Services';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import FAQ from './components/faq/faq';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function App() {
  const scrollToId = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const AnimatedSection = ({ children, strength = 200, id, variant }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    return (
      <Parallax strength={strength}>
        <div id={id} ref={ref}>
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={variant}
            transition={{ duration: 1 }}
          >
            {children}
          </motion.div>
        </div>
      </Parallax>
    );
  };

  return (
    <div className="App">
      <div id='header'>
        <Header scrollToId={scrollToId} />
      </div>

      <AnimatedSection strength={300} id="home" variant={fadeIn}>
        <Home />
      </AnimatedSection>

      <AnimatedSection strength={200} id="products" variant={slideInLeft}>
        <Products />
      </AnimatedSection>

      <AnimatedSection strength={200} id="services" variant={slideInRight}>
        <Services />
      </AnimatedSection>

      <AnimatedSection strength={200} id="about" variant={slideInLeft}>
        <About />
      </AnimatedSection>

      <AnimatedSection strength={200} id="faq" variant={slideInRight}>
        <FAQ />
      </AnimatedSection>

      <div id='footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
