import {createBrowserRouter} from "react-router-dom";

//Pages
import {Home} from "./pages/home"
import {Contact} from "./pages/contact";
import {Project} from "./pages/project";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/contato",
        element: <Contact />
    },
    {
        path: "/projeto/:slug",
        element: <Project />
    }
])