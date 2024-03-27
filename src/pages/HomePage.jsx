import { Component, Fragment } from "react";
import Hero from "../components/hero/hero";
import About from "../components/about-company/about-company";
import Certificate from "../components/certificate/certificate";
import Product from "../components/products/product";
import Contact from "../components/contact/contact";
import Command from "../components/command/command";
import News from "../components/news/news";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import UZ from "../components/data/uz";
import RU from "../components/data/ru";

export class HomePage extends Component {
  state = {
    language: 'ru'
  }
  render() {
    const {language} = this.state;
    const changeLanguage = (language) => {
      this.setState({language})
    }

    const languagesData = {
      ru: RU,
      uz:UZ
    }

    const languageData = languagesData[ language ]

    return (
      <Fragment>
        <Header languageData={languageData} changeLanguage={changeLanguage}/>
        <Hero languageData={languageData} />
        <About languageData={languageData} />
        <Certificate languageData={languageData}/>
        <Product languageData={languageData}/>
        <Contact languageData={languageData}/>
        <Command languageData={languageData}/>
        <News languageData={languageData}/>
        <Footer languageData={languageData}/>
      </Fragment>
    );
  }
}

export default HomePage;
