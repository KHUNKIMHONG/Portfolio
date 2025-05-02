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
import ShowHidden from "./show-hidden.vue";

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
    // Remove the data-fetching logic since no data needs to be fetched
    setTimeout(() => {
      this.isLoading = false; // Simulate a delay (optional)
    }); // Simulate a delay (optional) // no time laording
  },
};
</script>
