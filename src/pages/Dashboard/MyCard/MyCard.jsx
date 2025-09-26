import React from 'react';
import useMyCard from '../../../hooks/useMyCard';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import { FaTrashAlt } from 'react-icons/fa';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const MyCard = () => {
    const [myCard, isLoading] = useMyCard();
    const axiosSecure = useAxiosSecure();

    const handelDeleteBtn = async (id) => {
        try {
            const res = await axiosSecure.delete(`/myCard/${id}`);
            console.log(res.data)
        } catch (err) {
            console.log(err);
        }
    }

    if (isLoading) return <p className='text-center mt-16 text-cyan-500'>Loading...</p>
    return (
        <div>
            <SectionHeading heading='My Card' subHeading='Collaboratively enhance client-centered web services without accurate products. Collaboratively evolve business expertise for professional process improvements. Quickly facilitate wireless infrastructures after revolutionary architectures. Professionally impact.'></SectionHeading>

            <div className="overflow-x-auto  w-full">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                No
                            </th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Category</th>
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
                                <th>
                                    <button onClick={() => handelDeleteBtn(card._id)} className="btn btn-ghost text-red-500"><FaTrashAlt></FaTrashAlt></button>
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