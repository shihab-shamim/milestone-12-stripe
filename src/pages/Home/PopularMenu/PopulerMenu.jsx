import { useEffect, useState } from "react";
import SectionTitle from "../../../componets/SectionTitle/SectionTitle";
import MenuItem from "../../shered/menuItem/MenuItem";

const PopulerMenu = () => {
    const [menu,setMenu]=useState([[]])

    useEffect(()=>{
        fetch("./menu.json")
        .then(res=>res.json())
        .then(data=>{
            const popular=data.filter(menu=>menu.category ==="popular")
            setMenu(popular)
        })
    },[])
 
    return (
        <section className="mb-12">
            <SectionTitle headding={"FROM OUR MENU"} subHeadding={"---Check it out---"}/>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {
                    menu.map(item=><MenuItem key={item._id}  item={item}/>)
                }
            </div>

        </section>
    );
};

export default PopulerMenu;