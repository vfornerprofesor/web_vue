import { router } from './router.js';

export function addRoute(route) {
  router.addRoute(route);
}

// Define tus nuevas rutas aquí
const additionalRoutes = [
    
      {
        path: '/unitats/programacio/wordpress',
        component: () => import('@/views/units/programming/Wordpress.vue')
      }
  // Más rutas...
];

// Añade las rutas al enrutador
additionalRoutes.forEach((route) => {
  addRoute(route);
});
