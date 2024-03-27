import { Component } from 'react';
import CommandCards from '../command-cards/commandCards';
import "./command.scss"

export class Command extends Component {
  render() {
    const {languageData: t} = this.props;
    return (
      <section id="command">
        <div className="container">
          <h1>{t.commandTitle}<span>{t.commandSubtitle}</span></h1>
          <div className="command-cards">
            {t.Staffs.map((el)=> <CommandCards {...el}></CommandCards>)}
          </div>
          <button>{t.commandBtn}</button>
        </div>
      </section>
    )
  }
}

export default Command;