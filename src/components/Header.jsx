import { useState } from "react";
import { CiLogout } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa6";
import { GrCart } from "react-icons/gr";
import { HiOutlineStar } from "react-icons/hi";
import { LiaTimesCircleSolid } from "react-icons/lia";
import { LuShoppingBag, LuUser } from "react-icons/lu";
import { RiSearchLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };
  return (
    <div className="flex justify-between items-center h-[90px] px-[135px] font-poppins border-b border-gray-300">
      {/* brand */}
      <h2 className="text-2xl  font-bold pb-2">Exclusive</h2>

      {/* Navigations */}
      <ul className="flex items-center gap-12">
        <NavLink to={"/"} className="cursor-pointer">
          Home
        </NavLink>
        <NavLink to={"/about"} className="cursor-pointer">
          About
        </NavLink>
        <NavLink to={"/contact"} className="cursor-pointer">
          Contact
        </NavLink>

        <NavLink to={"/signup"} className="cursor-pointer">
          Sign Up
        </NavLink>
        <NavLink to={"/login"} className="cursor-pointer">
          Log in
        </NavLink>
      </ul>
      <div className="flex justify-center items-center gap-6">
        <div className="relative">
          <input
            placeholder="What are you looking for?"
            className="bg-[#F5F5F5] w-[250px] outline-none py-3 pl-5 pr-10 rounded-md text-[12px]"
            type="text"
          />
          <RiSearchLine className="absolute top-3 right-4 cursor-pointer" />
        </div>

        <div className="relative">
          <NavLink className={"cursor-pointer"} to={"/wishlist"}>
            <FaRegHeart size={"26"} />
            <div className="absolute cursor-pointer bottom-3 left-3 bg-[#DB4444] text-white w-6 h-6 flex justify-center items-center rounded-full p-2">
              <small className="font-bold">2</small>
            </div>
          </NavLink>
        </div>

        <div className="relative">
          <GrCart className="cursor-pointer" size={"26"} />
          <div className="absolute cursor-pointer bottom-3 left-3 bg-[#DB4444] text-white w-6 h-6 flex justify-center items-center rounded-full p-2">
            <small className="font-bold">2</small>
          </div>
        </div>

        <div className="relative">
          <div
            onClick={toggleMenu}
            className="flex justify-center items-center px-2.5 py-2 bg-[#DB4444] w-10 h-10 rounded-full"
          >
            <LuUser className="cursor-pointer text-white" size={"40"} />
          </div>
          {toggle && (
            <div className="w-[250px] absolute top-14 right-0 rounded bg-gradient-to-b from-darkpurple to-customblack px-5 py-8">
              <ul className="text-white flex flex-col gap-4">
                <li className="flex items-center gap-4">
                  <LuUser size={"28"} />
                  <span>Manage My Account</span>
                </li>
                <li className="flex items-center gap-4">
                  <LuShoppingBag size={"28"} />
                  <span>My Order</span>
                </li>
                <li className="flex items-center gap-4">
                  <LiaTimesCircleSolid size={"28"} />
                  <span>My Cancellations</span>
                </li>
                <li className="flex items-center gap-4">
                  <HiOutlineStar size={"28"} />
                  <span>My Reviews</span>
                </li>
                <li className="flex items-center gap-4">
                  <CiLogout size={"28"} />
                  <span>Logout</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
