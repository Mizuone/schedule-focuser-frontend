import { Goals } from "./subcomponents/Goals";
import { Masteries } from "./subcomponents/Masteries";
import { Schedule } from "./subcomponents/Schedule";
import { Statistics } from "./subcomponents/Statistics";

export const Dashboard = () => {
    return (
        <>
            <div className="flex relative h-full">
                <div className="w-full tile rounded shadow p-2 m-2">
                    <Schedule />
                </div>
                <div className="flex w-full h-full flex-col">
                    <Goals />
                    <Masteries />
                    <Statistics />
                </div>
            </div>
        </>
    )
}