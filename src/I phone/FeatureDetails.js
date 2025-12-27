import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SendEnquiry from "./SendEnquiry";

const FeatureDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("/data/database.json")
      .then((res) => {
        const selectedFeature = res.data.Features.find(
          (item) => item.id === id
        );
        setData(selectedFeature);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <div className="container p-5">
      <div className="row">

        {/* Feature Section */}
        <div className="mb-5">
          <h3 className="fw-bold mb-4 text-center">{data.category}</h3>

          <div className="row g-4 justify-content-center">
            {data.features.map((feature, idx) => (
              <div key={idx} className="col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm border-0">

                  {/* ✅ FIXED IMAGE PATH */}
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="card-img-top"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />

                  <div className="card-body text-center">
                    <h5 className="card-title fw-bold">
                      {feature.title}
                    </h5>
                    <p className="text-muted">
                      {feature.description}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enquiry Section */}
        <div
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ minHeight: "100vh" }}
        >
          <h3>Pre-order your iPhone</h3>
          <SendEnquiry />
        </div>

      </div>
    </div>
  );
};

export default FeatureDetails;





// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import SendEnquiry from './SendEnquiry';

// const FeatureDetails = () => {
//   const { id } = useParams();
//   const [data, setData] = useState(null); 

//   useEffect(() => {
//     axios.get(`http://localhost:5000/Features/${id}`)
//       .then((res) => setData(res.data))
//       .catch((err) => console.error("Error fetching data:", err));
//   }, [id]);

//   if (!data) return <p>Loading...</p>; 

//   return (
//     <div className='container p-5'>
//       <div className='row'>

//         <div className="mb-5">
//           <h3 className="fw-bold mb-4 text-center">{data.category}</h3>
//           <div className="row g-4 justify-content-center">
//             {data.features?.map((feature, idx) => (
//               <div key={idx} className="col-md-6 col-lg-4">
//                 <div className="card h-100 shadow-sm border-0">
//                   <img
//                  src={`/${feature.icon}`}
//                  alt={feature.title}
//                  className="card-img-top"
//                  style={{
//                    width: "100%",
//                    height: "auto",
//                   objectFit: "cover"
//                                     }}
//                                       />
//                   <div className="card-body text-center">
//                     <h5 className="card-title fw-bold">{feature.title}</h5>
//                     <p className="text-muted">{feature.description}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div  className=" justify-content-center align-items-center" style={{ height: "100vh" }}>
//           <h3>Pre-order your iPhone</h3>
//           <SendEnquiry />
//         </div>

//       </div>
//     </div>
//   );
// };

// export default FeatureDetails;
