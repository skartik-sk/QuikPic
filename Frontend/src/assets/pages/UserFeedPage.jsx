import React from "react";
import BottomNav from "../components/globle_Components/BottomNav";
import TopNav from "../components/globle_Components/TopNav";
import PostCard from "../components/globle_Components/PostCard";
import { Spacer } from "@nextui-org/react";

export const UserFeedPage = () => {
  return (
    <div>
      <TopNav />
      <div className="flex">
        <PostCard /><Spacer x={4} /><PostCard />
      </div>
      <div className="sticky bottom-0">
        <BottomNav />
      </div>
    </div>
  );
};
