<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const isMenuOpen = ref(false);
const links = [
  { name: 'home', text: 'Home' },
  { name: 'skills', text: 'Skills' },
  { name: 'work', text: 'Work' },
  { name: 'contact', text: 'Contact' }
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const year = new Date().getFullYear()
</script>

<template>
  <body id="" class="font-mono bg-terminal-background text-terminal-text min-h-screen">
    <div className="platform-chooser flex items-center justify-center sticky top-0 z-50 bg-white h-[5vh] text-black border-b border-gray-200 hidden md:block">
      <div className="w-full flex items-center justify-center">
        <div className="flex items-center whitespace-nowrap">
          You are currently viewing the 
          <v-icon name="vi-file-type-vue" className="mx-1" />
          version of my site. Switch to 
          <a href="/react">
            <v-icon name="vi-file-type-reactjs" className="mx-1" />
          </a>
          version
          <span className="terminal-cursor">_</span>
        </div>
      </div>
    </div>

    <div className="platform-chooser flex items-center justify-center sticky top-0 z-50 bg-white h-[5vh] text-black border-b border-gray-200 md:hidden">
      <div className="w-full flex items-center justify-center">
        <div className="flex items-center whitespace-nowrap">
          Viewing the 
          <v-icon name="vi-file-type-vue" className="mx-0.5 w-3.5 h-3.5" /> 
          version. Switch to 
          <a href="/react">
            <v-icon name="vi-file-type-reactjs" className="mx-0.5 w-3.5 h-3.5" />
          </a>
          <span className="terminal-cursor">_</span>
        </div>
      </div>
    </div>
    
    <div class="container mx-auto px-4 py-8">

      <!-- Terminal Header -->
      <div class="flex items-center mb-2">
        <div class="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
        <div class="w-3 h-3 rounded-full bg-green-500"></div>
        <div class="ml-4 text-sm opacity-70">vknyvz-workstation — zsh — 80×24</div>
      </div>
      
        <!-- Content Area with Terminal Border -->
        <div class="border border-terminal-green p-6">
            <!-- Header/Navigation -->
            <div class="flex justify-between items-center mb-12">
            <div class="terminal-green">&lt;/ Volkan Yavuz</div>
            
            <!-- Desktop Menu (hidden on mobile) -->
            <nav class="hidden md:flex space-x-6">
              <router-link :to="{ name: 'home'}" class="hover:text-terminal-green transition">Home</router-link>
              <router-link :to="{ name: 'skills'}" class="hover:text-terminal-green transition">Skills</router-link>
              <router-link :to="{ name: 'work'}" class="hover:text-terminal-green transition">Work</router-link>
              <router-link :to="{ name: 'contact'}" class="hover:text-terminal-green transition">Contact</router-link>
            </nav>
            
            <!-- Mobile Menu (hidden on desktop) -->
            <div class="md:hidden relative">
                <!-- Mobile Menu Button -->
                <button 
                  @click="toggleMenu"
                  class="terminal-green focus:outline-none"
                  aria-label="Toggle menu">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                  </svg>
                </button>
                
                <!-- Mobile Menu Dropdown -->
                <div 
                    v-show="isMenuOpen"
                    class="absolute right-0 mt-2 w-48 border border-terminal-green mobile-background rounded-md shadow-lg py-1 z-50">
                  <router-link 
                      v-for="link in links" 
                      :key="link.name"
                      :to="{ name: link.name }" 
                      @click="isMenuOpen = false"
                      class="block px-4 py-2 hover:text-terminal-green"
                  >
                    {{ link.text }}
                  </router-link>
                </div>
            </div>
            </div>

            <RouterView />
        </div>

        <!-- Footer -->
        <div class="mt-8 text-[0.65rem] md:text-sm opacity-70 flex justify-between">
            <div>Built with VueJS & Tailwind CSS</div>
            <div>&copy; {{ year }} Volkan Yavuz</div>
        </div>
    </div>
  </body>
</template>