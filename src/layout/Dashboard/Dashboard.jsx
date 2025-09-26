import { FaHome, FaShoppingCart } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='max-w-6xl mx-auto md:flex gap-3.5 p-1.5'>
            <div className='bg-slate-800 min-h-screen w-64 list-none'>
                <div className='mt-10'>
                    
                    <li className="mb-1">
                        <NavLink className={({ isActive }) => `flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 ${isActive ? "bg-cyan-500 text-white shadow-md" : "text-gray-200 hover:bg-cyan-500 hover:text-white"}`} to='/dashboard/carddf'> <FaHome></FaHome>User Home
                        </NavLink>
                    </li>

                    <li className="mb-1">
                        <NavLink className={({ isActive }) => `flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 ${isActive ? "bg-cyan-500 text-white shadow-md" : "text-gray-200 hover:bg-cyan-500 hover:text-white"}`} to='/dashboard/card'> <FaShoppingCart></FaShoppingCart>My Cart
                        </NavLink>
                    </li>
                </div>

            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;