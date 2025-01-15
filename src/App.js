import "./App.css";
import { Parallax } from "react-parallax";
import Header from "./components/header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./components/products/Products";
import Services from "./components/services/Services";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import FAQ from "./components/faq/faq";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef, useCallback, useState, useEffect } from "react";
import { waveform } from "ldrs";

waveform.register();

function App() {
  const smoothScroll = useCallback((targetY, duration) => {
    const startY = window.pageYOffset;
    const difference = targetY - startY;
    const startTime = performance.now();

    const step = (currentTime) => {
      const progress = (currentTime - startTime) / duration;
      if (progress < 1) {
        window.scrollTo(0, startY + difference * easeInOutCubic(progress));
        requestAnimationFrame(step);
      } else {
        window.scrollTo(0, targetY);
      }
    };

    requestAnimationFrame(step);
  }, []);

  const easeInOutCubic = (t) =>
    t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

  const scrollToId = useCallback(
    (id) => {
      const element = document.getElementById(id);
      if (element) {
        const targetY =
          element.getBoundingClientRect().top + window.pageYOffset;
        smoothScroll(targetY, 1000); // 1000ms duration
      }
    },
    [smoothScroll]
  );

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
            animate={inView ? "visible" : "hidden"}
            variants={variant}
            transition={{ duration: 1 }}
          >
            {children}
          </motion.div>
        </div>
      </Parallax>
    );
  };

  const [isLoading, setIsLoading] = useState(true); // Controls visibility of the loader
  const [shouldDisappear, setShouldDisappear] = useState(false); // Controls the "disappear" class

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldDisappear(true); // Trigger the disappear animation
      setTimeout(() => {
        setIsLoading(false); // Remove the loader after the animation
      }, 500); // Match this delay to the CSS transition duration
    }, 3000); // Initial loader display duration

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <>
      {isLoading ? (
        <div className={`loadingScreen ${shouldDisappear ? "disappear" : ""}`}>
        <l-waveform size="35" stroke="3.5" speed="1" color="white"></l-waveform>
      </div>
      ) : (
        <div className="App">
          <div id="header">
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

          <div id="footer">
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
