import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Input,
  Link,
  Divider,
  Button,
  Avatar,
  NavbarItem,
  Switch,
  Navbar,
} from "@nextui-org/react";
import { MailIcon } from "../../icons/LoginSignupForm/MailIcon";
import { EyeFilledIcon } from "../../icons/LoginSignupForm/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../../icons/LoginSignupForm/EyeSlashFilledIcon";
import { useTheme } from "next-themes";
import { SunIcon } from "../../icons/Navbar/SunIcon";
import { MoonIcon } from "../../icons/Navbar/Moonicon";
import LoginReducer, { login } from "../../redux/reducers/LoginReducer";
import { useNavigate } from "react-router-dom";
import ForgotPassword from "../../components/globle_Components/ForgotPassword.jsx";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const { theme, setTheme } = useTheme();
  const dispatch = useDispatch();
  const result = useSelector((state) => state.login.data);
  const loading = useSelector((state) => state.login.loading);
  const navigate = useNavigate();
  const handleChange = (event) => {
    setEmail(event.target.value);
    // console.log(email, password)
  };
  const handleChangepass = (event) => {
    setPassword(event.target.value);
    // console.log(email, password)
  };
  const Login = (e) => {
    e.preventDefault();

    dispatch(login({ userName: email, password: password }));
    // if(result.message ==="Login successful"){
    //   localStorage.setItem("user", result.user);
      // navigate("/Explore")
    // }
      };

  //     if (loading === false) {
  //       navigate("/Explore")
  // }
  useEffect(() => {
    if (result && result.message === "Login successful") {
      localStorage.setItem("user", result.user);
      navigate("/Explore");
    }
  }, [result, navigate]);
  // useEffect(() => {
  //   if (result?.message === "Login successful" && !localStorage.getItem("user")) {
  //     localStorage.setItem("user", result.user);
  //     navigate("/Explore");
  //   }
  // }, [result, navigate]);
  

  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="w-full flex flex-row">
      <div className="flex flex-1 ">
        <img
          className="w-full h-full"
          src="https://img.freepik.com/free-vector/flat-geometric-mosaic-pattern-design_23-2149280518.jpg?w=740&t=st=1709113061~exp=1709113661~hmac=05739887c59d9362e9533c3d458ed51f08c520282d5b23d509f4c440a4c6c15c"
          alt=""
        />
      </div>

      <div className="flex-1 flex-col">
        <div
          style={{
            paddingLeft: "6rem",
            paddingRight: "6rem",
            paddingTop: "4rem",
          }}
          className="flex w-full h-screen flex-col md:flex-nowrap mb-2 md:mb-0 gap-4 "
        >
          <div
            className="flex flex-row items-center px-8"
            style={{ marginBottom: "1.8rem", gap: ".8rem" }}
          >
            <Avatar
              src="https://i.pravatar.cc/150?u=a04258114e29026302d"
              size="md"
              style={{ width: "2.8rem", height: "2.2rem", borderRadius: "50%" }}
            />
            <h2>Quipify</h2>
            <Navbar>
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
            </Navbar>
          </div>

          <div className="py-4 text-xl font-semibold">
            <h1>Nice to see you again!</h1>
          </div>

          <Input
            type="username"
            label="Username"
            variant="bordered"
            placeholder="Enter your username"
            className="md:max-w-xs"
            value={email}
            onChange={handleChange}
            // onBlur={handleBlur}
            endContent={
              <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            isInvalid={isInvalid}
            errorMessage={isInvalid ? "Please enter a valid email" : null}
          />
          <Input
            label="Password"
            variant="bordered"
            onChange={handleChangepass}
            value={password}
            placeholder="Enter your password"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            className="md:max-w-xs"
          />

          <div
            className="flex justify-end md:max-w-xs"
            style={{ paddingBottom: "1rem" }}
          >
            <ForgotPassword />
            {/* <Link href="../components/loginPage_components/ForgotPassword.jsx" size="sm" underline="active">
              Forgot Password
            </Link> */}
          </div>

          <div>
            <Button
              className="w-full md:max-w-xs"
              color="primary"
              variant="shadow"
              onClick={Login}
            >
              Login
            </Button>
          </div>

          <div className="my-1 md:max-w-xs w-full">
            <Divider className="my-1" />
          </div>

          <div className="flex justify-center">
            <h3>
              Don't have an account?{" "}
              <Link href="/Signup" size="md" underline="active">
                Signup
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
