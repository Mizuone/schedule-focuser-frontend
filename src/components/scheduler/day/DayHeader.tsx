interface DayProps {
    day: string;
    dayOfMonth: string;
    currentDay: boolean;
}

export const DayHeader = (props: DayProps) => {
    const { day, dayOfMonth, currentDay } = props;

    return (
        <div className="w-full">
            <h3 className={`${currentDay ? 'text-green-600' : 'text-gray-400'} text-center text-sm`}>{day}</h3>
            <h2 className={`${currentDay ? 'text-green-600' : ""} text-2xl text-center`}>{dayOfMonth}</h2>
        </div>
    )
}