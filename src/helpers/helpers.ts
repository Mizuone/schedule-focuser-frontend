export const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export interface CurrentDayDate {
    date: Date;
    dayOfWeek: string;
    dayOfMonth: string;
    isCurrentDay: boolean;
}

export const getCurrentWeekDates = (): CurrentDayDate[] => {
    const currentDate: Date = new Date();
    const currentDay: number = currentDate.getDay();
    
    return daysOfWeek.reduce((acc: CurrentDayDate[], dayOfWeek: string, index: number) => {
        const date = new Date(currentDate);
        const dayDiff = index - currentDay;

        if (dayDiff !== 0) {
            date.setDate(currentDate.getDate() + dayDiff);
        }

        acc.push({
            date,
            dayOfWeek,
            dayOfMonth: date.getDate().toString(),
            isCurrentDay: dayDiff === 0
        });

        return acc;
    }, []);
}