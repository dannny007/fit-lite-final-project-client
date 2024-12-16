import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import Registration from "./components/registration/Registration.jsx";
import Login from "./components/login/Login.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="auth" element={<AuthLayout />}>
            <Route path="register" element={<Registration />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Route>
      </Routes>
      {/* <Registration />
      <Login /> */}
    </>
  );
}

export default App;
