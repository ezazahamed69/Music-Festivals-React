import { Link } from "react-router-dom";
import Navbar from "../Home/Shared/Navbar";


const Register = () => {


    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
    // const email = e.target.email.value
    const form = new FormData(e.currentTarget);
    console.log(form.get('email'));

    }


    
    return (
        <div>
            <Navbar></Navbar>
            <div>
            <h3 className="text-4xl font-sans font-bold text-stone-700 my-10 text-center">Please Registered Yourself!!</h3>
            <form onSubmit={handleRegister}
            className="md:w-3/4 lg:w-1/2 mx-auto">
                {/* Name_field */}
            <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" required name ="name"
          placeholder="Please Enter your name" className="input input-bordered" />
        </div>

        {/* Profile_photo */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Profile Picture</span>
          </label>
          <input type="text" required name ="photo"
          placeholder="Paste Picture URL" className="input input-bordered" />
        </div>

        {/* email_field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" required name ="email"
          placeholder="Please Enter Valid Email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" required name ="password" placeholder="Type your Password here.." className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover font-medium">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-neutral">Register</button>
        </div>
            </form>
            <p className="text-center mt-4 text-xl font-extrabold">Existing User? Please <Link className=" text-red-600" to ="/login">Login</Link>
            

            </p>
        </div>
            </div>
        
    );
};

export default Register;