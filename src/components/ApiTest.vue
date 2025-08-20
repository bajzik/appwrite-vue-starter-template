<template>
  <Card class="w-200">
    <template #title>
      API Response
      <Divider />
    </template>
    <template #content>
      <template v-if="!response">No response yet</template>
      <template v-else>
        <div class="text-left w-full overflow-scroll">
          <pre>{{ response }}</pre>
        </div>
      </template>
    </template>
    <template #footer>
      <Divider />
      <Button
        label="Fetch Test API Response"
        size="small"
        severity="info"
        outlined
        @click="fetchTestResponse"
      />
    </template>
  </Card>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useExampleApi } from "../api/example.api.ts";
import { useErrorHandler } from "../use/errorHandler.use.ts";

const { handleError } = useErrorHandler();
const response = ref(null);

const fetchTestResponse = async () => {
  response.value = null;
  const { fetchAll } = useExampleApi();
  try {
    response.value = await fetchAll();
  } catch (error) {
    if (error instanceof Error) {
      handleError(error.message);
    }
  }
};
</script>

<style scoped></style>
