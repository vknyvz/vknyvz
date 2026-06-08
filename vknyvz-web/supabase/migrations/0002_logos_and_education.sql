-- Company logos on experience, and a new Education table.

alter table public.experience add column if not exists logo text;
update public.experience set logo = '/logos/epcvip.jpg'          where company = 'EPCVIP';
update public.experience set logo = '/logos/planetart.jpg'       where company = 'PlanetArt';
update public.experience set logo = '/logos/internet-brands.jpg' where company = 'Internet Brands';
update public.experience set logo = '/logos/forbes.jpg'          where company = 'Forbes';

create table if not exists public.education (
  id       bigint generated always as identity primary key,
  position int  not null default 0,
  school   text not null,
  degree   text not null,
  period   text not null,
  logo     text
);

alter table public.education enable row level security;
drop policy if exists "public read education" on public.education;
create policy "public read education" on public.education for select to anon using (true);
grant select on public.education to anon, authenticated;

truncate public.education restart identity;
insert into public.education (position, school, degree, period, logo) values
(1, $$City University of New York, Hunter College$$, $$B.S., Computer Science$$, $$2006-2011$$, $$/logos/hunter.jpg$$);
