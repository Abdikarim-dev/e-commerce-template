import HomePageHeader from "./HomePageHeader";
import HomepageMain from "./HomepageMain";

const products = [
  {
    id: 1,
    title: "Breed Dry Dog Food",
    oldPrice: "$80",
    // discountPrice: "$260",
    image: "./products/dog food.svg",
    rating: 29,
    stars: [
      "text-[#FFAD33]",
      "text-[#FFAD33]",
      "text-[#FFAD33]",
      "text-[#FFAD33]",
      "text-gray-300",
    ],
  },
  {
    id: 2,
    title: "CANON EOS DSLR Camera",
    oldPrice: "$360",
    // discountPrice: "$260",
    image: "./products/canon.svg",
    rating: 86,
    stars: [
      "text-[#FFAD33]",
      "text-[#FFAD33]",
      "text-[#FFAD33]",
      "text-[#FFAD33]",
      "text-gray-300",
    ],
  },
  {
    id: 3,
    title: "ASUS FHD Gaming Laptop",
    oldPrice: "$700",
    // discountPrice: "$260",
    image: "./products/laptop.svg",
    rating: 325,
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
    title: "Curology Product Set ",
    oldPrice: "$500",
    // discountPrice: "$260",
    image: "./products/skin care.svg",
    rating: 145,
    stars: [
      "text-[#FFAD33]",
      "text-[#FFAD33]",
      "text-[#FFAD33]",
      "text-[#FFAD33]",
      "text-[#FFAD33]",
    ],
  },
  {
    id: 5,
    title: "Kids Electric Car",
    oldPrice: "$500",
    // discountPrice: "$260",
    image: "./products/car.svg",
    rating: 145,
    new: true,
    stars: [
      "text-[#FFAD33]",
      "text-[#FFAD33]",
      "text-[#FFAD33]",
      "text-[#FFAD33]",
      "text-[#FFAD33]",
    ],
  },
  {
    id: 6,
    title: "Jr. Zoom Soccer Cleats",
    oldPrice: "$1160",
    // discountPrice: "$260",
    image: "./products/soccer boot.svg",
    rating: 175,
    new: true,
    colors: ["#10B981", "#F59E0B"],
    stars: [
      "text-[#FFAD33]",
      "text-[#FFAD33]",
      "text-[#FFAD33]",
      "text-[#FFAD33]",
      "text-[#FFAD33]",
    ],
  },

  {
    id: 7,
    title: "GP11 Shooter USB Gamepad",
    oldPrice: "$660",
    // discountPrice: "$260",
    image: "./products/usb gamepad.svg",
    rating: 25,
    // new: true,
    colors: ["#8B5CF6", "#10B981"],
    stars: [
      "text-[#FFAD33]",
      "text-[#FFAD33]",
      "text-[#FFAD33]",
      "text-[#FFAD33]",
      "text-[#FFAD33]",
    ],
  },
  {
    id: 8,
    title: "Quilted Satin Jacket",
    oldPrice: "$660",
    // discountPrice: "$260",
    image: "./products/jacket.svg",
    rating: 25,
    // new: true,
    colors: ["#10B981", "#8B5CF6"],
    stars: [
      "text-[#FFAD33]",
      "text-[#FFAD33]",
      "text-[#FFAD33]",
      "text-[#FFAD33]",
      "text-[#FFAD33]",
    ],
  },
];

const Products = () => {
  return (
    <div className="px-[135px] font-poppins">
      <HomePageHeader name={"Our Products"} title={"Explore Our Products"} />
      <HomepageMain products={products} changeStarsPosition={true} />
      <footer className="text-center py-14">
        <button className="bg-[#db4444] px-12 py-4 rounded text-white mb-[135px]">
          View All Products
        </button>
      </footer>
    </div>
  );
};
// appearance-none w-6 h-6 border-2 border-black rounded-full cursor-pointer
export default Products;
// background-color: #f44336; /* Red color */
//   border-color: #f44336; #ffeb3b
