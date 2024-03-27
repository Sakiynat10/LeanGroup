import { Component, Fragment } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

export class Layout extends Component {
  render() {
    const changeLanguage = ( language ) => {
      console.log( language );
    }
    return (
      <Fragment>
        <Header changeLanguages={changeLanguage}/>
        {this.props.children}
        <Footer />
      </Fragment>
    )
  }
}

export default Layout;