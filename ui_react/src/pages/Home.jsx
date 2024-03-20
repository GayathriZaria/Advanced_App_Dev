import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        spaceBetween={0} 
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 500,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        autoplay={{
          delay: 250, 
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://m.media-amazon.com/images/I/41pF14lotPL._AC_UF894,1000_QL80_.jpg" style={{ height: '300px', width: '300px' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.royalgifts.co.in/wp-content/uploads/2019/01/01-4-1.jpg" style={{ height: '300px', width: '300px' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://m.media-amazon.com/images/I/71BxrBBrN+L._AC_UF1000,1000_QL80_.jpg" style={{ height: '300px', width: '300px' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://wehatke.com/public/uploads/all/MMRsSNvXiFYWhciUZaQeW7eo6qFRGCjg7sydFb68.jpg" style={{ height: '300px', width: '300px' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.etsystatic.com/23513616/r/il/da18de/3089711105/il_570xN.3089711105_jmp2.jpg" style={{ height: '300px', width: '300px' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt9prodlp/products/p-best-of-us-personalized-memories-frame-272793-m.jpg" style={{ height: '300px', width: '300px' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.kuberlo.com/cdn/shop/products/BoxMockups_3_600X600.png?v=1676869176" style={{ height: '300px', width: '300px' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://assets.winni.in/product/primary/2014/10/53130.jpeg?dpr=2&w=220" style={{ height: '300px', width: '300px' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.fnp.com/images/pr/m/v20221003124141/personalised-table-clock-for-couples.jpg" style={{ height: '300px', width: '300px' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://5.imimg.com/data5/SELLER/Default/2022/4/ID/FQ/AK/86942937/shatkon-rotating-lamp-1656-2129-1-diybaazar61d5ba366b331-250x250.jpg" style={{ height: '300px', width: '300px' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://confettigifts.in/cdn/shop/files/IMG_3999_1.jpg?v=1695273931&width=1080" style={{ height: '300px', width: '300px' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://5.imimg.com/data5/JP/FV/MY-34893615/unique-gifts-500x500.jpg" style={{ height: '300px', width: '300px' }} />
        </SwiperSlide>
      </Swiper>
      <br/>
      <div className="homepage-container">
      <h1 style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', color: '#333', fontSize: '2.5rem', fontWeight: 'bold', fontStyle: 'italic' }}>Welcome to Hash It Out Customized Gifts!</h1>
      <p style={{ fontFamily: 'Georgia, serif', textAlign: 'center', color: '#555', fontSize: '1.2rem', fontStyle: 'italic' }}>About Us: Making Memories, One Gift at a Time</p>
      <blockquote style={{ fontFamily: 'Verdana, sans-serif', textAlign: 'center', color: '#777', fontSize: '1.5rem', fontWeight: 'bold' }}>Unleash Your Creativity and Design the Perfect Present</blockquote>
      <p style={{ fontFamily: 'Times New Roman, serif', textAlign: 'center', color: '#999', fontSize: '1.1rem', fontStyle: 'italic' }}>Browse Our Collection of Unique and Thoughtful Gifts</p>
      <blockquote style={{ fontFamily: 'Courier New, monospace', textAlign: 'center', color: '#BBB', fontSize: '1.3rem', fontWeight: 'bold' }}>Let Your Imagination Soar with Our Customization Options</blockquote>
    </div>
      </>
  );
}
