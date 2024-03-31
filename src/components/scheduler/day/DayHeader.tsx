interface DayProps {
    day: string
    dayOfMonth: string
}

export const DayHeader = (props: DayProps) => {
    const { day, dayOfMonth } = props;

    return (
        <div className="w-full">
            <h3 className="text-center text-sm text-gray-400">{day}</h3>
            <h2 className="text-2xl text-center">{dayOfMonth}</h2>
        </div>
    )
}