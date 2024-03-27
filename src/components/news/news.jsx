import { Component } from 'react';
import NewCards from '../new-cards/newCards';
import "./news.scss"

export class News extends Component {
  render() {
    const {languageData:t } = this.props;
    return (
      <section id="news">
        <div className="container">
          <h2>{t.newsTitle}</h2>
          <div className="new-cards">
            {t.New.map((card) => <NewCards {...card}></NewCards>)}
          </div>
          <button>{t.newsBtn}</button>
        </div>
      </section>
    )
  }
}

export default News;