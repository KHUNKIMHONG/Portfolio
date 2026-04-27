<template>
  <div>
    <Preloader v-if="isLoading" />
    <NuxtPage />
    <ShowHidden />
    <GoTop />
  </div>
</template>

<script>
import Preloader from "./Preloader.vue";
import GoTop from "./GoTop.vue";
import ShowHidden from "./ShowHidden.vue";

export default {
  components: {
    Preloader,
    ShowHidden,
    GoTop,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    // Client-only: hide preloader after brief delay
    if (import.meta.client) {
      const hidePreloader = () => {
        this.isLoading = false;
      };
      // Use requestAnimationFrame to ensure we're past initial paint
      requestAnimationFrame(() => {
        this._preloaderTimer = setTimeout(hidePreloader, 400);
      });
    }
  },
  beforeUnmount() {
    if (this._preloaderTimer) {
      clearTimeout(this._preloaderTimer);
    }
  },
};
</script>
