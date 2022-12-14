import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout";
import Main from "../../layout/Main";
import Appoinment from "../../Pages/Appoinment/Appointment/Appoinment";
import AddDoctors from "../../Pages/Dashboard/AddDoctors/AddDoctors";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import ManageDoctors from "../../Pages/Dashboard/ManageDoctors/ManageDoctors";
import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUP/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
            path: '/login',
            element: <Login></Login>
          },
          {
            path: '/register',
            element: <SignUp></SignUp>
          },
          {
            path: '/appoinment',
            element: <PrivateRoute><Appoinment></Appoinment></PrivateRoute>
          }
         
        ]
    },

    {
      path:'/dashboard',
      element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
      children: [
        {
          path: '/dashboard',
          element: <MyAppointment></MyAppointment>
        },
        {
          path: '/dashboard/allusers',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path: '/dashboard/addDoctors',
          element: <AdminRoute><AddDoctors></AddDoctors></AdminRoute>
        },
        {
          path: '/dashboard/manageDoctors',
          element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
        }
      ]
    }


    
])