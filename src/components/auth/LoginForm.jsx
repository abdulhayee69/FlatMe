import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Cookies from 'js-cookie'; // Import the 'js-cookie' library

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const tokenApiUrl = 'http://170.64.158.74:8000/api/token/';

  const handleLogin = async () => {
    const credentials = {
      email,
      password,
    };
    try {
      const response = await fetch(tokenApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const data = await response.json();
        const accessKey = data.access;

        // Set access token in cookies
        Cookies.set('access_token', accessKey, { expires: 1 }); // Adjust the expiration as needed

        setIsLoggedIn(true);
        navigate('/property');
      } else {
        console.log('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
/* */
    

  return (
    <div>
      <h2 className="text-center lg:text-4xl text-2xl font-semibold text-orange-600">Login</h2>
      <div className="lg:w-7/12 flex flex-col mx-auto bg-slate-50 mt-14 rounded-xl border shadow-lg">
        <div className="lg:p-12 p-6">
          <div className="mt-6">
            <p className="pb-2">Email Address</p>
            <input
              type="text"
              className="w-full input h-12"
              placeholder="Email Address.."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-6">
            <p className="pb-2">Password</p>
            <input
              type="password"
              className="w-full input h-12"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <p className="pb-2">Didn't have an account? <Link to='/Signup' className="hover:text-orange-600 text-orange-500 hover:underline">Sign up</Link></p>
          </div>
          <div className="mt-8 flex-center-center">
            <button className="px-6 bg-orange-500 py-2 rounded-2xl" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
