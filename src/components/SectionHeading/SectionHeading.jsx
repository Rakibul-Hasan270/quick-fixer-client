import React from 'react';

const SectionHeading = ({ heading, subHeading }) => {
    return (
        <div className='text-center space-y-4 mt-10 mb-10'>
            <h2 className='text-4xl uppercase font-serif'>{heading}</h2>
            <p className='md:max-w-3xl mx-auto'>{subHeading}</p>
        </div>
    );
};

export default SectionHeading;