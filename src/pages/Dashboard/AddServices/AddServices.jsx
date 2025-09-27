import React from 'react';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddServices = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] };
        const imageRes = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if (imageRes.data.success) {
            const serviceInfo = {
                title: data.title,
                image: imageRes.data.data.display_url,
                description: data.description,
                totalProvider: data.provider,
                averageRating: data.rating,
                category: data.category,
                serviceCharge: data.charge
            }
            const serviceRes = await axiosSecure.post('/services', serviceInfo);            
            if (serviceRes.data.insertedId) {
                toast.success(`${data.title} added to your service collection`);
                reset();
            }
        }
    }

    return (
        <div className='w-full'>
            <SectionHeading heading='Add a Services' subHeading='Collaboratively unleash extensible alignments before proactive deliverables. Conveniently incubate client-centered processes vis-a-vis market-driven e-tailers. Progressively visualize future-proof technology rather than resource sucking paradigms. Interactively formulate.'></SectionHeading>
            <div>


                <form onSubmit={handleSubmit(onSubmit)} className="mx-auto">
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            {...register("title", { required: true })}
                            type="text"
                            id="title"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 
                 border-b-2 border-gray-300 appearance-none dark:text-white 
                 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none 
                 focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                        />
                        <label
                            htmlFor="title"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 
                 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 
                 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 
                 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
                 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Title
                        </label>
                        {errors.title?.type === "required" && (
                            <p className="text-red-500 text-xs">Title is required</p>
                        )}
                    </div>


                    {/* image  */}
                    <div className='mb-7'>
                        <label
                            htmlFor="image"
                            className="block text-sm text-gray-500 dark:text-gray-300"
                        >
                            Image
                        </label>

                        <input
                            {...register('image', { required: true })}
                            type="file"
                            id="image"
                            name="image"
                            className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg 
                   file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full 
                   dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 
                   dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 
                   focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:focus:border-blue-300"
                        />
                        {errors.image?.type === "required" && (
                            <p className="text-red-500 text-xs">Image is required</p>
                        )}
                    </div>

                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            {...register("description", { required: true })}
                            type="text"
                            id="description"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 
                 border-b-2 border-gray-300 appearance-none dark:text-white 
                 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none 
                 focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                        />
                        <label
                            htmlFor="description"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 
                 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                 peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto 
                 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
                 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Description
                        </label>
                        {errors.description?.type === "required" && (
                            <p className="text-red-500 text-xs">Description is required</p>
                        )}
                    </div>

                    <div className='md:flex gap-2'>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                {...register("category", { required: true })}
                                type="text"
                                id="category"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 
                 border-b-2 border-gray-300 appearance-none dark:text-white 
                 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none 
                 focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                            />
                            <label
                                htmlFor="category"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 
                 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                 peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto 
                 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
                 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Category
                            </label>
                            {errors.category?.type === "required" && (
                                <p className="text-red-500 text-xs">Category is required</p>
                            )}
                        </div>


                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                {...register("charge", { required: true })}
                                type="number"
                                id="charge"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 
                 border-b-2 border-gray-300 appearance-none dark:text-white 
                 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none 
                 focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                            />
                            <label
                                htmlFor="category"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 
                 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                 peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto 
                 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
                 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Service Charge
                            </label>
                            {errors.charge?.type === "required" && (
                                <p className="text-red-500 text-xs">service charge is required</p>
                            )}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                {...register("rating", { required: true })}
                                type="number"
                                id="rating"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 
                   border-b-2 border-gray-300 appearance-none dark:text-white 
                   dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none 
                   focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                            />
                            <label
                                htmlFor="rating"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 
                   duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                   peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto 
                   peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
                   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                   peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Average Rating
                            </label>
                            {errors.rating?.type === "required" && (
                                <p className="text-red-500 text-xs">Rating is required</p>
                            )}
                        </div>

                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                {...register("provider", { required: true })}
                                type="number"
                                id="provider"
                                name='provider'
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 
                   border-b-2 border-gray-300 appearance-none dark:text-white 
                   dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none 
                   focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                            />
                            <label
                                htmlFor="number"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 
                   duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                   peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto 
                   peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
                   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                   peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Total Providers
                            </label>
                            {errors.provider?.type === "required" && (
                                <p className="text-red-500 text-xs">Provider is required</p>
                            )}
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="flex items-center gap-1.5 px-6 py-1 text-lg font-semibold rounded-full border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-500 hover:text-white hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                    >
                        Submit Services
                    </button>
                </form>


            </div>
        </div>
    );
};

export default AddServices;