// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // Set default name and logo image for web display on the header
  app: {
    baseURL:'/Portfolio/', // Base URL for the app
    buildAssetsDir: '/Portfolio/_nuxt/', // Ensure this is correct

    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Portfolio KHUN KIMHONG',
      titleTemplate: '%s - Portfolio KHUN KIMHONG',
      htmlAttrs: { lang: 'en' },
      meta: [
        { 
          name: 'description', 
          content: 'Explore the professional portfolio of KHUN KIMHONG, showcasing expertise in web development, creative projects, and innovative solutions.' 
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/Portfolio/ower/ownPhoto.jpg', // Fixed path for GitHub Pages
        },
      ],
    }
  },

  vue: {
    compilerOptions: {
      whitespace: 'preserve',
    },
  },

  modules: [
    'nuxt-aos', // Add nuxt-aos for AOS animations
  ],

  css: [
    '@/assets/css/tailwind.css', // Tailwind CSS file
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  nitro: {
    preset: 'github_pages', // Ensures correct static deployment for GitHub Pages
    output: {
      publicDir: 'docs', // Output to docs directory for GitHub Pages
    },
  },

  devServer: {
    port: 4000, // Custom port
    host: '0.0.0.0', // Allows network access
  },

  runtimeConfig: {
    public: {
      aos: {
        globalSettings: {
          disable: false, // Enable AOS on all devices
          startEvent: 'DOMContentLoaded', // Initialize on DOM load
          initClassName: 'aos-init', // Class added after initialization
          animatedClassName: 'aos-animate', // Class added during animation
          useClassNames: false, // Don't add data-aos values as classes
          disableMutationObserver: false, // Detect DOM changes
          debounceDelay: 50, // Delay for window resize
          throttleDelay: 99, // Delay for scroll events
          offset: 120, // Offset (px) from trigger point
          delay: 0, // Animation delay (ms)
          duration: 600, // Animation duration (ms)
          easing: 'ease-in-out', // Smooth easing
          once: true, // Animate only once for performance
          mirror: false, // Don't animate out when scrolling past
          anchorPlacement: 'top-bottom', // Trigger when top of element hits bottom of window
        },
      },
    },
  },
})


