import Input from "../components/basic-ui/Input";

const SignUp = () => {
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
                    <h1 className="text-2xl font-bold w-1/2">
                        Welcome New User!
                    </h1>
                </div>
                <div className="mt-3">
                    <p className="text-base text-greys-600">Sign up to join</p>
                </div>
                <div className="mt-5">
                    <form action="">
                        <Input placeholder={"Full Name"} className={"mt-4"} />
                        <Input
                            placeholder={"Email"}
                            type={"email"}
                            className={"mt-4"}
                        />
                        <Input
                            placeholder={"Password"}
                            type={"password"}
                            className={"mt-4"}
                        />
                        <Input
                            placeholder={"Confirm Password"}
                            type={"password"}
                            className={"mt-4"}
                        />
                        <div className="flex items-center">
                            <input type="checkbox" id="aggrement" />
                            <label htmlFor="aggrement" className="ml-2">
                                I agree to the Term of Service
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
