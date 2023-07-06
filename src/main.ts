import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import './router/permission';
import './utils/dark';
import 'font-awesome/css/font-awesome.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import './styles/index.scss';
import 'element-plus/dist/index.css';
import 'dayjs/locale/zh-cn';
import dayjs from 'dayjs';
// import VueGridLayout from 'vue-grid-layout';

dayjs.locale('zh-cn');
// 创建vue实例
const app = createApp(App);

// 导入图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

app.use(store);
app.use(router);
// app.use(VueGridLayout);

// 挂载实例
app.mount('#app');
