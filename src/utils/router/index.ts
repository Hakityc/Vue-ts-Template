import { RouteRecordRaw } from 'vue-router'

export const fetchChildrenRoutes = () => {
  const modules = import.meta.glob('./modules/*.ts', { eager: true })
  const routesModules: RouteRecordRaw[] = Object.values(modules).map((module: any) => module.default).flat()
  return routesModules
}