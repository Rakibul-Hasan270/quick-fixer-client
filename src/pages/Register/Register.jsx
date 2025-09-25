import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useAuth();
    const axiosPublic = useAxiosPublic();

    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        console.log(res.data);

        const name = data.name;
        const photoUrl = res.data.data.display_url;
        const email = data.email;
        const password = data.password;
        try {
            await createUser(email, password);
            await updateUserProfile(name, photoUrl);
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <div className="max-w-2xl mx-auto w-full px-6 py-8 md:px-8 lg:w-1/2">
            <p className="mt-3 mb-12 text-xl text-center text-gray-600 dark:text-gray-200"> Welcome to <span className='text-cyan-500'>Fixer Quick</span> ! </p>
            <a
                href="#"
                className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
                <div className="px-4 py-2">
                    <svg className="w-6 h-6" viewBox="0 0 40 40">
                        <path
                            d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                            fill="#FFC107"
                        />
                        <path
                            d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                            fill="#FF3D00"
                        />
                        <path
                            d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                            fill="#4CAF50"
                        />
                        <path
                            d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                            fill="#1976D2"
                        />
                    </svg>
                </div>
                <span className="w-5/6 px-4 py-3 font-bold text-center">
                    Sign up with Google
                </span>
            </a>

            <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
                <a
                    href="#"
                    className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
                >
                    or sign up with email
                </a>
                <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-4">
                    <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                    >
                        User Name
                    </label>
                    <input
                        {...register('name', { required: true })}
                        id="name"
                        type="text"
                        name='name'
                        className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>
                {errors.name && <span className="text-red-500">Name is required</span>}

                {/* <div className="mt-4">
                    <label
                        htmlFor="photo"
                        className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                    >
                        Photo URL
                    </label>
                    <input
                        {...register('photoUrl', { required: true })}
                        id="photoUrl"
                        type="text"
                        name='photoUrl'
                        className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div> */}

                <div className="mb-6 mt-6">
                    <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                        Upload Image
                    </label>
                    <input
                        {...register("image", { required: "Image is required" })}
                        type="file"
                        id="image"
                        accept="image/*"
                        className={`file-input file-input-bordered w-full mt-2
              ${errors.image ? "border-red-500" : "border-gray-200 dark:border-gray-600"}`}
                    />
                    {errors.image && (
                        <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
                    )}
                </div>
                {errors.photoUrl && <span className="text-red-500">PhotoUrl is required</span>}

                <div className="mt-4">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                    >
                        Email Address
                    </label>
                    <input
                        {...register('email', { required: true })}
                        id="email"
                        type="email"
                        name='email'
                        className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>
                {errors.email && <span className="text-red-500">Email is required</span>}

                <div className="mt-4">
                    <div>
                        <label
                            htmlFor="loggingPassword"
                            className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                        >
                            Password
                        </label>
                    </div>

                    <input
                        {...register('password', { required: true, maxLength: 20, pattern: /^(?=.*[A-Z])(?=.*[@$!#%*?&])(?=.*[0-9])(?=.*[a-z])/, minLength: 6 })}
                        id="loggingPassword"
                        type="password"
                        name='password'
                        className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>
                <div>{errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}</div>
                <div>{errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}</div>
                <div>{errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less then 20 characters</p>}</div>
                <div>{errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one upperCase one lowercase, one number and one special characters</p>}</div>

                <div className="mt-6 cursor-pointer border rounded-2xl">
                    <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                        Sign Up
                    </button>
                </div>
            </form>

            <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                <Link to='/login'
                    className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
                >
                    or sign in
                </Link>
                <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
            </div>
        </div>
    );
};

export default Register;