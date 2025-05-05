<template>
  <div v-if="isLoading" class="fixed inset-0 bg-gray-900 flex flex-col items-center justify-center z-50"
    aria-live="assertive" role="alert">
    <div class="loader flex flex-col items-center">
      <!-- Logo Image -->
      <img :src="logoSrc" alt="Loading Logo" class="w-14 h-14 mb-4 rounded-full border-2 border-rose-600 shadow-2xl shadow-black object-cover" />
      <!-- SVG Loader -->
      <svg class="pl" width="240" height="240" viewBox="0 0 240 240" role="presentation">
        <circle :class="['pl__ring', 'pl__ring--a']" cx="120" cy="120" r="105" fill="none" :stroke="colorA"
          stroke-width="16" stroke-dasharray="0 660" stroke-dashoffset="-330" stroke-linecap="round"></circle>
        <circle :class="['pl__ring', 'pl__ring--b']" cx="120" cy="120" r="35" fill="none" :stroke="colorB"
          stroke-width="12" stroke-dasharray="0 220" stroke-dashoffset="-110" stroke-linecap="round"></circle>
        <circle :class="['pl__ring', 'pl__ring--c']" cx="85" cy="120" r="70" fill="none" :stroke="colorC"
          stroke-width="14" stroke-dasharray="0 440" stroke-linecap="round"></circle>
        <circle :class="['pl__ring', 'pl__ring--d']" cx="155" cy="120" r="70" fill="none" :stroke="colorD"
          stroke-width="14" stroke-dasharray="0 440" stroke-linecap="round"></circle>
      </svg>
      <!-- Loading Text -->
      <p class="mt-4 text-white text-lg font-semibold animate-pulse">{{ loadingText }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

// Define props for colors, logo source, and loading text
const props = defineProps({
  colorA: {
    type: String,
    default: '#8b5cf6', // Purple
  },
  colorB: {
    type: String,
    default: '#ec4899', // Pink
  },
  colorC: {
    type: String,
    default: '#10b981', // Green
  },
  colorD: {
    type: String,
    default: '#3b82f6', // Blue
  },
  logoSrc: {
    type: String,
    default: '/Portfolio/ower/ownPhoto.jpg', 
  },
  loadingText: {
    type: String,
    default: 'Loading... Please Wait',
  },
});

const isLoading = ref(true);

const handlePageLoad = () => {
  isLoading.value = false;
};

onMounted(() => {
  window.addEventListener("load", handlePageLoad);
});

onBeforeUnmount(() => {
  window.removeEventListener("load", handlePageLoad);
});
</script>

<style scoped>
/* Loader styles */
.pl {
  width: 6em;
  height: 6em;
}

.pl__ring {
  animation: ringA 2.5s ease-in-out infinite;
}

.pl__ring--b {
  animation-name: ringB;
}

.pl__ring--c {
  animation-name: ringC;
}

.pl__ring--d {
  animation-name: ringD;
}

/* Animations */
@keyframes ringA {
  0% {
    stroke-dasharray: 0 660;
    stroke-dashoffset: -330;
    stroke-width: 16;
    opacity: 0.3;
  }
  25% {
    stroke-dasharray: 80 580;
    stroke-dashoffset: -400;
    stroke-width: 20;
    opacity: 1;
  }
  50% {
    stroke-dasharray: 80 580;
    stroke-dashoffset: -600;
    stroke-width: 20;
    opacity: 1;
  }
  75% {
    stroke-dasharray: 0 660;
    stroke-dashoffset: -800;
    stroke-width: 16;
    opacity: 0.3;
  }
  100% {
    stroke-dasharray: 0 660;
    stroke-dashoffset: -990;
    stroke-width: 16;
    opacity: 0.3;
  }
}

@keyframes ringB {
  0% {
    stroke-dasharray: 0 220;
    stroke-dashoffset: -110;
    stroke-width: 12;
    opacity: 0.3;
  }
  25% {
    stroke-dasharray: 30 190;
    stroke-dashoffset: -130;
    stroke-width: 16;
    opacity: 1;
  }
  50% {
    stroke-dasharray: 30 190;
    stroke-dashoffset: -200;
    stroke-width: 16;
    opacity: 1;
  }
  75% {
    stroke-dasharray: 0 220;
    stroke-dashoffset: -270;
    stroke-width: 12;
    opacity: 0.3;
  }
  100% {
    stroke-dasharray: 0 220;
    stroke-dashoffset: -330;
    stroke-width: 12;
    opacity: 0.3;
  }
}

@keyframes ringC {
  0% {
    stroke-dasharray: 0 440;
    stroke-dashoffset: 0;
    stroke-width: 14;
    opacity: 0.3;
  }
  25% {
    stroke-dasharray: 50 390;
    stroke-dashoffset: -50;
    stroke-width: 18;
    opacity: 1;
  }
  50% {
    stroke-dasharray: 50 390;
    stroke-dashoffset: -200;
    stroke-width: 18;
    opacity: 1;
  }
  75% {
    stroke-dasharray: 0 440;
    stroke-dashoffset: -350;
    stroke-width: 14;
    opacity: 0.3;
  }
  100% {
    stroke-dasharray: 0 440;
    stroke-dashoffset: -440;
    stroke-width: 14;
    opacity: 0.3;
  }
}

@keyframes ringD {
  0% {
    stroke-dasharray: 0 440;
    stroke-dashoffset: 0;
    stroke-width: 14;
    opacity: 0.3;
  }
  25% {
    stroke-dasharray: 50 390;
    stroke-dashoffset: -50;
    stroke-width: 18;
    opacity: 1;
  }
  50% {
    stroke-dasharray: 50 390;
    stroke-dashoffset: -200;
    stroke-width: 18;
    opacity: 1;
  }
  75% {
    stroke-dasharray: 0 440;
    stroke-dashoffset: -350;
    stroke-width: 14;
    opacity: 0.3;
  }
  100% {
    stroke-dasharray: 0 440;
    stroke-dashoffset: -440;
    stroke-width: 14;
    opacity: 0.3;
  }
}

/* Tailwind animation for text */
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>
