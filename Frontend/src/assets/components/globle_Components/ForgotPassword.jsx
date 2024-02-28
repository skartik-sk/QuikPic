import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Link } from "@nextui-org/react";
import { MailIcon } from "../../icons/LoginSignupForm/MailIcon";
import { useSelector, useDispatch } from "react-redux";
import { forgotPassword } from "../../redux/reducers/ForgotPasswordReducer";

const ForgotPassword = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.forgotpassword.loading);
    const error = useSelector((state) => state.forgotpassword.error);
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(forgotPassword(email));
    };

    return (
        <>
            <Link onPress={onOpen} color="primary">Forgot Password</Link>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                placement="top-center"
                style={{
                    marginLeft: "1rem",
                    marginRight: "1rem"
                }}
            >
                <ModalContent sty>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">To reset your password, enter your email below:</ModalHeader>
                            <ModalBody>
                                <Input
                                    autoFocus
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    endContent={
                                        <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    label="Email"
                                    placeholder="Enter your email"
                                    variant="bordered"
                                />
                                {error && <p className="text-red-500">{error}</p>}
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="flat" onClick={onClose} disabled={loading}>
                                    Close
                                </Button>
                                <Button color="primary" onClick={handleSubmit} disabled={loading}>
                                    {loading ? "Submitting..." : "Submit"}
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

export default ForgotPassword;
