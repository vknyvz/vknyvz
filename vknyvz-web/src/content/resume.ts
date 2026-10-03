// Single source of truth for résumé content, and the fallback seed if Supabase
// is unavailable. Components read these shapes via src/lib/content.ts.
// Copy mirrors the resume master (Volkan_Yavuz_v5.docx) as of 2026-10-03; the
// live values are in Supabase (see supabase/migrations/0006_sync_resume_v5.sql).

export const profile = {
  name: "Volkan Yavuz",
  roles: ["Lead Software Engineer", "Director of Engineering"],
  tagline: "Product-minded engineering leader & hands-on builder",
  location: "Los Angeles, CA",
  bio:
    "I lead teams and still write the code. I've architected and scaled high-traffic " +
    "platforms across fintech, e-commerce, publishing, and legal tech, with one pattern across " +
    "roles: prove the idea with a POC, win executive approval on measured revenue lift, then " +
    "build the team and the platform that make it repeatable. I care about clean architecture, " +
    "DevOps automation, and putting AI to work where it moves real numbers.",
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
  scope?: string; // one sentence on what the role owns, rendered under the title line
  highlights: string[];
  positions?: Position[];
};

export const experience: Role[] = [
  {
    title: "Lead Software Engineer, EPCVIP Platform · Director of Engineering, Fast Loan Advance",
    company: "EPCVIP",
    period: "2025-Present",
    location: "Los Angeles, CA",
    logo: "/logos/epcvip.jpg",
    scope:
      "Serve as lead engineer across EPCVIP's platform teams (Symfony backend, React/TypeScript front end) while running the 7-engineer team behind Fast Loan Advance, EPCVIP's consumer lending brand, and its partner funnels, owning architecture, delivery, and the roadmap.",
    highlights: [
      "Replaced the legacy PHP funnel front ends with a React/TypeScript funnel platform on the Symfony backend, built for fast A/B experimentation on a modern codebase and delivery pipeline: the POC lifted revenue 3-12% per funnel, the executive board approved the migration, and the platform now runs hundreds of funnel variants across the company's lending brands.",
      "Delivered the partner-embeddable version of that platform: affiliates add one script tag to any campaign page and get a branded loan application on their own site. Prototyped the runtime, then built it out with the team, opening a new revenue channel (5-7% lift).",
      "Built the next-generation white-label platform in Next.js on the Symfony backend to SOC 2 requirements, with a full admin dashboard for internal teams and affiliate partners, a vault for applicant PII, and automated quality gates, so the company can launch new brands quickly.",
      "Built a standalone A/B testing and feature-flag service with my team, since adopted by other platforms across the company, so every product can test ideas against revenue and roll out only the winners, without a deploy.",
      "Set technical standards and own release quality across EPCVIP's engineering teams, including the Symfony backend; built the delivery pipeline end to end (CI builds, QA and production deploys through automated pull requests with release notes), giving every release an audit trail.",
    ],
  },
  {
    title: "Tech Lead, Senior Software Engineer",
    company: "PlanetArt",
    period: "2019-2025",
    location: "Los Angeles, CA",
    logo: "/logos/planetart.jpg",
    highlights: [
      "Led an 8-person distributed team to ship an LLM-powered customer service chatbot (Vue.js front end, Python/LangChain LLM service, Node.js/PHP microservices on Lambda, Pinecone), cutting customer-service load by roughly 50%, along with the internal prompt-management and reporting tool used to tune it.",
      "Launched FreePrints Gifts, a brand-new iOS and Android app, from concept to production in under six months: worked with the product department, then architected and led the API build with the mobile developers. The app is now a multimillion-dollar product.",
      "Built and ran the CMS behind PlanetArt's call center operations (Vue/Nuxt, Laravel/GraphQL on AWS Fargate), scaling automatically with call volume.",
      "Built the single Laravel REST API that four consumer apps (iOS and Android) share, working alongside a remote mobile team, which eliminated duplicated code and inconsistent behavior across app stores.",
      "Owned AWS infrastructure, Docker, and Jenkins CI/CD for 50+ regional websites and critical systems, keeping them up through proactive monitoring and deployments.",
    ],
  },
  {
    title: "Lead Software Engineer",
    company: "Internet Brands",
    period: "2018-2019",
    location: "Los Angeles, CA",
    logo: "/logos/internet-brands.jpg",
    highlights: [
      "Led the modernization of lawyers.com, an SEO-critical property with close to a million monthly users: migrated legacy Angular to Vue.js for 40% faster page loads (Google Lighthouse) and lower bounce rates, and halved API response times with Redis caching.",
      "Automated Jenkins CI/CD with integrated QA suites, taking deploys from 15 minutes to under 5, and built a Docker dev environment that cut onboarding time 70%.",
      "Mentored 5+ developers, ran code reviews, contributed to hiring decisions, and authored the team's Confluence documentation.",
    ],
  },
  {
    title: "Senior Platform Engineer",
    company: "Forbes",
    period: "2012-2017",
    location: "Jersey City, NJ",
    logo: "/logos/forbes.jpg",
    highlights: [
      "Designed, built, and ran Forbes' mission-critical Editorial Tools platform with near-zero downtime for hundreds of editors, contributors, and producers publishing thousands of articles a month (PHP/Zend, MongoDB, Java API).",
      "Took the platform to external publishers as a licensed product, proving it could run as a commercial offering outside Forbes.",
      "Led the v2 modernization: replaced Zend with Laravel and moved the front end to AngularJS, cutting backend and UI response times.",
    ],
  },
  {
    title: "Senior Engineer",
    company: "Globalworks Group",
    period: "2011-2012",
    location: "New York, NY",
    // No logo on file (the agency is defunct); the page renders a monogram tile instead.
    highlights: [
      "Embedded engineer for United Rentals (Fortune 500) at a digital agency: sole developer on the client's CMS, extranet, intranet, and public website (Zend Framework), and the first call for post-launch fixes.",
      "Built the REST integration to the client's data layer with daily transactional syncs, extended Magento Enterprise against their APIs, ran their load-balanced Linux production environment, and wrote the specs used to train front-end developers.",
    ],
  },
];

export type Education = {
  school: string;
  degree: string;
  period?: string; // omitted on purpose (age marker), as on the resume
  logo?: string;
};

export const education: Education[] = [
  {
    school: "City University of New York, Hunter College",
    degree: "B.S., Computer Science",
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
