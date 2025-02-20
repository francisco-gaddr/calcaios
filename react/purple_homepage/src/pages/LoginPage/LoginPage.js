import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/slices/authSlice';
import './LoginPage.css';


import { Link } from 'react-router-dom';


function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    dispatch(login({ email: formData.email }));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="login-page">
      <div className='login-form-column'>
        <div className='login-form-container'>
          <p className='login'>Login to your account</p>
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            
            <button type="submit" className="btn-submit">
              Login
            </button>
          </form>
          <p className='changeToSignup'>
            Don't have an account?  <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
      <div className='login-empty-column'>

      </div>

    </div>
  );
}

export default LoginPage; 