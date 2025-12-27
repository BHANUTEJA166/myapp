import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Hero = () => {
  return (
    <section>
      <div 
        id="carouselExample" 
        className="carousel slide" 
        data-bs-ride="carousel" 
        data-bs-interval="2000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="banner1"> 
              <h3>Apple Intelligence</h3>
              <h1>AI-opening possibilities</h1>
            </div>
          </div>
          <div className="carousel-item">
            <div className="banner2">
              <h3>Cutting-Edge Cameras</h3>
              <h1>Picture your best photos and videos.</h1>
            </div>
          </div>
          <div className="carousel-item">
            <div className="banner3">
              <h3>Chip and Battery Life</h3>
              <h1>Fast that lasts.</h1>
            </div>
          </div>
        </div>

        <button 
          className="carousel-control-prev" 
          type="button" 
          data-bs-target="#carouselExample" 
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button 
          className="carousel-control-next" 
          type="button" 
          data-bs-target="#carouselExample" 
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default Hero;
