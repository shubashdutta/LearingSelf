import React, { lazy, Suspense, useEffect } from "react";
import Sidebar from "./Componment/Common/Sidebar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from "./Componment/Common/About";
import Services from "./Componment/Common/Services";
import { router } from "./Componment/Common/Router";
import GoogleTranslate from "./Componment/GoogleTranslate";
import Chart from "./Componment/Chart";
import Loader from "./Componment/Common/Loader";
const AdminRouter = lazy(() => import("./Componment/Router"));
const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <AdminRouter />
      </Suspense>
    </>
  );
};

export default App;
