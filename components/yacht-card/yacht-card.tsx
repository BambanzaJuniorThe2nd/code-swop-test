import { GoHeart } from "react-icons/go";
import { BiGroup } from "react-icons/bi";
import { LiaBedSolid } from "react-icons/lia";
import { AiFillStar } from "react-icons/ai";
import { YachtData } from "@/common.types";
import numeral from "numeral";

const YachtCard = ({ data }: { data: YachtData }) => {
  return (
    <div className="w-[22.5rem] h-[24.375rem]">
      <div className="relative">
        <GoHeart
          className="absolute right-3 top-3 text-white"
          size={"1.5rem"}
        />
        <div className="w-full h-[17.9375rem] rounded-[12px]">
          <img
            className="w-full h-full rounded-[12px]"
            src="/yacht-image.jpg"
            alt="A yacht image"
          />
        </div>
      </div>
      <div>
        <div className="flex mt-2 justify-between">
          <span className="font-bold text-[#202D31]">{data.yacht_name}</span>
          <div className="flex items-center justify-between">
            <div className="flex items-center mr-3">
              <BiGroup className="mr-1 text-[#5E9199]" size={"1rem"} />
              <span className="text-xs font-light">{data.pax}</span>
            </div>
            <div className="flex items-center">
              <LiaBedSolid className="mr-1 text-[#5E9199]" size={"1rem"} />
              <span className="text-xs font-light">
                {data.number_of_cabins}
              </span>
            </div>
          </div>
        </div>
        <span className="text-xs font-light block text-[#3D5F67]">
          {data.length} Ft {data.fuel_type}
        </span>
        <span className="text-xs font-light block mt-1 text-[#3D5F67]">
          {data.year_built} {data.manufacturer}
        </span>
        <div className="flex items-center justify-between mt-1">
          <span className="text-xs font-light">
            From{" "}
            <span className="font-bold">
              ${numeral(data.price).format("0,0")}
            </span>{" "}
            / week
          </span>
          <span className="flex items-center">
            <AiFillStar className="mr-1" size={"1rem"} />
            <span className="text-xs font-bold">{data.rating}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default YachtCard;
