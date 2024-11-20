import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../pages/homepage/HomePage";
import CreateEvent from "../../pages/createEvent/CreateEvent";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "create-event",
    element: <CreateEvent />,
  },
]);
