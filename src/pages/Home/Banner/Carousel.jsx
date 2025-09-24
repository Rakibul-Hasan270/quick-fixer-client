import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Slider from './Slider';


const Carousel = () => {

    const bannerData = [
        {
            title: "Find Trusted Services Near You – যেকোনো সময়, যেকোনো দরজায়।",
            imageUrl: "https://i.postimg.cc/T1MPz1bs/local-service-1.jpg",
            buttonText: ["Browse Services", "Set Location"]
        },
        {
            title: "From electricians to beauticians – সব সলিউশন এক প্ল্যাটফর্মে!",
            imageUrl: "https://i.postimg.cc/9MCbWrZm/local-service-2.jpg",
            buttonText: ["Explore Providers", "Book Now"]
        },
        {
            title: "Your city’s best service providers, এখন এক ক্লিকে হাতে।",
            imageUrl: "https://i.postimg.cc/Bbcs9Zqx/local-service-3.jpg",
            buttonText: ["Search Nearby", "Get Started"]
        },
        {
            title: "Real People. Real Services. Trusted Locally. বিশ্বস্ত সার্ভিস, এখন আরও সহজ।",
            imageUrl: "https://i.postimg.cc/YqfTmtMQ/local-service-4.jpg",
            buttonText: ["View Listings", "Join as Provider"]
        },
        {
            title: "Don’t stress it — plumber, tutor, tailor... সবই এখানে পাবেন।",
            imageUrl: "https://i.postimg.cc/d0Fndb3h/local-service-5.jpg",
            buttonText: ["Find Help", "Post a Request"]
        }
    ];


    return (
        <><Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            {
                bannerData.map((info, idx) => <SwiperSlide key={idx}><Slider info={info}></Slider></SwiperSlide>)
            }
        </Swiper>
        </>
    );
};

export default Carousel;