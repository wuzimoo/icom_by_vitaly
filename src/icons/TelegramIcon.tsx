import React from 'react';

interface TelegramIconProps {
    svg?: React.SVGProps<SVGSVGElement>
    color?: string
}

const TelegramIcon = (props: TelegramIconProps) => {
    const {svg, color = '#707070'} = props
    return (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" {...svg}>
            <rect x="0.5" y="0.5" width="29" height="29" rx="14.5" stroke={color}/>
            <path
                d="M10.9415 16.1856C10.6617 16.1808 10.4235 16.1501 10.1902 16.0878C9.58325 15.9257 8.98587 15.7347 8.3869 15.5484C8.18626 15.486 7.98561 15.4231 7.78655 15.3562C7.59542 15.292 7.46482 15.0735 7.50842 14.8978C7.52873 14.8161 7.57738 14.7493 7.63832 14.69C7.79606 14.5364 7.99086 14.4363 8.19567 14.3554C8.91155 14.0721 9.62922 13.7927 10.3463 13.5121C11.7441 12.9654 13.1421 12.4193 14.5396 11.872C15.2476 11.5949 15.9571 11.3212 16.6617 11.0365C17.8613 10.5516 19.0678 10.0824 20.2734 9.61156C20.4829 9.52975 20.7024 9.48842 20.9309 9.50283C21.3209 9.5274 21.4784 9.76105 21.4975 10.0735C21.5066 10.2213 21.489 10.368 21.4691 10.5144C21.3524 11.3727 21.2051 12.2268 21.0663 13.0819C20.9804 13.6118 20.8974 14.1421 20.8086 14.6716C20.7719 14.89 20.7292 15.108 20.6942 15.3263C20.6533 15.58 20.6112 15.8338 20.5706 16.0877C20.5182 16.4158 20.467 16.7442 20.4052 17.0708C20.3727 17.2426 20.3442 17.4154 20.316 17.5874C20.2742 17.8412 20.2325 18.0951 20.1911 18.349C20.1345 18.696 20.0767 19.0429 20.0145 19.3889C19.9886 19.5333 19.9847 19.6811 19.9351 19.8223C19.8909 19.9481 19.839 20.0695 19.7587 20.1784C19.5795 20.4215 19.3316 20.5231 19.0227 20.4956C18.7628 20.4726 18.521 20.3904 18.2852 20.2897C17.995 20.1659 17.7285 20.0042 17.465 19.8358C16.9226 19.4891 16.3736 19.1519 15.8306 18.8059C15.2355 18.4267 14.6439 18.0427 14.0803 17.6213C14.0154 17.5729 13.9513 17.5233 13.8884 17.4727C13.807 17.4073 13.7398 17.3305 13.6881 17.2415C13.5841 17.0627 13.5829 16.8829 13.6794 16.7015C13.7416 16.5846 13.8355 16.4924 13.9355 16.4048C15.0085 15.4646 16.0725 14.5153 17.1167 13.5462C17.301 13.3753 17.4843 13.2034 17.6665 13.0304C17.8099 12.8943 17.9331 12.7436 18.0192 12.5679C18.0471 12.5109 18.0717 12.4528 18.0747 12.3886C18.0793 12.2879 18.0351 12.2423 17.9301 12.2417C17.8563 12.2413 17.7865 12.261 17.7184 12.2851C17.5132 12.3576 17.3228 12.4585 17.1371 12.5671C16.7573 12.7892 16.3966 13.0384 16.0285 13.2772C14.9568 13.9722 13.8813 14.662 12.8003 15.3439C12.4813 15.5452 12.1579 15.7405 11.844 15.9489C11.6301 16.0907 11.3939 16.1534 11.1409 16.176C11.0622 16.1831 10.9828 16.1836 10.9413 16.1855L10.9415 16.1856Z"
                fill={color}/>
        </svg>
    );
};

export default TelegramIcon;