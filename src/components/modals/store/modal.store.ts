import React from "react";
import {createAsyncThunk, createDraftSafeSelector, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "@/store/store";
import {handleSuccessAndError} from "@/helpers/helper";

interface Modal {
    component?:React.ReactNode
    isLoading:boolean
    isSelfClosing?:boolean
}
interface ModalState {
    modals:Modal[]
}
interface DialogSubmitProps {
    func: () => Promise<void>,
    successText?: string
}

export const dialogSubmit = createAsyncThunk(
    'dialogSubmit',
    async (props: DialogSubmitProps, {dispatch,}) => {
        dispatch(startLoading());
        const isSuccess = await handleSuccessAndError(async () => {
            await props.func();
        }, props.successText);
        dispatch(closeModal())
        return isSuccess;
    }
)
// Define the initial state using that type
const initialState: ModalState = {
    modals:[]
}
const showModalCustom=(modals:Modal[],modal:React.ReactNode,isSelfClosing:boolean)=>{

    if (modals[0]?.isSelfClosing){
        modals.shift()
    }

    modals.push({
        component:modal,
        isLoading: false,
        isSelfClosing
    })
}
export const modalSlice = createSlice({
    name: 'modal',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        showModal: (state, action:PayloadAction<React.ReactNode>) => {
            showModalCustom(state.modals,action.payload,false)
        },
        showModalSelfClosing: (state, action:PayloadAction<React.ReactNode>) => {
            showModalCustom(state.modals,action.payload,true)
        },
        closeModal: (state) => {
            state.modals.shift()
        },
        startLoading: (state) => {
            const modal=state.modals[state.modals.length-1]
            if (!modal) return

            modal.isLoading = true
        },
    },
})

export const { closeModal,showModal,startLoading,showModalSelfClosing } = modalSlice.actions

const modalState = (state: RootState) => state.modal

export const selectedModal = createDraftSafeSelector(
    modalState,
    (state) => state.modals[state.modals.length-1]
)

export const isOpenSelector = createDraftSafeSelector(
    selectedModal,
    (state) => !!state.component
)
export const isLoadingSelector = createDraftSafeSelector(
    selectedModal,
    (state) => state.isLoading
)

export default modalSlice.reducer