import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: process.env.CORS_URL, credentials: true }));
app.use(express.static("public"));
app.use(cookieParser());

export { app }; // 👈 export default app;
