import express from "express";
import userRouter from "./Routing/auth.js";
import cors from 'cors'
import cookie from "cookie-parser";
import postRouter from "./Routing/post.js";
import userFeedsRouter from "./Routing/user.js";
import profile from './Routing/profile.js'


const app = express();

app.use(express.json());
app.use(cookie());
app.use(cors({  origin:"http://localhost:5173",
credentials:true}));
app.use("/",userRouter);
app.use("/post",postRouter); 
app.use("/userFeed",userFeedsRouter); 
app.use("/user",profile);

export default app;
