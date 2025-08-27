export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // Add the top-level 'site' property here
  site: {
    url: 'https://khunkimhong.github.io/Portfolio',
  },

  // App configuration
  app: {
    baseURL: '/Portfolio/', // Required for GitHub Pages

    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'KHUN KIMHONG',
      titleTemplate: '%s - KHUN KIMHONG',
      htmlAttrs: { lang: 'en' },
      meta: [
        {
          name: 'description',
          content:
            'Explore the professional portfolio of KHUN KIMHONG, showcasing expertise in web development, creative projects, and innovative solutions.',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/Portfolio/ower/ownPhoto.jpg', // Updated path
        },
      ],
    },
  },

  // The 'vite' block is now correctly configured without the redundant line
  vite: {},

  vue: {
    compilerOptions: {
      whitespace: 'preserve',
    },
  },

  // Modules array
  modules: [
    'nuxt-aos',
    '@nuxtjs/sitemap',
  ],

  css: [
    '@/assets/css/tailwind.css',
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  nitro: {
    preset: 'github_pages',
    output: {
      publicDir: 'docs',
    },
    routeRules: {
      '/sitemap.xml': { prerender: true }, // Ensure sitemap is prerendered
      '/**': { static: true }, // Serve all routes as static files
    },
  },

  devServer: {
    port: 4000,
    host: '0.0.0.0',
  },

  runtimeConfig: {
    public: {
      aos: {
        globalSettings: {
          disable: false,
          startEvent: 'DOMContentLoaded',
          initClassName: 'aos-init',
          animatedClassName: 'aos-animate',
          useClassNames: false,
          disableMutationObserver: false,
          debounceDelay: 50,
          throttleDelay: 99,
          offset: 120,
          delay: 0,
          duration: 600,
          easing: 'ease-in-out',
          once: true,
          mirror: false,
          anchorPlacement: 'top-bottom',
        },
      },
    },
  },
})


