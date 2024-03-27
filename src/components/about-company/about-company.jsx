import { Component } from "react";
import "./about-company.scss"

export class About extends Component {
 
  render() {
    const {languageData: t} = this.props;
    return (
      <section id="about">
        <div className="container">
          <h1>
            {t.aboutTitle} <span className="highlight-title">{t.aboutSubtitle}</span>
          </h1>
          <div className="about">
            <iframe className="video-card" width="560" height="315" src="https://www.youtube.com/embed/DrE0FShBfF4?si=RIuIJxkT3ZnvAuk8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="about-info">
              <p>
                {t.aboutDesc1}
              </p>
              <p>
                {t.aboutDesc2}
              </p>
              <p>
                {t.aboutDesc3}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
