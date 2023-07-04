import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/css/style.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/main";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ToastContainer />
    <RouterProvider router={router} />
  </>
);
