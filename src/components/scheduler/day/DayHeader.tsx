interface DayProps {
    day: string;
    dayOfMonth: string;
    currentDay: boolean;
    inlineHeaders?: boolean;
}

export const DayHeader = (props: DayProps) => {
    const { day, dayOfMonth, currentDay, inlineHeaders = false } = props;

    return (
        <div className={`${inlineHeaders ? 'flex justify-center items-center mb-1' : ''} w-full`}>
            { inlineHeaders ? (
                <>
                    <h3 className={`${currentDay ? 'text-primary' : 'text-gray-400'} text-center text-base mr-1`}>{day} -</h3>
                    <h2 className={`${currentDay ? 'text-primary' : ""} text-center text-xl`}>{dayOfMonth}</h2>
                </>
            ) : (
                <>
                    <h3 className={`${currentDay ? 'text-primary' : 'text-gray-400'} text-center text-sm`}>{day}</h3>
                    <h2 className={`${currentDay ? 'text-primary' : ""} text-2xl text-center`}>{dayOfMonth}</h2>
                </>
            )}
        </div>
    )
}