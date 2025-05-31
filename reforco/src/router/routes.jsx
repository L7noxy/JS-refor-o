import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx"
import Ganso from "../pages/Ganso.jsx";
import Adivinhar from "../pages/Adivinhar.jsx";


const router = createBrowserRouter([

    { path: "/", element: <Home /> },
    { path: "/ganso", element: <Ganso /> },
    { path: "/adivinhar", element: <Adivinhar /> },



])

export default router;