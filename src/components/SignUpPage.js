// LoginPage.js
import React, { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';

function SignUpPage() {
  const [username, setUsername] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contactNumber, setContactNumber] = useState('');
 
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (username === '' || email === '' || password === '' || contactNumber === '') {
      Swal.fire('Please fill in all fields','','warning');
    } else {
      try {
        const response = await fetch('/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            email,
            password,
            contactNumber,
          }),
        });
  
        if (response.ok) {
          Swal.fire('You have successfully joined our community. Welcome!','','success')
          navigate('/login');
        } else {
          const data = await response.json();
          console.error('Server response:', data); // Log the error response to the console
          alert('An error occurred during registration: ' + data.message); // Display the server's error message
        }
      } catch (error) {
        console.error('Client error:', error); // Log any unhandled exceptions to the console
        alert('An error occurred during registration: ' + error.message); // Display a generic error message
      }
    }
  };
  
  return (
   
    <div className="sign">
    <div className="login-container">
      <div className="signup-content">
        <div className="login-form">
          <h2>Create your account</h2>
         
          <form onSubmit={handleSignup} >
            <div className="form-group">
            <input
                    type="text"
                    id="username"
                    name="username" required
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
            </div>
            <div className="form-group">
            <input
                    type="email"
                    id="email"
                    name="email" required
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
            </div>
            <div className="form-group">
            <input
                    type="password"
                    id="password"
                    name="password" required
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
            </div>
           <div className="form-group phone-input">
            <input type="text" value="91+" disabled />
            <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                   
                    required
                    placeholder="Contact Number"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                  />
          </div>
          <button type="submit">Sign Up</button><br/><br/>
          Already have a account? <Link to='/login' style={{color:"#007FFF", textDecoration:"none", fontSize: "15px"}}>Login</Link>
          </form>
        </div>
        <div className="sign-image">
          <img src="https://content1.getnarrativeapp.com/static/d6a80e0b-ff68-4f12-89d6-d863ee7204d0/Griffin%E2%80%99s-Wedding-Flowers-Columbus-Ohio-.jpg?w=750 "alt="Login" />
        </div>
      </div>
    </div>
    </div>
  );
}

export default SignUpPage;
