import HomePageHeader from "./HomePageHeader";
import HomepageMain from "./HomepageMain";
const currentMonth = [
  {
    title: "The north coat",
    oldPrice: "$360",
    discountPrice: "$260",
    image: "./features/hoodie.svg",
    rating: 86,
    stars: [
      "text-[#FFAD33]",
      "text-[#FFAD33]",
      "text-[#FFAD33]",
      "text-[#FFAD33]",
      "text-[#FFAD33]",
    ],
  },
  {
    title: "Gucci duffle bag",
    oldPrice: "$1160",
    discountPrice: "$960",
    image: "./features/gucci bag.svg",
    rating: 77,
    stars: [
      "text-[#FFAD33]",
      "text-[#FFAD33]",
      "text-[#FFAD33]",
      "text-[#FFAD33]",
      "text-gray-300",
    ],
  },
  {
    title: "RGB liquid CPU Cooler",
    oldPrice: "$170",
    discountPrice: "$160",
    image: "./features/cooler.svg",
    rating: 188,
    stars: [
      "text-[#FFAD33]",
      "text-[#FFAD33]",
      "text-[#FFAD33]",
      "text-[#FFAD33]",
      "text-[#FFAD33]",
    ],
  },
  {
    title: "Small BookSelf",
    oldPrice: "$360",
    // discountPrice: "$260",
    image: "./features/bookshelf.svg",
    rating: 401,
    stars: [
      "text-[#FFAD33]",
      "text-[#FFAD33]",
      "text-[#FFAD33]",
      "text-[#FFAD33]",
      "text-[#FFAD33]",
    ],
  },
];
const FeaturedInThisMonth = () => {
  return (
    <div className="font-poppins px-[135px] pb-[140px]">
      <HomePageHeader
        isMonthComponent={true}
        title={"Best Selling Products"}
        name={"This Month"}
      />
      <HomepageMain products={currentMonth} />
    </div>
  );
};

export default FeaturedInThisMonth;
