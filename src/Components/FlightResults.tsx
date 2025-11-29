import { filterSections, flightResults, recentlyBooked, searchConst } from "../Constants/SearchConstants";
import RecentBooking from "./BaseComponents/BaseBookingCard";
import BaseButton from "./BaseComponents/BaseButton";
import FlightCard from "./BaseComponents/BaseFlightCard";
import BaseCheckbox from "./BaseComponents/BaseCheckbox";
export default function FlightResults() {
    return (
        <div className="w-full flex justify-center py-10 bg-[#f7f9fc]">
            <div className="container mx-auto lg:px-16 py-4 px-4 w-full grid grid-cols-1 lg:grid-cols-12 gap-6">
                <aside className="lg:col-span-3">
                    <h3 className="text-sm text-gray-500 pb-5 mb-7 border-b border-gray-200">
                        {searchConst?.outOf}
                    </h3>
                    <div className="grid grid-cols-2 gap-6 lg:grid-cols-1">
                        {filterSections?.map((section, i) => (
                            <div key={i} className="mb-6">
                                <h4 className="font-semibold text-gray-700 mb-2">{section?.title}</h4>

                                <div className="space-y-2">
                                    {section?.options.map((opt, j) => (
                                        <BaseCheckbox key={j} label={opt}/>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </aside>
                <main className="lg:col-span-6 ">
                    <h3 className="text-sm text-gray-500 mb-4">{searchConst?.outOf}</h3>
                    {flightResults?.map((item, i) => (
                        <FlightCard key={i} item={item} />
                    ))}
                    <BaseButton text="Show more results" className="px-3 py-5" bgColor="bg-[#1262AF]" textColor="text-white" />
                </main>
                <aside className="lg:col-span-3">
                    <h3 className="text-sm text-[#1262AF] mb-4 font-bold uppercase">{searchConst?.recentlyBooked}</h3>
                    <div className="space-y-4">
                        {recentlyBooked?.map((item, i) => (
                            <RecentBooking key={i} item={item} />
                        ))}
                    </div>
                    <BaseButton
                        text="Show More"
                        width="w-full"
                        bgColor="bg-[#1262AF0F]"
                        textColor="text-[#1262AF]"
                        className="mt-3 py-3"
                    />
                </aside>
            </div>
        </div>
    );
}


