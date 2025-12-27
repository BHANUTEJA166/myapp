import React from 'react'
import errorImg from "./Assets/errorImg.gif"
import { Link } from 'react-router-dom';

const NoPage = () => {
  return (
    <div className='container p-5 text-center'>
      <Link to={'/'}> 
       <img src={errorImg} alt='' className='w-50' />
      </Link>
    </div>
  )
}
export default NoPage;