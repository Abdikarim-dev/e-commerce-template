import Alert from "../components/Alert";
import Footer from "../components/Footer";
import Header from "../components/Header";

const AboutPage = () => {
  return (
    <div>
      <Alert />
      <Header />
      <h1 className="text-5xl text-center font-semibold p-20">About Page</h1>
      <Footer />
    </div>
  );
};

export default AboutPage;
