import React, { useEffect, useState } from "react";
import videoSrc from "../../assets/videos/video1.webm";
import "./Home.css";
import { motion, AnimatePresence } from "framer-motion";

const textArray = ["Trade faster", "Increase sales", "Stock winners"];

function Home() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative flex flex-col md:flex-row h-screen">
      {/* Video Section */}
      <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-900 text-white p-6 md:p-12">
        <div className="max-w-lg text-center md:text-left space-y-6">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentTextIndex}
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                exit={{ y: "-100%" }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold"
              >
                {textArray[currentTextIndex]}
              </motion.h1>
            </AnimatePresence>
          </div>
          <p className="text-lg md:text-xl">
            Take your business to the next level with our innovative solutions
            and unparalleled performance.
          </p>
          <div
            style={{ justifyContent: "center" }}
            className="flex justify-center md:justify-start space-x-4"
          >
            <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white text-lg font-medium shadow-md transition">
              Get Started
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-white hover:border-indigo-600 text-white hover:text-indigo-600 rounded-lg text-lg font-medium shadow-md transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
