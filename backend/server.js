import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./Router/router.js";
import connectDb from "./utils/db.js";

dotenv.config();
const app = express();
connectDb();

const PORT = process.env.PORT || 2005;

app.use(cors());
app.use(express.json());

app.use("/", router);

app.listen(PORT, (req, res) => {
  console.log(`server listening on PORT ${PORT}`);
});
