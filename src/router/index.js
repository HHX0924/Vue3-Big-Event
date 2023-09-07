import { createRouter, createWebHistory } from 'vue-router'
// import {useUserStore} from "@/stores";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/Login', component: () => import('@/views/login/LoginPage.vue') },
    {
      path: '/',
      component: () => import('@/views/layout/LayoutContainer.vue'),
      redirect: '/article/manage',
      children: [
        {
          path: '/article/manage',
          component: import('@/views/article/ArticleManage.vue')
        },
        {
          path: '/article/channel',
          component: import('@/views/article/ArticleChannel.vue')
        },
        {
          path: '/user/profile',
          component: import('@/views/user/UserProfile.vue')
        },
        {
          path: '/user/password',
          component: import('@/views/user/UserPassword.vue')
        },
        {
          path: '/user/avatar',
          component: import('@/views/user/UserAvatar.vue')
        }
      ]
    }
  ]
})

// router.beforeEach(async (to) => {
//   const useStore = useUserStore()
//   if (
//     // 检查用户是否已登录
//     !useStore.token &&
//     // ❗️ 避免无限重定向
//     to.path !== '/login'
//   ) {
//     // 将用户重定向到登录页面
//     return '/login'
//   }
// })

export default router
