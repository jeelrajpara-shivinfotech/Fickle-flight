import BaseHeader from "./BaseComponents/BaseHeader";
import video from "../assets/video.png";
import star from "../assets/Vector.png"
import BaseButton from "./BaseComponents/BaseButton";
import { popularStayConstants, stays } from "../Constants/PopularStays";
export default function PopularStays() {
    return (
        <div className="container mx-auto lg:px-16 px-4 py-10 font-robotto">
            <BaseHeader title={popularStayConstants?.title} viewAll={popularStayConstants?.viewAll} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 items-center px-4">
                {stays?.map((item, i) => (
                    <div
                        key={i}
                        className="rounded-xl border border-gray-200 shadow-sm overflow-hidden bg-white"
                    >
                        <div className=" border rounded-lg border-gray-100 p-2 border-b-0">
                            <img
                                src={item?.image}
                                alt={item?.title}
                                className="w-full object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <div className="flex items-start justify-between">
                                <p className="text-sm text-[#8E8E94]">{item?.roomType}</p>
                                <img src={video} alt={popularStayConstants?.altVideo} />
                            </div>
                            <p className="text-lg font-semibold text-gray-800 mt-1">
                                {item?.title}
                            </p>
                            <p className="text-gray-700 text-sm">{item?.price}</p>
                            <div className="flex items-center gap-2 mt-2 mb-2">
                                <img src={star} alt={popularStayConstants?.altStar} />
                                <p className="text-[#303030] font-semibold">{item?.rating}</p>
                                <p className="text-sm text-[#1262AF] cursor-pointer hover:underline">
                                    ({item?.reviews})
                                </p>
                            </div>
                            <BaseButton
                                text={popularStayConstants?.buttonText}
                                textColor="text-[#1262AF]"
                                className="border border-[#CCDCEC]"
                                width="w-full"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
