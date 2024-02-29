import React, { useState } from "react";
import EditProfile from "../../components/UserProfile_components/EditProfile.jsx";
import Help from "../../components/setting_components/Help.jsx";
import Logout from "../../components/setting_components/Logout.jsx";
import { EditDocumentIcon } from "../../icons/Setting/EditDocumentIcon.jsx";
import { DeleteDocumentIcon } from "../../icons/Setting/DeleteDocumentIcon.jsx";
import { ResetPasswordIcon } from "../../icons/Setting/ResetPasswordIcon.jsx";
import { LogoutIcon } from "../../icons/Setting/LogoutIcon.jsx";
import { HelpIcon } from "../../icons/Setting/HelpIcon.jsx";
import { Listbox, ListboxItem, cn } from "@nextui-org/react";
import { ListboxWrapper } from "../../icons/Setting/ListboxWrapper.jsx";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { logout } from "../../redux/reducers/LogoutReducer";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SettingNav = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0";
  // const {onOpen} = useDisclosure();

  // State to track active section
  const [activeSection, setActiveSection] = useState(null);

  const handleLogout = () => {
    dispatch(logout())
      .then(() => {
        // Redirect or perform any other action after successful logout
        navigateTo("/Login")
        console.log("User logged out successfully!");
      })
      .catch((error) => {
        // Handle logout error
        console.error("Logout error:", error);
      });
  
    // Close the modal
    onOpenChange(false);
  };
  
  return (
    <div className="flex" style={{ gap: "6rem",width: "100%"  }}>
      <div >
        <ListboxWrapper>
          <Listbox variant="flat" aria-label="Listbox menu with descriptions">
            <ListboxItem
              key="edit"
              description="Allows You To Edit Profile"
              startContent={<EditDocumentIcon className={iconClasses} />}
              onClick={() => setActiveSection("edit")}
            >
              Edit Profile
            </ListboxItem>

            <ListboxItem
              key="reset"
              description="Allows to reset the password"
              startContent={<ResetPasswordIcon className={iconClasses} />}
              onClick={() => setActiveSection("reset")}
            >
              Reset Password
            </ListboxItem>

            <ListboxItem
              key="logout"
              description="Allows to exit the account"
              startContent={<LogoutIcon className={iconClasses} />}
              onPress={onOpen}
            >
              LogOut
              <Modal
                className="absolute top-1/2  "
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                isDismissable={false}
                isKeyboardDismissDisabled={true}
              >
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col gap-1">
                        Oh no! You are leaving........Are you sure?
                      </ModalHeader>

                      <ModalFooter>
                        <Button
                          color="danger"
                          variant="light"
                          onClick={onClose}
                        >
                          No, Just Kidding!
                        </Button>
                        <Button color="primary" onClick={handleLogout}>
                          Yes, Log me out!
                        </Button>
                      </ModalFooter>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </ListboxItem>

            <ListboxItem
              key="help"
              showDivider
              description="Contact Us, FAQ's"
              startContent={<HelpIcon className={iconClasses} />}
              onClick={() => setActiveSection("help")}
            >
              Help & Support
            </ListboxItem>

            <ListboxItem
              key="delete"
              className="text-danger"
              color="danger"
              description="Permanently delete the account"
              startContent={
                <DeleteDocumentIcon
                  className={cn(iconClasses, "text-danger")}
                />
              }
              onClick={() => setActiveSection("delete")}
            >
              Delete Account
            </ListboxItem>
          </Listbox>
        </ListboxWrapper>
      </div>

      <div style={{width:"full"}}>
        {/* Render content based on active section */}
        {activeSection === "edit" && (
          <div>
            <EditProfile />
          </div>
        )}
        {activeSection === "reset" && (
          <div>Reset Password Content Goes Here</div>
        )}
        {/* {activeSection === "logout" && (
          <div>
            <Logout />
          </div>
        )} */}
        {activeSection === "help" && (
          <div>
            <Help />
          </div>
        )}
        {activeSection === "delete" && <div>Delete Content Goes Here</div>}
      </div>
    </div>
  );
};

export default SettingNav;
