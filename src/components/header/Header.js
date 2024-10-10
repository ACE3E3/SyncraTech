import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = ({ scrollToId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  const navItems = [
    // { name: 'Home', id: 'home' },
    { name: 'Products', id: 'products' },
    { name: 'Services', id: 'services' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'About', id: 'about' },
    { name: 'FAQ', id: 'faq' },
    { name: 'Contact', id: 'contact' },
  ];

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const handleNavClick = (id) => {
    scrollToId(id);
    setIsOpen(false);  // Close mobile menu after clicking
  };

  return (
    <motion.header
      variants={{
        visible: { y: 20, opacity: 1 },
        hidden: { y: -100, opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed left-0 right-0 mx-auto w-[95%] max-w-5xl bg-white/80 backdrop-blur-md rounded-lg md:rounded-full shadow-lg z-50"
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center" >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-xl sm:text-2xl font-bold text-blue-600"
          onClick={() => handleNavClick("home")}
        >
          SyncraTech
        </motion.div>

        <nav className="hidden md:flex space-x-2 lg:space-x-4">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-sm lg:text-base text-gray-800 hover:text-indigo-600 transition-colors"
            >
              {item.name}
            </motion.button>
          ))}
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white/90 rounded-b-lg`}
      >
        <div className="px-2 pt-2 pb-3 flex flex-col items-center">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full text-center px-3 py-2 my-1 rounded-md text-base font-medium text-gray-800 hover:bg-indigo-100 hover:text-indigo-600 transition-colors"
            >
              {item.name}
            </motion.button>
          ))}
        </div>
      </motion.nav>
    </motion.header>
  );
};

export default Header;