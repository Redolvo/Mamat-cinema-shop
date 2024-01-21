//icons
import {
    IoCloseOutline,
    IoLocationOutline,
    IoCallOutline,
} from "react-icons/io5";
import PropTypes from "prop-types";

export default function TheaterOverlay(props) {
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
                                <div className="px-5 py-2 flex items-center justify-between">
                                    <label
                                        htmlFor="1"
                                        className="flex items-center flex-1"
                                    >
                                        <input
                                            type="radio"
                                            name="mall"
                                            id="1"
                                        />
                                        <div className="ml-3">
                                            <h3 className="font-medium">
                                                Deli Park
                                            </h3>
                                            <p className="text-greys-600 text-sm">
                                                Rp. 50.000/each
                                            </p>
                                        </div>
                                    </label>
                                    <div
                                        onClick={() =>
                                            document
                                                .getElementById("my_modal_3")
                                                .showModal()
                                        }
                                        className="text-sm text-greys-600 cursor-pointer"
                                    >
                                        View Detail
                                    </div>
                                </div>
                                <div className="px-5 py-2 flex items-center justify-between">
                                    <label
                                        htmlFor="2"
                                        className="flex items-center flex-1"
                                    >
                                        <input
                                            type="radio"
                                            name="mall"
                                            id="2"
                                        />
                                        <div className="ml-3">
                                            <h3 className="font-medium">
                                                Centre Point
                                            </h3>
                                            <p className="text-greys-600 text-sm">
                                                Rp. 40.000/each
                                            </p>
                                        </div>
                                    </label>
                                    <div
                                        onClick={() =>
                                            document
                                                .getElementById("my_modal_3")
                                                .showModal()
                                        }
                                        className="text-sm text-greys-600 cursor-pointer"
                                    >
                                        View Detail
                                    </div>
                                </div>
                                <div className="px-5 py-2 flex items-center justify-between">
                                    <label
                                        htmlFor="3"
                                        className="flex items-center flex-1"
                                    >
                                        <input
                                            type="radio"
                                            name="mall"
                                            id="3"
                                        />
                                        <div className="ml-3">
                                            <h3 className="font-medium">
                                                Thamrin Plaza
                                            </h3>
                                            <p className="text-greys-600 text-sm">
                                                Rp. 30.000/each
                                            </p>
                                        </div>
                                    </label>
                                    <div
                                        onClick={() =>
                                            document
                                                .getElementById("my_modal_3")
                                                .showModal()
                                        }
                                        className="text-sm text-greys-600 cursor-pointer"
                                    >
                                        View Detail
                                    </div>
                                </div>
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
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.9690674614526!2d98.67183247396284!3d3.5945659502552667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131c416b88825%3A0xc035ba4fa455d423!2sDeliPark%20Mall%20Medan!5e0!3m2!1sen!2sid!4v1705812520341!5m2!1sen!2sid&zoom=15&disableDefaultUI=true"
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
                            <span className="text-sm">
                                Jl. Putri Hijau Dalam No.1 Blok OPQ, Kesawan,
                                Kec. Medan Bar., Kota Medan, Sumatera Utara
                                20111
                            </span>
                        </div>
                        <div className="flex">
                            <div className="text-greys-600 mr-3 mt-1 text-lg">
                                <IoCallOutline />
                            </div>
                            <span className="text-sm">(061) 88812888</span>
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
