<template>
  <div class="auth-view items-center flex flex-col">
    <div class="text-4xl pb-6">Welcome in the not logged in page!</div>
    <div>
      This is default page that you are seeing if you're not logged in. Feel
      free to change it. We are providing <strong>Auth Component</strong> with
      login box visible below for authentification. You can also change it to
      whatever you want.
    </div>
    <Auth class="mt-12 w-100" />
  </div>
</template>

<script setup lang="ts">
import Auth from "../components/Auth.vue";
</script>

<style scoped></style>
