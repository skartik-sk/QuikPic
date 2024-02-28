import { ThemeProvider as NextThemesProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
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
import React,{useState, useEffect } from "react";
import CreatePostPage from "./assets/pages/CreatePostPage";
import CreatePostPage2 from "./assets/pages/SubPages/CreatePostContent2";
import PostViewPage from "./assets/pages/PostViewPage";
import LoginPage from "./assets/pages/LoginPage";
import SignupPage from "./assets/pages/SignupPage";
import UserProfilePage from "./assets/pages/UserProfilePage";
import SettingPage from "./assets/pages/SettingPage";
import { ExplorePage } from "./assets/pages/ExplorePage";
import SideNav from "./assets/components/globle_Components/SideNav";
import SideNav_expanded from "./assets/components/globle_Components/SideNav_expanded";
import BottomNav from "./assets/components/globle_Components/BottomNav";

function MainLayout({ children }) {
  function useWindowWidth() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowWidth;
  }
  const windowWidth = useWindowWidth();
  return (
    <div>
      <div className="flex-col w-full">
        <div className="flex md:block">
          {windowWidth > 768 && windowWidth < 1024 ? <SideNav /> : null}
          {windowWidth > 1024 ? <SideNav_expanded /> : null}

          {children}
        </div>

        <div className=" tablet:!hidden">
          {windowWidth < 768 ? <BottomNav /> : null}
        </div>
      </div>
    </div>
  );
}
function PageWithLayout({ component: Component }) {
  return (
    <MainLayout>
      <Component />
    </MainLayout>
  );
}

export default function App() {
  const navigate = useNavigate();
  return (
    <>
      <NextUIProvider navigate={navigate}>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          {/* Your app here... */}
       
            <Routes>
              <Route path="/Login" element={<LoginPage />} />
              <Route path="/Signup" element={<SignupPage />} />
              <Route path="/" element= {<PageWithLayout component={UserFeedPage} />}/>
        <Route path="/Explore" element={ <PageWithLayout component={ExplorePage} />} />
        <Route path="/CreatePost" element={ <PageWithLayout component={CreatePostPage} />} />
        <Route path="/CreatePost2" element={ <PageWithLayout component={CreatePostPage2} />} />
        <Route path="/ViewPost" element={ <PageWithLayout component={PostViewPage} />} />
        <Route path="/UserProfile" element={ <PageWithLayout component={UserProfilePage} />} />
        <Route path="/Setting" element={ <PageWithLayout component={SettingPage} />} />
        <Route path="/postview/:id" element={ <PageWithLayout component={PostViewPage} />} />
       
              {/* <Route>
                <MainLayout>
                  <Routes>
                    <Route path="/" element={<UserFeedPage />} />
                    <Route path="/CreatePost" element={<CreatePostPage />} />
                    <Route path="/Explore" element={<ExplorePage />} />
                    <Route path="/ViewPost" element={<PostViewPage />} />
                    <Route path="/UserProfile" element={<UserProfilePage />} />
                    <Route path="/Setting" element={<SettingPage />} />
                   
                  </Routes>
                </MainLayout>
              </Route> */}
            </Routes>
        
        </NextThemesProvider>
      </NextUIProvider>
    </>
  );
}
