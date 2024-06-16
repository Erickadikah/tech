import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      const { token } = await res.json();
      localStorage.setItem('token', token);
      router.push('/'); // Redirect to home page
    } else {
      const { error } = await res.json();
      setError(error);
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{
        backgroundImage: 'url("/images/ideas.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        repeat: 'no-repeat',
      }}
    >
      <div className="bg-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-3xl text-center mb-6">Register</h1>
        {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
          >
            Register
          </button>
        </form>
        <p>
          Already have an account?{' '}
          <Link
            href="/login"
            onClick={(e) => {
              e.preventDefault();
              router.push('/login');
            }}
            className="text-blue-500 hover:text-blue-700"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
