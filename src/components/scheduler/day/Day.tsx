export const Day = () => {
    const dayContainer = [];

    for (let i = 0; i < 18; i++) {
        if (i + 1 >= 18) {
            dayContainer.push(<div key={"day" + i} className="h-12 border-t border-b border-r border-gray-100"></div>)
        } else {
            dayContainer.push(<div key={"day" + i} className="h-12 border-t border-r border-gray-100"></div>)
        }
    }
    
    return (
        <>
            <div className="w-full">
                {dayContainer}
            </div>
        </>
    )
}