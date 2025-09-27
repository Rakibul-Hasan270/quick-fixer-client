import { FaHome, FaShoppingCart } from 'react-icons/fa';
import { MdOutlineAdd } from "react-icons/md";
import { NavLink, Outlet } from 'react-router-dom';
import useMyCard from '../../hooks/useMyCard';

const Dashboard = () => {
    const [myCard] = useMyCard();

    return (
        <div className='max-w-6xl mx-auto md:flex gap-3.5 p-1.5'>
            <div className='bg-slate-800 md:min-h-screen w-64 list-none'>
                <div className='mt-10'>
                    <li className="mb-1">
                        <NavLink className={({ isActive }) => `flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 ${isActive ? "bg-cyan-500 text-white shadow-md" : "text-gray-200 hover:bg-cyan-500 hover:text-white"}`} to='/dashboard/allusers'> <FaHome></FaHome>All User
                        </NavLink>
                    </li>

                    <li className="mb-1">
                        <NavLink className={({ isActive }) => `flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 ${isActive ? "bg-cyan-500 text-white shadow-md" : "text-gray-200 hover:bg-cyan-500 hover:text-white"}`} to='/dashboard/card'> <FaShoppingCart></FaShoppingCart>My Cart ({myCard.length})
                        </NavLink>
                    </li>

                    <li className="mb-1">
                        <NavLink className={({ isActive }) => `flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 ${isActive ? "bg-cyan-500 text-white shadow-md" : "text-gray-200 hover:bg-cyan-500 hover:text-white"}`} to='/dashboard/addservices'> <MdOutlineAdd className='text-2xl'></MdOutlineAdd>Add Services
                        </NavLink>
                    </li>

                    <div className="divider">OR</div>

                    <li className="mb-1">
                        <NavLink className={({ isActive }) => `flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 ${isActive ? "bg-cyan-500 text-white shadow-md" : "text-gray-200 hover:bg-cyan-500 hover:text-white"}`} to='/'> <FaShoppingCart></FaShoppingCart>Home</NavLink>
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