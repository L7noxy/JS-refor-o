import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx"
import Ganso from "../pages/Ganso.jsx";

const router = createBrowserRouter([

    { path: "/", element: <Home /> },
    { path: "/ganso", element: <Ganso /> },


])

export default router;