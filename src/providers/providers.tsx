'use client'
import React from 'react';
import {Provider} from "react-redux";
import {store} from "@/store/store";
import CustomSnackbarProvider from "@/components/Snackbar/SnackbarProvider";
import ModalWrapper from "@/components/modals/modal-wrapper";

const Providers = (props: { children: React.ReactNode }) => {
    return (
        <Provider store={store}>
            <CustomSnackbarProvider/>
            <ModalWrapper>
                {props.children}
            </ModalWrapper>
        </Provider>
    );
};

export default Providers;