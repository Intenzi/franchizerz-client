import { useState } from 'react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.Status === 'Success') {
        setMessage('Password reset link sent to your email');
      } else {
        setMessage('Something went wrong, please try again later');
      }
    } catch (error) {
      setMessage('Something went wrong, please try again later');
    }
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Forgot Password</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          type='email'
          placeholder='Email'
          className='bg-slate-100 p-3 rounded-lg'
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type='submit'
          className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95'
        >
          Send Reset Link
        </button>
      </form>
      {message && <p className='text-center mt-5'>{message}</p>}
    </div>
  );
}
