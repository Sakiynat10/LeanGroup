import { Component } from 'react';
import Hero from '../components/hero/hero';
import About from '../components/about-company/about-company';
import Certificate from '../components/certificate/certificate';
import Product from '../components/products/product';
import Contact from '../components/contact/contact';
import Command from '../components/command/command';
import News from '../components/news/news';
import Layout from '../components/layout/layout';



export class HomePage extends Component {
  state = {
    language: 'en'
  }
  render() {
    const changeLanguage = ( language ) => {
      console.log( language );
      }
    return (
      <Layout changeLanguages={changeLanguage} >
        <Hero />
        <About />
        <Certificate />
        <Product/>
        <Contact/>
        <Command/>
        <News />
      </Layout>
    )
  }
}

export default HomePage;