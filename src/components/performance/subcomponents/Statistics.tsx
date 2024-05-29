import { primaryColorHex, secondaryColorHex, tertiaryColorHex } from "../../../theme/Colors";

import { Button } from "../../reuseable/Button";
import { IconEyeClosed } from "../../reuseable/Icons/EyeClosed";
import { IconEyeOpen } from "../../reuseable/Icons/EyeOpen";
import { ProgressBar } from "../../reuseable/ProgressBar";
import { useState } from "react";

export const Statistics = () => {
    const [focusRanges, setFocusRanges] = useState({
        showWeek: true,
        showMonth: true,
        showYear: true
    });

    const toggleWeek = () => setFocusRanges({ ...focusRanges, showWeek: !focusRanges.showWeek });
    const toggleMonth = () => setFocusRanges({ ...focusRanges, showMonth: !focusRanges.showMonth });
    const toggleYear = () => setFocusRanges({ ...focusRanges, showYear: !focusRanges.showYear });

    return (
        <div className="h-full tile rounded shadow p-2 m-2">
            <div>
                <div className="flex items-baseline">
                    <h2 className="text-2xl">Total Focus Time - </h2>
                    <div className="flex">
                        <span className="mx-2 text-xl">Week</span>
                        <Button onClick={toggleWeek}>
                            {focusRanges.showWeek ? (<IconEyeOpen styles="icon-active icon-sm" />) : (<IconEyeClosed styles="icon-faded icon-sm" />)}
                        </Button>
                    </div>
                    <div className="flex">
                        <span className="mx-2 text-xl">Month</span>
                        <Button onClick={toggleMonth}>
                            {focusRanges.showMonth ? (<IconEyeOpen styles="icon-active icon-sm" />) : (<IconEyeClosed styles="icon-faded icon-sm" />)}
                        </Button>
                    </div>
                    <div className="flex">
                        <span className="mx-2 text-xl">Year</span>
                        <Button onClick={toggleYear}>
                            {focusRanges.showYear ? (<IconEyeOpen styles="icon-active icon-sm" />) : (<IconEyeClosed styles="icon-faded icon-sm" />)}
                        </Button>
                    </div>
                </div>
                <hr className="my-1" />
                <ul>
                    {focusRanges.showWeek && (
                        <ProgressBar
                            label="Week"
                            barDetails={{ barValue: 50, barInnerText: `43 hours`, goalValue: 0, goalInnerText: 'of 60 hours' }}
                            containerClasses="h-8"
                            barColorHex={tertiaryColorHex}
                        />
                    )}
                    {focusRanges.showMonth && (
                        <ProgressBar
                            label="Month"
                            barDetails={{ barValue: 140, barInnerText: `140 hours`, goalValue: 200, goalInnerText: 'of 200 hours' }}
                            containerClasses="h-8"
                            barColorHex={secondaryColorHex}
                        />
                    )}
                    {focusRanges.showYear && (
                        <ProgressBar
                            label="Year"
                            barDetails={{ barValue: 400, barInnerText: `725 hours`, goalValue: 900, goalInnerText: 'of 900 hours' }}
                            containerClasses="h-8"
                            barColorHex={primaryColorHex}
                        />
                    )}
                </ul>
            </div>
            <hr className="my-2" />
            <div className="flex w-full">
                <div className="w-full border-r border-gray-200">
                    <h2 className="text-xl text-center">Most Active</h2>
                    <div className="flex justify-center items-center my-2">
                        <h3>Day of Week -</h3>
                        <p className="p-1 border text-lg text-center border-gray-200 bg-gray-100 ml-2 rounded w-32">Wednesday</p>
                    </div>
                    <div className="flex justify-center items-center my-2">
                        <h3>Time of Day -</h3>
                        <p className="p-1 border text-lg text-center border-gray-200 bg-gray-100 ml-2 rounded w-32">10AM - 3PM</p>
                    </div>
                    <div className="flex justify-center items-center my-2">
                        <h3>Month -</h3>
                        <p className="p-1 border text-lg text-center border-gray-200 bg-gray-100 ml-2 rounded w-32">May</p>
                    </div>
                </div>
                <div className="w-full">

                </div>
            </div>
        </div>
    )
}