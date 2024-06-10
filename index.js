import express from "express";
import connectDatabase from "./src/database/db.js";

import dotenv from "dotenv";

const app = express();
const port = process.env.PORT || 8080;

dotenv.config();

app.use(express.json())

const username = process.env.BD_USERNAME;
const password = process.env.BD_PASSWORD;

connectDatabase(username, password);

app.listen(port, () =>
  console.log(`App listening on port: http://localhost:${port}`)
);
