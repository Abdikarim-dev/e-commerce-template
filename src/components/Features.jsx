import HomePageHeader from "./HomePageHeader";
import HomepageMain from "./HomepageMain";

const currentDay = [
  {
    id: 1,
    title: "HAVIT HV-G92 Gamepad",
    oldPrice: "$360",
    discountPrice: "$260",
    discountPercentage: "40%",
    image: "./features/controller.svg",
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
    id: 2,
    title: "AK-900 Wired Keyboard",
    oldPrice: "$1160",
    discountPrice: "$960",
    discountPercentage: "35%",
    image: "./features/keyboard.svg",
    rating: 77,
    stars: [
      "text-[#FFAD33]",
      "text-[#FFAD33]",
      "text-[#FFAD33]",
      "text-[#FFAD33]",
      "text-[#FFAD33]",
    ],
  },
  {
    id: 3,
    title: "S-Series Comfort Chair",
    oldPrice: "$170",
    discountPrice: "$160",
    discountPercentage: "30%",
    image: "./features/chair.svg",
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
    id: 4,
    title: "IPS LCD Gaming Monitor",
    oldPrice: "$360",
    discountPrice: "$260",
    discountPercentage: "25%",
    image: "./features/lcd display.svg",
    rating: 401,
    stars: [
      "text-[#FFAD33]",
      "text-[#FFAD33]",
      "text-[#FFAD33]",
      "text-[#FFAD33]",
      "text-gray-300",
    ],
  },
];

const Features = () => {
  return (
    <div className="font-poppins px-[135px] pb-10">
      <HomePageHeader
        name={"Today’s"}
        title={"Flash Sales"}
        discountSales={true}
      />
      <HomepageMain products={currentDay} />
      <footer className="text-center py-14">
        <button className="bg-[#db4444] px-12 py-4 rounded text-white">
          View All Products
        </button>
      </footer>
    </div>
  );
};

export default Features;