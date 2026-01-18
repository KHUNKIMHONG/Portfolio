<template>
  <section class="relative overflow-hidden py-8">
    <div class="container mx-auto max-w-7xl px-4 relative z-10">
      
      <!-- Section Title (Optional) -->
      <div class="text-center mb-8">
        <h3 class="text-2xl md:text-3xl font-bold text-white mb-2">
          Technologies & Tools
        </h3>
        <div class="w-24 h-1 bg-gradient-to-r from-red-500 to-rose-500 mx-auto rounded-full"></div>
      </div>

      <!-- Carousel Container -->
      <div class="relative overflow-hidden">
        <ClientOnly>
          <!-- Fade edges for better visual -->
          <div class="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
          <div class="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>

          <div 
            ref="scrollingLogos" 
            class="flex whitespace-nowrap scrolling-logos" 
            @mouseenter="pauseScroll"
            @mouseleave="resumeScroll" 
            @touchstart="pauseScroll" 
            @touchend="resumeScroll"
          >
            <!-- Original logos -->
            <div 
              v-for="(linkItem, index) in workingLinks" 
              :key="`original-${index}`"
              class="inline-flex flex-shrink-0 px-3 md:px-4"
            >
              <a 
                :href="linkItem.link" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="group relative block"
                @click="handleClick($event, index, linkItem.link)"
              >
                <div 
                  class="relative p-4 md:p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10
                         transition-all duration-300 hover:bg-white/10 hover:border-red-400/50
                         hover:scale-110 hover:shadow-2xl hover:shadow-red-500/20 overflow-hidden
                         min-w-[120px] md:min-w-[140px]"
                >
                  <!-- Tech Logo Image -->
                  <img 
                    :src="linkItem.imgSrc" 
                    :alt="`${linkItem.name} logo`" 
                    class="w-16 h-16 md:w-20 md:h-20 object-contain filter brightness-90 rounded-lg
                           group-hover:brightness-110 transition-all duration-300 relative mx-auto" 
                    loading="lazy"
                  />

                  <!-- Click-to-show name overlay (Mobile) -->
                  <Transition name="fade">
                    <div 
                      v-if="activeIndex === index" 
                      class="absolute inset-0 flex items-center justify-center
                             bg-gray-900/95 backdrop-blur-sm text-white text-sm md:text-base font-semibold
                             rounded-2xl border border-red-400/50 z-30 px-3 text-center shadow-lg shadow-red-500/30"
                    >
                      {{ linkItem.name }}
                    </div>
                  </Transition>

                  <!-- Hover-to-show name overlay (Desktop) -->
                  <div
                    class="absolute inset-0 flex items-center justify-center
                           bg-gray-900/95 backdrop-blur-sm text-white text-sm md:text-base font-semibold
                           rounded-2xl border border-white/30 z-20 opacity-0 group-hover:opacity-100 
                           transition-opacity duration-300 px-3 text-center"
                    :class="{ '!opacity-0': activeIndex === index }"
                  >
                    {{ linkItem.name }}
                  </div>
                </div>
              </a>
            </div>

            <!-- Duplicate logos for seamless loop -->
            <div 
              v-for="(linkItem, index) in workingLinks" 
              :key="`duplicate-${index}`"
              class="inline-flex flex-shrink-0 px-3 md:px-4"
              aria-hidden="true"
            >
              <a 
                :href="linkItem.link" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="group relative block"
                @click="handleClick($event, index, linkItem.link)"
              >
                <div 
                  class="relative p-4 md:p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10
                         transition-all duration-300 hover:bg-white/10 hover:border-red-400/50
                         hover:scale-110 hover:shadow-2xl hover:shadow-red-500/20 overflow-hidden
                         min-w-[120px] md:min-w-[140px]"
                >
                  <img 
                    :src="linkItem.imgSrc" 
                    :alt="`${linkItem.name} logo`" 
                    class="w-16 h-16 md:w-20 md:h-20 object-contain filter brightness-90 rounded-lg
                           group-hover:brightness-110 transition-all duration-300 relative mx-auto" 
                    loading="lazy"
                  />

                  <Transition name="fade">
                    <div 
                      v-if="activeIndex === index" 
                      class="absolute inset-0 flex items-center justify-center
                             bg-gray-900/95 backdrop-blur-sm text-white text-sm md:text-base font-semibold
                             rounded-2xl border border-red-400/50 z-30 px-3 text-center shadow-lg shadow-red-500/30"
                    >
                      {{ linkItem.name }}
                    </div>
                  </Transition>

                  <div
                    class="absolute inset-0 flex items-center justify-center
                           bg-gray-900/95 backdrop-blur-sm text-white text-sm md:text-base font-semibold
                           rounded-2xl border border-white/30 z-20 opacity-0 group-hover:opacity-100 
                           transition-opacity duration-300 px-3 text-center"
                    :class="{ '!opacity-0': activeIndex === index }"
                  >
                    {{ linkItem.name }}
                  </div>
                </div>
              </a>
            </div>

            <!-- Third set for extra smooth scrolling on large screens -->
            <div 
              v-for="(linkItem, index) in workingLinks" 
              :key="`triple-${index}`"
              class="inline-flex flex-shrink-0 px-3 md:px-4 xl:inline-flex"
              aria-hidden="true"
            >
              <a 
                :href="linkItem.link" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="group relative block"
                @click="handleClick($event, index, linkItem.link)"
              >
                <div 
                  class="relative p-4 md:p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10
                         transition-all duration-300 hover:bg-white/10 hover:border-red-400/50
                         hover:scale-110 hover:shadow-2xl hover:shadow-red-500/20 overflow-hidden
                         min-w-[120px] md:min-w-[140px]"
                >
                  <img 
                    :src="linkItem.imgSrc" 
                    :alt="`${linkItem.name} logo`" 
                    class="w-16 h-16 md:w-20 md:h-20 object-contain filter brightness-90 rounded-lg
                           group-hover:brightness-110 transition-all duration-300 relative mx-auto" 
                    loading="lazy"
                  />
                </div>
              </a>
            </div>
          </div>
        </ClientOnly>
      </div>

      <!-- Helper Text -->
      <div class="text-center mt-6">
        <p class="text-gray-400 text-sm">
          <span class="hidden md:inline">Hover to view • </span>
          <span class="md:hidden">Tap to view • </span>
          Click to visit official site
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

