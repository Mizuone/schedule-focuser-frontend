import { getComputedStyleValue, hexToRGB } from "../../../helpers/helpers";
import { tertiaryCSSVar, tertiaryColorHex } from "../../../theme/Colors";

import { BarDetails } from "../../reuseable/interfaces";
import { Card } from "../../reuseable/Card";
import { ProgressBar } from "../../reuseable/ProgressBar";
import { goals } from "../../../helpers/data/fakeData";

export const Goals = () => {
    const goalBarRGB = hexToRGB(getComputedStyleValue(tertiaryCSSVar));

    return (
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
                                        barClasses="text-sm"
                                        containerClasses="h-6"
                                        barColorRGB={goalBarRGB}
                                        barColorHex={tertiaryColorHex}
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
    )
}