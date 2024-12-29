import React, {HTMLInputTypeAttribute} from 'react';
import { FieldValues, FieldPath } from "react-hook-form";
import {FormSection} from "./formSection";


export interface TextInputSectionProps<TFieldValues extends FieldValues> {
    label?: string
    name: FieldPath<TFieldValues>
    placeholder?: string
    blockClassName?: string
    isTextArea?: boolean
    type?: HTMLInputTypeAttribute
}

export function TextInputSection<TFieldValues extends FieldValues>(props:TextInputSectionProps<TFieldValues>) {
    const {
        label,
        name,
        placeholder,
        blockClassName = "",
        type
    } = props

    return (
        <FormSection<TFieldValues>
            label={label}
            name={name}
            blockClassName={`w-full ${blockClassName}`}
            render={({ field }) => <></>}
        />
    );
}