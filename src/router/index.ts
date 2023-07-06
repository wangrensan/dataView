import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
// import Layout from '@/layout/default/index.vue';
// 静态路由
export const staticRoutes: RouteRecordRaw[] = [];

const router = createRouter({
    history: createWebHistory(),
    routes: staticRoutes
});

export const asyncRoutes: RouteRecordRaw[] = [];
export default router;
