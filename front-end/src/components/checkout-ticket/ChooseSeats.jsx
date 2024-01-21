import { NavLink } from "react-router-dom";

//components
import Button from "@/components/basic-ui/Button";
import { useState } from "react";

export default function ChooseSeats({
    changeSeat,
    seat_number,
    price,
    handleCreateTicket,
}) {
    const [jumlah, setJumlah] = useState(0);
    return (
        <div className="px-3">
            <div className="relative mb-28">
                <div className="w-full h-[2px] bg-blues-500"></div>
                <div className="screen-overlay">SCREEN</div>
            </div>
            <div className="mb-10">
                <div className="flex items-center gap-1 mb-3 text-sm px-8">
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        79
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        80
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        81
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        82
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        83
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        84
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        85
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        86
                    </div>
                </div>
                <div className="flex items-center gap-1 mb-3 text-sm px-8">
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        71
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        72
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        73
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        74
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        75
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        76
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        77
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        78
                    </div>
                </div>
                <div className="flex items-center gap-1 mb-3 text-sm">
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        61
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        62
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        63
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        64
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        65
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        66
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        67
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        68
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        69
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        70
                    </div>
                </div>
                <div className="flex items-center gap-1 mb-3 text-sm">
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        51
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        52
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        53
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        54
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        55
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        56
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        57
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        58
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        59
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        60
                    </div>
                </div>
                <div className="flex items-center gap-1 mb-3 text-sm">
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        41
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        42
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        43
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        44
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        45
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        46
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        47
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        48
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        49
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        50
                    </div>
                </div>
                <div className="flex items-center gap-1 mb-3 text-sm">
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        31
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        32
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        33
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        34
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        35
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        36
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        37
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        38
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        39
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        40
                    </div>
                </div>
                <div className="flex items-center gap-1 mb-3 text-sm">
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        21
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        22
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        23
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        24
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        25
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        26
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        27
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        28
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        29
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        30
                    </div>
                </div>
                <div className="flex items-center gap-1 mb-3 text-sm">
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        11
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        12
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        13
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        14
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        15
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        16
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        17
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        18
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        19
                    </div>
                    <div className="bg-greys-500 rounded py-3 flex-1 text-center text-blacks-500 cursor-default">
                        20
                    </div>
                </div>
                <div className="flex items-center gap-1 mb-3 text-sm">
                    <div
                        onClick={() => {
                            changeSeat(1);
                            setJumlah(1);
                        }}
                        className={`${
                            seat_number === 1
                                ? "bg-yellows-500"
                                : "bg-blues-500"
                        } rounded py-3 flex-1 text-center cursor-pointer ${
                            seat_number === 1 ? "text-blacks-500" : "text-white"
                        }`}
                    >
                        1
                    </div>
                    <div
                        onClick={() => {
                            changeSeat(2);
                            setJumlah(1);
                        }}
                        className={`${
                            seat_number === 2
                                ? "bg-yellows-500"
                                : "bg-blues-500"
                        } rounded py-3 flex-1 text-center cursor-pointer ${
                            seat_number === 2 ? "text-blacks-500" : "text-white"
                        }`}
                    >
                        2
                    </div>
                    <div
                        onClick={() => {
                            changeSeat(3);
                            setJumlah(1);
                        }}
                        className={`${
                            seat_number === 3
                                ? "bg-yellows-500"
                                : "bg-blues-500"
                        } rounded py-3 flex-1 text-center cursor-pointer ${
                            seat_number === 3 ? "text-blacks-500" : "text-white"
                        }`}
                    >
                        3
                    </div>
                    <div
                        onClick={() => {
                            changeSeat(4);
                            setJumlah(1);
                        }}
                        className={`${
                            seat_number === 4
                                ? "bg-yellows-500"
                                : "bg-blues-500"
                        } rounded py-3 flex-1 text-center cursor-pointer ${
                            seat_number === 4 ? "text-blacks-500" : "text-white"
                        }`}
                    >
                        4
                    </div>
                    <div
                        onClick={() => {
                            changeSeat(5);
                            setJumlah(1);
                        }}
                        className={`${
                            seat_number === 5
                                ? "bg-yellows-500"
                                : "bg-blues-500"
                        } rounded py-3 flex-1 text-center cursor-pointer ${
                            seat_number === 5 ? "text-blacks-500" : "text-white"
                        }`}
                    >
                        5
                    </div>
                    <div
                        onClick={() => {
                            changeSeat(6);
                            setJumlah(1);
                        }}
                        className={`${
                            seat_number === 6
                                ? "bg-yellows-500"
                                : "bg-blues-500"
                        } rounded py-3 flex-1 text-center cursor-pointer ${
                            seat_number === 6 ? "text-blacks-500" : "text-white"
                        }`}
                    >
                        6
                    </div>
                    <div
                        onClick={() => {
                            changeSeat(7);
                            setJumlah(1);
                        }}
                        className={`${
                            seat_number === 7
                                ? "bg-yellows-500"
                                : "bg-blues-500"
                        } rounded py-3 flex-1 text-center cursor-pointer ${
                            seat_number === 7 ? "text-blacks-500" : "text-white"
                        }`}
                    >
                        7
                    </div>
                    <div
                        onClick={() => {
                            changeSeat(8);
                            setJumlah(1);
                        }}
                        className={`${
                            seat_number === 8
                                ? "bg-yellows-500"
                                : "bg-blues-500"
                        } rounded py-3 flex-1 text-center cursor-pointer ${
                            seat_number === 8 ? "text-blacks-500" : "text-white"
                        }`}
                    >
                        8
                    </div>
                    <div
                        onClick={() => {
                            changeSeat(9);
                            setJumlah(1);
                        }}
                        className={`${
                            seat_number === 9
                                ? "bg-yellows-500"
                                : "bg-blues-500"
                        } rounded py-3 flex-1 text-center cursor-pointer ${
                            seat_number === 9 ? "text-blacks-500" : "text-white"
                        }`}
                    >
                        9
                    </div>
                    <div
                        onClick={() => {
                            changeSeat(10);
                            setJumlah(1);
                        }}
                        className={`${
                            seat_number === 10
                                ? "bg-yellows-500"
                                : "bg-blues-500"
                        } rounded py-3 flex-1 text-center cursor-pointer ${
                            seat_number === 10
                                ? "text-blacks-500"
                                : "text-white"
                        }`}
                    >
                        10
                    </div>
                </div>
            </div>
            <div className="flex item-center mb-10">
                <div className="flex-1 flex items-center justify-center">
                    <div className="w-5 h-5 rounded mr-2 bg-greys-500"></div>
                    <div className="text-greys-600 text-sm">Reserved</div>
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <div className="w-5 h-5 rounded mr-2 bg-blues-500"></div>
                    <div className="text-greys-600 text-sm">Available</div>
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <div className="w-5 h-5 rounded mr-2 bg-yellows-500"></div>
                    <div className="text-greys-600 text-sm">Selected</div>
                </div>
            </div>

            {/* <NavLink to="/your-ticket/1"> */}
            <Button
                onClick={handleCreateTicket}
                className="text-center w-full"
                disabled={jumlah === 0}
            >
                Book {jumlah} Ticket(s) {price}
            </Button>
            {/* </NavLink> */}
        </div>
    );
}
