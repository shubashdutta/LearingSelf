import { createBrowserRouter } from "react-router-dom";
import ProtectedRouter from "./ProtectedRouter";
import DashboardPage from "./DashboardPage";
import About from "./About";
import Services from "./Services";
import PaymentGetway from "./PaymentGetway";
import Contact from "./Contact";
import MainDashbord from "../auth/MainDashbord";
import LoginPage from "./Page/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/admin",
    element: <ProtectedRouter />,
    children: [
      {
        element: <MainDashbord />,
        children: [
          {
            index: true,
            element: <DashboardPage />,
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "services",
            element: <Services />,
          },
          {
            path: "contact",
            element: <Contact />,
          },
          {
            path: "payment",
            element: <PaymentGetway />,
          },
        ],
      },
    ],
  },
]);
