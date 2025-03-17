<template>
  <section class="bg-gradient-to-r from-red-700 via-rose-900 to-red-700 overflow-hidden py-4 lg:px-24">
    <div class="container mx-auto px-4">
      <div class="relative overflow-auto hide-scrollbar">
        <ClientOnly>
          <div
            ref="scrollingLogos"
            class="scrolling-logos flex whitespace-nowrap"
            @mouseover="pauseScroll"
            @mouseleave="resumeScroll"
            @touchstart="pauseScroll"
            @touchend="resumeScroll"
          >
            <!-- Render logos twice for a seamless loop -->
            <div
              v-for="(linkItem, index) in workingLinks"
              :key="'original-' + index"
              class="p-2 sm:p-4 flex-shrink-0 transition-transform duration-300 hover:scale-105 relative group"
            >
              <a
                :href="linkItem.link"
                target="_blank"
                rel="noopener noreferrer"
                class="cursor-pointer"
              >
                <div class="relative">
                  <img
                    :src="linkItem.imgSrc"
                    :alt="`Logo of ${linkItem.name}`"
                    class="w-20 sm:w-24 md:w-28 h-auto rounded-xl mx-4 sm:mx-8 opacity-80 transition-opacity duration-300 hover:opacity-100 dark:opacity-90"
                  />
                  <div
                    class="absolute inset-0 flex items-center justify-center text-white text-xs sm:text-sm font-semibold bg-gray-800 dark:bg-gray-700 bg-opacity-70 dark:bg-opacity-80 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    {{ linkItem.name }}
                  </div>
                </div>
              </a>
            </div>

            <!-- Duplicate for seamless infinite scrolling -->
            <div
              v-for="(linkItem, index) in workingLinks"
              :key="'duplicate-' + index"
              class="p-2 sm:p-4 flex-shrink-0 transition-transform duration-300 hover:scale-105 relative group"
            >
              <a
                :href="linkItem.link"
                target="_blank"
                rel="noopener noreferrer"
                class="cursor-pointer"
              >
                <div class="relative">
                  <img
                    :src="linkItem.imgSrc"
                    :alt="`Logo of ${linkItem.name}`"
                    class="w-20 sm:w-24 md:w-28 h-auto rounded-xl mx-4 sm:mx-8 opacity-80 transition-opacity duration-300 hover:opacity-100 dark:opacity-90"
                  />
                  <div
                    class="absolute inset-0 flex items-center justify-center text-white text-xs sm:text-sm font-semibold bg-gray-800 dark:bg-gray-700 bg-opacity-70 dark:bg-opacity-80 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    {{ linkItem.name }}
                  </div>
                </div>
              </a>
            </div>
          </div>
        </ClientOnly>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Define the links array
