import { NavLink, useParams, useNavigate } from "react-router-dom";

//components
import Button from "@/components/basic-ui/Button";
import Footer from "@/components/Footer";

//icons
import { IoMdStar } from "react-icons/io";
import { GoArrowLeft, GoHeart } from "react-icons/go";
import { useEffect, useState } from "react";
import { getMovieDetail } from "../api/film";

export default function MovieDetail() {
    const [detail, setDetail] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        getDetail();
    }, [id]);
    const getDetail = async () => {
        const response = await getMovieDetail(id);
        if (response) {
            if (response.status === 200) {
                setDetail(response.data);
            }
        }
    };
    return (
        <>
            {/* header */}
            <div className="relative">
                <img
                    src={`/images/film/${detail && detail.img_cover}`}
                    alt="movie"
                    className="block w-full h-full object-cover max-h-96"
                />
                <div className="movie-detail-overlay"></div>
                <div
                    onClick={() => navigate("/")}
                    className="absolute top-5 left-3 bg-white p-3 rounded cursor-pointer"
                >
                    <GoArrowLeft className="text-2xl text-blues-500" />
                </div>
            </div>

            {/* content */}
            <div className="px-3 py-2 pb-20">
                <h1 className="font-semibold capitalize text-xl mb-3">
                    {detail && detail.title}
                </h1>
                <table className="mb-5">
                    <tr>
                        <td className="text-greys-600 pr-5">Genre</td>
                        <td className="font-medium capitalize">
                            {detail && detail.genre}
                        </td>
                    </tr>
                    <tr>
                        <td className="text-greys-600 pr-5">Duration</td>
                        <td className="font-medium">
                            {detail && detail.duration}
                        </td>
                    </tr>
                    <tr>
                        <td className="text-greys-600 pr-5">Director</td>
                        <td className="font-medium capitalize">
                            {detail && detail.director}
                        </td>
                    </tr>
                </table>
                <div className="flex items-center mb-5">
                    <div className="flex-1">
                        <h3 className="mb-1 font-medium">Rating</h3>
                        <div className="flex items-center">
                            {detail &&
                                Array.from(
                                    { length: detail.rating },
                                    (_, index) => (
                                        <IoMdStar
                                            key={`${index}full`}
                                            className="text-yellows-500 mr-1"
                                        />
                                    )
                                )}
                            {detail &&
                                Array.from(
                                    { length: 5 - detail.rating },
                                    (_, index) => (
                                        <IoMdStar
                                            key={`${index}full`}
                                            className="text-greys-600 mr-1"
                                        />
                                    )
                                )}
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
                    <div className="text-sm">{detail && detail.synopsis}</div>
                </div>
                <NavLink to={`/checkout-ticket/${id}`}>
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
