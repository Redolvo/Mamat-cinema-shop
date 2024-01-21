import { useState } from "react";

//components
import { TheaterOverlay } from "@/components/checkout-ticket";

//icons
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

export default function ChooseDate({ changeDate, changePrice }) {
    const setPrice = (value) => {
        changePrice(value);
    };
    const days = [
        { day: "TUE", date: 16 },
        { day: "WED", date: 17 },
        { day: "THU", date: 18 },
        { day: "FRI", date: 19 },
        { day: "SAT", date: 20 },
    ];

    const [showTheater, setShowTheater] = useState(false);
    const [activeTime, setActiveTime] = useState(null);
    const [activeDay, setActiveDay] = useState(days[0].day);

    const handleTimeClick = (index) => {
        setActiveTime(index === activeTime ? null : index);
    };

    const handleDayClick = (day) => {
        setActiveDay(day === activeDay ? null : day);
    };

    const handleCloseTheater = () => {
        setShowTheater(false);
    };

    const getDayStyles = (day) => {
        return `flex-1 text-center py-2 rounded-lg ${
            day === activeDay
                ? "bg-blues-500 text-white"
                : "bg-greys-500 text-greys-600"
        }`;
    };
    return (
        <div className="mb-10">
            <div className="px-3 mb-3">
                <div
                    className="w-full rounded bg-greys-500 text-blues-500 flex items-center justify-between px-4 py-3 mb-3"
                    onClick={() => setShowTheater(!showTheater)}
                >
                    <div className="flex items-center">
                        <IoLocationOutline />
                        <div className="ml-3 font-medium">Pick Theater</div>
                    </div>
                    <IoIosArrowDown />
                </div>
                <div className="w-full rounded bg-greys-500 flex font-medium text-greys-600">
                    {days.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => handleDayClick(item.day)}
                            className={getDayStyles(item.day)}
                        >
                            <div className="uppercase">{item.day}</div>
                            <div>{item.date}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex items-center overflow-y-hidden overflow-x-scroll scrollbar-none text-sm">
                {["12:00 PM", "03:00 PM", "17:30 PM", "21:00 PM"].map(
                    (time, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                changeDate(index + 1);
                                handleTimeClick(index + 1);
                            }}
                            className={`rounded whitespace-nowrap p-2 font-medium mr-3 ${
                                index === activeTime
                                    ? "bg-blues-500 text-white"
                                    : "bg-greys-500 text-greys-600"
                            } ${index === 0 ? "ml-3" : ""}`}
                        >
                            {time}
                        </div>
                    )
                )}
            </div>

            <TheaterOverlay
                {...{ setPrice }}
                showTheater={showTheater}
                handleCloseTheater={handleCloseTheater}
            />
        </div>
    );
}
