import { Day } from "./day/Day"
import { DayHeader } from "./day/DayHeader"
import { DayHourLabels } from "./day-hour-labels/DayHourLabels"
import { getCurrentWeekDates } from "../../helpers/helpers";

export const Scheduler = () => {
    const currentWeekDates = getCurrentWeekDates();

    return (
        <>
            <div className="flex tile pb-6 rounded shadow flex-col">
                <div className="flex flex-row">
                    <div className="w-16 h-12"></div>
                    <div className="scheduler-header flex w-full">
                        {
                            currentWeekDates.map((day, index) => {
                                return <DayHeader key={`${day.dayOfWeek} - ${index}`} day={day.dayOfWeek} dayOfMonth={day.dayOfMonth} currentDay={day.isCurrentDay} />;
                            })
                        }
                    </div>
                </div>
                <div className="flex flex-row overflow-visible">
                    <div className="flex flex-col">
                        <DayHourLabels />
                    </div>
                    <div className="flex w-full scrollbar-styling overflow-auto">
                        {
                            currentWeekDates.map((day) => {
                                return <Day key={`${day.dayOfWeek}-${day.dayOfMonth}`} day={day} />
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}