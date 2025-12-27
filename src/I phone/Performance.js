import React from 'react';
import Chip from "./Assets/A18.jpg";
import Battery from "./Assets/battery.jpg";
import Icon from "./Assets/cool.jpg";

const Performance = () => {
  return (
    <section  className="py-5 bg-white" id="performance">
      <div style={{ backgroundColor: 'black', color: 'white' }} className="container-fluid">

        {/* Intro Section */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Performance that keeps up with your ambition.</h2>
          <p className="lead mt-3">
            From launching apps in milliseconds to editing 4K videos on the go,  
            iPhone is built for more than just speed — it’s built for possibility.<br />
            Every detail is optimized for one thing: <strong>to never slow you down.</strong>
          </p>
        </div>

        {/* Chip Section */}
        <div className="row align-items-center my-5">
          <div className="col-md-6">
            <h3 className="fw-bold">Meet the VoltFusion X1 Chip</h3>
            <p className="">
              The smartest chip we’ve ever designed:
            </p>
            <ul className="list-unstyled ">
              <li>• 5nm architecture</li>
              <li>• 20% faster CPU</li>
              <li>• 40% more efficient GPU</li>
              <li>• AI engine with 15 trillion operations/sec</li>
            </ul>
            <p className="">
              Whether you're gaming, creating, or multitasking — it’s not just fast.  
              It’s <em>intelligently</em> fast.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img src={Chip} alt="VoltFusion X1 Chip" className="img-fluid" />
          </div>
        </div>

        {/* Battery Section */}
        <div className="row align-items-center my-5 flex-md-row-reverse">
          <div className="col-md-6">
            <h3 className="fw-bold">Power that outlasts your day</h3>
            <p className="">
              With intelligent battery optimization,  
              iPhone keeps going and going.
            </p>
            <ul className="list-unstyled ">
              <li>• Up to 36 hours on a single charge</li>
              <li>• 50% charge in just 20 minutes with VoltCharge</li>
              <li>• Adaptive refresh to save power when idle</li>
            </ul>
            <p className="">No compromises. Just freedom.</p>
          </div>
          <div className="col-md-6 text-center">
            <img src={Battery} alt="Battery Icon" className="img-fluid" />
          </div>
        </div>

       

        {/* Cooling Section */}
        <div className="row align-items-center my-5">
          <div className="col-md-6">
            <h3 className="fw-bold">Stay cool. Even under pressure.</h3>
            <p className="">
              From high-performance gaming to intensive multitasking,  
              iPhone stays smooth and stable — thanks to our smart thermal design.
            </p>
            <ul className="list-unstyled ">
              <li>• Advanced graphene cooling layer</li>
              <li>• Heat is managed, not just handled</li>
              <li>• No lags. No throttling. Just power.</li>
            </ul>
          </div>
          <div className="col-md-6 text-center">
            <img src={Icon} alt="Cooling System" className="img-fluid" />
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-5">
          <h4 className="fw-bold">Performance you’ll feel. Speed you’ll trust.</h4>
          <a href="#compare" className="btn btn-dark btn-lg mt-3 me-3">Compare Models</a>
          <a href="#features" className="btn btn-outline-dark btn-lg mt-3">See Features</a>
        </div>

      </div>
    </section>
  );
};

export default Performance;