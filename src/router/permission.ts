import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';
import router from './index';
import { useUserStore } from '@/store/user';

const WHITE_PAGE_LIST = ['/login', '/404'];

export const getFirstRoutePath = () => {
    const userStore = useUserStore();

    const childrenRoutes = userStore.menus?.length ? userStore.menus[0].children : [];
    if (childrenRoutes?.length) {
        return `${userStore.menus[0].path}/${childrenRoutes[0].path}`;
    } else {
        return '/noPermission';
    }
};

router.beforeEach(
    async (
        to: RouteLocationNormalized,
        from: RouteLocationNormalized,
        next: NavigationGuardNext
    ) => {
        // const userStore = useUserStore();
        console.log(to.path);
        if (to.path === '/404') {
            console.log('全部路由', router.getRoutes());
        }

        if (WHITE_PAGE_LIST.includes(to.path)) {
            return next();
        }

        const token = '';
        // const token = getToken();
        if (!!token) {
            const userStore = useUserStore();

            // TODO: 切换
            if (!userStore.info.nickName) {
                // await userStore.getDetail();
                userStore.info.nickName = '测试~~';

                // 注册当前应用的路由
                // const myAsyncRoutes = await userStore.getMyPermissionRoutes();
                // myAsyncRoutes.forEach((route) => {
                //     router.addRoute(route);
                // });

                // 自动跳转至应用的第一个路由
                if (to.path === '/') {
                    next({ path: getFirstRoutePath(), replace: true });
                } else {
                    next({ ...to, replace: true });
                }
            } else {
                next();
            }
        } else {
            next({ path: '/login', replace: true });
        }
    }
);
