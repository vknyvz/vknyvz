export default function HomePage() {
  return (
    <>
      <div className="mt-16">
        <div className="text-md md:text-4xl font-bold mb-6">
            <span className="terminal-green">$</span> Software Engineer<span className="terminal-cursor">_</span>
        </div>
        
        <div className="text-sm md:text-md opacity-90 leading-relaxed">
            Innovative engineer with extensive enterprise-level expertise in cloud-native architectures and object-oriented design. 
            Proven track record of delivering scalable, high-performance solutions using modern open-source frameworks and leading cloud platforms.
            <br /><br />
            Versatile technical leader, adept at architecting backend systems and collaborating on full-stack projects in fast-paced, agile environments. 
            Combines deep technical mastery with a passion for clean code, DevOps automation, and emerging technologies like AI/ML tooling and serverless computing.
        </div>
      </div>

      <div className="text-sm md:text-md mt-16 flex items-start">
          <span className="terminal-green mr-2">volkan@portfolio ~ %</span>
          <span className="flex-1 border-b border-terminal-green"> &nbsp; ./about.sh<span className="terminal-cursor">|</span>
          </span>
      </div>
    </>
  )
}