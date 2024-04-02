import { normalDayHours } from "../../../helpers/dayHours";

export const DayHourLabels = () => {
    return (
        <>
            {
                normalDayHours.map((dayHour, index) => {
                    const lastElement = index === normalDayHours.length - 1;

                    return (
                        <div key={dayHour.label} className={`${lastElement ? "" : 'h-12 border-r border-gray-100'} relative pr-2 w-16 text-xs text-right text-gray-400`}>
                            <span className={`${lastElement ? 'absolute w-9 right-2' : 'relative'} -top-2`}>{dayHour.label}</span>
                        </div>
                    )
                })
            }
        </>

  )
}