import { Day } from "./day/Day"

export const Scheduler = () => {
    return (
        <>
            <div className="flex flex-col m-1">
                <div className="scheduler-header flex">
                    <div className="spacer m-4"></div>
                    <Day day="Sun" dayOfMonth="24"/>
                    <Day day="Mon" dayOfMonth="25"/>
                    <Day day="Tue" dayOfMonth="26"/>
                    <Day day="Wed" dayOfMonth="27"/>
                    <Day day="Thu" dayOfMonth="28"/>
                    <Day day="Fri" dayOfMonth="29"/>
                    <Day day="Sat" dayOfMonth="30"/>
                </div>
                <div className="scheduler-content flex flex-row h-full overflow-auto">
                    <div className="flex flex-col">
                        <div>8 AM</div>
                        <div>9 AM</div>
                        <div>9 AM</div>
                        <div>9 AM</div>
                        <div>9 AM</div>
                        <div>9 AM</div>
                        <div>9 AM</div>
                        <div>9 AM</div>
                        <div>9 AM</div>
                        <div>9 AM</div>
                        <div>9 AM</div>
                        <div>9 AM</div>
                        <div>9 AM</div>
                        <div>9 AM</div>
                        <div>9 AM</div>
                        <div>9 AM</div>
                        <div>9 AM</div>
                        <div>9 AM</div>
                        <div>9 AM</div>
                        <div>9 AM</div>
                        <div>9 AM</div>
                    </div>
                    <div className="w-full">1</div>
                    <div className="w-full">1</div>
                    <div className="w-full">1</div>
                    <div className="w-full">1</div>
                    <div className="w-full">1</div>
                    <div className="w-full">1</div>
                    <div className="w-full">1</div>
                </div>
            </div>
        </>
    )
}