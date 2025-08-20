<template>
  <div class="sample-view">
    <div class="text-4xl pb-6">Welcome logged in user!</div>
    <div>
      You managed to log in! Good. Now feel free and change your app whatever
      you want.
    </div>
    <Button class="mt-12" severity="danger" @click="onLogoutClick"
      >Logout</Button
    >
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "../stores/auth.store.ts";

const onLogoutClick = () => {
  const authStore = useAuthStore();
  authStore.logout();
};
</script>
<style scoped></style>
