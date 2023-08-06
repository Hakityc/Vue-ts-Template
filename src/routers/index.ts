import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router"

const routes: RouteRecordRaw[] = []

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export const setupRouter = async (app: any) => {
  await router.isReady()
  app.use(router)
}
