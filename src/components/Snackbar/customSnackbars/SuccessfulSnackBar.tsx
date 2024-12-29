import React, {forwardRef} from 'react';
import SuccessNotificationIcon from "@/icons/SuccessNotificationIcon";
import {SnackbarMessage} from "notistack";

export interface BaseSnackbarProps {
    message: SnackbarMessage,
    options?: any
}

const SuccessfulSnackBar = forwardRef((props: BaseSnackbarProps, ref: any) => {
    const {message} = props

    return(
        <div ref={ref} className="rounded-2xl bg-white flex gap-5 items-center p-5">
            <SuccessNotificationIcon/>
            <p className="text-[18px] font-semibold">{message}</p>
        </div>
    )
});

export default SuccessfulSnackBar;