// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import img1 from "../assets/images/80fcf78f-b62a-42bc-8163-60c9459b45c4.jpg";
import img2 from "../assets/images/output.jpg";
import img3 from "../assets/images/output (2).jpg";
import img4 from "../assets/images/output (1).jpg";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default function Slider ()
{
  return (
    <>
      <Swiper
        spaceBetween={ 30 }
        centeredSlides={ true }
        autoplay={ {
          delay: 2500,
          disableOnInteraction: false,
        } }
        pagination={ {
          clickable: true,
        } }
        navigation={ true }
        modules={ [ Autoplay, Pagination, Navigation ] }
        className="mySwiper !pt-10"
      >
        <SwiperSlide className='!flex justify-center items-center'>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide className='!flex justify-center items-center'>
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide className='!flex justify-center items-center'>
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide className='!flex justify-center items-center'>
          <img src={img4} alt="" />
        </SwiperSlide>

      </Swiper>
    </>
  );
};