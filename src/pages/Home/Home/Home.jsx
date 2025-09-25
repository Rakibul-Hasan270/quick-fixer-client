import Carousel from "../Banner/Carousel";
import CallToActiion from "../CallToAction/CallToActiion";
import PopularServices from "../PopularServices/PopularServices";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div className="">
            <Carousel></Carousel>
            <div className="max-w-6xl mx-auto">
                <PopularServices></PopularServices>
            </div>

            <CallToActiion></CallToActiion>

            <div className="max-w-6xl mx-auto">
                <Testimonials></Testimonials>
            </div>
        </div>
    );
};

export default Home;