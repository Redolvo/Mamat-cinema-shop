//components
import { NowPlaying, ComingSoon, OnlineMovies } from "@/components/home";
import Input from "@/components/basic-ui/Input";
import Footer from "@/components/Footer";

//icons
import { IoIosNotificationsOutline, IoIosArrowForward } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";

export default function Home() {
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
            <div className="pb-12">
                <NowPlaying />
                <ComingSoon />
                <OnlineMovies />
            </div>

            {/* footer */}
            <Footer />
        </>
    );
}
