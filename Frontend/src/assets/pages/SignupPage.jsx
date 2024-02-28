import React, {useState, useEffect} from "react";
import SignupForm from "../components/signupPage_components/SignupForm";
import SignupFormMobile from "../components/signupPage_components/SignupFormMobile";

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
          {windowWidth < 899 ? <SignupFormMobile /> : null}
          {windowWidth > 900 ? <SignupForm /> : null}

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

const SignupPage = () => {
    return (
      <div>
        <PageWithLayout component={SignupForm} />
      </div>
    );
  };
  
  export default SignupPage;