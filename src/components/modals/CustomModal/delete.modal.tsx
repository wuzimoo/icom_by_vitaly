import React from 'react';
import ConfirmationModal from "@/components/modals/CustomModal/confirmationModal";

interface DeleteModalProps {
    handleDelete: () => Promise<void>
    text: string
    title: string
}

const DeleteModal = (props: DeleteModalProps) => {

    const {text, title, handleDelete} = props

    return (
        <ConfirmationModal
            title={title}
            text=""
            confirm={{
                color: "error",
                title: "Delete",
                handleClick: handleDelete
            }}
            cancel={{
                color: "primary",
            }}
        >
            <div className="text-xl text-center">{text}</div>
        </ConfirmationModal>
    );
};

export default DeleteModal;