import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import PopulerMenu from "./PopularMenu/PopulerMenu";
import Testimonial from "./Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
           <Banner/>
           <Category/>
           <PopulerMenu/>
           <Featured/>
           <Testimonial/>
            
        </div>
    );
};

export default Home;