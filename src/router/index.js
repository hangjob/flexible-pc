import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
const mainRoutes = [
    {
        path: "/",
        name: "index",
        redirect: "/index",
    },
    {
        path: "/index",
        name: "index",
        component: () => import("@/views/index"),
        meta: {
            title: "首页",
        },
    },
    {
        path: "/pdetail",
        name: "pdetail",
        component: () => import("@/views/index/pdetail"),
        meta: {
            title: "详情页",
        },
    },
];

// 消除重复跳转警告
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err);
};

const router = new Router({
    mode: "history", // hash history
    base: __dirname,
    routes: mainRoutes,
});

router.beforeEach((to, from, next) => {
    next();
});

export default router;
