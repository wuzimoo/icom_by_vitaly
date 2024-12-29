import React from 'react';

const WhiteRoundContainer = (props: {children: React.ReactNode, className?: string}) => {
    const {children, className} = props
    return (
        <div className={`bg-white rounded-2xl ${className}`}>
            {children}
        </div>
    );
};

export default WhiteRoundContainer;