import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./router.ts";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import { ToastService } from "primevue";

const app = createApp(App);
const pinia = createPinia();

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.use(router);
app.use(pinia);
app.use(ToastService);
app.mount("#app");
