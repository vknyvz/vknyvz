import { cache } from "react";
import { supabase } from "@/lib/supabase";
import {
  profile as seedProfile,
  experience as seedExperience,
  education as seedEducation,
  skills as seedSkills,
  type Role,
  type Education,
} from "@/content/resume";

export const getProfile = cache(async () => {
  if (!supabase) return seedProfile;
  const { data, error } = await supabase.from("profile").select("*").eq("id", 1).single();
  if (error || !data) return seedProfile;
  return { ...seedProfile, ...data };
});

export const getExperience = cache(async (): Promise<Role[]> => {
  if (!supabase) return seedExperience;
  const { data, error } = await supabase.from("experience").select("*").order("position");
  if (error || !data?.length) return seedExperience;
  return data.map((r) => ({
    title: r.title,
    company: r.company,
    period: r.period,
    location: r.location ?? undefined,
    logo: r.logo ?? undefined,
    highlights: r.highlights ?? [],
    positions: r.positions ?? undefined,
  }));
});

export const getEducation = cache(async (): Promise<Education[]> => {
  if (!supabase) return seedEducation;
  const { data, error } = await supabase.from("education").select("*").order("position");
  if (error || !data?.length) return seedEducation;
  return data.map((r) => ({
    school: r.school,
    degree: r.degree,
    period: r.period,
    logo: r.logo ?? undefined,
  }));
});

export const getSkills = cache(async (): Promise<{ group: string; items: string[] }[]> => {
  if (!supabase) return seedSkills;
  const { data, error } = await supabase.from("skills").select("*").order("position");
  if (error || !data?.length) return seedSkills;
  return data.map((r) => ({ group: r.group_name, items: r.items ?? [] }));
});
