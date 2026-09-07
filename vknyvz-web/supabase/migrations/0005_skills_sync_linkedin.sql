-- Capabilities section synced with the LinkedIn technical skills block
-- (2026-09-07): React-first ordering, Tailwind/NestJS/Terraform/Amplify added,
-- AI group covers RAG + agentic tooling, "Data & Performance" becomes
-- "Data & Experimentation". Dated items dropped (SASS, Python/Flask, NLP,
-- Pinecone as a chip, GraphQL).

truncate public.skills restart identity;
insert into public.skills (position, group_name, items) values
(1, $$Leadership$$, array[$$Team Leadership$$, $$Mentorship$$, $$Hiring$$, $$Agile$$]::text[]),
(2, $$Frontend$$, array[$$React$$, $$Next.js$$, $$TypeScript$$, $$Vue.js / Nuxt$$, $$Tailwind CSS$$]::text[]),
(3, $$Backend$$, array[$$Node.js / Express$$, $$NestJS$$, $$PHP$$, $$Laravel$$, $$Symfony$$, $$REST API Design$$]::text[]),
(4, $$Cloud & DevOps$$, array[$$AWS$$, $$Lambda$$, $$Fargate$$, $$DynamoDB$$, $$CloudFront$$, $$Amplify$$, $$Docker$$, $$Terraform$$, $$Linux$$, $$CI/CD$$]::text[]),
(5, $$AI$$, array[$$LLM Integration$$, $$Claude$$, $$OpenAI$$, $$RAG$$, $$Vector Search$$, $$Agentic Tool Use$$, $$MCP Servers$$, $$AI-assisted Engineering$$]::text[]),
(6, $$Data & Experimentation$$, array[$$MySQL$$, $$PostgreSQL$$, $$MongoDB$$, $$Redis$$, $$Elasticsearch$$, $$A/B Testing$$, $$Feature Flags$$, $$Analytics Instrumentation$$]::text[]);
