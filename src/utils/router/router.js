//import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

//Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../../views/Home.vue')
    },
    {
        path: '/unitats',
        name: 'Unitats',
        component: () => import('../../views/Units.vue')
    },
    {
        path: '/cursos',
        name: 'Cursos',
        component: () => import('../../views/Courses.vue')
    },
    {
        path: '/404',
        name: 'NotFound',
        component: () => import('../../views/NotFound.vue')
    },
    {
        path: '/:catchAll(.*)', // Ruta de captura de cualquier otra ruta no definida
        redirect: '/404' // Redirige a la página NotFound por defecto
    }
    // Agrega más rutas según tus necesidades
];

import { additionalRoutesProgramming } from './router_programming';
additionalRoutesProgramming.forEach((route) => {
    routes.push(route);
});
  

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;