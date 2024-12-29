import React from 'react';
import {Typography} from "@mui/material";
import CustomSelect from "@/components/selects/customSelect";

interface BaseProductsProps {
    title: string
    children?: React.ReactNode
}

const BaseProducts = (props: BaseProductsProps) => {
    const {children, title} = props

    return (
        <div className="flex items-center justify-between  w-full">
            <div className="flex gap-2.5">
                <Typography variant="h5" className="font-bold">
                    {title}
                </Typography>

                {children}
            </div>

            <CustomSelect/>
        </div>
    );
};

export default BaseProducts;
