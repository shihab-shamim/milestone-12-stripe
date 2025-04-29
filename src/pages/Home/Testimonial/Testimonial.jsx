import { useEffect, useState } from 'react';
import SectionTitle from '../../../componets/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonial = () => {
    const [reviews,setReviews]=useState([])

    useEffect(()=>{
        fetch("./reviews.json")
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    
   
    return (
        <section>
            <SectionTitle headding={"TESTIMONIALS"} subHeadding={"---What Our Clients Say---"} />
          
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
       {
        reviews.map(review=> <SwiperSlide key={review._id} >
            <div className='my-16 mx-24 flex flex-col justify-center items-center'>
            <Rating readOnly style={{ maxWidth: 250 }} value={review?.rating}  />
                <p>{review?.details}</p>
                <h3 className='text-2xl text-yellow-400'>{review.name}</h3>
            </div>

            
        </SwiperSlide>)
       }
        
      </Swiper>
        </section>
    );
};

export default Testimonial;