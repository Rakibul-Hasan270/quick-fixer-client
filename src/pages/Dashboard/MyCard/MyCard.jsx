import React from 'react';
import useMyCard from '../../../hooks/useMyCard';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import { FaTrashAlt } from 'react-icons/fa';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const MyCard = () => {
    const [myCard, isLoading, refetch] = useMyCard();
    const axiosSecure = useAxiosSecure();
    const totalPrice = myCard.reduce((current, prev) => current + prev.serviceCharge, 0);

    const handelDeleteBtn = card => {
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
                    const res = await axiosSecure.delete(`/myCard/${card._id}`);
                    if (res.data.deletedCount) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: `${card.title} has been deleted.`,
                            icon: "success"
                        });
                    }
                }
            });
        } catch (err) {
            console.log(err);
        }
    }

    if (isLoading) return <p className='text-center mt-16 text-cyan-500'>Loading...</p>
    return (
        <div>
            <SectionHeading heading='My Card' subHeading='Collaboratively enhance client-centered web services without accurate products. Collaboratively evolve business expertise for professional process improvements. Quickly facilitate wireless infrastructures after revolutionary architectures. Professionally impact.'></SectionHeading>

            <div className="overflow-x-auto  w-full">
                <div className='flex justify-around items-center'>
                    <h3 className='text-2xl mb-6'>Total Service Booking: {myCard.length}</h3>
                    <h3 className='text-2xl mb-6'>Total Service Charge: {totalPrice}</h3>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                No
                            </th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Service Charge</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myCard.map((card, idx) => <tr key={idx}>
                                <th>
                                    {idx + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={card.image}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {card.title}
                                </td>
                                <td>{card.category}</td>
                                <td className='text-center'>{card.serviceCharge}</td>
                                <th>
                                    <button onClick={() => handelDeleteBtn(card)} className="btn btn-ghost text-red-500"><FaTrashAlt></FaTrashAlt></button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCard;