import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';

const SignupForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRealtor] = useState("True");
  const navigate = useNavigate();
  const signupApiUrl = 'http://170.64.158.74:8001/auth/user/register';

  const handleSignup = async () => {
    const userData = {
      name: `${firstName} ${lastName}`,
      email,
      password,
      re_password: password,
      is_realtor: isRealtor
    };

    try {
      const response = await fetch(signupApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        // Registration successful, you can redirect the user to the login page or handle it as needed
        navigate('/login')
      } else {
        // Handle registration error
        alert('Registration failed');
      }
    } catch (error) {
      // Handle any network or other errors
      alert('Error: ' + error.message);
    }
  };

  return (
    <div>
      <h2 className="text-center lg:text-4xl text-2xl font-semibold text-orange-600">Sign Up</h2>
      <div className="lg:w-7/12 flex flex-col mx-auto bg-slate-50 mt-14 rounded-xl border shadow-lg">
        <div className="lg:p-12 p-6">
          <div className="mt-4">
            <p className="pb-2">First Name</p>
            <input
              type="text"
              className="w-full input"
              placeholder="First Name.."
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <p className="pb-2">Last Name</p>
            <input
              type="text"
              className="w-full input"
              placeholder="Last Name.."
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <p className="pb-2">Email Address</p>
            <input
              type="text"
              className="w-full input"
              placeholder="Email Address.."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <p className="pb-2">Password</p>
            <input
              type="password"
              className="w-full input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <p className="pb-2">Already have an account? <Link to='/login' className="hover:text-orange-600 text-orange-500 hover:underline">Login</Link></p>
          </div>
          <div className="mt-8 flex-center-center">
            <button onClick={handleSignup} className="btn btn-primary">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
