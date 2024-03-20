import { IoIosArrowForward } from "react-icons/io";
import { CiCircleQuestion } from "react-icons/ci";
export const Revenue = ({ title, ordercount, amounts }) => {
  return (
    <div className="bg-white rounded shadow-md p-4 hover:bg-red-400">
      <div className="text-gray-700 flex gap-2 " > <p className="mt-[-5px]">{title}</p>
      <i className="text-bold"><CiCircleQuestion /></i>
      </div>
      <div className="flex justify-between pt-2">
        <div className="font-semibold text-2xl">$ {amounts}</div>
        {ordercount ? (
          <div className="flex gap-2 cursor-pointer underline font-medium  flex-col justify-between ">
            <div className="flex gap-2">
              <div className="m-[-4px] text-blue-700">{ordercount} orders</div>
              <i className="text-blue-700">
                <IoIosArrowForward />
              </i>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
