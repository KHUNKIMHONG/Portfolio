<template>
  <transition
    enter-active-class="transition-opacity duration-300"
    leave-active-class="transition-opacity duration-500"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <div 
      v-if="isLoading" 
      class="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      aria-live="assertive" 
      role="alert"
      aria-label="Loading content"
    >
      <!-- Animated gradient background -->
      <div class="absolute inset-0 bg-gradient-to-br from-slate-950 via-primary-950 to-slate-950"></div>
      
      <!-- Animated orbs -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-float"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary-500/15 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <!-- Content container -->
      <div class="relative z-10 flex flex-col items-center justify-center px-4">
        <!-- Logo with glow effect -->
        <div class="relative mb-8 animate-scale-in">
          <div class="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-500 rounded-full blur-xl opacity-50 animate-pulse-glow"></div>
          <img 
            :src="logoSrc" 
            :alt="logoAlt" 
            class="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white/20 shadow-2xl object-cover backdrop-blur-sm"
          />
        </div>

        <!-- Orbital loader -->
        <div class="relative mb-8" role="presentation">
          <svg 
            class="loader-svg" 
            width="200" 
            height="200" 
            viewBox="0 0 240 240"
          >
            <!-- Outer ring -->
            <circle 
              class="loader-ring loader-ring--outer" 
              cx="120" 
              cy="120" 
              r="105" 
              fill="none" 
              :stroke="colorA"
              stroke-width="3" 
              stroke-dasharray="0 660" 
              stroke-dashoffset="-330" 
              stroke-linecap="round"
              opacity="0.6"
            />
            
            <!-- Inner ring -->
            <circle 
              class="loader-ring loader-ring--inner" 
              cx="120" 
              cy="120" 
              r="35" 
              fill="none" 
              :stroke="colorB"
              stroke-width="3" 
              stroke-dasharray="0 220" 
              stroke-dashoffset="-110" 
              stroke-linecap="round"
              opacity="0.8"
            />
            
            <!-- Left orbit -->
            <circle 
              class="loader-ring loader-ring--left" 
              cx="85" 
              cy="120" 
              r="70" 
              fill="none" 
              :stroke="colorC"
              stroke-width="3" 
              stroke-dasharray="0 440" 
              stroke-linecap="round"
              opacity="0.7"
            />
            
            <!-- Right orbit -->
            <circle 
              class="loader-ring loader-ring--right" 
              cx="155" 
              cy="120" 
              r="70" 
              fill="none" 
              :stroke="colorD"
              stroke-width="3" 
              stroke-dasharray="0 440" 
              stroke-linecap="round"
              opacity="0.7"
            />
          </svg>

          <!-- Center glow -->
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-16 h-16 bg-gradient-to-br from-primary-500/30 to-primary-500/30 rounded-full blur-xl animate-pulse-slow"></div>
          </div>
        </div>

        <!-- Loading text with typing effect -->
        <div class="text-center space-y-3 animate-fade-in-up">
          <p class="text-white text-xl sm:text-2xl font-bold tracking-wide">
            {{ loadingText }}
          </p>
          <!-- <div class="flex items-center justify-center gap-1.5">
            <span 
              v-for="dot in 3" 
              :key="dot"
              class="w-2 h-2 bg-gradient-to-r from-primary-500 to-primary-500 rounded-full animate-bounce"
              :style="{ animationDelay: `${dot * 150}ms` }"
            ></span>
          </div> -->
          
          <!-- Optional progress indicator -->
          <!-- <div v-if="showProgress" class="mt-6 w-64 max-w-full">
            <div class="h-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
              <div 
                class="h-full bg-gradient-to-r from-primary-500 via-primary-500 to-primary-500 rounded-full animate-progress"
              ></div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

/**
 * Props interface for the loading screen component
 */
interface LoadingScreenProps {
  /** Color for the outer ring (hex or CSS color) */
  colorA?: string;
  /** Color for the inner ring (hex or CSS color) */
  colorB?: string;
  /** Color for the left orbit (hex or CSS color) */
  colorC?: string;
  /** Color for the right orbit (hex or CSS color) */
  colorD?: string;
  /** Source path for the logo image */
  logoSrc?: string;
  /** Alt text for the logo image (accessibility) */
  logoAlt?: string;
  /** Loading message text displayed to users */
  loadingText?: string;
  /** Whether to show the progress bar */
  showProgress?: boolean;
  /** Minimum loading time in milliseconds (prevents flash) */
  minLoadingTime?: number;
}

// Props with defaults
const props = withDefaults(defineProps<LoadingScreenProps>(), {
  colorA: '#ee6b50', // primary-500
  colorB: '#f48b77', // primary-400
  colorC: '#da4f34', // primary-600
  colorD: '#10b981', // green accent
  logoSrc: '/Portfolio/ower/ownPhoto.jpg',
  logoAlt: 'Application Logo',
  loadingText: 'Loading Portfolio',
  showProgress: true,
  minLoadingTime: 1000,
});

