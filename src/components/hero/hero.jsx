import { Component } from "react";

// Import Swiper React components
import {   Swiper, SwiperSlide } from "swiper/react";

import {Autoplay , Pagination , Navigation } from "swiper/modules";

import "./hero.scss";

export class Hero extends Component {
  render() {
    const { languageData: t } = this.props;
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
                  <h4>{t.heroTitle}</h4>
                  <h2>{t.heroSubtitle}</h2>
                  <p>
                    {t.heroDescription}
                  </p>
                  <button>{t.heroBtn}</button>
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
                  <h4>{t.heroTitle}</h4>
                  <h2>{t.heroSubtitle}</h2>
                  <p>
                    {t.heroDescription}
                  </p>
                  <button>{t.heroBtn}</button>
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
                  <h4>{t.heroTitle}</h4>
                  <h2>{t.heroSubtitle}</h2>
                  <p>
                    {t.heroDescription}
                  </p>
                  <button>{t.heroBtn}</button>
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
