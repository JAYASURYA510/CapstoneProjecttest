import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, } from 'react-icons/fa';
import React, { useState } from 'react';
import './Styles.css';
import { BsFillBalloonHeartFill } from "react-icons/bs";
import { PiPhoneCallFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";

const Footers = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send feedback to a server
    console.log('Submitting feedback:', { name, email, feedback });
    // You can also reset the form fields after submission
    setName('');
    setEmail('');
    setFeedback('');
  };

  return (
    <div>
    <section id="Feedback" className="bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-form">
             <u> <h3>Be in Touch</h3></u> 
              <div className="social-icons">
                <a href="https://www.facebook.com"><FaFacebook /></a>
                <a href="https://www.twitter.com"><FaTwitter /></a>
                <a href="https://www.instagram.com"><FaInstagram /></a>
                <a href="https://www.linkedin.com"><FaLinkedin /></a>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="feedback">Feedback</label>
                  <textarea className="form-control" id="feedback" rows="5" placeholder="Enter your feedback" value={feedback} onChange={(e) => setFeedback(e.target.value)}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
          <div className="col-lg-6 contact-info">
            <u><h3>Contact Information <PiPhoneCallFill /></h3>  </u>
            <p><MdEmail />Email: suryatheforgiver@email.com</p>
            <p><PiPhoneCallFill />Phone: 9025903441</p>
            <p><GrLocation />Address: 123 Street, Krishnagiri(D), Tamil Nadu(S), India(C)</p>
            <a href="mailto:contact@example.com"><FaEnvelope /> contact@example.com</a>
            <br></br>
            <div className="col-lg-9">
            <ul className="footer-links">
            <u><h4> DISCOVER</h4></u>
              <ul><a href="/about-us">About Us</a></ul>
              <ul><a href="/careers">Careers</a></ul>
              <ul><a href="/affiliates">Affiliates</a></ul>
              <ul><a href="/my-account">My Account</a></ul>
              <ul><a href="/blog">Blog</a></ul>
              <ul><a href="/contact">Contact</a></ul>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </section>
    <footer class="bg-dark text-white py-3 text-center">
    <div class="container">
      <p>&copy; by 2021 surya's<BsFillBalloonHeartFill />. All rights reserved.</p>
    </div>
  </footer></div>    
  );
};

export default Footers;
