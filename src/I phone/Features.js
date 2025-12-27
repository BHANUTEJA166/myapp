import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const FeaturesPage = () => {
    const [data, setData] = useState([])
  const [error, setError] = useState("")
    useEffect(() => {
         axios.get(`http://localhost:5000/Features`)
         .then((res) => setData(res.data))
         .catch((err) => {
             setError(err.message)
         })
    }, [])
    if (error) {
        return <p> {error} </p>
    }
    if (!data) {
        return <p> Loading... </p>
    }
  return (
    <section className="py-5 bg-light" id="features">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Packed with Innovation</h2>
          <p className="lead text-muted mt-3">
            From stunning visuals to powerful performance — explore the standout features.
          </p>
        </div>

        {data.map((item, index) => (
          <div key={index} className="mb-5">
            <h3 className="fw-bold mb-4 text-center">{item.category}</h3>
            <div className="row g-4 justify-content-center">
              {item.features.map((feature, idx) => (
                <div key={idx} className="col-md-6 col-lg-4">
                  <div className="card h-100 shadow-sm border-0">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="card-img-top"
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover"
                      }}
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title fw-bold">{feature.title}</h5>
                      <p className="text-muted">{feature.description}</p>
                      <Link to={`/featureDetails/${item.id}`}>
                        <button className="btn btn-outline-dark">Know More</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center mt-5">
          <a href="#reviews" className="btn btn-dark btn-lg mt-3 me-3">Read Reviews</a>
          <a href="#accessories" className="btn btn-outline-dark btn-lg mt-3">Explore Accessories</a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesPage;