interface LinkItem {
  name: string;
  imgSrc: string;
  link: string;
}

const links: LinkItem[] = [
  { name: "HTML", imgSrc: "/Portfolio/Link/html.png", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS", imgSrc: "/Portfolio/Link/css.png", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "JavaScript", imgSrc: "/Portfolio/Link/Js.png", link: "https://www.javascripttutorial.net/" },
  { name: "TypeScript", imgSrc: "/Portfolio/Link/Ts.png", link: "https://www.typescriptlang.org/" },
  { name: "Vue.js", imgSrc: "/Portfolio/Link/Vue.png", link: "https://vuejs.org/" },
  { name: "Nuxt.js", imgSrc: "/Portfolio/Link/NuxtJs.png", link: "https://nuxt.com/" },
  { name: "React", imgSrc: "/Portfolio/Link/React.png", link: "https://react.dev/" },
  { name: "Next.js", imgSrc: "/Portfolio/Link/NextJs.png", link: "https://nextjs.org/" },
  { name: "Node.js", imgSrc: "/Portfolio/Link/Node.png", link: "https://nodejs.org/" },
  { name: "Bootstrap", imgSrc: "/Portfolio/Link/Boostrap.png", link: "https://getbootstrap.com/" },
  { name: "Tailwind CSS", imgSrc: "/Portfolio/Link/Tailwind.png", link: "https://tailwindcss.com/" },
  { name: "Elixir", imgSrc: "/Portfolio/Link/Elixir.png", link: "https://elixir-lang.org/" },
  { name: "Laravel", imgSrc: "/Portfolio/Link/Laravel.png", link: "https://laravel.com/" },
  { name: "PHP", imgSrc: "/Portfolio/Link/PHP.png", link: "https://www.php.net/" },
  { name: "Git", imgSrc: "/Portfolio/Link/Git.png", link: "https://git-scm.com/" },
  { name: "GitHub", imgSrc: "/Portfolio/Link/GitHub.png", link: "https://github.com/" },
  { name: "GitLab", imgSrc: "/Portfolio/Link/GitLab.png", link: "https://about.gitlab.com/" },
  { name: "MySQL", imgSrc: "/Portfolio/Link/MySQL.png", link: "https://www.mysql.com/" },
  { name: "SQL Server", imgSrc: "/Portfolio/Link/SQLServer.png", link: "https://www.microsoft.com/en-us/sql-server" },
  { name: "MongoDB", imgSrc: "/Portfolio/Link/MongooDB.png", link: "https://www.mongodb.com/" },
  { name: "VS Code", imgSrc: "/Portfolio/Link/VSCode.png", link: "https://code.visualstudio.com/" },
  { name: "Figma", imgSrc: "/Portfolio/Link/Figma.png", link: "https://www.figma.com/" },
  { name: "Docker", imgSrc: "/Portfolio/Link/Docker.png", link: "https://www.docker.com/" },
  { name: "Postman", imgSrc: "/Portfolio/Link/Postman.png", link: "https://www.postman.com/" },
  { name: "Insomnia", imgSrc: "/Portfolio/Link/Insomnia.png", link: "https://insomnia.rest/" },
  { name: "Linux", imgSrc: "/Portfolio/Link/Linux.png", link: "https://www.linux.org/" },
  { name: "Ubuntu", imgSrc: "/Portfolio/Link/Ubuntu.png", link: "https://ubuntu.com/" },
];

// Component state
const workingLinks = ref<LinkItem[]>([]);
const scrollingLogos = ref<HTMLElement | null>(null);
const activeIndex = ref<number | null>(null);
const isPaused = ref(false);

let animationFrameId: number | null = null;
let position = 0;
let hideTimeout: NodeJS.Timeout | null = null;

// Constants
const SCROLL_SPEED = 0.4; // Slightly faster for better visibility
const TOOLTIP_DURATION = 2500;

/**
 * Handles click on technology logo
 */
const handleClick = (event: MouseEvent, index: number, link: string): void => {
  // On mobile, show name first before navigating
  if (window.innerWidth < 768) {
    event.preventDefault();
    toggleName(index);
    
    // Navigate after showing the name
    setTimeout(() => {
      window.open(link, '_blank');
    }, 1000);
  }
  // On desktop, let the link work normally
};

/**
 * Toggles the visibility of technology name
 */
const toggleName = (index: number): void => {
  if (hideTimeout) {
    clearTimeout(hideTimeout);
    hideTimeout = null;
  }

  if (activeIndex.value === index) {
    activeIndex.value = null;
  } else {
    activeIndex.value = index;
    
    hideTimeout = setTimeout(() => {
      if (activeIndex.value === index) {
        activeIndex.value = null;
      }
    }, TOOLTIP_DURATION);
  }
};

/**
 * Validates images and filters out broken ones
 */
const filterValidImages = async (): Promise<void> => {
  const imagePromises = links.map((linkItem) => {
    return new Promise<LinkItem | null>((resolve) => {
      const img = new Image();
      img.src = linkItem.imgSrc;
      
      const timeout = setTimeout(() => {
        resolve(null);
      }, 5000);
      
      img.onload = () => {
        clearTimeout(timeout);
        resolve(linkItem);
      };
      
      img.onerror = () => {
        clearTimeout(timeout);
        resolve(null);
      };
    });
  });

  const results = await Promise.all(imagePromises);
  workingLinks.value = results.filter((item): item is LinkItem => item !== null);
};

/**
 * Starts the infinite scroll animation
 */
const startInfiniteScroll = (): void => {
  if (!scrollingLogos.value || isPaused.value) return;

  const container = scrollingLogos.value;
  const originalWidth = container.scrollWidth / 2;

  const animate = (): void => {
    if (isPaused.value) return;
    
    position -= SCROLL_SPEED;
    
    if (Math.abs(position) >= originalWidth) {
      position = 0;
    }
    
    container.style.transform = `translateX(${position}px)`;
    animationFrameId = requestAnimationFrame(animate);
  };

  animate();
};

/**
 * Pauses the scroll animation
 */
const pauseScroll = (): void => {
  isPaused.value = true;
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }
};

/**
 * Resumes the scroll animation
 */
const resumeScroll = (): void => {
  isPaused.value = false;
  if (animationFrameId === null) {
    startInfiniteScroll();
  }
};

// Lifecycle hooks
onMounted(async () => {
  await filterValidImages();
  startInfiniteScroll();
});

onBeforeUnmount(() => {
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId);
  }
  if (hideTimeout) {
    clearTimeout(hideTimeout);
  }
});
</script>

<style scoped>
.scrolling-logos {
  display: inline-flex;
  will-change: transform;
}

/* Smooth fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Prevent text selection */
.scrolling-logos {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
}

/* Smooth scrolling on touch devices */
@media (hover: none) {
  .scrolling-logos {
    -webkit-overflow-scrolling: touch;
  }
}
</style>