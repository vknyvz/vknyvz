<script setup lang="ts">

</script>

<template>
    <!-- Main Content -->
    <div class="mt-16">
        <div class="text-xl md:text-4xl font-bold mb-6">
            <span class="terminal-green">$</span> skills<span class="terminal-cursor">_</span>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm md:text-md">
            <!-- Backend Column -->
            <div class="border border-terminal-green p-4 rounded">
                <div class="terminal-green font-bold mb-2">~/backend</div>
                <ul class="space-y-1">
                    <li class="flex items-start">
                        <span class="terminal-green mr-2">→</span>
                        <span>PHP, Laravel, Symfony, NodeJS (Express), GraphQL APIs</span>
                    </li>
                    <li class="flex items-start">
                        <span class="terminal-green mr-2">→</span>
                        <span>Working knowledge of Python with Flask</span>
                    </li>
                </ul>
            </div>

            <!-- Frontend Column -->
            <div class="border border-terminal-green p-4 rounded">
                <div class="terminal-green font-bold mb-2">~/frontend</div>
                <ul class="space-y-1">
                    <li class="flex items-start">
                        <span class="terminal-green mr-2">→</span>
                        <span>Vue.js, React</span>
                    </li>
                    <li class="flex items-start">
                        <span class="terminal-green mr-2">→</span>
                        <span>TypeScript</span>
                    </li>
                    <li class="flex items-start">
                        <span class="terminal-green mr-2">→</span>
                        <span>HTML5, CSS3, SASS</span>
                    </li>
                </ul>
            </div>

            <!-- Cloud/DevOps Column -->
            <div class="border border-terminal-green p-4 rounded">
                <div class="terminal-green font-bold mb-2">~/devops</div>
                <ul class="space-y-1">
                    <li class="flex items-start">
                        <span class="terminal-green mr-2">→</span>
                        <span>AWS (EC2, S3, Lambda, CloudFormation)</span>
                    </li>
                    <li class="flex items-start">
                        <span class="terminal-green mr-2">→</span>
                        <span>Docker, CI/CD with Jenkins</span>
                    </li>
                </ul>
            </div>

            <!-- AI Column -->
            <div class="border border-terminal-green p-4 rounded">
                <div class="terminal-green font-bold mb-2">~/AI</div>
                <ul class="space-y-1">
                    <li class="flex items-start">
                        <span class="terminal-green mr-2">→</span>
                        <span>LLM Integration (OpenAI, Claude)</span>
                    </li>
                    <li class="flex items-start">
                        <span class="terminal-green mr-2">→</span>
                        <span>NLP Workflows</span>
                    </li>
                </ul>
            </div>

            <!-- Databases Column -->
            <div class="border border-terminal-green p-4 rounded">
                <div class="terminal-green font-bold mb-2">~/databases</div>
                <ul class="space-y-1">
                    <li class="flex items-start">
                        <span class="terminal-green mr-2">→</span>
                        <span>MySQL, MongoDB</span>
                    </li>
                    <li class="flex items-start">
                        <span class="terminal-green mr-2">→</span>
                        <span>Pinecone (Vector DB)</span>
                    </li>
                </ul>
            </div>

            <!-- Performance Column -->
            <div class="border border-terminal-green p-4 rounded">
                <div class="terminal-green font-bold mb-2">~/performance</div>
                <ul class="space-y-1">
                    <li class="flex items-start">
                        <span class="terminal-green mr-2">→</span>
                        <span>Redis, Varnish</span>
                    </li>
                    <li class="flex items-start">
                        <span class="terminal-green mr-2">→</span>
                        <span>ElasticSearch</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <!-- Terminal Prompt -->
  <div class="text-xs md:text-md mt-16 flex items-start">
      <span class="terminal-green mr-2">volkan@portfolio ~ %</span>
      <span class="flex-1 border-b border-terminal-green"> &nbsp; cat skills.txt<span class="terminal-cursor">|</span>
      </span>
  </div>
</template>
