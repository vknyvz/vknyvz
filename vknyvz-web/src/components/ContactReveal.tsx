"use client";

import { useState } from "react";

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
    </div>
  );
}
