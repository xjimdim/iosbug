export function interopDefault(promise) {
    return promise.then(m => m.default || m)
}

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default [
    {
        name: '__index',
        path: '/',
        component: () =>
            interopDefault(
                import(
                    '~/pages/index.vue' /* webpackChunkName: "pages-index" */
                    )
            )
    },
    {
        name: '__second',
        path: '/second',
        component: () =>
            interopDefault(
                import(
                    '~/pages/second.vue' /* webpackChunkName: "pages-second" */
                    )
            )
    },
    {
        name: '__third',
        path: '/third',
        component: () =>
            interopDefault(
                import(
                    '~/pages/third.vue' /* webpackChunkName: "pages-third" */
                    )
            )
    },
]


