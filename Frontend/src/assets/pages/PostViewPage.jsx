import React from "react";
import BottomNav from "../components/globle_Components/BottomNav";

import SideNav from "../components/globle_Components/SideNav";
import UserFeedContent from "./SubPages/UserFeedContent";
import PostViewCentent from "./SubPages/PostViewCentent";
import SideNav_expanded from "../components/globle_Components/SideNav_expanded";
const PostViewPage = () => {
  return (
    <div className="flex-col">
      <div className="flex flex-row md:block">
        {/* <SideNav /> */}

        <PostViewCentent />
      </div>

      <div className="sticky bottom-0 md:!hidden">
        <BottomNav />
      </div>
    </div>
  );
};

export default PostViewPage;
