import React from "react";
import { FaDollarSign, FaRegStar } from "react-icons/fa6";
import { MdSelfImprovement } from "react-icons/md";
import { RiServiceLine } from "react-icons/ri";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import useMyCard from "../../hooks/useMyCard";

const ServiceDetails = () => {
    const { averageRating, category, description, image, serviceCharge, title, totalProviders, _id } = useLoaderData();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [, , refetch] = useMyCard();
    const navigate = useNavigate();

    const handelAddToCart = async () => {
        try {
            const serviceInfo = { email: user.email, title, category, serviceCharge, image, totalProviders, description, averageRating };
            const res = await axiosSecure.post(`/services`, serviceInfo);
            if (res.data.insertedId) {
                toast.success(`${title} added your service cart`);
                refetch();
                navigate('/dashboard/card');
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="max-w-6xl mx-auto p-6">
            <div className="card lg:card-side shadow-lg rounded-2xl overflow-hidden">
                <figure className="lg:w-1/2 overflow-hidden">
                    <img src={image} alt="Service" className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110" />
                </figure>

                <div className="card-body lg:w-1/2 space-y-4">
                    <h2 className="card-title text-3xl font-bold">{title}</h2>
                    <p className="leading-relaxed">{description}</p>
                    <div className="flex flex-col gap-2 text-sm ">
                        <p>
                            <span className="font-semibold">Category:</span> {category}
                        </p>
                        <div>
                            <p className="font-semibold flex items-center"><FaDollarSign></FaDollarSign>Charge: {serviceCharge}</p>
                        </div>
                        <div>
                            <p className="font-semibold flex items-center"><FaRegStar></FaRegStar>Rating: {averageRating}</p>
                        </div>
                        <div>
                            <p className="font-semibold flex items-center">< MdSelfImprovement></ MdSelfImprovement>Provider: {totalProviders}</p>
                        </div>
                    </div>

                    <div className="card-actions justify-end mt-4">
                        <button onClick={() => handelAddToCart(_id)} className="flex items-center gap-1.5 px-6 py-3 text-lg font-semibold rounded-full border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-500 hover:text-white hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105" >
                            <RiServiceLine></RiServiceLine>  Add Services
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;