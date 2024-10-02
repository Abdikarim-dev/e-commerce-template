import { FaStar } from "react-icons/fa6";
import Footer from "./Footer";
import Header from "./Header";
import { GrUpdate } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";
import { FiMinus, FiPlus } from "react-icons/fi";
import { IoHeartOutline } from "react-icons/io5";

const ProductDetails = () => {
  return (
    <div className="font-poppins">
      <Header />
      <header className="px-[135px]">
        <ul className="flex gap-3 items-center py-20 text-[#7D8184] text-sm">
          <li className="cursor-pointer">Account</li>/
          <li className="cursor-pointer">Gaming</li>/
          <li className="text-black font-medium cursor-pointer">
            Havic HV G-92 Gamepad
          </li>
        </ul>
      </header>
      <main className="px-[135px] flex gap-20 pb-20">
        <div className="flex gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-center bg-[#f5f5f5] w-[170px] h-[138px]">
              <img src="./product/controller-1.svg" alt="" />
            </div>
            <div className="flex items-center justify-center bg-[#f5f5f5] w-[170px] h-[138px]">
              <img src="./product/controller-2.svg" alt="" />
            </div>
            <div className="flex items-center justify-center bg-[#f5f5f5] w-[170px] h-[138px]">
              <img src="./product/controller-3.svg" alt="" />
            </div>
            <div className="flex items-center justify-center bg-[#f5f5f5] w-[170px] h-[138px]">
              <img src="./product/controller-4.svg" alt="" />
            </div>
          </div>
          <div className="flex justify-center items-center bg-[#f5f5f5] w-[500px] h-[600px]">
            <img src="./product/controller-5.svg" alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <header className="flex flex-col gap-3">
            <h2 className="font-semibold text-2xl">Havic HV G-92 Gamepad</h2>
            <div>
              <div className="flex gap-4">
                <div className="flex gap-1 items-center">
                  <FaStar className="text-[#FFAD33]" />
                  <FaStar className="text-[#FFAD33]" />
                  <FaStar className="text-[#FFAD33]" />
                  <FaStar className="text-[#FFAD33]" />
                  <FaStar className="text-[#FFAD33]" />
                </div>
                <p>(150 Reviews)</p>
                <div className="bg-gray-500 border-r-[2px]"></div>
                <small className="text-[#00FF66] text-sm">In Stock</small>
              </div>
            </div>
            <small className="text-2xl">$192.00</small>
          </header>
          {/* content */}
          <p className="text-sm w-[400px]">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </p>
          {/* Separator */}
          <div className="bg-gray-500 border-b-[2px]" />
          {/* Color of the controller */}
          <div className="flex gap-2 items-center">
            <h2 className="text-xl">Colours:</h2>
            {/* Colors of the radio boxes */}
            {/* <div className="flex items-center space-x-4"> */}

            <input
              type="radio"
              name={`color-1`} // Add a name attribute that groups radio buttons by product
              className={`
          checked:ring-2 checked:ring-black 
          appearance-none w-6 h-6 border-2 
          rounded-full cursor-pointer`}
              style={{ backgroundColor: "#8B5CF6", borderColor: "#8B5CF6" }} // Use inline style for dynamic color
            />

            <input
              type="radio"
              name={`color-1`} // Add a name attribute that groups radio buttons by product
              className={`
          checked:ring-2 checked:ring-black 
          appearance-none w-6 h-6 border-2 
          rounded-full cursor-pointer`}
              style={{
                backgroundColor: "#10B981",
                borderColor: "#10B981",
              }} // Use inline style for dynamic color
            />

            {/* </div> */}
          </div>
          {/* Select size of the controller */}
          <div className="flex gap-6 items-center">
            <h2 className="text-xl">Size:</h2>
            <div className="flex items-center gap-4">
              <button className="w-10 h-10 text-lg font-medium flex justify-center items-center rounded border-gray-400 border">
                XS
              </button>
              <button className="w-10 h-10 text-lg font-medium flex justify-center items-center rounded border-gray-400 border">
                S
              </button>
              <button className="w-10 h-10 text-lg font-medium flex justify-center items-center rounded bg-[#db4444] text-white">
                M
              </button>
              <button className="w-10 h-10 text-lg font-medium flex justify-center items-center rounded border-gray-400 border">
                L
              </button>
              <button className="w-10 h-10 text-lg font-medium flex justify-center items-center rounded border-gray-400 border">
                XL
              </button>
            </div>
          </div>
          {/* Add And Minus feature */}
          <div className="flex items-center gap-4">
            <div className="flex">
              <button className="rounded-s-md border border-gray-400 px-2 py-2.5">
                <FiMinus size={"24"} />
              </button>
              <button className="border border-gray-400 py-2.5 px-8 text-xl font-medium">
                2
              </button>
              <button className="rounded-e-md px-2 py-2.5 text-white bg-[#db4444]">
                <FiPlus size={"24"} />
              </button>
            </div>
            <div className="px-12 py-3 text-xl bg-[#db4444] rounded text-white font-medium">
              Buy Now
            </div>
            <button className="border border-gray-400 rounded p-2">
              <IoHeartOutline size={"32"} />
            </button>
          </div>
          {/* Last place */}
          <div className="h-[180px] border border-gray-400 rounded">
            <div className="flex items-center p-4 gap-4 h-[90px]">
              <TbTruckDelivery size={"36"} />
              <div>
                <h2 className="font-medium text-lg">Free Delivery</h2>
                <p className="text-sm underline font-medium">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>
            {/* Separator */}
            <div className="bg-gray-400 border-b-[1px]" />
            <div className="flex items-center p-4 gap-4 h-[90px]">
              <GrUpdate size={"28"} />
              <div>
                <h2 className="font-medium text-lg">Return Delivery</h2>
                <p className="text-sm font-medium">
                  Free 30 Days Delivery Returns. Details
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetails;
