import React from "react";
import Header from "../../components/header/Header";
import Slider from "../../components/slider/Slider";
import ProductList from "../../components/productList/ProductList";
import Faq from "../../components/faq/Faq";
import TrustedBy from "../../components/trustedBy/TrustedBy";

const Home = () => {
  return (
    <div>
      <Header />
      <Slider />
      <ProductList/>
      <Faq/>
      <TrustedBy/>
    </div>
  );
};

export default Home;
