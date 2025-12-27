import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Addaccessories = () => {
  const[accessories, setAccessories] = useState([]);
  const[accesory, setAccesory] = useState({id: '', name: '', price: '', features: '', type: ''})

  useEffect(() => {
    axios.get(`http://localhost:5000/Accessories`)
    .then((res) => setAccessories(res.data))
    .catch((err) => console.log(err))
  })

  const deletefea = (aid) =>{
    axios.delete(`http://localhost:5000/Accessories/${aid}`)
    .then(() => {
      alert('Feature Deleted')
      setAccessories(prevAcc => prevAcc.filter(a => a.id !== aid))
    })
  }

  const getOneRecord = (aid) => {
    axios.get(`http://localhost:5000/Accessories/${aid}`)
    .then((res) => setAccesory({ ...res.data, id:aid }))
  }


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
          {accessories.map((acc, index) =>{
            return(
              <tr key={index}>
                <td>{acc.name}</td>
                <td>{acc.price}</td>
                <td>{acc.features}</td>
                <td>{acc.type}</td>
                <td>
                  <button onClick={() => getOneRecord(acc.id)} data-bs-target="#Upadate" data-bs-toggle="modal" className='btn btn-primary btn-sm mb-3'>Edit</button>
                  <button onClick={() => deletefea(acc.id)} className='btn btn-danger btn-sm'>Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className='modal fade' id="Update" data-bs-backdrop="static" >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5>Update Feature</h5>
              <button className='btn btn-close' data-bs-dismiss='modal'></button>
            </div>
            <div className='modal-body'>
              <form>
                <input type="text" placeholder='' />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Addaccessories