import { useEffect, useState } from "react";

import { BarDetails } from "./interfaces";

interface ProgressBarProps {
    barDetails: BarDetails; 
    label?: string;
    containerStyles?: string;
    barStyles?: string;
}

export const ProgressBar = (props: ProgressBarProps) => {
    const { label, containerStyles = '', barStyles = '', barDetails } = props;
    const { barValue, goalValue, barInnerText = "", goalInnerText = "" } = barDetails;

    const [barWidth, setBarWidth] = useState<number>(0);

    let progressMax = barValue; 
    let goalDifferance = 0;

    if (goalValue > barValue) {
        const percentage = barValue / goalValue;
        progressMax = percentage * 100;
        goalDifferance = (1 - percentage) * 100;
    } else {
        progressMax = 100;
    }

    useEffect(() => {
        requestAnimationFrame(() => {
            setBarWidth(progressMax);
        });
    }, [barWidth]);

    return (
        <div className="w-full">
            {label && ( <h3 className="text-xl">{label}</h3> )}
            <div className={`${containerStyles} flex w-full h-8 m-1 rounded border border-gray-200 shadow text-nowrap text-center text-base`}>
                <div className={`${barStyles} ${goalDifferance > 0 ? 'rounded-l-xl' : ""} flex items-center rounded justify-center progress-transition text-nowrap text-center text-base`}
                    style={{ width: barWidth + '%' }}
                >
                    <span>{barInnerText}&nbsp;</span>
                    { goalDifferance > 0 && (
                        <span>{goalInnerText}</span>
                    )}
                </div>
                <div style={{ width: goalDifferance + '%', backgroundColor: '#9e9e9e14' }} className={`${goalDifferance > 0 ? 'rounded-r-xl' : ""}`}></div>
            </div>
        </div>
    )
}