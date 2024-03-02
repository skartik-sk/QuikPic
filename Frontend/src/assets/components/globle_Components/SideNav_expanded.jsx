import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  User,
} from "@nextui-org/react";
import { Home } from "../../icons/Navbar/Home";
import { Message } from "../../icons/Navbar/Message";
import { CreatPost } from "../../icons/Navbar/creatPost";
import { Explore } from "../../icons/Navbar/Explore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import Bookmark from "../../icons/Navbar/Bookmark";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const SideNav_expanded = () => {
  const data = useSelector((state) => state.me.data);
  const getProfile = () => {
    if (data.profileImage == "") {
      return "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png";
    } else {
      return data.profileImage;
    }
  };
  return (
    <div style={{ width: "250px", top: "0", height: "fit-content" }}>
      <Card
        style={{ height: "100vh", position: "fixed" }}
        className=" py-4 flex-col justify-between items-center w-auto  "
      >
        <CardHeader className="flex-col justify-center items-center w-auto">
          <div className="flex items-center gap-4">
            <Dropdown placement="bottom-start">
              <DropdownTrigger>
                <User
                  as="button"
                  avatarProps={{
                    isBordered: true,
                    src: getProfile(),
                  }}
                  className="transition-transform"
                  // description="@tonyreichert"
                  name={data.username}
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="User Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-bold">Signed in as</p>
                  <p className="font-bold">@tonyreichert</p>
                </DropdownItem>
                <DropdownItem key="settings">My Settings</DropdownItem>
                <DropdownItem key="team_settings">Team Settings</DropdownItem>
                <DropdownItem key="analytics">Analytics</DropdownItem>
                <DropdownItem key="system">System</DropdownItem>
                <DropdownItem key="configurations">Configurations</DropdownItem>
                <DropdownItem key="help_and_feedback">
                  Help & Feedback
                </DropdownItem>
                <DropdownItem key="logout" color="danger">
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </CardHeader>
        <CardBody className="flex-col justify-center items-start w-auto gap-4">
          <Link to="/">
            <button className="flex flex-row  gap-4 ">
              <Home />
              <span className="text-xl">Home</span>
            </button>{" "}
          </Link>
          <button className="flex flex-row  gap-4 ">
            <Message /> <span className="text-xl">Messages</span>
          </button>{" "}
          <Link to="/CreatePost">
            <button className="flex flex-row  gap-4 ">
              <CreatPost /> <span className="text-xl">Create Post</span>
            </button>{" "}
          </Link>
          <Link to="/Explore">
            <button className="flex flex-row  gap-4 ">
              <Explore /> <span className="text-xl">Explore</span>
            </button>
          </Link>
          <Link to="/UserProfile">
            <button className="flex flex-row  gap-4 ">
              <Bookmark /> <span className="text-xl">Bookmark</span>
            </button>
          </Link>
        </CardBody>
        <CardFooter className="flex-col justify-center items-center w-auto">
          <Link to="/Setting">
            <button className="flex flex-row  gap-4 ">
              <FontAwesomeIcon icon={faGear} size="xl" />
              <span className="text-xl">Setting</span>
            </button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SideNav_expanded;
