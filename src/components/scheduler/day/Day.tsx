import { CurrentDayDate } from "../../../helpers/helpers";
import { Task } from "../task/Task";
import { normalDayHours } from "../../../helpers/dayHours";
import { useState } from "react";

interface DayProps {
    day: CurrentDayDate;
}

export const Day = (props: DayProps) => {
    const { day } = props;

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedStartTime, setSelectedStartTime] = useState<string>('');
    const [selectedEndTime, setSelectedEndTime] = useState<string>('');

    const [modalXY, setModalXY] = useState({x: '0', y: '0'});
    
    const onTimeRangeClicked = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, startTime: string, endTime: string) => {
        setSelectedStartTime(startTime);
        setSelectedEndTime(endTime);

        setModalXY({
            x: event.clientX.toString(),
            y: event.clientY.toString()
        });

        openModal();
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);    


    return (
        <>
            <div className="relative w-full">
                {
                    normalDayHours.map((dayHour, index) => {
                        const lastElement = index === normalDayHours.length - 1;
                        const hourFromStartTime = (Number(dayHour.hour) + 1).toString();
                        let endTimeAmOrPM = Number(dayHour.hour) + 1 > 11 && dayHour.amOrPM === 'am' ? 'pm' : 'am';

                        const renderTimeSlot = (minute: string) => {
                            const startTime = `${dayHour.hour}:${minute} ${dayHour.amOrPM}`;
                            const endTime = `${hourFromStartTime} ${endTimeAmOrPM}`;

                            return (
                                <div onClick={(e) => onTimeRangeClicked(e, startTime, endTime)} className='h-full'></div>
                            )
                        };

                        return (
                            <div key={"day-" + dayHour.label} 
                                className={`${lastElement ? 'border-b' : "h-12"} ${day.isCurrentDay ? 'bg-green-100 border-green-200' : "border-gray-100"} border-t border-r`}
                            >
                                <div className="relative flex flex-col h-full">
                                    {renderTimeSlot('')}
                                    {renderTimeSlot('15')}
                                    {renderTimeSlot('30')}
                                    {renderTimeSlot('45')}
                                </div>
                            </div>
                        );
                    })
                }

                {selectedStartTime !== '' && selectedEndTime !== '' && (
                    <div className="absolute w-full top-0">
                        <Task />
                    </div>
                )}
                {isModalOpen && (
                    <div className="fixed inset-0 w-full top-0 bottom-0">
                        <div className="absolute bg-white w-64 p-4 shadow-lg" style={{left: modalXY.x + 'px', top: modalXY.y + 'px'}}>
                            <p>This is the modal content</p>
                            <button onClick={closeModal} className="bg-red-500 text-white px-4 py-2 rounded mt-2">Close</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}