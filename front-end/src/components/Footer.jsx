import { NavLink } from "react-router-dom";

//icons
import { IoTicketOutline } from "react-icons/io5";
import { BiHomeAlt2 } from "react-icons/bi";
import { PiPopcorn } from "react-icons/pi";

export default function Footer() {
    const isActive = ({ isActive }) => {
        return isActive
            ? "flex flex-col items-center w-28 my-1 text-blues-500"
            : "flex flex-col items-center w-28 my-1";
    };

    return (
        <footer className="fixed bottom-0 bg-white w-full max-w-sm border-t-[1px] border-greys-500 z-40 flex justify-evenly px-3 py-1">
            <NavLink to="/" className={isActive}>
                <BiHomeAlt2 className="text-2xl mb-1" />
                <div className="text-sm">Home</div>
            </NavLink>
            <NavLink className="flex flex-col items-center w-28 my-1">
                <PiPopcorn className="text-2xl mb-1" />
                <div className="text-sm">Watch Together</div>
            </NavLink>
            <NavLink to="/ticket-list" className={isActive}>
                <IoTicketOutline className="text-2xl mb-1 w-28 my-1" />
                <div className="text-sm">Tickets</div>
            </NavLink>
        </footer>
    );
}
