const LINKS = ["experience", "skills", "education"];

export default function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-10 flex items-center justify-between gap-3 border-b border-grid bg-paper/90 px-8 py-[18px] font-mono text-[15px] tracking-[0.06em] backdrop-blur-sm max-[760px]:px-4 max-[760px]:py-[14px]">
      <a href="#top" aria-label="Volkan Yavuz, home" className="group inline-flex shrink-0 items-center">
        <span
          aria-hidden="true"
          className="block h-[30px] w-[32px] bg-[url('/v-black.svg')] bg-contain bg-center bg-no-repeat transition-opacity group-hover:opacity-60"
        />
      </a>
      <div className="flex gap-[10px] max-[760px]:gap-[6px]">
        {LINKS.map((s) => (
          <a
            key={s}
            href={`#${s}`}
            className="border border-ink px-[10px] py-[4px] font-mono text-[12px] text-ink no-underline transition-colors hover:border-accent hover:text-accent max-[760px]:px-2 max-[760px]:text-[11px]"
          >
            {s}
          </a>
        ))}
      </div>
    </nav>
  );
}
