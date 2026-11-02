import { toast as sonnerToast } from "sonner";

export interface ToastProps {
  title?: string;
  description?: string;
  variant?: "default" | "destructive";
  [key: string]: unknown;
}

export function useToast() {
  const toast = ({ title, description, variant, ...props }: ToastProps) => {
    const options = {
      description,
      ...props,
    };

    if (variant === "destructive") {
      return sonnerToast.error(title || "Error", options);
    }
    return sonnerToast(title || "Notification", options);
  };

  return {
    toast,
    dismiss: (id?: string) => sonnerToast.dismiss(id),
  };
}
