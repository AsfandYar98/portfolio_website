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
  code1,
  movie,
  shop,
  youtube,
  python,
  django,
  postgres,
  sql,
  next,
  vue,
  liveLink,
  portfolio15,
  portfolio16,
  portfolio17,
  linktree,
  tiktok,
  ig,
  beeclone,
  smartrep,
  matrixai,
  zapflow,
  notable,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Fullstack Developer",
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
    name: "python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "django",
    icon: django,
  },
  {
    name: "postgres",
    icon: postgres,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "threejs",
    icon: threejs,
  },
  {
    name: "next",
    icon: next,
  },
  {
    name: "vue",
    icon: vue,
  },
];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Valeo Siemens eAutomotive",
    icon: code1,
    iconBg: "#E6DEDD",
    date: "2023 - current",
    points: [
      "Developed and maintained Java-based applications to synchronize signal data across multiple software platforms, ensuring data integrity and consistency",
      "Utilized Polarion and ADD tools to gather and manage signal data, enhancing data workflows and operational efficiency",
      "Wrote and maintained unit and integration tests in Java to validate backend functionalities, ensuring high code quality and performance",
      "Utilized Maven for project management and build automation, streamlining the build process and managing dependencies efficiently",
      "Successfully implemented a synchronization solution that improved data accuracy across platforms, reducing data discrepancies by 30%",
      "Enhanced data retrieval speed by optimizing Java code, leading to a 20% reduction in processing time",
      "Perform code reviews and debugging to maintain high code quality and address issues promptly",
      "Participated in the migration of legacy systems to updated platforms, ensuring minimal downtime and improved performance",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Educative Axis",
    icon: code1,
    iconBg: "#383E56",
    date: "2021 - 2023",
    points: [
      "Developed front-end components using React and TypeScript to enhance the user interface and improve the overall user experience of the product",
      "Implemented Redis as an in-memory data structure store, optimizing data retrieval and storage efficiency",
      "Automated tests using the Selenium framework to simulate user interactions with web applications, ensuring robust testing and reliability of web features",
      "Dockerized the Django backend to maintain a consistent development environment, facilitating smoother deployments and development processes",
      "Worked extensively with Recommender Systems, Data Accumulation, Data Cleaning, and Web Automation; implementing collaborative filtering algorithms to improve data handling and system automation",
      "Designed and architected the backend systems using Django, ensuring scalable and maintainable software solutions",
      "Developed and deployed Azure Functions for serverless applications, integrating them with Azure Logic Apps for workflow automation",
      "Designed and implemented a highly available and scalable web application using EC2, S3, RDS, and Elastic Load Balancing",
      "Utilized Agile methodologies, including Scrum, to deliver working software increments in iterative sprints",
      "Optimized application performance for cloud computing by implementing caching strategies",
      "Improved data handling and system automation processes, leading to more accurate and efficient data processing and analysis",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "I2C Inc.",
    icon: code1,
    iconBg: "#E6DEDD",
    date: "2020 - 2021",
    points: [
      "Developed robust and scalable software applications using Java and Spring Boot, adhering to best practices and coding standards",
      "Implemented RESTful APIs and utilized Spring Boot's features for building microservices, facilitating seamless integration and communication between different components",
      "Utilized Spring Data JPA to interact with databases, ensuring efficient data access and manipulation within the applications",
      "Implemented unit tests and participated in code reviews to maintain code quality, identify potential issues, and ensure overall software reliability",
      "Actively contributed to continuous integration and continuous deployment (CI/CD) processes, utilizing tools such as Jenkins or GitLab CI/CD to automate build, test, and deployment pipelines",
      "Developed and deployed a suite of microservices using Spring Boot, improving the modularity and scalability of the application architecture",
      "Streamlined database interactions using Spring Data JPA, resulting in more efficient data access and manipulation",
      "Improved the development workflow by actively contributing to CI/CD processes, leading to faster and more reliable deployments",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Ibrain Solutions",
    icon: code1,
    iconBg: "#383E56",
    date: "2019 - 2020",
    points: [
      "Developed a sensor data-driven website using .NET technology and Angular, enabling real-time monitoring and visualization of data provided by sensors",
      "Integrated sensor data feeds into the website, leveraging .NET technologies such as ASP.NET and Web API to retrieve and process data from various sources",
      "Implemented data visualization components and interactive charts using Angular frameworks like Angular Material and ng2-charts, enabling intuitive and informative representation of sensor data",
      "Utilized .NET security features, such as authentication and authorization, to protect sensitive sensor data and ensure data privacy and integrity",
      "Conducted thorough testing and debugging of the website, utilizing .NET testing frameworks like MSTest, as well as Angular testing tools such as Jasmine or Karma",
    ],
  },
  // {
  //   title: "Fulstack Developer",
  //   company_name: "YOUTUBE CLONE",
  //   icon: code1,
  //   iconBg: "#383E56",
  //   date: "2023",
  //   points: [
  //     "Developed a responsive React JS application consisting of stunning video sections, custom categories, channel pages, and, most importantly, you can play videos straight from this app.",
  //     "Used RAPID API to access various endpoints to retrieve data such as suggested videos, search video details, channel details, and channel videos.",
  //     "Ensured cross-browser and cross-platform compatibility.",
  //   ],
  // },
  // {
  //   title: "Fullstack Developer",
  //   company_name: "MOVIE APP",
  //   icon: code1,
  //   iconBg: "#E6DEDD",
  //   date: "2023",
  //   points: [
  //     "Developed and maintained an application using React.js, Material UI, Alan AI and other related technologies.",
  //     "Enhanced user experience by implementing secure user authentication, providing a sleek dark mode option, and allowing users to sort movies by categories or genres. Users can now access movie and actor details and easily add movies to their favorites or watchlist, in addition to other convenient functionalities.",
  //     "Integrated voice assistant to application.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I can't say enough good things about Arsal. He's a true team player who always puts the needs of the project first. If you're looking for a software engineer who can deliver results, Arsal is your guy.",
    name: "Halley Bennett",
    designation: "",
    company: "Hack Reactor",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Arsal is an incredible problem solver. Whenever we ran into a roadblock on our project, he was always able to come up with creative solutions that kept us moving forward.",
    name: "Yishak Wesego",
    designation: "",
    company: "Hack Reactor",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I've worked with a lot of engineers over the years, and Arsal is one of the best. His technical skills are top-notch, but what really sets him apart is his ability to communicate complex ideas in a way that everyone on the team can understand.",
    name: "Megan Stewart",
    designation: "",
    company: "Hack Reactor",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];
const imageProjects = [
  // {
  //   id: 1,
  //   image: portfolio15,
  //   url: "https://madamcoon.com/",
  //   title: "Madamcoon Maine Coon Cattery NYC",
  //   description: "",
  // },
  // {
  //   id: 2,
  //   image: portfolio16,
  //   url: "https://chiquechickshop.com/",
  //   title: "ChiqueChickShop",
  //   description: "",
  // },
  // {
  //   id: 3,
  //   image: portfolio17,
  //   url: "https://jj-tailortech.vercel.app/",
  //   title: "TailorTech",
  //   description: "",
  // },
  {
    id: 4,
    image: shop,
    url: "https://jj-ecomstore.vercel.app/",
    title: "E-commerce platform",
    description: "",
  },
  {
    id: 5,
    image: movie,
    url: "https://jj-movie-app.netlify.app/",
    title: "Movie app",
    description: "",
  },
  {
    id: 6,
    image: youtube,
    url: "https://jj-youtube-clone.netlify.app/",
    title: "Youtube clone",
    description: "",
  },
  {
    id: 7,
    image: ig,
    url: "https://quicktele.netlify.app/",
    title: "Instagram clone",
    description: "",
  },
  {
    id: 8,
    image: tiktok,
    url: "https://jj-tiktok.vercel.app/",
    title: "TikTok clone",
    description: "",
  },
  {
    id: 9,
    image: linktree,
    url: "https://jj-linktri.vercel.app/",
    title: "LinkTree clone",
    description: "",
  },
  {
    id: 10,
    image: smartrep,
    url: "https://jj-smartrep.vercel.app/",
    title: "SmartRep AI",
    description: "",
  },
  // {
  //   id: 11,
  //   image: zapflow,
  //   url: "https://jj-zapflow.vercel.app/",
  //   title: "ZapFlow",
  //   description: "",
  // },
  // {
  //   id: 12,
  //   image: matrixai,
  //   url: "https://jj-matrix-ai.vercel.app/",
  //   title: "Matrix AI",
  //   description: "",
  // },
  // {
  //   id: 13,
  //   image: notable,
  //   url: "https://jj-notable.up.railway.app/",
  //   title: "Notable",
  //   description: "",
  // },
  {
    id: 14,
    image: beeclone,
    url: "https://jj-newsletter.vercel.app/",
    title: "Beeclone",
    description: "",
  },
];

const projects = [
  {
    name: "SmartRep AI",
    description:
      "SmartRep AI is an advanced AI chatbot designed to streamline customer interactions, book appointments, process payments, and manage leads. It seamlessly integrates with any website, offering a customizable interface and a suite of powerful features to enhance user experience and business operations.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Neon",
        color: "green-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
    ],
    image: smartrep,
    source_code_link: "https://github.com/arsaz101/chatbot-ai",
    liveUrl: "https://jj-smartrep.vercel.app/",
  },
  // {
  //   name: "Notable",
  //   description:
  //     "Experience unparalleled team collaboration with Notable, a cutting-edge SaaS platform designed to enhance productivity dynamically. Built with Next.js 13 and adorned with the latest technologies like Stripe for secure payments, Drizzle ORM for efficient data management, Tailwind CSS for intuitive styling, Supabase for a scalable backend, and WebSockets for real-time interactions, Notable offers a modern workspace for teams and individuals to thrive in real time. Perfect for startups and large enterprises alike, Notable seamlessly integrates advanced collaboration tools into your daily operations, setting a new standard for what a collaborative platform can achieve.",
  //   tags: [
  //     {
  //       name: "Next.js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Typescript",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: notable,
  //   source_code_link: "https://github.com/jeffjiang13/notable",
  //   liveUrl: "https://jj-notable.up.railway.app/",
  // },
  // {
  //   name: "ZapFlow",
  //   description:
  //     "ZapFlow is a SaaS Automation Builder, a powerful and versatile platform designed to automate and streamline your business processes. Built from the ground up without relying on integration libraries, this builder offers a seamless and customizable experience for creating automation flows. Whether you are a small business or a large enterprise, our builder has the features you need to connect various services and automate your workflows efficiently.",
  //   tags: [
  //     {
  //       name: "Next.js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Neon",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: zapflow,
  //   source_code_link: "https://github.com/jeffjiang13/saas-automation",
  //   liveUrl: "https://jj-zapflow.vercel.app/",
  // },
  {
    name: "Beeclone",
    description:
      "This project is a fullstack clone of Linktree built with Next.js, Tailwind CSS, and MongoDB. It allows users to create a personalized page with links to their content across the internet, customize their profile, and view analytics on their links.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: beeclone,
    source_code_link: "https://github.com/arsaz101/newsletter-clone",
    liveUrl: "https://jj-newsletter.vercel.app/",
  },
  // {
  //   name: "Matrix AI",
  //   description:
  //     "MatrixAI is a comprehensive SaaS AI Platform with a modern tech stack including Next.js 13, React, Tailwind CSS, Prisma, and Stripe. This platform is designed to offer a wide range of AI-powered tools, from image and video generation to music creation and conversational AI. Featuring a sleek Tailwind design, full responsiveness, and a variety of authentication methods, this platform is equipped to handle the needs of diverse users.",
  //   tags: [
  //     {
  //       name: "Next.js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Prisma",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: matrixai,
  //   source_code_link: "https://github.com/jeffjiang13/MatrixAI",
  //   liveUrl: "https://jj-matrix-ai.vercel.app/",
  // },
  {
    name: "LinkTri",
    description:
      "This project is a fullstack clone of Linktree built with Next.js, Tailwind CSS, and MongoDB. It allows users to create a personalized page with links to their content across the internet, customize their profile, and view analytics on their links.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: linktree,
    source_code_link: "https://github.com/arsaz101/linktree-clone",
    liveUrl: "https://jj-linktri.vercel.app/",
  },
  {
    name: "Instagram Clone,",
    description:
      "The IG App 2024 is a comprehensive clone of the Instagram platform, designed to replicate the core functionalities and visual appeal of the original app with added enhancements. Developed using modern web technologies such as Vite, React.js, and Tailwind CSS, this project emphasizes a responsive and eye-catching user interface, ensuring optimal performance and user experience across various devices, specifically optimized for screens with a minimum width of 375px.",
    tags: [
      {
        name: "Vite.js",
        color: "blue-text-gradient",
      },
      {
        name: "React.js",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ig,
    source_code_link: "https://github.com/arsaz101/intagram-clone",
    liveUrl: "https://quicktele.netlify.app/",
  },
  {
    name: "TikTok Clone",
    description:
      "Explore the modern web with our TikTok Clone Application! This project encompasses a full suite of features including Google Authentication, video uploads, publishing, sharing, commenting, liking, category filtering, advanced search functionalities, profile pages, suggested accounts, and a custom responsive design.",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "React.js",
        color: "green-text-gradient",
      },
      {
        name: "Sanity",
        color: "pink-text-gradient",
      },
    ],
    image: tiktok,
    source_code_link: "https://github.com/arsaz101/tiktok-clone",
    liveUrl: "https://jj-tiktok.vercel.app/",
  },
  // {
  //   name: "TailorTech",
  //   description:
  //     "This comprehensive SaaS platform leverages the latest technologies including Next.js 14, Bun, Stripe Connect, Prisma, MySQL, and Tailwind to offer a robust solution for building websites, managing projects, and handling financial transactions seamlessly. Designed for agencies, freelancers, and businesses, our platform simplifies the digital landscape through an intuitive interface and powerful features.",
  //   tags: [
  //     {
  //       name: "Next.js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Bun",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Prisma",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: portfolio17,
  //   source_code_link: "https://github.com/jeffjiang13/tailortech",
  //   liveUrl: "https://jj-tailortech.vercel.app/",
  // },
  // {
  //   name: "ChiqueChickShop",
  //   description:
  //     "Engineered the ChiqueChickShop, a fully responsive e-commerce platform, from the ground up. This project entailed designing an inviting online shopping experience complete with intuitive navigation and streamlined user flows. Focused on integrating secure payment processing systems to ensure transactional safety. Implemented best practices in web development to enhance site responsiveness across all devices. Due to client confidentiality, project specifics and GitHub source are kept private.",
  //   tags: [
  //     {
  //       name: "React.js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "JavaScript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "CSS",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: portfolio16,
  //   source_code_link: "https://github.com/arsaz101",
  //   liveUrl: "https://chiquechickshop.com/",
  // },
  // {
  //   name: "Madamcoon Maine Coon Cattery NYC",
  //   description:
  //     "Led the comprehensive development of the Madamcoon website, from concept to launch, focusing on crafting a responsive design that adapts seamlessly across devices. Enhanced user interaction and experience by implementing a user-friendly interface and streamlined navigation. Integrated robust content management systems for easy content updates and management. Employed advanced SEO strategies to maximize online visibility and search rankings. Project details are confidential with GitHub source kept private for client security.",
  //   tags: [
  //     {
  //       name: "React.js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "JavaScript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "CSS",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: portfolio15,
  //   source_code_link: "https://github.com/arsaz101",
  //   liveUrl: "https://madamcoon.com/",
  // },
  {
    name: "Movie App",
    description:
      "This app is an online database of information related to movies. Users can search for movies and learn about movies, as well as the cast of the movie. Navigating through the application is made simple with help of a AI voice chatbot. Also provides ratings of movies. Tech stack: JavaScript tools including React.js, Redux, Material UI, Alan AI, and more.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    source_code_link: "https://github.com/arsaz101/streaming-clone",
    liveUrl: "https://jj-movie-app.netlify.app/",
  },
  // {
  //   name: "Ecommerce App",
  //   description:
  //     "Fully responsive, full-stack e-commerce application with payments. It includes advanced React and Next.js best practices, and integrates Stripe for payment processing. The content of the app can be managed using Sanity, which allows for dynamic modifications of the store's home page and product details. The app is mobile-responsive and includes features such as adding and editing products, advanced card functionalities, and a complete checkout process.",
  //   tags: [
  //     {
  //       name: "Next.js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Stripe",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Sanity",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: shop,
  //   source_code_link: "https://github.com/jeffjiang13/ecommerce_sanity",
  //   liveUrl: "https://jj-ecomstore.vercel.app/",
  // },
  {
    name: "YouTube Clone",
    description:
      "A responsive React JS application consisting of stunning video sections, custom categories, channel pages, and, most importantly, you can play videos straight from this app!",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "RAPIDAPI",
        color: "pink-text-gradient",
      },
    ],
    image: youtube,
    source_code_link: "https://github.com/arsaz101/youtube-clone",
    liveUrl: "https://jj-youtube-clone.netlify.app/",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  imageProjects,
};
