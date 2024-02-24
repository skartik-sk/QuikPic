import React from "react";
import { Badge, Avatar, Input, Textarea, Button } from "@nextui-org/react";

const EditProfile = () => {
    return (
        <div className="w-full flex flex-col" style={{ gap: "3.5rem", paddingRight:"15rem", marginBottom:"3rem" }}>
            <div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "bolder"}}>Edit Profile</h2>
            </div>

            <div className="flex items-center justify-center">
                <Badge content="new" color="primary" size="sm">
                    <Avatar
                        style={{ width: "100px", height: "100px" }}
                        isBordered
                        radius="md"
                        color="primary"
                        size="lg"
                        src="https://i.pravatar.cc/300?u=a042581f4e29026709d"
                    />
                </Badge>
            </div>

            <div>
                <div className="flex flex-col" style={{ gap: "2rem" }}>
                    <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
                        <Input
                            variant="faded"
                            key="outside"
                            type="username"
                            label="Username"
                            labelPlacement="outside"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
                        <Input
                            variant="faded"
                            key="outside"
                            type="email"
                            label="Email"
                            labelPlacement="outside"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
                        <Input
                            variant="faded"
                            key="outside"
                            type="gender"
                            label="Gender"
                            labelPlacement="outside"
                            placeholder="Type your gender"
                        />
                    </div>
                    <div>
                        <Textarea
                            key="outside"
                            variant="faded"
                            label="Bio"
                            labelPlacement="outside"
                            placeholder="Tell us about yourself"
                        />
                    </div>
                </div>
            </div>

            <div className="flex justify-end">
                <Button color="primary" variant="shadow" style={{paddingLeft:"1.5rem", paddingRight:"1.5rem"}}>
                    Submit
                </Button>
            </div>
        </div>
    )
}

export default EditProfile;