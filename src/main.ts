import { createApp } from 'vue';

import store from '@/store';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';
import App from './App.vue';
import i18n from './i18n';
import './index.css';
import { eventBus } from './plugins/event-bus';
import { routers } from './routers';

const app = createApp(App);
app
  .use(i18n)
  .use(Antd)
  .use(routers)
  .use(store)
  .use(eventBus)
  // .use(socket)
  .provide('_global', {
    // setLocale
  });
app.mount('#app');
