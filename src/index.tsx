import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import AppContextProvider from "./Context/AppContext";
import AuthUserContextProvider from "./Context/AuthUserContext";
import SchoolContextProvider from "./Context/SchoolContext";
import UseSWRConfigProvider from "./Configs/UseSWRConfig";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Router>
    <UseSWRConfigProvider>
      <AuthUserContextProvider>
        <AppContextProvider>
          <SchoolContextProvider>
            <React.StrictMode>
              <App />
            </React.StrictMode>
          </SchoolContextProvider>
        </AppContextProvider>
      </AuthUserContextProvider>
    </UseSWRConfigProvider>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
