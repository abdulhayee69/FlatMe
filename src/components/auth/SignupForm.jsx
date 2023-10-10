import {Link} from "react-router-dom"

const SignupForm = () => {
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
            />
          </div>
          <div className="mt-4">
            <p className="pb-2">Last Name</p>
            <input
              type="text"
              className="w-full input"
              placeholder="Last Name.."
            />
          </div>
          <div className="mt-4">
            <p className="pb-2">Email Address</p>
            <input
              type="text"
              className="w-full input"
              placeholder="Email Address.."
            />
          </div>
          <div className="mt-4">
            <p className="pb-2">Password</p>
            <input
              type="password"
              className="w-full input"
              placeholder="Password"
            />
          </div>
          <div className="mt-4">
            <p className="pb-2">Already have an account? <Link to='/login' className="hover:text-orange-600 hover:underline">Login</Link></p>
          </div>
          <div className="mt-8 flex-center-center">
            <button className="btn btn-primary">Sign Up</button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default SignupForm;
