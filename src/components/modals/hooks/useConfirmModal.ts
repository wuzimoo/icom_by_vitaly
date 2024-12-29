import {dialogSubmit} from "@/components/modals/store/modal.store";
import {useAppDispatch} from "@/store/store";

const useConfirmModal = (
    successfulText: string,
    handleConfirmClickFunc?: () => Promise<void>,
    handleCancelClickFunc?: () => Promise<void>
) => {
    const dispatch = useAppDispatch();

    const handleConfirmClick = async () => {
        await dispatch(dialogSubmit({
            func: async () => await handleConfirmClickFunc?.(),
            successText: successfulText ?? ""
        }))
    };

    const handleCancelClick = async () => {
        await dispatch(dialogSubmit({
            func: async () => await handleCancelClickFunc?.(),
        }))
    };

    return {handleConfirmClick, handleCancelClick}
};

export default useConfirmModal;