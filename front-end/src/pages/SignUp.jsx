import Input from "@/components/basic-ui/Input";
import Button from "@/components/basic-ui/Button";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchSignUp } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { LuEye, LuEyeOff } from "react-icons/lu";
import Swal from "sweetalert2";

export default function SignUp() {
    const navigate = useNavigate();
    const [full_name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [agree, setAgree] = useState(true);
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [isNameValid, setIsNameValid] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [checkboxDisabled, setCheckboxDisabled] = useState(true);
    const [typePassword, setTypePassword] = useState("password");
    const [inPromise, setInPromise] = useState(false);
    const [typeConfirmPassword, setTypeConfirmPassword] = useState("password");
    useEffect(() => {
        if (isNameValid && isEmailValid && isPasswordValid) {
            setCheckboxDisabled(false);
        }
    }, [isNameValid, isEmailValid, isPasswordValid]);
    function validateName(name) {
        const regex = /^[a-zA-Z .]+$/;
        if (!name) {
            return "Name is required";
        }
        if (!regex.test(name)) {
            return "Invalid characters in name";
        }
        setName(name);
        setIsNameValid(true);
        return "";
    }
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            return "Email is required";
        }
        if (!regex.test(email)) {
            return "Invalid email format";
        }
        setEmail(email);
        setIsEmailValid(true);
        return "";
    }
    function validatePassword(password, confirmPassword) {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!password) {
            setIsPasswordValid(false);
            if (confirmPassword) {
                setConfirmPasswordError("Passwords do not match");
            }
            return "Password is required";
        }
        if (!regex.test(password)) {
            setIsPasswordValid(false);
            if (confirmPassword) {
                setConfirmPasswordError("Passwords do not match");
            }
            return "Password must be at least 8 characters and contain at least one lowercase letter, one uppercase letter, and one digit";
        }
        if (password === confirmPassword) {
            setConfirmPasswordError("");
            setIsPasswordValid(true);
        } else {
            if (confirmPassword) {
                setConfirmPasswordError("Passwords do not match");
            }
        }
        setPassword(password);

        return "";
    }
    function validateConfirmPassword(confirmPassword, password) {
        setConfirmPassword(confirmPassword);
        if (!confirmPassword) {
            setIsPasswordValid(false);
            return "Confirm Password is required";
        }
        if (confirmPassword !== password) {
            setIsPasswordValid(false);
            return "Passwords do not match";
        }
        setConfirmPassword(confirmPassword);
        setIsPasswordValid(true);
        return "";
    }
    const fetchDataUser = async (e) => {
        setInPromise(true);
        e.preventDefault();
        try {
            const response = await fetchSignUp({
                full_name,
                email,
                password,
            });
            if (response.status === 201) {
                Swal.fire({
                    title: "<strong>Akun berhasil terdaftar</strong>",
                    icon: "success",
                    html: "Klik tombol dibawah ini untuk melanjutkan ke halaman sign in.",
                    focusConfirm: true,
                    confirmButtonText: "Sign In Now!",
                }).then(() => navigate("/signin"));
            }
            setInPromise(false);
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
                <div className="mt-[60px]">
                    <h1 className="text-4xl font-bold">Welcome New User!</h1>
                </div>
                <div className="mt-3">
                    <p className="text-base text-greys-600 font-medium">
                        Sign up to join
                    </p>
                </div>
                <div className="mt-5">
                    <form action="" onSubmit={(e) => fetchDataUser(e)}>
                        <Input
                            placeholder={"Full Name"}
                            parentMargin={"mb-0"}
                            id={"name"}
                            onChange={(e) => {
                                setNameError(validateName(e.target.value));
                            }}
                        />
                        <p className="text-red-500 text-xs font-medium">
                            {nameError}
                        </p>
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
                                        validatePassword(
                                            e.target.value,
                                            confirmPassword
                                        )
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
                        <div className="relative">
                            <Input
                                placeholder={"Confirm Password"}
                                type={typeConfirmPassword}
                                parentMargin={"mt-4"}
                                id={"confirm-password"}
                                onChange={(e) => {
                                    setConfirmPasswordError(
                                        validateConfirmPassword(
                                            e.target.value,
                                            password
                                        )
                                    );
                                }}
                            />
                            <p className="text-red-500 text-xs font-medium">
                                {confirmPasswordError}
                            </p>
                            <label
                                className="absolute top-4 right-4"
                                htmlFor="confirm-password"
                            >
                                {typeConfirmPassword === "password" ? (
                                    <LuEye
                                        onClick={() =>
                                            setTypeConfirmPassword("text")
                                        }
                                        className="text-xl text-greys-600 cursor-pointer"
                                    />
                                ) : (
                                    <LuEyeOff
                                        onClick={() =>
                                            setTypeConfirmPassword("password")
                                        }
                                        className="text-xl text-greys-600 cursor-pointer"
                                    />
                                )}
                            </label>
                        </div>
                        <div className="flex items-center mt-5">
                            <input
                                type="checkbox"
                                id="aggrement"
                                disabled={checkboxDisabled}
                                onChange={(e) => setAgree(!e.target.checked)}
                            />
                            <label
                                htmlFor="aggrement"
                                className="ml-2 text-xs text-blacks-500 font-medium"
                            >
                                I agree to the Term of Service
                            </label>
                        </div>
                        <div className="mt-10">
                            <p className="text-center text-xs font-medium text-blacks-500">
                                Already have account?{" "}
                                <NavLink
                                    to={"/signin"}
                                    className="text-blues-500 cursor-pointer"
                                >
                                    Sign In now
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
                                type={"submit"}
                                disabled={agree}
                            >
                                {inPromise ? (
                                    <div className="w-6 h-6 rounded-full border-t-4 border-t-slate-400 border-b-4 border-l-4 border-r-4 border-white animate-spin"></div>
                                ) : (
                                    "Sign Up"
                                )}
                            </Button>
                        </div>
                    </form>
                    {/* <button
                        onClick={() => {
                            Swal.fire({
                                title: "<strong>Akun berhasil terdaftar</strong>",
                                icon: "success",
                                html: "Klik tombol dibawah ini untuk melanjutkan ke halaman sign in.",
                                focusConfirm: true,
                                confirmButtonText: "Sign In Now!",
                            }).then(() => navigate("/signin"));
                        }}
                    >
                        test
                    </button> */}
                </div>
            </div>
        </div>
    );
}
