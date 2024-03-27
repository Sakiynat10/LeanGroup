import { Component } from "react";
import "./contact.scss"

export class Contact extends Component {
  render() {
    const {languageData: t} = this.props;
    return (
      <section id="contact">
        <div className="contact-box container">
          <h2>{t.contactTitle}<span>{t.contactSubtitle}</span></h2>
          <p>
            {t.contactDescription}
          </p>
          <div className="input-group">
            <label htmlFor="name">
              <img src="/user.svg" alt="user" />
              <input id="name" type="text" placeholder={t.contactName} />
            </label>
            <label htmlFor="number">
              <img src="/phone.svg" alt="phone" />
              <input id="number" type="text" placeholder="+375 (29) 0000000" />
            </label>
          </div>
          <textarea placeholder={t.contactCommentary} cols="30" rows="10"></textarea>
          <button>{t.contactBtn}</button>
        </div>
      </section>
    );
  }
}

export default Contact;
