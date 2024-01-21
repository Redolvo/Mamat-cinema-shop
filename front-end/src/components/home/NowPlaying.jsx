//components
import { NavLink } from "react-router-dom";

//icons
import { IoIosArrowForward, IoMdStar } from "react-icons/io";
import { useEffect, useState } from "react";
import { getAllFilms } from "../../api/film";

export default function NowPlaying() {
    const [dataFilm, setDataFilm] = useState(null);
    const [bioskop, setBioskop] = useState("");
    useEffect(() => {
        getAllFilm();
    }, []);
    // useEffect(() => {
    //     if (bioskop !== "") {
    //         getFilmFilter();
    //     }
    // }, [bioskop]);
    const getAllFilm = async () => {
        const response = await getAllFilms();
        if (response) {
            if (response.status === 200) {
                setDataFilm(response.data);
            }
        }
    };
    // const getFilmFilter = async () => {
    //     const response = await getFilmsFilter({ bioskop });
    //     if (response) {
    //         if (response.status === 200) {
    //             setDataFilm(response.data);
    //         }
    //     }
    // };

    return (
        <div className="mb-8">
            <div className="px-3 flex justify-between items-center mb-4">
                <div>
                    <h1 className="font-semibold text-lg mb-2">Now Playing</h1>
                    <div className="flex items-center text-xs cursor-pointer">
                        <div
                            onClick={() => setBioskop("all")}
                            className={`px-2 py-1 mr-2 rounded ${
                                bioskop === "all" || bioskop === ""
                                    ? "bg-blues-500 text-white"
                                    : "border border-blues-500"
                            }`}
                        >
                            All
                        </div>
                        <div
                            onClick={() => setBioskop("cgv")}
                            className={`px-2 py-1 mr-2 rounded ${
                                bioskop === "cgv"
                                    ? "bg-blues-500 text-white"
                                    : "border border-blues-500"
                            }`}
                        >
                            CGV&apos;s
                        </div>
                        <div
                            onClick={() => setBioskop("cinepolis")}
                            className={`px-2 py-1 mr-2 rounded ${
                                bioskop === "cinepolis"
                                    ? "bg-blues-500 text-white"
                                    : "border border-blues-500"
                            }`}
                        >
                            Cinepolis&apos;s
                        </div>
                        <div
                            onClick={() => setBioskop("cinemaxxi")}
                            className={`px-2 py-1 mr-2 rounded ${
                                bioskop === "cinemaxxi"
                                    ? "bg-blues-500 text-white"
                                    : "border border-blues-500"
                            }`}
                        >
                            Cinema XXI&apos;s
                        </div>
                    </div>
                </div>
                <div className="p-2 cursor-pointer">
                    <IoIosArrowForward className="text-lg" />
                </div>
            </div>

            <div className="flex items-center overflow-x-scroll overflow-y-hidden scrollbar-none">
                {dataFilm &&
                    dataFilm.map((item, index) => (
                        <NavLink
                            key={index}
                            to={`/movie/${item.id}`}
                            className="ml-3 min-w-[40%]"
                        >
                            <img
                                src={`/images/film/${item.img_cover}`}
                                alt="movie"
                                className="block mb-1 rounded-lg"
                            />
                            <h2 className="font-semibold max-w-full overflow-hidden whitespace-nowrap text-ellipsis capitalize">
                                {item.title}
                            </h2>
                            <p className="text-greys-600 text-xs mb-[2px]">
                                {item.duration}
                            </p>
                            <div className="flex items-center">
                                {Array.from(
                                    { length: item.rating },
                                    (_, index) => (
                                        <IoMdStar
                                            key={`${index}full`}
                                            className="text-yellows-500 mr-1"
                                        />
                                    )
                                )}
                                {Array.from(
                                    { length: 5 - item.rating },
                                    (_, index) => (
                                        <IoMdStar
                                            key={`${index}full`}
                                            className="text-greys-600 mr-1"
                                        />
                                    )
                                )}
                                <p className="text-greys-600 text-xs">
                                    {item.rating}.0
                                </p>
                            </div>
                        </NavLink>
                    ))}
            </div>
        </div>
    );
}
