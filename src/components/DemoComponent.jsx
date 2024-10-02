import { AiTwotoneDelete } from "react-icons/ai";
import { FaStar } from "react-icons/fa6";
import { GrCart } from "react-icons/gr";
import { LuEye } from "react-icons/lu";

const DemoComponent = ({ products, currentMonth }) => {
  return (
    <div className="flex justify-between items-center">
      {products.map((product) => (
        <div key={product.id} className="flex flex-col gap-2">
          <div className="mb-2">
            <div className="relative w-[300px] h-[250px] bg-[#f5f5f5] flex items-center justify-center">
              {(product.discountPercentage || product.new) && (
                <div
                  className={`absolute ${
                    product.new ? "bg-green-500" : "bg-[#db4444]"
                  }
                    px-3 py-1 rounded text-white left-4 top-4`}
                >
                  <span>{product.new || "-" + product.discountPercentage}</span>
                </div>
              )}

              <div className="absolute top-4 right-4 w-9 h-9 bg-white flex justify-center items-center rounded-full">
                {currentMonth ? (
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
          {/* reviews */}
          {currentMonth && (
            <div className="flex gap-[2px] items-center">
              {product.stars?.map((star, index) => (
                <FaStar key={index} className={`${star}`} />
              ))}
              <span>({product.rating})</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DemoComponent;
