import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      Swal.fire('Please fill in all fields', '', 'error');
      return;
    }

    try {
      const response = await fetch('https://event-be.onrender.com/coachlog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);

        Swal.fire('Login Successful', '', 'success');
        navigate('/homeLog');
      } else {
        Swal.fire('Invalid username or password', '', 'error');
      }
    } catch (error) {
      console.error('Error:', error);
      Swal.fire('An error occurred during login', '', 'error');
    }
  };

  return (
    <div className="log">
      <div className="login-container">
        <div className="login-content">
          <div className="login-form">
            <h2>Sign In</h2>
            <p>“Relax we've got this!”</p>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <input
                  type="text"
                  id="input1"
                  name="input1"
                  required
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="input2"
                  name="input2"
                  required
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit">Login</button>
              <br />
              <br />
              Don't have an account?{' '}
              <Link to="/signup" style={{ color: '#007FFF', textDecoration: 'none', fontSize: '15px' }}>
                Create a new account
              </Link>
            </form>
          </div>
          <div className="login-image">
            <img
              src="https://content1.getnarrativeapp.com/static/181fd14c-9602-4a0c-a0cb-28a9fe0a1506/Heather-Sham-Photography-photos-photo-photography-photoshoot-wedding-couple-engaged-flowers-bouquets-flower-bouquet-floristry-inspiration-creative-fun-inspiring-idea-ideas-after-your-wedding-camper-van-floral-wild-eucalyptus-pampas-grass-hexagon-hat-rose-arch-boho-fun-relaxed-natural-nature-elopement-intimate-wedding-ceremony-macrame-festival-bride.jpg?w=1500"
              alt="Login"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
