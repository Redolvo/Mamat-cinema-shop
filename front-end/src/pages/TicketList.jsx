import { NavLink } from "react-router-dom";

//components
import Footer from "@/components/Footer";

//icons
import { GoArrowLeft } from "react-icons/go";

export default function TicketList() {
    return (
        <>
            {/* header */}
            <header className="px-3 py-4 flex items-center mb-3">
                <div className="bg-white p-3 rounded">
                    <GoArrowLeft className="text-2xl text-blues-500" />
                </div>
                <div className="ml-3">
                    <h1 className="text-xl font-semibold">Ticket List</h1>
                </div>
            </header>

            {/* content */}
            <div className="pb-20">
                <NavLink
                    to="/your-ticket/1"
                    className="px-3 pb-5 mb-5 border-b border-greys-500 flex items-center"
                >
                    <img
                        src="/images/movie_assets/mov1.webp"
                        alt="movie"
                        className="max-w-28 w-100 object-cover rounded-lg mr-4"
                    />
                    <div className="flex-1">
                        <div className="text-yellows-600 font-medium">
                            Pembayaran Berhasil
                        </div>
                        <h2 className="font-semibold text-lg line-clamp-2 capitalize mb-2">
                            Justice League : The Snyder Cut
                        </h2>
                        <div className="text-sm mb-3">
                            <span className="pr-2 mr-2 border-r-[2px] border-white">
                                PG-13
                            </span>
                            <span>Romance, Fantasy</span>
                        </div>
                        <div className="text-sm">
                            Thursday, 18 Jan 2024, 03:00 PM
                        </div>
                    </div>
                </NavLink>
                <NavLink
                    to="/your-ticket/1"
                    className="px-3 pb-5 mb-5 border-b border-greys-500 flex items-center"
                >
                    <img
                        src="/images/movie_assets/mov1.webp"
                        alt="movie"
                        className="max-w-28 w-100 object-cover rounded-lg mr-4"
                    />
                    <div className="flex-1">
                        <div className="text-yellows-600 font-medium">
                            Pembayaran Berhasil
                        </div>
                        <h2 className="font-semibold text-lg line-clamp-2 capitalize mb-1">
                            Justice League : The Snyder Cut
                        </h2>
                        <div className="text-sm mb-3">
                            <span className="pr-2 mr-2 border-r-[2px] border-white">
                                PG-13
                            </span>
                            <span>Romance, Fantasy</span>
                        </div>
                        <div className="text-sm">
                            Thursday, 18 Jan 2024, 03:00 PM
                        </div>
                    </div>
                </NavLink>
                <NavLink
                    to="/your-ticket/1"
                    className="px-3 pb-5 mb-5 border-b border-greys-500 flex items-center"
                >
                    <img
                        src="/images/movie_assets/mov1.webp"
                        alt="movie"
                        className="max-w-28 w-100 object-cover rounded-lg mr-4"
                    />
                    <div className="flex-1">
                        <div className="text-yellows-600 font-medium">
                            Pembayaran Berhasil
                        </div>
                        <h2 className="font-semibold text-lg line-clamp-2 capitalize mb-2">
                            Justice League : The Snyder Cut
                        </h2>
                        <div className="text-sm mb-3">
                            <span className="pr-2 mr-2 border-r-[2px] border-white">
                                PG-13
                            </span>
                            <span>Romance, Fantasy</span>
                        </div>
                        <div className="text-sm">
                            Thursday, 18 Jan 2024, 03:00 PM
                        </div>
                    </div>
                </NavLink>
            </div>

            {/* footer */}
            <Footer />
        </>
    );
}
