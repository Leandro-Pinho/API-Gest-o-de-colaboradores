import Router from "express";
import { create, findAll } from "../controllers/user.controllers.js";


const route = Router();

route.get("/", findAll);
route.post("/", create);


export default route;