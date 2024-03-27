import { Component } from "react";

// Import Swiper React components
import {   Swiper, SwiperSlide } from "swiper/react";

import {Autoplay , Pagination , Navigation } from "swiper/modules";

import "./hero.scss";

export class Hero extends Component {
  render() {
    return (
      <section id="hero">
          <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay , Pagination , Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className="slide">
              <div className="container">
              <div className="hero-carousel">
                <div className="hero-info">
                  <h4>LEANGROUP - тубы и этикетки</h4>
                  <h2>Ламинатные тубы</h2>
                  <p>
                    Используются для производства зубных паст. Широко
                    применяются в сегменте косметики, пищевой индустрии,
                    парафармацевтике, бытовой химии и DIY (Do-it-Yourself).
                  </p>
                  <button>Каталог</button>
                </div>
                <div className="hero-medias">
                  <a href="#a">
                    <img src="/vk.svg" alt="wk" />
                  </a>
                  <a href="#a">
                    <img src="/fb.svg" alt="fb" />
                  </a>
                  <a href="#a">
                    <img src="/ln.svg" alt="ln" />
                  </a>
                </div>
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide">
            <div className="container">
              <div className="hero-carousel">
                <div className="hero-info">
                  <h4>LEANGROUP - тубы и этикетки</h4>
                  <h2>Ламинатные тубы</h2>
                  <p>
                    Используются для производства зубных паст. Широко
                    применяются в сегменте косметики, пищевой индустрии,
                    парафармацевтике, бытовой химии и DIY (Do-it-Yourself).
                  </p>
                  <button>Каталог</button>
                </div>
                <div className="hero-medias">
                  <a href="#a">
                    <img src="/vk.svg" alt="wk" />
                  </a>
                  <a href="#a">
                    <img src="/fb.svg" alt="fb" />
                  </a>
                  <a href="#a">
                    <img src="/ln.svg" alt="ln" />
                  </a>
                </div>
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide">
              <div className="container">
              <div className="hero-carousel">
                <div className="hero-info">
                  <h4>LEANGROUP - тубы и этикетки</h4>
                  <h2>Ламинатные тубы</h2>
                  <p>
                    Используются для производства зубных паст. Широко
                    применяются в сегменте косметики, пищевой индустрии,
                    парафармацевтике, бытовой химии и DIY (Do-it-Yourself).
                  </p>
                  <button>Каталог</button>
                </div>
                <div className="hero-medias">
                  <a href="#a">
                    <img src="/vk.svg" alt="wk" />
                  </a>
                  <a href="#a">
                    <img src="/fb.svg" alt="fb" />
                  </a>
                  <a href="#a">
                    <img src="/ln.svg" alt="ln" />
                  </a>
                </div>
              </div>
              </div>
            </SwiperSlide>
          </Swiper>
      </section>
    );
  }
}

export default Hero;
