import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import { FaTrashAlt, FaUsers } from 'react-icons/fa';

const Allusers = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: allusers = [], isLoading } = useQuery({
        queryKey: ['allusers', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

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
                            <th>Action</th>
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
                                    <button className="btn btn-ghost"><FaUsers></FaUsers></button>
                                </th>
                                <th title='delete user'>
                                    <button className="btn btn-ghost"><FaTrashAlt className='text-red-500'></FaTrashAlt></button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allusers;