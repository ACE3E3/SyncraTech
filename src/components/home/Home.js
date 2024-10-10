import React, { useEffect, useState } from "react";
import videoSrc from "../../assets/videos/video1.webm";
import { motion, AnimatePresence } from "framer-motion";

// Array of texts to loop through
const textArray = ["Trade faster", "Increase sales", "Stock winners"];

function Home() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // Cycle through the textArray every 2 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);
  return (
    <div>
      <div
        className='text-center bg-image'
      >
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            width: "100%",
            height: "100vh",
            objectFit: "cover",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <source src={videoSrc} type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', height: '100vh' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className="text-white" style={{ display: "flex" }}>
              {/* Animate text transitions */}
              <h1 className="mb-3">
                <div style={{ overflow: "hidden", height: "50px" }}>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentTextIndex}
                      initial={{ y: "100%" }} // Start below the view
                      animate={{ y: "0%" }} // Animate into the view
                      exit={{ y: "-100%" }} // Exit by scrolling up
                      transition={{ duration: 0.6 }}
                      style={{ display: "inline-block" }}
                    >
                      {textArray[currentTextIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </h1>
              <h1 className="mb-3 mx-3">Subheading</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;