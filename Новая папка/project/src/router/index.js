import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);


import ProjectList from "@/views/ProjectList/ProjectList.vue";
import TaskList from "@/views/TaskList/TaskList.vue";
import UserProfile from "@/views/UserProfile/UserProfile.vue";
import UserList from "@/views/UserList/UserList.vue";
import TaskCard from "@/views/TaskCard/TaskCard.vue";
import NotFound from "@/views/NotFound/NotFound.vue";
import AuthPage from "@/views/AuthPage/AuthPage.vue";
import CreateTask from "@/views/CreateTask/CreateTask.vue";
import EditTask from "@/views/EditTask/EditTask.vue";
import CreateUser from "@/views/CreateUser/CreateUser.vue";
import NavigationMenu from "@/components/NavigationMenu/NavigationMenu.vue";

const routes = [
  {
    path: '/',
    redirect: { path: 'TaskList', name: 'TaskList', component: TaskList }
  },
  {
    path: '/', name: 'NavigationMenu', component: NavigationMenu,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('isAuthorized') == null || localStorage.getItem('isAuthorized') == "false") {
        next({ path: '/AuthPage', name: 'AuthPage', component: AuthPage });
      } else {
        next();
      }
    },
    children: [
      { path: 'ProjectList', name: 'ProjectList', component: ProjectList },
      { path: 'TaskList', name: 'TaskList', component: TaskList },
      { path: 'UserProfile/:id', name: 'UserProfile', component: UserProfile, props: true },
      {
        path: 'UserList', name: 'UserList', component: UserList, beforeEnter: (to, from, next) => {
          if (localStorage.getItem('isAuthorized') == null || localStorage.getItem('isAuthorized') == "false") {
            next({ path: '/AuthPage', name: 'AuthPage', component: AuthPage });
          } else {
            next();
          }
        }
      },
      { path: 'CreateUser', name: 'CreateUser', component: CreateUser, props: true },
      { path: 'TaskList/CreateTask', name: 'CreateTask', component: CreateTask },
      { path: 'TaskList/EditTask', name: 'EditTask', component: EditTask, props: true },
      { path: 'TaskList/:id', name: 'TaskCard', component: TaskCard, props: true },
    ]
  },
  { path: '/AuthPage', name: 'AuthPage', component: AuthPage },
  { path: "*", name: 'NotFound', component: NotFound },

];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;