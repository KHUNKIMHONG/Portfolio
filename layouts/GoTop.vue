<template>
  <transition
    enter-active-class="transition-all duration-300 ease-out"
    leave-active-class="transition-all duration-200 ease-in"
    enter-from-class="opacity-0 translate-y-4 scale-90"
    enter-to-class="opacity-100 translate-y-0 scale-100"
    leave-from-class="opacity-100 translate-y-0 scale-100"
    leave-to-class="opacity-0 translate-y-4 scale-90"
  >
    <button
      v-if="showButton"
      @click="goTop"
      class="fixed bottom-4 right-3 z-30 group"
      aria-label="Scroll to top"
      type="button"
    >
      <div class="relative h-11 w-11">
        <!-- Glow -->
        <div class="absolute inset-0 bg-primary-600/40 rounded-full blur-md opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>

        <!-- Button -->
        <div class="absolute inset-0 bg-[#0f1123] border border-primary-500/40 group-hover:border-primary-500/80 group-hover:bg-primary-600/20 rounded-full flex items-center justify-center transition-all duration-300">
          <svg class="w-4 h-4 text-primary-400 group-hover:text-white transition-all duration-300 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7"/>
          </svg>
        </div>

        <!-- Progress ring -->
        <svg v-if="showProgress" class="absolute inset-0 -rotate-90 pointer-events-none" :width="progressSize" :height="progressSize">
          <circle cx="50%" cy="50%" :r="progressRadius" fill="none" stroke="rgba(99,102,241,0.15)" :stroke-width="progressStrokeWidth"/>
          <circle cx="50%" cy="50%" :r="progressRadius" fill="none" stroke="url(#prog-gradient)" :stroke-width="progressStrokeWidth" stroke-linecap="round" :stroke-dasharray="progressCircumference" :stroke-dashoffset="progressOffset" class="transition-all duration-300"/>
          <defs>
            <linearGradient id="prog-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#6366f1"/>
              <stop offset="100%" stop-color="#a78bfa"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </button>
  </transition>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

interface ScrollToTopProps {
  scrollThreshold?: number;
  showProgress?: boolean;
  scrollBehavior?: 'smooth' | 'auto';
}

const props = withDefaults(defineProps<ScrollToTopProps>(), {
  scrollThreshold: 300,
  showProgress: true,
  scrollBehavior: 'smooth',
});

const showButton     = ref(false);
const scrollProgress = ref(0);

const progressSize        = 44;
const progressStrokeWidth = 2.5;
const progressRadius      = (progressSize - progressStrokeWidth) / 2 - 1;
const progressCircumference = 2 * Math.PI * progressRadius;

const progressOffset = computed(() => progressCircumference * (1 - scrollProgress.value / 100));

const handleScroll = () => {
  const scrollTop  = window.scrollY || document.documentElement.scrollTop;
  const docHeight  = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  showButton.value = scrollTop > props.scrollThreshold;
  if (props.showProgress && docHeight > 0) scrollProgress.value = (scrollTop / docHeight) * 100;
};

const goTop = () => window.scrollTo({ top: 0, behavior: props.scrollBehavior });

onMounted(() => { window.addEventListener('scroll', handleScroll, { passive: true }); handleScroll(); });
onUnmounted(() => window.removeEventListener('scroll', handleScroll));
</script>
