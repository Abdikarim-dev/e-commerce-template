import { FcGoogle } from "react-icons/fc";
import Alert from "../components/Alert";
import Footer from "../components/Footer";
import Header from "../components/Header";

const LoginPage = () => {
  return (
    <div>
      <Alert />
      <Header />
      
      <main className="flex items-center gap-28 font-poppins mt-14 mb-28">
        <img src="./Side Image.svg" className="w-[800px] h-[780px]" alt="" />
        <div>
          <div className="pb-12">
            <h2 className="text-4xl font-medium pb-5">Login into Exclusives</h2>
            <h3>Enter your details below</h3>
          </div>
          <form className="flex flex-col gap-10">
            <input
              className="py-2 border-b outline-none"
              placeholder="Email or Phone Number"
              type="text"
            />
            <input
              className="py-2 border-b outline-none"
              placeholder="Password"
              type="password"
            />

            <div className="flex justify-between items-center gap-2">
              <button className="bg-[#DB4444] px-12 py-4 rounded text-white">
                Login
              </button>
              <span className="text-[#DB4444]">Forget Password?</span>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
