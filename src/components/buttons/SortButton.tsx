import React, {useState} from 'react';
import {ChevronDownIcon, ChevronUpIcon} from "@heroicons/react/16/solid";
import BaseButton from "@/components/buttons/baseButton";

const SortButton = () => {
    const [isAscending, setIsAscending] = useState<boolean | null>(null);

    const toggleSortOrder = () => {
        const result = isAscending == false  ? null : !isAscending;
        setIsAscending(result);
    };

    return (
        <BaseButton
            onClick={toggleSortOrder}
            className=" space-x-1"
        >
            <span>По дате</span>
            <div>
                {isAscending != false && <ChevronUpIcon className="size-3 text-gray-500" />}
                {isAscending != true && <ChevronDownIcon className="size-3 text-gray-500" />}
            </div>
        </BaseButton>
    );
};

export default SortButton;
