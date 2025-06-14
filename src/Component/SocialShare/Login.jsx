import Lottie from "lottie-react";
import loginAnimation from "../../assets/Lottie/login-animation.json";
import { use, useContext } from "react";
import NewContext from "../Firebase/Context/CreateContext";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const { SignIn } = useContext(NewContext);

  const location = useLocation();
  const navigate = useNavigate();
  const form = location?.state || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    SignIn(email, password)
      .then((result) => {
        console.log("Login successful:", result.user.email);
        const user = { email: result.user.email };
        console.log(user)
        axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
          .then((res) => console.log(res.data));
        // navigate(form)
      })
      .catch((err) => {
        console.error("Login error:", err.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen my-10">
      <div className="hero-content flex-col lg:flex-row-reverse items-center w-full shrink-0 shadow-2xl">
        <div className="text-center lg:text-left lg:w-1/2 ">
          <Lottie
            className="lg:w-[450px]"
            animationData={loginAnimation}
          ></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm   lg:w-1/2">
          <div className="card-body">
            <h1 className="text-2xl font-bold text-center">Login Now</h1>
            <form onSubmit={handleLogin} className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
