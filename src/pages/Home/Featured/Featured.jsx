import SectionTitle from "../../../componets/SectionTitle/SectionTitle";

import featured from "../../../../assets/home/featured.jpg"
import  './feature.css';

const Featured = () => {
    return (
        <div className="feature text-white my-20 bg-fixed">
            <SectionTitle headding={"FROM OUR MENU"} subHeadding={"---Check it out---"} />
            
           <div className="md:flex justify-center items-center gap-6 py-36 px-24">
           <div className="w-1/2">
                <img  src={featured} alt="" />
            </div>
          <div className="w-1/2">
          <p>Aug 20,2029</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sapiente architecto consectetur qui repellendus quaerat. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla provident iste excepturi sint, ratione inventore? Natus, a facere deserunt explicabo veritatis id repellat magni possimus fuga accusamus! Dignissimos at earum perferendis cupiditate nesciunt commodi iusto.</p>
          <button className="btn btn-outline">Read More</button>
          </div>
           </div>
        </div>
    );
};

export default Featured;