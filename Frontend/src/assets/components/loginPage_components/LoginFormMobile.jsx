import React from "react";
import { useState } from 'react';
import { Input, Link, Divider, Button, Avatar, NavbarItem, Switch, Navbar } from "@nextui-org/react";
import { MailIcon } from '../../icons/LoginSignupForm/MailIcon';
import { EyeFilledIcon } from "../../icons/LoginSignupForm/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../../icons/LoginSignupForm/EyeSlashFilledIcon";
import { useTheme } from "next-themes";
import { SunIcon } from "../../icons/Navbar/SunIcon";
import { MoonIcon } from "../../icons/Navbar/Moonicon";


const LoginFormMobile = () => {
    const [email, setEmail] = useState('');
    const [isInvalid, setIsInvalid] = useState(false);
    const { theme, setTheme } = useTheme();

    const handleChange = (event) => {
        setEmail(event.target.value);
    };

    const handleBlur = () => {
        // Check if the email is valid when the user finishes writing
        const isValidEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email);
        setIsInvalid(!isValidEmail);
    };

    const [isVisible, setIsVisible] = React.useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <div className="w-full flex flex-row">

            <div className=" hidden md:flex flex-1 ">
                <img className="w-full h-full" src="https://img.freepik.com/free-vector/flat-geometric-mosaic-pattern-design_23-2149265253.jpg?t=st=1708605617~exp=1708609217~hmac=fc3c7fa167553102f487104e1f666002f7ae4f1696bda2fe93b053c25d76507a&w=740" alt="" />
            </div>


            <div className="flex-1 flex-col">
                <div style={{ paddingLeft: "3rem", paddingRight: "3rem", paddingTop: "4rem" }} className="flex w-full h-screen flex-col md:flex-nowrap mb-2 md:mb-0 gap-4 ">

                    <div className="flex flex-row items-center px-8" style={{ marginBottom: "1.8rem", gap: ".8rem" }}>
                        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" size="md"  style={{width:"2.8rem", height:"2.2rem", borderRadius:"50%"}}/>
                        <h2>Quipify</h2>
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

                    <div className="py-4 text-xl font-semibold">
                        <h1>Nice to see you again!</h1>
                    </div>

                    <Input
                        type="email"
                        label="Email"
                        variant="bordered"
                        placeholder="Enter your email"
                        className="md:max-w-xs"
                        value={email}
                        onChange={handleChange}
                        onBlur={handleBlur}
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

                    <div className="flex justify-end md:max-w-xs" style={{ paddingBottom: "1rem" }}>
                        <Link href="#" size="sm" underline="active">Forgot Password</Link>
                    </div>

                    <div>
                        <Button className="w-full md:max-w-xs" color="primary" variant="shadow">
                            Login
                        </Button>
                    </div>

                    <div className="my-1 md:max-w-xs w-full">
                        <Divider className="my-1" />
                    </div>

                    <div className="flex justify-center">
                        <h3>Don't have an account? <Link href="/Signup" size="md" underline="active">Signup</Link></h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginFormMobile;