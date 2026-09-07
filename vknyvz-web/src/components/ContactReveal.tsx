"use client";

import { useState } from "react";
import { LINKEDIN_URL } from "@/content/links";

// Both email and phone are split + reveal-on-click, so the real values are never
// in the page source for harvesters/indexers until a visitor clicks.
const E_USER = "vkn";
const E_DOMAIN = "vknyvz.com";
const P_DIGITS = "4244220381";
const P_DISPLAY = "(424) 422-0381";

const reveal =
  "cursor-pointer border-b border-dotted border-faint text-ink transition-colors hover:border-accent hover:text-accent";

export default function ContactReveal({ location }: { location: string }) {
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  return (
    <div className="whitespace-nowrap text-right font-mono text-[12.5px] leading-[1.9] text-faint max-[760px]:text-left">
      <div className="uppercase tracking-[0.07em]">{location}</div>

      <div>
        <span>email · </span>
        {showEmail ? (
          <a href={`mailto:${E_USER}@${E_DOMAIN}`} className={reveal}>
            {`${E_USER}@${E_DOMAIN}`}
          </a>
        ) : (
          <button type="button" onClick={() => setShowEmail(true)} className={reveal}>
            click to reveal
          </button>
        )}
      </div>

      <div>
        <span>phone · </span>
        {showPhone ? (
          <a href={`tel:+1${P_DIGITS}`} className={reveal}>
            {P_DISPLAY}
          </a>
        ) : (
          <button type="button" onClick={() => setShowPhone(true)} className={reveal}>
            click to reveal
          </button>
        )}
      </div>

      <div className="flex items-center justify-end gap-[7px] pt-[6px] max-[760px]:justify-start">
        <span>linkedin ·</span>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Volkan Yavuz on LinkedIn"
          className="group relative inline-flex text-ink transition-colors hover:text-accent"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          <span
            role="tooltip"
            className="pointer-events-none absolute top-full left-1/2 mt-[7px] -translate-x-1/2 bg-ink px-[8px] py-[3px] text-[11px] leading-none tracking-[0.05em] text-paper opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
          >
            LinkedIn
          </span>
        </a>
      </div>
    </div>
  );
}
