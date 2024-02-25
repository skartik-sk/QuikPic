import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Navbar,
  NavbarBrand,
} from "@nextui-org/react";
import React from "react";
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

const SideNav = () => {
  return (
    <div style={{ width: "120px", top: "0", height: "fit-content" }}>
      <Card
        style={{ height: "100vh", position: "fixed" }}
        className=" py-4 flex-col justify-between items-center w-auto  "
      >
        <CardHeader className="flex-col justify-center items-center w-auto">
          <div className="flex items-center gap-4">
            <Dropdown placement="top-end">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">zoey@example.com</p>
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
        <CardBody className="flex-col justify-center items-center w-auto gap-4">
          <button>
            <Link to="/">
              <Home />
            </Link>
          </button>{" "}
          <button>
            <Message />
          </button>{" "}
          <button>
            <Link to="/CreatePost">
              <CreatPost />
            </Link>
          </button>{" "}
          <button>
            <Link to="/Explore">
              <Explore />
            </Link>
          </button>
          <button>
            <Link to="/UserProfile">
              <Bookmark />
            </Link>
          </button>
        </CardBody>
        <CardFooter className="flex-col justify-center items-center w-auto">
          <button>
            <FontAwesomeIcon icon={faGear} size="xl" />
          </button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SideNav;
