import ConfigurationButtonSection
    , {
    ConfigurationButtonSectionItem
} from "@/app/products/[productId]/_components/ConfigurationSection/ConfigurationButtonSection";

interface ConfigurationSectionProps {
    currencies: ConfigurationButtonSectionItem[];
    values: ConfigurationButtonSectionItem[];
    selectedCurrency: string;
    selectedNominal: string;
    onCurrencySelect: (currency: string) => void;
    onValueSelect: (value: string) => void;
}

const ConfigurationSection: React.FC<ConfigurationSectionProps> = ({ currencies, values,selectedNominal, selectedCurrency, onCurrencySelect, onValueSelect }) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">Конфигурация</h2>
            <ConfigurationButtonSection title="Выберите валюту" items={currencies} selectedCurrency={selectedCurrency} onCurrencySelect={onCurrencySelect}/>
            <ConfigurationButtonSection title="Выберите номинал" items={values} selectedCurrency={selectedNominal} onCurrencySelect={onValueSelect}/>
        </div>
    );
};

export default ConfigurationSection;
