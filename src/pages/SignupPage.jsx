import { FcGoogle } from "react-icons/fc";
import Alert from "../components/Alert";
import Footer from "../components/Footer";
import Header from "../components/Header";

const SignupPage = () => {
  return (
    <div>
      <Alert />
      <Header />
      <hr />
      <main className="flex items-center gap-28 font-poppins mt-14 mb-28">
        <img src="./Side Image.svg" className="w-[800px] h-[780px]" alt="" />
        <div>
          <div className="pb-12">
            <h2 className="text-4xl font-medium pb-5">Create an account</h2>
            <h3>Enter your details below</h3>
          </div>
          <form className="flex flex-col gap-10">
            <input
              className="py-2 border-b outline-none"
              placeholder="Name"
              type="text"
            />
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
            <button className="bg-[#DB4444] px-28 py-2 rounded text-white">
              Create Account
            </button>
            <button className="border border-black flex items-center gap-2 px-28 py-2 rounded">
              <FcGoogle size={"24"} />
              Sign up With Google
            </button>
            <div className="flex justify-center items-center gap-2">
              <span>Already have account?</span>
              <span className="font-semibold underline underline-offset-8">Log in</span>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignupPage;