const links = [
  {
    name: "HTML",
    imgSrc: "https://i.pinimg.com/736x/a2/7d/14/a27d14a27b5ef7d35c241d5cc9c1deb4.jpg",
    link: "https://chatgpt.com/",
  },
  {
    name: "CSS",
    imgSrc: "https://i.pinimg.com/736x/1d/a3/fd/1da3fd017f2d2676be0205c98f586f1e.jpg",
    link: "https://www.canva.com/",
  },
  {
    name: "JAVA SCRIPT",
    imgSrc: "https://i.pinimg.com/736x/21/37/c0/2137c067827e1c46717e2e7a95c2a1aa.jpg",
    link: "https://character.ai/",
  },
  {
    name: "REACT JS",
    imgSrc: "https://i.pinimg.com/736x/0c/dd/18/0cdd182c784ae45b4cf436880162295f.jpg",
    link: "https://poe.com/",
  },
  {
    name: "TYPE SCRIPT",
    imgSrc: "https://i.pinimg.com/736x/a1/19/30/a11930255af225b93309ff793662e7c5.jpg",
    link: "https://leonardo.ai/",
  },
  {
    name: "LARAVEL",
    imgSrc: "https://i.pinimg.com/736x/ed/94/e3/ed94e3e6fae5dd09cd8f7652f4a01c3d.jpg",
    link: "https://tools.picsart.com/text/ai-writer",
  },
  {
    name: "VUE JS",
    imgSrc: "https://i.pinimg.com/736x/29/01/2a/29012a5a6fbaee00c0f940cc2f30eba2.jpg",
    link: "https://lumen5.com/",
  },
  {
    name: "GIT HUB",
    imgSrc: "https://i.pinimg.com/736x/d2/82/44/d28244f7cc49308a76c67a55e56f96de.jpg",
    link: "https://clickup.com/",
  },
  {
    name: "VS CODE",
    imgSrc: "https://i.pinimg.com/736x/ad/4b/19/ad4b19d0f417dcadf03a35ca9a05b989.jpg",
    link: "https://www.bing.com/chat",
  },
  {
    name: "PHP",
    imgSrc: "https://i.pinimg.com/736x/1a/57/a0/1a57a019bb9929b0303c17775ca74e92.jpg",
    link: "https://www.bing.com/chat",
  },
  {
    name: "MY SQL",
    imgSrc: "https://ih1.redbubble.net/image.5536116430.2042/st,small,507x507-pad,600x600,f8f8f8.jpg",
    link: "https://www.bing.com/chat",
  },
  {
    name: "TAILWIND CSS",
    imgSrc: "https://i.pinimg.com/736x/11/a7/b5/11a7b5fb70c24e5632f2baccce14603c.jpg",
    link: "https://www.bing.com/chat",
  },
  {
    name: "GIT LAB",
    imgSrc: "https://i.pinimg.com/736x/fb/75/f4/fb75f43769d39bf3b8bdbbb0596a1a10.jpg",
    link: "https://www.bing.com/chat",
  },
  {
    name: "Nuxt JS",
    imgSrc: "https://i.pinimg.com/736x/35/e6/5e/35e65e6aa7710dfe3881e8dab18990f0.jpg",
    link: "https://www.bing.com/chat",
  },
  {
    name: "Docker",
    imgSrc: "https://i.pinimg.com/736x/2c/54/f6/2c54f65a03c35ac90f5c73b92da39779.jpg",
    link: "https://www.bing.com/chat",
  },
  {
    name: "MONGO DB",
    imgSrc: "https://ih1.redbubble.net/image.352416469.2750/mo,small,flatlay,product_square,600x600.u7.jpg",
    link: "https://www.bing.com/chat",
  },
  {
    name: "NODE JS",
    imgSrc: "https://miro.medium.com/v2/resize:fit:800/1*bc9pmTiyKR0WNPka2w3e0Q.png",
    link: "https://www.bing.com/chat",
  },
];

// Reactive state
const workingLinks = ref([]);
const scrollingLogos = ref(null);
let animationFrameId = null;

// Filter valid images on mount
onMounted(async () => {
  await filterValidImages();
  startInfiniteScroll();
});

// Cleanup on unmount
onUnmounted(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
});

// Methods
const filterValidImages = async () => {
  const imagePromises = links.map((linkItem) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = linkItem.imgSrc;
      img.onload = () => resolve(linkItem);
      img.onerror = () => resolve(null); // Skip invalid images
    });
  });

  const results = await Promise.all(imagePromises);
  workingLinks.value = results.filter((item) => item !== null);
};

const startInfiniteScroll = () => {
  if (!scrollingLogos.value) return;

  const container = scrollingLogos.value;
  const originalWidth = container.scrollWidth / 2; // Half because of duplication

  // Ensure the container is wide enough
  container.style.width = `${originalWidth * 2}px`;

  let position = 0;
  const speed = 0.2; // Pixels per frame (adjust for speed)

  const animate = () => {
    position -= speed;
    if (Math.abs(position) >= originalWidth) {
      position = 0; // Reset to start of original content
    }
    container.style.transform = `translateX(${position}px)`;
    animationFrameId = requestAnimationFrame(animate);
  };

  animationFrameId = requestAnimationFrame(animate);
};

const pauseScroll = () => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }
};

const resumeScroll = () => {
  if (!animationFrameId) {
    startInfiniteScroll();
  }
};
</script>

<style scoped>
/* Hide scrollbar */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

/* Ensure smooth transitions */
.scrolling-logos {
  display: flex;
  will-change: transform; /* Optimize for performance */
}
</style>
