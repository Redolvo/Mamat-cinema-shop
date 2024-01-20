//components
import Input from "@/components/basic-ui/Input";
import Button from "@/components/basic-ui/Button";

import {
    IoIosNotificationsOutline,
    IoIosArrowForward,
    IoMdStar,
} from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import { cekLogin } from "../api/auth";

export default function Home() {
    cekLogin()
    return (
        <>
            {/* header */}
            <header className="px-3 py-4 flex items-center mb-3">
                <Input
                    placeholder="Movie interest?"
                    parentClass="flex-1"
                    parentMargin="m-0"
                ></Input>
                <IoIosNotificationsOutline className="text-2xl m-2" />
                <IoLogOutOutline className="text-2xl m-2 text-red-500" />
            </header>

            {/* content */}
            <div className="">
                <div className="nowPlayingSection mb-8">
                    <div className="px-3 flex justify-between items-center mb-4">
                        <div>
                            <h1 className="font-semibold text-lg mb-2">
                                Now Playing
                            </h1>
                            <div className="flex items-center text-xs cursor-pointer">
                                <div className="mr-2 rounded bg-blues-500 px-2 py-1 text-white">
                                    All
                                </div>
                                <div className="mr-2 rounded px-2 py-1 border border-blues-500">
                                    CGV's
                                </div>
                                <div className="mr-2 rounded px-2 py-1 border border-blues-500">
                                    Cinepolis's
                                </div>
                                <div className="mr-2 rounded px-2 py-1 border border-blues-500">
                                    Cinema XXI's
                                </div>
                            </div>
                        </div>
                        <div className="p-2 cursor-pointer">
                            <IoIosArrowForward className="text-lg" />
                        </div>
                    </div>

                    <div className="flex items-center overflow-x-scroll overflow-y-hidden scrollbar-none">
                        <div className="ml-3 min-w-[40%]">
                            <img
                                src="/images/movie_assets/mov1.png"
                                alt="movie"
                                className="block mb-1 rounded-lg"
                            />
                            <h2 className="font-semibold max-w-full overflow-hidden whitespace-nowrap text-ellipsis">
                                Justice League : The Snyder Cut
                            </h2>
                            <p className="text-greys-600 text-xs mb-[2px]">
                                3h 32min
                            </p>
                            <div className="flex items-center">
                                <IoMdStar className="text-yellows-500 mr-1" />
                                <IoMdStar className="text-yellows-500 mr-1" />
                                <IoMdStar className="text-yellows-500 mr-1" />
                                <IoMdStar className="text-yellows-500 mr-1" />
                                <IoMdStar className="text-yellows-500 mr-1" />
                                <p className="text-greys-600 text-xs">5.0</p>
                            </div>
                        </div>
                        <div className="ml-3 min-w-[40%]">
                            <img
                                src="/images/movie_assets/mov2.png"
                                alt="movie"
                                className="block mb-1 rounded-lg"
                            />
                            <h2 className="font-semibold max-w-full overflow-hidden whitespace-nowrap text-ellipsis">
                                Justice League : The Snyder Cut
                            </h2>
                            <p className="text-greys-600 text-xs mb-[2px]">
                                3h 32min
                            </p>
                            <div className="flex items-center">
                                <IoMdStar className="text-yellows-500 mr-1" />
                                <IoMdStar className="text-yellows-500 mr-1" />
                                <IoMdStar className="text-yellows-500 mr-1" />
                                <IoMdStar className="text-yellows-500 mr-1" />
                                <IoMdStar className="text-yellows-500 mr-1" />
                                <p className="text-greys-600 text-xs">5.0</p>
                            </div>
                        </div>
                        <div className="ml-3 mr-3 min-w-[40%]">
                            <img
                                src="/images/movie_assets/mov1.png"
                                alt="movie"
                                className="block mb-1 rounded-lg"
                            />
                            <h2 className="font-semibold max-w-full overflow-hidden whitespace-nowrap text-ellipsis">
                                Justice League : The Snyder Cut
                            </h2>
                            <p className="text-greys-600 text-xs mb-[2px]">
                                3h 32min
                            </p>
                            <div className="flex items-center">
                                <IoMdStar className="text-yellows-500 mr-1" />
                                <IoMdStar className="text-yellows-500 mr-1" />
                                <IoMdStar className="text-yellows-500 mr-1" />
                                <IoMdStar className="text-yellows-500 mr-1" />
                                <IoMdStar className="text-yellows-500 mr-1" />
                                <p className="text-greys-600 text-xs">5.0</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="comingSoonSecion mb-8 px-3">
                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <h1 className="font-semibold text-lg">
                                Coming Soon
                            </h1>
                            <p className="text-greys-600 text-xs">
                                Get Ready for the Ultimate Cinematic Countdown!
                            </p>
                        </div>
                        <div className="p-2 cursor-pointer">
                            <IoIosArrowForward className="text-lg" />
                        </div>
                    </div>
                    <div className="">
                        <img
                            src="/images/movie_assets/mov3.png"
                            alt="movie"
                            className="w-full object-cover"
                        />
                    </div>
                </div>

                <div className="onlineMoviesSecion pb-5 px-3">
                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <h2 className="font-semibold text-lg">
                                Online Movies
                            </h2>
                            <p className="text-greys-600 text-xs">
                                The Digital Delight Experience
                            </p>
                        </div>
                        <div className="p-2 cursor-pointer">
                            <IoIosArrowForward className="text-lg" />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center mb-5">
                            <img
                                src="/images/movie_assets/mov4.png"
                                alt="movie"
                                className="max-w-[110px] w-full h-full object-cover block"
                            />
                            <div className="flex-1 ml-3">
                                <h2 className="text-lg font-semibold max-w-full overflow-hidden whitespace-nowrap text-ellipsis">
                                    Elemental
                                </h2>
                                <p className="line-clamp-2 text-greys-600 text-sm mb-2">
                                    In a city where fire, water, land, and air
                                    residents live together, a fiery young woman
                                    and a go-with-the-flow guy discover
                                    something elemental: how much they actually
                                    have in common.
                                </p>
                                <div className="fonts-medium text-sm mb-4">
                                    <span className="pr-2 mr-2 border-r-[2px] border-blues-500">
                                        PG-13
                                    </span>
                                    <span>Romance, Fantasy</span>
                                </div>
                                <Button className="text-sm !p-2">
                                    Watch Now
                                </Button>
                            </div>
                        </div>
                        <div className="flex items-center mb-5">
                            <img
                                src="/images/movie_assets/mov5.png"
                                alt="movie"
                                className="max-w-[110px] w-full h-full object-cover block"
                            />
                            <div className="flex-1 ml-3">
                                <h2 className="text-lg font-semibold max-w-full overflow-hidden whitespace-nowrap text-ellipsis">
                                    Elemental
                                </h2>
                                <p className="line-clamp-2 text-greys-600 text-sm mb-2">
                                    In a city where fire, water, land, and air
                                    residents live together, a fiery young woman
                                    and a go-with-the-flow guy discover
                                    something elemental: how much they actually
                                    have in common.
                                </p>
                                <div className="fonts-medium text-sm mb-4">
                                    <span className="pr-2 mr-2 border-r-[2px] border-blues-500">
                                        PG-13
                                    </span>
                                    <span>Romance, Fantasy</span>
                                </div>
                                <Button className="text-sm !p-2">
                                    Watch Now
                                </Button>
                            </div>
                        </div>
                        <div className="flex items-center pb-5">
                            <img
                                src="/images/movie_assets/mov6.png"
                                alt="movie"
                                className="max-w-[110px] w-full h-full object-cover block"
                            />
                            <div className="flex-1 ml-3">
                                <h2 className="text-lg font-semibold max-w-full overflow-hidden whitespace-nowrap text-ellipsis">
                                    Elemental
                                </h2>
                                <p className="line-clamp-2 text-greys-600 text-sm mb-2">
                                    In a city where fire, water, land, and air
                                    residents live together, a fiery young woman
                                    and a go-with-the-flow guy discover
                                    something elemental: how much they actually
                                    have in common.
                                </p>
                                <div className="fonts-medium text-sm mb-4">
                                    <span className="pr-2 mr-2 border-r-[2px] border-blues-500">
                                        PG-13
                                    </span>
                                    <span>Romance, Fantasy</span>
                                </div>
                                <Button className="text-sm !p-2">
                                    Watch Now
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
