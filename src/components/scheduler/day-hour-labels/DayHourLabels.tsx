import { normalDayHours } from "../../../helpers/dayHours";

export const DayHourLabels = () => {
    return (
        <>
            {
                normalDayHours.map((dayHour, index) => {
                    return (
                        <div className={`${index === normalDayHours.length - 1 ? "" : 'h-12 border-r border-gray-100'} relative pr-2 w-16 text-xs text-right text-gray-400`}>
                            <span className="relative -top-2">{dayHour.label}</span>
                        </div>
                    )
                })
            }
        </>

  )
}