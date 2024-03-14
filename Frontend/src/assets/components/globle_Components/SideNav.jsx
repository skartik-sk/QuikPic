import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Navbar,
  NavbarBrand,
} from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  User,
  Modal, 
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
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

const SideNav = () => {
  const data = useSelector((state) => state.me.data);
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
  const getProfile = () => {
      if (data.profileImage == "") {
      return "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png";
    } else {
      return data.profileImage;
    }
  };
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
        </CardHeader >
        <CardBody className="flex-col justify-center items-center w-auto gap-4">
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
            <Link to="/UserProfile">
              <Bookmark />
            </Link>
          </button>
        </CardBody>
        <CardFooter className="flex-col justify-center items-center w-auto">
          <button>
            <Link to="/Setting">

            <FontAwesomeIcon icon={faGear} size="xl" />
            </Link>
          </button>
        </CardFooter>
      </Card >
    </div >
  );
};

export default SideNav;
