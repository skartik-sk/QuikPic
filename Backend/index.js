import express from "express";
import userRouter from "./Routing/auth.js";

import cookie from "cookie-parser";
import postRouter from "./Routing/post.js";
import userFeedsRouter from "./Routing/user.js";
 

const app = express();

app.use(express.json());
app.use(cookie());
app.use("/",userRouter);
app.use("/post",postRouter); 
app.use("/userFeed",userFeedsRouter); 

export default app;
