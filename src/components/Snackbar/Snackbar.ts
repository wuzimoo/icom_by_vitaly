"use client"
import {enqueueSnackbar, OptionsObject, SnackbarMessage, VariantType} from "notistack";

interface CustomOptions<V extends VariantType> extends OptionsObject<V> {
    additionalText?: string
}

export const successSnackbar =  <V extends VariantType>(message: SnackbarMessage, options?: CustomOptions<V>) => {
    enqueueSnackbar(message, { ...options as OptionsObject<V>, variant: 'success'});
}

export const errorSnackbar =  <V extends VariantType>(message: SnackbarMessage, options?: CustomOptions<V>) => {
    enqueueSnackbar(message, { ...options as OptionsObject<V>, variant: 'error', hideIconVariant: true });
}

export const notifySnackbar =  <V extends VariantType>(message: SnackbarMessage, options?: CustomOptions<V>) => {
    enqueueSnackbar(message, { ...options as OptionsObject<V>, variant: 'info' });
}