import { Link } from 'react-router-dom';
import Card from '../../../components/Card/Card';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import useServices from '../../../hooks/useServices';

const PopularServices = () => {
    const [services] = useServices();

    return (
        <div className=''>
            <SectionHeading heading='Popular Services' subHeading='Choose from our most popular services tailored to meet your needs. Delivered by experienced professionals, we ensure fast, reliable, and high-quality solutions — all in one place.'></SectionHeading>
            <div className='grid md:grid-cols-3 gap-5'>
                {
                    services.slice(0, 6).map((item, idx) => <Card key={idx} item={item}></Card>)
                }
            </div>
            <div className='flex justify-center mt-6'>
                <Link to='/allServices' className='btn btn-outline'>See More</Link>
            </div>
        </div>
    );
};

export default PopularServices;