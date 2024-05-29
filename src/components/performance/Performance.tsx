import { Challenges } from "./subcomponents/Challenges"
import { Masteries } from "./subcomponents/Masteries"
import { Pursuits } from "./subcomponents/Pursuits"
import { Statistics } from "./subcomponents/Statistics"

export const Performance = () => {
    return (
        <div className="flex relative h-full">
            <div className="flex w-full h-full flex-col">
                <Pursuits />
                <Statistics />
            </div>
            <div className="flex w-full h-full flex-col">
                <Masteries />
                <Challenges />
            </div>
        </div>
    )
}