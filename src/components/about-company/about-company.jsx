import { Component } from "react";
import "./about-company.scss"

export class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="container">
          <h1>
            О компании <span className="highlight-title">LEANGROUP</span>
          </h1>
          <div className="about">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/DrE0FShBfF4?si=RIuIJxkT3ZnvAuk8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="about-info">
              <p>
                Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и
                на сегодняшний день является ведущей компанией по производству
                ламинатных и экструзионных туб.
              </p>
              <p>
                Имея две технологии – для производства ламинатных и
                экструзионных туб, мы предлагаем вам широкий спектр
                возможностей. Большим преимуществом является собственный
                печатный цех в ламинате и in-line печать в экструзии с
                возможностью различных дополнительных опций декора. Особое
                внимание уделяется работе с поставщиками для контроля и
                поддержания качества производимой нами продукции.
              </p>
              <p>
                С января 2018 года компания стала членом Европейской Ассоциации
                производителей туб (ETMA), что подтверждает сильную позицию
                бренда и на рынке Европы.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
