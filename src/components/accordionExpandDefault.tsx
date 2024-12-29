import React, {ReactNode} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export interface AccordionExpandDefaultProps {
    items: AccordionExpandItemProps[]
}

const AccordionExpandDefault = (props: AccordionExpandDefaultProps) => {
    const {items} = props
    return (
       <>
           {items.map(item => <AccordionExpandItem {...item}/>)}
       </>
    );
};

export default AccordionExpandDefault;

export interface AccordionExpandItemProps {
    title: string
    content: ReactNode
}

export const AccordionExpandItem = (props: AccordionExpandItemProps) => {
    const {title, content} = props
    return (
        <div className="w-full rounded-2xl overflow-hidden">
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    id="panel1-header"
                    className="bg-white rounded-t-lg"
                    sx={{
                        minHeight: '66px', // Фіксована мінімальна висота
                        height: '66px', // Фіксована висота
                        '&.Mui-expanded': {
                            minHeight: '66px', // Тримати висоту при відкритті
                        },
                    }}
                >
                    <div className="text-lg font-semibold px-[60px]">{title}</div>
                </AccordionSummary>
                <AccordionDetails
                    className="bg-[#F6F6F6] text-gray-800 rounded-b-lg py-[30px] px-[40px] text-[16px] font-normal">
                    {content}
                </AccordionDetails>
            </Accordion>
        </div>
    )
}