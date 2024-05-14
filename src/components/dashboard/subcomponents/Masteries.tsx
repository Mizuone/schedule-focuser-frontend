import { getComputedStyleValue, hexToRGB } from "../../../helpers/helpers";
import { secondaryCSSVar, secondaryColorHex } from "../../../theme/Colors";

import { BarDetails } from "../../reuseable/interfaces";
import { Card } from "../../reuseable/Card";
import { ProgressBar } from "../../reuseable/ProgressBar";
import { masteries } from "../../../helpers/data/fakeData";

export const Masteries = () => {
    const masteriesBarRGB = hexToRGB(getComputedStyleValue(secondaryCSSVar));

    return (
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
                                        barClasses="text-sm"
                                        containerClasses="border-gray-300 h-8"
                                        barColorRGB={masteriesBarRGB}
                                        barColorHex={secondaryColorHex}
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
    )
}