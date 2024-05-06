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
                        <div className="flex items-center">
                            <h2 className="font-semibold text-2xl mb-2">Total Focus Time</h2>
                            <span>
                                <p className="mx-2">Week</p>
                                <Button onClick={toggleWeek}>
                                    {focusRanges.showWeek ? (
                                        <IconEyeOpen />
                                    ): (
                                        <IconEyeClosed />
                                    )}
                                </Button>
                            </span>
                            <label className="mx-2">Month<input className="ml-2 align-middle" type="checkbox" /></label>
                            <label className="mx-2">Year<input className="ml-2 align-middle" type="checkbox" /></label>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </>
    )
}