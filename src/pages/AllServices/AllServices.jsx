import Card from '../../components/Card/Card';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import { IoIosArrowDown } from "react-icons/io";
import { FaSearch } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useQuery } from '@tanstack/react-query';

const AllServices = () => {
    const axiosPublic = useAxiosPublic();
    const [count, setCount] = useState(0);
    const [itemPerPage,] = useState(6);
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(count / itemPerPage);
    const pages = [...Array(totalPages).keys()].map(num => num + 1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosPublic.get("/serviceCount");
                setCount(res.data.count);
                // console.log(res.data.count);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [axiosPublic]);

    const { data: services = [], isLoading } = useQuery({
        queryKey: ['allServices', currentPage, itemPerPage],
        queryFn: async () => {
            const res = await axiosPublic.get(`/allServices?page=${currentPage}&size=${itemPerPage}`);
            return res.data;
        }
    })

    const handelPaginationBnt = value => {
        setCurrentPage(value);
    }

    if (isLoading) return <p className='text-center mt-16'>loading...</p>

    return (
        <div className='max-w-6xl mx-auto'>
            <SectionHeading heading='All Services in One Place' subHeading='From home repairs to lifestyle needs — everything made simple with quickFixer.'></SectionHeading>

            <div className=' flex justify-around items-center mb-10'>
                <div>
                    <details className="dropdown">
                        <summary className="btn m-1"><span className='flex items-center gap-1.5'>Sort By Title<IoIosArrowDown></IoIosArrowDown></span></summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li></li>
                        </ul>
                    </details>
                </div>

                <div>
                    <div className="join">
                        <div>
                            <label className="input validator join-item">
                                <FaSearch></FaSearch>
                                <input type="text" placeholder="" required />
                            </label>
                            <div className="validator-hint hidden">Enter valid input- (Category)</div>
                        </div>
                        <button className="btn btn-neutral join-item">Search..</button>
                    </div>
                </div>

                <div>
                    <details className="dropdown">
                        <summary className="btn m-1"><span className='flex items-center gap-1.5'>Filter By Category <IoIosArrowDown></IoIosArrowDown></span></summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </details>
                </div>
            </div>

            <div className='max-w-6xl mx-auto grid gap-3 md:grid-cols-3'>
                {
                    services.map(item => <Card key={item._id} item={item} ></Card>)
                }
            </div>


            {/* pgination  */}
            <div className='flex justify-center my-12'>
                <div className="flex">
                    {/* Previous Button */}
                    <button onClick={() => handelPaginationBnt(currentPage - 1)} disabled={currentPage === 1} className='btn btn-outline'>
                        <IoIosArrowRoundBack></IoIosArrowRoundBack>    Prev
                    </button>

                    {/* Page Number  */}
                    {
                        pages.map((page) =>
                            <button key={page} onClick={() => handelPaginationBnt(page)}
                                className={`items-center ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 hover:text-white'} hidden px-4 py-2 mx-1 transition-colors duration-300 transform rounded-md sm:flex `}>{page}
                            </button>)
                    }

                    {/* Next Button */}
                    <button onClick={() => handelPaginationBnt(currentPage + 1)} disabled={currentPage === totalPages} className='btn btn-outline'>
                        <IoIosArrowRoundForward ></IoIosArrowRoundForward > Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllServices;