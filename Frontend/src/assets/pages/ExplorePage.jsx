import React from "react";
import BottomNav from "../components/globle_Components/BottomNav";
import TopNav from "../components/globle_Components/TopNav";
import PostCard from "../components/globle_Components/PostCard";
import { Spacer, Card } from "@nextui-org/react";
import SideNav from "../components/globle_Components/SideNav";
import UserFeedContent from "./SubPages/UserFeedContent";
import ExploreContent from "./SubPages/ExploreContent";
import { useState, useEffect } from 'react';


export const ExplorePage = () => {

  function useWindowWidth() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowWidth;
  }
  const windowWidth = useWindowWidth();
  return (
    <div className="flex-col w-full">
      <div className="flex md:block">
      {windowWidth > 768 ?  <SideNav /> :null}
  
       

        <ExploreContent />
      </div>

      <div className=" tablet:!hidden">
      {windowWidth < 768 ?    <BottomNav /> :null}
    
      </div>
    </div>
  );
};
