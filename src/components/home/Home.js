import React from "react";
import videoSrc from "../../assets/videos/video1.webm";

function Home() {
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
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', height : '100vh' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Heading</h1>
              <h4 className='mb-3'>Subheading</h4>
              <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                Call to action
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
