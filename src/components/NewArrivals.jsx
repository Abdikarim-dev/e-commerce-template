import HomePageHeader from "./HomePageHeader";

const NewArrivals = () => {
  return (
    <div className="px-[135px] font-poppins pb-[100px]">
      <HomePageHeader title={"New Arrival"} name={"Featured"} />
      <main className="flex justify-between items-center gap-[30px] text-white">
        <div className="px-8 py-8 flex flex-col gap-4 items-start justify-end w-[640px] h-[600px] bg-[url('./new-arrivals/playstation.svg')] bg-cover bg-center">
          <h2 className="text-2xl font-medium">PlayStation 5</h2>
          <p className="text-sm">
            Black and White version of the <br /> PS5 coming out on sale.
          </p>
          <button className="underline underline-offset-[6px] font-medium">
            Shop Now
          </button>
        </div>

        <div>
          <div className="px-8 py-8 flex flex-col gap-4 items-start justify-end w-[640px] h-[284px] bg-[url('./new-arrivals/background-hat.svg')] bg-cover bg-center">
            <h2 className="text-2xl font-medium">Women’s Collections</h2>
            <p className="text-sm">
              Featured woman collections that <br /> give you another vibe.
            </p>
            <button className="underline underline-offset-[6px] font-medium">
              Shop Now
            </button>
          </div>
          <div className="flex justify-between mt-8">
            <div className="px-6 py-6 flex flex-col gap-2 items-start justify-end w-[300px] h-[284px] bg-[url('./new-arrivals/speakers.svg')] bg-cover bg-center">
              <h2 className="text-2xl font-medium">Speakers</h2>
              <p className="text-sm">Amazon wireless speakers</p>
              <button className="underline underline-offset-[6px] font-medium">
                Shop Now
              </button>
            </div>
            <div className="px-6 py-6 flex flex-col gap-2 items-start justify-end w-[300px] h-[284px] bg-[url('./new-arrivals/gucci-perfume.svg')] bg-cover bg-center">
              <h2 className="text-2xl font-medium">Perfume</h2>
              <p className="text-sm">GUCCI INTENSE OUD EDP</p>
              <button className="underline underline-offset-[6px] font-medium">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default NewArrivals;
