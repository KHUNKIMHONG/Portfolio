// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  //setup defual name and logo image for ower web display on header
  app: {
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
          href: '/ower/ownPhoto.jpg' 
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

  devServer: {
    port: 4000,  // Change this to the desired port
    host: '0.0.0.0' // Allows access from the network
  }
})
