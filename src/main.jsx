//import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";

// Mui - Roboto Font
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { UserContextProvider } from "./contexts/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <Router>
      <App />
    </Router>
  </UserContextProvider>
);
