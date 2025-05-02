<template>
  <div v-if="isLoading" class="fixed inset-0 bg-gray-900 flex flex-col items-center justify-center z-50"
    aria-live="assertive" role="alert">
    <div class="loader flex flex-col items-center">
      <!-- Logo Image -->
      <img :src="logoSrc" alt="Loading Logo" class="w-14 h-14 mb-4 rounded-full border-2 border-rose-600 shadow-2xl shadow-black object-cover" />
      <!-- SVG Loader -->
      <svg class="pl" width="240" height="240" viewBox="0 0 240 240" role="presentation">
        <circle :class="['pl__ring', 'pl__ring--a']" cx="120" cy="120" r="105" fill="none" :stroke="colorA"
          stroke-width="20" stroke-dasharray="0 660" stroke-dashoffset="-330" stroke-linecap="round"></circle>
        <circle :class="['pl__ring', 'pl__ring--b']" cx="120" cy="120" r="35" fill="none" :stroke="colorB"
          stroke-width="20" stroke-dasharray="0 220" stroke-dashoffset="-110" stroke-linecap="round"></circle>
        <circle :class="['pl__ring', 'pl__ring--c']" cx="85" cy="120" r="70" fill="none" :stroke="colorC"
          stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round"></circle>
        <circle :class="['pl__ring', 'pl__ring--d']" cx="155" cy="120" r="70" fill="none" :stroke="colorD"
          stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round"></circle>
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
    default: '#f42f25', // Red
  },
  colorB: {
    type: String,
    default: '#f49725', // Orange
  },
  colorC: {
    type: String,
    default: '#255ff4', // Blue
  },
  colorD: {
    type: String,
    default: '#f42582', // Pink
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
  animation: ringA 2s linear infinite;
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
  from, 4% {
    stroke-dasharray: 0 660;
    stroke-width: 20;
    stroke-dashoffset: -330;
  }
  12% {
    stroke-dasharray: 60 600;
    stroke-width: 30;
    stroke-dashoffset: -335;
  }
  32% {
    stroke-dasharray: 60 600;
    stroke-width: 30;
    stroke-dashoffset: -595;
  }
  40%, 54% {
    stroke-dasharray: 0 660;
    stroke-width: 20;
    stroke-dashoffset: -660;
  }
  62% {
    stroke-dasharray: 60 600;
    stroke-width: 30;
    stroke-dashoffset: -665;
  }
  82% {
    stroke-dasharray: 60 600;
    stroke-width: 30;
    stroke-dashoffset: -925;
  }
  90%, to {
    stroke-dasharray: 0 660;
    stroke-width: 20;
    stroke-dashoffset: -990;
  }
}

@keyframes ringB {
  from, 12% {
    stroke-dasharray: 0 220;
    stroke-width: 20;
    stroke-dashoffset: -110;
  }
  20% {
    stroke-dasharray: 20 200;
    stroke-width: 30;
    stroke-dashoffset: -115;
  }
  40% {
    stroke-dasharray: 20 200;
    stroke-width: 30;
    stroke-dashoffset: -195;
  }
  48%, 62% {
    stroke-dasharray: 0 220;
    stroke-width: 20;
    stroke-dashoffset: -220;
  }
  70% {
    stroke-dasharray: 20 200;
    stroke-width: 30;
    stroke-dashoffset: -225;
  }
  90% {
    stroke-dasharray: 20 200;
    stroke-width: 30;
    stroke-dashoffset: -305;
  }
  98%, to {
    stroke-dasharray: 0 220;
    stroke-width: 20;
    stroke-dashoffset: -330;
  }
}

@keyframes ringC {
  from {
    stroke-dasharray: 0 440;
    stroke-width: 20;
    stroke-dashoffset: 0;
  }
  8% {
    stroke-dasharray: 40 400;
    stroke-width: 30;
    stroke-dashoffset: -5;
  }
  28% {
    stroke-dasharray: 40 400;
    stroke-width: 30;
    stroke-dashoffset: -175;
  }
  36%, 58% {
    stroke-dasharray: 0 440;
    stroke-width: 20;
    stroke-dashoffset: -220;
  }
  66% {
    stroke-dasharray: 40 400;
    stroke-width: 30;
    stroke-dashoffset: -225;
  }
  86% {
    stroke-dasharray: 40 400;
    stroke-width: 30;
    stroke-dashoffset: -395;
  }
  94%, to {
    stroke-dasharray: 0 440;
    stroke-width: 20;
    stroke-dashoffset: -440;
  }
}

@keyframes ringD {
  from, 8% {
    stroke-dasharray: 0 440;
    stroke-width: 20;
    stroke-dashoffset: 0;
  }
  16% {
    stroke-dasharray: 40 400;
    stroke-width: 30;
    stroke-dashoffset: -5;
  }
  36% {
    stroke-dasharray: 40 400;
    stroke-width: 30;
    stroke-dashoffset: -175;
  }
  44%, 50% {
    stroke-dasharray: 0 440;
    stroke-width: 20;
    stroke-dashoffset: -220;
  }
  58% {
    stroke-dasharray: 40 400;
    stroke-width: 30;
    stroke-dashoffset: -225;
  }
  78% {
    stroke-dasharray: 40 400;
    stroke-width: 30;
    stroke-dashoffset: -395;
  }
  86%, to {
    stroke-dasharray: 0 440;
    stroke-width: 20;
    stroke-dashoffset: -440;
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
