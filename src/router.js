import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@views/HomeView.vue';
import AboutView from '@views/AboutView.vue';
import ProjectsView from '@views/ProjectsView.vue';
import ContactView from '@views/ContactView.vue';
import PolicyView from '@views/PolicyView.vue';
import NotFoundView from '@views/NotFoundView.vue';

//TODO: change base if will change deploy from gh-pages
const baseURL = '/BohaterConstruction';

const routes = [
  { path: `${baseURL}/`, name: 'home', component: HomeView },
  { path: `${baseURL}/about`, name: 'about', component: AboutView },
  { path: `${baseURL}/projects`, name: 'projects', component: ProjectsView },
  { path: `${baseURL}/contact`, name: 'contact', component: ContactView },
  { path: `${baseURL}/policy`, name: 'policy', component: PolicyView },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundView }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
