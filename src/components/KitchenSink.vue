<template>
  <div class="kitchen-sink">
    <div class="text-sm">
      This is kitchen sink. Basically, i'm proving here some test functions and
      components for you, so you can easily test your app. Feel free to remove
      this component from your app.
    </div>
    <Divider>Toast Test</Divider>
    <div class="flex mt-6 gap-2 justify-center">
      <Button
        outlined
        label="Success Toast"
        size="small"
        severity="success"
        @click="showToast('success')"
      />
      <Button
        outlined
        label="Warning Toast"
        size="small"
        severity="warn"
        @click="showToast('warn')"
      />
      <Button
        outlined
        label="Danger Toast"
        size="small"
        severity="danger"
        @click="showToast('error')"
      />
    </div>
    <Divider>AppWrite API test</Divider>
    <div class="flex mt-6 gap-2 justify-center">
      <ApiTest />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToast } from "primevue";
import ApiTest from "./ApiTest.vue";
const toast = useToast();
const showToast = (severity: string) => {
  toast.add({
    severity,
    summary: `${severity.charAt(0).toUpperCase() + severity.slice(1)} Toast`,
    detail: `This is a ${severity} toast message.`,
    life: 3000,
  });
};
</script>

<style scoped></style>
