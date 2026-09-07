// Single source of truth for résumé content, and the fallback seed if Supabase
// is unavailable. Components read these shapes via src/lib/content.ts.

export const profile = {
  name: "Volkan Yavuz",
  roles: ["Tech Lead", "Engineering Manager", "Engineer"],
  tagline: "Product-minded engineering leader & hands-on builder",
  location: "Los Angeles, CA",
  bio:
    "I lead teams and still write the code. I've architected and scaled high-traffic " +
    "platforms across fintech, e-commerce, publishing, and legal tech. I care about clean " +
    "architecture, DevOps automation, and putting AI to work where it moves real numbers.",
  email: "vkn@vknyvz.com",
  phone: "(424) 422-0381",
  site: "vknyvz.com",
  url: "https://www.vknyvz.com",
};

export type Position = { title: string; company: string; logo?: string; highlights?: string[] };

export type Role = {
  title: string;
  company: string;
  period: string;
  location?: string;
  logo?: string;
  highlights: string[];
  positions?: Position[];
};

export const experience: Role[] = [
  {
    title: "Director of Engineering",
    company: "Fast Loan Advance",
    period: "2025-Present",
    location: "Los Angeles, CA",
    logo: "/logos/epcvip.jpg",
    positions: [
      {
        title: "Director of Engineering",
        company: "Fast Loan Advance",
        logo: "/logos/fast-loan-advance.jpg",
        highlights: [
          "Lead a 7-engineer team that builds and runs EPCVIP's lending funnel platforms, owning architecture, delivery, and the roadmap across Fast Loan Advance and partner brands.",
          "Pitched and proved replacing the legacy PHP funnels with a React platform: my POC lifted revenue 3-12% per funnel in A/B tests, and the executive board approved the migration.",
          "Delivered a partner-embeddable funnel product the company had wanted for years: proved it with a POC, then built it with my team, lifting revenue 5-7% and opening a new distribution channel.",
          "Architecting the next-generation white-label lending platform on that same product, so the company can launch new brands quickly, with regulatory compliance and automated quality gates built in.",
          "Delivered a company-wide A/B testing and feature-flag platform with my team, so every product can test ideas against revenue and roll out only the winners, without a deploy.",
        ],
      },
      {
        title: "Lead Software Engineer",
        company: "EPCVIP",
        highlights: [
          "Built the company's funnel engine from the ground up in React and TypeScript; it now runs hundreds of funnel variants across the company's lending brands.",
          "Architected and prototyped the embeddable funnel runtime, then guided the team that built it out: partners add one script tag and get a branded loan application on their own site.",
          "Act as lead developer across EPCVIP's other engineering teams: review code, set technical standards, and own release quality so fewer issues reach production.",
          "Built and own the delivery pipeline end to end: CI builds, QA and production deploys through automated pull requests with release notes, giving every release an audit trail.",
        ],
      },
    ],
    highlights: [], // per-role bullets live on each position above
  },
  {
    title: "Tech Lead – Senior Software Engineer (LLM & Full Stack)",
    company: "PlanetArt",
    period: "2019-2025",
    location: "Los Angeles, CA",
    logo: "/logos/planetart.jpg",
    highlights: [
      "Engineered and deployed an LLM-powered chatbot (Vue.js front-end, Node/Express/PHP microservices on Lambda) that cut customer-service load ~50%; guided an 8-person distributed team, including a React/Symfony/Laravel prompt-management and reporting tool on Pinecone.",
      "Architected a unified Laravel/Symfony REST API powering all 4 company apps (iOS/Android), eliminating redundant code and keeping functionality consistent across stores.",
      "Drove the launch of 'FreePrints Gifts' (iOS/Android) as Lead Developer, owning API development, deployment, and post-launch optimization on a Laravel backend.",
      "Built a Vue (Nuxt) + Laravel/GraphQL call-center CMS on AWS Fargate, and kept 50+ regional sites at 99% uptime with Docker and Jenkins CI/CD.",
    ],
  },
  {
    title: "Lead Software Engineer",
    company: "Internet Brands",
    period: "2018-2019",
    location: "Los Angeles, CA",
    logo: "/logos/internet-brands.jpg",
    highlights: [
      "Spearheaded the modernization of lawyers.com (~1M monthly users): migrated legacy Angular to Vue.js for a 40% load-speed gain (Google Lighthouse), lifting UX, SEO rankings, and organic traffic.",
      "Cut API response times 50%+ by refactoring inefficient code and adding Redis caching, improving scalability.",
      "Automated CI/CD with Jenkins (deploys from 15 minutes to under 5) and built a Docker-based dev environment that cut onboarding 70% and ended 'works on my machine' issues.",
      "Mentored developers, ran code reviews, and contributed to hiring, raising team efficiency and code quality.",
    ],
  },
  {
    title: "Senior Platform Engineer",
    company: "Forbes",
    period: "2012-2017",
    location: "Jersey City, NJ",
    logo: "/logos/forbes.jpg",
    highlights: [
      "Designed, developed, and maintained the mission-critical Editorial Tools platform at 99.999% uptime for hundreds of editors, contributors, and producers publishing thousands of articles monthly (custom Zend/PHP, MongoDB, Java API).",
      "Licensed the platform to outside publishing companies, validating its scalability and commercial value.",
      "Led development of Editorial Tools v2 (AngularJS front-end, Zend Framework 2, Mongo, custom Java API) with continuous delivery via Jenkins.",
    ],
  },
];

export type Education = {
  school: string;
  degree: string;
  period: string;
  logo?: string;
};

export const education: Education[] = [
  {
    school: "City University of New York, Hunter College",
    degree: "B.S., Computer Science",
    period: "2006-2011",
    logo: "/logos/hunter.jpg",
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Leadership", items: ["Team Leadership", "Mentorship", "Hiring", "Agile"] },
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Vue.js / Nuxt", "Tailwind CSS"] },
  { group: "Backend", items: ["Node.js / Express", "NestJS", "PHP", "Laravel", "Symfony", "REST API Design"] },
  {
    group: "Cloud & DevOps",
    items: ["AWS", "Lambda", "Fargate", "DynamoDB", "CloudFront", "Amplify", "Docker", "Terraform", "Linux", "CI/CD"],
  },
  {
    group: "AI",
    items: ["LLM Integration", "Claude", "OpenAI", "RAG", "Vector Search", "Agentic Tool Use", "MCP Servers", "AI-assisted Engineering"],
  },
  {
    group: "Data & Experimentation",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "A/B Testing", "Feature Flags", "Analytics Instrumentation"],
  },
];
