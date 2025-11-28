import hotel from "../assets/Hotel-Icon.png";
import attractions from "../assets/attractions.png";
import eats from "../assets/Eats-Icon.png";
import commute from "../assets/Commute-icon.png"
import taxi from "../assets/Taxi Icon.png";
import movies from "../assets/Movies-icon.png"

export const heroConstants = {
  searchTitle: "Search flights",
  title: "Let's explore & travel the world",
  desc: "Find the best destinations and the most popular stays!",
  label1: "Departure",
  placeholder1: "Sigapore (SIN)",
  label2: "Arrival",
  placeholder2: "Los Angeles (LA)",
  label3: "Date",
  placeholder3: "2022-05-01",
  return: "Return",
  oneWay: "One-way",
  buttonTitle: "Search flight",   
  recentSearch : "Recent searches",
  departOn : "Depart On:",
  prepare : "PREPARE FOR YOUR TRIP",
  altText : "plane-duration",
  altArrow : "Arrow"
}

export const searches = [
  {
    from: "SIN",
    to: "LAX",
    date: "7 Sep 2021",
  },
  {
    from: "MY",
    to: "DUB",
    date: "9 Sep 2021",
  },
];

export const tripItems = [
  { label: "Hotel", icon: hotel },
  { label: "Attractions", icon: attractions },
  { label: "Eats", icon: eats },
  { label: "Commute", icon: commute },
  { label: "Taxi", icon: taxi },
  { label: "Movies", icon: movies },
];
