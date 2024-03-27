import { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./product.scss"

export class Product extends Component {
  render() {
    return (
      <section id="product">
        <div className="container">
          <h1 className="product-title">Наша <span>продукция</span></h1>
          <Tabs>
            <TabList className="tab-lists">
              <Tab  className="list">Ламинатные тубы</Tab>
              <Tab className="list">Экструзионные тубы</Tab>
              <Tab className="list">Другая упаковка</Tab>
            </TabList>

            <TabPanel className="tab-images">
              <img src="/product-1.png" alt="product" />
              <img src="/product-2.png" alt="product" />
              <img src="/product-3.png" alt="product" />
              <img src="/product-4.png" alt="product" />
              <img src="/product-5.png" alt="pro" />
            </TabPanel>
            <TabPanel className="tab-images">
              <img src="/product-5.jpg" alt="product" />
              <img src="/product-6.jpg" alt="product" />
              <img src="/product-7.jpg" alt="product" />
              <img src="/product-8.jpg" alt="product" />
              <img src="/product-9.jpg" alt="product" />
            </TabPanel>
            <TabPanel className="tab-images">
              <img src="/product-10.jpg" alt="product" />
              <img src="/product-11.jpg" alt="product" />
              <img src="/product-12.jpg" alt="product" />
              <img src="/product-13.jpg" alt="product" />
              <img src="/product-14.jpg" alt="product" />
            </TabPanel>
          </Tabs>
        </div>
      </section>
    );
  }
}

export default Product;
