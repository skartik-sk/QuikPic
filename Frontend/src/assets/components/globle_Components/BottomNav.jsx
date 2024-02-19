import React from "react";
import { CreatPost } from "../../icons/Navbar/creatPost";
import { Explore } from "../../icons/Navbar/Explore";
import { Message } from "../../icons/Navbar/Message";
import { Home } from "../../icons/Navbar/Home";
import { Avatar } from "@nextui-org/react";

const BottomNav = () => {
  return (
    <div>
      <div className="sticky  bottom-4 z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full  left-1/2 dark:bg-gray-700 dark:border-gray-600">
        <div className="flex px-5  justify-between align-middle h-full">
          <button
            data-tooltip-target="tooltip-home"
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <Home />
            <span className="sr-only">Home</span>
          </button>
          <div
            id="tooltip-home"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Home
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          <button
            data-tooltip-target="tooltip-wallet"
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <Message />
            <span className="sr-only">Wallet</span>
          </button>
          <div
            id="tooltip-wallet"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Wallet
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          <div className="flex items-center justify-center">
            <button
              data-tooltip-target="tooltip-new"
              type="button"
              className="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
            >
              <CreatPost />
              <span className="sr-only">New item</span>
            </button>
          </div>
          <div
            id="tooltip-new"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Create new item
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          <button
            data-tooltip-target="tooltip-settings"
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <Explore />
            <span className="sr-only">Explore</span>
          </button>
          <div
            id="tooltip-settings"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Settings
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          <button
            data-tooltip-target="tooltip-profile"
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
            <span className="sr-only">Profile</span>
          </button>
          <div
            id="tooltip-profile"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Profile
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;

// import React from "react";
// import { CreatPost } from "../../icons/Navbar/creatPost";
// import { Explore } from "../../icons/Navbar/Explore";
// import { Message } from "../../icons/Navbar/Message";
// import { Home } from "../../icons/Navbar/Home";
// import { Avatar } from "@nextui-org/react";
// import {
//   Navbar,
//   NavbarBrand,
//   NavbarContent,
//   NavbarItem,
//   Link,
//   Button,
// } from "@nextui-org/react";

// const BottomNav = () => {
//   return (
//     <Navbar
//       classNames={{
//         item: [
//           "flex",
//           "relative",
//           "h-full",
//           "items-center",
//           "data-[active=true]:after:content-['']",
//           "data-[active=true]:after:absolute",
//           "data-[active=true]:after:bottom-0",
//           "data-[active=true]:after:left-0",
//           "data-[active=true]:after:right-0",
//           "data-[active=true]:after:h-[2px]",
//           "data-[active=true]:after:rounded-[2px]",
//           "data-[active=true]:after:bg-primary",
//         ],
//       }}
//     >
//       <NavbarContent justify="center">
//         <NavbarItem>
//           <Home />
//         </NavbarItem>
//         <NavbarItem>
//           <Message />
//         </NavbarItem>
//         <NavbarItem>
//           <CreatPost />
//         </NavbarItem>
//         <NavbarItem>
//           <Explore />
//         </NavbarItem>
//         <NavbarItem>
//           <Avatar />
//         </NavbarItem>
//       </NavbarContent>
//     </Navbar>
//   );
// };
// export default BottomNav;
