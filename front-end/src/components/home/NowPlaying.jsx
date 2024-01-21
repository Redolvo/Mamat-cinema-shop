//components
import { NavLink } from "react-router-dom";

//icons
import { IoIosArrowForward, IoMdStar } from "react-icons/io";

export default function NowPlaying() {
    return (
        <div className="mb-8">
            <div className="px-3 flex justify-between items-center mb-4">
                <div>
                    <h1 className="font-semibold text-lg mb-2">Now Playing</h1>
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
                <NavLink to="/movie/1" className="ml-3 min-w-[40%]">
                    <img
                        src="/images/movie_assets/mov1.png"
                        alt="movie"
                        className="block mb-1 rounded-lg"
                    />
                    <h2 className="font-semibold max-w-full overflow-hidden whitespace-nowrap text-ellipsis capitalize">
                        Justice League : The Snyder Cut
                    </h2>
                    <p className="text-greys-600 text-xs mb-[2px]">3h 32min</p>
                    <div className="flex items-center">
                        <IoMdStar className="text-yellows-500 mr-1" />
                        <IoMdStar className="text-yellows-500 mr-1" />
                        <IoMdStar className="text-yellows-500 mr-1" />
                        <IoMdStar className="text-yellows-500 mr-1" />
                        <IoMdStar className="text-yellows-500 mr-1" />
                        <p className="text-greys-600 text-xs">5.0</p>
                    </div>
                </NavLink>
                <div className="ml-3 min-w-[40%]">
                    <img
                        src="/images/movie_assets/mov2.png"
                        alt="movie"
                        className="block mb-1 rounded-lg"
                    />
                    <h2 className="font-semibold max-w-full overflow-hidden whitespace-nowrap text-ellipsis capitalize">
                        Justice League : The Snyder Cut
                    </h2>
                    <p className="text-greys-600 text-xs mb-[2px]">3h 32min</p>
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
                    <h2 className="font-semibold max-w-full overflow-hidden whitespace-nowrap text-ellipsis capitalize">
                        Justice League : The Snyder Cut
                    </h2>
                    <p className="text-greys-600 text-xs mb-[2px]">3h 32min</p>
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
    );
}
