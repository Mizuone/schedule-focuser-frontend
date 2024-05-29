import { useEffect, useState } from "react";

import { BarDetails } from "./interfaces";
import { RGBColor } from "../../theme/Colors";

interface ProgressBarProps {
    barDetails: BarDetails; 
    barColorHex: string;
    barColorRGB?: RGBColor;
    label?: string;
    labelClasses?: string;
    containerClasses?: string;
    barClasses?: string;
}

export const ProgressBar = (props: ProgressBarProps) => {
    const { label, labelClasses, containerClasses = '', barClasses = '', barColorRGB, barColorHex, barDetails } = props;
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
            <div style={{ borderColor: goalDifferance > 0 ? 'border-gray-300' : barColorHex }}
                 className={`${containerClasses} flex w-full m-1 rounded-xl border text-nowrap text-center italic`}
            >
                <div style={{ width: barWidth + '%', 
                    backgroundColor: goalDifferance > 0 && barColorRGB ? `rgba(${barColorRGB.r}, ${barColorRGB.g}, ${barColorRGB.b}, ${barWidth / 100})` : barColorHex }}
                    className={`${barClasses} ${goalDifferance > 0 ? 'rounded-l-xl' : "rounded-x"} flex items-center justify-center progress-transition text-nowrap text-center`}
                >
                    <span>{barInnerText}&nbsp;</span>
                    { goalDifferance > 0 && (
                        <span>{goalInnerText}</span>
                    )}
                </div>
                <div style={{ width: goalDifferance + '%', backgroundColor: '#e1e1e159' }} className={`${goalDifferance > 0 ? 'rounded-r-xl' : ""}`}></div>
            </div>
        </div>
    )
}