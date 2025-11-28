import footerLogo from "../assets/footer.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";

export const footerConstants = {
  newsletter: {
    heading: "Subscribe to our newsletter",
    subheading: "Get weekly updates",
  },
  form: {
    title: "Fill in your details to join the party!",
    namePlaceholder: "Your Name",
    emailPlaceholder: "Email address",
    submit: "Submit",
  },
  logo: footerLogo,
  alt : "Clouds",
  socialMedia: [
    { icon: facebook, alt: "Facebook" },
    { icon: instagram, alt: "Instagram" },
    { icon: twitter, alt: "Instagram" },
  ],
  description:
    "Fickle Flight is your one-stop travel portal. We offer hassle free flight and hotel bookings. We also have all your flight needs in your online shop.",
  links: {
    company: ["About Us", "News", "Careers", "How we work"],
    support: ["Account", "Support Center", "FAQ", "Accessibility"],
    more: ["Covid Advisory", "Airline Fees", "Tips", "Quarantine Rules"],
  },
  columns: ["Company", "Support", "More"],
};
