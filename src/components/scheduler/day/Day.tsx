import { normalDayHours } from "../../../helpers/dayHours";

export const Day = () => {    
    return (
        <>
            <div className="w-full">
                {
                    normalDayHours.map((dayHour, index) => {
                        return (
                            <div key={"day-" + dayHour.label} className={`${index === normalDayHours.length - 1 ? 'border-b' : "h-12"} border-t border-r border-gray-100`}>
                                <div className="flex flex-col h-full">
                                    <div className={`${dayHour.hour}:15 ${dayHour.amOrPM} h-full day-hour`}></div>
                                    <div className={`${dayHour.hour}:30 ${dayHour.amOrPM} h-full day-hour`}></div>
                                    <div className={`${dayHour.hour}:45 ${dayHour.amOrPM} h-full day-hour`}></div>
                                    <div className={`${dayHour.hour}:00 ${dayHour.amOrPM} h-full day-hour`}></div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </>
    )
}