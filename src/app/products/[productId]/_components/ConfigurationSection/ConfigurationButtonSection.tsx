import React from 'react';
import classNames from "classnames";

export interface ConfigurationButtonSectionItem {
    name: string;
    value: string;
}

interface ConfigurationButtonSectionProps {
    title: string;
    items: ConfigurationButtonSectionItem[];
    selectedCurrency: string;
    onCurrencySelect: (currency: string) => void;
}

const ConfigurationButtonSection = (props: ConfigurationButtonSectionProps) => {
    const {title, items, selectedCurrency, onCurrencySelect} = props;

    return (
        <div className="mt-4">
            <h3 className="text-xl font-light">{title}</h3>
            <div className="flex space-x-2 mt-2 text-base">
                {items.map((currency, index) => (
                    <button
                        key={index}
                        onClick={() => onCurrencySelect(currency.value)}
                        className={classNames("px-4 py-1   rounded-2xl", {
                                "bg-black text-white": currency.value === selectedCurrency,
                                "bg-transparent text-gray-400 border-2 border-gray-400": currency.value !== selectedCurrency
                            }
                        )}
                    >
                        {currency.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ConfigurationButtonSection;
