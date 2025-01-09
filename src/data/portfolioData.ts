import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import {
  faLocationDot,
  faMobileAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export const navTemplates = [
  { id: 1, text: "Educational", link: "/educational" },
  { id: 2, text: "Cooking", link: "/cooking" },
  { id: 3, text: "Fitness", link: "/" },
  { id: 4, text: "Fashion", link: "/" },
];

export const social = [
  { id: 1, icon: faFacebook },
  { id: 2, icon: faTwitter },
  { id: 3, icon: faInstagram },
  { id: 4, icon: faYoutube },
];

export const contact = [
  {
    id: 1,
    icon: faLocationDot,
    text1: "2651 Main Street, Suit 124",
    text2: "Seattle, WA, 98101",
  },
  {
    id: 2,
    icon: faMobileAlt,
    text1: "0123456789",
    text2: "0345627891",
  },
  {
    id: 3,
    icon: faEnvelope,
    text1: "hello@thetheme.io",
    text2: "info@brex-theme.io",
  },
];
