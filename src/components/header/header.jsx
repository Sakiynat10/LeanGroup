import { Component } from "react";
import "./header.scss";

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="navbar container">
          <div className="nav-left">
            <img src="/logo.svg" alt="logo" />
            <ul>
              <li>
                <a href="index.html">Продукция</a>
              </li>
              <span className="line"></span>
              <li>
                <a href="index.html">Сертификаты</a>
              </li>
              <span className="line"></span>
              <li>
                <a href="index.html">Наша команда</a>
              </li>
              <span className="line"></span>
              <li>
                <a href="index.html">О нас</a>
              </li>
              <span className="line"></span>
              <li>
                <a href="index.html">Новости</a>
              </li>
              <span className="line"></span>
              <li>
                <a href="index.html">Вакансии</a>
              </li>
              <span className="line"></span>
              <li>
                <a href="index.html">Контакты</a>
              </li>
            </ul>
          </div>
          <div className="nav-right">
            <div className="nav-languages">
              <a href="RU.uz">RU</a>
              <span className="line"></span>
              <a href="UZ.uz">UZ</a>
            </div>
            <img src="/dark.svg" alt="dark" />
            <img className="toggle-menu" src="/menu.svg" alt="menu" />
          </div>
        </div>
        <div className="toggle-navbar">
          <ul>
            <li>
              <a href="index.html">Продукция</a>
            </li>
            <li>
              <a href="index.html">Сертификаты</a>
            </li>
            <li>
              <a href="index.html">Наша команда</a>
            </li>
            <li>
              <a href="index.html">О нас</a>
            </li>
            <li>
              <a href="index.html">Новости</a>
            </li>
            <li>
              <a href="index.html">Вакансии</a>
            </li>
            <li>
              <a href="index.html">Контакты</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
