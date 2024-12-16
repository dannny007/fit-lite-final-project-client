import React, { useContext } from "react";
import axios from "axios";
import { useState } from "react";
//import "./Login.css";
import { useNavigate, Link } from "react-router";
import { UserContext } from "../../contexts/UserContext";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import CancelPresentationOutlinedIcon from "@mui/icons-material/CancelPresentationOutlined";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setIsUserLoggedIn } = useContext(UserContext);
  const [visibleEye, setVisibleEye] = useState(false);
  const navigator = useNavigate();

  const [details, setDetails] = useState([]);
  const userLogIn = { email, password };

  const loginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        userLogIn
      );
      if (response.data) alert("User logged in succesfully");
      else alert("Log in failed");
      setIsUserLoggedIn(response.data);

      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-4/5 max-w-3xl mx-auto mt-24 bg-gray-100 rounded-lg shadow-lg overflow-hidden">
      <div className=" md:flex flex-col justify-center items-center bg-blue-900 text-white w-2/2 p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome back!</h1>
        <p className="text-lg text-center">
          To keep connected with us, please login into your personal account.
        </p>
      </div>
      <form
        onSubmit={loginSubmit}
        className="flex flex-col bg-orange-500 w-full md:w-2/2 p-8 space-y-6"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Login</h2>
          {/* <p onClick={() => navigator("/")}>x</p> */}
          <CancelPresentationOutlinedIcon
            className="text-3xl cursor-pointer text-red-700 hover:text-red-600"
            onClick={() => navigator("/")}
          />
        </div>

        <div className="relative">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          <MailOutlineOutlinedIcon className="absolute right-4 top-4 text-blue-900" />
        </div>

        <div className="relative">
          <input
            type={visibleEye ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          <span
            onClick={() => setVisibleEye(!visibleEye)}
            className="absolute right-4 top-3 text-blue-900 cursor-pointer"
          >
            {visibleEye ? (
              <VisibilityOutlinedIcon />
            ) : (
              <VisibilityOffOutlinedIcon />
            )}
          </span>
        </div>
        <Link to="#" className="text-sm text-center text-gray-700 underline">
          Forgot password?
        </Link>

        <button
          type="submit"
          value="Submit"
          className="w-full py-3 bg-blue-800 text-white rounded-md hover:bg-blue-900 transition"
        >
          Submit
        </button>
        <div className="text-center text-gray-700">
          Don't have an account?{" "}
          <Link to="/auth/register" className="text-blue-600 underline">
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
