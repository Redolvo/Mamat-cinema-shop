import { NavLink } from "react-router-dom";

//components
import Footer from "@/components/Footer";
import { ChooseDate, ChooseSeats } from "@/components/checkout-ticket";

//icons
import { GoArrowLeft } from "react-icons/go";

export default function CheckoutTicket() {
    return (
        <>
            {/* header */}
            <header className="px-3 py-4 flex items-center mb-3">
                <div className="bg-white p-3 rounded">
                    <GoArrowLeft className="text-2xl text-blues-500" />
                </div>
                <div className="ml-3">
                    <h1 className="text-xl font-semibold max-w-[90%] overflow-hidden whitespace-nowrap text-ellipsis capitalize">
                        Justice League : The Snyder Cut
                    </h1>
                    <p className="text-greys-600">3h 32min</p>
                </div>
            </header>

            {/* content */}
            <div className="pb-24">
                <ChooseDate />
                <ChooseSeats />
            </div>

            {/* footer */}
            <Footer />
        </>
    );
}
