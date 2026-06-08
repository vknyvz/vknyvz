create table if not exists public.profile (
  id       int primary key default 1,
  name     text not null,
  tagline  text not null,
  location text not null,
  bio      text not null,
  roles    text[] not null default '{}',
  url      text,
  constraint profile_singleton check (id = 1)
);

create table if not exists public.experience (
  id         bigint generated always as identity primary key,
  position   int  not null default 0,   -- 1 = top of the timeline
  title      text not null,
  company    text not null,
  period     text not null,
  location   text,
  highlights text[] not null default '{}'
);

create table if not exists public.skills (
  id         bigint generated always as identity primary key,
  position   int  not null default 0,
  group_name text not null,
  items      text[] not null default '{}'
);

-- ============ ROW-LEVEL SECURITY (public read-only) ============

alter table public.profile    enable row level security;
alter table public.experience enable row level security;
alter table public.skills     enable row level security;

drop policy if exists "public read profile"    on public.profile;
drop policy if exists "public read experience" on public.experience;
drop policy if exists "public read skills"     on public.skills;

create policy "public read profile"    on public.profile    for select to anon using (true);
create policy "public read experience" on public.experience for select to anon using (true);
create policy "public read skills"     on public.skills     for select to anon using (true);

-- RLS policies need table-level privileges underneath them, or the role still
-- gets "permission denied for table" (code 42501). Grant read to the public roles.
grant select on public.profile, public.experience, public.skills to anon, authenticated;

-- ============ SEED (current site copy) ============

insert into public.profile (id, name, tagline, location, bio, roles, url) values (
  1,
  $$Volkan Yavuz$$,
  $$Product-minded engineering leader & hands-on builder$$,
  $$Los Angeles, CA$$,
  $$I lead teams and still write the code. I've architected and scaled high-traffic platforms across fintech, e-commerce, publishing, and legal tech. I care about clean architecture, DevOps automation, and putting AI to work where it moves real numbers.$$,
  array[$$Tech Lead$$, $$Engineering Manager$$, $$Engineer$$]::text[],
  $$https://www.vknyvz.com$$
)
on conflict (id) do update set
  name = excluded.name, tagline = excluded.tagline, location = excluded.location,
  bio = excluded.bio, roles = excluded.roles, url = excluded.url;

truncate public.experience restart identity;
insert into public.experience (position, title, company, period, location, highlights) values
(1, $$Senior Software Engineer$$, $$EPCVIP$$, $$2025-Present$$, $$Los Angeles, CA$$, array[]::text[]),
(2, $$Tech Lead – Senior Software Engineer (LLM & Full Stack)$$, $$PlanetArt$$, $$2019-2025$$, $$Los Angeles, CA$$, array[
  $$Engineered and deployed an LLM-powered chatbot (Vue.js front-end, Node/Express/PHP microservices on Lambda) that cut customer-service load ~50%; guided an 8-person distributed team, including a React/Symfony/Laravel prompt-management and reporting tool on Pinecone.$$,
  $$Architected a unified Laravel/Symfony REST API powering all 4 company apps (iOS/Android), eliminating redundant code and keeping functionality consistent across stores.$$,
  $$Drove the launch of 'FreePrints Gifts' (iOS/Android) as Lead Developer, owning API development, deployment, and post-launch optimization on a Laravel backend.$$,
  $$Built a Vue (Nuxt) + Laravel/GraphQL call-center CMS on AWS Fargate, and kept 50+ regional sites at 99% uptime with Docker and Jenkins CI/CD.$$
]::text[]),
(3, $$Lead Software Engineer$$, $$Internet Brands$$, $$2018-2019$$, $$Los Angeles, CA$$, array[
  $$Spearheaded the modernization of lawyers.com (~1M monthly users): migrated legacy Angular to Vue.js for a 40% load-speed gain (Google Lighthouse), lifting UX, SEO rankings, and organic traffic.$$,
  $$Cut API response times 50%+ by refactoring inefficient code and adding Redis caching, improving scalability.$$,
  $$Automated CI/CD with Jenkins (deploys from 15 minutes to under 5) and built a Docker-based dev environment that cut onboarding 70% and ended 'works on my machine' issues.$$,
  $$Mentored developers, ran code reviews, and contributed to hiring, raising team efficiency and code quality.$$
]::text[]),
(4, $$Senior Platform Engineer$$, $$Forbes$$, $$2012-2017$$, $$Jersey City, NJ$$, array[
  $$Designed, developed, and maintained the mission-critical Editorial Tools platform at 99.999% uptime for hundreds of editors, contributors, and producers publishing thousands of articles monthly (custom Zend/PHP, MongoDB, Java API).$$,
  $$Licensed the platform to outside publishing companies, validating its scalability and commercial value.$$,
  $$Led development of Editorial Tools v2 (AngularJS front-end, Zend Framework 2, Mongo, custom Java API) with continuous delivery via Jenkins.$$
]::text[]);

truncate public.skills restart identity;
insert into public.skills (position, group_name, items) values
(1, $$Leadership$$, array[$$Team Leadership$$, $$Mentorship$$, $$Hiring$$, $$Agile$$]::text[]),
(2, $$Backend$$, array[$$PHP$$, $$Laravel$$, $$Symfony$$, $$Node / Express$$, $$GraphQL$$, $$Python / Flask$$]::text[]),
(3, $$Frontend$$, array[$$React$$, $$Next.js$$, $$Vue.js$$, $$TypeScript$$, $$SASS$$]::text[]),
(4, $$AI / ML$$, array[$$LLM Integration$$, $$RAG$$, $$OpenAI$$, $$Claude$$, $$NLP$$]::text[]),
(5, $$Cloud & DevOps$$, array[$$AWS$$, $$Lambda$$, $$Fargate$$, $$Docker$$, $$Jenkins CI/CD$$]::text[]),
(6, $$Data & Performance$$, array[$$MySQL$$, $$MongoDB$$, $$Pinecone$$, $$Redis$$, $$ElasticSearch$$]::text[]);
