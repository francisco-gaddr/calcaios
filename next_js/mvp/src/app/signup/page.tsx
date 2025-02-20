'use client';

import React, { useState } from 'react';
import Button from '@/components/Button';
import Header from '@/components/Header';
import robotSvg from '@/app/img/robot.svg';

import Image from 'next/image';

function SignUpPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [strength, setStrength] = useState(0); // 0: none, 1: weak, 2: normal, 3: strong, 4: very strong

  const checkPasswordStrength = (password: string) => {
    let score = 0;
    
    // Length check
    if (password.length >= 8) score++;
    
    // Complexity checks
    if (/[A-Z]/.test(password)) score++; // Has uppercase
    if (/[0-9]/.test(password)) score++; // Has number
    if (/[^A-Za-z0-9]/.test(password)) score++; // Has special char
    
    setStrength(score);
  };

  const getStrengthText = () => {
    switch (strength) {
      case 1:
        return 'Weak';
      case 2:
        return 'Normal';
      case 3:
        return 'Strong';
      case 4:
        return 'Very Strong';
      default:
        return '';
    }
  };

  const styles = {
    container: [
      'grid',
      'grid-cols-2',
      'min-h-screen',
    ].join(' '),
    
    leftColumn: [
      'bg-gray-100',
      'w-full',
      'h-full',
      'flex', 
      'items-center', 
      'justify-center'
    ].join(' '),
    
    rightColumn: [
      'flex',
      'flex-col',
      'justify-center',
      'px-3',
      'py-8',
      'w-full',
      'max-w-lg',
      'mx-auto',
    ].join(' '),
    
    form: [
      'space-y',
      'w-full',

    ].join(' '),

    inputGroup: [
      'flex',
      'flex-col',
      'gap-2',
    ].join(' '),

    input: [
      'w-full',
      'px-4',
      'py-2',
      'border',
      'border-gray-300',
      'rounded-md',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-black',
      'focus:border-transparent',
    ].join(' '),

    divider: [
      'relative',
      'flex',
      'items-center',
      'text-gray-500',
      'text-sm',
      'my-6',
    ].join(' '),

    dividerLine: [
      'flex-grow',
      'border-t',
      'border-gray-300',
    ].join(' '),

    dividerText: [
      'mx-4',
    ].join(' '),

    strengthBar: [
      'h-1',
      'w-full',
      'bg-gray-200',
      'rounded-full',
      'mt-1',
    ].join(' '),

    strengthIndicator: [
      'h-full',
      'bg-black',
      'rounded-full',
      'transition-all',
      'duration-300',
    ].join(' '),
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong');
      } else {
        setSuccess(true);
      }

      // Redirect to login or dashboard
      // window.location.href = '/login';
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));

    // Check password strength when password field changes
    if (id === 'password') {
      checkPasswordStrength(value);
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.leftColumn}>
        <Image 
          src={robotSvg}
          alt="Robot icon" 
          width={140}
          height={140}
          className="object-contain"
        />
        {/* Left column content */}
      </div>
      
      <div className={styles.rightColumn}>
        <div className={styles.form}>
          <h1 className="text-2xl font-bold mb-3">Create your account</h1>
          <span className="text-gray-500 bg-white">Start your journey with our AI companion</span>
          <form onSubmit={handleSubmit} className={styles.form}>
            {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
            
            <div className={styles.inputGroup}>
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={styles.input}
                placeholder="John Doe"
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                placeholder="john@example.com"
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className={styles.input}
                placeholder="••••••••"
                required
              />
              {
                formData.password && (
                  <div>
                    <div className={styles.strengthBar}>
                      <div 
                        className={styles.strengthIndicator}
                        style={{ width: `${(strength / 4) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-500 mt-1">
                      {getStrengthText()}
                    </span>
                  </div>
                )
              }
            </div>

            <Button 
              type="submit" 
              className="w-full mt-6"
              disabled={loading || success}
            >
              {loading ? 'Creating Account...' : 'Create Account'}

            </Button>
            {
              success && 
              <div className="text-green-500 text-sm my-4">
                Account created successfully.
              </div>
            }
            
          {/* Divider */}
          <div className={styles.divider}>
            <div className={styles.dividerLine}></div>
            <span className={styles.dividerText}>Or continue with</span>
            <div className={styles.dividerLine}></div>
          </div>

          {/* Google Sign Up Button */}
          <Button 
            variant="secondary" 
            className="w-full flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#00000"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#00000"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#00000"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#00000"
              />
            </svg>
            Sign up with Google
          </Button>


            {/* Sign In Link */}
            <p className="text-center text-sm text-gray-600 mt-6">
              Already have an account?{' '}
              <a href="/login" className="text-black hover:underline">
                Log in here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;