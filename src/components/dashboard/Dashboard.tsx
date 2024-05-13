import { goals, masteries } from "../../helpers/data/fakeData";

import { BarDetails } from "../reuseable/interfaces";
import { Button } from "../reuseable/Button";
import { Card } from "../reuseable/Card";
import { IconEyeClosed } from "../reuseable/Icons/EyeClosed";
import { IconEyeOpen } from "../reuseable/Icons/EyeOpen";
import { ProgressBar } from "../reuseable/ProgressBar";
import { useState } from "react";

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
                    <Card cardTitle="Goals">
                        {goals.length ? (
                            <ul className="w-full p-2">
                                {
                                    goals.map((goal, index) => {
                                        const { name, currentAmount, goalAmount } = goal;
                                        const details: BarDetails = {
                                            barValue: currentAmount,
                                            barInnerText: `${currentAmount} hours of`,
                                            goalValue: goalAmount,
                                            goalInnerText: `${goalAmount}`
                                        };

                                        return (
                                            <li key={`goal-${name}-${index}`} className="flex justify-center items-center w-full">
                                                <ProgressBar
                                                    label={name}
                                                    labelClasses="text-base"
                                                    barDetails={details}
                                                    barClasses="bg-gray-300 text-sm"
                                                    containerClasses="border-gray-300 h-6 rounded-xl"
                                                />
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        ) : (
                            <div className="flex h-full w-full justify-center items-center bg-gray-50">
                                    <p className="italic text-gray-500 text-center">No Active Goals</p>
                            </div>
                        )}
                    </Card>
                    <Card cardTitle="Masteries">
                        {masteries.length ? (
                            <ul className="w-full p-2">
                                {
                                    masteries.map((mastery, index) => {
                                        const { title, currentAmount, masteryLevel, requiredAmount } = mastery;
                                        const details: BarDetails = {
                                            barValue: currentAmount,
                                            barInnerText: `${requiredAmount - currentAmount} hours until next level`,
                                            goalValue: requiredAmount,
                                        };

                                        return (
                                            <li key={'mastery-' + index} className="flex justify-center items-center w-full">
                                                <h3 className="w-56 mr-4">{title}</h3>
                                                <p className="w-24 text-base">Lvl. {masteryLevel}</p>
                                                <ProgressBar
                                                    barDetails={details}
                                                    barClasses="bg-gray-300 text-sm"
                                                    containerClasses="border-gray-300 h-8 rounded-xl"
                                                />
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        ) : (
                            <div className="flex h-full w-full justify-center items-center bg-gray-50">
                                <p className="italic text-gray-500 text-center">No Active Masteries</p>
                            </div>
                        )}
                    </Card>
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
                                    barClasses="bg-green-100"
                                    containerClasses="border-green-200 h-8"
                                />
                            )}
                            {focusRanges.showMonth && (
                                <ProgressBar
                                    label="Month"
                                    barDetails={{ barValue: 140, barInnerText: `140 hours`, goalValue: 0, goalInnerText: 'of 200 hours' }}
                                    barClasses="bg-green-200"
                                    containerClasses="border-green-300 h-8"
                                />
                            )}
                            {focusRanges.showYear && (
                                <ProgressBar
                                    label="Year"
                                    barDetails={{ barValue: 400, barInnerText: `400 hours`, goalValue: 0, goalInnerText: 'of 560 hours' }}
                                    barClasses="bg-green-300"
                                    containerClasses="border-green-400 h-8"
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