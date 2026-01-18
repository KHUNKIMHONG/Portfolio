<template>
  <transition enter-active-class="transition-all duration-300 ease-out"
    leave-active-class="transition-all duration-200 ease-in" enter-from-class="opacity-0 translate-y-8 scale-75"
    enter-to-class="opacity-100 translate-y-0 scale-100" leave-from-class="opacity-100 translate-y-0 scale-100"
    leave-to-class="opacity-0 translate-y-8 scale-75">
    <button v-if="showButton" @click="goTop" class="fixed bottom-4 right-2 z-30 group" aria-label="Scroll to top"
      type="button">
      
      <div class="relative h-14 w-14"> 
        
        <div
          class="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300">
        </div>
        
        <div class="absolute inset-0 bg-gradient-to-br from-red-600 to-rose-700 
                    group-hover:from-pink-700 group-hover:to-purple-800 
                    rounded-full shadow-xl hover:shadow-2xl hover:shadow-red-500/50
             transition-all duration-300 group-hover:scale-110 active:scale-95 transform-gpu
             backdrop-blur-sm border border-white/10 flex items-center justify-center">
          
          <svg xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-white transition-transform duration-300 group-hover:-translate-y-1" fill="none"
            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
          </svg>

          <div
            class="absolute inset-0 rounded-full border-2 border-white/30 scale-0 group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500">
          </div>
        </div>
        
        <svg v-if="showProgress" class="absolute inset-0 -rotate-90 pointer-events-none" :width="progressSize"
          :height="progressSize">
          <circle cx="50%" cy="50%" :r="progressRadius" fill="none" stroke="rgba(255, 255, 255, 0.2)"
            :stroke-width="progressStrokeWidth" />
          <circle cx="50%" cy="50%" :r="progressRadius" fill="none" stroke="url(#gradient)"
            :stroke-width="progressStrokeWidth" stroke-linecap="round" :stroke-dasharray="progressCircumference"
            :stroke-dashoffset="progressOffset" class="transition-all duration-300" />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#db2777" /> <stop offset="100%" stop-color="#9333ea" /> </linearGradient>
          </defs>
        </svg>
      </div>
    </button>
  </transition>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

/**
 * Props interface for the scroll to top button
 */
interface ScrollToTopProps {
  /** Scroll threshold in pixels before button appears */
  scrollThreshold?: number;
  /** Whether to show scroll progress indicator */
  showProgress?: boolean;
  /** Scroll behavior type */
  scrollBehavior?: 'smooth' | 'auto';
}

// Props with defaults
const props = withDefaults(defineProps<ScrollToTopProps>(), {
  scrollThreshold: 300,
  showProgress: true,
  scrollBehavior: 'smooth',
});

// Reactive state
const showButton = ref<boolean>(false);
const scrollProgress = ref<number>(0);

// Progress circle calculations
// Set the size to match the button: p-4 (16px * 2) + h-6 (24px) = 56
const progressSize = 56; // Updated SVG size to match button dimensions (p-4 + h-6/w-6)
const progressStrokeWidth = 3;
const progressRadius = (progressSize - progressStrokeWidth) / 2 - 2;
const progressCircumference = 2 * Math.PI * progressRadius;

/**
 * Computed scroll progress offset for the circle
 */
const progressOffset = computed(() => {
  const progress = scrollProgress.value / 100;
  return progressCircumference * (1 - progress);
});

/**
 * Handles scroll event and updates button visibility and progress
 */
const handleScroll = (): void => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  // Show/hide button based on scroll position
  showButton.value = scrollTop > props.scrollThreshold;

  // Calculate scroll progress percentage
  if (props.showProgress && docHeight > 0) {
    scrollProgress.value = (scrollTop / docHeight) * 100;
  }
};

/**
 * Scrolls to the top of the page smoothly
 */
const goTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: props.scrollBehavior
  });
};

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Ensure smooth transitions */
* {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Additional hover effect for the button */
button:active {
  transform: scale(0.95);
}
</style>