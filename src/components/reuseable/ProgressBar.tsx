import { useEffect, useState } from "react";

import { BarDetails } from "./interfaces";
import { RGBColor } from "../../theme/Colors";

interface ProgressBarProps {
    barDetails: BarDetails; 
    label?: string;
    labelClasses?: string;
    containerClasses?: string;
    barClasses?: string;
    barColorRGB?: RGBColor;
}

export const ProgressBar = (props: ProgressBarProps) => {
    const { label, labelClasses, containerClasses = '', barClasses = '', barDetails } = props;
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
            {label && (<h3 className={labelClasses}>{label}</h3> )}
            <div className={`${containerClasses} flex w-full m-1 rounded border shadow text-nowrap text-center`}>
                <div style={{ width: barWidth + '%' }}
                     className={`${barClasses} ${goalDifferance > 0 ? 'rounded-l-xl' : ""} flex items-center rounded justify-center progress-transition text-nowrap text-center`}
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