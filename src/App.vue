<template>
  <HeaderPanel />
  <div class="flex app">
    <Toast />
    <template v-if="loading"><ProgressSpinner /></template>
    <template v-else-if="!authenticated"><AuthView /></template>
    <template v-else><router-view /></template>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useAppWriteStore } from "./stores/appwrite.use.ts";
import { useAuthStore } from "./stores/auth.store.ts";
import { storeToRefs } from "pinia";
import AuthView from "./views/AuthView.vue";
import HeaderPanel from "./components/HeaderPanel.vue";

const { initAppwrite } = useAppWriteStore();
const authStore = useAuthStore();
const { authenticated } = storeToRefs(authStore);
const { checkLogin } = authStore;

const loading = ref(false);

onMounted(async () => {
  initAppwrite();
  loading.value = true;
  await checkLogin(false);
  loading.value = false;
});
</script>

<style scoped></style>
