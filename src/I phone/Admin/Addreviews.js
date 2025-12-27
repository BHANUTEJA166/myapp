import axios from "axios";
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Addreviews = () => {
  const [reviews, setReviews] = useState([]);
  const [reviwe, setReview] = useState({ id: '', name: '', comment: '', rating: '', location: '', date: '' });
  const [newReview, setNewReview] = useState({ name: '', comment: '', rating: '', location: '', date: '' });

  // ✅ ONLY API CHANGED
  useEffect(() => {
    axios.get('/data/database.json')
      .then((res) => setReviews(res.data.Reviews))
      .catch((err) => console.log(err))
  }, []);

  // ✅ ONLY API REMOVED → STATE FILTER
  const deleteRev = (rid) => {
    setReviews(reviews.filter(rev => rev.id !== rid))
    alert(`Review Deleted (demo only)`);
  };

  // ✅ ONLY API REMOVED → STATE FIND
  const getOneRecord = (rid) => {
    const record = reviews.find(rev => rev.id === rid)
    setReview({ ...record });
  };

  const changeData = (e) => {
    setReview({ ...reviwe, [e.target.name]: e.target.value });
  };

  const changeNewData = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  // ✅ ONLY API REMOVED → STATE UPDATE
  const submitHandler = (e) => {
    e.preventDefault();
    const updated = reviews.map(rev =>
      rev.id === reviwe.id ? reviwe : rev
    )
    setReviews(updated)
    alert(`Review Updated (demo only)`);
  };

  // ✅ ONLY API REMOVED → STATE PUSH
  const submitNewReview = (e) => {
    e.preventDefault();
    setReviews([...reviews, { ...newReview, id: Date.now().toString() }])
    setNewReview({ name: '', comment: '', rating: '', location: '', date: '' });
    alert("New Review Added (demo only)");
  };

  const { name, comment, rating, location, date } = reviwe;

  return (
    <section className="container p-5">
      <h1 className="text-center m-5">REVIEWS</h1>

      {/* Add Review Button */}
      <div className="text-end mb-3">
        <button data-bs-toggle="modal" data-bs-target="#Add" className="btn btn-success">
          <i className="bi bi-plus-circle me-2"></i>Add Review
        </button>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>NAME</th>
            <th>COMMENT</th>
            <th>RATING</th>
            <th>LOCATION</th>
            <th>DATE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((rev, index) => (
            <tr key={index}>
              <td>{rev.name}</td>
              <td>{rev.comment}</td>
              <td>{rev.rating}</td>
              <td>{rev.location}</td>
              <td>{rev.date}</td>
              <td>
                <button
                  onClick={() => getOneRecord(rev.id)}
                  data-bs-target="#Update"
                  data-bs-toggle="modal"
                  className="btn btn-primary me-2"
                >
                  <i className="bi bi-pencil"></i>
                </button>
                <button
                  onClick={() => deleteRev(rev.id)}
                  className="btn btn-danger"
                >
                  <i className="bi bi-trash3"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Update Modal */}
      <div className="modal fade" id="Update" data-bs-backdrop="static">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5>Update Review</h5>
              <button className="btn btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={submitHandler}>
                <input type='text' name='name' value={name} onChange={changeData} placeholder="Enter Name" className="form-control mb-3" />
                <input type='text' name='comment' value={comment} onChange={changeData} placeholder="Enter Comment" className="form-control mb-3" />
                <input type='text' name='rating' value={rating} onChange={changeData} placeholder="Enter Rating" className="form-control mb-3" />
                <input type='text' name='location' value={location} onChange={changeData} placeholder="Enter Location" className="form-control mb-3" />
                <input type='date' name='date' value={date} onChange={changeData} className="form-control mb-3" />
                <input type='submit' className="btn btn-success" data-bs-dismiss="modal" />
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Add Modal */}
      <div className="modal fade" id="Add" data-bs-backdrop="static">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5>Add Review</h5>
              <button className="btn btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={submitNewReview}>
                <input type='text' name='name' value={newReview.name} onChange={changeNewData} placeholder="Enter Name" className="form-control mb-3" />
                <input type='text' name='comment' value={newReview.comment} onChange={changeNewData} placeholder="Enter Comment" className="form-control mb-3" />
                <input type='text' name='rating' value={newReview.rating} onChange={changeNewData} placeholder="Enter Rating" className="form-control mb-3" />
                <input type='text' name='location' value={newReview.location} onChange={changeNewData} placeholder="Enter Location" className="form-control mb-3" />
                <input type='date' name='date' value={newReview.date} onChange={changeNewData} className="form-control mb-3" />
                <input type='submit' className="btn btn-success" data-bs-dismiss="modal" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Addreviews;


























// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import 'bootstrap/dist/js/bootstrap.bundle.min';

// const Addreviews = () => {
//   const [reviews, setReviews] = useState([]);
//   const [reviwe, setReview] = useState({ id: '', name: '', comment: '', rating: '', location: '', date: '' });
//   const [newReview, setNewReview] = useState({ name: '', comment: '', rating: '', location: '', date: '' });

//   useEffect(() => {
//     axios.get(`http://localhost:5000/Reviews`)
//       .then((res) => setReviews(res.data))
//       .catch((err) => console.log(err))
//   }, []);

//   const deleteRev = (rid) => {
//     axios.delete(`http://localhost:5000/Reviews/${rid}`)
//       .then(() => {
//         alert(`Review Deleted`);
//         window.location.reload(); // Refresh the list
//       });
//   };

//   const getOneRecord = (rid) => {
//     axios.get(`http://localhost:5000/Reviews/${rid}`)
//       .then((res) => {
//         setReview({ ...res.data, id: rid });
//       })
//       .catch((err) => console.log(err));
//   };

//   const changeData = (e) => {
//     setReview({ ...reviwe, [e.target.name]: e.target.value });
//   };

//   const changeNewData = (e) => {
//     setNewReview({ ...newReview, [e.target.name]: e.target.value });
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();
//     axios.put(`http://localhost:5000/Reviews/${reviwe.id}`, reviwe)
//       .then(() => {
//         alert(`Review Updated`);
//         window.location.reload();
//       })
//       .catch((err) => console.log(err));
//   };

//   const submitNewReview = (e) => {
//     e.preventDefault();
//     axios.post(`http://localhost:5000/Reviews`, newReview)
//       .then(() => {
//         alert("New Review Added");
//         setNewReview({ name: '', comment: '', rating: '', location: '', date: '' });
//         window.location.reload();
//       })
//       .catch(err => console.log(err));
//   };

//   const { name, comment, rating, location, date } = reviwe;

//   return (
//     <section className="container p-5">
//       <h1 className="text-center m-5">REVIEWS</h1>

//       {/* Add Review Button */}
//       <div className="text-end mb-3">
//         <button data-bs-toggle="modal" data-bs-target="#Add" className="btn btn-success">
//           <i className="bi bi-plus-circle me-2"></i>Add Review
//         </button>
//       </div>

//       <table className="table table-bordered">
//         <thead>
//           <tr>
//             <th>NAME</th>
//             <th>COMMENT</th>
//             <th>RATING</th>
//             <th>LOCATION</th>
//             <th>DATE</th>
//             <th>ACTION</th>
//           </tr>
//         </thead>
//         <tbody>
//           {reviews.map((rev, index) => (
//             <tr key={index}>
//               <td>{rev.name}</td>
//               <td>{rev.comment}</td>
//               <td>{rev.rating}</td>
//               <td>{rev.location}</td>
//               <td>{rev.date}</td>
//               <td>
//                 <button onClick={() => getOneRecord(rev.id)} data-bs-target="#Update" data-bs-toggle="modal" className="btn btn-primary me-2">
//                   <i className="bi bi-pencil"></i>
//                 </button>
//                 <button onClick={() => deleteRev(rev.id)} className="btn btn-danger">
//                   <i className="bi bi-trash3"></i>
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Update Modal */}
//       <div className="modal fade" id="Update" data-bs-backdrop="static">
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5>Update Review</h5>
//               <button className="btn btn-close" data-bs-dismiss="modal"></button>
//             </div>
//             <div className="modal-body">
//               <form onSubmit={submitHandler}>
//                 <input type='text' name='name' value={name} onChange={changeData} placeholder="Enter Name" className="form-control mb-3" />
//                 <input type='text' name='comment' value={comment} onChange={changeData} placeholder="Enter Comment" className="form-control mb-3" />
//                 <input type='text' name='rating' value={rating} onChange={changeData} placeholder="Enter Rating" className="form-control mb-3" />
//                 <input type='text' name='location' value={location} onChange={changeData} placeholder="Enter Location" className="form-control mb-3" />
//                 <input type='date' name='date' value={date} onChange={changeData} className="form-control mb-3" />
//                 <input type='submit' className="btn btn-success" />
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Add Modal */}
//       <div className="modal fade" id="Add" data-bs-backdrop="static">
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5>Add Review</h5>
//               <button className="btn btn-close" data-bs-dismiss="modal"></button>
//             </div>
//             <div className="modal-body">
//               <form onSubmit={submitNewReview}>
//                 <input type='text' name='name' value={newReview.name} onChange={changeNewData} placeholder="Enter Name" className="form-control mb-3" />
//                 <input type='text' name='comment' value={newReview.comment} onChange={changeNewData} placeholder="Enter Comment" className="form-control mb-3" />
//                 <input type='text' name='rating' value={newReview.rating} onChange={changeNewData} placeholder="Enter Rating" className="form-control mb-3" />
//                 <input type='text' name='location' value={newReview.location} onChange={changeNewData} placeholder="Enter Location" className="form-control mb-3" />
//                 <input type='date' name='date' value={newReview.date} onChange={changeNewData} className="form-control mb-3" />
//                 <input type='submit' className="btn btn-success" />
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Addreviews;
