import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import BaseCard from './components/base/BaseCard.vue';
import BaseText from './components/base/BaseText.vue';
import BaseButton from './components/base/BaseButton.vue';
import BaseTitle from './components/base/BaseTitle.vue'
import BaseDescription from './components/base/BaseDescription.vue'
import TheWrapper from './components/layout/TheWrapper.vue';

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('base-text', BaseText);
app.component('base-button', BaseButton);
app.component('base-description', BaseDescription);
app.component('base-title', BaseTitle);
app.component('the-wrapper', TheWrapper);

app.use(store);
app.use(router);

app.mount('#app');
