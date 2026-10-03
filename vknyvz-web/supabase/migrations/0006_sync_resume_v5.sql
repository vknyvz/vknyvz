-- Sync site content with the resume master (Volkan_Yavuz_v5.docx, title order of
-- 2026-09-30). Bullets are v5 verbatim with hyphens for ranges and straight
-- apostrophes. The visible tagline stays "Product-minded engineering leader &
-- hands-on builder" (Volkan, 2026-10-03: it claims no title, so it fits under every
-- resume variant); titles live only in the page metadata and structured data.
-- One site-only softening: the white-label bullet says "a vault for applicant PII"
-- instead of naming SSNs and bank details on a public, indexed page.

-- ---------------------------------------------------------------- profile
update public.profile set
  roles   = array[$$Lead Software Engineer$$, $$Director of Engineering$$]::text[],
  bio     = $$I lead teams and still write the code. I've architected and scaled high-traffic platforms across fintech, e-commerce, publishing, and legal tech, with one pattern across roles: prove the idea with a POC, win executive approval on measured revenue lift, then build the team and the platform that make it repeatable. I care about clean architecture, DevOps automation, and putting AI to work where it moves real numbers.$$
where id = 1;

-- ---------------------------------------------------------------- experience
-- One scope sentence per entry, rendered under the title line as on the resume.
alter table public.experience add column if not exists scope text;

-- EPCVIP: one entry, one title line, scope, five merged bullets (resume Option 1).
update public.experience set
  title      = $$Lead Software Engineer, EPCVIP Platform · Director of Engineering, Fast Loan Advance$$,
  company    = $$EPCVIP$$,
  period     = $$2025-Present$$,
  location   = $$Los Angeles, CA$$,
  logo       = $$/logos/epcvip.jpg$$,
  positions  = null,
  scope      = $$Serve as lead engineer across EPCVIP's platform teams (Symfony backend, React/TypeScript front end) while running the 7-engineer team behind Fast Loan Advance, EPCVIP's consumer lending brand, and its partner funnels, owning architecture, delivery, and the roadmap.$$,
  highlights = array[
    $$Replaced the legacy PHP funnel front ends with a React/TypeScript funnel platform on the Symfony backend, built for fast A/B experimentation on a modern codebase and delivery pipeline: the POC lifted revenue 3-12% per funnel, the executive board approved the migration, and the platform now runs hundreds of funnel variants across the company's lending brands.$$,
    $$Delivered the partner-embeddable version of that platform: affiliates add one script tag to any campaign page and get a branded loan application on their own site. Prototyped the runtime, then built it out with the team, opening a new revenue channel (5-7% lift).$$,
    $$Built the next-generation white-label platform in Next.js on the Symfony backend to SOC 2 requirements, with a full admin dashboard for internal teams and affiliate partners, a vault for applicant PII, and automated quality gates, so the company can launch new brands quickly.$$,
    $$Built a standalone A/B testing and feature-flag service with my team, since adopted by other platforms across the company, so every product can test ideas against revenue and roll out only the winners, without a deploy.$$,
    $$Set technical standards and own release quality across EPCVIP's engineering teams, including the Symfony backend; built the delivery pipeline end to end (CI builds, QA and production deploys through automated pull requests with release notes), giving every release an audit trail.$$
  ]::text[]
where position = 1;

update public.experience set
  title      = $$Tech Lead, Senior Software Engineer$$,
  highlights = array[
    $$Led an 8-person distributed team to ship an LLM-powered customer service chatbot (Vue.js front end, Python/LangChain LLM service, Node.js/PHP microservices on Lambda, Pinecone), cutting customer-service load by roughly 50%, along with the internal prompt-management and reporting tool used to tune it.$$,
    $$Launched FreePrints Gifts, a brand-new iOS and Android app, from concept to production in under six months: worked with the product department, then architected and led the API build with the mobile developers. The app is now a multimillion-dollar product.$$,
    $$Built and ran the CMS behind PlanetArt's call center operations (Vue/Nuxt, Laravel/GraphQL on AWS Fargate), scaling automatically with call volume.$$,
    $$Built the single Laravel REST API that four consumer apps (iOS and Android) share, working alongside a remote mobile team, which eliminated duplicated code and inconsistent behavior across app stores.$$,
    $$Owned AWS infrastructure, Docker, and Jenkins CI/CD for 50+ regional websites and critical systems, keeping them up through proactive monitoring and deployments.$$
  ]::text[]
where company = $$PlanetArt$$;

update public.experience set
  highlights = array[
    $$Led the modernization of lawyers.com, an SEO-critical property with close to a million monthly users: migrated legacy Angular to Vue.js for 40% faster page loads (Google Lighthouse) and lower bounce rates, and halved API response times with Redis caching.$$,
    $$Automated Jenkins CI/CD with integrated QA suites, taking deploys from 15 minutes to under 5, and built a Docker dev environment that cut onboarding time 70%.$$,
    $$Mentored 5+ developers, ran code reviews, contributed to hiring decisions, and authored the team's Confluence documentation.$$
  ]::text[]
where company = $$Internet Brands$$;

update public.experience set
  highlights = array[
    $$Designed, built, and ran Forbes' mission-critical Editorial Tools platform with near-zero downtime for hundreds of editors, contributors, and producers publishing thousands of articles a month (PHP/Zend, MongoDB, Java API).$$,
    $$Took the platform to external publishers as a licensed product, proving it could run as a commercial offering outside Forbes.$$,
    $$Led the v2 modernization: replaced Zend with Laravel and moved the front end to AngularJS, cutting backend and UI response times.$$
  ]::text[]
where company = $$Forbes$$;

-- New entry: Globalworks (Jun 2011 to Dec 2012), the start of the visible timeline.
-- No logo on file; the page renders a monogram tile when logo is null.
delete from public.experience where company = $$Globalworks Group$$;
insert into public.experience (position, title, company, period, location, logo, highlights) values
(5, $$Senior Engineer$$, $$Globalworks Group$$, $$2011-2012$$, $$New York, NY$$, null, array[
  $$Embedded engineer for United Rentals (Fortune 500) at a digital agency: sole developer on the client's CMS, extranet, intranet, and public website (Zend Framework), and the first call for post-launch fixes.$$,
  $$Built the REST integration to the client's data layer with daily transactional syncs, extended Magento Enterprise against their APIs, ran their load-balanced Linux production environment, and wrote the specs used to train front-end developers.$$
]::text[]);

-- ---------------------------------------------------------------- education
-- Dates dropped (age marker), as on the resume since 2026-09-24.
alter table public.education alter column period drop not null;
update public.education set period = null where school = $$City University of New York, Hunter College$$;
