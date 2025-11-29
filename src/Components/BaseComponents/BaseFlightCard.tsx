import flightImage from "../../assets/Flight-icons.png";
import { searchConst } from "../../Constants/SearchConstants";
import type { FlightCard } from "../../types/flightCard";

interface Props {
    item: FlightCard;
}

export default function FlightCard({ item }: Props) {
    return (
        <div className="border border-gray-200 rounded-lg p-4 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-3 mb-4 bg-white hover:shadow-md transition">
            <div className="flex items-center gap-3 lg:w-[200px] md:w-[200px] justify-center sm:justify-start">
                <img src={item?.logo} alt={searchConst?.alt} className="w-10 h-10 rounded-full object-cover" />
                <p className="font-medium text-gray-700 text-sm">{item?.airline}</p>
            </div>
            <div className="flex flex-col items-center sm:items-start w-full sm:w-auto">
                <p className="text-[#1262AF] font-semibold lg:text-lg text-xl">{item?.departureTime}</p>
                <p className="text-xs text-gray-500">{item?.departureAirport}</p>
            </div>
            <div className="flex flex-col items-center w-full sm:w-auto">
                <img src={flightImage} alt={searchConst?.alt} className="w-20" />
                <p className="text-gray-500 text-xs">
                    {item?.duration}, {item?.stops}
                </p>
            </div>
            <div className="flex flex-col items-center sm:items-start w-full sm:w-auto">
                <p className="text-[#1262AF] font-semibold lg:text-lg text-xl">{item?.arrivalTime}</p>
                <p className="text-xs text-gray-500">{item?.arrivalAirport}</p>
            </div>
            <div className="text-[#FBA403] font-bold text-lg w-full sm:w-auto text-center sm:text-left">
                {item?.price}
            </div>
        </div>
    );
}
