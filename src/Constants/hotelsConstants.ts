import hotelImage from "../assets/Results Image.png";
import videoImage from "../assets/video.png"
export const hotels = [
    {
        title: "Holiday Inn Express",
        rating: 4.7,
        reviews: "1,136 reviews",
        price: "$S 286",
        image: hotelImage,
        videoImage: videoImage,
        heading : "1 king bed standard"
    },
    {
        title: "Freehand Los Angeles",
        rating: 4.2,
        reviews: "1,941 reviews",
        price: "$S 198",
        image: hotelImage,
        heading : "Bed in Quad"
    },
    {
        title: "The Westin Bonaventure",
        rating: 4.1,
        reviews: "1,002 reviews",
        price: "$S 289",
        image: hotelImage,
        heading : "1 King, City view"
    },
    {
        title: "The Ritz-Carlton",
        rating: 4.7,
        reviews: "1,136 reviews",
        price: "$S 286",
        image: hotelImage,
        videoImage: videoImage,
        heading : "Deluxe King"
    },
]

export const hotelFilters = [
  {
    text: "Recommended",
    bgColor: "bg-white",
    textColor: "text-[#1262AF]",
    className: "border border-[#1262AF] px-5",
    borderRadius: "rounded-full",
  },
  {
    text: "Price",
    bgColor: "",
    textColor: "text-white",
    className: "border border-white px-5",
    borderRadius: "rounded-full",
  },
  {
    text: "Rating",
    bgColor: "",
    textColor: "text-white",
    className: "border border-white px-5",
    borderRadius: "rounded-full",
  },
];

export const hotelConstants = {
    perNight : "/night",
    altText : "alt hotel image",
    viewDetailsButton : "View Details",
    heroTitle : "Stays in Los Angeles",
    results : "200+ RESULTS",
    filter : "Filters"
}