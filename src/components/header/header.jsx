import { Component } from "react";
import "./header.scss";
// import { isVisible } from "@testing-library/user-event/dist/utils";
// import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export class Header extends Component {
  state = {
    isDark:false , 
    isVisible:false
  }
  
  render() {
    const { changeLanguage , languageData: t } = this.props;
    const {isDark , isVisible} = this.state;
    const changeMode = () =>{
      document.body.classList.toggle('dark');
      this.setState({isDark: !isDark});
    }
    const toggle = () =>{
      this.setState({isVisible: !isVisible})
      console.log(isVisible);
    }
    // const notify = () => toast("Wow so easy!");
    return (
      <div className="header">
        {/* <button onClick={notify}>Notify!</button> */}
        <div className="navbar container">
          <div className="nav-left">
            <img className="header-logo" src="/logo.svg" alt="logo" />
            <ul>
              <li className="dropdown">
                <a className="dropbtn" href="#product">
                  {t.products}
                </a>
                <div className="dropdown-content">
                  <a href="sd">{t.dropDownContent1}</a>
                  <a href="sd">{t.dropDownContent2}</a>
                  <a href="sd">{t.dropDownContent3}</a>
                </div>
              </li>
              <span className="line"></span>
              <li className="dropdown">
                <a className="dropbtn" href="#certificate">{t.certificate}</a>
                <div className="dropdown-content">
                  <a href="sd">{t.dropDownContent1}</a>
                  <a href="sd">{t.dropDownContent2}</a>
                  <a href="sd">{t.dropDownContent3}</a>
                </div>
              </li>
              <span className="line"></span>
              <li className="dropdown">
                <a className="dropbtn" href="#command">{t.command}</a>
                <div className="dropdown-content">
                  <a href="sd">{t.dropDownContent1}</a>
                  <a href="sd">{t.dropDownContent2}</a>
                  <a href="sd">{t.dropDownContent3}</a>
                </div>
              </li>
              <span className="line"></span>
              <li className="dropdown">
                <a className="dropbtn" href="#about">{t.about}</a>
                <div className="dropdown-content">
                  <a href="sd">{t.dropDownContent1}</a>
                  <a href="sd">{t.dropDownContent2}</a>
                  <a href="sd">{t.dropDownContent3}</a>
                </div>
              </li>
              <span className="line"></span>
              <li className="dropdown">
                <a className="dropbtn" href="#news">{t.news}</a>
                <div className="dropdown-content">
                  <a href="sd">{t.dropDownContent1}</a>
                  <a href="sd">{t.dropDownContent2}</a>
                  <a href="sd">{t.dropDownContent3}</a>
                </div>
              </li>
              <span className="line"></span>
              <li className="dropdown">
                <a className="dropbtn" href="#vacancy">{t.vacancy}</a>
                <div className="dropdown-content">
                  <a href="sd">{t.dropDownContent1}</a>
                  <a href="sd">{t.dropDownContent2}</a>
                  <a href="sd">{t.dropDownContent3}</a>
                </div>
              </li>
              <span className="line"></span>
              <li className="dropdown">
                <a className="dropbtn" href="#contact">{t.contact}</a>
                <div className="dropdown-content">
                  <a href="sd">{t.dropDownContent1}</a>
                  <a href="sd">{t.dropDownContent2}</a>
                  <a href="sd">{t.dropDownContent3}</a>
                </div>
              </li>
            </ul>
          </div>
          <div className="nav-right">
            <div className="nav-languages">
              <button onClick={() => changeLanguage('ru')} href="RU.uz">RU</button>
              <span className="line"></span>
              <button onClick={() => changeLanguage('uz')} href="UZ.uz">UZ</button>
            </div>
            <img onClick={changeMode} src={ isDark ? "/light.svg" : "/dark.svg"} alt="dark" />
            <img onClick={toggle} className="toggle-menu" src={(isDark ? "/white-menu.svg":"/menu.svg") && (isVisible ? "/close.svg":"/menu.svg")} alt="menu" />
          </div>
        </div>
        <div className={isVisible ? "toggle-show toggle-navbar " : " toggle-navbar"}>
          <ul>
            <li>
              <a href="#product">{t.products}</a>
            </li>
            <li>
              <a href="#certificate">{t.certificate}</a>
            </li>
            <li>
              <a href="#command">{t.command}</a>
            </li>
            <li>
              <a href="#about">{t.about}</a>
            </li>
            <li>
              <a href="#news">{t.news}</a>
            </li>
            <li>
              <a href="#vacancy">{t.vacancy}</a>
            </li>
            <li>
              <a href="#contact">{t.contact}</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
