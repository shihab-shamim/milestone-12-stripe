import { Outlet } from "react-router";
import Footer from "../pages/shered/Footer";
import Navber from "../pages/shered/Navber";


const Main = () => {
    return (
        <div>

             <Navber/>
              <Outlet/>

            <Footer/>
            
        </div>
    );
};

export default Main;