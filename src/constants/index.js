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
  greece,
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
    title: "AI Engineer",
    icon: web,
  },
  {
    title: "Data Scientist",
    icon: mobile,
  },
  {
    title: "MLOps Engineer",
    icon: backend,
  },
  {
    title: "Software Engineer",
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
    name: "Python",
    icon: python,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "PostgreSQL",
    icon: postgres,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "Vue JS",
    icon: vue,
  },
];

const experiences = [
  {
    title: "AI Engineer",
    company_name: "Körber Supply Chain Logistics GmbH",
    icon: code1,
    iconBg: "#E6DEDD",
    date: "02/2025 - Present",
    points: [
      "Built a synthetic data pipeline with ControlNet inpainting (diffusion models), boosting dataset diversity +40% and detection accuracy +10% on rare damages",
      "Tackled severe class imbalance (~5% damages) with focal/class-weighted loss and balanced sampling, significantly reducing false negatives",
      "Deployed a GPU autoscaling inference service on Kubernetes (p99 ≤ 300 ms) with Airflow-driven training, MLflow registry, canary rollouts, and KPI-based auto-rollback",
      "Implemented metrics & drift monitoring (recall, confusion matrix, CLIP-based embedding drift) to ensure real-time model performance and trigger proactive retraining",
    ],
  },
  {
    title: "Data Science Researcher",
    company_name: "Fraunhofer IIS",
    icon: code1,
    iconBg: "#383E56",
    date: "01/2025 – 07/2025",
    points: [
      "Engineered an end-to-end forecasting pipeline (Airflow, Kafka, FastAPI, Redis, MLflow, GluonTS) for household heat demand with scalable ingestion, feature computation, and training",
      "Developed stream processing (Kafka Streams) for validation, feature generation, and DWD joins; persisted curated data in a Data Lake",
      "Benchmarked Moirai, Amazon Chronos, ARIMA, TFT → achieved 22% lower RMSE and 30% faster inference; extended Chronos with weather+thermal features for 15–18% MAE/RMSE gain",
      "Delivered a Forecast API (p95 ≤ 200 ms) with Triton CI/CD deployment, observability (Prometheus/Grafana, ELK), and GDPR-compliant security stack",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Körber Supply Chain Logistics GmbH",
    icon: code1,
    iconBg: "#E6DEDD",
    date: "05/2023 – 02/2025",
    points: [
      "Built a logistics simulation platform (Angular SPA + Java Spring Boot Orchestrator on Kubernetes Jobs) with real-time feedback via PostgreSQL",
      "Secured APIs with Gateway, WAF, and KMS; scaled DB with batching, partitioning, and replicas powering Grafana/BI dashboards",
      "Automated CI/CD (GitHub Actions + Helm) with JUnit/PyTest, static analysis, canary rollouts, and observability (Prometheus, Grafana), cutting shipped bugs ~40%",
      "Enabled 10× scalability with stateless Orchestrator, HPA, FIFO scheduling, and concurrency caps",
      "Actively contributed to code reviews, sprint planning, and end-to-end release processes, ensuring code quality, sprint velocity, and smooth CI/CD-driven deployments using GitLab and Docker",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Exper Labs",
    icon: code1,
    iconBg: "#383E56",
    date: "07/2020 – 10/2022",
    points: [
      "Built a polyglot microservices platform (Rails BFF + Spring Boot) on EC2 with PostgreSQL and API Gateway (WAF, OIDC, JWT, RBAC, TLS, KMS) powering 3+ high-traffic client platforms with 99.9% uptime",
      "Designed a low-latency booking pipeline (Redis, PostgreSQL, Elasticsearch), achieving P95 ≤ 350 ms for writes and ≤150 ms for search",
      "Delivered real-time observability (Prometheus, Grafana, OpenTelemetry) with CI/CD rollouts, health checks, and auto-rollback, sustaining 99.9% uptime",
      "Tuned Elasticsearch (shards, caching, routing) to optimize throughput and relevance under scale reducing latency by 30%",
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
      "Asfand is an exceptional AI engineer with deep expertise in machine learning and MLOps. His work on synthetic data generation and model deployment has significantly improved our system performance and reliability.",
    name: "Dr. Sarah Mueller",
    designation: "Lead Data Scientist",
    company: "Körber Supply Chain",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Working with Asfand on the forecasting pipeline was a great experience. His technical skills in time series analysis and cloud deployment are outstanding, and he consistently delivers high-quality solutions.",
    name: "Prof. Michael Weber",
    designation: "Research Director",
    company: "Fraunhofer IIS",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Asfand's ability to design and implement scalable microservices architectures is impressive. His contributions to our platform's performance and reliability have been invaluable to our team's success.",
    name: "Alex Chen",
    designation: "Engineering Manager",
    company: "Exper Labs",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];
const imageProjects = [
  {
    id: 1,
    image: smartrep,
    url: "",
    title: "SmartRep AI",
    description: "",
  },
  // {
  //   id: 2,
  //   image: portfolio16,
  //   url: "",
  //   title: "Personalized Tutoring Assistant",
  //   description: "",
  // },
];

const projects = [
  {
    name: "Medical Chatbot Assistant",
    description:
      "A compliance-grade Retrieval-Augmented Generation (RAG) system that answers medical queries with citation-backed responses using BioBERT, GPT-4, and Pinecone, designed for hospitals and research settings.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "BioBERT",
        color: "green-text-gradient",
      },
      {
        name: "OpenAI GPT-4",
        color: "pink-text-gradient",
      },
    ],
    image: greece,
    source_code_link: "https://github.com/AsfandYar98",
    liveUrl: "",
  },
  {
    name: "Personalized Tutoring Assistant",
    description:
      "An AI tutoring platform built with Llama 3.2 and Chroma DB that enables students to query learning materials, generate quizzes, and track mastery, optimized for low-latency multi-tenant use.",
    tags: [
      {
        name: "Llama 3.2",
        color: "blue-text-gradient",
      },
      {
        name: "Chroma DB",
        color: "green-text-gradient",
      },
      {
        name: "Redis",
        color: "pink-text-gradient",
      },
    ],
    image: smartrep,
    source_code_link: "https://github.com/AsfandYar98",
    liveUrl: "",
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
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  imageProjects,
};
