import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Error from "../pages/Error";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import { get_contacts } from "../services/get-contact";
import Article from "../pages/Article";
import Test from "../pages/Test";

export const app_router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            errorElement: <Error />,
            children: [
                {
                    path: "children/:children_id",
                    element: <h4>CHILDREN HERE</h4>,
                    errorElement: <h1>CHILDREN NOT FOUND</h1>
                },
                {
                    path: "/contacts",
                    element: <Contacts />,
                    loader: get_contacts
                },
                {
                    path: "/article",
                    element: <Article />
                },
                {
                    path: "/test-render-to-string",
                    element: <Test />
                }
            ]
        },
        {
            path: "/about",
            element: <About />
        }
])
