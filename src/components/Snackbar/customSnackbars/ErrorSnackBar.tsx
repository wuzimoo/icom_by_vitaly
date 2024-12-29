import React, {forwardRef} from 'react';
import {BaseSnackbarProps} from "@/components/Snackbar/customSnackbars/SuccessfulSnackBar";
import ErrorNotificationIcon from "@/icons/ErrorNotificationIcon";

interface ErrorSnackBarProps extends BaseSnackbarProps {
    additionalText?: string
}

const ErrorSnackBar = forwardRef((props: ErrorSnackBarProps, ref: any) => {
    const {message, additionalText} = props

    return (
        <div ref={ref} className="rounded-2xl bg-white p-5 flex flex-col items-center gap-4">
            <div className="flex gap-5 items-center">
                <ErrorNotificationIcon/>
                <p className="text-[18px] font-semibold">{message}</p>
            </div>
            {additionalText && <p className="text-[14px] font-medium text-[#707070]">{additionalText}</p>}
        </div>
    )
});

export default ErrorSnackBar;