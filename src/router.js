import Vue from 'vue';
import Router from 'vue-router';
import Blog from './views/main.vue';
import head from './components/head.vue';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/blog',
      name: 'blog',
      component: Blog,
      children: [
        {
          path: '2017',
          component: head,
        },
      ],
    },
    {
      path: '*',
      name: 'default',
      component: Blog,
    },
  ],
});