// Reactive state
const isLoading = ref<boolean>(true);
const startTime = ref<number>(0);

/**
 * Handles the page load event with minimum loading time
 * Ensures the loading screen displays for at least the minimum duration
 */
const handlePageLoad = (): void => {
  const currentTime = Date.now();
  const elapsedTime = currentTime - startTime.value;
  const remainingTime = Math.max(0, props.minLoadingTime - elapsedTime);

  setTimeout(() => {
    isLoading.value = false;
  }, remainingTime);
};

// Lifecycle hooks
onMounted(() => {
  startTime.value = Date.now();
  
  // Check if page is already loaded
  if (document.readyState === 'complete') {
    handlePageLoad();
  } else {
    window.addEventListener('load', handlePageLoad);
  }
});

onBeforeUnmount(() => {
  window.removeEventListener('load', handlePageLoad);
});
</script>

<style scoped>
/* ============================================
   LOADER ANIMATIONS
   ============================================ */

.loader-svg {
  width: 12.5rem;
  height: 12.5rem;
  filter: drop-shadow(0 0 20px rgba(220, 38, 38, 0.3));
}

/* Outer ring animation */
.loader-ring--outer {
  animation: ring-outer 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

/* Inner ring animation */
.loader-ring--inner {
  animation: ring-inner 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

/* Left orbit animation */
.loader-ring--left {
  animation: ring-orbit-left 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

/* Right orbit animation */
.loader-ring--right {
  animation: ring-orbit-right 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  animation-delay: 0.2s;
}

/* ============================================
   KEYFRAME ANIMATIONS
   ============================================ */

@keyframes ring-outer {
  0% {
    stroke-dasharray: 0 660;
    stroke-dashoffset: -330;
    opacity: 0.3;
  }
  25% {
    stroke-dasharray: 100 560;
    stroke-dashoffset: -450;
    opacity: 1;
  }
  50% {
    stroke-dasharray: 100 560;
    stroke-dashoffset: -650;
    opacity: 1;
  }
  75% {
    stroke-dasharray: 0 660;
    stroke-dashoffset: -850;
    opacity: 0.3;
  }
  100% {
    stroke-dasharray: 0 660;
    stroke-dashoffset: -990;
    opacity: 0.3;
  }
}

@keyframes ring-inner {
  0% {
    stroke-dasharray: 0 220;
    stroke-dashoffset: -110;
    opacity: 0.4;
  }
  25% {
    stroke-dasharray: 40 180;
    stroke-dashoffset: -140;
    opacity: 1;
  }
  50% {
    stroke-dasharray: 40 180;
    stroke-dashoffset: -210;
    opacity: 1;
  }
  75% {
    stroke-dasharray: 0 220;
    stroke-dashoffset: -280;
    opacity: 0.4;
  }
  100% {
    stroke-dasharray: 0 220;
    stroke-dashoffset: -330;
    opacity: 0.4;
  }
}

@keyframes ring-orbit-left {
  0% {
    stroke-dasharray: 0 440;
    stroke-dashoffset: 0;
    opacity: 0.3;
  }
  25% {
    stroke-dasharray: 60 380;
    stroke-dashoffset: -60;
    opacity: 1;
  }
  50% {
    stroke-dasharray: 60 380;
    stroke-dashoffset: -220;
    opacity: 1;
  }
  75% {
    stroke-dasharray: 0 440;
    stroke-dashoffset: -380;
    opacity: 0.3;
  }
  100% {
    stroke-dasharray: 0 440;
    stroke-dashoffset: -440;
    opacity: 0.3;
  }
}

@keyframes ring-orbit-right {
  0% {
    stroke-dasharray: 0 440;
    stroke-dashoffset: 0;
    opacity: 0.3;
  }
  25% {
    stroke-dasharray: 60 380;
    stroke-dashoffset: -60;
    opacity: 1;
  }
  50% {
    stroke-dasharray: 60 380;
    stroke-dashoffset: -220;
    opacity: 1;
  }
  75% {
    stroke-dasharray: 0 440;
    stroke-dashoffset: -380;
    opacity: 0.3;
  }
  100% {
    stroke-dasharray: 0 440;
    stroke-dashoffset: -440;
    opacity: 0.3;
  }
}

/* Floating orbs animation */
@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float 10s ease-in-out infinite;
  animation-delay: 1s;
}

/* Pulse glow effect */
@keyframes pulse-glow {
  0%, 100% {
    opacity: 0.4;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.1);
  }
}

.animate-pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}

/* Slow pulse */
@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.05);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 3s ease-in-out infinite;
}

/* Scale in animation */
@keyframes scale-in {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-scale-in {
  animation: scale-in 0.6s ease-out;
}

/* Fade in up animation */
@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out 0.3s both;
}

/* Progress bar animation */
@keyframes progress {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-progress {
  animation: progress 1.5s ease-in-out infinite;
}

/* Bounce animation for dots */
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

.animate-bounce {
  animation: bounce 1s ease-in-out infinite;
}
</style>