import { router } from './router.js';

export function addRoute(route) {
  router.addRoute(route);
}

// Define tus nuevas rutas aquí
const additionalRoutes = [
    {
        path: '/unitats/programacio/ia',
        component: () => import('@/views/units/programming/IA.vue')
      },
      {
        path: '/unitats/programacio/ia_ferramentes',
        component: () => import('@/views/units/programming/IAFerramentes.vue')
      }
  // Más rutas...
];

// Añade las rutas al enrutador
additionalRoutes.forEach((route) => {
  addRoute(route);
});
