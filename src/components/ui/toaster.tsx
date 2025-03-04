import { useToast } from "@/hooks/use-toast";

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";

export function Toaster() {
  const {
    toasts,
    dismiss,
    ToastType,
    // bottomViewPort
  } = useToast();

  return (
    <ToastProvider duration={2000}>
      {toasts.map(function ({
        id,
        toastType,
        title,
        description,
        action,
        duration,
        ...props
      }) {
        return (
          <Toast
            key={id}
            {...props}
            onClick={() => dismiss(id)}
            duration={duration}
          >
            <div className="grid gap-3">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>
                  {ToastType(toastType || "info")}
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose className="top-2.5" />
          </Toast>
        );
      })}
      <ToastViewport
      // className={bottomViewPort()}
      />
    </ToastProvider>
  );
}
