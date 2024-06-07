import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '@views/HomeView.vue';
import AboutView from '@views/AboutView.vue';
import ProjectsView from '@views/ProjectsView.vue';
import ContactView from '@views/ContactView.vue';
import PolicyView from '@views/PolicyView.vue';
import NotFoundView from '@views/NotFoundView.vue';

const routes = [
  { path: `/`, name: 'home', component: HomeView },
  { path: `/about`, name: 'about', component: AboutView },
  { path: `/projects`, name: 'projects', component: ProjectsView },
  { path: `/contact`, name: 'contact', component: ContactView },
  { path: `/policy`, name: 'policy', component: PolicyView },
  { path: `/:pathMatch(.*)*`, name: 'not-found', component: NotFoundView },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
