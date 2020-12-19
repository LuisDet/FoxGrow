import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import BaseCard from './components/ui/BaseCard.vue';
import BaseText from './components/ui/BaseText.vue';
import BaseButton from './components/ui/BaseButton.vue';
import TheWrapper from './components/layout/TheWrapper.vue';

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('base-text', BaseText);
app.component('base-button', BaseButton);
app.component('the-wrapper', TheWrapper);

app.use(store);
app.use(router);

app.mount('#app');
