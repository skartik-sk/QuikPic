import React from "react";
import TopNav from "../../components/globle_Components/TopNav";
import ProfileDetails from "../../components/UserProfile_components/ProfileDetails";
import PostCollection from "../../components/UserProfile_components/PostCollection";

const UserProfileContent = () => {
    return (
        <div className="w-full flex-col">
            <TopNav />
            <ProfileDetails />
            <PostCollection />
        </div>
    )
}

export default UserProfileContent;