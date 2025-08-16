import type { Metadata } from "next";
import "@/assets/css/globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Volkan Yavuz",
  applicationName: "vknyvz[dot]com",
  creator: "Volkan Yavuz",
  description: "Volkan Yavuz Portfolio Web Site",
  keywords: "Volkan Yavuz, volkan, yavuz, developer, engineer"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const year = new Date().getFullYear()

  return (
    <html lang="en">
      <body className="antialiased font-mono bg-terminal-background text-terminal-text min-h-screen">
        <div className="container mx-auto px-4 py-8">
          
          <div className="flex items-center mb-2">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="ml-4 text-sm opacity-70">vknyvz-workstation — zsh — 80×22</div>
          </div>

          <div className="border border-terminal-green p-6">
            <div className="flex justify-between items-center mb-12">
              <div className="terminal-green">&lt;/ Volkan Yavuz</div>
            
              <Header />
            </div>

            {children}
          </div>

          <div className="mt-8 text-[0.65rem] md:text-sm opacity-70 flex justify-between">
              <div>Built with Next.js & Tailwind CSS</div>
              <div>&copy; { year } Volkan Yavuz</div>
          </div>
        </div>
      </body>
    </html>
  );
}
