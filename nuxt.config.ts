export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // Site configuration (Fixes: Sitemap Site URL missing!)
  site: {
    url: 'https://khun-kimhong.github.io/Portfolio', // Replace with your actual GitHub domain
    name: 'KHUN KIMHONG'
  },

  app: {
    baseURL: '/Portfolio/', // Correct for GitHub Pages

    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'KHUN KIMHONG',
      titleTemplate: '%s - KHUN KIMHONG',
      htmlAttrs: { lang: 'en' },
      meta: [
        {
          name: 'description',
          content: 'Explore the professional portfolio of KHUN KIMHONG, showcasing expertise in web development, creative projects, and innovative solutions.',
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

  modules: [
    'nuxt-aos',
    '@nuxtjs/sitemap', // This module needs the 'site' config above
  ],

  // Sitemap specific config (Fixes: 500 Server Error on style.xsl)
  sitemap: {
    xsl: false, // Disabling XSL often fixes the "replace of undefined" crash in subpath builds
    strictNuxtContentPaths: true,
  },

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
    preset: 'github-pages', // Use hyphen 'github-pages', not 'github_pages'
    output: {
      publicDir: 'docs',
    },
  },

  // Note: Most of these AOS settings can be moved to the nuxt-aos module config directly
  runtimeConfig: {
    public: {
      aos: {
        globalSettings: {
          duration: 600,
          easing: 'ease-in-out',
          once: true,
        },
      },
    },
  },

  // Keep whitespace preserve if needed for your design
  vue: {
    compilerOptions: {
      whitespace: 'preserve',
    },
  },
})