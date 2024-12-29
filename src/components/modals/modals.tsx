import React from 'react';
import {Box, Theme, DialogContent, Dialog, DialogTitle, IconButton, styled} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {SxProps} from "@mui/system/styleFunctionSx";
import {closeModal, isOpenSelector} from "./store/modal.store";
import {useAppDispatch, useAppSelector} from "@/store/store";

const BootstrapDialog = styled(Dialog)(({theme}) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2)
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1)
    },
}));

export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
    className?: string;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
    const {children, className, onClose, ...other} = props;

    return (
        <DialogTitle sx={{m: 0, p: 2}} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon/>
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

interface BaseModalProps {
    children?: React.ReactNode;
    title: string;
    sx?: SxProps<Theme>
    headerButton?: React.ReactNode
    className?: string
}

export interface ModalAdditionProps {
    handleCloseModal?: (props?: any) => void
    rightPosition?: boolean,
    ns?: string
}

export interface ModalsProps extends BaseModalProps, ModalAdditionProps {
    bottomContent?: React.ReactNode,
    isManualClose?: boolean
}

const ModalDialog = (props: ModalsProps) => {
    const isOpen = useAppSelector(isOpenSelector)
    const dispatch = useAppDispatch()
    const {
        title, children, handleCloseModal,
        bottomContent, sx, rightPosition,
        isManualClose = false
    } = props;

    const handleClose = () => {
        if (!isManualClose) {
            dispatch(closeModal())
        }
        handleCloseModal?.()
    }

    return (
        <BootstrapDialog
            onClose={handleClose}
            open={isOpen}
            maxWidth={false}
        >
            <div className="w-[50vw] p-5">
                <BootstrapDialogTitle
                    id="customized-dialog-title"
                    onClose={handleClose}
                    className="w-[100px]"
                >
                    {title}
                </BootstrapDialogTitle>
                <div className="flex flex-col justify-center items-center">
                    <p className="text-center w-1/2">
                        asdmkfdjkls;gjkldsfngjklndsfkjn gdfsngjkln dsfjkgn jndfgjn dfsjkn gjkndsfg jkndfsjnk gjndksf
                        jgnkdsfjklgn jkdlfsngjk ndfjkn njfg jnksdfgjkndsfkjlng jkldnsfg jknsdfjklng jsdklfngjklndsfgjn
                        kdfsjnkg kdfjns
                    </p>
                </div>
            </div>
        </BootstrapDialog>
    );
};
export default ModalDialog;