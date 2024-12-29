"use client"
import {errorSnackbar, successSnackbar} from "@/components/Snackbar/Snackbar";
import {SnackbarMessage} from "notistack";

/**
 * @deprecated use apiResponse (line 29)
 */
export const handleSuccessAndError = async (
    request: () => Promise<any>,
    successMessage: SnackbarMessage,
    handleErrorRequest?: (value?: any) => void) => {
    try {
        await request()
        successMessage && successSnackbar(successMessage);
        return true
    } catch (ex: any) {
        console.log(ex);
        if (!ex.data) {
            errorSnackbar("Something went wrong!");
            return false;
        }
        handleErrorRequest?.(ex) ;
        ex.data?.message && errorSnackbar(ex.data?.message.join('\n'));
        return false
    }
}

export const useApiResponse = (ns?: string) => {
    const handleSuccessAndError = async (
      request: () => Promise<any>,
      successMessage: SnackbarMessage,
      handleErrorRequest?: (value?: any) => void) => {
        try {
            await request()
            successMessage && successSnackbar(successMessage.toString());
            return true
        } catch (ex: any) {
            const messages=ex.data?.message ?? ex.response?.data?.message;
            console.log(ex);
            if (!messages) {
                errorSnackbar("Something went wrong!");
                return false;
            }
            handleErrorRequest?.(ex) ;
            errorSnackbar(messages.map((message: string) => message).join('\n'));
            return false
        }
    }
    return handleSuccessAndError;
}