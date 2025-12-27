import React, { useEffect, useState} from 'react'
import axios from 'axios'


const ReviewsPage = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState("")
    useEffect(() => {
         axios.get(`http://localhost:5000/Reviews`)
         .then((res) => setData(res.data))
         .catch((err) => {
             setError(err.message)
         })
    //OR WE can write like this also to read the data
    // fetch(`http://localhost:5000/Reviews`)
    // .then((res) => res.json())
    // .then(data => setData(data))

    }, [])
    if (error) {
        return <p> {error} </p>
    }
    if (!data) {
        return <p> Loading... </p>
    }
  return (
    <section className="py-5 bg-white" id="reviews">
      <div className="container-fluid">

        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">User Voices. Honest Experiences.</h2>
          <p className="lead text-muted mt-3">
            Real feedback from iPhone users across India.
            <br />Power, design, performance — rated by those who own it.
          </p>
        </div>

        <div className="row align-items-center my-5">

          {data.map((item) => {
            return (
              <>
                <div className="col-md-6 text-center">
                  <img src={item.profile} alt="Rahul Verma" className="img-fluid rounded" style={{ maxWidth: "180px" }} />
                </div>
                <div className="col-md-6">
                  <h3 className="fw-bold">{item.name}</h3>
                  <p className="text-muted">{item.location}<small> <br></br>{item.date}</small></p>
                  <p className="text-muted">"{item.comment}"</p>
                  <p className="text-muted">Rating:{item.rating}</p>
                </div>
              </>
            )
          })}

        </div>


        <div className="text-center mt-5">
          <h4 className="fw-bold">Love it? Share your story too.</h4>
          <a href="#accessories" className="btn btn-dark btn-lg mt-3 me-3">Explore Accessories</a>
          <a href="#features" className="btn btn-outline-dark btn-lg mt-3">See Features</a>
        </div>

      </div>
    </section>
  )
}

export default ReviewsPage



// <div className="row align-items-center my-5 flex-md-row-reverse">
//   <div className="col-md-6 text-center">
//     <img src={Aisha} alt="Aisha Khan" className="img-fluid rounded" style={{ maxWidth: "180px" }} />
//   </div>
//   <div className="col-md-6">
//     <h3 className="fw-bold">Aisha Khan</h3>
//     <p className="text-muted">Delhi — <small>2024-11-12</small></p>
//     <p className="text-muted">Battery life is incredible. I went a full day with 40% left!</p>
//     <p className="text-muted">Rating: 4 / 5</p>
//   </div>
// </div>

// <div className="row align-items-center my-5">
//   <div className="col-md-6 text-center">
//     <img src={Karan} alt="Karan Mehta" className="img-fluid rounded" style={{ maxWidth: "180px" }} />
//   </div>
//   <div className="col-md-6">
//     <h3 className="fw-bold">Karan Mehta</h3>
//     <p className="text-muted">Hyderabad — <small>2024-12-05</small></p>
//     <p className="text-muted">I switched from Android and it’s the best decision I made.</p>
//     <p className="text-muted">Rating: 5 / 5</p>
//   </div>
// </div>

// <div className="row align-items-center my-5 flex-md-row-reverse">
//   <div className="col-md-6 text-center">
//     <img src={Meera} alt="Meera Nair" className="img-fluid rounded" style={{ maxWidth: "180px" }} />
//   </div>
//   <div className="col-md-6">
//     <h3 className="fw-bold">Meera Nair</h3>
//     <p className="text-muted">Bangalore — <small>2025-01-08</small></p>
//     <p className="text-muted">The design is sleek and premium. Feels great in hand.</p>
//     <p className="text-muted">Rating: 4 / 5</p>
//   </div>
// </div>

// <div className="row align-items-center my-5">
//   <div className="col-md-6 text-center">
//     <img src={Sana} alt="Aman Kapoor" className="img-fluid rounded" style={{ maxWidth: "180px" }} />
//   </div>
//   <div className="col-md-6">
//     <h3 className="fw-bold">Aman Kapoor</h3>
//     <p className="text-muted">Chandigarh — <small>2025-02-16</small></p>
//     <p className="text-muted">iOS is just too smooth. Face ID is faster than ever!</p>
//     <p className="text-muted">Rating: 5 / 5</p>
//   </div>
// </div>

// <div className="row align-items-center my-5 flex-md-row-reverse">
//   <div className="col-md-6 text-center">
//     <img src={Amaan} alt="Sana Sheikh" className="img-fluid rounded" style={{ maxWidth: "180px" }} />
//   </div>
//   <div className="col-md-6">
//     <h3 className="fw-bold">Sana Sheikh</h3>
//     <p className="text-muted">Pune — <small>2025-03-21</small></p>
//     <p className="text-muted">Night photography has improved drastically!</p>
//     <p className="text-muted">Rating: 4 / 5</p>
//   </div>
// </div>
