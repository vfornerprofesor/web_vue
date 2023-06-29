import { router } from './router.js';

export function addRoute(route) {
  router.addRoute(route);
}

// Define tus nuevas rutas aquí
const additionalRoutes = [
    {
        path: '/unitats/programacio/pensament_computacional',
        component: () => import('@/views/units/programming/PensamentComputacional.vue')
      },
      {
        path: '/unitats/programacio/scratch',
        component: () => import('@/views/units/programming/Scratch.vue')
      },
      {
        path: '/unitats/programacio/app_inventor',
        component: () => import('@/views/units/programming/AppInventor.vue')
      },
      {
        path: '/unitats/programacio/python',
        component: () => import('@/views/units/programming/Python.vue')
      },
      {
        path: '/unitats/programacio/python2',
        component: () => import('@/views/units/programming/Python2.vue')
      },
      {
        path: '/unitats/programacio/html',
        component: () => import('@/views/units/programming/HTML.vue')
      },
      {
        path: '/unitats/programacio/css',
        component: () => import('@/views/units/programming/CSS.vue')
      },
      {
        path: '/unitats/programacio/php',
        component: () => import('@/views/units/programming/PHP.vue')
      },
      {
        path: '/unitats/programacio/mysql',
        component: () => import('@/views/units/programming/MySQL.vue')
      },
      {
        path: '/unitats/programacio/microbit',
        component: () => import('@/views/units/programming/Microbit.vue')
      },
      {
        path: '/unitats/programacio/wordpress',
        component: () => import('@/views/units/programming/Wordpress.vue')
      },
      {
        path: '/unitats/programacio/ia',
        component: () => import('@/views/units/programming/IA.vue')
      },
      {
        path: '/unitats/programacio/ia_ferramentes',
        component: () => import('@/views/units/programming/IAFerramentes.vue')
      },
      {
        path: '/unitats/programacio/full_calcul',
        component: () => import('@/views/units/programming/FullCalcul.vue')
      },
  // Más rutas...
];

// Añade las rutas al enrutador
additionalRoutes.forEach((route) => {
  addRoute(route);
});
