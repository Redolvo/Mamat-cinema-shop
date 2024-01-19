import Input from "@/components/basic-ui/Input";
import Button from "@/components/basic-ui/Button";
import { NavLink } from "react-router-dom";

export default function SignIn() {
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
                    <form action="">
                        <Input placeholder={"Email"} type={"email"} />
                        <Input
                            placeholder={"Password"}
                            type={"password"}
                            parentMargin={"mb-0"}
                        />
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
                            <Button className="w-full">Sign In</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
