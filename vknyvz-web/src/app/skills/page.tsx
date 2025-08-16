export default function SkillsPage() {
  return (
    <>
      <div className="mt-16">
          <div className="text-xl md:text-4xl font-bold mb-6">
              <span className="terminal-green">$</span> skills<span className="terminal-cursor">_</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm md:text-md">
              <div className="border border-terminal-green p-4 rounded">
                  <div className="terminal-green font-bold mb-2">~/backend</div>
                  <ul className="space-y-1">
                      <li className="flex items-start">
                          <span className="terminal-green mr-2">→</span>
                          <span>PHP, Laravel, Symfony, NodeJS (Express), GraphQL APIs</span>
                      </li>
                      <li className="flex items-start">
                          <span className="terminal-green mr-2">→</span>
                          <span>Working knowledge of Python with Flask</span>
                      </li>
                  </ul>
              </div>

              <div className="border border-terminal-green p-4 rounded">
                  <div className="terminal-green font-bold mb-2">~/frontend</div>
                  <ul className="space-y-1">
                      <li className="flex items-start">
                          <span className="terminal-green mr-2">→</span>
                          <span>Vue.js, React</span>
                      </li>
                      <li className="flex items-start">
                          <span className="terminal-green mr-2">→</span>
                          <span>TypeScript</span>
                      </li>
                      <li className="flex items-start">
                          <span className="terminal-green mr-2">→</span>
                          <span>HTML5, CSS3, SASS</span>
                      </li>
                  </ul>
              </div>

              <div className="border border-terminal-green p-4 rounded">
                  <div className="terminal-green font-bold mb-2">~/devops</div>
                  <ul className="space-y-1">
                      <li className="flex items-start">
                          <span className="terminal-green mr-2">→</span>
                          <span>AWS (EC2, S3, Lambda, CloudFormation)</span>
                      </li>
                      <li className="flex items-start">
                          <span className="terminal-green mr-2">→</span>
                          <span>Docker, CI/CD with Jenkins</span>
                      </li>
                  </ul>
              </div>

              <div className="border border-terminal-green p-4 rounded">
                  <div className="terminal-green font-bold mb-2">~/AI</div>
                  <ul className="space-y-1">
                      <li className="flex items-start">
                          <span className="terminal-green mr-2">→</span>
                          <span>LLM Integration (OpenAI, Claude)</span>
                      </li>
                      <li className="flex items-start">
                          <span className="terminal-green mr-2">→</span>
                          <span>NLP Workflows</span>
                      </li>
                  </ul>
              </div>

              <div className="border border-terminal-green p-4 rounded">
                  <div className="terminal-green font-bold mb-2">~/databases</div>
                  <ul className="space-y-1">
                      <li className="flex items-start">
                          <span className="terminal-green mr-2">→</span>
                          <span>MySQL, MongoDB</span>
                      </li>
                      <li className="flex items-start">
                          <span className="terminal-green mr-2">→</span>
                          <span>Pinecone (Vector DB)</span>
                      </li>
                  </ul>
              </div>
        
              <div className="border border-terminal-green p-4 rounded">
                  <div className="terminal-green font-bold mb-2">~/performance</div>
                  <ul className="space-y-1">
                      <li className="flex items-start">
                          <span className="terminal-green mr-2">→</span>
                          <span>Redis, Varnish</span>
                      </li>
                      <li className="flex items-start">
                          <span className="terminal-green mr-2">→</span>
                          <span>ElasticSearch</span>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      
      <div className="text-xs md:text-md mt-16 flex items-start">
          <span className="terminal-green mr-2">volkan@portfolio ~ %</span>
          <span className="flex-1 border-b border-terminal-green"> &nbsp; cat skills.txt<span className="terminal-cursor">|</span>
          </span>
      </div>
    </>
  )
}