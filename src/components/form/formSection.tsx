import React, {ReactElement} from 'react';
import {
    useFormContext,
    FieldValues,
    FieldPath,
    Controller,
    ControllerRenderProps,
    ControllerFieldState,
    UseFormStateReturn
} from "react-hook-form";

interface FormSectionProps<TFieldValues extends FieldValues> {
    label?: string;
    name: FieldPath<TFieldValues>;
    blockClassName?: string;
    render: ({
                 field,
                 fieldState,
                 formState
             }: {
        field: ControllerRenderProps<TFieldValues, FieldPath<TFieldValues>>;
        fieldState: ControllerFieldState;
        formState: UseFormStateReturn<TFieldValues>;
    }) => ReactElement;
}

export function FormSection<TFieldValues extends FieldValues>(props: FormSectionProps<TFieldValues>) {
    const {
        label,
        name,
        blockClassName,
        render
    } = props
    const context = useFormContext<TFieldValues>();

    if (!context) {
        console.error("FormSection must be used within a FormProvider");
        return null;
    }

    const {control, formState: {errors}} = context;

    const error = name.split('.').reduce((acc, key) => {
        key = key.replace('[', '').replace(']', '')
        return acc?.[key]
    }, errors as any)?.message as string | undefined; //son of ther bitch who eat zahidnyi cum write in reducer key

    return (
        <div className={blockClassName}>
            {label && <label className="block text-[14px] font-medium">{label}</label>}
            <Controller
                name={name}
                control={control}
                render={render}
            />
            {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
        </div>
    );
}
