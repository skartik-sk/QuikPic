import React from "react";
import { EditDocumentIcon } from "../../icons/Setting/EditDocumentIcon.jsx";
import { DeleteDocumentIcon } from "../../icons/Setting/DeleteDocumentIcon.jsx";
import { ResetPasswordIcon } from "../../icons/Setting/ResetPasswordIcon.jsx";
import { LogoutIcon } from "../../icons/Setting/LogoutIcon.jsx";
import { HelpIcon } from "../../icons/Setting/HelpIcon.jsx";
import {Listbox, ListboxItem, cn} from "@nextui-org/react";
import {ListboxWrapper} from "../../icons/Setting/ListboxWrapper.jsx";

const SettingNav = () => {
    const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";

    return (
        <div>
            <ListboxWrapper>
                <Listbox variant="flat" aria-label="Listbox menu with descriptions">
                    <ListboxItem
                        key="edit"
                        description="Allows You To Edit Profile"
                        startContent={<EditDocumentIcon className={iconClasses} />}
                    >
                        Edit Profile
                    </ListboxItem>
                    <ListboxItem
                        key="edit"
                        description="Allows to reset the password"
                        startContent={<ResetPasswordIcon className={iconClasses} />}
                    >
                        Reset Password
                    </ListboxItem>
                    <ListboxItem
                        key="logout"
                        description="Allows to exit the account"
                        startContent={<LogoutIcon className={iconClasses} />}
                    >
                        Logout
                    </ListboxItem>
                    <ListboxItem
                        key="help"
                        showDivider
                        description="Contact Us, FAQ's"
                        startContent={<HelpIcon className={iconClasses} />}
                    >
                        Help & Support
                    </ListboxItem>
                    <ListboxItem
                        key="delete"
                        className="text-danger"
                        color="danger"
                        description="Permanently delete the account"
                        startContent={<DeleteDocumentIcon className={cn(iconClasses, "text-danger")} />}
                    >
                        Delete file
                    </ListboxItem>
                </Listbox>
            </ListboxWrapper>
        </div>
    )
}

export default SettingNav;