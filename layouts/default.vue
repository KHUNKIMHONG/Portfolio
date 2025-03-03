<template>
  <div>
    <Preloader v-if="isLoading" />
    <NuxtPage />
    <GoTop />
  </div>
</template>

<script>
import Preloader from "./Preloader.vue";
import GoTop from "./GoTop.vue";

export default {
  components: {
    Preloader,
    GoTop,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    // Remove the data-fetching logic since no data needs to be fetched
    setTimeout(() => {
      this.isLoading = false; // Hide the preloader after 2 seconds (or any time you prefer)
    }, 2000); // Simulate a delay (optional)
  },
};
</script>
