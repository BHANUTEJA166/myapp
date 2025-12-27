import React from "react";
import SendEnquiry from "./SendEnquiry";

const Contact = () => {
  return (
    <section className="py-5 bg-white" id="contact">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Get in Touch</h2>
          <p className="lead text-muted">
            Visit our location or reach out anytime. We're always here for you.
          </p>
        </div>


        <div className="row g-4">
          <div className="col-md-6">
            <div className="p-4 shadow-sm h-100 border rounded">
              <SendEnquiry />
            </div>
          </div>

          <div className="col-md-6 d-flex align-items-center">
            <div className="p-4 shadow-sm h-100 border rounded w-100 text-muted small">
              <h5 className="fw-bold mb-3">Contact Information</h5>
              <p>
                <strong>Email:</strong> support@iphoneproject.com<br />
                <strong>Phone:</strong> +91 98765 43210
              </p>
              <p>
                <strong>Address:</strong><br />
                4th Floor, Tech Hub<br />
                Hitech City, Hyderabad, India
              </p>
              <div className="ratio ratio-16x9 mt-4 rounded">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.556639988736!2d78.39084087444929!3d17.436209102107845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e07e92726b%3A0xe3c5a80e20a4f5b5!2sCyber%20Towers!5e0!3m2!1sen!2sin!4v1720172070000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;