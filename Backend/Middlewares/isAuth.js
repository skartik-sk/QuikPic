import cookies from "cookie-parser";
import { configDotenv } from "dotenv";
import jwt from "jsonwebtoken";

configDotenv();

const getUserIdFromAccessToken = async (access_token) => {
  const userId = await jwt.decode(access_token, process.env.SECREAT_KEY);
  return userId;
};
const isAuth = async (req, res, next) => {

  const {access_token} = req.cookies;
  if (access_token) {
    // Assuming you have the logic to retrieve the user ID from the access token
    const userId = await getUserIdFromAccessToken(access_token);

    res.user = { id: userId };
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};

export default isAuth;
