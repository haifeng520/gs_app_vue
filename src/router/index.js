import Vue from 'vue';
import Router from 'vue-router';
import { Message } from 'element-ui';

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: { title: '自述文件' },
            children:[
                {
                    path: '/welcome',
                    component: () => import('../components/common/welcome.vue'),
                    meta: { title: '欢迎页' }
                },
                {
                    path: '/404',
                    component: resolve => require(['../components/common/404.vue'], resolve),
                    meta: { title: '404' }
                },
                {
                    path: '/403',
                    component: resolve => require(['../components/common/403.vue'], resolve),
                    meta: { title: '403' }
                },
                {
                    path: '/classmanagement',
                    component: () => import('../components/page/customerService/ClassManagement.vue'),
                    meta: { title: '班级管理' }
                },
                {
                    path: '/classmanagement/add',
                    component: () => import('../components/page/customerService/ClassManagementAdd.vue')
                },
                {
                    path: '/classmanagement/edit',
                    name: 'editClass', // 组件传值 路由名称
                    component: () => import('../components/page/customerService/ClassManagementEdit.vue')
                },
                {
                    path: '/test',
                    component: () => import('../components/page/test/test.vue'),
                    meta: { title: '测试' }
                },
                {
                    path: '/editor',
                    component: () => import('../components/page/test/vue-quill-editor.vue'),
                    meta: { title: '富文本' }
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/common/Login.vue'], resolve)
        },
        /* {
            path: '*',
            redirect: '/404'
        } */
    ]
});

//使用钩子函数对路由进行权限跳转
// 设置全局的前置路由守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    // 判断有没有 token
    const token = sessionStorage.getItem('token');
    if (token) {
      next();
    } else {
      router.push('login');
      // 提示一下
      Message.warning('请先登录');
    }
  }
});

export default router;
