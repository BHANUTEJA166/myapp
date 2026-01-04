// import axios from 'axios';
// import React, { useEffect, useState } from 'react'

// const Addaccessories = () => {
//   const [accessories, setAccessories] = useState([]);
//   const [accesory, setAccesory] = useState({ id: '', name: '', price: '', features: '', type: '' })

//   // ✅ ONLY API CHANGED
//   useEffect(() => {
//     axios.get('/data/database.json')
//       .then((res) => setAccessories(res.data.Accessories))
//       .catch((err) => console.log(err))
//   }, [])

//   // ✅ ONLY API REMOVED → STATE FILTER
//   const deletefea = (aid) => {
//     alert('Feature Deleted (demo only)')
//     setAccessories(accessories.filter(a => a.id !== aid))
//   }

//   // ✅ ONLY API REMOVED → STATE FIND
//   const getOneRecord = (aid) => {
//     const record = accessories.find(a => a.id === aid)
//     setAccesory({ ...record })
//   }

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
//                   <button
//                     onClick={() => getOneRecord(acc.id)}
//                     data-bs-target="#Upadate"
//                     data-bs-toggle="modal"
//                     className='btn btn-primary btn-sm mb-3'
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => deletefea(acc.id)}
//                     className='btn btn-danger btn-sm'
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             )
//           })}
//         </tbody>
//       </table>

//       <div className='modal fade' id="Update" data-bs-backdrop="static">
//         <div className='modal-dialog'>
//           <div className='modal-content'>
//             <div className='modal-header'>
//               <h5>Update Feature</h5>
//               <button className='btn btn-close' data-bs-dismiss='modal'></button>
//             </div>
//             <div className='modal-body'>
//               <form>
//                 <input type="text" placeholder='' />
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Addaccessories









import axios from "axios";
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Addaccessories = () => {
  const [accessories, setAccessories] = useState([]);
  const [accessory, setAccessory] = useState({
    id: "",
    name: "",
    price: "",
    features: "",
    type: ""
  });

  const [newAccessory, setNewAccessory] = useState({
    name: "",
    price: "",
    features: "",
    type: ""
  });

  // ✅ ONLY API CHANGED (STATIC JSON)
  useEffect(() => {
    axios.get("/data/database.json")
      .then(res => setAccessories(res.data.Accessories))
      .catch(err => console.log(err));
  }, []); // ✅ IMPORTANT

  // ✅ DELETE → STATE UPDATE (same as Addfeatures)
  const deleteAcc = (aid) => {
    setAccessories(accessories.filter(acc => acc.id !== aid));
    alert("Accessory Deleted (demo only)");
  };

  // ✅ EDIT → STATE FIND
  const getOneRecord = (acc) => {
    setAccessory({ ...acc });
  };

  const changeData = (e) => {
    setAccessory({ ...accessory, [e.target.name]: e.target.value });
  };

  const changeNewData = (e) => {
    setNewAccessory({ ...newAccessory, [e.target.name]: e.target.value });
  };

  // ✅ UPDATE → STATE MAP
  const submitHandler = (e) => {
    e.preventDefault();
    const updated = accessories.map(acc =>
      acc.id === accessory.id ? accessory : acc
    );
    setAccessories(updated);
    alert("Accessory Updated (demo only)");
  };

  // ✅ ADD → STATE PUSH
  const submitNewAccessory = (e) => {
    e.preventDefault();
    setAccessories([
      ...accessories,
      { ...newAccessory, id: Date.now().toString() }
    ]);
    setNewAccessory({ name: "", price: "", features: "", type: "" });
    alert("Accessory Added (demo only)");
  };

  const { name, price, features, type } = accessory;

  return (
    <section className="container p-5">
      <h1 className="text-center mb-5">ACCESSORIES</h1>

      <div className="text-end mb-3">
        <button
          data-bs-toggle="modal"
           data-bs-target="#Add" 
          className="btn btn-success"
        >
          Add Accessory
        </button>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Features</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {accessories.map((acc, index) => (
            <tr key={index}>
              <td>{acc.name}</td>
              <td>{acc.price}</td>
              <td>{Array.isArray(acc.features) ? acc.features.join(", ") : acc.features}</td>
              <td>{acc.type}</td>
              <td>
                <button
                  onClick={() => getOneRecord(acc)}
                  data-bs-toggle="modal"
                  data-bs-target="#Update"
                  className="btn btn-primary btn-sm me-2 mb-3"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteAcc(acc.id)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
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
              <h5>Update Accessory</h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={submitHandler}>
                <input name="name" value={name} onChange={changeData} className="form-control mb-2" placeholder="Name" />
                <input name="price" value={price} onChange={changeData} className="form-control mb-2" placeholder="Price" />
                <input name="features" value={features} onChange={changeData} className="form-control mb-2" placeholder="Features" />
                <input name="type" value={type} onChange={changeData} className="form-control mb-2" placeholder="Type" />
                <button type="submit" className="btn btn-success" data-bs-dismiss="modal">
                  Save Changes
                </button>
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
              <h5> Add Accessory</h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={submitNewAccessory}>
                <input name="name" value={newAccessory.name} onChange={changeNewData} className="form-control mb-2" placeholder="Name" />
                <input name="price" value={newAccessory.price} onChange={changeNewData} className="form-control mb-2" placeholder="Price" />
                <input name="features" value={newAccessory.features} onChange={changeNewData} className="form-control mb-2" placeholder="Features" />
                <input name="type" value={newAccessory.type} onChange={changeNewData} className="form-control mb-2" placeholder="Type" />
                <button type="submit" className="btn btn-success" data-bs-dismiss="modal">
                  Add Accessory
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Addaccessories;
