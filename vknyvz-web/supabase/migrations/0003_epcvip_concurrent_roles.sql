alter table public.experience add column if not exists positions jsonb;

update public.experience set
  title     = $$Director of Engineering$$,
  company   = $$Fast Loan Advance$$,
  positions = $$[
    {"title": "Director of Engineering", "company": "Fast Loan Advance", "logo": "/logos/fast-loan-advance.jpg"},
    {"title": "Senior Software Engineer", "company": "EPCVIP"}
  ]$$::jsonb
where company = $$EPCVIP$$;
