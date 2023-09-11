import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";  
import userRouter from "./Routes/userRouter.js"
import notesRouter from "./Routes/notesRouter.js";
import { connect } from "./connection/conn.js";

const app = express();

dotenv.config();
connect();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/user", userRouter);
app.use("/api/v1/note", notesRouter);

app.listen(process.env.PORT, () => {
  console.log("server is running oiii" + process.env.PORT)
});

