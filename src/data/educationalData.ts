import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMap,
  faPaperPlane,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

export const social = [
  { id: 1, icon: faFacebook },
  { id: 2, icon: faInstagram },
  { id: 3, icon: faTwitter },
  { id: 4, icon: faYoutube },
];

export const educationalNavLinks = [
  { id: 1, text: "Home", link: "/educational" },
  { id: 2, text: "Courses", link: "/educational/courses" },
  { id: 3, text: "About", link: "/educational/about" },
  { id: 4, text: "Team", link: "/educational/team" },
  { id: 5, text: "Pricing", link: "/educational/pricing" },
  { id: 6, text: "Journal", link: "/educational/journal" },
  { id: 7, text: "Contact", link: "/educational/contact" },
  { id: 8, text: "Personal", link: "/educational/myCourses" },
  { id: 9, text: "Templates", link: "/" },
];

export const blog = [
  {
    id: 1,
    type: "admin",
    date: "JAN. 18, 2021",
    com: "3 COMMENTS ",
    title: "Build your Dream Software & Engineering Career",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    cover: "/images/Templates/Educational/blog/b1.webp",
  },
  {
    id: 2,
    type: "admin",
    date: "API. 25, 2022",
    com: "5 COMMENTS ",
    title: "Build your Dream Software & Engineering Career",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    cover: "/images/Templates/Educational/blog/b2.webp",
  },
  {
    id: 3,
    type: "user",
    date: "MAY. 15, 2022",
    com: "10 COMMENTS ",
    title: "Build your Dream Software & Engineering Career",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    cover: "/images/Templates/Educational/blog/b3.webp",
  },
  {
    id: 4,
    type: "admin",
    date: "JAN. 02, 2022",
    com: "3 COMMENTS ",
    title: "Build your Dream Software & Engineering Career",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    cover: "/images/Templates/Educational/blog/b4.webp",
  },
  {
    id: 5,
    type: "admin",
    date: "DEC. 14, 2022",
    com: "3 COMMENTS ",
    title: "Build your Dream Software & Engineering Career",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    cover: "/images/Templates/Educational/blog/b5.webp",
  },
  {
    id: 6,
    type: "user",
    date: "JAN. 18, 2021",
    com: "12 COMMENTS ",
    title: "Build your Dream Software & Engineering Career",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    cover: "/images/Templates/Educational/blog/b6.webp",
  },
];

// Footer

export const footerSocial = [
  { id: 1, icon: faFacebook },
  { id: 2, icon: faTwitter },
  { id: 3, icon: faInstagram },
];

export const footerExplore = [
  { id: 1, link: "About Us" },
  { id: 2, link: "Services" },
  { id: 3, link: "Courses" },
  { id: 4, link: "Blog" },
  { id: 5, link: "Contact Us" },
];

export const footerQuickLinks = [
  { id: 1, link: "Contact Us" },
  { id: 2, link: "Pricing" },
  { id: 3, link: "Terms & Conditions" },
  { id: 4, link: "Privacy" },
  { id: 5, link: "Feedbacks" },
];

export const footerQuestions = [
  {
    id: 1,
    item: "203 Fake St. Mountain View, San Francisco, California, USA",
    icon: faMap,
  },
  { id: 2, item: "+2 392 3929 210", icon: faPhoneAlt },

  { id: 3, item: "info@yourdomain.com", icon: faPaperPlane },
];
