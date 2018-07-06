import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'mainWindow',
      component: () => import('@/pages/MainWindow.vue'),
      children: [
        {
          path: '',
          component: () => import('@/pages/main/Index.vue')
        },
        {
          path: 'windows',
          component: () => import('@/pages/main/Windows.vue')
        },
        {
          path: 'transform',
          component: () => import('@/pages/main/Transform.vue')
        },
        {
          path: 'ipc',
          component: () => import('@/pages/main/Ipc.vue')
        }
      ]
    },
    {
      path: '/ipcWindow',
      name: 'ipcWindow',
      component: () => import('@/pages/IpcWindow.vue')
    },
    {
      path: '/newWindow',
      name: 'newWindow',
      component: () => import('@/pages/NewWindow.vue')
    },
    {
      path: '/backGround',
      name: 'backGround',
      component: () => import('@/components/public/BackGround')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/Login')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/pages/Register')
    },
    {
      path: '/answer',
      name: 'answer',
      component: () => import('@/pages/BeginAnswer')
    },
    {
      path: '/answering',
      name: 'answering',
      component: () => import('@/pages/Answering')
    },
    {
      path: '/finishAnswer',
      name: 'finishAnswer',
      component: () => import('@/pages/FinishAnswer')
    },
    {
      path: '/setting',
      name: 'setting',
      meta: {
        title: '设置'
      },
      component: () => import('@/pages/Setting')
    },
    {
      path: '/settingQuestion',
      name: 'settingQuestion',
      meta: {
        title: '出题'
      },
      component: () => import('@/pages/SettingQuestion'),
      children: [
        {
          path: 'index',
          component: () => import('@/pages/SettingQuestionIndex')
        }
      ]
    }
  ]
})
