import React from "react";
import SideNav from "../components/globle_Components/SideNav";
import BottomNav from "../components/globle_Components/BottomNav";
import SettingNav from "../components/setting_components/SettingNav";
import TopNav from "../components/globle_Components/TopNav";

const SettingPage = () => {
    return (
        <div className="w-full">
            <div className="flex-col">
                <TopNav />

                <div className="flex max-w-full mr-6">
                    
                   
                    
                  
                    <SettingNav />
          

                </div>

                
            </div>
        </div>
    )
}

export default SettingPage;