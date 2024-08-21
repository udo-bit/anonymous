import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router"

const routes: RouteRecordRaw[] = [
    {
        name: 'index',
        path: '/',
        component: () => import('../layouts/index.vue'),
        redirect: '/home',
        children: [
            {
                name: 'Home',
                path: '/home',
                component: () => import('../pages/index.vue')
            }
        ]
    }
]

export default createRouter({
    routes,
    history: createWebHistory()
})

