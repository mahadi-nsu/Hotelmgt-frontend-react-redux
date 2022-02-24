import { toast } from "react-toastify";

export const showToast = (toastType, toastText) => {
    if (toastType === "success") {
        toast.success(toastText, {
            position: "top-center",
        });
    }
    if (toastType === "error") {
        toast.error(toastText, {
            position: "top-center",
        });
    }
}