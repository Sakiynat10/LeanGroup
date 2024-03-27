import { Component } from 'react';
import "./footer.scss"

export class Footer extends Component {
  render() {
    const {languageData:t} = this.props;
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
                <a href="#footer">{t.product}</a>
              </li>
              <li>
                <a href="sd">{t.dropDownContent1}</a>
              </li>
              <li>
                <a href="sd">{t.dropDownContent2}</a>
              </li>
              <li>
                <a href="sd">{t.dropDownContent3}</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#footer">{t.footerCompany}</a>
              </li>
              <li>
                <a href="#about">{t.about}</a>
              </li>
              <li>
                <a href="#command">{t.command}</a>
              </li>
              <li>
                <a href="#certificate">{t.certificate}</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#footer">{t.footerSections}</a>
              </li>
              <li>
                <a href="#contact">{t.contact}</a>
              </li>
              <li>
                <a href="#news">{t.news}</a>
              </li>
              <li>
                <a href="#vacancy">{t.vacancy}</a>
              </li>
            </ul>
            <ul className='number-row'>
              <p>{t.footerCountry1}</p>
              <li>+375 (17) 270 53 77</li>
              <li>+375 (17) 270 53 78</li>
              <p>{t.footerCountry2}</p>
              <li>+7 (495) 280 73 44</li>
              <li>+7 (495) 280 73 44</li>
            </ul>
            <ul className='number-row--bottom'>
              <p>{t.footerCountry3}</p>
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