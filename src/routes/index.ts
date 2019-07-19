import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'

Vue.use(Router);

// @ts-ignore
export const constantRouterMap: RouteConfig[]  = [
    {
        path: '/',
        name: 'Index',
        component: () => import('@/views/Index/index.vue'),
        meta: {
            title: '首页'
        }
    }, {
        path: '/My',
        name: 'My',
        component: () => import('@/views/My/index.vue'),
        meta: {
            title: '首页'
        }
    }, {
        path: '/NoticeList/:userId',//通知列表
        name: 'NoticeList',
        component: () => import('@/views/NoticeList/index.vue'),
        meta: {
            title: '首页'
        }

    },
    {
        path: '/NoticeDetail/:id',//通知详情
        name: 'NoticeDetail',
        component: () => import('@/views/NoticeDetail/index.vue'),
        meta: {
            title: '首页'
        }
    },
    {
        path: '/AgencyList',//待办列表
        name: 'AgencyList',
        component: () => import('@/views/AgencyList/index.vue'),
        meta: {
            title: '首页'
        }
    },  {
        path: '/CheckDelegateList',//代表考核列表
        name: 'CheckDelegateList',
        component: () => import('@/views/CheckDelegateList/index.vue'),
        meta: {
            title: '首页'
        }
    }, ,  {
        path: '/CheckDelegateDetail',//代表考核列表
        name: 'CheckDelegateDetail',
        component: () => import('@/views/CheckDelegateDetail/index.vue'),
        meta: {
            title: '首页'
        }
    },  {
        path: '/CheckManagerList',//经理考核列表
        name: 'CheckManagerList',
        component: () => import('@/views/CheckManagerList/index.vue'),
        meta: {
            title: '首页'
        }
    },  {
        path: '/ScoreDetail',//经理考核列表
        name: 'ScoreDetail',
        component: () => import('@/views/ScoreDetail/index.vue'),
        meta: {
            title: '首页'
        }
    }, {
        path: '/HistoryScoreList',//经理考核列表
        name: 'HistoryScoreList',
        component: () => import('@/views/HistoryScoreList/index.vue'),
        meta: {
            title: '首页'
        }
    }, {
        path: '/CheckDetail',//经理考核列表
        name: 'CheckDetail',
        component: () => import('@/views/CheckDetail/index.vue'),
        meta: {
            title: '首页'
        }
    },
    {
        path: '/Home',
        name: 'Home',
        component: () => import('@/views/Home/index.vue'),
        meta: {
            title: '首页'
        },
        //配置子路由
        children: [
            // {
            //     path: 'HomeSon',
            //     name: 'HomeSon',
            //     component: () => import('@/views/Home/HomeSon/index.vue')
            // }
        ]
    }
];
// //固定展示的路由， 如果非开启权限分配功能，将全部路由添加到此处 ↓
// export const constantRouterMap: RouteConfig[] = [
//   {
//     path: '/login',
//     name: 'login',
//     component: () => import(/* webpackChunkName: "Login" */ '@/views/Login/index.vue'),
//     meta: {
//       title: '登录'
//     }
//   },
//   {
//     path: '/',
//     name: 'index',
//     component: () => import(/* webpackChunkName: "Index" */ '@/views/Index/index.vue'),
//     meta: {
//       title: '首页',
//       keepAlive: true //如果需要缓存当前组件，设置成true
//     }
//   },
//   {
//     path: '/home',
//     name: 'home',
//     beforeEnter(to, from, next) {
//       setTimeout(() => {
//         next()
//       }, 10000)
//     },
//     component: () => import(/* webpackChunkName: "Index" */ '@/views/Home/index.vue'),
//     meta: {
//       title: 'home',
//     }
//   },
//   {
//     path: '/404',
//     name: 'Page404',
//     component: () => import(/* webpackChunkName: "Index" */ '@/views/404.vue'),
//     meta: {
//       title: '未找到页面',
//     }
//   },
//   {
//     path: '*',
//     redirect: '/404'
//   }
// ];

//根据权限分配的路由
export const asyncRouterMap: RouteConfig[] = [
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: () => import(/* webpackChunkName: "Index" */ '@/views/Home/index.vue'),
  //   meta: {
  //     title: 'home',
  //     roles: ['user']
  //   }
  // },
  {
    path: '/admin',
    name: 'admin',
    component: () => import(/* webpackChunkName: "Index" */ '@/views/Admin/index.vue'),
    meta: {
      title: '管理员',
      roles: ['admin'] //后台返给的权限
    }
  }
];




export default new Router({
  mode: 'hash',
  routes: constantRouterMap,
  scrollBehavior(to, from, savedPosition) {
    //设置所有跳转后的路由都滚动到顶部

    // 由于当前配置了keepAlive缓存，所以现在对跳转路由防护顶部进行注释，需要根据逻辑进行适配
    // 注意: 这个功能只在支持 history.pushState 的浏览器中可用。

    // if (savedPosition) {
    //   return savedPosition
    // } else {
    //   return { x: 0, y: 0 }
    // }
  }
})
