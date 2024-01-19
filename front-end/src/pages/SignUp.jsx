import Input from "@/components/basic-ui/Input";
import Button from "@/components/basic-ui/Button";
import { NavLink } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [agree, setAgree] = useState(true);

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const formData = useMemo(() => new FormData(), []);
    useEffect(() => {
        if (name) {
            if (formData.has("name")) {
                formData.set("name", name);
            } else {
                formData.append("name", name);
            }
        }
    }, [name, formData]);
    useEffect(() => {
        if (email) {
            if (formData.has("email")) {
                formData.set("email", email);
            } else {
                formData.append("email", email);
            }
        }
    }, [email, formData]);
    useEffect(() => {
        if (password) {
            if (formData.has("password")) {
                formData.set("password", password);
            } else {
                formData.append("password", password);
            }
        }
    }, [password, formData]);
    function validateName(name) {
        const regex = /^[a-zA-Z .]+$/;

        if (!name) {
            return "Name is required";
        }

        if (!regex.test(name)) {
            return "Invalid characters in name";
        }

        setName(name);

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

        return "";
    }

    function validatePassword(password) {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

        if (!password) {
            return "Password is required";
        }

        if (!regex.test(password)) {
            return "Password must be at least 8 characters and contain at least one lowercase letter, one uppercase letter, and one digit";
        }

        setPassword(password);

        return "";
    }

    function validateConfirmPassword(confirmPassword, password) {
        if (!confirmPassword) {
            return "Confirm Password is required";
        }

        if (confirmPassword !== password) {
            return "Passwords do not match";
        }

        setConfirmPassword(confirmPassword);

        return "";
    }
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
                    <form action="">
                        <Input
                            placeholder={"Full Name"}
                            parentMargin={"mb-0"}
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
                            onChange={(e) => {
                                setEmailError(validateEmail(e.target.value));
                            }}
                        />
                        <p className="text-red-500 text-xs font-medium">
                            {emailError}
                        </p>
                        <Input
                            placeholder={"Password"}
                            type={"password"}
                            parentMargin={"mt-4"}
                            onChange={(e) => {
                                setPasswordError(
                                    validatePassword(e.target.value)
                                );
                            }}
                        />
                        <p className="text-red-500 text-xs font-medium">
                            {passwordError}
                        </p>
                        <Input
                            placeholder={"Confirm Password"}
                            type={"password"}
                            parentMargin={"mt-4"}
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
                        <div className="flex items-center mt-5">
                            <input
                                type="checkbox"
                                id="aggrement"
                                disabled
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
                                className="w-full"
                                disabled={agree}
                                onClick={() => console.log("able")}
                            >
                                Sign Up
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
