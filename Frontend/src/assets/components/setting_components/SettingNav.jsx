import React, { useState } from "react";
import  EditProfile  from "../../components/UserProfile_components/EditProfile.jsx";
import  Help  from "../../components/setting_components/Help.jsx";
import { EditDocumentIcon } from "../../icons/Setting/EditDocumentIcon.jsx";
import { DeleteDocumentIcon } from "../../icons/Setting/DeleteDocumentIcon.jsx";
import { ResetPasswordIcon } from "../../icons/Setting/ResetPasswordIcon.jsx";
import { LogoutIcon } from "../../icons/Setting/LogoutIcon.jsx";
import { HelpIcon } from "../../icons/Setting/HelpIcon.jsx";
import { Listbox, ListboxItem, cn } from "@nextui-org/react";
import { ListboxWrapper } from "../../icons/Setting/ListboxWrapper.jsx";

const SettingNav = () => {
    const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";

    // State to track active section
    const [activeSection, setActiveSection] = useState(null);

    return (
        <div className="flex" style={{gap:"6rem"}}>
            <div style={{width:"25%"}}>
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
                            onClick={() => setActiveSection("logout")}
                        >
                            Logout
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
                            startContent={<DeleteDocumentIcon className={cn(iconClasses, "text-danger")} />}
                            onClick={() => setActiveSection("delete")}
                        >
                            Delete file
                        </ListboxItem>
                    </Listbox>
                </ListboxWrapper>
            </div>

            <div style={{width:"100%"}}>
                {/* Render content based on active section */}
                {activeSection === "edit" && (
                    <div><EditProfile /></div>
                )}
                {activeSection === "reset" && (
                    <div>Reset Password Content Goes Here</div>
                )}
                {activeSection === "logout" && (
                    <div>Logout Content Goes Here</div>
                )}
                {activeSection === "help" && (
                    <div><Help /></div>
                )}
                {activeSection === "delete" && (
                    <div>Delete Content Goes Here</div>
                )}
            </div>
        </div>
    )
}

export default SettingNav;