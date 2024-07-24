import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import "./index.css";
import "./i18n/i18n.ts";
import LoginView from "./views/LoginView/LoginView.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <App /> */}
    <LoginView />
  </React.StrictMode>,
);
