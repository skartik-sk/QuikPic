import React, { useState, useEffect } from "react";
import { CreatPost } from "../../icons/Navbar/creatPost";
import { Explore } from "../../icons/Navbar/Explore";
import { Message } from "../../icons/Navbar/Message";
import { Home } from "../../icons/Navbar/Home";

import {
  Card, CardBody, CardFooter, CardHeader, useDisclosure, Modal, ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  User,
} from "@nextui-org/react";

import Bookmark from "../../icons/Navbar/Bookmark";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/reducers/LogoutReducer";
import { me } from "../../redux/reducers/MeReducer.jsx";
// import { useNavigate } from 'react-router-dom';

const BottomNav = () => {

  const dispatch = useDispatch();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const handleLogout = async () => {
    await dispatch(logout())

    // Redirect or perform any other action after successful logout
    await dispatch(me());
    navigateTo("/Signup")
    console.log("User logged out successfully!");



    // Close the modal
    setShowLogoutModal(false);
  };

  const data = useSelector((state) => state.me.data);
  const getProfile = () => {
    if (data.profileImage == "") {
      return "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png";
    } else {
      return data.profileImage;
    }
  };
  return (
    <div style={{ width: "", bottom: "0", height: "70px", zIndex: "100" }}>
      <Card
        hidden={false}
        style={{
          height: "70px",
          position: "fixed",
          bottom: "0",
          width: "100%",
        }}
        className=" py-4 px-4 flex-row justify-between items-center w-full  "
      >
        <CardBody className="flex-row  justify-between items-center w-full gap-4">
          <button>
            <Link to="/Home">
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
            <Dropdown placement="top-end">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform"
                  src={getProfile()}
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile">
                  <Link to="/UserProfile">

                    <p className="font-semibold">Signed in as {data.username}</p>
                    {/* <p className="font-semibold"></p> */}
                  </Link>
                </DropdownItem>
                <DropdownItem key="settings">
                  <Link to="/Setting">

                    My Settings
                  </Link>
                </DropdownItem>
                <DropdownItem
                key="logout"
                color="danger"
                onClick={() => setShowLogoutModal(true)}
              >
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          </button>
        </CardBody>
      </Card>
      <Modal
        className="absolute top-1/2"
        isOpen={showLogoutModal}
        onOpenChange={setShowLogoutModal}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Oh no! You are leaving........Are you sure?
              </ModalHeader>
              <ModalFooter>
                <Button color="danger" variant="light" onClick={() => setShowLogoutModal(false)}>
                  No, Just Kidding!
                </Button>
                <Button color="primary" onClick={handleLogout}>
                  Yes, Log me out!
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      </div>
        );
      };
      
      export default BottomNav;
              