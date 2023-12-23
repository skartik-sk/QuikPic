import express from "express";
import router from "./Routing/auth.js";
import cookie from "cookie-parser";
 

const app = express();

app.use(express.json());
app.use(cookie());
app.use("/",router);

export default app;
