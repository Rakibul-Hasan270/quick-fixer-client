import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import ServiceDetails from "../../components/ServiceDetails/ServiceDetails";
import AllServices from "../../pages/AllServices/AllServices";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import Dashboard from "../../layout/Dashboard/Dashboard";
import MyCard from "../../pages/Dashboard/MyCard/MyCard";

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
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'card',
                element: <MyCard></MyCard>
            }
        ]
    }
])