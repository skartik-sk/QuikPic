import React, {useState, useEffect} from "react";
import ResetPassword from "../components/globle_Components/ResetPassword.jsx";
import ResetPasswordMobile from "../components/globle_Components/ResetPasswordMobile.jsx";

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
        <div className=" w-full">
          <div className="flex md:block">
            {windowWidth < 699 ? <ResetPasswordMobile /> : null}
            {windowWidth > 700 ? <ResetPassword /> : null}
  
            {/* {children} */}
          </div>
  
          {/* <div className=" tablet:!hidden">
            {windowWidth < 768 ? <BottomNav /> : null}
          </div> */}
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

const ResetPasswordPage = () => {
  return (
    <PageWithLayout component={ResetPassword} />
  );
};

export default ResetPasswordPage;