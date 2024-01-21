// import { NavLink } from "react-router-dom";

//components
import Footer from "@/components/Footer";
import { ChooseDate, ChooseSeats } from "@/components/checkout-ticket";

//icons
import { GoArrowLeft } from "react-icons/go";

import axios from "axios";
import * as jwt_decode from "jwt-decode";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function CheckoutTicket() {
    const { id } = useParams();
    const [expire, setExpire] = useState("");
    const [token, setToken] = useState("");
    const [seat_number, setSeat] = useState("");
    const [schedule_id, setSche] = useState("");
    const [price, setPrice] = useState("");
    const changeSeat = (value) => {
        setSeat(value);
    };
    const changeDate = (value) => {
        setSche(value);
    };
    const changePrice = (value) => {
        setPrice(value);
    };
    const navigate = useNavigate();
    useEffect(() => {
        refreshToken();
    }, []);
    const refreshToken = async () => {
        try {
            const response = await axios.get("http://localhost:3000/api/token");
            const decoded = jwt_decode.jwtDecode(response.data.accessToken);
            setToken(response.data.accessToken);
            setExpire(decoded.exp);
        } catch (error) {
            navigate("/signin");
            console.error(error);
        }
    };

    const axiosJWT = axios.create();

    axiosJWT.interceptors.request.use(
        async (config) => {
            const currentDate = new Date();
            if (expire * 1000 < currentDate.getTime()) {
                const response = await axios.get(
                    "http://localhost:3000/api/token"
                );
                setToken(response.data.accessToken);
                config.headers.Authorization = `Bearer ${response.data.accessToken}`;
                const decoded = jwt_decode.jwtDecode(response.data.accessToken);
                setExpire(decoded.exp);
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    const createTicket = async () => {
        try {
            const response = await axios.post(
                "http://localhost:3000/api/submit-ticket",
                { seat_number, schedule_id },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            if (response) {
                if (response.status === 201) {
                    Swal.fire({
                        title: "<h2>Account Created</h2>",
                        text: `${response.message}`,
                        icon: "success",
                        confirmButtonColor: "#003566",
                        confirmButtonText: "Ok",
                    }).then(() => navigate("/ticket-list"));
                }
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleCreateTicket = () => {
        createTicket;
    };
    return (
        <>
            {/* header */}
            <header className="px-3 py-4 flex items-center mb-3">
                <div
                    onClick={() => navigate(`/movie/${id}`)}
                    className="bg-white p-3 rounded cursor-pointer"
                >
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
                <ChooseDate {...{ changeDate, changePrice }} />
                <ChooseSeats
                    {...{ changeSeat, seat_number, price, handleCreateTicket }}
                />
            </div>

            {/* footer */}
            <Footer />
        </>
    );
}
