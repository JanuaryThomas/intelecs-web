import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior () {
        return {x: 0, y: 0}
    },
    routes: [
        {
            path: '',
            component: () => import('@/layouts/FullPage'),
            children: [
                {
                    path: '/',
                    name: 'Index',
                    component: () => import('@/pages/Index')
                },
                {
                    path: '/projects',
                    name: 'Projects',
                    component: () => import('@/pages/Projects')
                }
            ]
        }
    ]
})

export default router