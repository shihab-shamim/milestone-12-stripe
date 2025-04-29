import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import image1 from "../../../../assets/home/slide1.jpg";
import image2 from "../../../../assets/home/slide2.jpg";
import image3 from "../../../../assets/home/slide3.jpg";
import image4 from "../../../../assets/home/slide4.jpg";
import image5 from "../../../../assets/home/slide5.jpg";
import SectionTitle from "../../../componets/SectionTitle/SectionTitle";
const Category = () => {
  return (
    <section>
        <SectionTitle subHeadding={"---From 11:00am to 10:00pm---"} headding={"ORDER ONLINE"} />
        <Swiper
      slidesPerView={4}
      spaceBetween={20}
      centeredSlides={false}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img className="" src={image1} alt="" />
        <h3 className="text-2xl uppercase text-white -mt-16 text-center">Salads</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={image2} alt="" />
        <h3 className="text-2xl uppercase text-white -mt-16 text-center">pizza</h3>

      </SwiperSlide>
      <SwiperSlide>
        <img src={image3} alt="" />
        <h3 className="text-2xl uppercase text-white -mt-16 text-center">soups</h3>

      </SwiperSlide>
      <SwiperSlide>
        <img src={image4} alt="" />
        <h3 className="text-2xl uppercase text-white -mt-16 text-center">dessert</h3>

      </SwiperSlide>
      <SwiperSlide>
        <img src={image5} alt="" />
        <h3 className="text-2xl uppercase text-white -mt-16 text-center">Salads</h3>

      </SwiperSlide>
    </Swiper>
    </section>
  );
};

export default Category;
