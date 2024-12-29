"use client"
import * as React from 'react';
import {Button} from '@mui/material';
import {SnackbarProvider, closeSnackbar} from 'notistack';
import {Cancel} from "@mui/icons-material";
import SuccessfulSnackBar from "@/components/Snackbar/customSnackbars/SuccessfulSnackBar";
import ErrorSnackBar from "@/components/Snackbar/customSnackbars/ErrorSnackBar";

export default function CustomSnackbarProvider() {
    return (
        <SnackbarProvider
            maxSnack={3}
            anchorOrigin={{horizontal: "right", vertical: "bottom"}}
            action={(snackbarId) => (
                <Button color="inherit" onClick={() => closeSnackbar(snackbarId)}>
                    <Cancel/>
                </Button>
            )}
            Components={{
                success: SuccessfulSnackBar,
                error: ErrorSnackBar
            }}
        ></SnackbarProvider>
    );
}