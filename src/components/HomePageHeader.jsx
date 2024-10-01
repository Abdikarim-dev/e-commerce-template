import { GoArrowLeft, GoArrowRight } from "react-icons/go";
const HomePageHeader = ({ name, title, discountSales, isMonthComponent }) => {
  return (
    <header>
      {/* Title */}
      <div className="flex gap-2.5 items-center pb-4">
        <div className="w-5 h-10 bg-[#DB4444] rounded"></div>
        <h2 className="font-semibold text-[#db4444]">{name}</h2>
      </div>
      {/* Main Header */}
      <div className="flex justify-between items-center">
        {/* title */}
        <h2 className="text-4xl font-semibold pb-6">{title}</h2> 
        {/* Counter */}
        {discountSales && (
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
        )}
        {isMonthComponent ? (
          <button className="px-12 py-4 mb-6 bg-[#db4444] text-white rounded">
            View All
          </button>
        ) : (
          // Move left/right Arrows
          <div className="flex items-center gap-2 pb-6">
            <div className="w-12 h-12 rounded-full bg-[#F5F5F5] flex items-center justify-center">
              <GoArrowLeft size={"24"} />
            </div>
            <div className="w-12 h-12 rounded-full bg-[#F5F5F5] flex items-center justify-center">
              <GoArrowRight size={"24"} />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default HomePageHeader;
