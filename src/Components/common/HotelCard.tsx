import starImage from "../../assets/Vector.png";
import { hotelConstants } from "../../Constants/hotelsConstants";
import BaseButton from "../BaseComponents/BaseButton";

type HotelCardProps = {
    image?: string;
    heading?: string;
    title?: string;
    videoImage?: string;
    rating?: number;
    reviews?: string;
    price?: string;
};

export default function HotelCard({
    image,
    heading,
    title,
    videoImage,
    rating,
    reviews,
    price,
}: HotelCardProps) {
    return (
        <div className="bg-[#1262AF0D] shadow-md rounded-xl overflow-hidden flex flex-col sm:flex-row">
            <div className="w-full sm:w-1/2 h-56 sm:h-64">
                <img
                    src={image}
                    alt={hotelConstants?.altText}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="w-full sm:w-1/2 p-5 flex flex-col justify-between">
                <div>
                    <p className="text-gray-500 text-sm">{heading}</p>
                    <div className="flex justify-between items-start mt-1">
                        <h2 className="text-lg font-semibold leading-6 line-clamp-1">
                            {title}
                        </h2>
                        <img src={videoImage} />
                    </div>
                    <div className="flex items-center gap-1 mt-2">
                        <img src={starImage} />
                        <p className="font-medium">{rating}</p>
                        <p className="text-[#1262AF] text-sm">({reviews})</p>
                    </div>
                </div>
                <p className="text-lg font-bold lg:mt-10">
                    {price}
                    <span className="text-base font-normal text-gray-600">
                        {hotelConstants?.perNight}
                    </span>
                </p>
                <BaseButton
                    className="mt-4 text-white font-medium"
                    text={hotelConstants?.viewDetailsButton}
                    width="w-full sm:w-32"
                    bgColor="bg-[#1262AF]"
                />
            </div>
        </div>
    );
}
