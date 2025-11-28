import heroImage from "../assets/hero.png";
import { heroConstants } from "../Constants/heroConstants";
import BaseSearch from "./BaseComponents/BaseSearch";

export default function Hero() {
    return (
        <div className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-linear-to-r from-[#0B5BA8] to-[#299BD8]" />
            <img
                src={heroImage}
                alt="hero"
                className="absolute inset-0 w-full h-full object-cover mix-blend-screen"
            />
            <div className="relative z-10 space-y-4">
                <div className="text-white text-center">
                    <h2 className="font-baloo-bhai text-6xl font-bold">{heroConstants.title}</h2>
                    <p className="font-robotto text-xl">{heroConstants.desc}</p>
                </div>
                <BaseSearch 
                    label1={heroConstants.label1} 
                    returnLabel={heroConstants.return}
                    onewayLabel={heroConstants.oneWay}
                    label2={heroConstants.label2}
                    label3={heroConstants.label3}
                    placeholder1={heroConstants.placeholder1}
                    placeholder2={heroConstants.placeholder2}
                    placeholder3={heroConstants.placeholder3}
                    buttonTitle={heroConstants.buttonTitle} 
                    title={heroConstants.searchTitle}
                />
            </div>

        </div>
    );
}
