import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/slices/authSlice';
import './SignupPage.css';

import { Link } from 'react-router-dom';

function SignupPage() {
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
    <div className="signup-page">
      <div className='signup-form-column'>
        <div className='signup-form-container'>
          <p className='create'>Create your account</p>
          <form onSubmit={handleSubmit} className="signup-form">
            
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
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn-submit">
              Sign Up
            </button>
          </form>
          <p className='changeToLogin'>
            Already have an account?  <Link to="/login">Log in</Link>
          </p>
          
          
        </div>
      </div>
      <div className='signup-empty-column'>
      </div>
    </div>
  );
}

export default SignupPage; 