import { Day } from "./day/Day"
import { DayHeader } from "./day/DayHeader"
import { DayHourLabels } from "./day-hour-labels/DayHourLabels"
import { getCurrentWeekDates } from "../../helpers/helpers";

export const Scheduler = () => {
    return (
        <>
            <div className="content flex-col">
                <div className="flex tile rounded shadow flex-col m-1 mt-4">
                    <div className="scheduler-header flex">
                        <div className="spacer m-4"></div>
                        {
                            getCurrentWeekDates().map((day, index) => {
                                return <DayHeader key={`${day.dayOfWeek} - ${index}`} day={day.dayOfWeek} dayOfMonth={day.dayOfMonth} currentDay={day.isCurrentDay}/>;
                            })
                        }
                    </div>
                    <div className="scheduler-content flex flex-row h-full overflow-visible">
                        <div className="flex flex-col">
                            <DayHourLabels />
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