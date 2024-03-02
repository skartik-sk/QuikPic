import { ThemeProvider as NextThemesProvider } from "next-themes";
import { NextUIProvider, user } from "@nextui-org/react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
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
import React, { useState, useEffect } from "react";
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
import { me } from "./assets/redux/reducers/MeReducer";

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
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // const navigate = useNavigate();
  // const state = useSelector((state) => state.me);
  // const data = useSelector((state) => state.me.data.message);
  // const userId = useSelector((state) => state.me.data._id);
  // console.log(data);
  // useEffect(() => {
  //   console.log(state);
  //   if (data == undefined) {
  //     navigate("/Login");
  //   }
  // }, [data]);
  return (
    <MainLayout>
      <Component />
    </MainLayout>
  );
  // : (
  //   <Navigate to="/Login" replace />
  // );
}

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(me());
  }, []);
  const navigate = useNavigate();
const isAuthenticated = useSelector((state) => state.me.isAuth);
  return (
    <>
      <NextUIProvider navigate={navigate}>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          {/* Your app here... */}

          <Routes>
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/Signup" element={<SignupPage />} />
            <Route
              path="/"
              element={isAuthenticated?<PageWithLayout component={UserFeedPage} />:<LoginPage />}
            />
            <Route
              path="/Explore"
              element={isAuthenticated?<PageWithLayout component={ExplorePage} />:<LoginPage />}
            />
            <Route
              path="/CreatePost"
              element={isAuthenticated?<PageWithLayout component={CreatePostPage} />:<LoginPage />}
            />
            <Route
              path="/ViewPost"
              element={isAuthenticated?<PageWithLayout component={PostViewPage} />:<LoginPage />}
            />
            <Route
              path="/UserProfile"
              element={isAuthenticated?<PageWithLayout component={UserProfilePage} />:<LoginPage />}
            />
            <Route
              path="/Setting"
              element={isAuthenticated?<PageWithLayout component={SettingPage} />:<LoginPage />}
            />
            <Route
              path="/postview/:id"
              element={isAuthenticated?<PageWithLayout component={PostViewPage} />:<LoginPage />}
            />

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
