import { createRouter, createWebHistory } from 'vue-router';

import Home from '../Pages/Home.vue';
import AboutUs from '../Pages/AboutUs.vue';
import CoursesList from '../Pages/CoursesList.vue';
import CourseDetail from '../Pages/CourseDetail.vue';
import FrequentQuestions from '../Pages/FrequentQuestions.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/nosotros',
    name: 'AboutUs',
    component: AboutUs,
  },
  {
    path: '/cursos',
    name: 'Courses',
    component: CoursesList,
  },
  {
    path: '/cursos/:id',
    name: 'Course',
    component: CourseDetail,
  },
  {
    path: '/preguntas-frecuentes',
    name: 'FAQ',
    component: FrequentQuestions,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
