import { defineStore } from 'pinia';
import { RouteRecordRaw } from 'vue-router';
import { staticRoutes, asyncRoutes } from '@/router/index';
import { cloneDeep } from 'lodash';
export const useUserStore = defineStore({
    id: 'user',
    state: () => {
        return {
            info: {} as any,
            token: '',
            permissionRoutes: [...asyncRoutes, ...staticRoutes] as RouteRecordRaw[]
        };
    },
    getters: {
        menus: (state) => {
            function travse(routes: RouteRecordRaw[]) {
                if (!routes.length) {
                    return [];
                }

                return routes.filter((route) => {
                    if (route.children?.length) {
                        route.children = travse(route.children);
                    }

                    return !route.meta?.hidden;
                });
            }

            return travse([...cloneDeep(state.permissionRoutes)]);
        }
    },
    actions: {}
});
