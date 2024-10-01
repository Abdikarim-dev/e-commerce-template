import { FaRegHeart, FaStar } from "react-icons/fa6";

import { LuEye } from "react-icons/lu";
const HomepageMain = ({ products }) => {
  return (
    <main className="flex justify-between gap-7">
      {products?.map((product) => (
        <div key={product.id} className="flex flex-col gap-2">
          <div className="relative w-[300px] h-[250px] bg-[#f5f5f5] flex items-center justify-center mb-2">
            {product.discountPercentage && (
              <div className="absolute bg-[#db4444] px-3 py-1 rounded text-white left-4 top-4">
                <span>-{product.discountPercentage}</span>
              </div>
            )}
            <div className="absolute top-4 right-4 w-9 h-9 bg-white flex justify-center items-center rounded-full">
              <FaRegHeart size={"20"} />
            </div>
            <div className="absolute top-16 right-4 w-9 h-9 bg-white flex justify-center items-center rounded-full">
              <LuEye size={"20"} />
            </div>
            <img src={product.image} alt="" />
          </div>
          <p>{product.title}</p>
          <small className="flex gap-3 items-center">
            <span className="font-medium text-[#db4444]">
              {product.discountPrice}
            </span>
            <span className="line-through text-gray-400">
              {product.oldPrice}
            </span>
          </small>
          {/* reviews */}
          <div className="flex gap-[2px] items-center">
            {product.stars?.map((star, index) => (
              <FaStar key={index} className={`${star}`} />
            ))}
            <span>({product.rating})</span>
          </div>
        </div>
      ))}
    </main>
  );
};

export default HomepageMain;

// todays sales -- object
// this month sales
// all products sales

