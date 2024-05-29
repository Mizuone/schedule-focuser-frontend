import { Masteries } from "../performance/subcomponents/Masteries";
import { Pursuits } from "../performance/subcomponents/Pursuits";
import { Schedule } from "./subcomponents/Schedule";
import { Statistics } from "../performance/subcomponents/Statistics";

export const Dashboard = () => {
    
    return (
        <>
            <div className="flex relative h-full">
                <div className="w-full tile rounded shadow p-2 m-2">
                    <Schedule />
                </div>
                <div className="flex w-full h-full flex-col">
                    <Pursuits />
                    <Masteries />
                    <Statistics />
                </div>
            </div>
        </>
    )
}