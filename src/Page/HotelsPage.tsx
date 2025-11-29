import { hotelConstants, hotelFilters, hotels } from "../Constants/hotelsConstants";
import filterImage from "../assets/filters.png"
import BaseHotelCard from "../Components/common/HotelCard";
import heroImage from "../assets/hero.png"
import BaseButton from "../Components/BaseComponents/BaseButton";

export default function HotelSearchLayout() {
    return (
        <>
            <div className="relative w-full flex items-center">
                <div className="absolute inset-0 bg-linear-to-r from-[#0B5BA8] to-[#299BD8]" />
                <img
                    src={heroImage}
                    alt={hotelConstants?.altText}
                    className="absolute inset-0 w-full h-full object-cover mix-blend-screen"
                />
                <div className="relative z-10 space-y-4 container mx-auto lg:px-16 py-16 px-2 font-robotto">
                    <div className="text-white">
                        <h2 className="font-baloo-bhai text-6xl font-bold">{hotelConstants?.heroTitle}</h2>
                    </div>
                    <div className="flex gap-3 flex-wrap">
                        {hotelFilters.map((btn, idx) => (
                            <BaseButton
                                key={idx}
                                text={btn.text}
                                bgColor={btn.bgColor}
                                textColor={btn.textColor}
                                borderRadius="rounded-full"
                                className={`${btn.className} ${btn.borderRadius}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="container mx-auto lg:px-16 py-4 px-2 font-robotto">
                <div className="flex justify-between items-center py-3 text-[#303030]">
                    <p className="font-medium">{hotelConstants?.results}</p>
                    <div className="flex gap-2 items-center">
                        <p className="text-sm">{hotelConstants?.filter}</p>
                        <img src={filterImage} alt={hotelConstants?.altText}/>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-5">
                    <div className=" lg:w-[50%] flex flex-col gap-4">
                        {hotels.map((hotel, index) => (
                            <BaseHotelCard
                                key={index}
                                image={hotel.image}
                                heading={hotel.heading}
                                title={hotel.title}
                                videoImage={hotel.videoImage}
                                rating={hotel.rating}
                                reviews={hotel.reviews}
                                price={hotel.price}
                            />
                        ))}
                    </div>
                    <div className="w-full lg:flex-1">
                        <div className="relative w-full h-[350px] lg:h-full">
                            <div className="absolute inset-0 overflow-hidden bg-transparent border rounded-xl border-gray-200">
                                <iframe
                                    className="w-full h-full absolute inset-0"
                                    src="https://maps.google.com/maps?width=600&height=800&hl=en&q=Ahmedabad&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}