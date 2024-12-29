import React from 'react';
import {Button} from "@mui/material";

interface BaseButtonProps {
    title?: string
    children?: React.ReactNode
    className?: string
    onClick?: () => void
}

const BaseButton = (props:BaseButtonProps) => {
    const {title, className,children,onClick} = props
    return (
        <Button
            variant="outlined"
            size="small"
            className={className}
            onClick={onClick}
            sx={{
                border: "1.5px solid #CECECE",
                borderRadius: "20px", // Робить кути більш округлими
                color: "#757575", // Колір тексту
                textTransform: "none", // Вимикає великі літери
                fontSize: "14px", // Розмір шрифту, щоб зробити текст більш компактним
                lineHeight: "20px",
                padding: "4px 12px", // Відступи для вертикальної та горизонтальної щільності
                "&:hover": {
                    borderColor: "#CECECE", // Без змін при наведенні
                    backgroundColor: "transparent",
                },
            }}
        >
            {title}
            {children}
        </Button>
    );
};

export default BaseButton;
