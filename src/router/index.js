import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/pages/Main.vue';
import Projects from '@/pages/Projects.vue';
import About from '@/pages/About.vue';
import Contacts from '@/pages/Contacts.vue';

const routes = [
	{
		path: '/',
		component: Main,
	},
	{
		path: '/projects',
		component: Projects,
	},
	{
		path: '/about',
		component: About,
	},
	{
		path: '/contacts',
		component: Contacts,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

router.beforeEach((to, from, next) => {
	window.scrollTo(0, 0);
	next();
});

export default router;
