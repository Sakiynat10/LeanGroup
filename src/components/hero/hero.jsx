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
                  <a href="https://www.bing.com/ck/a?!&&p=bbed671e772e03ccJmltdHM9MTcxMTQ5NzYwMCZpZ3VpZD0wNTdjMGZmZC02ZmYyLTY3ZTQtM2I3YS0xYzNkNmVmNDY2YmMmaW5zaWQ9NTI0NA&ptn=3&ver=2&hsh=3&fclid=057c0ffd-6ff2-67e4-3b7a-1c3d6ef466bc&psq=%40asilbek_xoliyorov&u=a1aHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3B1YmxpYy9Bc2lsYmVrLVhvbGl5b3Jvdi8&ntb=1">
                    <img src="/vk.svg" alt="wk" />
                  </a>
                  <a href="https://r.search.yahoo.com/_ylt=AwrFeUsWlARmLQQAEKhXNyoA;_ylu=Y29sbwNiZjEEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1712785687/RO=10/RU=https%3a%2f%2fwww.instagram.com%2fasilbekxoliyorov%2f/RK=2/RS=UrBpR.5ccGR6O4_BCx6OJZEhVUI-">
                    <img src="/fb.svg" alt="fb" />
                  </a>
                  <a href="https://www.linkedin.com/in/asilbek-xoliyorov-58127a2aa/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B8%2FKkwuctRE6B4rubZv2sew%3D%3D">
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
                  <a href="https://www.bing.com/ck/a?!&&p=bbed671e772e03ccJmltdHM9MTcxMTQ5NzYwMCZpZ3VpZD0wNTdjMGZmZC02ZmYyLTY3ZTQtM2I3YS0xYzNkNmVmNDY2YmMmaW5zaWQ9NTI0NA&ptn=3&ver=2&hsh=3&fclid=057c0ffd-6ff2-67e4-3b7a-1c3d6ef466bc&psq=%40asilbek_xoliyorov&u=a1aHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3B1YmxpYy9Bc2lsYmVrLVhvbGl5b3Jvdi8&ntb=1">
                    <img src="/vk.svg" alt="wk" />
                  </a>
                  <a href="https://r.search.yahoo.com/_ylt=AwrFeUsWlARmLQQAEKhXNyoA;_ylu=Y29sbwNiZjEEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1712785687/RO=10/RU=https%3a%2f%2fwww.instagram.com%2fasilbekxoliyorov%2f/RK=2/RS=UrBpR.5ccGR6O4_BCx6OJZEhVUI-">
                    <img src="/fb.svg" alt="fb" />
                  </a>
                  <a href="https://www.linkedin.com/in/asilbek-xoliyorov-58127a2aa/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B8%2FKkwuctRE6B4rubZv2sew%3D%3D">
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
                  <a href="https://www.bing.com/ck/a?!&&p=bbed671e772e03ccJmltdHM9MTcxMTQ5NzYwMCZpZ3VpZD0wNTdjMGZmZC02ZmYyLTY3ZTQtM2I3YS0xYzNkNmVmNDY2YmMmaW5zaWQ9NTI0NA&ptn=3&ver=2&hsh=3&fclid=057c0ffd-6ff2-67e4-3b7a-1c3d6ef466bc&psq=%40asilbek_xoliyorov&u=a1aHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3B1YmxpYy9Bc2lsYmVrLVhvbGl5b3Jvdi8&ntb=1">
                    <img src="/vk.svg" alt="wk" />
                  </a>
                  <a href="https://r.search.yahoo.com/_ylt=AwrFeUsWlARmLQQAEKhXNyoA;_ylu=Y29sbwNiZjEEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1712785687/RO=10/RU=https%3a%2f%2fwww.instagram.com%2fasilbekxoliyorov%2f/RK=2/RS=UrBpR.5ccGR6O4_BCx6OJZEhVUI-">
                    <img src="/fb.svg" alt="fb" />
                  </a>
                  <a href="https://www.linkedin.com/in/asilbek-xoliyorov-58127a2aa/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B8%2FKkwuctRE6B4rubZv2sew%3D%3D">
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
