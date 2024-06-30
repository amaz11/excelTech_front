import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../layout/Dashboard";
import Task from "../pages/Task";
import Category from "../pages/Category";
import Login from "../pages/Login";
import Register from "../pages/Resister";
import Errorpage from "../pages/Errorpage";
import Authentic, { ISLogin } from "../hoc/Authentic";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />,
        errorElement: <Errorpage />,
        children: [
            {
                index: true,
                element: <Authentic><Home /></Authentic>
            },
            {
                path: 'task',
                element: <Authentic><Task /></Authentic>
            },
            {
                path: 'category',
                element: <Authentic><Category /></Authentic>
            },

        ]
    },

    {
        path: 'login',
        element: <ISLogin> <Login /></ISLogin>
    },
    {
        path: 'register',
        element: <ISLogin> <Register /></ISLogin>
    }
])