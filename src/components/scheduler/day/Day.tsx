import { useEffect, useRef, useState } from "react";

import { CreateTaskModal } from "../task/modals/CreateTaskModal";
import { CurrentDayDate } from "../../../helpers/helpers";
import { Task } from "../task/Task";
import { normalDayHours } from "../../../helpers/dayHours";

interface DayProps {
    day: CurrentDayDate;
}

export const Day = (props: DayProps) => {
    const { day } = props;

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedStartTime, setSelectedStartTime] = useState<string>('');

    const [modalXY, setModalXY] = useState({x: '0', y: '0'});

    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isModalOpen && modalRef.current) {
            const modalWidth = modalRef.current.offsetWidth;

            setModalXY(prevPosition => ({
                x: (Number(prevPosition.x) - modalWidth).toString(),
                y: prevPosition.y,
            }))
        }

    }, [isModalOpen])
    
    const onTimeRangeClicked = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, startTime: string) => {

        setSelectedStartTime(startTime);

        const target = event.target as HTMLElement;
        const targetRect = target.getBoundingClientRect();
        const offSetPadding = 10;

        setModalXY({
            x: (event.clientX - (event.clientX - (targetRect.left - offSetPadding))).toString(),
            y: (event.clientY).toString()
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
                        const endTimeAmOrPM = Number(dayHour.hour) + 1 > 11 && dayHour.amOrPM === 'am' ? 'pm' : 'am';

                        const renderTimeSlot = (minute: string) => {
                            const startTime = `${dayHour.hour}${minute} ${dayHour.amOrPM}`;
                            const endTime = `${hourFromStartTime} ${endTimeAmOrPM}`;

                            return (
                                <div onClick={(e) => onTimeRangeClicked(e, startTime)} className='relative h-full'>
                                    { selectedStartTime === startTime && (
                                        <div className="absolute w-full top-0">
                                            <Task startTime={startTime} endTime={endTime} />
                                        </div>
                                    )}
                                </div>
                            )
                        };

                        return (
                            <div key={"day-" + dayHour.label} 
                                className={`${lastElement ? 'border-b' : "h-12"} ${day.isCurrentDay ? 'bg-green-100 border-green-200' : "border-gray-100"} border-t border-r`}
                            >
                                <div className="relative flex flex-col h-full">
                                    {renderTimeSlot('')}
                                    {renderTimeSlot(':15')}
                                    {renderTimeSlot(':30')}
                                    {renderTimeSlot(':45')}
                                </div>
                            </div>
                        );
                    })
                }
                {isModalOpen && (
                    <CreateTaskModal forwardedRef={modalRef} closeModal={closeModal} left={modalXY.x} top={modalXY.y} />
                )}
            </div>
        </>
    )
}