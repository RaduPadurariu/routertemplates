import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faTiktok,
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

export const homeAbout = [
  {
    id: 1,
    cover: "/images/Templates/Educational/HomeAbout/storytelling.png",
    title: "Online Courses",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    id: 2,
    cover: "/images/Templates/Educational/HomeAbout/diploma.png",
    title: "Earn A Certificates",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    id: 3,
    cover: "/images/Templates/Educational/HomeAbout/athlete.png",
    title: "Learn with Expert",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
];

export const aboutWrapper = [
  {
    id: 1,
    cover:
      "https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/80/ffffff/external-graduation-education-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png",
    data: "3,000",
    title: "SUCCESS STORIES",
  },

  {
    id: 2,
    cover: "https://img.icons8.com/ios/80/ffffff/athlete.png",
    data: "320",
    title: "TRUSTED TUTORS",
  },
  {
    id: 3,
    cover:
      "https://img.icons8.com/external-outline-icons-maxicons/80/ffffff/external-calender-insurance-outline-outline-icons-maxicons.png",
    data: "1,000",
    title: "SCHEDULES",
  },
  {
    id: 4,
    cover: "https://img.icons8.com/ios/80/ffffff/macbook-idea--v3.png",
    data: "587",
    title: "COURSES",
  },
];

export const coursesCard = [
  {
    id: 1,
    cover: "/images/Templates/Educational/courses/c1.png",
    coursesName: "Introducing to Software Engineering",
    courseTeacher: [
      {
        id: 10,
        dcover: "/images/Templates/Educational/back.jpg",
        name: "by John Smith",
        totalTime: "50 lectures (190 hrs)",
      },
    ],
    priceAll: "$100 All Course",
    pricePer: "$15 per month",
  },
  {
    id: 2,
    cover: "/images/Templates/Educational/courses/c2.png",
    coursesName: "Enhancing Adobe Photoshop CC 2020 Skills",
    courseTeacher: [
      {
        id: 10,
        dcover: "/images/Templates/Educational/back.jpg",
        name: "by Ram Gurung",
        totalTime: "30 lectures (125 hrs)",
      },
    ],
    priceAll: "$200 All Course",
    pricePer: "$25 per month",
  },
  {
    id: 3,
    cover: "/images/Templates/Educational/courses/c3.png",
    coursesName: "HTML, CSS, and Javascript for Web Developers",
    courseTeacher: [
      {
        id: 10,
        dcover: "/images/Templates/Educational/back.jpg",
        name: "by Saroj Nepal",
        totalTime: "50 lectures (50 hrs)",
      },
    ],
    priceAll: "$50 All Course",
    pricePer: "$5 per month",
  },
  {
    id: 4,
    cover: "/images/Templates/Educational/courses/c4.png",
    coursesName: "Introducing to Programming with WordPress",
    courseTeacher: [
      {
        id: 10,
        dcover: "/images/Templates/Educational/back.jpg",
        name: "by Prabin Thapa Mager",
        totalTime: "20 lectures (20 hrs)",
      },
    ],
    priceAll: "$30 All Course",
    pricePer: "$3 per month",
  },
  {
    id: 5,
    cover: "/images/Templates/Educational/courses/c5.png",
    coursesName: "Introducing to Programming with ReactJS",
    courseTeacher: [
      {
        id: 10,
        dcover: "/images/Templates/Educational/back.jpg",
        name: "by Sunil Bishowkaram",
        totalTime: "100 lectures (150 hrs)",
      },
    ],
    priceAll: "$300 All Course",
    pricePer: "$30 per month",
  },
  {
    id: 6,
    cover: "/images/Templates/Educational/courses/c6.png",
    coursesName: "Learn Frontend Programming Language",
    courseTeacher: [
      {
        id: 10,
        dcover: "/images/Templates/Educational/back.jpg",
        name: "by Sunil Bishowkaram",
        totalTime: "200 lectures (300 hrs)",
      },
    ],
    priceAll: "$500 All Course",
    pricePer: "$80 per month",
  },
  {
    id: 7,
    cover: "/images/Templates/Educational/courses/c7.png",
    coursesName: "Introducing to with HTML / CSS",
    courseTeacher: [
      {
        id: 10,
        dcover: "/images/Templates/Educational/back.jpg",
        name: "by Price",
        totalTime: "20 lectures (50 hrs)",
      },
    ],
    priceAll: "$20 All Course",
    pricePer: "$2 per month",
  },
  {
    id: 8,
    cover: "/images/Templates/Educational/courses/c8.png",
    coursesName: "Introducing to with JAVA",
    courseTeacher: [
      {
        id: 10,
        dcover: "/images/Templates/Educational/back.jpg",
        name: "by Petter",
        totalTime: "80 lectures (200 hrs)",
      },
    ],
    priceAll: "$200 All Course",
    pricePer: "$40 per month",
  },
  {
    id: 9,
    cover: "/images/Templates/Educational/courses/c9.png",
    coursesName: "Introducing to with HTML / CSS / JAVASCRIPT",
    courseTeacher: [
      {
        id: 10,
        dcover: "/images/Templates/Educational/back.jpg",
        name: "by Petter",
        totalTime: "50 lectures (50 hrs)",
      },
    ],
    priceAll: "$20 All Course",
    pricePer: "$3 per month",
  },
];

export const online = [
  {
    id: 1,
    cover: "/images/Templates/Educational/courses/online/o1.png",
    hoverCover: "/images/Templates/Educational/courses/online/o1.1.png",
    courseName: "UI/UX Design Courses",
    course: "25 Courses",
  },
  {
    id: 2,
    cover: "/images/Templates/Educational/courses/online/o2.png",
    hoverCover: "/images/Templates/Educational/courses/online/o2.1.png",
    courseName: "Art & Design",
    course: "25 Courses",
  },
  {
    id: 3,
    cover: "/images/Templates/Educational/courses/online/o3.png",
    hoverCover: "/images/Templates/Educational/courses/online/o3.1.png",
    courseName: "Computer Science",
    course: "10 Courses",
  },
  {
    id: 4,
    cover: "/images/Templates/Educational/courses/online/o4.png",
    hoverCover: "/images/Templates/Educational/courses/online/o4.1.png",
    courseName: "History & Archeologic",
    course: "15 Courses",
  },
  {
    id: 5,
    cover: "/images/Templates/Educational/courses/online/o5.png",
    hoverCover: "/images/Templates/Educational/courses/online/o5.1.png",
    courseName: "Software Engineering",
    course: "30 Courses",
  },
  {
    id: 6,
    cover: "/images/Templates/Educational/courses/online/o6.png",
    hoverCover: "/images/Templates/Educational/courses/online/o6.1.png",
    courseName: "Information Software",
    course: "60 Courses",
  },
  {
    id: 7,
    cover: "/images/Templates/Educational/courses/online/o7.png",
    hoverCover: "/images/Templates/Educational/courses/online/o7.1.png",
    courseName: "Health & Fitness",
    course: "10 Courses",
  },
  {
    id: 8,
    cover: "/images/Templates/Educational/courses/online/o8.png",
    hoverCover: "/images/Templates/Educational/courses/online/o8.1.png",
    courseName: "Marketing",
    course: "30 Courses",
  },
  {
    id: 9,
    cover: "/images/Templates/Educational/courses/online/o9.png",
    hoverCover: "/images/Templates/Educational/courses/online/o9.1.png",
    courseName: "Graphic Design",
    course: "80 Courses",
  },
  {
    id: 10,
    cover: "/images/Templates/Educational/courses/online/o10.png",
    hoverCover: "/images/Templates/Educational/courses/online/o10.1.png",
    courseName: "Music",
    course: "120 Courses",
  },
  {
    id: 11,
    cover: "/images/Templates/Educational/courses/online/o11.png",
    hoverCover: "/images/Templates/Educational/courses/online/o11.1.png",
    courseName: "Business Administration",
    course: "17 Courses",
  },
  {
    id: 12,
    cover: "/images/Templates/Educational/courses/online/o12.png",
    hoverCover: "/images/Templates/Educational/courses/online/o12.1.png",
    courseName: "Web Management",
    course: "17 Courses",
  },
];

export const team = [
  {
    id: 1,
    cover: "/images/Templates/Educational/team/t1.jpg",
    name: "Ph.D Adrian Molises",
    work: "DEVELOPER AND LEAD INSTRUCTOR",
  },
  {
    id: 2,
    cover: "/images/Templates/Educational/team/t2.jpg",
    name: "Ph.D Arthur MaGregor",
    work: "DEVELOPER AND LEAD INSTRUCTOR",
  },
  {
    id: 3,
    cover: "/images/Templates/Educational/team/t3.jpg",
    name: "Ph.D Anna Hanzen",
    work: "DEVELOPER AND LEAD INSTRUCTOR",
  },
  {
    id: 4,
    cover: "/images/Templates/Educational/team/t4.jpg",
    name: "Ph.D Brian Wooden",
    work: "DEVELOPER AND LEAD INSTRUCTOR",
  },
  {
    id: 5,
    cover: "/images/Templates/Educational/team/t5.jpg",
    name: "Ph.D Adrian Molises",
    work: "DEVELOPER AND LEAD INSTRUCTOR",
  },
  {
    id: 6,
    cover: "/images/Templates/Educational/team/t6.jpg",
    name: "Ph.D Arthur MaGregor",
    work: "DEVELOPER AND LEAD INSTRUCTOR",
  },
  {
    id: 7,
    cover: "/images/Templates/Educational/team/t7.jpg",
    name: "Ph.D Anna Hanzen",
    work: "DEVELOPER AND LEAD INSTRUCTOR",
  },
  {
    id: 8,
    cover: "/images/Templates/Educational/team/t8.jpg",
    name: "Ph.D Brian Wooden",
    work: "DEVELOPER AND LEAD INSTRUCTOR",
  },
];

export const teamSocial = [
  { id: 1, icon: faFacebook },
  { id: 2, icon: faTwitter },
  { id: 3, icon: faInstagram },
  { id: 4, icon: faTiktok },
];

export const price = [
  {
    id: 1,
    name: "BASIC PLAN",
    price: "49K",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    id: 2,
    name: "BEGINNER PLAN",
    price: "79K",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    id: 3,
    name: "PREMIUM PLAN",
    price: "109k",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    id: 4,
    name: "ULTIMATE PLAN",
    price: "149K",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
];

export const faq = [
  {
    id: 1,
    title: "How to Enroll This Online Courses?",
    desc: "This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
  {
    id: 2,
    title: "Where It is hidden by default, until the collapse?",
    desc: "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
  {
    id: 3,
    title: "How It is hidden by default, until the collapse?",
    desc: "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
  {
    id: 4,
    title: "How to Enroll This Online Courses?",
    desc: "This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
  {
    id: 5,
    title: "Where It is hidden by default, until the collapse?",
    desc: "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
  {
    id: 6,
    title: "How It is hidden by default, until the collapse?",
    desc: "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
];

export const journal = [
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
