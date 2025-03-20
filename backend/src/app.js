// setup a express server with various middlewares

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// all are middlewares

// for the data coming a differetn origin(frontend)
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));

// for the data coming in JSON format
app.use(express.json({ limit: "30kb" }));

// for the data coming from the URL
app.use(express.urlencoded({ extended: true , limit:"30kb"}));

// for storing file / folder
app.use(express.static("public"));

// for the cookies
app.use(cookieParser())

export { app };
