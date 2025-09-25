import Carousel from "../Banner/Carousel";
import PopularServices from "../PopularServices/PopularServices";

const Home = () => {
    return (
        <div className="">
            <Carousel></Carousel>
            <div className="max-w-6xl mx-auto">
                <PopularServices></PopularServices>                
            </div>
        </div>
    );
};

export default Home;