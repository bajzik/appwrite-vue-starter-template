import { Account, Client, Databases } from "appwrite";
import { ref } from "vue";
import { defineStore } from "pinia";

export const useAppWriteStore = defineStore("appWrite", () => {
  const client = ref<Client | null>(null);
  const account = ref<Account | null>(null);
  const database = ref<Databases | null>(null);

  const initAppwrite = () => {
    client.value = new Client();
    client.value.setEndpoint(import.meta.env.VITE_APPWRITE_PUBLIC_ENDPOINT);
    client.value.setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);
    if (import.meta.env.DEV) {
      client.value.setDevKey(import.meta.env.VITE_APPWRITE_DEV_KEY);
    }
    account.value = new Account(client);
    database.value = new Databases(client);
  };

  return { initAppwrite, account, database, client };
});
