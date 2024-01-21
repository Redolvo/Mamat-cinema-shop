//icons
import { IoIosArrowForward } from "react-icons/io";

export default function NowPlaying() {
    return (
        <div className="mb-8 px-3">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h1 className="font-semibold text-lg">Coming Soon</h1>
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
    );
}
