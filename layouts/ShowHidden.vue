<template>
  <div v-if="showButton" class="fixed bottom-20 right-3 z-30 flex flex-col items-end">

    <!-- Social links -->
    <transition name="social-menu">
      <div v-if="isOpen" class="mb-3 flex flex-col items-end gap-2.5">
        <a
          v-for="s in socials"
          :key="s.label"
          :href="s.href"
          :target="s.target"
          class="flex items-center gap-2.5 group"
          :aria-label="s.label"
        >
          <!-- Label -->
          <span class="text-xs font-medium text-white bg-[#0f1123]/95 border border-white/10 px-3 py-1.5 rounded-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none whitespace-nowrap">
            {{ s.label }}
          </span>
          <!-- Icon -->
          <div
            class="w-10 h-10 rounded-xl flex items-center justify-center text-white border border-white/10 transition-all duration-200 group-hover:scale-105 group-hover:border-white/30"
            :style="{ backgroundColor: s.bg }"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" v-html="s.svg" aria-hidden="true"></svg>
          </div>
        </a>
      </div>
    </transition>

    <!-- Toggle button -->
    <button
      @click="toggleMenu"
      class="relative w-11 h-11 rounded-xl border flex items-center justify-center transition-all duration-300 group"
      :class="isOpen
        ? 'bg-primary-600/20 border-primary-500/60 text-white'
        : 'bg-[#0f1123] border-white/10 text-gray-400 hover:border-primary-500/50 hover:text-primary-400'"
      aria-label="Toggle social links"
    >
      <!-- Glow -->
      <div class="absolute inset-0 rounded-xl bg-primary-600/20 blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>

      <svg v-if="!isOpen" class="w-4 h-4 relative z-10 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
      </svg>
      <svg v-else class="w-4 h-4 relative z-10 transition-transform duration-300 rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/>
      </svg>

      <!-- Count badge when closed -->
      <span v-if="!isOpen" class="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-primary-600 border border-[#0b0d17] text-[9px] font-bold text-white flex items-center justify-center">
        {{ socials.length }}
      </span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isOpen     = ref(false);
const showButton = ref(false);

const toggleMenu   = () => { isOpen.value = !isOpen.value; };
const handleScroll = () => { showButton.value = window.scrollY > 200; };

onMounted(() => window.addEventListener('scroll', handleScroll));
onUnmounted(() => window.removeEventListener('scroll', handleScroll));

const socials = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/maprox69/',
    target: '_blank',
    bg: '#1877f2',
    svg: `<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>`,
  },
  {
    label: 'Telegram',
    href: 'https://t.me/khun_kimhong365',
    target: '_blank',
    bg: '#229ed9',
    svg: `<path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>`,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/khunkimhong',
    target: '_blank',
    bg: '#24292e',
    svg: `<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>`,
  },
  {
    label: 'Email',
    href: 'mailto:khunkimhong039@gmail.com',
    target: '_self',
    bg: '#4f46e5',
    svg: `<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>`,
  },
];
</script>

<style scoped>
.social-menu-enter-active, .social-menu-leave-active { transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1); }
.social-menu-enter-from, .social-menu-leave-to { opacity: 0; transform: translateY(10px) scale(0.95); }
</style>
