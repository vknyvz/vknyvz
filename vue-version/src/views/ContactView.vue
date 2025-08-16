<script setup lang="ts">
import {ref} from 'vue'

const click_to_reveal_email_placeholder = ref('[click to reveal]' as string)
const click_to_reveal_phone_placeholder = ref('[click to reveal]' as string)

const revealPhone = () => {
    const real_phone = '(646) 371-7070'
    click_to_reveal_phone_placeholder.value = real_phone
}

const revealEmail = () => {
    const real_email = 'vknyvz@gmail.com'
    click_to_reveal_email_placeholder.value = real_email
}
</script>

<template>
  <!-- Main Content -->
  <div class="mt-16">
      <div class="text-2xl md:text-4xl font-bold mb-6 text-center">
          <span class="terminal-green">$</span> contact<span class="terminal-cursor">_</span>
      </div>
      
      <div class="flex flex-col items-center justify-center space-y-8 mt-12">
          <!-- Email -->
          <div class="text-center">
              <div class="mb-2 terminal-green">email</div>
              <button 
                  onclick="revealContact('email')" 
                  class="bg-terminal-background border border-terminal-green px-8 py-3 rounded hover:bg-gray-800 transition-colors cursor-pointer"
                  aria-label="Reveal email address"
              >
                  <span id="email-placeholder" @click="revealEmail">{{ click_to_reveal_email_placeholder }}</span>
              </button>
              <div class="text-xs mt-2 text-gray-400">Click to reveal, protected from bots</div>
          </div>

          <!-- Phone -->
          <div class="text-center">
              <div class="mb-2 terminal-green">phone</div>
              <button 
                  onclick="revealContact('phone')" 
                  class="bg-terminal-background border border-terminal-green px-8 py-3 rounded hover:bg-gray-800 transition-colors cursor-pointer"
                  aria-label="Reveal phone number"
              >
                  <span id="phone-placeholder" @click="revealPhone">{{ click_to_reveal_phone_placeholder }}</span>
              </button>
              <div class="text-xs mt-2 text-gray-400">Click to reveal, protected from bots</div>
          </div>
      </div>
  </div>

  <!-- Terminal Prompt -->
  <div class="text-[0.65rem] md:text-sm mt-16 flex items-start">
      <span class="terminal-green mr-2">volkan@portfolio ~ %</span>
      <span class="flex-1 border-b border-terminal-green"> &nbsp; ./contact.sh --secure<span class="terminal-cursor">|</span>
      </span>
  </div>
</template>
