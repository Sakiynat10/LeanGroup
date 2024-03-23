import { Component } from "react";
import "./commandCards.scss";

export class CommandCards extends Component {
  render() {
    const {title , subtitle , image , number_1 , number_2 , email} = this.props;
    return (
      <div className="card">
        <img src={image} alt="staff-1" />
        <div className="card-info">
          <h4 className="card-title">{title}</h4>
          <p className="card-subtitle">{subtitle}</p>
          <p className="card-first-number">{number_1}</p>
          <p className="card-second-number">{number_2? number_2:" "}</p>
          <p className="card-email">{email?email:" "}</p>
        </div>
      </div>
    );
  }
}

export default CommandCards;
