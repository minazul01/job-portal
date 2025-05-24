/* eslint-disable no-unused-vars */
import Lottie from "lottie-react";
import animationFiles from "../../assets/Lottie/Animation - 1747994530930.json";
import { useContext } from "react";
import NewContext from "../Firebase/Context/CreateContext";


function Register() {

  const {createAccount} = useContext(NewContext)



  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
   
   
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    createAccount(email, password)
    .then(result => console.log(result))
    .catch(error => console.log(error.message))
    
  };

  return (
    <div className="flex-col flex lg:flex-row w-full p-2 rounded-2xl shadow-2xl gap-3 my-20">
      <div className="lg:w-1/2">
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto mt-10 p-6  shadow-md space-y-4"
        >
          <h2 className="text-2xl font-bold text-center">Register</h2>

          <div>
            <label className="block mb-1 font-medium">Username</label>
            <input
              type="text"
              name="username"
              
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
             
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              name="password"
            
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Re-enter Password</label>
            <input
              type="password"
              name="confirmPassword"
            
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>
      </div>
      <div>
        <Lottie animationData={animationFiles}></Lottie>
      </div>
    </div>
  );
}

export default Register;
