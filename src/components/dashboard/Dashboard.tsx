import { BarDetails } from "../reuseable/interfaces";
import { Button } from "../reuseable/Button";
import { IconEyeClosed } from "../reuseable/Icons/EyeClosed";
import { IconEyeOpen } from "../reuseable/Icons/EyeOpen";
import { ProgressBar } from "../reuseable/ProgressBar";
import { useState } from "react";

interface Goal {
    name: string;
    currentAmount: number;
    goalAmount: number;
    attributingMastery: string;
}

const goals: Goal[] = [
    {
        name: 'Dev Time',
        currentAmount: 20,
        goalAmount: 60,
        attributingMastery: 'Software Developer II'
    },
];
const emptyGoals: Goal[] = [];


interface Mastery {
    title: string;
    currentAmount: number;
    nextMasteryLevel: number;
    requiredAmount: number;
}

const masteries: Mastery[] = [
    {
        title: 'Software Developer 2',
        currentAmount: 400,
        nextMasteryLevel: 3,
        requiredAmount: 560 
    },
];
const emptyMasteries: Mastery[] = [];

export const Dashboard = () => {
    const [focusRanges, setFocusRanges] = useState({
        showWeek: true,
        showMonth: true,
        showYear: true
    });

    const toggleWeek = () => setFocusRanges({ ...focusRanges, showWeek: !focusRanges.showWeek });
    const toggleMonth = () => setFocusRanges({ ...focusRanges, showMonth: !focusRanges.showMonth });
    const toggleYear = () => setFocusRanges({ ...focusRanges, showYear: !focusRanges.showYear });

    return (
        <>
            <div className="flex relative h-full">
                <div className="w-full tile rounded shadow p-2 m-2">
                    <h2 className="text-2xl">Schedule</h2>
                    <hr />
                </div>
                <div className="flex w-full h-full flex-col">
                    <div className="flex flex-col h-full tile rounded shadow p-2 m-2">
                        <h2 className="text-2xl">Goals</h2>
                        <hr />
                        <div className="flex h-full justify-center items-center">
                            <p className="italic text-gray-500 text-center">No Active Goals</p>
                        </div>
                        <h2 className="text-2xl">Masteries</h2>
                        <hr />
                        <div className="flex h-full flex-col">
                            {masteries.length ? (
                                <ul>
                                    {
                                        masteries.map((mastery, index) => {
                                            const { title, currentAmount, nextMasteryLevel, requiredAmount } = mastery;
                                            const details: BarDetails = {
                                                barValue: currentAmount,
                                                barInnerText: title,
                                                goalValue: requiredAmount,
                                                goalInnerText: ` - Level ${nextMasteryLevel} (${requiredAmount - currentAmount} hours needed)`
                                            };

                                            return (
                                                <li key={'mastery-' + index}>
                                                    <ProgressBar
                                                        barDetails={details}
                                                        barStyles="bg-gray-200 text-base"
                                                        containerStyles="h-6 border-gray-500"
                                                    />
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            ) : (
                                <div className="flex h-full justify-center items-center">
                                    <p className="italic text-gray-500 text-center">No Active Masteries</p>
                                </div>
                            )}
                        </div>
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
                            {focusRanges.showWeek && (
                                <ProgressBar
                                    label="Week"
                                    barDetails={{barValue: 50, barInnerText: `40 hours`, goalValue: 0, goalInnerText: 'of 60 hours'}} 
                                    barStyles="bg-green-100"
                                    containerStyles="border-green-200"
                                />
                            )}
                            {focusRanges.showMonth && (
                                <ProgressBar
                                    label="Month"
                                    barDetails={{ barValue: 140, barInnerText: `140 hours`, goalValue: 0, goalInnerText: 'of 200 hours' }}
                                    barStyles="bg-green-200"
                                    containerStyles="border-green-300"
                                />
                            )}
                            {focusRanges.showYear && (
                                <ProgressBar
                                    label="Year"
                                    barDetails={{ barValue: 400, barInnerText: `400 hours`, goalValue: 0, goalInnerText: 'of 560 hours' }}
                                    barStyles="bg-green-300"
                                    containerStyles="border-green-400"
                                />
                            )}
                        </ul>
                        <hr className="my-2" />
                        <h2 className="text-xl">Most Active</h2>
                        <div className="flex items-center my-2">
                            <h3>Week Day -</h3>
                            <p className="p-1 font-bold border border-gray-200 bg-gray-100 ml-2 rounded">Thursday</p>
                        </div>
                        <div className="flex items-center my-2">
                            <h3>Time of Day -</h3>
                            <p className="p-1 font-bold border border-gray-200 bg-gray-100 ml-2 rounded">10AM - 1PM</p>
                        </div>
                        <div className="flex items-center my-2">
                            <h3>Month -</h3>
                            <p className="p-1 font-bold border border-gray-200 bg-gray-100 ml-2 rounded">April</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}