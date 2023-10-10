import { Link } from "react-router-dom";


const LoginForm = () => {
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
            />
          </div>
          <div className="mt-6">
            <p className="pb-2">Password</p>
            <input
              type="password"
              className="w-full input h-12"
              placeholder="Password"
            />
          </div>
          <div className="mt-4">
            <p className="pb-2">Didn't have an account? <Link to='/Signup' className="hover:text-orange-600 hover:underline">Sign up</Link></p>
          </div>
          <div className="mt-8 flex-center-center">
            <button className="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default LoginForm;
