// pages/auth.js

'use client';

import { useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Auth() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      if (isLogin) {
        const response = await axios.post('http://localhost:5000/api/login', { email, password });
        localStorage.setItem('token', response.data.token);
        setMessage('Logged in successfully');
        router.push('/'); // Redirect to main page after successful login
      } else {
        try {
            const response = await axios.post('http://localhost:5000/api/register', { name, email, password });
            // console.log(response);
            if(response){
                setMessage('Registered successfully');
                setTimeout(() => {
                    setIsLogin(true)
                }, 2000);
            }
        } catch (error) {
            setMessage(`Error : ${error}`);
        }
      }
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Auth Page</title>
        <style>{`
          .slide-in {
            animation: slideIn 0.5s forwards;
          }
          .slide-out {
            animation: slideOut 0.5s forwards;
          }
          @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(-100%); opacity: 0; }
          }
        `}</style>
      </Head>
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white p-8 rounded-lg shadow-2xl">
          <div className="flex justify-center mb-8">
            <button
              onClick={() => setIsLogin(true)}
              className={`mx-2 px-4 py-2 rounded-full ${
                isLogin ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
              } transition duration-300 ease-in-out`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`mx-2 px-4 py-2 rounded-full ${
                !isLogin ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
              } transition duration-300 ease-in-out`}
            >
              Sign Up
            </button>
          </div>
          {message && <p className="text-center text-sm text-red-600 mb-4">{message}</p>}
          <div className="relative overflow-hidden" style={{ height: '350px' }}>
            <form
              onSubmit={handleSubmit}
              className={`absolute w-full transition-all duration-500 ease-in-out ${
                isLogin ? 'slide-in' : 'slide-out'
              }`}
            >
              <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">
                {isLogin ? 'Sign in to your account' : 'Create your account'}
              </h2>
              {!isLogin && (
                <div className="mb-4">
                  <label htmlFor="name" className="sr-only">
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required={!isLogin}
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    placeholder="Full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              )}
              <div className="mb-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete={isLogin ? 'current-password' : 'new-password'}
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                >
                  {isLogin ? 'Sign in' : 'Sign up'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
