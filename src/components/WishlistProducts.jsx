import { AiTwotoneDelete } from "react-icons/ai";
import { FaStar } from "react-icons/fa6";
import { GrCart } from "react-icons/gr";

import { LuEye } from "react-icons/lu";

const WishlistProducts = ({ products, displayStarsAndOutsideWishlist }) => {
  return (
    <main className="grid grid-cols-4 justify-between gap-7">
      {products?.map((product) => (
        <div key={product.id} className="flex flex-col gap-2">
          <div className="mb-2">
            <div className="relative w-[300px] h-[250px] bg-[#f5f5f5] flex items-center justify-center">
              {(product.new || product.discountPercentage) && (
                <div
                  className={`absolute 
                    ${product.new ? "bg-[#00FF66]" : "bg-[#db4444]"}
                    px-3 py-1 rounded text-white left-4 top-4`}
                >
                  <span>{product.new || product.discountPercentage}</span>
                </div>
              )}
              <div className="absolute top-4 right-4 w-9 h-9 bg-white flex justify-center items-center rounded-full">
                {displayStarsAndOutsideWishlist ? (
                  <LuEye size={"24"} />
                ) : (
                  <AiTwotoneDelete size={"24"} />
                )}
              </div>
              <img src={product.image} alt="" />
            </div>
            <div className="bg-black text-white w-[300px] flex justify-center items-center gap-2 py-2">
              <GrCart size={"26"} />
              <span>Add To Cart</span>
            </div>
          </div>

          <p className="font-medium">{product.title}</p>
          <small className="flex gap-2 items-center">
            <span className="font-medium text-[#db4444]">
              {product.discountPrice}
            </span>
            <span
              className={`${
                product.discountPrice ? "line-through" : ""
              } text-gray-400`}
            >
              {product.oldPrice}
            </span>
          </small>
          {displayStarsAndOutsideWishlist && (
            <div className="flex gap-[2px] items-center">
              {product.stars?.map((star, index) => (
                <FaStar key={index} className={`${star}`} />
              ))}
              <span>({product.rating})</span>
            </div>
          )}
        </div>
      ))}
    </main>
  );
};

export default WishlistProducts;

// todays sales -- object
// this month sales
// all products sales
