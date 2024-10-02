import { GrCart } from "react-icons/gr";
import Footer from "./Footer";
import Header from "./Header";
import { AiTwotoneDelete } from "react-icons/ai";
import DemoComponent from "./DemoComponent";

const currentDay = [
  {
    id: 1,
    title: "HAVIT HV-G92 Gamepad",
    oldPrice: "$360",
    // discountPrice: "$260",
    // discountPercentage: "40%",
    new: "New",
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
    // discountPrice: "$160",
    // discountPercentage: "30%",
    image: "./features/chair.svg",
    rating: 188,
    // new: "New",
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
const currentMonth = [
  {
    title: "The north coat",
    oldPrice: "$1660",
    discountPrice: "$960",
    discountPercentage: "35%",
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
    discountPercentage: "35%",
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
    new: "New",
    stars: [
      "text-[#FFAD33]",
      "text-[#FFAD33]",
      "text-[#FFAD33]",
      "text-[#FFAD33]",
      "text-[#FFAD33]",
    ],
  },
];
const Demo = () => {
  return (
    <div>
      <div className="font-poppins">
        <Header />
        <main className="px-[135px] pt-20">
          <header className="flex justify-between items-center pb-14">
            <h4 className="text-xl">Wishlist (4)</h4>
            <button className="py-4 px-12 border border-black rounded">
              Move All To Bag
            </button>
          </header>
          <DemoComponent products={currentDay} />
          <header className="flex justify-between items-center pb-14 pt-20">
            {/* Title */}
            <div className="flex gap-2.5 items-center pb-4">
              <div className="w-5 h-10 bg-[#DB4444] rounded"></div>
              <h2 className="text-xl">Just For You</h2>
            </div>
            <button className="py-4 px-12 border border-black rounded">
              See All
            </button>
          </header>
          <DemoComponent currentMonth={true} products={currentMonth} />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Demo;
