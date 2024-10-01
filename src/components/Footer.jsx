import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { IoSendOutline } from "react-icons/io5";
import { RiFacebookLine } from "react-icons/ri";
import { TiSocialLinkedin } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="bg-black flex justify-between px-[135px] pt-[80px] pb-[60px] text-white font-poppins">
      {/* Exclusive Info */}
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl  font-bold pb-2">Exclusive</h2>
        <p className="text-xl">Subscribe</p>
        <p className="text-sm">Get 10% off your first order</p>
        <div className="relative">
          <input
            placeholder="Enter your email"
            className="bg-transparent border border-white rounded-md outline-none text-gray-300 py-3 px-4"
            type="text"
          />
          <IoSendOutline
            className="absolute right-3 top-3 cursor-pointer"
            size={"26"}
          />
        </div>
      </div>
      {/* Support Info */}
      <div className="w-[175px]">
        <h2 className="text-xl font-medium pb-6">Support</h2>
        <ul className="flex flex-col gap-3 text-sm">
          <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
          <li>exclusive@gmail.com</li>
          <li>+88015-88888-9999</li>
        </ul>
      </div>
      {/* Account Info */}
      <div>
        <h2 className="text-xl font-medium pb-6">Account</h2>
        <ul className="flex flex-col gap-3 text-sm">
          <li>My Account</li>
          <li>Login / Register</li>
          <li>Cart</li>
          <li>Wishlist</li>
          <li>Shop</li>
        </ul>
      </div>
      {/* Quick Link */}
      <div>
        <h2 className="text-xl font-medium pb-6">Quick Link</h2>
        <ul className="flex flex-col gap-3 text-sm">
          <li>Privacy Policy</li>
          <li>Terms Of Use</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>
      </div>
      {/* Contact us On */}
      <div className="w-[200px] flex flex-col gap-4">
        <h2 className="text-xl font-medium pb-2">Download App</h2>
        <p className="text-[12px] font-light">Save $3 with App New User Only</p>
        {/* Guidance Pictures */}
        <div className="flex justify-center items-center gap-2">
          <img src="./footer/Qrcode 1.svg" alt="" />
          <div className="flex flex-col gap-3">
            <img src="./footer/google-play-app.svg" alt="" />
            <img src="./footer/download-appstore.svg" alt="" />
          </div>
        </div>
        {/* Icons */}
        <div className="flex gap-6 pt-2">
          <RiFacebookLine size={"24"} />
          <FaInstagram size={"24"} />
          <FaXTwitter size={"24"} />
          <TiSocialLinkedin size={"24"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
