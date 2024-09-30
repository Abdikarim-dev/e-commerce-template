import { GoArrowRight } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";

const Banner = () => {
  return (
    <div className="flex justify-between px-[135px] mb-36  font-poppins">
      {/* Sidebar lists */}
      <ul className="w-[220px] flex flex-col gap-3 border-r border-gray-300 pt-10">
        <li className="flex justify-between  items-center">
          <span>Woman’s Fashion</span>
          <MdKeyboardArrowRight size={"30"} className="pr-2" />
        </li>
        <li className="flex justify-between  items-center">
          <span>Medicine</span>
          <MdKeyboardArrowRight size={"30"} className="pr-2" />
        </li>
        <li>
          <span>Men’s Fashion</span>
        </li>
        <li>
          <span>Home & Lifestyle</span>
        </li>
        <li>
          <span>Medicine</span>
        </li>
        <li className="flex justify-between  items-center">
          <span>Sports & Outdoor</span>
          <MdKeyboardArrowRight size={"30"} className="pr-2" />
        </li>
        <li>
          <span>Baby’s & Toys</span>
        </li>
        <li>
          <span>Groceries & Pets</span>
        </li>
        <li>Health & Beauty</li>
      </ul>
      {/* Banner */}
      <div className="w-[900px] h-[344px] flex flex-col gap-5 bg-[url('/banner.svg')] bg-cover bg-center mt-10 py-16 pl-20 text-white">
        <div className="flex gap-2 items-center">
          <img src="./apple logo.svg" alt="" />
          <span>iPhone 14 Series</span>
        </div>
        <p className="font-semibold text-4xl">
          Up to 10% <br /> off Voucher
        </p>
        <div className="flex gap-2 items-center">
          <span className="underline underline-offset-8">Shop Now</span>
          <GoArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Banner;
