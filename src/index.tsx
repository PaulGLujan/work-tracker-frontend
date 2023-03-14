import ReactDOM from "react-dom/client";
import "./index.css";
// import Router from "./context/Router";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
