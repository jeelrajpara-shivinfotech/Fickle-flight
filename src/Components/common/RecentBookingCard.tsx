import classIcon from "../../assets/Class.png";
import peopleIcon from "../../assets/people.png";
import flightImageSmall from "../../assets/flightIconSmall.png";
import { searchConst } from "../../Constants/SearchConstants";
import type { RecentBookingType } from "../../types/recentBooking";

interface Props {
  item: RecentBookingType;
}

export default function RecentBooking({ item }: Props) {
  return (
    <div className="w-full bg-white border border-[#EAEAEA] rounded-xl p-4">
      <div className="flex justify-between items-center flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <img src={item?.logo} alt={searchConst?.alt} className="w-6 h-6 object-contain" />
          <p className="text-[#7E8B97] text-sm">{item?.airline}</p>
        </div>
        <p className="font-semibold text-gray-900 text-lg">{item?.price}</p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-4">
        <div className="text-center sm:text-left">
          <p className="text-[#1262AF] font-bold text-lg">{item?.fromCode}</p>
          <p className="text-[#7E8B97] text-xs">{item?.fromCity}</p>
        </div>
        <div className="flex items-center justify-center">
          <img src={flightImageSmall} alt={searchConst?.alt} className="w-10" />
        </div>
        <div className="text-center sm:text-right">
          <p className="text-[#1262AF] font-bold text-lg">{item?.toCode}</p>
          <p className="text-[#7E8B97] text-xs">{item?.toCity}</p>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-6 mt-4 text-[#7E8B97] text-xs">
        <div className="flex items-center gap-1">
          <img src={classIcon} alt={searchConst?.alt}/>
          <p>{item?.class}</p>
        </div>
        <div className="flex items-center gap-1">
          <img src={peopleIcon} alt={searchConst?.alt}/>
          <p>{item?.passengers}</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-3 pt-2 text-xs border-t border-[#dbdddf] gap-1">
        <p className="text-gray-500">
          {searchConst?.bookedOn}{" "}
          <span className="text-blue-600">{item?.bookedFrom}</span>
        </p>
        <p className="text-[#FBA403] text-sm font-medium">{item?.timeAgo}</p>
      </div>
    </div>
  );
}
