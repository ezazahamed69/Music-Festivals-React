import { Link } from "react-router-dom";
import Navbar from "../Home/Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {
 
    const handleLogin = e => {
        const {signIn} = useContext(AuthContext);
        e.preventDefault();
        console.log(e.currentTarget);
    // const email = e.target.email.value
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password);
    signIn(email,password)
    .then(result => {
        console.log(result.user)

    })
    .catch (error =>{
        console.error(error);
    })

    }

    return (
        <div>
            <Navbar></Navbar>
            <div>
            <h3 className="text-4xl font-sans font-bold text-stone-700 my-10 text-center">Login Yourself!!</h3>
            <form onSubmit={handleLogin}
            className="md:w-3/4 lg:w-1/2 mx-auto">
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
          <button className="btn btn-neutral">Login</button>
        </div>
            </form>
            <p className="text-center mt-4 text-xl font-extrabold">New user, Please <Link className=" text-red-600" to ="/register">Register</Link>

            </p>
        </div>
            </div>
    );
};

export default Login;