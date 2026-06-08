import Image from "next/image";
import { getProfile, getExperience, getSkills, getEducation } from "@/lib/content";
import ContactReveal from "@/components/ContactReveal";

const RULER = Array.from({ length: 16 });

export const revalidate = 60;

export default async function Home() {
  const [profile, experience, skills, education] = await Promise.all([
    getProfile(),
    getExperience(),
    getSkills(),
    getEducation(),
  ]);

  return (
    <div className="mx-auto mt-[88px] mb-10 max-w-[1020px] max-[760px]:mt-[66px] max-[760px]:mb-6">
      <div className="px-[60px] pt-[40px] pb-11 max-[760px]:px-[22px] max-[760px]:py-[24px]">

        {/* masthead */}
        <header className="mb-16 flex items-start justify-between gap-8 max-[760px]:mb-12 max-[760px]:flex-col max-[760px]:gap-[18px]">
          <div>
            <h1 className="font-display text-[clamp(32px,6vw,46px)] leading-[1.04] tracking-[0.005em]">
              VOLKAN YAVUZ
            </h1>
            <p className="mt-4 font-mono text-[13px] uppercase tracking-[0.12em]">
              {profile.tagline}
            </p>
            <p className="mt-5 max-w-[60ch] text-[16.5px] leading-[1.62] text-body max-[760px]:text-[15.5px]">
              {profile.bio}
            </p>
          </div>
          <ContactReveal location={profile.location} />
        </header>

        {/* experience */}
        <section id="experience" className="mb-[60px] max-[760px]:mb-12">
          <h2 className="mb-6 font-mono text-[13px] uppercase tracking-[0.12em] text-accent">
            01 · Work experience
          </h2>
          <div className="space-y-9">
            {experience.map((e, i) => (
              <article key={`${e.company}-${i}`} className="flex gap-4 max-[760px]:gap-3">
                <Image
                  src={e.logo ?? "/logos/epcvip.jpg"}
                  alt={`${e.company} logo`}
                  width={48}
                  height={48}
                  className="h-12 w-12 shrink-0 border border-ink object-cover"
                />
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[11px] tracking-[0.08em] text-accent">
                    {e.period.toUpperCase()}
                  </p>
                  <div className="mt-[5px] mb-[2px] flex flex-wrap items-baseline gap-[10px]">
                    <h3 className="text-[19px] font-bold">{e.title}</h3>
                    <span className="font-mono text-[13px] text-ink before:text-faint before:content-['@_']">
                      {e.company}
                    </span>
                  </div>
                  <p className="mb-[11px] font-mono text-[11px] text-faint">
                    {e.location} · Full-time
                  </p>
                  {e.highlights.length > 0 && (
                    <ul>
                      {e.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="relative mb-[5px] max-w-[70ch] pl-[19px] text-[15px] leading-[1.58] text-body before:absolute before:top-[3px] before:left-0 before:text-[11px] before:text-accent before:content-['▸']"
                        >
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* skills */}
        <section id="skills" className="mb-[60px] max-[760px]:mb-12">
          <h2 className="mb-6 font-mono text-[13px] uppercase tracking-[0.12em] text-accent">
            02 · Capabilities
          </h2>
          <div className="grid grid-cols-3 gap-x-10 gap-y-[30px] max-[760px]:grid-cols-1 max-[760px]:gap-[26px]">
            {skills.map((s) => (
              <div key={s.group}>
                <p className="mb-[11px] border-b border-dotted border-grid pb-[6px] font-mono text-[11px] uppercase tracking-[0.1em] text-faint">
                  {s.group}
                </p>
                <div className="flex flex-wrap gap-[7px]">
                  {s.items.map((it) => (
                    <span key={it} className="border border-ink px-[10px] py-[4px] font-mono text-[12px]">
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* education */}
        <section id="education" className="mb-[60px] max-[760px]:mb-12">
          <h2 className="mb-6 font-mono text-[13px] uppercase tracking-[0.12em] text-accent">
            03 · Education
          </h2>
          <div className="space-y-6">
            {education.map((ed, i) => (
              <div key={i} className="flex items-center gap-4 max-[760px]:gap-3">
                {ed.logo && (
                  <Image
                    src={ed.logo}
                    alt={`${ed.school} logo`}
                    width={48}
                    height={48}
                    className="h-12 w-12 shrink-0 border border-ink object-cover"
                  />
                )}
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[11px] tracking-[0.08em] text-accent">{ed.period}</p>
                  <h3 className="mt-[5px] text-[19px] font-bold leading-snug">{ed.school}</h3>
                  <p className="mt-[3px] text-[15px] text-body">{ed.degree}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* footer / colophon */}
        <footer className="mt-2 flex flex-wrap items-end justify-between gap-5 border-t-[1.5px] border-ink pt-5">
          <div className="font-mono text-[11px] uppercase tracking-[0.07em] text-faint">© 2026 Volkan Yavuz</div>
          <div className="flex h-3 items-end" aria-hidden="true">
            {RULER.map((_, i) => (
              <i key={i} className={`block w-[7px] border-l border-faint ${i % 5 === 0 ? "h-3" : "h-[5px]"}`} />
            ))}
          </div>
        </footer>

      </div>
    </div>
  );
}
