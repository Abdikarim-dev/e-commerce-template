import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Alert = () => {
  return (
    <div className=" bg-black font-poppins text-white py-3">
      <p className="text-center text-sm flex items-center justify-center">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
        <small className="pl-2 text-base font-semibold underline-offset-4 underline">Shop Now</small>
      </p>

      <div className="relative">
        <p className="absolute right-24 bottom-0 flex items-center gap-2">
          English <MdOutlineKeyboardArrowDown size={"26"} />
        </p>
      </div>
    </div>
  );
};

export default Alert;
