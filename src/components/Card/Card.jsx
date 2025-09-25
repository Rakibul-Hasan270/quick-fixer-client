import React from 'react';
import { FcHome } from "react-icons/fc";
import { FaBangladeshiTakaSign, FaUsers } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Card = ({ item }) => {
    const { title, description, averageRating, serviceCharge } = item;

    return (
        <>
            <Link to={`/serviceDetails/${item._id}`} className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800" >
                <img
                    className="object-cover object-center w-full h-56 transition-transform duration-300 ease-in-out hover:scale-110"
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                    alt="avatar"
                />
                <div className=" px-6 py-3 bg-gray-900">
                    <div className="flex items-center px-6 py-3 bg-gray-900">
                        <FcHome></FcHome>
                        <h1 className="mx-3 text-lg font-semibold text-white">{title}</h1>
                    </div>
                </div>

                <div className="px-6 py-4">
                    {/* <h1 className="text-gray-800 dark:text-white flex gap-2 text-xs  flex-wrap">
                    {
                        name.map((name, idx) => <p key={idx} className='flex gap-2'>{name + ','}</p>)
                    }
                </h1> */}

                    <p className="py-2 text-gray-700 dark:text-gray-400">
                        {description}
                    </p>

                    <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                        <FaBangladeshiTakaSign></FaBangladeshiTakaSign>
                        <h1 className="px-2 text-sm font-bold">Service Charge: {serviceCharge}</h1>
                    </div>

                    <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                        <FaRegStar></FaRegStar>
                        <h1 className="px-2 text-sm font-bold">Rating: {averageRating}</h1>
                    </div>

                    {/* <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                    <FaUsers></FaUsers>
                    <h1 className="px-2 text-sm font-bold">Total Provider: {totalProviders}</h1>
                </div> */}
                </div>
            </Link >
        </>
    );
};

export default Card;