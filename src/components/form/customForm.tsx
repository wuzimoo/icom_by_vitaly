import React from 'react';
import { useForm, FieldValues, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AnyObjectSchema } from 'yup';

interface CustomFormProps<TFieldValues extends FieldValues> {
    onSubmit: (data: TFieldValues) => void;
    schema: AnyObjectSchema;
    defaultValues: Partial<TFieldValues>['defaultValues'];
    startValues?: Partial<TFieldValues>;
    children: React.ReactNode;
    globalSave?: React.ReactNode;
    className?: string;
}

export function CustomForm<TFieldValues extends FieldValues>(props: CustomFormProps<TFieldValues>) {

    const {onSubmit, schema, defaultValues, startValues, children, globalSave, className = ""} = props

    const methods = useForm<TFieldValues>({
        resolver: yupResolver(schema),
        mode: 'onChange',
        defaultValues,
        values: startValues as any,
    });

    const { handleSubmit } = methods;

    return (
        <FormProvider {...methods}>
            <form className={`font-inter ${className}`} onSubmit={handleSubmit(onSubmit, (errors) => {console.log(errors)})}>
                {children}
                {globalSave}
            </form>
        </FormProvider>
    );
}
