import React, {useContext} from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import {Link} from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const DashboardLayout = () => {

    const {user} = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to=''>My Appointment</Link></li>

                        {
                            isAdmin && <>
                                <li><Link to='/dashboard/allusers'>All Users</Link></li>
                                <li><Link to='/dashboard/addDoctors'>Add Doctors</Link></li>
                                <li><Link to='/dashboard/manageDoctors'>Manage Doctors</Link></li>
                            </>
                        }

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;