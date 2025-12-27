import axios from "axios";
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Addfeatures = () => {
  const [features, setFeatures] = useState([]);
  const [feature, setFeature] = useState({
    id: "",
    category: "",
    title: "",
    description: "",
    details: "",
    specs: "",
    benefit: "",
    catIndex: null
  });

  const [newFeature, setNewFeature] = useState({
    category: "",
    title: "",
    description: "",
    details: "",
    specs: "",
    benefit: ""
  });

  // ✅ ONLY API CHANGED
  useEffect(() => {
    axios.get('/data/database.json')
      .then(res => setFeatures(res.data.Features))
      .catch(err => console.log(err));
  }, []);

  const deleteFea = (catIndex, fid) => {
    const updated = [...features];
    updated[catIndex].features =
      updated[catIndex].features.filter(f => f.id !== fid);
    setFeatures(updated);
  };

  const getOneRecord = (catIndex, fea) => {
    setFeature({ ...fea, category: features[catIndex].category, catIndex });
  };

  const changeData = (e) => {
    setFeature({ ...feature, [e.target.name]: e.target.value });
  };

  const changeNewData = (e) => {
    setNewFeature({ ...newFeature, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const updated = [...features];
    updated[feature.catIndex].features =
      updated[feature.catIndex].features.map(f =>
        f.id === feature.id ? { ...feature } : f
      );
    setFeatures(updated);
    alert("Feature updated! (demo only)");
  };

  const submitNewFeature = (e) => {
    e.preventDefault();
    const updated = [...features];
    const catIndex = updated.findIndex(
      c => c.category === newFeature.category
    );

    const newFeaObj = {
      ...newFeature,
      id: Date.now()
    };

    if (catIndex >= 0) {
      updated[catIndex].features.push(newFeaObj);
    } else {
      updated.push({
        category: newFeature.category,
        id: Date.now() + "_cat",
        features: [newFeaObj]
      });
    }

    setFeatures(updated);
    setNewFeature({
      category: "",
      title: "",
      description: "",
      details: "",
      specs: "",
      benefit: ""
    });

    alert("New Feature Added! (demo only)");
  };

  const { category, title, description, details, specs, benefit } = feature;

  return (
    <section className='container p-5'>
      <h1 className='text-center m-5'>FEATURES</h1>

      <div className="text-end mb-3">
        <button data-bs-toggle="modal" data-bs-target="#Add" className="btn btn-success">
          <i className="bi bi-plus-circle me-2"></i> Add Feature
        </button>
      </div>

      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>CATEGORY</th>
            <th>TITLE</th>
            <th>DESCRIPTION</th>
            <th>DETAILS</th>
            <th>SPECS</th>
            <th>BENEFIT</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {features.flatMap((item, i) =>
            item.features.map((fea, idx) => (
              <tr key={`${i}-${idx}`}>
                <td>{item.category}</td>
                <td>{fea.title}</td>
                <td>{fea.description}</td>
                <td>{fea.details}</td>
                <td>{fea.specs}</td>
                <td>{fea.benefit}</td>
                <td>
                  <button
                    onClick={() => getOneRecord(i, fea)}
                    data-bs-target="#Update"
                    data-bs-toggle="modal"
                    className="btn btn-primary btn-sm me-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteFea(i, fea.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Update Modal */}
      <div className="modal fade" id="Update" data-bs-backdrop="static">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5>Update Feature</h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={submitHandler}>
                <input name="category" value={category} onChange={changeData} className="form-control mb-2" placeholder="Category" />
                <input name="title" value={title} onChange={changeData} className="form-control mb-2" placeholder="Title" />
                <input name="description" value={description} onChange={changeData} className="form-control mb-2" placeholder="Description" />
                <input name="details" value={details} onChange={changeData} className="form-control mb-2" placeholder="Details" />
                <input name="specs" value={specs} onChange={changeData} className="form-control mb-2" placeholder="Specs" />
                <input name="benefit" value={benefit} onChange={changeData} className="form-control mb-2" placeholder="Benefit" />
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
              <h5>Add Feature</h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={submitNewFeature}>
                <input name="category" value={newFeature.category} onChange={changeNewData} className="form-control mb-2" placeholder="Category" />
                <input name="title" value={newFeature.title} onChange={changeNewData} className="form-control mb-2" placeholder="Title" />
                <input name="description" value={newFeature.description} onChange={changeNewData} className="form-control mb-2" placeholder="Description" />
                <input name="details" value={newFeature.details} onChange={changeNewData} className="form-control mb-2" placeholder="Details" />
                <input name="specs" value={newFeature.specs} onChange={changeNewData} className="form-control mb-2" placeholder="Specs" />
                <input name="benefit" value={newFeature.benefit} onChange={changeNewData} className="form-control mb-2" placeholder="Benefit" />
                <button type="submit" className="btn btn-success" data-bs-dismiss="modal">
                  Add Feature
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Addfeatures;

















// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import 'bootstrap/dist/js/bootstrap.bundle.min';

// const Addfeatures = () => {
//   const [features, setFeatures] = useState([]);
//   const [feature, setFeature] = useState({
//     id: "",
//     category: "",
//     title: "",
//     description: "",
//     details: "",
//     specs: "",
//     benefit: "",
//     catIndex: null
//   });

//   // ✅ New state for adding a feature
//   const [newFeature, setNewFeature] = useState({
//     category: "",
//     title: "",
//     description: "",
//     details: "",
//     specs: "",
//     benefit: ""
//   });

//   useEffect(() => {
//     axios.get("http://localhost:5000/Features")
//       .then(res => setFeatures(res.data))
//       .catch(err => console.log(err));
//   }, []);

//   const deleteFea = (catIndex, fid) => {
//     const updated = [...features];
//     updated[catIndex].features = updated[catIndex].features.filter(f => f.id !== fid);
//     setFeatures(updated);
//   };

//   const getOneRecord = (catIndex, fea) => {
//     setFeature({ ...fea, category: features[catIndex].category, catIndex });
//   };

//   const changeData = (e) => {
//     setFeature({ ...feature, [e.target.name]: e.target.value });
//   };

//   const changeNewData = (e) => {
//     setNewFeature({ ...newFeature, [e.target.name]: e.target.value });
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();
//     const updated = [...features];
//     updated[feature.catIndex].features = updated[feature.catIndex].features.map(f =>
//       f.id === feature.id ? { ...feature } : f
//     );
//     setFeatures(updated);
//     alert("Feature updated!");
//   };

//   // ✅ Add new feature (just updates local state for now)
//   const submitNewFeature = (e) => {
//     e.preventDefault();
//     const updated = [...features];
//     // Find category by name (or create new category if not found)
//     const catIndex = updated.findIndex(c => c.category === newFeature.category);
//     const newFeaObj = {
//       ...newFeature,
//       id: Date.now() // quick unique ID
//     };
//     if (catIndex >= 0) {
//       updated[catIndex].features.push(newFeaObj);
//     } else {
//       updated.push({
//         category: newFeature.category,
//         id: Date.now() + "_cat",
//         features: [newFeaObj]
//       });
//     }
//     setFeatures(updated);
//     setNewFeature({ category: "", title: "", description: "", details: "", specs: "", benefit: "" });
//     alert("New Feature Added!");
//   };

//   const { category, title, description, details, specs, benefit } = feature;

//   return (
//     <section className='container p-5'>
//       <h1 className='text-center m-5'>FEATURES</h1>

//       {/* ✅ Add Feature Button */}
//       <div className="text-end mb-3">
//         <button data-bs-toggle="modal" data-bs-target="#Add" className="btn btn-success">
//           <i className="bi bi-plus-circle me-2"></i> Add Feature
//         </button>
//       </div>

//       <table className='table table-bordered'>
//         <thead>
//           <tr>
//             <th>CATEGORY</th>
//             <th>TITLE</th>
//             <th>DESCRIPTION</th>
//             <th>DETAILS</th>
//             <th>SPECS</th>
//             <th>BENEFIT</th>
//             <th>ACTION</th>
//           </tr>
//         </thead>
//         <tbody>
//           {features.flatMap((item, i) =>
//             item.features.map((fea, idx) => (
//               <tr key={`${i}-${idx}`}>
//                 <td>{item.category}</td>
//                 <td>{fea.title}</td>
//                 <td>{fea.description}</td>
//                 <td>{fea.details}</td>
//                 <td>{fea.specs}</td>
//                 <td>{fea.benefit}</td>
//                 <td>
//                   <button
//                     onClick={() => getOneRecord(i, fea)}
//                     data-bs-target="#Update"
//                     data-bs-toggle="modal"
//                     className="btn btn-primary btn-sm me-2"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => deleteFea(i, fea.id)}
//                     className="btn btn-danger btn-sm"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>

//       {/* Update Modal */}
//       <div className="modal fade" id="Update" data-bs-backdrop="static">
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5>Update Feature</h5>
//               <button className="btn-close" data-bs-dismiss="modal"></button>
//             </div>
//             <div className="modal-body">
//               <form onSubmit={submitHandler}>
//                 <input name="category" value={category} onChange={changeData} placeholder="Category" className="form-control mb-2" />
//                 <input name="title" value={title} onChange={changeData} placeholder="Title" className="form-control mb-2" />
//                 <input name="description" value={description} onChange={changeData} placeholder="Description" className="form-control mb-2" />
//                 <input name="details" value={details} onChange={changeData} placeholder="Details" className="form-control mb-2" />
//                 <input name="specs" value={specs} onChange={changeData} placeholder="Specs" className="form-control mb-2" />
//                 <input name="benefit" value={benefit} onChange={changeData} placeholder="Benefit" className="form-control mb-2" />
//                 <button type="submit" className="btn btn-success" data-bs-dismiss="modal">
//                   Save Changes
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ✅ Add Modal */}
//       <div className="modal fade" id="Add" data-bs-backdrop="static">
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5>Add Feature</h5>
//               <button className="btn-close" data-bs-dismiss="modal"></button>
//             </div>
//             <div className="modal-body">
//               <form onSubmit={submitNewFeature}>
//                 <input
//                   name="category"
//                   value={newFeature.category}
//                   onChange={changeNewData}
//                   placeholder="Category"
//                   className="form-control mb-2"
//                 />
//                 <input
//                   name="title"
//                   value={newFeature.title}
//                   onChange={changeNewData}
//                   placeholder="Title"
//                   className="form-control mb-2"
//                 />
//                 <input
//                   name="description"
//                   value={newFeature.description}
//                   onChange={changeNewData}
//                   placeholder="Description"
//                   className="form-control mb-2"
//                 />
//                 <input
//                   name="details"
//                   value={newFeature.details}
//                   onChange={changeNewData}
//                   placeholder="Details"
//                   className="form-control mb-2"
//                 />
//                 <input
//                   name="specs"
//                   value={newFeature.specs}
//                   onChange={changeNewData}
//                   placeholder="Specs"
//                   className="form-control mb-2"
//                 />
//                 <input
//                   name="benefit"
//                   value={newFeature.benefit}
//                   onChange={changeNewData}
//                   placeholder="Benefit"
//                   className="form-control mb-2"
//                 />
//                 <button type="submit" className="btn btn-success" data-bs-dismiss="modal">
//                   Add Feature
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Addfeatures;
