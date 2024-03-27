import { Component } from "react";
import "./header.scss";
// import { isVisible } from "@testing-library/user-event/dist/utils";

export class Header extends Component {
  state = {
    isDark:false , 
    isVisible:false
  }
  render() {
    const { changeLanguage } = this.props;
    const {isDark , isVisible} = this.state;
    const changeMode = () =>{
      document.body.classList.toggle('dark');
      this.setState({isDark: !isDark});
    }
    const toggle = () =>{
      this.setState({isVisible: !isVisible})
      console.log(isVisible);
    }
    return (
      <div className="header">
        <div className="navbar container">
          <div className="nav-left">
            <img className="header-logo" src="/logo.svg" alt="logo" />
            <ul>
              <li className="dropdown">
                <a className="dropbtn" href="#product">
                  Продукция
                </a>
                <div className="dropdown-content">
                  <a href="sd">Ламинатные тубы</a>
                  <a href="sd">Экструзионные тубы</a>
                  <a href="sd">Другая упаковка</a>
                </div>
              </li>
              <span className="line"></span>
              <li className="dropdown">
                <a className="dropbtn" href="#certificate">Сертификаты</a>
                <div className="dropdown-content">
                  <a href="sd">Ламинатные тубы</a>
                  <a href="sd">Экструзионные тубы</a>
                  <a href="sd">Другая упаковка</a>
                </div>
              </li>
              <span className="line"></span>
              <li className="dropdown">
                <a className="dropbtn" href="#command">Наша команда</a>
                <div className="dropdown-content">
                  <a href="sd">Ламинатные тубы</a>
                  <a href="sd">Экструзионные тубы</a>
                  <a href="sd">Другая упаковка</a>
                </div>
              </li>
              <span className="line"></span>
              <li className="dropdown">
                <a className="dropbtn" href="#about">О нас</a>
                <div className="dropdown-content">
                  <a href="sd">Ламинатные тубы</a>
                  <a href="sd">Экструзионные тубы</a>
                  <a href="sd">Другая упаковка</a>
                </div>
              </li>
              <span className="line"></span>
              <li className="dropdown">
                <a className="dropbtn" href="#news">Новости</a>
                <div className="dropdown-content">
                  <a href="sd">Ламинатные тубы</a>
                  <a href="sd">Экструзионные тубы</a>
                  <a href="sd">Другая упаковка</a>
                </div>
              </li>
              <span className="line"></span>
              <li className="dropdown">
                <a className="dropbtn" href="#vacancy">Вакансии</a>
                <div className="dropdown-content">
                  <a href="sd">Ламинатные тубы</a>
                  <a href="sd">Экструзионные тубы</a>
                  <a href="sd">Другая упаковка</a>
                </div>
              </li>
              <span className="line"></span>
              <li className="dropdown">
                <a className="dropbtn" href="#contact">Контакты</a>
                <div className="dropdown-content">
                  <a href="sd">Ламинатные тубы</a>
                  <a href="sd">Экструзионные тубы</a>
                  <a href="sd">Другая упаковка</a>
                </div>
              </li>
            </ul>
          </div>
          <div className="nav-right">
            <div className="nav-languages">
              <button onClick={() => changeLanguage('RU')} href="RU.uz">RU</button>
              <span className="line"></span>
              <button onClick={() => changeLanguage('RU')} href="UZ.uz">UZ</button>
            </div>
            <img onClick={changeMode} src={ isDark ? "/light.svg" : "/dark.svg"} alt="dark" />
            <img onClick={toggle} className="toggle-menu" src={(isDark ? "/white-menu.svg":"/menu.svg") && (isVisible ? "/close.svg":"/menu.svg")} alt="menu" />
          </div>
        </div>
        <div className={isVisible ? "toggle-show toggle-navbar " : " toggle-navbar"}>
          <ul>
            <li>
              <a href="#product">Продукция</a>
            </li>
            <li>
              <a href="#certificate">Сертификаты</a>
            </li>
            <li>
              <a href="#command">Наша команда</a>
            </li>
            <li>
              <a href="#about">О нас</a>
            </li>
            <li>
              <a href="#news">Новости</a>
            </li>
            <li>
              <a href="#vacancy">Вакансии</a>
            </li>
            <li>
              <a href="#contact">Контакты</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
