import React, { useEffect, useState } from 'react';
import Card from '../../../components/Card/Card';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';

const PopularServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('PopularServices.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='mt-10'>
            <SectionHeading heading='Popular Services' subHeading='Choose from our most popular services tailored to meet your needs. Delivered by experienced professionals, we ensure fast, reliable, and high-quality solutions — all in one place.'></SectionHeading>
            <div className='grid md:grid-cols-3 gap-5'>
                {
                    services.slice(0, 6).map((item, idx) => <Card key={idx} item={item}></Card>)
                }
            </div>
        </div>
    );
};

export default PopularServices;