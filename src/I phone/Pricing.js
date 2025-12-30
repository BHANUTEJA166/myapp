import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { fetchStocks, buyIphoneAndUpdateStock } from '../Redux/Iphones/IphoneActions';

const Pricing = ({ stocks, loading, error, fetchStocks, buyIphone }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product details
    axios.get("/data/database.json")
      .then(res => setProducts(res.data))
      .catch(console.error);

    // Fetch stock data
    fetchStocks();
  }, [fetchStocks]);

  if (loading) return <div className="p-5 text-center">Loading stocks…</div>;
  if (error)   return <div className="p-5 text-danger">Error: {error}</div>;

  const getStock = name => stocks.find(s => s.name === name)?.stock || 0;

  return (
    <section id="pricing" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">iPhone. Power that fits your life.</h2>
          <p className="lead text-muted mt-3">
            Choose the iPhone that’s right for you —<br />
            Same performance. Different sizes. Your style.
          </p>
        </div>

        <div className="row g-4">
          {products.map(p => {
            const stock = getStock(p.name);
            const badgeClass = 
              stock > 10 ? 'bg-success' :
              stock > 0  ? 'bg-warning' :
                           'bg-danger';
            const statusText = 
              stock > 5    ? 'Available' :
              stock <= 0   ? 'Out of Stock' :
                             'Limited Stock';
            const statusClass = 
              stock > 5    ? 'text-success' :
              stock <= 0   ? 'text-danger' :
                             'text-warning';

            return (
              <div className="col-md-4" key={p.id}>
                <div className="card h-100 border-0 shadow-sm text-center">
                  <img src={p.image} className="card-img-top p-4" alt={p.name} />
                  <div className="card-body">
                    <h4 className="card-title fw-bold">{p.name}</h4>
                    <p className="text-muted">{p.storage} | {p.price}</p>

                    {/* Stock count badge */}
                    <span className={`badge ${badgeClass} mb-2`}>
                      Stock: {stock}
                    </span>

                    {/* Status text */}
                    <p className={`small ${statusClass}`}>
                      {statusText}
                    </p>

                    <ul className="list-unstyled text-muted small">
                      <li>• {p.chip}</li>
                      <li>• {p.display}</li>
                      <li>• {p.camera}</li>
                      <li>• {p.body}</li>
                    </ul>
                  </div>
                  <div className="card-footer bg-white border-0">
                    <button
                      className={`btn w-100 ${
                        stock > 10 ? 'btn-success' :
                        stock > 0  ? 'btn-warning' :
                                     'btn-secondary'
                      }`}
                      disabled={stock === 0}
                      onClick={() => buyIphone(stocks.find(s => s.name === p.name).id)}
                    >
                      {stock > 10
                        ? 'Buy Now'
                        : stock > 0
                          ? `Only ${stock} left – Buy Now`
                          : 'Out of Stock'
                      }
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  stocks: state.iphones.stocks,
  loading: state.iphones.loading,
  error: state.iphones.error
});

const mapDispatchToProps = dispatch => ({
  fetchStocks: () => dispatch(fetchStocks()),
  buyIphone: id => dispatch(buyIphoneAndUpdateStock(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Pricing);






























































// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const Pricing = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get(`http://localhost:5000/products`)
//       .then((res) => setData(res.data))
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <section className="py-5 bg-light" id="pricing">
//       <div className="container">

//         <div className="text-center mb-5">
//           <h2 className="display-5 fw-bold">iPhone. Power that fits your life.</h2>
//           <p className="lead text-muted mt-3">
//             Choose the iPhone that’s right for you —<br />
//             Same performance. Different sizes. Your style.
//           </p>
//         </div>

//         <div className="row g-4">
//           {data.map((item) => (
//             <div className="col-md-4" key={item.id}>
//               <div className="card h-100 border-0 shadow-sm text-center">
//                 <img src={item.image} className="card-img-top p-4" alt={item.name} />
//                 <div className="card-body">
//                   <h4 className="card-title fw-bold">{item.name}</h4>
//                   <p className="text-muted">{item.storage} | {item.price}</p>
//                   <ul className="list-unstyled text-muted small">
//                     <li>• {item.chip}</li>
//                     <li>• {item.display}</li>
//                     <li>• {item.camera}</li>
//                     <li>• {item.body}</li>
//                   </ul>
//                 </div>
//                 <div className="card-footer bg-white border-0">
//                   <a href="#" className="btn btn-dark w-100">Buy Now</a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="row mt-5">
//           <div className="col-md-6">
//             <h5 className="fw-bold">Available in:</h5>
//             <p className="text-muted">
//               Midnight Black, Arctic Silver, Sunset Gold, Sierra Blue <br />
//               *(Sierra Blue only in Pro Max)*
//             </p>
//           </div>
//           <div className="col-md-6">
//             <h5 className="fw-bold">What's Included:</h5>
//             <ul className="text-muted small mb-0">
//               <li>✔ Free shipping across India</li>
//               <li>✔ One-year warranty</li>
//               <li>✔ EMI from ₹2,999/month</li>
//               <li>✔ Up to ₹20,000 off with eligible trade-in</li>
//             </ul>
//           </div>
//         </div>

//         <div className="text-center mt-5">
//           <h4 className="fw-bold">The future is in your hands.</h4>
//           <a href="#compare" className="btn btn-dark btn-lg mt-3 me-3">Compare Models</a>
//           <a href="#features" className="btn btn-outline-dark btn-lg mt-3">See Features</a>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Pricing;