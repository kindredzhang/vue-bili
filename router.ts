import { createRouter, createWebHistory } from 'vue-router'

const routes: any = []
const modules = import.meta.glob('./src/pages/*.vue')

Object.keys(modules).forEach((key) => {
  const module = {
    path: '/' + key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.')).toLowerCase(),
    component: modules[key]
  }
  routes.push(module)
})

const router = createRouter({
  routes,
  history: createWebHistory()
})
console.log(routes)

export default router
