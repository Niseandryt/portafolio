import { createRouter, createWebHistory } from 'vue-router'
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'
import Projects from '@/views/Projects.vue'
import Work from '@/views/Work.vue'
import Home from '@/views/Home.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
        { path: '/', redirect: '/home'},
        { path: '/home', name:'Home', component: Home},
        { path: '/about', name: 'About', component: About},
        { path: '/who-am-i', name: 'Work', component: Work},
        { path: '/projects', name: 'Projects', component: Projects},
        { path: '/contact', name: 'Contact', component: Contact},
    ]
})

export default router
