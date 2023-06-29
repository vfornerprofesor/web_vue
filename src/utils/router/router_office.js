import { router } from './router.js';

export function addRoute(route) {
  router.addRoute(route);
}

// Define tus nuevas rutas aquí
const additionalRoutes = [
   
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
