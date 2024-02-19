import React from "react";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import {
  Spinner,
  RadioGroup,
  Radio,
  Switch,
  Card,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import { UserFeedPage } from "./assets/pages/UserFeedPage";

export default function App() {
  const colors = ["primary", "secondary", "success", "warning", "danger"];
  const navigate = useNavigate();
  return (
    <>
      <NextUIProvider navigate={navigate}>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        {/* Your app here... */}
        <Routes>
          <Route path="/UserFeedPage" element={<UserFeedPage />} />
          {/* ... */}
        </Routes>
        </NextThemesProvider>
      </NextUIProvider>
    </>
  );
}
