import { Component } from 'react';
import CommandCards from '../command-cards/commandCards';
import Staffs from '../data/staffs';
import "./command.scss"

export class Command extends Component {
  render() {
    return (
      <section id="command">
        <div className="container">
          <h1>Наша <span>команда</span></h1>
          <div className="command-cards">
            {Staffs.map((el)=> <CommandCards {...el}></CommandCards>)}
          </div>
          <button>Наша команда</button>
        </div>
      </section>
    )
  }
}

export default Command;