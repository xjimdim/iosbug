// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  components: [
    {
      path: '~/components/',
      pathPrefix: false,
    },
  ],
  ssr: false,
  modules: ['@nuxtjs/tailwindcss'],
  compatibilityDate: '2024-08-14',
});
