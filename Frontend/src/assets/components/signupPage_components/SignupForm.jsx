import React from "react";
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Input, Link, Divider, Button, Avatar, NavbarItem, Switch, Navbar } from "@nextui-org/react";
import { MailIcon } from '../../icons/LoginSignupForm/MailIcon';
import { EyeFilledIcon } from "../../icons/LoginSignupForm/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../../icons/LoginSignupForm/EyeSlashFilledIcon";
import { UsernameIcon } from "../../icons/LoginSignupForm/UsernameIcon";
import { useTheme } from "next-themes";
import { SunIcon } from "../../icons/Navbar/SunIcon";
import { MoonIcon } from "../../icons/Navbar/Moonicon";
import SignupReducer, { signup } from "../../redux/reducers/SignupReducer";
import { useNavigate } from "react-router-dom";


const SignupForm = () => {
    // const [email, setEmail] = useState('');
    // const [isInvalid, setIsInvalid] = useState(false);
    // const { theme, setTheme } = useTheme();

    // const handleChange = (event) => {
    //     setEmail(event.target.value);
    // };

    // // const handleBlur = () => {
    // //     // Check if the email is valid when the user finishes writing
    // //     const isValidEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email);
    // //     setIsInvalid(!isValidEmail);
    // // };

    // const [isVisible, setIsVisible] = React.useState(false);

    // const toggleVisibility = () => setIsVisible(!isVisible);

    // const dispatch = useDispatch();
    // const result = useSelector((state) => state.login.data);
    // const navigate = useNavigate();

    // const handleChangepass = (event) => {
    //     setPassword(event.target.value);
    //     // console.log(email, password)
    // };

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isInvalid, setIsInvalid] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const { theme, setTheme } = useTheme();
    const dispatch = useDispatch();
    const result = useSelector((state) => state.signup.data);
    const loading = useSelector((state) => state.signup.loading);
    const navigate = useNavigate();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const toggleVisibility = () => setIsVisible(!isVisible);
    const Signup = (e) => {
        e.preventDefault();

        dispatch(signup({ username, email, password }));
        if (result.message === "Signup successful") {
            localStorage.setItem("user", result.user);
            // navigate("/")
        }
    };

    if (loading === false) {
        navigate("/Explore")
    }
    // React.useEffect(() => {
    //     if (result && result.message === "Signup successful") {
    //       localStorage.setItem("user", result.user);
    //       navigate("/Login");
    //     }
    //   }, [result, navigate]);

    return (
        <div className="w-full flex flex-row">

            <div className="flex flex-1 ">
                <img className="w-full h-full bg-cover" src="https://img.freepik.com/free-vector/flat-geometric-mosaic-pattern-design_23-2149280518.jpg?w=740&t=st=1709113061~exp=1709113661~hmac=05739887c59d9362e9533c3d458ed51f08c520282d5b23d509f4c440a4c6c15c" alt="" />
            </div>


            <div className="flex-1 flex-col">
                <div style={{ paddingLeft: "6rem", paddingRight: "6rem", paddingTop: "4rem" }} className="flex w-full h-screen flex-col md:flex-nowrap mb-2 md:mb-0 gap-4 ">

                    <div className="flex flex-row items-center px-8" style={{ marginBottom: "1.8rem", gap: ".8rem" }}>
                        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" size="md" style={{ width: "2.8rem", height: "2.2rem", borderRadius: "50%" }} />
                        <h2>Quipify</h2>
                        <div >
                            <Navbar >
                                <NavbarItem>
                                    <Switch
                                        defaultSelected
                                        size="md"
                                        color="success"
                                        startContent={<SunIcon />}
                                        endContent={<MoonIcon />}
                                        onChange={(e) => {
                                            theme === "light" ? setTheme("dark") : setTheme("light");
                                        }}
                                    ></Switch>
                                </NavbarItem>
                            </Navbar>
                        </div>
                    </div>


                    <div className="py-4 text-xl font-semibold">
                        <h1>Join us today!</h1>
                    </div>

                    <Input
                        type="username"
                        label="Username"
                        variant="bordered"
                        placeholder="Enter your name"
                        value={username}
                        onChange={handleUsernameChange}
                        className="md:max-w-xs"
                        // value={username}
                        endContent={
                            <UsernameIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                        }
                    />
                    <Input
                        type="email"
                        label="Email"
                        variant="bordered"
                        placeholder="Enter your email"
                        className="md:max-w-xs"
                        value={email}
                        onChange={handleEmailChange}
                        // onBlur={handleBlur}
                        endContent={
                            <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                        }

                        isInvalid={isInvalid}
                        errorMessage={isInvalid ? "Please enter a valid email" : null}
                    />
                    <Input
                        label="Password"
                        variant="bordered"
                        placeholder="Enter your password"
                        onChange={handlePasswordChange}
                        value={password}
                        endContent={
                            <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                {isVisible ? (
                                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                ) : (
                                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                )}
                            </button>
                        }

                        type={isVisible ? "text" : "password"}
                        className="md:max-w-xs"

                    />

                    <div>
                        <Button className="w-full md:max-w-xs"
                            color="primary"
                            variant="shadow"
                            onClick={Signup}>
                            Signup
                        </Button>
                    </div>

                    <div className="my-1 md:max-w-xs w-full">
                        <Divider className="my-1" />
                    </div>

                    <div className="flex justify-center">
                        <h3>Already have an account? {" "}<Link href="/Login" size="md" underline="active">Login</Link></h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupForm;