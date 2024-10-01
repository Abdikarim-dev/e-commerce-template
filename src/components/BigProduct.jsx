const BigProduct = () => {
  return (
    <div className="px-[135px] pb-[70px] font-poppins">
      <div className="flex flex-col justify-center gap-8 w-full h-[500px] pl-14 mx-auto bg-[url('/background.svg')] bg-cover bg-center">
        <h2
          style={{ lineHeight: "1.25" }}
          className="w-[440px] text-white text-5xl font-semibold"
        >
          Enhance Your Music Experience
        </h2>
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 bg-white flex flex-col justify-center items-center rounded-full">
            <span className="font-bold text-xl">05</span>
            <span className="text-sm">Days</span>
          </div>
          <div className="w-20 h-20 bg-white flex flex-col justify-center items-center rounded-full">
            <span className="font-bold text-xl">23</span>
            <span className="text-sm">Hours</span>
          </div>
          <div className="w-20 h-20 bg-white flex flex-col justify-center items-center rounded-full">
            <span className="font-bold text-xl">59</span>
            <span className="text-sm">Minutes</span>
          </div>
          <div className="w-20 h-20 bg-white flex flex-col justify-center items-center rounded-full">
            <span className="font-bold text-xl">35</span>
            <span className="text-sm">Seconds</span>
          </div>
        </div>
        <div>
          <button className="px-12 py-4 bg-[#00FF66] text-white rounded font-medium">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BigProduct;
