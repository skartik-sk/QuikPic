import React, { useState } from "react";
import {
    Input, Button, NavbarItem,
    Switch,
    Navbar,
} from "@nextui-org/react";
import { EyeFilledIcon } from "../../icons/LoginSignupForm/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../../icons/LoginSignupForm/EyeSlashFilledIcon";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../redux/reducers/ResetPasswordReducer";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatchError, setPasswordMatchError] = useState('');

    const dispatch = useDispatch();
    const { loading} = useSelector((state) => state.resetpassword);

    const toggleVisibility = () => setIsVisible(!isVisible);

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const { id, token } = useParams();

    const handleSubmit = () => {
        if (password !== confirmPassword) {
            setPasswordMatchError("Passwords don't match");
        } else {
            // Passwords match, dispatch reset password action
            // dispatch(resetPassword({ id: , token: resetToken, password }));
            dispatch(resetPassword({ id: id, token, password }));
        }
    };

    return (

        <div style={{
            // display: "flex",
            // flexDirection: "column",
            // alignItems: "center",
            // justifyContent: "center",
            // minHeight: "100vh"
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "25%",
            marginTop: "11rem"
        }}>
            <div>
                <div>
                    <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", paddingBottom: "13px" }}>Create new password</h1>

                    <h3 style={{ fontSize: ".9rem" }}>Your new password must be different from previous used passwords.</h3>
                </div>

                <div style={{ marginTop: "1.6rem" }}>
                    <div style={{ marginBottom: '2rem' }}>
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
                            className="max-w-xs"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>

                    <div style={{ marginBottom: '11px' }}>
                        <Input
                            label="Confirm Password"
                            variant="bordered"
                            placeholder="Enter your new password"
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
                            className="max-w-xs"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                        />
                    </div>
                </div>

                <div style={{ fontSize: "13px", marginBottom: '1.8rem' }}>
                    <h3>Both passwords must match.</h3>
                </div>

                {passwordMatchError && (
                    <div style={{ fontSize: "13px", marginBottom: '1.8rem', color: 'red' }}>
                        <h3>{passwordMatchError}</h3>
                    </div>
                )}

                <div>
                    <Button onClick={handleSubmit} color="primary" variant="shadow" style={{
                        width: "100%"
                    }} disabled={loading}>
                        {loading ? 'Loading...' : 'Reset Password'}
                    </Button>
                </div>
            </div >
        </div>
    )
}

export default ResetPassword;