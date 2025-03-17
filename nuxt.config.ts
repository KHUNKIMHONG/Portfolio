// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // Set default name and logo image for web display on the header
  app: {
    baseURL: '/', // ✅ Needed for GitHub Pages
    buildAssetsDir: "/_nuxt/", // ✅ Ensures assets load correctly

    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Portfolio KHUN KIMHONG',
      htmlAttrs: {
        lang: "kh"
      },
      meta: [
        { name: 'description', content: 'Your app description' },
      ],
      link: [
        { 
          rel: 'icon', 
          type: 'image/x-icon', 
          href: '/Portfolio/ower/ownPhoto.jpg' // ✅ Fixed path for GitHub Pages
        },
      ],      
    }
  }, 

  vue: {
    compilerOptions: {
      whitespace: 'preserve'
    }
  },

  css: ["@/assets/css/tailwind.css"], // Add Tailwind CSS

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  nitro: {
    preset: 'github_pages', // ✅ Ensures correct static deployment for GitHub Pages
  },

  devServer: {
    port: 4000,  // Change this to the desired port
    host: '0.0.0.0' // Allows access from the network
  }
});

