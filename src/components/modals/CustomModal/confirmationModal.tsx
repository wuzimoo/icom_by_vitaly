"use client";
import * as React from 'react';
import CustomButtonActionModal, {CustomButtonActionModalProps} from "./customButtonAction.modal";
import {dialogSubmit} from "../store/modal.store";
import classNames from "classnames";
import {useEffect} from "react";
import {useAppDispatch} from "@/store/store";
import {Button, ButtonPropsColorOverrides} from "@mui/material";
import {OverridableStringUnion} from "@mui/types";
import useConfirmModal from "@/components/modals/hooks/useConfirmModal";

interface ButtonArrowProps {
    title?: string
    handleClick?: () => Promise<void>;
    color?: OverridableStringUnion<"error" | "inherit" | "primary" | "secondary" | "success" | "info" | "warning", ButtonPropsColorOverrides>,
    type?: "submit" | "reset" | "button"
}

export interface ConfirmationModalProps extends CustomButtonActionModalProps {
    successfulText?: string
    confirm: ButtonArrowProps
    cancel?: ButtonArrowProps
    className?: string
    children?: React.ReactNode,
    autoConfirm?: boolean
}

function ConfirmationModal(props: ConfirmationModalProps) {
    const {successfulText, confirm, cancel, className, children, autoConfirm, ...rest} = props
    const {
        handleConfirmClick,
        handleCancelClick
    } = useConfirmModal(successfulText ?? "", confirm.handleClick, cancel?.handleClick)

    useEffect(() => {
        if (autoConfirm) {
            handleConfirmClick();
        }
    }, [autoConfirm]);


    return (
        <CustomButtonActionModal
            {...rest}
        >
            {children}
            <div className="flex gap-3 mt-5">
                <Button className="w-[7vw]" variant="contained"
                        onClick={handleConfirmClick} {...confirm}>{confirm?.title ?? "Confirm"}</Button>
                <Button className="w-[7vw]" variant="contained" onClick={handleCancelClick}
                        color="error" {...cancel}>{cancel?.title ?? "Cancel"}</Button>
            </div>
        </CustomButtonActionModal>
    )
}

export default ConfirmationModal;