import React from 'react';
import about1 from "./Assets/about1.jpg";
import about2 from "./Assets/about2.jpg";
import about3 from "./Assets/about3.jpg";

const About = () => {
    return (
         <section className="py-0 bg-white" id="about">
  <div  style={{ backgroundColor: 'black', color: 'white' }} className="container-fluid">
   
    <div className="text-center mb-5">
      <h2 className="display-5 fw-bold">Designed to be Powerful. Made to be Yours.</h2>
      <p className="lead  mt-3">
        Every iPhone begins with one belief — that technology should feel human.  
        Not just smart. But intuitive.  
        Not just fast. But effortless.
      </p>
    </div>

    <div className="row align-items-center my-5">
      <div className="col-md-6">
        <h3 className="fw-bold">Where Precision Meets Purpose.</h3>
        <p className="mx-5">
          We started with a simple question: <em>What should a phone do — when it disappears into your life?</em><br />
          From seamless edges to adaptive display, iPhone is built to feel invisible and indispensable.
        </p>
      </div>
      <div className="col-md-6 text-center">
        <img src={about1} alt="iPhone Side View" className="img-fluid" />
      </div>
    </div>

    <div className="row align-items-center my-5 flex-md-row-reverse">
      <div className="col-md-6">
        <h3 className="fw-bold">Form follows feeling.</h3>
        <ul className="list-unstyled ">
          <li>• Aerospace-grade materials</li>
          <li>• Ceramic Shield, tougher than any smartphone glass</li>
          <li>• Symmetry in every pixel</li>
          <li>• Immersive. Elegant. Timeless.</li>
        </ul>
      </div>
      <div className="col-md-6 text-center">
        <img src={about2} alt="iPhone Front" className="img-fluid" />
      </div>
    </div>

    <div className="text-center my-5">
      <h3 className="fw-bold">Every millisecond counts.</h3>
      <p className="">
        With the custom-built chip, the iPhone leads.  
        Photos load faster. Apps launch instantly.  
        Performance that respects your time.
      </p>
    </div>

    <div className="row align-items-center my-5 ">
      <div className="col-md-6">
        <h3 className="fw-bold mx-4">What’s on your iPhone, stays on your iPhone.</h3>
        <p className="mx-5">
          Privacy is a fundamental right. That’s why iPhone is built from the ground up to protect it.  
          No hidden tracking. No surprises. Just your data — yours alone.
        </p>
      </div>
      <div className="col-md-6 text-center">
        <img src={about3} alt="Privacy Lock" className="img-fluid" />
      </div>
    </div>

    <div className="text-center mt-5">
      <blockquote className="blockquote fs-4 fst-italic  mb-4">
        “iPhone isn’t just ahead of its time. It’s in sync with yours.”
      </blockquote>
      <a href="#features" className="btn btn-dark btn-lg me-3 mb-3">Discover iPhone</a>
      <a href="#buy" className="btn btn-dark btn-lg mb-3">See Features</a>
    </div>
  </div>
</section>
    );
}

export default About;