import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Login from "./componets/Login.jsx";
import Register from "./componets/Register.jsx";
import SobreNosotros from "./componets/SobreNosotros.jsx";
import Tecnologia from "./paginas/Tecnologia";
import Joyeria from "./paginas/Joyeria";
import RopaHombres from "./paginas/RopaHombre";
import RopaMujer from "./paginas/RopaMujer";
import CartShop from "./componets/CartShop.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/sobreNosotros",
    element: <SobreNosotros />,
  },
  {
    path: "/tecnologia",
    element: <Tecnologia />,
  },
  {
    path: "/joyeria",
    element: <Joyeria />,
  },
  {
    path: "/ropaHombre",
    element: <RopaHombres />,
  },
  {
    path: "/ropaMujer",
    element: <RopaMujer />,
  },
  {
    path:"/cartShop",
    element:<CartShop/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
