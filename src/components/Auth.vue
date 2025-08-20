<template>
  <Card class="px-2 text-center">
    <template #title>
      <i class="pi pi-lock px-2"></i>
      Login
    </template>
    <template #content>
      <div class="flex flex-col items-center">
        <Form :resolver="resolver" @submit="onSubmit">
          <FormField
            v-slot="$field"
            name="username"
            class="flex flex-col gap-1"
          >
            <InputText
              v-model="email"
              class="mt-4 w-full"
              placeholder="Email"
            />
            <Message
              v-if="$field?.invalid"
              severity="error"
              size="small"
              variant="simple"
              >{{ $field.error?.message }}</Message
            >
          </FormField>
          <FormField
            v-slot="$field"
            name="password"
            class="flex flex-col gap-1"
          >
            <Password
              v-model="password"
              class="mt-4 w-full"
              :feedback="false"
              placeholder="Password"
              toggle-mask
            />
            <Message
              v-if="$field?.invalid"
              severity="error"
              size="small"
              variant="simple"
              >{{ $field.error?.message }}</Message
            >
          </FormField>
          <Button
            type="submit"
            class="mt-6"
            :loading="loading"
            label="Submit"
          />
        </Form>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { zodResolver } from "@primevue/forms/resolvers/zod";
import { z } from "zod";
import { useErrorHandler } from "../use/errorHandler.use.ts";
import { useAppWriteStore } from "../stores/appwrite.use.ts";
import { useAuthStore } from "../stores/auth.store.ts";

const email = ref("");
const password = ref("");

const { handleError } = useErrorHandler();

const appWriteStore = useAppWriteStore();
const { account } = storeToRefs(appWriteStore);

const authStore = useAuthStore();
const { authenticated } = storeToRefs(authStore);

const loading = ref(false);

const resolver = zodResolver(
  z.object({
    username: z.email().min(1, { message: "Email is required." }),
    password: z.string().min(1, { message: "Password is required." }),
  }),
);

const onSubmit = async ({ valid }) => {
  if (!valid) return;
  try {
    loading.value = true;
    await account.value?.createEmailPasswordSession(
      email.value,
      password.value,
    );
    await account.value?.get();
    authenticated.value = true;
    loading.value = false;
  } catch (e) {
    handleError(e);
    authenticated.value = false;
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped></style>
