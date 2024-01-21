//components
import { NowPlaying, ComingSoon, OnlineMovies } from "@/components/home";
import Input from "@/components/basic-ui/Input";
import Swal from "sweetalert2";
import Footer from "@/components/Footer";

//icons
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";
import * as jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

export default function Home() {
    // const [name, setName] = useState("");
    const [token, setToken] = useState("");
    const [expire, setExpire] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        refreshToken();
    }, []);
    const refreshToken = async () => {
        try {
            const response = await axios.get("http://localhost:3000/api/token");
            setToken(response.data.accessToken);
            const decoded = jwt_decode.jwtDecode(response.data.accessToken);
            // setName(decoded.name);
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
                config.headers.Authorization = `Bearer ${response.data.accessToken}`;
                setToken(response.data.accessToken);
                const decoded = jwt_decode.jwtDecode(response.data.accessToken);
                // setName(decoded.name);
                setExpire(decoded.exp);
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
    const logout = async () => {
        try {
            await axios.delete("http://localhost:3000/api/logout");
            navigate("/signin");
        } catch (error) {
            console.error(error);
        }
    };

    const cek = async () => {
        try {
            const response = await axiosJWT.get(
                "http://localhost:3000/api/cek-login",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            {/* header */}
            {/* <button onClick={cek}>cek login</button> */}
            <header className="px-3 py-4 flex items-center mb-3">
                <Input
                    placeholder="Movie interest?"
                    parentClass="flex-1"
                    parentMargin="m-0"
                ></Input>
                <IoIosNotificationsOutline className="text-2xl m-2" />
                <IoLogOutOutline
                    onClick={() => {
                        Swal.fire({
                            title: "<h2>Sign Out<h2/>",
                            text: "Are you sure about signing out?",
                            icon: "question",
                            focusConfirm: true,
                            showCancelButton: true,
                            confirmButtonText: "Sign Out",
                            confirmButtonColor: "#e93c58",
                            cancelButtonColor: "#5c5e63",
                            reverseButtons: true,
                        }).then(function (dismiss) {
                            if (dismiss.isConfirmed === true) {
                                logout();
                            }
                        });
                    }}
                    className="text-2xl m-2 text-red-500 cursor-pointer"
                />
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
