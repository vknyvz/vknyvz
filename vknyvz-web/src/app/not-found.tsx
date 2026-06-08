import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto mt-[88px] mb-10 max-w-[1020px] border-2 border-ink max-[760px]:mx-3 max-[760px]:mt-[66px]">
      <div className="m-[5px] border border-ink px-[60px] py-[80px] text-center max-[760px]:px-[22px] max-[760px]:py-[48px]">
        <p className="mb-6 font-mono text-[13px] uppercase tracking-[0.14em] text-accent">error · 404</p>
        <h1 className="font-display text-[clamp(36px,7vw,50px)] leading-[1.04] tracking-[0.005em]">
          Off the grid.
        </h1>
        <p className="mt-5 text-[16.5px] text-body">
          This page never made it onto the blueprint.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block border-b border-accent font-mono text-[13px] text-ink no-underline hover:text-accent"
        >
          ← Back to the drawing board
        </Link>
      </div>
    </div>
  );
}
