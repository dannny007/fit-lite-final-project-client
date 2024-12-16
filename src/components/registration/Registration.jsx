import React from "react";
import { useState, useContext } from "react";
import axios from "axios";
import PersonIcon from "@mui/icons-material/Person";
import CancelPresentationOutlinedIcon from "@mui/icons-material/CancelPresentationOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { UserContext } from "../../contexts/UserContext";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visibleEye, setVisibleEye] = useState(false);
  const [popClose, setPopClose] = useState(true);

  const [details, setDetails] = useState([]);
  const userData = { name, email, password };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        userData
      );
      setDetails(response.data);
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };
  const closePopUp = () => {
    setPopClose(false);
  };
  if (!popClose) return null;

  return (
    <div className="flex flex-col md:flex-row w-4/5 max-w-3xl mx-auto mt-24 bg-gray-100 rounded-lg shadow-lg overflow-hidden">
      <div className=" md:flex flex-col justify-center items-center bg-blue-900 text-white w-2/2 p-8">
        <h1 className="text-3xl font-bold mb-4">Hello!</h1>
        <p className="text-lg text-center">
          Enter your personal details and start your training with us.
        </p>
      </div>

      <form className="flex flex-col bg-orange-500 w-full md:w-2/2 p-8 space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Sign Up</h2>
          <CancelPresentationOutlinedIcon
            className="text-3xl cursor-pointer text-red-700 hover:text-red-600"
            onClick={closePopUp}
          />
        </div>

        <div className="relative">
          <input
            type="text"
            name="Username"
            placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          <PersonIcon className="absolute right-4 top-4 text-blue-900" />
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

        <button
          type="submit"
          value="Submit"
          onClick={handleSubmit}
          className="w-full py-3 bg-blue-800 text-white rounded-md hover:bg-blue-900 transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Registration;
