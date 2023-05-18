
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/LoginPage.vue') }
    ]
  },
  {
    path: '/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },
  {
    path: '/details/:id',
    component: () => import('layouts/SecondaryLayout.vue'),
    children: [
      { path: '', component: () => import('pages/DetailsPage.vue') }
    ]
  },
  {
    path: '/edit/:id',
    component: () => import('layouts/SecondaryLayout.vue'),
    children: [
      { path: '', component: () => import('pages/EditPage.vue') }
    ]
  },
  {
    path: '/create',
    component: () => import('layouts/SecondaryLayout.vue'),
    children: [
      { path: '', component: () => import('pages/CreatePage.vue') }
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
