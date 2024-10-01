import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Categories from "../components/Categories";
import FeaturedInThisMonth from "../components/FeaturedInThisMonth";
import BigProduct from "../components/BigProduct";
import Products from "../components/Products";
import NewArrivals from "../components/NewArrivals";
import Services from "../components/Services";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Features />
      <Categories />
      <FeaturedInThisMonth />
      <BigProduct />
      <Products />
      <NewArrivals />
      <Services />
      <Footer />
    </div>
  );
};

export default HomePage;
