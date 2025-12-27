import React, { useState } from "react";
import axios from "axios";

const SendEnquiry = () => {
  const [enquiry, setEnquiry] = useState({ name: '', mobile: '', email: '', message: '' });

  const changeData = (e) => {
    setEnquiry({ ...enquiry, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/enquiries', enquiry)
      .then(() => {
        alert("Enquiry sent");
        setEnquiry({ name: '', mobile: '', email: '', message: '' });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" name="name" value={enquiry.name} onChange={changeData} className="form-control mb-3" placeholder="Enter Name" />
      <input type="text" name="mobile" value={enquiry.mobile} onChange={changeData} className="form-control mb-3" placeholder="Mobile Number" />
      <input type="text" name="email" value={enquiry.email} onChange={changeData} className="form-control mb-3" placeholder="Your Email" />
      <textarea name="message" value={enquiry.message} onChange={changeData} className="form-control mb-3" rows="4" placeholder="Message"></textarea>
      <input type="submit" className="btn btn-success" />
    </form>
  );
};

export default SendEnquiry;