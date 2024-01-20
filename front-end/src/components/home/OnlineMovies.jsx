//components
import Button from "@/components/basic-ui/Button";

//icons
import { IoIosArrowForward } from "react-icons/io";

export default function OnlineMovies() {
    return (
        <div className="onlineMoviesSecion mb-8 px-3">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h2 className="font-semibold text-lg">Online Movies</h2>
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
                        <h2 className="text-lg font-semibold max-w-full overflow-hidden whitespace-nowrap text-ellipsis capitalize">
                            Elemental
                        </h2>
                        <p className="line-clamp-2 text-greys-600 text-sm mb-2">
                            In a city where fire, water, land, and air residents
                            live together, a fiery young woman and a
                            go-with-the-flow guy discover something elemental:
                            how much they actually have in common.
                        </p>
                        <div className="fonts-medium text-sm mb-4">
                            <span className="pr-2 mr-2 border-r-[2px] border-blues-500">
                                PG-13
                            </span>
                            <span>Romance, Fantasy</span>
                        </div>
                        <Button className="text-sm !p-2">Watch Now</Button>
                    </div>
                </div>
                <div className="flex items-center mb-5">
                    <img
                        src="/images/movie_assets/mov5.png"
                        alt="movie"
                        className="max-w-[110px] w-full h-full object-cover block"
                    />
                    <div className="flex-1 ml-3">
                        <h2 className="text-lg font-semibold max-w-full overflow-hidden whitespace-nowrap text-ellipsis capitalize">
                            Elemental
                        </h2>
                        <p className="line-clamp-2 text-greys-600 text-sm mb-2">
                            In a city where fire, water, land, and air residents
                            live together, a fiery young woman and a
                            go-with-the-flow guy discover something elemental:
                            how much they actually have in common.
                        </p>
                        <div className="fonts-medium text-sm mb-4">
                            <span className="pr-2 mr-2 border-r-[2px] border-blues-500">
                                PG-13
                            </span>
                            <span>Romance, Fantasy</span>
                        </div>
                        <Button className="text-sm !p-2">Watch Now</Button>
                    </div>
                </div>
                <div className="flex items-center pb-5">
                    <img
                        src="/images/movie_assets/mov6.png"
                        alt="movie"
                        className="max-w-[110px] w-full h-full object-cover block"
                    />
                    <div className="flex-1 ml-3">
                        <h2 className="text-lg font-semibold max-w-full overflow-hidden whitespace-nowrap text-ellipsis capitalize">
                            Elemental
                        </h2>
                        <p className="line-clamp-2 text-greys-600 text-sm mb-2">
                            In a city where fire, water, land, and air residents
                            live together, a fiery young woman and a
                            go-with-the-flow guy discover something elemental:
                            how much they actually have in common.
                        </p>
                        <div className="fonts-medium text-sm mb-4">
                            <span className="pr-2 mr-2 border-r-[2px] border-blues-500">
                                PG-13
                            </span>
                            <span>Romance, Fantasy</span>
                        </div>
                        <Button className="text-sm !p-2">Watch Now</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
