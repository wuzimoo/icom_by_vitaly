import React from 'react';
import Modals, {ModalsProps} from "../modals";
import {DialogContent} from "@mui/material";

export interface CustomButtonActionModalProps extends ModalsProps {
    text: string
    children?: React.ReactNode
    className?: string
}

const CustomButtonActionModal = (props: CustomButtonActionModalProps) => {
    const {text, children, ...rest} = props

    return (
        <Modals
            {...rest}
        >
            <DialogContent>
                    {text}
            </DialogContent>

            {children}
        </Modals>
    )
};

export default CustomButtonActionModal;