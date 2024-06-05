import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@views/HomeView.vue';
import AboutView from '@views/AboutView.vue';
import GetStartedView from '@views/GetStartedView.vue';
import ProjectsView from '@views/ProjectsView.vue';
import ContactView from '@views/ContactView.vue';
import PolicyView from '@views/PolicyView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/get-started', component: GetStartedView },
  { path: '/projects', component: ProjectsView },
  { path: '/contact', component: ContactView },
  { path: '/policy', component: PolicyView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
