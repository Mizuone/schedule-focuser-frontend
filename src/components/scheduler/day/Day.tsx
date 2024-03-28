interface DayProps {
    day: string
    dayOfMonth: string
}

export const Day = (props: DayProps) => {
    const { day, dayOfMonth } = props;

    return (
        <div className="w-full">
            <h3 className="text-center">{day}</h3>
            <h2 className="text-xl text-center">{dayOfMonth}</h2>
        </div>
    )
}