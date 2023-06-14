import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/productos',
      name: 'productos',
      component: () => import('../views/ProductoView.vue'),
      children: [
      { path: '', component: () => import('../components/producto/ProductoList.vue') },
      { path: 'crear', component: () => import('../components/producto/ProductoCreate.vue') },
      {
        path: 'editar/:id',
        component: () => import('../components/producto/ProductoEdit.vue')
      }
      ]
    },
     {
      path: '/usuarios',
       name: 'usuarios',
      component: () => import('../views/UsuarioView.vue'),
       children: [
       { path: '', component: () => import('../components/Usuario/UsuarioList.vue') },
       { path: 'crear', component: () => import('../components/Usuario/UsuarioCreate.vue') },
       {
         path: 'editar/:id',
         component: () => import('../components/Usuario/UsuarioEdit.vue')
       }
       ]
     },
    {
      path: '/categorias',
      name: 'categorias',
      component: () => import('../views/CategoriaView.vue'),
      children: [
      { path: '', component: () => import('../components/Categoria/CategoriaList.vue') },
      { path: 'crear', component: () => import('../components/Categoria/CategoriaCreate.vue') },
      {
        path: 'editar/:id',
        component: () => import('../components/Categoria/CategoriaEdit.vue')
      }
      ]
    },
    {
      path: '/ventas',
      name: 'ventas',
      component: () => import('../views/VentaView.vue'),
      children: [
      { path: '', component: () => import('../components/Venta/VentaList.vue') },
      { path: 'crear', component: () => import('../components/Venta/VentaCreate.vue') },
      {
        path: 'editar/:id',
        component: () => import('../components/Venta/VentaEdit.vue')
      }
      ]
    },
    {
      path: '/personas',
      name: 'personas',
      component: () => import('../views/PersonaView.vue'),
      children: [
      { path: '', component: () => import('../components/Persona/PersonaList.vue') },
      { path: 'crear', component: () => import('../components/Persona/PersonaCreate.vue') },
      {
        path: 'editar/:id',
        component: () => import('../components/Persona/PersonaEdit.vue')
      }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
