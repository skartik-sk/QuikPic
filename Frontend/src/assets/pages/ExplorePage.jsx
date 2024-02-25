import React from "react";
import BottomNav from "../components/globle_Components/BottomNav";
import TopNav from "../components/globle_Components/TopNav";
import PostCard from "../components/globle_Components/PostCard";
import { Spacer, Card } from "@nextui-org/react";
import SideNav from "../components/globle_Components/SideNav";
import UserFeedContent from "./SubPages/UserFeedContent";

export const ExplorePage = () => {
  return (
    <div className="flex-col">
      <div className="flex md:block">
        <SideNav />

        <UserFeedContent />
      </div>

      <div className=" tablet:!hidden">
        <BottomNav />
      </div>
    </div>
  );
};
