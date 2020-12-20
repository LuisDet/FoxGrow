import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import BaseCard from './components/base/BaseCard.vue';
import BaseButton from './components/base/BaseButton.vue';
import BaseTitle from './components/base/BaseTitle.vue'
import BaseDescription from './components/base/BaseDescription.vue'
import LayoutText from './components/layout/LayoutText.vue';
import VWrapper from './components/wrapper/VWrapper.vue';

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-description', BaseDescription);
app.component('base-title', BaseTitle);

app.component('v-wapper', VWrapper);

app.component('layout-text', LayoutText);

app.use(store);
app.use(router);

app.mount('#app');
