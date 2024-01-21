//icons
import { GoArrowLeft } from "react-icons/go";

export default function Ticket() {
    return (
        <>
            {/* header */}
            <header className="px-3 py-4 flex items-center mb-3">
                <div className="bg-white p-3 rounded">
                    <GoArrowLeft className="text-2xl text-blues-500" />
                </div>
                <div className="ml-3">
                    <h1 className="text-xl font-semibold">Your Ticket</h1>
                </div>
            </header>

            {/* content */}
            <div className="pb-20 px-3">
                <div className="w-full bg-blues-500 rounded-t-xl pt-5">
                    <div className="flex items-center pb-5 border-b border-dashed border-white px-5">
                        <img
                            src="/images/movie_assets/mov1.webp"
                            alt="movie"
                            className="max-w-28 w-100 object-cover rounded-lg mr-4"
                        />
                        <div className="flex-1">
                            <h2 className="font-semibold text-lg text-yellows-500 line-clamp-2 capitalize mb-2">
                                Justice League : The Snyder Cut
                            </h2>
                            <div className="text-white text-sm mb-8">
                                <span className="pr-2 mr-2 border-r-[2px] border-white">
                                    PG-13
                                </span>
                                <span>Romance, Fantasy</span>
                            </div>
                            <div className="text-greys-500 text-sm">
                                3h 32min
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between -mt-5">
                        <div className="w-10 h-10 -mb-5 rounded-full bg-white -ml-5"></div>
                        <div className="w-10 h-10 rounded-full bg-white -mr-5"></div>
                    </div>
                    <div className="px-5 py-10 relative">
                        <div className="mb-3">
                            <div className="text-greys-600 text-sm">Cinema</div>
                            <div className="text-white font-medium">
                                Delipark XXI
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="text-greys-600 text-sm">
                                Date & Times
                            </div>
                            <div className="text-white font-medium max-w-[80%]">
                                Thursday, 18 Jan 2024, 03:00 PM
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="text-greys-600 text-sm">
                                Seat(s)
                            </div>
                            <div className="text-white font-medium">B5, B6</div>
                        </div>
                        <div className="mb-3">
                            <div className="text-greys-600 text-sm">
                                Total Payment
                            </div>
                            <div className="text-white font-medium">
                                Rp 100.000
                            </div>
                        </div>
                        <div className="absolute right-14 top-5 bottom-5 font-semibold text-greys-500 opacity-30 transform rotate-90">
                            <span className="text-5xl tracking-wider">
                                STUDIO 1
                            </span>
                        </div>
                    </div>
                    <div className="px-5 pb-[60px]">
                        <div className="flex items-center overflow-hidden mb-2">
                            <div className="w-1 h-16 bg-white mr-[2px]"></div>
                            <div className="w-4 h-16 bg-white mr-[2px]"></div>
                            <div className="w-2 h-16 bg-white mr-[2px]"></div>
                            <div className="w-1 h-16 bg-white mr-[2px]"></div>
                            <div className="w-4 h-16 bg-white mr-[2px]"></div>
                            <div className="w-3 h-16 bg-white mr-[2px]"></div>
                            <div className="w-2 h-16 bg-white mr-[2px]"></div>
                            <div className="w-2 h-16 bg-white mr-[2px]"></div>
                            <div className="w-1 h-16 bg-white mr-[2px]"></div>
                            <div className="w-1 h-16 bg-white mr-[2px]"></div>
                            <div className="w-2 h-16 bg-white mr-[2px]"></div>
                            <div className="w-3 h-16 bg-white mr-[2px]"></div>
                            <div className="w-4 h-16 bg-white mr-[2px]"></div>
                            <div className="w-2 h-16 bg-white mr-[2px]"></div>
                            <div className="w-2 h-16 bg-white mr-[2px]"></div>
                            <div className="w-1 h-16 bg-white mr-[2px]"></div>
                            <div className="w-2 h-16 bg-white mr-[2px]"></div>
                            <div className="w-3 h-16 bg-white mr-[2px]"></div>
                            <div className="w-1 h-16 bg-white mr-[2px]"></div>
                            <div className="w-1 h-16 bg-white mr-[2px]"></div>
                            <div className="w-1 h-16 bg-white mr-[2px]"></div>
                            <div className="w-2 h-16 bg-white mr-[2px]"></div>
                            <div className="w-3 h-16 bg-white mr-[2px]"></div>
                            <div className="w-5 h-16 bg-white mr-[2px]"></div>
                            <div className="w-3 h-16 bg-white mr-[2px]"></div>
                            <div className="w-2 h-16 bg-white mr-[2px]"></div>
                            <div className="w-1 h-16 bg-white mr-[2px]"></div>
                            <div className="w-1 h-16 bg-white mr-[2px]"></div>
                            <div className="w-2 h-16 bg-white mr-[2px]"></div>
                            <div className="w-3 h-16 bg-white mr-[2px]"></div>
                        </div>
                        <div className="text-white text-sm text-center">
                            <span className="mr-3 text-greys-600">
                                Booking Code
                            </span>
                            SI99080906NASJKL
                        </div>
                    </div>
                    <div className="flex items-center w-full">
                        <div className="flex-1 w-full bg-white rounded-full h-10 -mb-5"></div>
                        <div className="flex-1 w-full bg-white rounded-full h-10 -mb-5"></div>
                        <div className="flex-1 w-full bg-white rounded-full h-10 -mb-5"></div>
                        <div className="flex-1 w-full bg-white rounded-full h-10 -mb-5"></div>
                        <div className="flex-1 w-full bg-white rounded-full h-10 -mb-5"></div>
                        <div className="flex-1 w-full bg-white rounded-full h-10 -mb-5"></div>
                        <div className="flex-1 w-full bg-white rounded-full h-10 -mb-5"></div>
                        <div className="flex-1 w-full bg-white rounded-full h-10 -mb-5"></div>
                    </div>
                </div>
                <div className="text-sm text-greys-600 mt-10">
                    <div>PT. Mamat Gun Shop Indonesia</div>
                    <div>NPWP: 82.710.605.5-077.000</div>
                    <div>SCTV Tower - Senayan City Lantai 14</div>
                    <div>
                        JI. Asia Afrika Lot. 19, Gelora, Tanah AbangJakarta
                        Pusat-10270
                    </div>
                </div>
            </div>
        </>
    );
}
