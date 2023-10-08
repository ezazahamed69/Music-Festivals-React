
import { Link } from "react-router-dom";
import Navbar from "../Home/Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = async (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    // Validate password
    if (password.length < 6 || /[A-Z]/.test(password) || /[!@#$%^&*()_+{}\[\]:;<>,.?~\\]/.test(password)) {
      // Show an error toast message if the password doesn't meet the requirements
      toast.error("Password must be at least 6 characters long, not contain a capital letter, and not have special characters.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return; 
    }

    try {
      // Create user section
      const result = await createUser(email, password);
      console.log(result.user);

      // Show a success toast message upon successful registration
      toast.success("Registration successful!", {
        position: "top-center",
        autoClose: 3000, // Auto close the toast after 3 seconds
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      console.error(error);

      // Show an error toast message if registration fails
      toast.error("Registration failed. Please try again.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h3 className="text-4xl font-sans font-bold text-stone-700 my-10 text-center">Please Register Yourself!!</h3>
        <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" required name="name" placeholder="Please Enter your name" className="input input-bordered" />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Profile Picture</span>
            </label>
            <input type="text" required name="photo" placeholder="Paste Picture URL" className="input input-bordered" />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" required name="email" placeholder="Please Enter Valid Email" className="input input-bordered" />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" required name="password" placeholder="Type your Password here.." className="input input-bordered" />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover font-medium">Forgot password?</a>
            </label>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-neutral">
                Register</button>
          </div>
        </form>
        {/* Toast container */}
        <ToastContainer />
        <p className="text-center mt-4 text-xl font-extrabold">Existing User? Please <Link className=" text-red-600" to="/login">Login</Link></p>
      </div>
    </div>
  );
};

export default Register;
