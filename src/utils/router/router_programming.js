import { router } from './router.js';

export function addRoute(route) {
  router.addRoute(route);
}

// Define tus nuevas rutas aquí
const additionalRoutes = [
    {
        path: '/unitats/programacio/pensament_computacional',
        component: () => import('@/views/PensamentComputacional.vue')
      },
      {
        path: '/unitats/programacio/scratch',
        component: () => import('@/views/Scratch.vue')
      },
      {
        path: '/unitats/programacio/app_inventor',
        component: () => import('@/views/AppInventor.vue')
      },
  // Más rutas...
];

// Añade las rutas al enrutador
additionalRoutes.forEach((route) => {
  addRoute(route);
});
