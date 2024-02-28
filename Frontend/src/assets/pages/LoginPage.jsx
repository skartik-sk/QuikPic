import React, {useState, useEffect} from "react";
import LoginForm from "../components/loginPage_components/LoginForm";
import LoginFormMobile from "../components/loginPage_components/LoginFormMobile";

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
          {windowWidth < 899 ? <LoginFormMobile /> : null}
          {windowWidth > 900 ? <LoginForm /> : null}

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

const LoginPage = () => {
    return (
      <div>
        <PageWithLayout component={LoginForm} />
      </div>
    );
  };
  
  export default LoginPage;