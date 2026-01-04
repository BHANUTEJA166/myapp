import axios from "axios";
import React, { useEffect , useState } from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Viewreviews = () => {
    const [reviews , setReviews] = useState ([])
    const [reviwe, setReview] = useState({ id:'' , name:'', comment:'', rating:'', location:'', date:'' })

    // ✅ ONLY API CHANGED
    useEffect(() => {
        axios.get('/data/database.json')
        .then((res) => setReviews(res.data.Reviews))
        .catch((err) => console.log(err))
    }, [])

    // ✅ API REMOVED → STATE FILTER
    const deleteRev = (rid) => {
        alert(`Review Deleted (demo only)`)
        setReviews(prevReviews => prevReviews.filter(r => r.id !== rid));
    }

    // ✅ API REMOVED → STATE FIND
    const getOneRecord = (rid) => {
        const record = reviews.find(r => r.id === rid)
        setReview({ ...record })
    }

    const changeData = (e) => {
        setReview({ ...reviwe, [e.target.name]: e.target.value })
    }

    // ✅ API REMOVED → STATE UPDATE
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(reviwe);
        const updated = reviews.map(r =>
            r.id === reviwe.id ? reviwe : r
        )
        setReviews(updated)
        alert(`Review Updated (demo only)`)
    }

    const {name, comment, rating, location , date } = reviwe

  return (
    <section className="container p-5">
        <h1 className="text-center m-5">REVIEWS</h1>
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
            {reviews.map((rev, index) => {
                return (
                    <tr key={index}>
                     <td>{rev.name}</td>
                     <td>{rev.comment}</td>
                     <td>{rev.rating}</td>
                     <td>{rev.location}</td>
                     <td>{rev.date}</td>
                     <td>
                     <button
                       onClick={() => getOneRecord(rev.id)}
                       data-bs-target='#Update'
                       data-bs-toggle='modal'
                       className='btn btn-primary me-2 mb-3'
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
                )
            })}
         </tbody>
        </table>

        <div className="modal fade" id='Update' data-bs-backdrop='static'>
          <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5>Update Review</h5>
                    <button className="btn btn-close" data-bs-dismiss='modal'></button>
                </div>
                <div className="modal-body">
                    <form onSubmit={submitHandler}>
                        <input type='text' name='name' value={name} onChange={changeData} placeholder="Enter Name" className="form-control mb-3" />
                        <input type='text' name='comment' value={comment} onChange={changeData} placeholder="Enter Comment" className="form-control mb-3" />
                        <input type='text' name='rating' value={rating} onChange={changeData} placeholder="Enter Rating" className="form-control mb-3" />
                        <input type='text' name='location' value={location} onChange={changeData} placeholder="Enter Location" className="form-control mb-3" />
                        <input type='date' name='date' value={date} onChange={changeData} className="form-control mb-3" />
                        <input type='submit' className="btn btn-success" />
                    </form>
                </div>
                <div className="modal-footer"></div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Viewreviews















// import axios from "axios";
// import React, { useEffect , useState } from "react";
// import 'bootstrap/dist/js/bootstrap.bundle.min';


// const Viewreviews = () => {
//     const [reviews , setReviews] = useState ([])
//     const [reviwe, setReview] = useState({ id:'' , name:'', comment:'', rating:'', location:'', date:'' })

//     useEffect(() => {
//         axios.get(`http://localhost:5000/Reviews`)
//         .then((res) => setReviews(res.data))
//         .catch((err) => console.log(err))
//     }, [])
    

//     const deleteRev = (rid) => {
//         axios.delete(`http://localhost:5000/Reviews/${rid}`)
//         .then(() => {
//             alert(`Review Deleted`)
//         setReviews(prevReviews => prevReviews.filter(r => r.id !== rid));
//         })
//     }

//     const getOneRecord = (rid) => {
//         axios.get(`http://localhost:5000/Reviews/${rid}`)
//         .then((res) => {
//             setReview({...res.data, id: rid})
//         })
//         .catch((err) => console.log(err) )
//     }

//     const changeData = (e) => {
//         setReview({...reviwe, [e.target.name]: e.target.value })
//     }
 
//     const submitHandler = (e) => {
//         e.preventDefault();
//         console.log(reviwe);
//         axios.put(`http://localhost:5000/Reviews/${reviwe.id}`, reviwe)
//         .then(() => {
//             alert(`Review Updated`)
//         })
//         .catch((err) => console.log(err))
//     }
//     const {name, comment, rating, location , date } = reviwe


//   return (
//     <section className="container p-5">
//         <h1 className="text-center m-5">REVIEWS</h1>
//         <table className="table table-bordered">
//          <thead>
//             <tr>
//                 <th>NAME</th>
//                 <th>COMMENT</th>
//                 <th>RATING</th>
//                 <th>LOCATION</th>
//                 <th>DATE</th>
//                 <th>ACTION</th>
//             </tr>
//          </thead>
//          <tbody>
//             {reviews.map((rev, index) => {
//                 return (
//                     <tr key={index}>
//                      <td>{rev.name}</td>
//                      <td>{rev.comment}</td>
//                      <td>{rev.rating}</td>
//                      <td>{rev.location}</td>
//                      <td>{rev.date}</td>
//                      <td>
//                      <button onClick={() => getOneRecord(rev.id)} data-bs-target='#Update' data-bs-toggle='modal' className='btn btn-primary me-2'>
//                         <i class="bi bi-pencil"></i>
//                      </button>
//                      <button onClick={() => deleteRev(rev.id)} className="btn btn-danger" >
//                      <i className="bi bi-trash3"></i>
//                      </button>
//                      </td>
//                     </tr>
//                 )
//             })}
//          </tbody>
//         </table>
//         <div className="modal fade" id='Update' data-bs-backdrop='static'>
//           <div className="modal-dialog">
//             <div className="modal-content">
//                 <div className="modal-header">
//                     <h5>Update Review</h5>
//                     <button className="btn btn-close" data-bs-dismiss='modal' ></button>
//                 </div>
//                 <div className="modal-body">
//                     <form onSubmit={submitHandler}>
//                         <input type='text' name='name' value={name} onChange={changeData} placeholder="Enter Name" className="form-control mb-3" />
//                         <input type='text' name='comment' value={comment} onChange={changeData} placeholder="Enter Comment" className="form-control mb-3" />
//                         <input type='text' name='rating' value={rating} onChange={changeData} placeholder="Enter Rating" className="form-control mb-3" />
//                         <input type='text' name='location' value={location} onChange={changeData} placeholder="Enter Location" className="form-control mb-3" />
//                         <input type='date' name='date' value={date} onChange={changeData} placeholder="Enter Date" className="form-control mb-3" />
//                         <input type='submit' className="btn btn-success" />
//                     </form>
//                 </div>
//                 <div className="modal-footer"></div>
//             </div>
//           </div>
//         </div>
//     </section>
//   )
// }

// export default Viewreviews

