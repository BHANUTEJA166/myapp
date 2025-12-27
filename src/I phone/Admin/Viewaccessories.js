import axios from 'axios'
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useEffect, useState } from 'react'

const Viewaccessories = () => {
  const [accessories, setAccessories] = useState([])
  const [accessory, setAccessory] = useState({ id: '', name: '', price: '', features: '', type: '' })

  // ✅ ONLY API CHANGED
  useEffect(() => {
    axios.get('/data/database.json')
      .then((res) => setAccessories(res.data.Accessories))
      .catch((err) => console.log(err))
  }, [])

  // ✅ ONLY API REMOVED → STATE FILTER
  const deleteacc = (aid) => {
    setAccessories(accessories.filter(acc => acc.id !== aid))
    alert(`accessory Deleted (demo only)`)
  }

  // ✅ ONLY API REMOVED → STATE FIND
  const getOneRecord = (aid) => {
    const record = accessories.find(acc => acc.id === aid)
    setAccessory({ ...record })
  }

  const changeData = (e) => {
    setAccessory({ ...accessory, [e.target.name]: e.target.value })
  }

  // ✅ ONLY API REMOVED → STATE UPDATE
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(accessory)
    const updated = accessories.map(acc =>
      acc.id === accessory.id ? accessory : acc
    )
    setAccessories(updated)
    alert(`accessory Updated (demo only)`)
  }

  const { name, features, price, type } = accessory

  return (
    <section className='container p-5'>
      <h1 className='text-center mb-5'>ACCESSORIES</h1>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>price</th>
            <th>features</th>
            <th>type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {accessories.map((acc, index) => {
            return (
              <tr key={index}>
                <td>{acc.name}</td>
                <td>{acc.price}</td>
                <td>{acc.features}</td>
                <td>{acc.type}</td>
                <td>
                  <button
                    onClick={() => getOneRecord(acc.id)}
                    data-bs-target='#update'
                    data-bs-toggle='modal'
                    className='btn btn-primary me-2'
                  >
                    <i className="bi bi-pencil"></i>
                  </button>
                  <button
                    onClick={() => deleteacc(acc.id)}
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
              <h5>Update accessory</h5>
              <button className='btn btn-close' data-bs-dismiss='modal'></button>
            </div>
            <div className='modal-body'>
              <form onSubmit={submitHandler}>
                <input type="text" name="name" value={name} onChange={changeData} className="form-control mb-3" placeholder="Enter Name" />
                <input type="text" name="price" value={price} onChange={changeData} className="form-control mb-3" placeholder="price Number" />
                <input type="text" name="features" value={features} onChange={changeData} className="form-control mb-3" placeholder="Your features" />
                <input type="text" name="type" value={type} onChange={changeData} className="form-control mb-3" placeholder="type" />
                <input type="submit" className="btn btn-success" data-bs-dismiss="modal" />
              </form>
            </div>
            <div className='modal-footer'></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Viewaccessories



// import axios from 'axios'
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import React, { useEffect, useState } from 'react'

// const Viewaccessories = () => {
//   const [accessories, setAccessories] = useState([])
//   const [accessory, setAccessory] = useState({ id: '', name: '', price: '', features: '', type: '' })

//   useEffect(() => {
//     axios.get(`http://localhost:5000/Accessories`)
//       .then((res) => setAccessories(res.data))
//       .catch((err) => console.log(err))
//   }, [])

//   const deleteacc = (aid) => {
//     axios.delete(`http://localhost:5000/Accessories/${aid}`)
//       .then(() => {
//         alert(`accessory Deleted`)
//       })
//       .catch((err) => console.log(err))
//   }

//   const getOneRecord = (aid) => {
//     axios.get(`http://localhost:5000/Accessories/${aid}`)
//       .then((res) => {
//         setAccessory({ ...res.data, id: aid })
//       })
//       .catch((err) => console.log(err))
//   }

// const changeData = (e) => {
//   setAccessory({ ...accessory, [e.target.name]: e.target.value })
// }


//   const submitHandler = (e) => {
//     e.preventDefault()
//     console.log(accessory);
//     axios.put(`http://localhost:5000/Accessories/${accessory.id}`, accessory)
//       .then(() => {
//         alert(`accessory Updated`)
//       })
//       .catch((err) => console.log(err))
//   }
//   const { name, features, price, type } = accessory

//   return (
//     <section className='container p-5'>
//       <h1 className='text-center mb-5'>ACCESSORIES</h1>
//       <table className='table table-bordered'>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>price</th>
//             <th>features</th>
//             <th>type</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {accessories.map((acc, index) => {
//             return (
//               <tr key={index}>
//                 <td>{acc.name}</td>
//                 <td>{acc.price}</td>
//                 <td>{acc.features}</td>
//                 <td>{acc.type}</td>
//                 <td>
//                   <button onClick={() => getOneRecord(acc.id)} data-bs-target='#update' data-bs-toggle='modal' className='btn btn-primary me-2'>
//                     <i className="bi bi-pencil"></i>
//                   </button>
//                   <button onClick={() => deleteacc(acc.id)} className='btn btn-danger'>
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
//               <h5>Update accessory</h5>
//               <button className='btn btn-close' data-bs-dismiss='modal'></button>
//             </div>
//             <div className='modal-body'>
//               <form onSubmit={submitHandler}>
//                 <input type="text" name="name" value={name} onChange={changeData} className="form-control mb-3" placeholder="Enter Name" />
//                 <input type="text" name="price" value={price} onChange={changeData} className="form-control mb-3" placeholder="price Number" />
//                 <input type="text" name="features" value={features} onChange={changeData} className="form-control mb-3" placeholder="Your features" />
//                 <input type="text" name="type" value={type} onChange={changeData} className="form-control mb-3" placeholder="type" />
//                 <input type="submit" className='btn btn-dismiss' className="btn btn-success" />
//               </form>
//             </div>
//             <div className='modal-footer'></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Viewaccessories


