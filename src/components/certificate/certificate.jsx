import { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation, EffectCoverflow , Pagination } from "swiper/modules";
import "./certificate.scss";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

export class Certificate extends Component {
  render() {
    return (
      <section id="certificate">
        <div className="container">
          <h1 className="certificate-title">Качество продукции подтверждают <span>сертификаты</span></h1>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              500: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              678: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              900: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            effect={'coverflow'}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 0.5,
              slideShadows: false,
            }}
    
  
            navigation={true}
            modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className="swiper-slid">
              <img src="/certificate-1.png" alt="certificate" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slid">
              <img src="/certificate-2.png" alt="certificate" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slid">
              <img src="/certificate-3.png" alt="certificate" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slid">
              <img src="/certificate-4.png" alt="certificate" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slid">
              <img src="/certificate-5.png" alt="certificate" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slid">
              <img src="/certificate-1.png" alt="certificate" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slid">
              <img src="/certificate-2.png" alt="certificate" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slid">
              <img src="/certificate-3.png" alt="certificate" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slid">
              <img src="/certificate-4.png" alt="certificate" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slid">
              <img src="/certificate-5.png" alt="certificate" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    );
  }
}

export default Certificate;
