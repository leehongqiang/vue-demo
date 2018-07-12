import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/page/home.vue';
import ErrorPage from '@/page/error';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta: {
                title: 'VUE-Demo'
            }
        },
        {
            path: '*',
            name: 'error',
            component: ErrorPage,
            meta: {
                title: '页面找不到'
            }
        }
    ]
});
