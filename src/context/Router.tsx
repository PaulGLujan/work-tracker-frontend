import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import TimeFormPage from "../pages/TimeFormPage";
import WorkingPage from "../pages/WorkingPage";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <TimeFormPage />,
      },
      {
        path: "working",
        element: <WorkingPage />,
      },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
