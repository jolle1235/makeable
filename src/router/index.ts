import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Login from '../components/Login.vue'
import MainMenu from '../views/MainMenu.vue'
import Quiz from '../components/Quiz.vue'
import QuizEasy from '../components/QuizEasy.vue'
import QuizMedium from '../components/QuizMedium.vue'
import QuizHard from '../components/QuizHard.vue'
import { component } from 'vue/types/umd'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },{
    path: '/Quiz',
    name: 'Quiz',
    component: Quiz
  },{
    path: '/QuizEasy',
    name: 'QuizEasy',
    component: QuizEasy
  },{
    path: '/QuizMedium',
    name: 'QuizMedium',
    component: QuizMedium
  },{
    path: '/QuizHard',
    name: 'QuizHard',
    component: QuizHard
  },

]

const router = new VueRouter({
  routes
})

export default router
