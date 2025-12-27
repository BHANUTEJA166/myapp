import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Viewfeatures = () => {
  const [features, setFeatures] = useState([]);
  const [feature, setFeature] = useState({
    id: '',
    category: '',
    title: '',
    description: '',
    details: '',
    specs: '',
    benefit: '',
    catIndex: null
  });

  // Fetch once at mount
  useEffect(() => {
    axios.get('http://localhost:5000/Features')
      .then(res => setFeatures(res.data))
      .catch(err => console.log(err));
  }, []);

  // Edit: sets the modal input values
  const getOneRecord = (catIndex, fea) => {
    setFeature({
      ...fea,
      category: features[catIndex].category,
      catIndex,
    });
  };

  // Delete: remove from local state
  const deletefea = (catIndex, fid) => {
    const updated = [...features];
    updated[catIndex].features = updated[catIndex].features.filter(f => f.id !== fid);
    setFeatures(updated);
    alert('Feature Deleted');
  };

  // Change handler for modal form
  const changeData = (e) => {
    setFeature({ ...feature, [e.target.name]: e.target.value });
  };

  // Update the feature in local state
  const submitHandler = (e) => {
    e.preventDefault();
    const updated = [...features];
    updated[feature.catIndex].features = updated[feature.catIndex].features.map(f =>
      f.id === feature.id ? { ...feature } : f
    );
    setFeatures(updated);
    alert('Feature updated successfully!');
  };

  // Destructure for inputs (match property names)
  const { category, title, description, details, specs, benefit } = feature;

  return (
    <section className='container p-5'>
      <h1 className='text-center mb-5'>FEATURES</h1>
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
            item.features.map((fea, index) => (
              <tr key={`${i}-${index}`}>
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
                    onClick={() => deletefea(i, fea.id)}
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
      <div className="modal fade" id="Update" data-bs-backdrop="static">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5>Update Feature</h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={submitHandler}>
                <input
                  type="text"
                  name="category"
                  value={category}
                  onChange={changeData}
                  placeholder="Category"
                  className="form-control mb-2"
                />
                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={changeData}
                  placeholder="Title"
                  className="form-control mb-2"
                />
                <input
                  type="text"
                  name="description"
                  value={description}
                  onChange={changeData}
                  placeholder="Description"
                  className="form-control mb-2"
                />
                <input
                  type="text"
                  name="details"
                  value={details}
                  onChange={changeData}
                  placeholder="Details"
                  className="form-control mb-2"
                />
                <input
                  type="text"
                  name="specs"
                  value={specs}
                  onChange={changeData}
                  placeholder="Specs"
                  className="form-control mb-2"
                />
                <input
                  type="text"
                  name="benefit"
                  value={benefit}
                  onChange={changeData}
                  placeholder="Benefit"
                  className="form-control mb-2"
                />
                <button type="submit" className="btn btn-success" data-bs-dismiss="modal">
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Viewfeatures;
