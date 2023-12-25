// Contains constant data for using in website
// ! Don't remove anything from here if not sure

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
  bootstrap,
  tailwind,
  nodejs,
  express,
  mongodb,
  git,
  figma,
  ArkX,
  Bks,
  project1,
} from "../assets";

// Navbar Links
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "experiences",
    title: "Experiences",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

// Services
const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Financial Analyst",
    icon: creator,
  },
];

// Technologies
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "express",
    icon: express,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },

];

// Experiences
const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Ark-x Talent Factory",
    icon: ArkX,
    iconBg: "#383E56",
    date: "July 2023 - December 2021",
    points: [
      "MERN E-commerce Development: Front/Back-End.",
      "Proactive collaboration, dynamic resolution of challenges through the application of SCRUM methodology.",
      "Designing interactive experiences with React.js for a quality UX,and efficient management of key data on MongoDB for optimal storage.",
      "Testing, continuous improvements focused on quality.",
    ],
  },
  {
    title: "Financial Analyst",
    company_name: "Bank Assafa",
    icon: Bks,
    iconBg: "#383E56",
    date: "February 2023 - June 2022",
    points: [
      "Review of files and qualification of financing requests.",
      "Creating and updating financial models to support decision-making processes.",
      "Analyzing financial data to identify trends, risks, and opportunities.",
      "End-of-studies project: Financing investments in Morocco: a comparative study between Mourabaha and Leasing.",
    ],
  },
];

// Projects
const projects = [
  {
    name: "Xticket",
    description:
      "Xticket is a cutting-edge online platform designed for effortless event ticket sales. From concerts to conferences, XTicket provides a user-friendly interface, secure transactions, and a seamless experience for event-goers to easily purchase tickets for their favorite occasions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/HajarMIDANY/XTicket.git",
  },
  
];

export { services, technologies, experiences, projects };
