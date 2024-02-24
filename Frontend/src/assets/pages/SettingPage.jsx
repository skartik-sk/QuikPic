import React from "react";
import SideNav from "../components/globle_Components/SideNav";
import BottomNav from "../components/globle_Components/BottomNav";
import SettingNav from "../components/setting_components/SettingNav";
import TopNav from "../components/globle_Components/TopNav";

const SettingPage = () => {
    return (
        <div>
            <div className="flex-col">
                <TopNav />

                <div className="flex max-w-full">
                    
                    <div className="md:flex">
                        <SideNav />
                    </div>
                    
                    <div style={{width:"100%"}}>
                    <SettingNav />
                    </div>

                </div>

                <div className="sticky bottom-0 md:!hidden">
                    <BottomNav />
                </div>
            </div>
        </div>
    )
}

export default SettingPage;