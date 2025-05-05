<template>
  <section class="bg-gradient-to-r from-red-800 via-rose-900 to-red-800 overflow-hidden py-4 lg:px-24">
    <div class="container mx-auto max-w-6xl">
      <div class="relative overflow-auto hide-scrollbar">
        <ClientOnly>
          <!-- Canvas Background -->
          <canvas ref="canvasRef" class="absolute inset-0 w-full h-full z-0"></canvas>
          <div ref="scrollingLogos" class="scrolling-logos flex whitespace-nowrap" @mouseover="pauseScroll"
            @mouseleave="resumeScroll" @touchstart="pauseScroll" @touchend="resumeScroll">
            <!-- Render logos twice for a seamless loop -->
            <div v-for="(linkItem, index) in workingLinks" :key="'original-' + index"
              class="p-2 sm:p-4 flex-shrink-0 transition-transform duration-300 hover:scale-105 relative group">
              <a :href="linkItem.link" target="_blank" rel="noopener noreferrer" class="cursor-pointer">
                <div class="relative">
                  <img :src="linkItem.imgSrc" :alt="`Logo of ${linkItem.name}`"
                    class="w-20 sm:w-24 md:w-28 h-auto rounded-xl mx-4 sm:mx-8 opacity-80 transition-opacity duration-300 hover:opacity-100 dark:opacity-90" />
                  <div
                    class="absolute inset-0 flex items-center justify-center text-white text-xs sm:text-sm font-semibold bg-gray-800 dark:bg-gray-700 bg-opacity-70 dark:bg-opacity-80 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {{ linkItem.name }}
                  </div>
                </div>
              </a>
            </div>

            <!-- Duplicate for seamless infinite scrolling -->
            <div v-for="(linkItem, index) in workingLinks" :key="'duplicate-' + index"
              class="p-2 sm:p-4 flex-shrink-0 transition-transform duration-300 hover:scale-105 relative group">
              <a :href="linkItem.link" target="_blank" rel="noopener noreferrer" class="cursor-pointer">
                <div class="relative">
                  <img :src="linkItem.imgSrc" :alt="`Logo of ${linkItem.name}`"
                    class="w-20 sm:w-24 md:w-28 h-auto rounded-xl mx-4 sm:mx-8 opacity-80 transition-opacity duration-300 hover:opacity-100 dark:opacity-90" />
                  <div
                    class="absolute inset-0 flex items-center justify-center text-white text-xs sm:text-sm font-semibold bg-gray-800 dark:bg-gray-700 bg-opacity-70 dark:bg-opacity-80 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// Interface for link items
interface LinkItem {
  name: string;
  imgSrc: string;
  link: string;
}

// Define the links array with type
const links: LinkItem[] = [
  {
    name: "HTML",
    imgSrc: "/Portfolio/Link/html.png",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    imgSrc: "/Portfolio/Link/css.png",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JAVA SCRIPT",
    imgSrc: "/Portfolio/Link/Js.png",
    link: "https://www.javascripttutorial.net/",
  },
  {
    name: "TYPE SCRIPT",
    imgSrc: "/Portfolio/Link/Ts.png",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "VUE JS",
    imgSrc: "/Portfolio/Link/Vue.png",
    link: "https://vuejs.org/",
  },
  {
    name: "Nuxt JS",
    imgSrc: "/Portfolio/Link/NuxtJs.png",
    link: "https://nuxt.com/",
  },
  {
    name: "REACT JS",
    imgSrc: "/Portfolio/Link/React.png",
    link: "https://react.dev/",
  },
  {
    name: "NODE JS",
    imgSrc: "/Portfolio/Link/Node.png",
    link: "https://www.bing.com/chat",
  },
  {
    name: "BOOT STRAP",
    imgSrc: "/Portfolio/Link/Boostrap.png",
    link: "https://getbootstrap.com/",
  },
  {
    name: "TAILWIND CSS",
    imgSrc: "/Portfolio/Link/Tailwind.png",
    link: "https://tailwindcss.com/",
  },
  {
    name: "LARAVEL",
    imgSrc: "/Portfolio/Link/Laravel.png",
    link: "https://laravel.com/",
  },
  {
    name: "PHP",
    imgSrc: "/Portfolio/Link/PHP.png",
    link: "https://www.php.net/",
  },
  {
    name: "GIT",
    imgSrc: "/Portfolio/Link/Git.png",
    link: "https://git-scm.com/",
  },
  {
    name: "GIT HUB",
    imgSrc: "/Portfolio/Link/GitHub.png",
    link: "https://github.com/",
  },
  {
    name: "GIT LAB",
    imgSrc: "/Portfolio/Link/GitLab.png",
    link: "https://about.gitlab.com/",
  },
  {
    name: "MY SQL",
    imgSrc: "/Portfolio/Link/MySQL.png",
    link: "https://www.mysql.com/",
  },
  {
    name: "SQL SERVER",
    imgSrc: "/Portfolio/Link/SQLServer.png",
    link: "https://www.microsoft.com/en-us/sql-server/sql-server-downloads",
  },
  {
    name: "MONGO DB",
    imgSrc: "/Portfolio/Link/MongooDB.png",
    link: "https://www.mongodb.com/",
  },
  {
    name: "VS CODE",
    imgSrc: "/Portfolio/Link/VSCode.png",
    link: "https://code.visualstudio.com/",
  },
  {
    name: "FIGMA",
    imgSrc: "/Portfolio/Link/Figma.png",
    link: "https://www.figma.com/",
  },
  {
    name: "DOCKER",
    imgSrc: "/Portfolio/Link/Docker.png",
    link: "https://www.docker.com/",
  },
  {
    name: "POSTMAN",
    imgSrc: "/Portfolio/Link/Postman.png",
    link: "https://www.postman.com/",
  },
];

// Reactive state with typed references
const workingLinks: Ref<LinkItem[]> = ref([]);
const scrollingLogos: Ref<HTMLElement | null> = ref(null);
const canvasRef: Ref<HTMLCanvasElement | null> = ref(null);
let animationFrameId: number | null = null;

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
const filterValidImages = async (): Promise<void> => {
  const imagePromises = links.map((linkItem: LinkItem) => {
    return new Promise<LinkItem | null>((resolve) => {
      const img = new Image();
      img.src = linkItem.imgSrc;
      img.onload = () => resolve(linkItem);
      img.onerror = () => resolve(null); // Skip invalid images
    });
  });

  const results = await Promise.all(imagePromises);
  workingLinks.value = results.filter((item): item is LinkItem => item !== null);
};

const startInfiniteScroll = (): void => {
  if (!scrollingLogos.value) return;

  const container: HTMLElement = scrollingLogos.value;
  const originalWidth: number = container.scrollWidth / 2; // Half because of duplication

  // Ensure the container is wide enough
  container.style.width = `${originalWidth * 2}px`;

  let position: number = 0;
  const speed: number = 0.2; // Pixels per frame (adjust for speed)

  const animate = (): void => {
    position -= speed;
    if (Math.abs(position) >= originalWidth) {
      position = 0; // Reset to start of original content
    }
    container.style.transform = `translateX(${position}px)`;
    animationFrameId = requestAnimationFrame(animate);
  };

  animationFrameId = requestAnimationFrame(animate);
};

const pauseScroll = (): void => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }
};

const resumeScroll = (): void => {
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
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}

/* Ensure smooth transitions */
.scrolling-logos {
  display: flex;
  will-change: transform;
  /* Optimize for performance */
}
</style>
