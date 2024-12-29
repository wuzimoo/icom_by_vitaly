import React from 'react';
import classNames from "classnames";

interface ContainerProps {
    className?: string
    children: React.ReactNode
}

const Container = (props:ContainerProps) => {
    const {children, className} = props

    return (
        <div className={classNames("max-w-[1520px] m-auto",className)}>
            {children}
        </div>
    );
};

export default Container;
