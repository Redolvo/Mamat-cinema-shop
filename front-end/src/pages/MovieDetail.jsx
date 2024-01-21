import { NavLink } from "react-router-dom";

//components
import Button from "@/components/basic-ui/Button";
import Footer from "@/components/Footer";

//icons
import { IoMdStar } from "react-icons/io";
import { GoArrowLeft, GoHeart } from "react-icons/go";

export default function MovieDetail() {
    return (
        <>
            {/* header */}
            <div className="relative">
                <img
                    src="/images/movie_assets/mov1.webp"
                    alt="movie"
                    className="block w-full h-full object-cover max-h-96"
                />
                <div className="movie-detail-overlay"></div>
                <div className="absolute top-5 left-3 bg-white p-3 rounded">
                    <GoArrowLeft className="text-2xl text-blues-500" />
                </div>
            </div>

            {/* content */}
            <div className="px-3 py-2 pb-20">
                <h1 className="font-semibold capitalize text-xl mb-3">
                    Justice League : The Snyder Cut
                </h1>
                <table className="mb-5">
                    <tr>
                        <td className="text-greys-600 pr-5">Genre</td>
                        <td className="font-medium capitalize">
                            Action, Fantasy
                        </td>
                    </tr>
                    <tr>
                        <td className="text-greys-600 pr-5">Duration</td>
                        <td className="font-medium">3h 32min</td>
                    </tr>
                    <tr>
                        <td className="text-greys-600 pr-5">Director</td>
                        <td className="font-medium capitalize">Zack Snyder</td>
                    </tr>
                </table>
                <div className="flex items-center mb-5">
                    <div className="flex-1">
                        <h3 className="mb-1 font-medium">Rating</h3>
                        <div className="flex items-center">
                            <IoMdStar className="text-yellows-500 mr-1" />
                            <IoMdStar className="text-yellows-500 mr-1" />
                            <IoMdStar className="text-yellows-500 mr-1" />
                            <IoMdStar className="text-yellows-500 mr-1" />
                            <IoMdStar className="text-yellows-500 mr-1" />
                            <p className="text-greys-600 text-xs">5.0</p>
                        </div>
                    </div>
                    <div className="flex-1 flex items-center cursor-pointer">
                        <GoHeart />
                        <h3 className="font-medium ml-2">Add to Watchlist</h3>
                    </div>
                </div>
                <div className="mb-10">
                    <div className="flex item-center mb-3">
                        <div className="font-medium mr-3">Synopsis</div>
                        <div className="text-greys-600 mr-3">Trailer</div>
                        <div className="text-greys-600 mr-3">Cast(s)</div>
                    </div>
                    <div className="text-sm">
                        Fueled by his restored faith in humanity and inspired by
                        Superman's selfless act, Bruce Wayne enlists newfound
                        ally Diana Prince to face an even greater threat.
                        Together, Batman and Wonder Woman work quickly to
                        recruit a team to stand against this newly awakened
                        enemy. Despite the formation of an unprecedented league
                        of heroes -- Batman, Wonder Woman, Aquaman, Cyborg and
                        the Flash -- it may be too late to save the planet from
                        an assault of catastrophic proportions.
                    </div>
                </div>
                <NavLink to="/checkout-ticket/1">
                    <Button className="text-center w-full">
                        Book Ticket(s)
                    </Button>
                </NavLink>
            </div>

            {/* footer */}
            <Footer />
        </>
    );
}
