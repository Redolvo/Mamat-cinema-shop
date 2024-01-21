//icons
import {
    IoCloseOutline,
    IoLocationOutline,
    IoCallOutline,
} from "react-icons/io5";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getMalls } from "../../api/mall";

export default function TheaterOverlay(props) {
    const [malls, setMalls] = useState(null);
    const [link, setLink] = useState("");
    const [addres, setAddres] = useState("");
    const [phone, setPhone] = useState("");
    useEffect(() => {
        getMall();
    }, []);
    const getMall = async () => {
        const response = await getMalls();
        if (response) {
            if (response.status === 200) {
                setMalls(response.data);
            }
        }
    };
    return (
        <>
            <div
                className={`fixed top-0 left-0 w-full h-full flex flex-col justify-end transition duration-200 z-50 ease-in-out ${
                    props.showTheater
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                }`}
            >
                <div
                    className="fixed top-0 left-0 z-90 w-full h-full opacity-50 bg-black"
                    onClick={() => props.handleCloseTheater()}
                ></div>
                <div
                    className={`w-full absolute z-99 bg-white transform border-0 transition duration-200 ease-in-out rounded-t-lg ${
                        props.showTheater
                            ? "translate-y-[0%] "
                            : "translate-y-full"
                    }`}
                >
                    <div className="overlay-header">
                        <div className="px-5 py-4 flex justify-between items-center">
                            <h3 className="font-semibold">Pick Theater</h3>
                            <IoCloseOutline
                                onClick={props.handleCloseTheater}
                                className="w-[28px] h-[28px]"
                            />
                        </div>
                    </div>
                    <div className="overlay-body">
                        <div className="border-t border-greys-500">
                            <div className="my-3">
                                {malls &&
                                    malls.map((item, index) => (
                                        <div
                                            key={index}
                                            className="px-5 py-2 flex items-center justify-between"
                                        >
                                            <label
                                                htmlFor="1"
                                                className="flex items-center flex-1"
                                            >
                                                <input
                                                    type="radio"
                                                    name="mall"
                                                    id={item.id}
                                                />
                                                <div className="ml-3">
                                                    <h3 className="font-medium">
                                                        {item.name}
                                                    </h3>
                                                    <p className="text-greys-600 text-sm">
                                                        Rp. {item.ticket_price}
                                                        .000/each
                                                    </p>
                                                </div>
                                            </label>
                                            <div
                                                onClick={() => {
                                                    setLink(
                                                        item.mall_iframe_location
                                                    );
                                                    setAddres(item.address);
                                                    setPhone(item.contact);
                                                    document
                                                        .getElementById(
                                                            "my_modal_3"
                                                        )
                                                        .showModal();
                                                }}
                                                className="text-sm text-greys-600 cursor-pointer"
                                            >
                                                View Detail
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3 ring-0 text-lg">
                            ✕
                        </button>
                    </form>
                    <h3 className="font-semibold text-lg mb-3">Deli Park</h3>
                    <div>
                        <iframe
                            src={link}
                            allowfullscreen=""
                            height="250"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full mb-4"
                        ></iframe>
                        <div className="flex mb-2">
                            <div className="text-greys-600 mr-3 mt-1 text-lg">
                                <IoLocationOutline />
                            </div>
                            <span className="text-sm">{addres}</span>
                        </div>
                        <div className="flex">
                            <div className="text-greys-600 mr-3 mt-1 text-lg">
                                <IoCallOutline />
                            </div>
                            <span className="text-sm">{phone}</span>
                        </div>
                    </div>
                </div>
            </dialog>
        </>
    );
}

TheaterOverlay.propTypes = {
    showTheater: PropTypes.any,
    handleCloseTheater: PropTypes.any,
};
