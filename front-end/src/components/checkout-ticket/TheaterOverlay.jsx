//icons
import { IoCloseOutline } from "react-icons/io5";

export default function TheaterOverlay({ showTheater, handleCloseTheater }) {
    return (
        <div
            className={`fixed top-0 left-0 w-full h-full flex flex-col justify-end transition duration-200 z-50 ease-in-out ${
                showTheater
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
            }`}
        >
            <div
                className="fixed top-0 left-0 z-90 w-full h-full opacity-50 bg-black"
                onClick={() => handleCloseTheater()}
            ></div>
            <div
                className={`w-full absolute z-99 bg-white transform border-0 transition duration-200 ease-in-out rounded-t-lg ${
                    showTheater ? "translate-y-[0%] " : "translate-y-full"
                }`}
            >
                <div className="overlay-header">
                    <div className="px-5 py-4 flex justify-between items-center">
                        <h3 className="font-semibold">Pick Theater</h3>
                        <IoCloseOutline
                            onClick={() => setShowTheater(!showTheater)}
                            className="w-[28px] h-[28px]"
                        />
                    </div>
                </div>
                <div className="overlay-body">
                    <div className="border-t border-greys-500">
                        <div className="my-3">
                            <label
                                htmlFor="1"
                                className="px-5 py-2 flex items-center"
                            >
                                <input type="checkbox" id="1" />
                                <div className="ml-3">
                                    <h3 className="font-medium">Deli Park</h3>
                                    <p className="text-greys-600 text-sm">
                                        Rp. 50.000/each
                                    </p>
                                </div>
                            </label>
                            <label
                                htmlFor="2"
                                className="px-5 py-2 flex items-center"
                            >
                                <input type="checkbox" id="2" />
                                <div className="ml-3">
                                    <h3 className="font-medium">
                                        Centre Point
                                    </h3>
                                    <p className="text-greys-600 text-sm">
                                        Rp. 40.000/each
                                    </p>
                                </div>
                            </label>
                            <label
                                htmlFor="3"
                                className="px-5 py-2 flex items-center"
                            >
                                <input type="checkbox" id="3" />
                                <div className="ml-3">
                                    <h3 className="font-medium">
                                        Thamrin Plaza
                                    </h3>
                                    <p className="text-greys-600 text-sm">
                                        Rp. 30.000/each
                                    </p>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
