import { Day } from "./day/Day"
import { DayHeader } from "./day/DayHeader"
import { HourLabel } from "./hour-label/HourLabel"

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const Scheduler = () => {
    
    function getCurrentWeekDates() {        
        /*const days = new Array();
        for (var i = 0; i < 7; i++){
            days[i] = new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay() + i);
        }
    
        return days;
        */
    }

    return (
        <>
            <div className="content flex-col">
                <div className="flex tile rounded shadow flex-col m-1 mt-4">
                    <div className="scheduler-header flex">
                        <div className="spacer m-4"></div>
                        {
                            daysOfWeek.map((dayOfWeek) => {
                                 const currentDate = new Date();

                                 if (currentDate.getDay() > 0) {
                                    // One thought is to always output 7 Headers, set the minus value to the current day and increment from there
                                 }

                                return <DayHeader day={dayOfWeek} dayOfMonth=""/>;
                            })
                        }
                        <DayHeader day="Sun" dayOfMonth="24"/>
                        <DayHeader day="Mon" dayOfMonth="25"/>
                        <DayHeader day="Tue" dayOfMonth="26"/>
                        <DayHeader day="Wed" dayOfMonth="27"/>
                        <DayHeader day="Thu" dayOfMonth="28"/>
                        <DayHeader day="Fri" dayOfMonth="29"/>
                        <DayHeader day="Sat" dayOfMonth="30"/>
                    </div>
                    <div className="scheduler-content flex flex-row h-full overflow-visible">
                        <div className="flex flex-col">
                            <HourLabel hour="5 AM" />
                            <HourLabel hour="6 AM" />
                            <HourLabel hour="7 AM" />
                            <HourLabel hour="8 AM" />
                            <HourLabel hour="9 AM" />
                            <HourLabel hour="10 AM" />
                            <HourLabel hour="11 AM" />
                            <HourLabel hour="12 PM" />
                            <HourLabel hour="1 PM" />
                            <HourLabel hour="2 PM" />
                            <HourLabel hour="3 PM" />
                            <HourLabel hour="4 PM" />
                            <HourLabel hour="5 PM" />
                            <HourLabel hour="6 PM" />
                            <HourLabel hour="7 PM" />
                            <HourLabel hour="8 PM" />
                            <HourLabel hour="9 PM" />
                            <HourLabel hour="10 PM" />
                            <HourLabel hour="11 PM" endLabel={true} />
                        </div>
                        <div className="flex w-full max-h-screen overflow-auto">
                            <Day />
                            <Day />
                            <Day />
                            <Day />
                            <Day />
                            <Day />
                            <Day />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}