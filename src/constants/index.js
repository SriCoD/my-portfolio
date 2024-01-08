import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Reactjs Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Express",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "A Food Delivery WebApp",
    company_name: "Reactjs, Redux-toolkit",
    icon: starbucks,
    iconBg: "#383E56",
    //date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "An E-commerce WebApp",
    company_name: "Reactjs, Javascript, Redux-toolkit, tailwind",
    icon: tesla,
    iconBg: "#E6DEDD",
    //date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "A Video-streaming App",
    company_name: "Reactjs, Javascript, Redux-toolkit, tailwind",
    icon: shopify,
    iconBg: "#383E56",
    //date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "A Social Media Webapp ",
    company_name: "Reactjs, Javascript, Redux-toolkit, tailwind",
    icon: meta,
    iconBg: "#E6DEDD",
    //date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Software Developer at APIIP",
    name: "Lead EoDB portal of Arunachal Pradesh ",
    designation: "Aug 2023- Nov 2023",
   // company: "Acme Co",
   // image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Industrial Training at BSNL Itanagar ",
    //name: "Chris Brown",
    designation: "April 2022 - May 2022",
   // company: "DEF Corp",
   // image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Spokesperson Of Computer Association of NERIST",
    //name: "Lisa Wang",
    designation: "Aug 2021- Aug 2022",
    //company: "456 Enterprises",
    //image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "A Video-streaming Webapp",
    description:
      "Web-based platform that allows users to search, live-chat, and watch youtube videos.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/SriCoD/youtube",
    deployment_link:"https://my-youtube-srishti3.vercel.app/",
  },
  {
    name: "E-commerce WebApp",
    description:
      "Web application that enables users to search for products, filter available products and easily purchase the product through secure Razorpay payment gateway.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/SriCoD/e-commerce-project",
    deployment_link:"https://e-commerce-project-srishtijha.vercel.app/",
  },
  {
    name: "A Food Delivery App",
    description:
      "A comprehensive food delivery platform that allows users to shop dishes and cuisnies at affordable price.",
    tags: [
      {
        name: "redux-toolkit",
        color: "blue-text-gradient",
      },
      {
        name: "reactjs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/SriCoD/Food-Delivery-App",
    deployment_link:"https://food-delivery-app-git-main-srishti-jhas-projects.vercel.app",
  },
];

export { services, technologies, experiences, testimonials, projects };
//https://food-delivery-app-git-main-srishti-jhas-projects.vercel.app/