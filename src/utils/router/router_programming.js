

// Define tus nuevas rutas aquí
var additionalRoutesProgrammingGeneral = [
      {
        path: '/unitats/programacio/pensament_computacional',
        component: () => import('@/views/units/programming/PensamentComputacional.vue')
      },
      {
        path: '/unitats/programacio/scratch',
        component: () => import('@/views/units/programming/scratch/Scratch.vue')
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
var additionalRoutesProgrammingScratch = [
  {
    path: '/unitats/programacio/scratch/laberint',
    component: () => import('@/views/units/programming/scratch/Scratch_Laberint.vue')
  },
]
const additionalRoutesProgramming = [].concat(additionalRoutesProgrammingGeneral)
.concat(additionalRoutesProgrammingScratch);
debugger;
export { additionalRoutesProgramming };