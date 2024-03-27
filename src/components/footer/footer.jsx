import { Component } from 'react';
import "./footer.scss"

export class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="footer-top">
            <img className='footer-logo' src="/logo.svg" alt="logo" />
            <div className="social-media">
              <a href="asilbek.com">
                <img src="/vk.svg" alt="vk" />
              </a>
              <a href="asilbek.com">
                <img src="/fb.svg" alt="fb" />
              </a>
              <a href="asilbek.com">
                <img src="/ln.svg" alt="ln" />
              </a>
            </div>
          </div>
          <span className='line'></span>
          <div className="footer-bottom">
            <ul>
              <li>
                <a href="#footer">Продукция</a>
              </li>
              <li>
                <a href="sd">Ламинатные тубы</a>
              </li>
              <li>
                <a href="sd">Экструзионные тубы</a>
              </li>
              <li>
                <a href="sd">Другая упаковка</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#footer">Компания</a>
              </li>
              <li>
                <a href="#about">О нас</a>
              </li>
              <li>
                <a href="#command">Наша команда</a>
              </li>
              <li>
                <a href="#certificate">Сертификаты</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#footer">Разделы</a>
              </li>
              <li>
                <a href="#contact">Контакты</a>
              </li>
              <li>
                <a href="#news">Новости</a>
              </li>
              <li>
                <a href="#vacancy">Вакансии</a>
              </li>
            </ul>
            <ul className='number-row'>
              <p>Беларусь</p>
              <li>+375 (17) 270 53 77</li>
              <li>+375 (17) 270 53 78</li>
              <p>Москва</p>
              <li>+7 (495) 280 73 44</li>
              <li>+7 (495) 280 73 44</li>
            </ul>
            <ul className='number-row--bottom'>
              <p>Европа</p>
              <li>+375 (17) 270 53 77</li>
              <p>Екатеринбург</p>
              <li>+7 (495) 280 73 44</li>
            </ul>
          </div>
          <p className='subtitle'>© 2022 Leangroup. All Rights Reserved.
            Разработка и продвижение сайтов SkyWeb.by
          </p>
        </div>
      </footer>
    )
  }
}

export default Footer;