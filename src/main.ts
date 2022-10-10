import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import * as antIcons from '@ant-design/icons-vue'

const app = createApp(App);
app.use(router);
app.use(store);
app.use(Antd);

// 注册组件
Object.keys(antIcons).forEach(key => {
    // @ts-ignore
    app.component(key, antIcons[key])
})
// 添加到全局
app.config.globalProperties.$antIcons = antIcons

app.mount('#app')
