import { Outlet } from "react-router-dom";
import Navbar from "../../pages/shared/Navbar/Navbar";

const Main = () => {
    return (
        <div className="p-1">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;