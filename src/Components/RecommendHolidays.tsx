import BaseHeader from "./BaseComponents/BaseHeader";
import { holidayConst, holidays } from "../Constants/recommendConstants";

export default function RecommendedHolidays() {
  return (
    <div className="container mx-auto lg:px-16 px-4 py-10 font-robotto">
      <BaseHeader title={holidayConst?.title} viewAll={holidayConst?.viewAll}/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 items-center px-4">
        {holidays?.map((item, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-200 shadow-sm overflow-hidden"
          >
            <img
              src={item?.image}
              alt={item?.title}
              className="w-full object-cover"
            />
            <div className="p-3">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg font-medium text-[#424242]">{item?.title}</p>
                  <p className="text-sm text-[#999999]">{item?.days}</p>
                </div>
                <p className="text-3xl font-bold text-[#1262AE]">{item?.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
