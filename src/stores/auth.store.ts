import { defineStore, storeToRefs } from "pinia";
import { ref } from "vue";
import { useAppWriteStore } from "./appwrite.use.ts";
import { useErrorHandler } from "../use/errorHandler.use.ts";

export const useAuthStore = defineStore("auth", () => {
  const authenticated = ref(false);
  const appWriteStore = useAppWriteStore();
  const { account } = storeToRefs(appWriteStore);
  const { handleError } = useErrorHandler();

  const checkLogin = async (showError = true) => {
    try {
      await account.value?.get();
      authenticated.value = true;
    } catch (e) {
      if (showError) {
        handleError(e);
      }
      authenticated.value = false;
    }
  };

  const logout = async () => {
    try {
      await account.value?.deleteSession("current");
      authenticated.value = false;
    } catch (error) {
      handleError(error);
    }
  };

  return { authenticated, logout, checkLogin };
});
