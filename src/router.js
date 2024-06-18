import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  { path: `/`, name: 'home', component: () => import('@views/HomeView.vue') },
  { path: `/about`, name: 'about', component: () => import('@views/AboutView.vue') },
  { path: `/projects`, name: 'projects', component: () => import('@views/ProjectsView.vue') },
  { path: `/contact`, name: 'contact', component: () => import('@views/ContactView.vue') },
  { path: `/policy`, name: 'policy', component: () => import('@views/PolicyView.vue') },
  { path: `/:pathMatch(.*)*`, name: 'not-found', component: () => import('@views/NotFoundView.vue') },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
