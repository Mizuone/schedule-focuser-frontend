import { Day } from "../../scheduler/day/Day";
import { DayHeader } from "../../scheduler/day/DayHeader";
import { DayHourLabels } from "../../scheduler/day-hour-labels/DayHourLabels";
import { getShortSchedule } from "../../../helpers/helpers";

export const Schedule = () => {
    const shortSchedule = getShortSchedule(); 
    
    return (
        <>
            <div className="flex-col">
                <div className="flex flex-row">
                    <div className="scheduler-header flex w-full">
                        {
                            shortSchedule.map((day, index) => {
                                return <DayHeader 
                                    key={`${day.dayOfWeek} - ${index}`}
                                    day={day.dayOfWeek} dayOfMonth={day.dayOfMonth}
                                    currentDay={day.isCurrentDay}
                                    inlineHeaders={true}
                                />;
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
                            shortSchedule.map((day) => {
                                return <Day key={`${day.dayOfWeek}-${day.dayOfMonth}`} day={day} />
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}