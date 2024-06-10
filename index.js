import express from "express";
import dotenv from "dotenv";

import connectDatabase from "./src/database/db.js";

import useRoute from './src/routes/user.route.js';

const app = express();
const port = process.env.PORT || 8080;

dotenv.config();

app.use(express.json())

app.use('/user', useRoute);

// para mostrar no navegador
app.get("/", (req, res) => res.send("Hello From Express"));
app.all("*", (req, res) => res.send("That route doesn't exist"));

const username = process.env.BD_USERNAME;
const password = process.env.BD_PASSWORD;

connectDatabase(username, password);

app.listen(port, () =>
  console.log(`App listening on port: http://localhost:${port}`)
);
