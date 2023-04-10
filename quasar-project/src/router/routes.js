
const routes = [
  {
    path: '/',
    component: () => import('pages/IndexPage.vue')
  },
  {
    path: '/list',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/List.vue') }
    ]
  },
  {
    path: '/create',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Create.vue') }
    ]
  },
  {
    path: '/update/:id',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Create.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
