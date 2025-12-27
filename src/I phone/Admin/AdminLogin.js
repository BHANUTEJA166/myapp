import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { loginData } from '../../App';

const AdminLogin = () => {
    const [details, setDetails] = useState({ email:'' , password:''})
    const [login, setlogin] = useContext(loginData)
    const navigate = useNavigate()
    const changeData = (e) => {
        setDetails({...details, [e.target.name]: e.target.value })
    }
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(details);
        const { email, password } = details

        if (email === 'adminiphone@16.com' && password === 'iphone') {
            setlogin(true)
            navigate('/dashboard')
        }
        else {
            alert('Invalid Credentials')
        }
            
    }

  return (
    <div className=' container p-5'>
        <div className='col-lg-6 shadow p-5 mx-auto'>
            <h2 style={{ textAlign:'center'}} className='mb-5'>Login In</h2>
        <form onSubmit={submitHandler}>
            <input type='email' onChange={changeData} name='email' placeholder='Email Address' className='form-control mb-3' />
            <input type='password' onChange={changeData} name='password' placeholder='Password' className='form-control mb-3' />
            <input type='submit' className='form-control mb-3 btn btn-success' />
        </form>
        </div>
    </div>
  )
}

export default AdminLogin