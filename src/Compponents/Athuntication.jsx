import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import HashLoader from 'react-spinners/HashLoader';
import axios from 'axios';
import { CgMail } from "react-icons/cg";
import { CiLock } from "react-icons/ci";
import './Home.css'

const Athuntication = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleSubmitSignup = async (event) => {
    // ... (signup code)
    event.preventDefault();
    setLoading(true);

    if (!email || !password) {
      setError('Email and password are required');
      setLoading(false);
      return;
    }
    try {
      const response = await fetch('http:localhost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error);
      }

      setMessage(data.message);
      setLoading(false);
      navigate('/');

    } catch (error) {
      setError(error.message); // Display the error message from the backend
      setLoading(false);
    }

  };

  const handleSubmitLogin = async (e) => {
    // ... (login code)
    e.preventDefault();
    setLoading(true); // Set loading to true
    if (!email || !password) {
      setError('Email and password are required');
      setLoading(false);
      return;
    }
    try {
      const response = await fetch('http:localhost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error); // Set error message
        setLoading(false); // Set loading to false
        return; // Stop further execution
      }

      const data = await response.json();
      console.log(data.message); // Logged in successfully
      // Handle successful login, e.g., store JWT token in local storage
      localStorage.setItem('token', data.token);
      Cookies.set('token', data.token, { expires: 70 }); // Set the cookie to expire in 70 days

      navigate('/HomePage');
    } catch (error) {
      console.error('Error:', error.message);
      // Handle error, e.g., display an error message to the user
    }

  };
  const handleLoginClick = () => {
    setShowLogin(true);
  };
  const handleForgotPasswordClick = () => {
    setShowForgotPassword(true);
  };

  const handleSubmitForgotPassword = (e) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;
    axios.post('http:localhost', { email })
      .then(res => {
        if (res.data.Status === "Success") {
          navigate('/login');
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className=''>
      {loading && (
        <div className="loading-overlay">
          <HashLoader color="#1EA7FD" />
        </div>
      )}
       <div className=''>
      {loading && ( // Show loading animation and overlay if loading is true
        <div className="loading-overlay">
          <HashLoader color="#36d7b7" />
        </div>
      )}
      
      <div>
      </div>

     {/* signup */}
     
     <section className='signup' id='signup'>
      <div className='login-container'>
    <div>
      <div className='container mt-5'>
        <h2>Sign Up</h2>
        <Form onSubmit={handleSubmitSignup}>
          {/* Your form fields and submit button */}
    {error && <Alert variant="danger">{error}</Alert>} {/* Display the error message */}
          {message && <Alert variant="success">{message}</Alert>} {/* Display the success message */}
          <Form.Group controlId="formBasicEmail">
            
            <Form.Label> Gmail<CgMail />:</Form.Label>
            <Form.Control type="email"placeholder='Enter gmail here ' autoComplete='off' value={email} onChange={(event) => setEmail(event.target.value)} />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password<CiLock />:</Form.Label>
            <Form.Control type="password" placeholder='Enter password' value={password} onChange={(event) => setPassword(event.target.value)} />
          </Form.Group>
          <Button className="mt-2" variant="btn btn-outline-primary" type="submit">
            Sign up
          </Button>
          <br />
          {message && <p>{message}</p>}
        </Form>
        <p className="mt-3">
          Already have an account?   <strong>   <a className="nav-link" href="#login" onClick={handleLoginClick}>login</a></strong>
        </p>
      </div>
    </div>
  </div>
  </section>
    </div> 
    
    {/* login */}

    {showLogin && (
    <section className='login' id='login'>
    <div className='login-container'>
        <div >
      <div className='mb-3'>
        <h2>Login</h2>
        <Form onSubmit={handleSubmitLogin}>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Gmail<CgMail />:</Form.Label>
            <Form.Control type="email" placeholder='Enter gmail here ' value={email} onChange={(e) => setEmail(e.target.value)} />
           
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password<CiLock />:</Form.Label>
            <Form.Control placeholder='Enter a valide password ' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
          <Button className="mt-2" variant="btn btn-outline-primary" type="submit">
            Login
          </Button>
        </Form>
        <p className="mt-3">
          Don't have an account? <strong> <a className="nav-link" href="#signup">signup</a></strong>
        </p>
        <strong> <a className="nav-link" href="#ForgetPassword" onClick={handleForgotPasswordClick}>ForgetPassword</a></strong>
      
      </div></div></div>
      </section>
)}
      {/* forgotpassword */}

      {showForgotPassword && (
        <section id='ForgetPassword'>
          <div className="login-container">
            <div >
              <h4>Forgot Password</h4>
              <form onSubmit={handleSubmitForgotPassword}>
                <div className="mb-3">
                  <label htmlFor="email">
                    <strong>Gmail<CgMail />:</strong>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Gmail"
                    autoComplete="off"
                    name="email"
                    className="form-control rounded-0"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <p>Note: Enter Gmail Id, Gmail Required</p>
                </div>
                <Button type="submit" variant="btn btn-outline-primary">
                  Send
                </Button>
              </form>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Athuntication;
