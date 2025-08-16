"use client"

import { useState } from "react"

export default function ContactPage() {
  const [emailPlaceholder, setEmailPlaceholder] = useState<string>("[click to reveal]")
  const [phonePlaceholder, setPhonePlaceholder] = useState<string>("[click to reveal]")

  const revealContact = (what: string) => {
    if (what === 'email') {
      setEmailPlaceholder('vkn@vknyvz.com');
    } else {
      setPhonePlaceholder('(646) 371-7070');
    }
  };
  
  return (
    <>
      <div className="mt-16">
          <div className="text-2xl md:text-4xl font-bold mb-6 text-center">
              <span className="terminal-green">$</span> contact<span className="terminal-cursor">_</span>
          </div>
          
          <div className="flex flex-col items-center justify-center space-y-8 mt-12">
              <div className="text-center">
                  <div className="mb-2 terminal-green">email</div>
                  <button onClick={() => revealContact('email')} 
                      className="bg-terminal-background border border-terminal-green px-8 py-3 rounded hover:bg-gray-800 transition-colors cursor-pointer"
                      aria-label="Reveal email address"
                  >
                      <span id="email-placeholder">{ emailPlaceholder }</span>
                  </button>
                  <div className="text-xs mt-2 text-gray-400">Click to reveal, protected from bots</div>
              </div>

              <div className="text-center">
                  <div className="mb-2 terminal-green">phone</div>
                  <button onClick={() => revealContact('phone')}
                      className="bg-terminal-background border border-terminal-green px-8 py-3 rounded hover:bg-gray-800 transition-colors cursor-pointer"
                      aria-label="Reveal phone number"
                  >
                      <span id="phone-placeholder">{ phonePlaceholder }</span>
                  </button>
                  <div className="text-xs mt-2 text-gray-400">Click to reveal, protected from bots</div>
              </div>
          </div>
      </div>

      <div className="text-[0.65rem] md:text-sm mt-16 flex items-start">
          <span className="terminal-green mr-2">volkan@portfolio ~ %</span>
          <span className="flex-1 border-b border-terminal-green"> &nbsp; ./contact.sh --secure<span className="terminal-cursor">|</span>
          </span>
      </div>
    </>
  )
}