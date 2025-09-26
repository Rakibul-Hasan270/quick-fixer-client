import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import ServiceDetails from "../../components/ServiceDetails/ServiceDetails";
import AllServices from "../../pages/AllServices/AllServices";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'serviceDetails/:id',
                element: <PrivateRouter><ServiceDetails></ServiceDetails></PrivateRouter>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: 'allServices',
                element: <AllServices></AllServices>
            }
        ]
    }
])