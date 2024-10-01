import HomePageHeader from "./HomePageHeader";

const Categories = () => {
  return (
    <div className="px-[135px] font-poppins ">
      {/* Categories Header using reusable component */}
      <HomePageHeader
        discountSales={false}
        name={"Categories"}
        title={"Browse By Category"}
      />
      <main className="flex justify-between items-center gap-7">
        <div className="flex flex-col justify-center items-center gap-3 w-44 h-36 border border-gray-300 rounded">
          <img src="./categories/Category-CellPhone.svg" alt="" />
          <span className="text-lg">Phones</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 w-44 h-36 border border-gray-300 rounded">
          <img
            src="./categories/Category-Computer.svg"
            alt=""
            className="w-14 h-14 text-white"
          />
          <span className="text-lg">Computers</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 w-44 h-36 border border-gray-300 rounded">
          <img src="./categories/Category-SmartWatch.svg" alt="" />
          <span className="text-lg">Smart Watch</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 w-44 h-36 border border-gray-300 rounded">
          <img src="./categories/Category-Camera.svg" alt="" />
          <span className="text-lg">Cameras</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 w-44 h-36 border border-gray-300 rounded">
          <img src="./categories/Category-Headphone.svg" alt="" />
          <span className="text-lg">Headphones</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 w-44 h-36 border border-gray-300 rounded">
          <img src="./categories/Category-Gamepad.svg" alt="" />
          <span className="text-lg">Gaming</span>
        </div>
      </main>
      <div className="w-full h-4 border-b my-[70px]" />
    </div>
  );
};

export default Categories;
