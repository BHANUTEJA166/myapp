import React from "react";

import AirPods from "./Assets/airpods2.jpg";
import Watch from "./Assets/watch.png";
import MagSafe from "./Assets/magsafe.png";
import Leather from "./Assets/leather.jpg";
import Pencil from "./Assets/pencil.jpg";
import AirTag from "./Assets/airtag.jpg";

const AccessoriesPage = () => {
  const data = [
    {
      name: "AirPods Pro 2",
      price: "₹24,900",
      features: [
        "Active Noise Cancellation",
        "Transparency Mode",
        "MagSafe Charging Case"
      ],
      type: "Audio",
      image: AirPods
    },
    {
      name: "Apple Watch Series 9",
      price: "₹41,900",
      features: [
        "Retina Display",
        "Blood Oxygen Sensor",
        "Fast Charging"
      ],
      type: "Wearable",
      image: Watch
    },
    {
      name: "MagSafe Wireless Charger",
      price: "₹4,500",
      features: [
        "15W Fast Charging",
        "Magnetic Alignment",
        "USB-C support"
      ],
      type: "Charging",
      image: MagSafe
    },
    {
      name: "iPhone Leather Case",
      price: "₹5,900",
      features: [
        "Premium Leather",
        "MagSafe Compatible",
        "Scratch Resistant"
      ],
      type: "Protection",
      image: Leather
    },
    {
      name: "Apple Pencil USB-C",
      price: "₹7,900",
      features: [
        "Precision drawing",
        "Tilt and pressure sensitivity",
        "Compatible with iPads"
      ],
      type: "Creative",
      image: Pencil
    },
    {
      name: "AirTag (4 Pack)",
      price: "₹10,900",
      features: [
        "Track lost items",
        "Find My App",
        "One-tap setup"
      ],
      type: "Tracking",
      image: AirTag
    }
  ];

  return (
    <section className="py-5 bg-white" id="accessories">
      <div className="container">

        {/* HEADER */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">
            Essential Accessories. Perfectly Paired.
          </h2>
          <p className="lead text-muted mt-3">
            Take your iPhone experience to the next level with accessories
            designed for performance, style, and utility.
          </p>
        </div>

        {/* ACCESSORIES LIST */}
        {data.map((item, index) => (
          <div
            key={index}
            className="row align-items-center my-5"
          >
            {/* IMAGE — LEFT */}
            <div className="col-md-6 text-center mb-4 mb-md-0">
              <div
                style={{
                  height: "280px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    objectFit: "contain"
                  }}
                />
              </div>
            </div>

            {/* CONTENT — RIGHT */}
            <div className="col-md-6">
              <h3 className="fw-bold">{item.name}</h3>
              <p className="text-muted mb-2">{item.type}</p>

              <ul className="list-unstyled text-muted mb-3">
                {item.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>

              <p className="fw-semibold text-muted">
                {item.price}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default AccessoriesPage;



{/* <div className="row align-items-center my-5">
  {data.map((item, index) => (
    <div className="row align-items-center my-4" key={index}>
      <div className="col-md-6 text-center">
        <img src={item.image} alt={item.name} className="img-fluid" />
      </div>
      <div className="col-md-6">
        <h3 className="fw-bold">{item.name}</h3>
        <p className="text-muted">Type: {item.type}</p>
        <ul className="list-unstyled text-muted">
          {item.features.map((feature, i) => (
            <li key={i}>• {feature}</li>
          ))}
        </ul>
        <p className="text-muted">Price: {item.price}</p>
      </div>
    </div>
  ))}
</div> */}