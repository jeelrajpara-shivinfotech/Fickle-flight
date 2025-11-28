import matterhornImage from "../assets/Matterhorn-Suites-Image.png";
import discoveryImage from "../assets/Discovery-Shores-Image.png";
import arcticImage from "../assets/artic-hut.png";
import lakelouiseImage from "../assets/Lake-Louise-Image.png"

export const popularStayConstants = {
    title : "Popular Stays",
    viewAll : "View all stays",
    altVideo : "video icon",
    altStar : "star icon",
    buttonText : "More Details"
}
export const stays = [
    {
        image: matterhornImage,
        roomType: "Entire bungalow",
        title: "Matterhorn Suites",
        price: "$575/night",
        rating: "4.9",
        reviews: "60 reviews",
    },
    {
        image: discoveryImage,
        roomType: "2-Story beachfront suite",
        title: "Discovery Shores",
        price: "$360/night",
        rating: "4.8",
        reviews: "116 reviews",
    },
    {
        image: arcticImage,
        roomType: "Single deluxe hut",
        title: "Arctic Hut",
        price: "$420/night",
        rating: "4.7",
        reviews: "78 reviews",
    },
    {
        image: lakelouiseImage,
        roomType: "Deluxe King Room",
        title: "Lake Louise Inn",
        price: "$244/night",
        rating: "4.6",
        reviews: "63 reviews",
    },
];