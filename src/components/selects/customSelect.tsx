"use client";
import {MenuItem, Select} from "@mui/material";
import ArrowDownIcon from "@/icons/ArrowDownIcon";

export default function CustomSelect() {
    return (
        <Select
            defaultValue="Новинки"
            variant="outlined"
            sx={{
                border: "1px solid #CECECE",
                backgroundColor: "transparent",
                borderRadius: "20px",
                fontSize: "14px",
                color: "#333",
                '.MuiSelect-icon': {
                    color: "#757575",
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: "#CECECE",
                },
                '.MuiOutlinedInput-notchedOutline': {
                    border: "none",
                },
                '& .MuiSelect-select': {
                   padding: "4px 8px",
                },
                minWidth: "270px",
            }}
            displayEmpty
            IconComponent={() => <div
                className="size-5 bg-white rounded-full absolute right-[3%] flex items-center justify-center">
                <ArrowDownIcon/>
            </div>}
        >
            <MenuItem value="Новинки">Новинки</MenuItem>
            <MenuItem value="Популярні">Популярні</MenuItem>
            <MenuItem value="Знижки">Знижки</MenuItem>
        </Select>
    );
}
