import { FaRegHeart, FaStar } from "react-icons/fa6";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { LuEye } from "react-icons/lu";

const Features = () => {
  return (
    <div className="font-poppins px-[135px] pb-10">
      <header>
        {/* Title */}
        <div className="flex gap-2.5 items-center pb-6">
          <div className="w-5 h-10 bg-[#DB4444] rounded"></div>
          <h2 className="font-semibold text-[#db4444]">Today’s</h2>
        </div>
        {/* Main Header */}
        <div className="flex justify-between">
          {/* title */}
          <h2 className="text-4xl font-semibold">Flash Sales</h2>
          {/* Counter */}
          <div className="flex gap-4 pb-6">
            <div className="flex flex-col">
              <span className="font-medium text-sm">Days</span>
              <span className="flex items-center p-1 gap-2">
                <span className="text-2xl font-bold">03</span>
                {/* Separator */}
                <span className="font-bold text-[#db4444] text-2xl pl-4 pb-2">
                  :
                </span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-sm">Hours</span>
              <span className="flex items-center p-1 gap-2">
                <span className="text-2xl font-bold">23</span>
                {/* Separator */}
                <span className="font-bold text-[#db4444] text-2xl pl-4 pb-2">
                  :
                </span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-sm">Minutes</span>
              <span className="flex items-center p-1 gap-2">
                <span className="text-2xl font-bold">19</span>
                {/* Separator */}
                <span className="font-bold text-[#db4444] text-2xl pl-4 pb-2">
                  :
                </span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-sm">Seconds</span>
              <span className="flex items-center p-1 gap-2">
                <span className="text-2xl font-bold">56</span>
                {/* Separator */}
                <span
                  className="font-bold text-[#db4444] text-2xl pl-4 pb-2"
                  style={{ visibility: "hidden" }}
                >
                  :
                </span>
              </span>
            </div>
          </div>
          {/* Move left/right Arrows*/}
          <div className="flex items-center gap-2 pb-6">
            <div className="w-12 h-12 rounded-full bg-[#F5F5F5] flex items-center justify-center">
              <GoArrowLeft size={"24"} />
            </div>
            <div className="w-12 h-12 rounded-full bg-[#F5F5F5] flex items-center justify-center">
              <GoArrowRight size={"24"} />
            </div>
          </div>
        </div>
      </header>
      <main className="flex justify-between gap-7">
        <div className="flex flex-col gap-2">
          <div className="relative w-[300px] h-[250px] bg-[#f5f5f5] flex items-center justify-center mb-2">
            <div className="absolute bg-[#db4444] px-3 py-1 rounded text-white left-4 top-4">
              <span>-40%</span>
            </div>
            <div className="absolute top-4 right-4 w-9 h-9 bg-white flex justify-center items-center rounded-full">
              <FaRegHeart size={"20"} />
            </div>
            <div className="absolute top-16 right-4 w-9 h-9 bg-white flex justify-center items-center rounded-full">
              <LuEye size={"20"} />
            </div>
            <img src="./features/controller.svg" alt="" />
          </div>
          <p>HAVIT HV-G92 Gamepad</p>
          <small className="flex gap-3 items-center">
            <span className="font-medium text-[#db4444]">$120</span>
            <span className="line-through text-gray-400">$160</span>
          </small>
          {/* reviews */}
          <div className="flex gap-[2px] items-center">
            <FaStar className="text-[#FFAD33]" />
            <FaStar className="text-[#FFAD33]" />
            <FaStar className="text-[#FFAD33]" />
            <FaStar className="text-[#FFAD33]" />
            <FaStar className="text-[#FFAD33]" />
            <span>(88)</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="relative w-[300px] h-[250px] bg-[#f5f5f5] flex items-center justify-center mb-2">
            <div className="absolute bg-[#db4444] px-3 py-1 rounded text-white left-4 top-4">
              <span>-35%</span>
            </div>
            <div className="absolute top-4 right-4 w-9 h-9 bg-white flex justify-center items-center rounded-full">
              <FaRegHeart size={"20"} />
            </div>
            <div className="absolute top-16 right-4 w-9 h-9 bg-white flex justify-center items-center rounded-full">
              <LuEye size={"20"} />
            </div>
            <img src="./features/keyboard.svg" alt="" />
          </div>
          <p>AK-900 Wired Keyboard</p>
          <small className="flex gap-3 items-center">
            <span className="font-medium text-[#db4444]">$960</span>
            <span className="line-through text-gray-400">$1160</span>
          </small>
          {/* reviews */}
          <div className="flex gap-[2px] items-center">
            <FaStar className="text-[#FFAD33]" />
            <FaStar className="text-[#FFAD33]" />
            <FaStar className="text-[#FFAD33]" />
            <FaStar className="text-[#FFAD33]" />
            <FaStar className="text-gray-300" />
            <span>(88)</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="relative w-[300px] h-[250px] bg-[#f5f5f5] flex items-center justify-center mb-2">
            <div className="absolute bg-[#db4444] px-3 py-1 rounded text-white left-4 top-4">
              <span>-30%</span>
            </div>
            <div className="absolute top-4 right-4 w-9 h-9 bg-white flex justify-center items-center rounded-full">
              <FaRegHeart size={"20"} />
            </div>
            <div className="absolute top-16 right-4 w-9 h-9 bg-white flex justify-center items-center rounded-full">
              <LuEye size={"20"} />
            </div>
            <img src="./features/lcd display.svg" alt="" />
          </div>
          <p>AK-900 Wired Keyboard</p>
          <small className="flex gap-3 items-center">
            <span className="font-medium text-[#db4444]">$370</span>
            <span className="line-through text-gray-400">$400</span>
          </small>
          {/* reviews */}
          <div className="flex gap-[2px] items-center">
            <FaStar className="text-[#FFAD33]" />
            <FaStar className="text-[#FFAD33]" />
            <FaStar className="text-[#FFAD33]" />
            <FaStar className="text-[#FFAD33]" />
            <FaStar className="text-[#FFAD33]" />
            <span>(88)</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="relative w-[300px] h-[250px] bg-[#f5f5f5] flex items-center justify-center mb-2">
            <div className="absolute bg-[#db4444] px-3 py-1 rounded text-white left-4 top-4">
              <span>-25%</span>
            </div>
            <div className="absolute top-4 right-4 w-9 h-9 bg-white flex justify-center items-center rounded-full">
              <FaRegHeart size={"20"} />
            </div>
            <div className="absolute top-16 right-4 w-9 h-9 bg-white flex justify-center items-center rounded-full">
              <LuEye size={"20"} />
            </div>
            <img src="./features/chair.svg" alt="" />
          </div>
          <p>S-Series Comfort Chair </p>
          <small className="flex gap-3 items-center">
            <span className="font-medium text-[#db4444]">$375</span>
            <span className="line-through text-gray-400">$400</span>
          </small>
          {/* reviews */}
          <div className="flex gap-[2px] items-center">
            <FaStar className="text-[#FFAD33]" />
            <FaStar className="text-[#FFAD33]" />
            <FaStar className="text-[#FFAD33]" />
            <FaStar className="text-[#FFAD33]" />
            <FaStar className="text-gray-300" />
            <span>(88)</span>
          </div>
        </div>
      </main>
      <footer className="text-center py-14">
        <button className="bg-[#db4444] px-12 py-4 rounded text-white">
          View All Products
        </button>
      </footer>
    </div>
  );
};

export default Features;
