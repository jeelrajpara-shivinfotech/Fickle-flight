import Hero from '../Components/Hero'
import PopularDestinations from '../Components/PopularDestinations'
import PopularStays from '../Components/PopularStays'
import RecommendedHolidays from '../Components/RecommendHolidays'
import { heroConstants, searches, tripItems } from '../Constants/heroConstants'
import flightImage from "../assets/Flight-icons.png"

function HomePage() {
  return (
    <div>
      <Hero />
      <div className="container mx-auto lg:px-16 py-4 px-2 font-robotto">
        <h2 className="text-sm font-semibold tracking-wide pt-4 uppercase">
          {heroConstants?.recentSearch}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
          {searches?.map((item, i) => (
            <div
              key={i}
              className="border border-[#EAEAEA] rounded-xl p-4 flex flex-col items-center flex-wrap"
            >
              <div className="flex items-center justify-between w-full text-[#1262AE] font-bold text-xl flex-wrap">
                <p>{item?.from}</p>
                <img src={flightImage} alt={heroConstants?.altText} />
                <p>{item.to}</p>
              </div>

              <p className="text-center mt-3 text-gray-900 font-semibold">
                {heroConstants?.departOn} {""}
                <span className="font-normal text-[#8E8E94]">{item?.date}</span>
              </p>
            </div>
          ))}
        </div>
        <h3 className="mt-12 mb-6 text-[#CECECE] font-semibold tracking-wider">
          {heroConstants?.prepare}
        </h3>
        <div className="flex justify-between flex-wrap">
          {tripItems.map((item, index) => (
            <div
              key={index}
              className=""
            >
              <div className='text-center w-16 h-ful'>
                <img src={item.icon} />
                <p className='text-xs mt-2 text-gray-600'>{item?.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <PopularDestinations/>
      <RecommendedHolidays/>
      <PopularStays/>
    </div>
  )
}

export default HomePage