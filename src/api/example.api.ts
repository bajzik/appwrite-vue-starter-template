import { useAppWriteStore } from "../stores/appwrite.use.ts";
import { storeToRefs } from "pinia";

export const useExampleApi = () => {
  const COLLECTION_ID = import.meta.env.VITE_APPWRITE_EXAMPLE_COLLECTION_ID;
  const appWriteStore = useAppWriteStore();

  const { database } = storeToRefs(appWriteStore);

  const fetchAll = async () => {
    try {
      return await database.value?.listDocuments(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        COLLECTION_ID,
      );
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      throw new Error("Failed to fetch documents");
    }
  };

  return { fetchAll };
};
