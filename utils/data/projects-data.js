import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Expense Tracking App",
    description:
      "I developed this AI-powered financial web app using the MERN stack to deliver personalized financial insights and recommendations. The application features a sleek, modern interface crafted with Material UI, combined with Tailwind CSS for highly customizable and efficient styling. It integrates various financial data sources, allowing users to effortlessly track expenses, manage budgets, and make informed financial decisions.",
    tools: [
      "Express",
      "MongoDB",
      "OpenAI API",
      "Vercel",
      "Material UI",
      "Node Mailer",
      "Tailwind CSS",
    ],
    role: "Backend Developer",
    code: "",
    demo: "",
    image: crefin,
  },
  {
    id: 2,
    name: "Blogging App",
    description:
      "I created this dynamic blogging app using ReactJS for the frontend and NodeJS for the backend, ensuring a smooth and responsive user experience. Tailwind CSS was utilized for sleek, modern styling that allows for quick and easy customization. The app leverages REST APIs for efficient data management, enabling users to create, edit, and share blog posts effortlessly. This application is designed to offer a streamlined and intuitive platform for content creators.",
    tools: ["ReactJS", "NodeJS", "Tailwind CSS", "Rest API", "Web Forms"],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: travel,
  },
  {
    id: 3,
    name: "FIT Clud Gym",
    description:
      "Fit Club is a modern gym designed to help members achieve their fitness goals in a supportive and motivating environment. The club offers state-of-the-art equipment, personalized workout plans, and a variety of group fitness classes to cater to all fitness levels. Whether you're a beginner or a seasoned athlete, Fit Club provides the resources and community you need to stay fit and healthy.",
    tools: [
      "React",
      "Bootstrap",
      "SCSS",
      "Stripe",
      "Express",
      "TypeScript",
      "MongoDB",
      "Cronjob",
      "JWT",
    ],
    code: "",
    role: "Full Stack Developer",
    demo: "",
    image: realEstate,
  },
  {
    id: 4,
    name: "Design Vision",
    description:
      "My team and I developed Design Vision. Design Vision is an e-commerce platform dedicated to transforming spaces with modern interior design products. Whether you're looking to revamp a single room or complete a full home makeover, Design Vision offers a curated selection of high-quality furniture, décor, and accessories. The platform provides a seamless shopping experience, allowing users to discover and purchase stylish products that bring their design visions to life.",
    tools: ["NextJS", "Material UI", "Redux", "Sun Editor", "Calendar"],
    code: "",
    demo: "",
    image: ayla,
    role: "Full Stack Developer",
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
