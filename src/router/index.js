import Vue from 'vue'
import VueRouter from 'vue-router'
import prototype from '../views/PrototypeView.vue'
import dashBoard from "../views/Dashboard.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/namecard',
    name: 'namecard',
    component: () => import('../views/NameCard')
  },
  {
    path: '/',
    name: 'welcome',
    component: () => import('../views/Welcome_page')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/test.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login_page')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/register_page')
  },
  {
    path: '/user_info_change',
    name: 'user_info_change',
    component: () => import('../views/user_info_change')
  },
  {

    path: '/user_center',
    name: 'user_center',
    component: () => import('../views/true_user_center.vue')
  },
  {
    path: '/prototype',
    name: 'prototype',
    component: prototype
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashBoard,
    children: [
      {
        path: '/dashboard/team',
        name: 'teamMain',
        component: () => import('../components/team/TeamMain.vue')
      },
      {
        path: '/dashboard/demo',
        name: 'demo',
        component: () => import('../components/demo/DemoMain.vue'),
        children: [
          {
            path: '/dashboard/demo/console',
            name: 'console',
            component: () => import('../components/demo/DemoConsole.vue')
          },
          {
            path: '/dashboard/demo/create',
            name: 'create',
            component: () => import('../components/demo/DemoCreate.vue')
          },
          {
            path: '/dashboard/demo/star',
            name: 'star',
            component: () => import('../components/demo/DemoStar.vue')
          },
          {
            path: '/dashboard/demo/join',
            name: 'join',
            component: () => import('../components/demo/DemoJoin.vue')
          },
          {
            path: '/dashboard/demo/trash',
            name: 'trash',
            component: () => import('../components/demo/DemoTrash.vue')
          },
          {
            path: '/dashboard/demo/projectlist',
            name: 'projectlist',
            component: () => import('../components/demo/DemoProjectList')
          },
          //{
          //  path: '/dashboard/demo/doxlist',
          // name: 'doxlist',
          // component: () => import('../components/demo/DemoConsole')
          //  },
          //{
          // path: '/dashboard/demo/mydoclist',
          // name: 'mydoclist',
          //  component: () => import('../components/demo/DemoCreate')
          // }
        ]
      }
    ]
  },
  {
    path: '/cp',
    name: 'cp',
    component: () => import('../views/test_chooseprototype')
  },
  {
    path: '/ed',
    name: 'ed',
    component: () => import('../views/editor_test')
  },
  {
    path: '/email',
    name: 'email',
    component: () => import("../views/email.vue")
  },
  {
    path: '/test',
    name: 'test',
    component: () => import("../views/test.vue")
  },
  {
    path:'/textbustest',
    name:'textbustest',
    component: () => import("../views/textbustest")
  },
  {
    path:'/togethertest',
    name:'togethertest',
    component: () => import("../views/togethertest")
  }
]
// {
//   path: '/dashboard/demo',
//   name: 'demo',
//   component: () => import('../views/projectMain.vue')
// }

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

// 白名单， 不需要验证的路由

const whiteList = ['/', '/register', '/login', '/email', 'test']


// 全局验证的路由守卫
router.beforeEach((to, from, next) => {
  if (whiteList.indexOf(to.path) !== -1) {
    // 放行，进入下一个路由
    next()
  } else if (!JSON.parse(sessionStorage.getItem('IfLogin'))) {
    next('/');
  } else {
    next()
  }
})
