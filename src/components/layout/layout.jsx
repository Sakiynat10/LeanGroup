import { Component, Fragment } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

export class Layout extends Component {
  render() {
    
    return (
      <Fragment>
        <Header />
        {this.props.children}
        <Footer />
      </Fragment>
    )
  }
}

export default Layout;