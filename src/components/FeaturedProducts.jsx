import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const FeaturedProducts = () => {
  return (
    <div className="font-poppins">
      <header>
        {/* Title */}
        <div className="flex items-center">
          <div className="w-5 h-10 bg-[#DB4444] rounded"></div>
          <h2 className="font-semibold text-[#db4444]">Today’s</h2>
        </div>
        {/* Main Header */}
        <div>
          {/* title */}
          <h2>Flash Sales</h2>
          {/* Counter */}
          <div>
            <div>
              <span>Days</span>
              <span>03</span>
            </div>
            {/* Separator */}
            <div>
              <span>Hours</span>
              <span>23</span>
            </div>
            {/* Separator */}
            <div>
              <span>Minutes</span>
              <span>00</span>
            </div>
            {/* Separator */}
            <div>
              <span>Seconds</span>
              <span>23</span>
            </div>
          </div>
          {/* Move left/right Arrows*/}
          <div>
            <div>
              <GoArrowLeft />
            </div>
            <div>
              <GoArrowRight />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default FeaturedProducts;
