import React, { useContext } from 'react'
import { Link , Outlet } from 'react-router-dom' 
import { loginData } from '../../App';
import AdminLogin from './AdminLogin';

const Dashboard = () => {
  const [login, setlogin] = useContext(loginData)
  if (login) {
  return (
    <section className='container-fluid'>
      <div className='row'>
        <aside className='col-lg-3'>
          <h3>Admin Dashboard</h3>
          <br></br> <br></br>
          <Link to={`addfeatures`} >
          <button>Add Features</button>
          </Link>
          <Link to={`viewfeatures`} >
          <button>View Features</button>
          </Link>
          <Link to={`addaccessories`} >
          <button>Add Accessories</button>
          </Link>
          <Link to={`viewaccessories`} >
          <button>View Accessories</button>
          </Link>
          <Link to={`addreviews`} >
          <button>Add Reviews</button>
          </Link>
          <Link to={`viewreviews`} >
          <button>View Reviews</button>
          </Link>
        </aside>
        <div className="col-lg-9">
          <Outlet />
        </div>
      </div>
    </section>
  );
}
 else {
  return (<AdminLogin/>)
 }
};

export default Dashboard