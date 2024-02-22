import React from "react";
import SideNav from "../components/globle_Components/SideNav";
import BottomNav from "../components/globle_Components/BottomNav";
import UserProfileContent from "./SubPages/UserProfileContent";

const UserProfilePage = () => {
  return (
    <div>
      <div className="flex-col">
        <div className="flex ">
          <div
            className="
            md:flex"
          >
            <SideNav />
          </div>

          <UserProfileContent />
        </div>

        <div className="sticky bottom-0 md:!hidden">
          <BottomNav />
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;