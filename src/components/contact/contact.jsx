import { Component } from "react";
import "./contact.scss"

export class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div className="contact-box container">
          <h2>Получить подробную <span>информацию</span></h2>
          <p>
            Просто заполните форму, наш менеджер свяжетсяс вами в ближайшее
            время
          </p>
          <div className="input-group">
            <label htmlFor="name">
              <img src="/user.svg" alt="user" />
              <input id="name" type="text" placeholder="Ваше имя" />
            </label>
            <label htmlFor="number">
              <img src="/phone.svg" alt="phone" />
              <input id="number" type="text" placeholder="+375 (29) 0000000" />
            </label>
          </div>
          <textarea placeholder="Комментарий" cols="30" rows="10"></textarea>
          <button>Получить информацию</button>
        </div>
      </section>
    );
  }
}

export default Contact;
