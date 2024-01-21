import Input from "@/components/basic-ui/Input";
import Button from "@/components/basic-ui/Button";
import { NavLink } from "react-router-dom";
import { fetchSignIn } from "../api/auth";
import { useEffect, useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function SignIn() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [signIn, setSignIn] = useState(true);
    const [inPromise, setInPromise] = useState(false);
    const [typePassword, setTypePassword] = useState("password");
    useEffect(() => {
        if (isEmailValid && isPasswordValid) {
            setSignIn(false);
        }
    }, [isEmailValid, isPasswordValid]);
    function validateEmail(email) {
        setEmail(email);
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            return "Email is required";
        }
        if (!regex.test(email)) {
            return "Invalid email format";
        }
        setIsEmailValid(true);
        return "";
    }
    function validatePassword(password) {
        setPassword(password);
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!password) {
            setIsPasswordValid(false);
            return "Password is required";
        }
        if (!regex.test(password)) {
            setIsPasswordValid(false);
            return "Password must be at least 8 characters and contain at least one lowercase letter, one uppercase letter, and one digit";
        }
        setIsPasswordValid(true);
        return "";
    }
    const fetchDataUser = async (e) => {
        setInPromise(true);
        e.preventDefault();
        try {
            const response = await fetchSignIn({ email, password });
            setInPromise(false);
            if (response.status === 200) {
                Swal.fire({
                    title: "<h2>Sign In Success!</h2>",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1000,
                }).then(() => navigate("/"));
            }
        } catch (error) {
            setInPromise(false);
            console.error(error);
        }
    };
    return (
        <div className="w-full p-5">
            <div className="w-full">
                <div className="w-full flex justify-end">
                    <img
                        src="/logo/logo-2.png"
                        width={150}
                        alt="mamat-cinema-logo"
                    />
                </div>
                <div className="mt-[120px]">
                    <h1 className="text-4xl font-bold">Welcome Back!</h1>
                </div>
                <div className="mt-3">
                    <p className="text-base text-greys-600 font-medium">
                        Sign in to continue
                    </p>
                </div>
                <div className="mt-5">
                    <form action="" onSubmit={(e) => fetchDataUser(e)}>
                        <Input
                            placeholder={"Email"}
                            type={"email"}
                            parentMargin={"mt-4"}
                            id={"email"}
                            onChange={(e) => {
                                setEmailError(validateEmail(e.target.value));
                            }}
                        />
                        <p className="text-red-500 text-xs font-medium">
                            {emailError}
                        </p>
                        <div className="relative">
                            <Input
                                placeholder={"Password"}
                                type={typePassword}
                                parentMargin={"mt-4"}
                                id={"password"}
                                onChange={(e) => {
                                    setPasswordError(
                                        validatePassword(e.target.value)
                                    );
                                }}
                            />
                            <p className="text-red-500 text-xs font-medium">
                                {passwordError}
                            </p>
                            <label
                                className="absolute top-4 right-4"
                                htmlFor="password"
                            >
                                {typePassword === "password" ? (
                                    <LuEye
                                        onClick={() => setTypePassword("text")}
                                        className="text-xl text-greys-600 cursor-pointer"
                                    />
                                ) : (
                                    <LuEyeOff
                                        onClick={() =>
                                            setTypePassword("password")
                                        }
                                        className="text-xl text-greys-600 cursor-pointer"
                                    />
                                )}
                            </label>
                        </div>
                        <div className="mt-1">
                            <p className="cursor-pointer text-xs text-blacks-500 font-medium text-end">
                                Forgot Password?
                            </p>
                        </div>
                        <div className="mt-10">
                            <p className="text-center text-xs font-medium text-blacks-500">
                                Don’t have account?{" "}
                                <NavLink
                                    to={"/signup"}
                                    className="text-blues-500 cursor-pointer"
                                >
                                    Sign Up now
                                </NavLink>
                            </p>
                        </div>
                        <div className="mt-10">
                            <div>
                                <p className="text-center text-xs text-greys-600">
                                    or Sign Up with
                                </p>
                            </div>
                            <div className="flex justify-center mt-5 gap-8">
                                <div className="w-12 h-12 rounded-full bg-greys-500 flex justify-center items-center">
                                    <img src="/logo/google.png" alt="google" />
                                </div>
                                <div className="w-12 h-12 rounded-full bg-greys-500 flex justify-center items-center">
                                    <img
                                        src="/logo/facebook.png"
                                        alt="facebook"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <Button
                                className="w-full flex justify-center items-center"
                                disabled={signIn}
                                type={"submit"}
                            >
                                {inPromise ? (
                                    <div className="w-6 h-6 rounded-full border-t-4 border-t-slate-400 border-b-4 border-l-4 border-r-4 border-white animate-spin"></div>
                                ) : (
                                    "Sign In"
                                )}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
