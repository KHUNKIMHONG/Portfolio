export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // App configuration
  app: {
    baseURL: '/Portfolio/', // Required for GitHub Pages
    buildAssetsDir: '/Portfolio/_nuxt/',

    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Portfolio KHUN KIMHONG',
      titleTemplate: '%s - Portfolio KHUN KIMHONG',
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
          href: '/Portfolio/ower/ownPhoto.jpg',
        },
      ],
    },
  },

  vue: {
    compilerOptions: {
      whitespace: 'preserve',
    },
  },

  modules: [
    'nuxt-aos', // AOS animation support
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
      '/.well-known/**': { cache: { maxAge: 0 } },
      '/**': { cache: { maxAge: 0 } }, // fallback error handler
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



