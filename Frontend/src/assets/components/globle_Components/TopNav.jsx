import React from "react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  Switch,
  Button,
} from "@nextui-org/react";
import { SearchIcon } from "../../icons/Navbar/SearchIcon";
import { SunIcon } from "../../icons/Navbar/SunIcon";
import { MoonIcon } from "../../icons/Navbar/Moonicon";
// import {AcmeLogo} from "./AcmeLogo.jsx";
const TopNav = () => {
  const { theme, setTheme } = useTheme();
  const colors = ["primary", "secondary", "success", "warning", "danger"];
  return (
    <Navbar
      maxWidth="full"
      shouldHideOnScroll
      className="flex-row justify-between w-full "
    >
      <NavbarBrand style={{ maxWidth: "none" }}>
        {/* <AcmeLogo /> */}
        <p className="font-bold text-inherit">Social Media</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Input
            isClearable
            radius="lg"
            classNames={{
              label: "text-black/50 dark:text-white/90",
              input: [
                "bg-transparent",
                "text-black/90 dark:text-white/90",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "shadow-xl",
                "bg-default-200/50",
                "dark:bg-default/60",
                "backdrop-blur-xl",
                "backdrop-saturate-200",
                "hover:bg-default-200/70",
                "dark:hover:bg-default/70",
                "group-data-[focused=true]:bg-default-200/50",
                "dark:group-data-[focused=true]:bg-default/60",
                "!cursor-text",
              ],
            }}
            placeholder="Type to search..."
            startContent={
              <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
            }
          />
        </NavbarItem>

        <NavbarItem>
          <Switch
            defaultSelected
            size="md"
            color="success"
            startContent={<SunIcon />}
            endContent={<MoonIcon />}
            onChange={(e) => {
              theme === "light" ? setTheme("dark") : setTheme("light");
            }}
          ></Switch>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default TopNav;