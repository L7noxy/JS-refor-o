import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx"
import Ganso from "../pages/Ganso.jsx";
import Adivinhar from "../pages/Adivinhar.jsx";
import MudarDia from "../pages/MudarDia.jsx";
import Arrays from "../pages/Arrays.jsx";

const router = createBrowserRouter([

    { path: "/", element: <Home /> },
    { path: "/ganso", element: <Ganso /> },
    { path: "/adivinhar", element: <Adivinhar /> },
    { path: "/mudarDia", element: <MudarDia /> },
    { path: "/arrays", element: <Arrays /> },

])

export default router;