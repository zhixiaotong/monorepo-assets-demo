export const routes = [
    {
        path: '/a',
        name: 'path-a',
        component: () => import('@app/a/src/TestA.vue')
    },
    {
        path: '/b',
        name: 'path-b',
        component: () => import('@app/b/src/TestB.vue')
    }
]