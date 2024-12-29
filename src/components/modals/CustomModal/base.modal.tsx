import React from 'react';
import Modals, {ModalsProps} from "@/components/modals/modals";

interface BaseModalProps extends ModalsProps{

}

const BaseModal = (props: BaseModalProps) => {

    return (
        <Modals {...props}/>
    );
};

export default BaseModal;