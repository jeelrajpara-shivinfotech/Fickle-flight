import heroImage from "../assets/hero.png";
import BaseSearch from "../Components/BaseComponents/BaseSearch";
import FlightResults from "../Components/FlightResults";
import { heroConstants } from "../Constants/heroConstants";
import { searchConst } from "../Constants/SearchConstants";

function SearchPage() {
    return (
        <>
        <div className="relative w-full flex items-center">
            <div className="absolute inset-0 bg-linear-to-r from-[#0B5BA8] to-[#299BD8]" />
            <img
                src={heroImage}
                alt={searchConst?.alt}
                className="absolute inset-0 w-full h-full object-cover mix-blend-screen"
            />
            <div className="relative z-10 space-y-4 container mx-auto lg:px-16 py-16 px-2 font-robotto">
                <div className="text-white">
                    <h2 className="font-baloo-bhai text-6xl font-bold">{heroConstants?.title}</h2>
                </div>
                <BaseSearch 
                    label1={heroConstants?.label1}
                    label2={heroConstants?.label2}
                    label3={heroConstants?.label3}
                    placeholder1={heroConstants?.placeholder1}
                    placeholder2={heroConstants?.placeholder2}
                    placeholder3={heroConstants?.placeholder3}
                    buttonTitle={heroConstants?.buttonTitle}
                />
                </div>
        </div>
        <FlightResults/>
        </>
    )
}

export default SearchPage