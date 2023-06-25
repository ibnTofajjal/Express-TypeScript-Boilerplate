import express, { Application, Request, Response } from "express";
import cors from "cors";
import userRoute from "./app/modules/user/user.route";
const app: Application = express();

// MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoute);

export default app;

/*
1. Interface
2. Model
3. Route
4. Controller 
5. Service
*/
