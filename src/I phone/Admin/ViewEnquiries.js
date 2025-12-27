import axios from 'axios'
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useEffect, useState } from 'react'

const ViewEnquiries = () => {
  const [enquiries, setEnquiries] = useState([])
  const [enquiry, setEnquiry] = useState({ id: '', name: '', mobile: '', email: '', message: '' })

  // ✅ ONLY API CHANGED
  useEffect(() => {
    axios.get('/data/database.json')
      .then((res) => setEnquiries(res.data.enquiries))
      .catch((err) => console.log(err))
  }, [])

  // ✅ ONLY API REMOVED → STATE UPDATE
  const deleteEnq = (eid) => {
    setEnquiries(enquiries.filter(enq => enq.id !== eid))
    alert(`Enquiry Deleted (demo only)`)
  }

  // ✅ ONLY API REMOVED → STATE FIND
  const getOneRecord = (eid) => {
    const record = enquiries.find(enq => enq.id === eid)
    setEnquiry({ ...record })
  }

  const changeData = (e) => {
    setEnquiry({ ...enquiry, [e.target.name]: e.target.value })
  }

  // ✅ ONLY API REMOVED → STATE UPDATE
  const submitHandler = (e) => {
    e.preventDefault()
    const updated = enquiries.map(enq =>
      enq.id === enquiry.id ? enquiry : enq
    )
    setEnquiries(updated)
    alert(`Enquiry Updated (demo only)`)
  }

  const { name, email, mobile, message } = enquiry

  return (
    <section className='container p-5'>
      <h1 className='text-center mb-5'>Enquiries</h1>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {enquiries.map((enq, index) => {
            return (
              <tr key={index}>
                <td>{enq.name}</td>
                <td>{enq.mobile}</td>
                <td>{enq.email}</td>
                <td>{enq.message}</td>
                <td>
                  <button
                    onClick={() => getOneRecord(enq.id)}
                    data-bs-target='#update'
                    data-bs-toggle='modal'
                    className='btn btn-primary me-2'
                  >
                    <i className="bi bi-pencil"></i>
                  </button>
                  <button
                    onClick={() => deleteEnq(enq.id)}
                    className='btn btn-danger'
                  >
                    <i className="bi bi-trash3"></i>
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <div className='modal fade' id='update' data-bs-backdrop='static'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5>Update Enquiry</h5>
              <button className='btn btn-close' data-bs-dismiss='modal'></button>
            </div>
            <div className='modal-body'>
              <form onSubmit={submitHandler}>
                <input type="text" name="name" value={name} onChange={changeData} className="form-control mb-3" placeholder="Enter Name" />
                <input type="text" name="mobile" value={mobile} onChange={changeData} className="form-control mb-3" placeholder="Mobile Number" />
                <input type="text" name="email" value={email} onChange={changeData} className="form-control mb-3" placeholder="Your Email" />
                <input type="text" name="message" value={message} onChange={changeData} className="form-control mb-3" placeholder="Message" />
                <input type="submit" data-bs-dismiss="modal" className="btn btn-success" />
              </form>
            </div>
            <div className='modal-footer'></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ViewEnquiries







// import axios from 'axios'
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import React, { useEffect, useState } from 'react'

// const ViewEnquiries = () => {
//   const [enquiries, setEnquiries] = useState([])
//   const [enquiry, setEnquiry] = useState({ id: '', name: '', mobile: '', email: '', message: '' })

//   useEffect(() => {
//     axios.get(`http://localhost:5000/enquiries`)
//       .then((res) => setEnquiries(res.data))
//       .catch((err) => console.log(err))
//   }, [])

//   const deleteEnq = (eid) => {
//     axios.delete(`http://localhost:5000/enquiries/${eid}`)
//       .then(() => {
//         alert(`Enquiry Deleted`)
//       })
//   }

//   const getOneRecord = (eid) => {
//     axios.get(`http://localhost:5000/enquiries/${eid}`)
//       .then((res) => {
//         setEnquiry({ ...res.data, id: eid })
//       })
//       .catch((err) => console.log(err))
//   }

// const changeData = (e) => {
//   setEnquiry({ ...enquiry, [e.target.name]: e.target.value })
// }


//   const submitHandler = (e) => {
//     e.preventDefault()
//     console.log(enquiry);
//     axios.put(`http://localhost:5000/enquiries/${enquiry.id}`, enquiry)
//       .then(() => {
//         alert(`Enquiry Updated`)
//       })
//       .catch((err) => console.log(err))
//   }
//   const { name, email, mobile, message } = enquiry

//   return (
//     <section className='container p-5'>
//       <h1 className='text-center mb-5'>Enquiries</h1>
//       <table className='table table-bordered'>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Mobile</th>
//             <th>Email</th>
//             <th>Message</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {enquiries.map((enq, index) => {
//             return (
//               <tr key={index}>
//                 <td>{enq.name}</td>
//                 <td>{enq.mobile}</td>
//                 <td>{enq.email}</td>
//                 <td>{enq.message}</td>
//                 <td>
//                   <button onClick={() => getOneRecord(enq.id)} data-bs-target='#update' data-bs-toggle='modal' className='btn btn-primary me-2'>
//                     <i className="bi bi-pencil"></i>
//                   </button>
//                   <button onClick={() => deleteEnq(enq.id)} className='btn btn-danger'>
//                     <i className="bi bi-trash3"></i>
//                   </button>
//                 </td>
//               </tr>
//             )
//           })}
//         </tbody>
//       </table>
//       <div className='modal fade' id='update' data-bs-backdrop='static'>
//         <div className='modal-dialog'>
//           <div className='modal-content'>
//             <div className='modal-header'>
//               <h5>Update Enquiry</h5>
//               <button className='btn btn-close' data-bs-dismiss='modal'></button>
//             </div>
//             <div className='modal-body'>
//               <form onSubmit={submitHandler}>
//                 <input type="text" name="name" value={name} onChange={changeData} className="form-control mb-3" placeholder="Enter Name" />
//                 <input type="text" name="mobile" value={mobile} onChange={changeData} className="form-control mb-3" placeholder="Mobile Number" />
//                 <input type="text" name="email" value={email} onChange={changeData} className="form-control mb-3" placeholder="Your Email" />
//                 <input type="text" name="message" value={message} onChange={changeData} className="form-control mb-3" placeholder="Message" />
//                 <input type="submit" data-bs-dismiss="modal" className="btn btn-success" />
//               </form>
//             </div>
//             <div className='modal-footer'></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ViewEnquiries
