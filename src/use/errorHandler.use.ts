import { useToast } from "primevue";
import { capitalizeFirstLetter } from "../utils/utils.ts";

export type Error = {
  name: string;
  message: string;
};

export const useErrorHandler = () => {
  const toast = useToast();
  const handleError = (error: Error) => {
    toast.add({
      severity: "error",
      summary: "Error",
      detail: capitalizeFirstLetter(error.message),
      life: 3000,
    });
  };

  return { handleError };
};
