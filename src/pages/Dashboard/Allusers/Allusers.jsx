import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import { FaTrashAlt, FaUsers } from 'react-icons/fa';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const Allusers = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: allusers = [], isLoading, refetch } = useQuery({
        queryKey: ['allusers', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const handelMakeAdmin = async user => {
        try {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, make it admin now!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const adminRes = await axiosSecure.patch(`/users/${user._id}`);
                    if (adminRes.data.modifiedCount > 0) {
                        refetch();
                        toast.success(`${user.name} has been Admin`);
                        Swal.fire({
                            title: "Admin!",
                            text: "Your are now admin.",
                            icon: "success"
                        });
                    }
                }
            });
        } catch (err) {
            console.log(err);
        }
    }

    const handelDelete = user => {
        try {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const deleteRes = await axiosSecure.delete(`/users/${user._id}`);
                    if (deleteRes.data.deletedCount > 0) {
                        refetch();
                        toast.success(`${user.name} has been deleted`);
                    }
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            });
        } catch (err) {
            console.log(err);
        }
    }

    if (isLoading) return <p className='text-center text-cyan-500 mt-16'>Loading...</p>

    return (
        <div>
            <SectionHeading heading='All Users' subHeading='Synergistically repurpose prospective metrics via ethical internal or "organic" sources. Continually evolve market-driven metrics after real-time models. Rapidiously reconceptualize cross-media value and backward-compatible results. Authoritatively.'></SectionHeading>

            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                No
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allusers.map((user, idx) => <tr key={user._id}>
                                <th>
                                    {idx + 1}
                                </th>
                                <td>
                                    {user.name}
                                </td>
                                <td>
                                    {user.email}
                                </td>
                                <th title='make admin'>
                                    {user?.role === 'admin' ? <p className='text-cyan-300 font-semibold'>Admin</p> : <button onClick={() => handelMakeAdmin(user)} className="btn btn-ghost"><FaUsers></FaUsers></button>}
                                </th>
                                <th title='delete user'>
                                    <button onClick={() => handelDelete(user)} className="btn btn-ghost"><FaTrashAlt className='text-red-500'></FaTrashAlt></button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default Allusers;