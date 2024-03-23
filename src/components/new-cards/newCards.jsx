import { Component } from 'react';
import "./new-cards.scss"

export class newCards extends Component {
  render() {
    const {image , data , description} = this.props;
    return (
      <div className='new-card'>
        <img src={image} alt="img" />
        <div className="new-card__info">
          <p className='card-data'>{data}</p>
          <p>{description}</p>
        </div>
      </div>
    )
  }
}

export default newCards;