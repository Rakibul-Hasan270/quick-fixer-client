import React from 'react';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import bg from '../../../assets/bg-jpg.jpg';
import SimpleParallax from 'simple-parallax-js';

const CallToActiion = () => {
    return (
        <div>
            <SectionHeading heading='quick Fixer' subHeading='Quick Fixer connects you with skilled professionals instantly. Simple, fast, and reliable — everything you need, all in one place.'></SectionHeading>


            <section style={{
                // backgroundImage: `url(${bg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }} className=" bg-gray-100 dark:bg-gray-800 lg:py-12 lg:flex lg:justify-center bg-radial-[at_25%_25%] from-white to-zinc-900 to-75%">
                <div className="overflow-hidden bg-white dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
                    <div className="lg:w-1/2">
                        <div
                            className="h-64 bg-cover lg:h-full"
                            role="img"
                            aria-label="Person working on a laptop with coffee"
                            style={{
                                backgroundImage: `url(${bg})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                            }}
                        />
                    </div>


                    <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
                            Get things done without the <span className="text-blue-500">Hassle</span>
                        </h2>


                        <p className="mt-4 text-gray-500 dark:text-gray-300">
                            “Finding the right expert doesn’t have to be hard.
                            Quick Fixer makes it quick, reliable, and stress-free.”
                        </p>


                        <div className="inline-flex w-full mt-6 sm:w-auto">
                            <a
                                href="#"
                                className="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
                                role="button"
                                aria-label="Start building your idea"
                            >
                                Start Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CallToActiion;