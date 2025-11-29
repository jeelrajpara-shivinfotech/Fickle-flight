import turkishImage from "../assets/turkish.png"
import singaporeImage from "../assets/SIA.png"
import japanImage from "../assets/japan.png"
import anaImage from "../assets/ANA.png"
import americanImage from "../assets/american-airlines.png";

export const searchConst = {
    outOf : "10 out of 177 Results",
    recentlyBooked : "Recently booked",
    bookedOn : "Booked on",
    alt : "Alt image"
}

export const filterSections = [
  {
    title: "Stops",
    options: ["1 Stop", "2 Stops"],
  },
  {
    title: "Booking Options",
    options: ["Book on Fickleflight", "Official Airline Websites"],
  },
  {
    title: "Flight Experience",
    options: ["No overnight flights", "No long stop-overs"],
  },
  {
    title: "Airlines",
    options: ["Singapore Airlines", "Qatar Airways"],
  },
];


export const flightResults = [
  {
    airline: "Turkish Airlines",
    logo: turkishImage,
    departureTime: "11:35 PM",
    departureAirport: "SIN",
    arrivalTime: "4:45 PM",
    arrivalAirport: "LAX",
    duration: "33H 10M",
    stops: "1-stop",
    price: "S$ 723",
  },
  {
    airline: "Singapore Airlines",
    logo: singaporeImage,
    departureTime: "8:45 PM",
    departureAirport: "SIN",
    arrivalTime: "7:55 PM",
    arrivalAirport: "LAX",
    duration: "15H 10M",
    stops: "2-stops",
    price: "S$ 900",
  },
  {
    airline: "Japan Airlines",
    logo: japanImage,
    departureTime: "8:20 PM",
    departureAirport: "SIN",
    arrivalTime: "9:50 PM",
    arrivalAirport: "LAX",
    duration: "17H 30M",
    stops: "1-stop",
    price: "S$ 859",
  },
  {
    airline: "ANA",
    logo: anaImage,
    departureTime: "6:35 PM",
    departureAirport: "SIN",
    arrivalTime: "9:50 PM",
    arrivalAirport: "LAX",
    duration: "19H 15M",
    stops: "1-stop",
    price: "S$ 936",
  },
  {
    airline: "American Airlines",
    logo: americanImage,
    departureTime: "8:20 PM",
    departureAirport: "SIN",
    arrivalTime: "9:50 PM",
    arrivalAirport: "LAX",
    duration: "17H 30M",
    stops: "1-stop",
    price: "S$ 936",
  },
  {
    airline: "Turkish Airlines",
    logo: turkishImage,
    departureTime: "11:35 PM",
    departureAirport: "SIN",
    arrivalTime: "4:45 PM",
    arrivalAirport: "LAX",
    duration: "33H 10M",
    stops: "1-stop",
    price: "S$ 673",
  },
  {
    airline: "Japan Airlines",
    logo: japanImage,
    departureTime: "10:25 PM",
    departureAirport: "SIN",
    arrivalTime: "9:10 AM",
    arrivalAirport: "LAX",
    duration: "26H 45M",
    stops: "1-stop",
    price: "S$ 859",
  },
];

export const recentlyBooked = [
  {
    airline: "Singapore Airlines",
    logo: singaporeImage,
    price: "$1128",
    fromCode: "SIN",
    fromCity: "Singapore",
    toCode: "LAX",
    toCity: "Los Angeles",
    class: "Economy",
    passengers: "2 Adults",
    bookedFrom: "Expedia",
    timeAgo: "1s ago!",
  },
  {
    airline: "American Airlines",
    logo: americanImage,
    fromCode: "SFO",
    fromCity: "San Francisco",
    toCode: "SIN",
    toCity: "Singapore",
    price: "$1024",
    class: "First Class",
    passengers: "1 Adult",
    bookedFrom: "Kayak",
    timeAgo: "2s ago",
  },
  {
    airline: "Japan Airlines",
    logo : japanImage,
    fromCode: "PHX",
    fromCity: "Phoenix",
    toCode: "DXB",
    toCity: "Dubai",
    price: "$2996",
    class: "Economy",
    passengers: "3 Adults",
    bookedFrom: "Skyscanner",
    timeAgo: "3s ago",
  },
];
