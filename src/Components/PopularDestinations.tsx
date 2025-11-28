import BaseHeader from "./BaseComponents/BaseHeader";
import { destinations, popularDestinationConst } from "../Constants/popularDestinations";

export default function PopularDestinations() {
  return (
    <div className="container mx-auto lg:px-16 px-4 py-10 font-robotto">
      <BaseHeader 
        title={popularDestinationConst?.popularDestination} 
        subtitle={popularDestinationConst?.nextTrip} 
        viewAll={popularDestinationConst?.viewAll}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 items-center px-4">
        
        {destinations?.map((item, i) => (
          <div
            key={i}
            className="relative rounded-xl overflow-hidden shadow-sm cursor-pointer group"
          >
            <img
              src={item?.img}
              alt={item?.title ?? "destination image"}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 p-4 flex justify-between">
              <p className="text-white font-semibold text-lg">{item?.title}</p>

              <div className="text-right text-white">
                <div className="opacity-80">{popularDestinationConst?.from}</div>
                <div className="text-2xl font-bold">{item?.price}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
