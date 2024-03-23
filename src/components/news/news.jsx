import { Component } from 'react';
import NewCards from '../new-cards/newCards';
import New from '../data/new';
import "./news.scss"

export class News extends Component {
  render() {
    return (
      <section id="news">
        <div className="container">
          <h2>Новости</h2>
          <div className="new-cards">
            {New.map((card) => <NewCards {...card}></NewCards>)}
          </div>
          <button>Все новости</button>
        </div>
      </section>
    )
  }
}

export default News;