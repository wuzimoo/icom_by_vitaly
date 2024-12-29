"use client"
import React from 'react';
import {selectedModal} from "./store/modal.store";
import {useAppSelector} from "@/store/store";

interface ModalWrapperProps {
    children: React.ReactNode
}
const ModalWrapper = (prop:ModalWrapperProps) => {
    const {children} = prop
    const modal = useAppSelector(selectedModal)
    return (
        <>
            {children}
            {modal?.component}
        </>
    );
};

export default ModalWrapper;