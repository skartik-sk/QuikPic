import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

const Logout = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div style={{display:"flex", flexDirection:"column", gap:"3.5rem"}}>
            <div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "bolder" }}>Logout</h2>
            </div>

            <div>
                <Button onPress={onOpen}>Click Here To Continue</Button>
                <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true}>
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1">Oh no! You are leaving........Are you sure?</ModalHeader>

                                <ModalFooter>
                                    <Button color="danger" variant="light" onPress={onClose}>
                                        No, Just Kidding!
                                    </Button>
                                    <Button color="primary" onPress={onClose}>
                                        Yes, Log me out!
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </div>
        </div>
    )
}
export default Logout