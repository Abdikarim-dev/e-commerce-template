import { FaRegHeart, FaStar } from "react-icons/fa6";

import { LuEye } from "react-icons/lu";
const HomepageMain = ({ products, changeStarsPosition }) => {
  return (
    <main className="grid grid-cols-4 justify-between gap-7">
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
          <small className="flex items-center">
            <span className="font-medium text-[#db4444]">
              {product.discountPrice}
            </span>
            <span className="line-through text-gray-400">
              {product.oldPrice}
            </span>
            {changeStarsPosition && (
              <div className="ml-3 flex gap-[2px] items-center">
                {product.stars?.map((star, index) => (
                  <FaStar key={index} className={`${star}`} />
                ))}
                <span>({product.rating})</span>
              </div>
            )}
          </small>
          {/* reviews */}
          {!changeStarsPosition && (
            <div className="flex gap-[2px] items-center">
              {product.stars?.map((star, index) => (
                <FaStar key={index} className={`${star}`} />
              ))}
              <span>({product.rating})</span>
            </div>
          )}
          {/* Colors of the radio boxes */}
          <div className="flex space-x-4 mt-2">
            {product.colors?.map((color, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name={`color-${product.id}`} // Add a name attribute that groups radio buttons by product
                  className={`
          checked:ring-2 checked:ring-black 
          appearance-none w-6 h-6 border-2 
          rounded-full cursor-pointer`}
                  style={{ backgroundColor: color, borderColor: color }} // Use inline style for dynamic color
                />
              </label>
            ))}
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
