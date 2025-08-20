import { useToast } from "primevue";
import { capitalizeFirstLetter } from "../utils/utils.ts";

export const useErrorHandler = () => {
  const toast = useToast();
  const handleError = (message: string) => {
    toast.add({
      severity: "error",
      summary: "Error",
      detail: capitalizeFirstLetter(message),
      life: 3000,
    });
  };

  return { handleError };
};
