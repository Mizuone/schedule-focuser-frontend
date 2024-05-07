import { Button } from "../reuseable/Button";
import { IconEyeClosed } from "../reuseable/Icons/EyeClosed";
import { IconEyeOpen } from "../reuseable/Icons/EyeOpen";
import { useState } from "react";

export const Dashboard = () => {
    const [focusRanges, setFocusRanges] = useState({
        showWeek: false,
        showMonth: false,
        showYear: false
    });

    const toggleWeek = () => setFocusRanges({ ...focusRanges, showWeek: !focusRanges.showWeek });
    const toggleMonth = () => setFocusRanges({ ...focusRanges, showMonth: !focusRanges.showMonth });
    const toggleYear = () => setFocusRanges({ ...focusRanges, showYear: !focusRanges.showYear });

    return (
        <>
            <div className="flex relative h-full">
                <div className="w-full tile rounded shadow p-2 m-2">
                    <div>Scheduler</div>
                </div>
                <div className="flex w-full h-full flex-col">
                    <div className="h-full tile rounded shadow p-2 m-2">
                        Goals
                    </div>
                    <div className="h-full tile rounded shadow p-2 m-2">
                        <div className="flex mb-2 items-baseline">
                            <h2 className="text-2xl">Total Focus Time - </h2>
                            <div className="flex">
                                <span className="mx-2 text-xl align-bottom">Week</span>
                                <Button onClick={toggleWeek}>
                                    {focusRanges.showWeek ? (<IconEyeOpen styles="icon-active icon-sm mt-1" />) : (<IconEyeClosed styles="icon-faded icon-sm mt-1" /> )}
                                </Button>
                            </div>
                            <div className="flex">
                                <span className="mx-2 text-xl">Month</span>
                                <Button onClick={toggleMonth}>
                                    {focusRanges.showMonth ? ( <IconEyeOpen styles="icon-active icon-sm mt-1" /> ) : ( <IconEyeClosed styles="icon-faded icon-sm mt-1" /> )}
                                </Button>
                            </div>
                            <div className="flex">
                                <span className="mx-2 text-xl">Year</span>
                                <Button onClick={toggleYear}>
                                    {focusRanges.showYear ? ( <IconEyeOpen styles="icon-active icon-sm mt-1" /> ) : ( <IconEyeClosed styles="icon-faded icon-sm mt-1" /> )}
                                </Button>
                            </div>
                        </div>
                        <hr />
                        <ul>
                            <li>Week (10-16)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}