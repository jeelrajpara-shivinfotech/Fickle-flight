import arrowRight from "../../assets/arrow-right.png"
import { heroConstants } from "../../Constants/heroConstants";

interface HeaderSectionProps{
    subtitle? : string,
    title?: string;
    viewAll? : string
}

function BaseHeader({subtitle , title , viewAll} : HeaderSectionProps) {
  return (
    <div className="flex items-center justify-between flex-wrap">
      <div>
        <p className="text-sm text-[#1262AE] font-semibold uppercase tracking-wide">
          {subtitle}
        </p>
        <h2 className="text-2xl font-bold text-gray-800 leading-relaxed">
          {title}
        </h2>
      </div>
        <div
          className="text-[#1262AE] font-medium flex items-center gap-2 hover:underline cursor-pointer"
        >
          <p>{viewAll}</p>
          <img src={arrowRight} alt={heroConstants?.altArrow}/>
        </div>
    </div>
  )
}

export default BaseHeader