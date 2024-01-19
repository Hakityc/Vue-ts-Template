import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import {fetchChildrenRoutes} from '@/utils/router'

const routes: RouteRecordRaw[] = [
  {
    name: 'home',
    path: '/',
    component: () => import('@/views/HomeView.vue'),
    children:[...fetchChildrenRoutes(),]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export const setupRouter = async (app: any) => {
  app.use(router)
  await router.isReady()
}
