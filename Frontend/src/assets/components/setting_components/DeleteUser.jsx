import React ,{useState} from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button, useDisclosure } from "@nextui-org/react";
import { deleteuser } from "../../redux/reducers/DeleteUserReducer";
import { logout } from "../../redux/reducers/LogoutReducer";

const DeleteUser = () => {
    const { onOpenChange } = useDisclosure();
    const dispatch = useDispatch();
    const navigateTo = useNavigate();

    // const profileDeleteStatus = useSelector(state => state.deleteuser);

    const handleDeleteProfile = async () => {
        try{

            await dispatch(deleteuser())
            dispatch(logout())
            console.log("Profile deleted successfully!");
        }
        catch(err){
            console.log("Profile deletion error:", err);
        }
   
        

        // Close the modal
        onOpenChange(false);
    };
    return (
        <>
            <div className="w-full flex flex-col" style={{ gap: "1.5rem",  marginBottom: "3rem" }}>
                <div>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: "bolder" }}>Delete Account</h2>
                </div>

                <div>
                    <h3 style={{ fontSize: "1.1rem" , paddingBottom:'1rem'}}>Are you sure you want to delete your account?</h3>
                    <div style={{display:'flex', flexDirection:"row", gap:"1rem"}}>
                        <Button color="primary" onClick={handleDeleteProfile}>
                            Yes, Delete my account!
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeleteUser