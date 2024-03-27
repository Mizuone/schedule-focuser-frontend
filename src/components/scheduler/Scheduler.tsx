import { Day } from "./day/Day"

export const Scheduler = () => {
    return (
        <>
            <div className="max-h-full h-screen border-2 border-black">
                <div className="">

                </div>
                <div className="grid grid-cols-7">
                    <Day day="Sun" dayOfMonth="24"/>
                    <Day day="Mon" dayOfMonth="25"/>
                    <Day day="Tue" dayOfMonth="26"/>
                    <Day day="Wed" dayOfMonth="27"/>
                    <Day day="Thu" dayOfMonth="28"/>
                    <Day day="Fri" dayOfMonth="29"/>
                    <Day day="Sat" dayOfMonth="30"/>
                </div>
            </div>
        </>
    )
}