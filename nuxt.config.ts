// nuxt.config.js for Nuxt 2
export default {
    head: {
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'}
        ]
    },

    // Auto-import components (Nuxt 2 supports this natively)
    components: true,

    ssr: false,

    generate: {
        routes: [
          '/'
        ]
      },
    buildModules: [
        [
            '@nuxtjs/router',
            {
                path: 'router',
                fileName: 'router.js'
            }
        ],
        ['@nuxtjs/composition-api/module'],
        ['@nuxtjs/tailwindcss']
    ],

    target: 'static', // ✅ Ensure Nuxt 2 is set for static deployment
    router: {
        base: '/iosbug/' // ✅ Set this to match your GitHub repo name if needed
    },

    compatibilityDate: '2025-02-11'
};