import React from "react";
import { Image, Button } from "@nextui-org/react";

const ProfileDetails = () => {
    return (
        <div style={{ marginTop: "2rem", flex: "row", display: "flex", justifyContent:"center", gap:"8rem"}}>
            <div>
                <Image
                    width={230}
                    alt="NextUI hero Image"
                    src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                />
            </div>

            <div className="flex flex-col" style={{gap:"1.5rem", width:"20rem"}}>
                <div className="flex flex-row items-center justify-between"> 
                    <h2>Isha</h2>
                    <Button color="primary" size="sm">
                        Edit Profile
                    </Button>
                </div>

                <div className="flex flex-row items-center justify-between gap-4">
                    <div className="flex flex-row items-center justify-between gap-1">
                        <h3 className="text-xs font-semibold">11</h3>
                        <h3 className="text-xs">Posts</h3>
                    </div>
                    <div className="flex flex-row items-center justify-between gap-1">
                        <h3 className="text-xs font-semibold">11</h3>
                        <h3 className="text-xs">Followers</h3>
                    </div>
                    <div className="flex flex-row items-center justify-between gap-1">
                        <h3 className="text-xs font-semibold">11</h3>
                        <h3 className="text-xs">Following</h3>
                    </div>
                </div>

                <div className="text-wrap">
                    <h3>Your favourite fun clips 🎦 in your language fun clips 🎦 in your language 🌎</h3>
                </div>
            </div>
        </div>
    )
}

export default ProfileDetails;