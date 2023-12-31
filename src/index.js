import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";
import { QuizProvider } from "./QuizContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <QuizProvider>
    <App />
  </QuizProvider>
);
