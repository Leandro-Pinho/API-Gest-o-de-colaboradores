import Router from "express";
import { findAll } from "../controllers/user.controllers.js";


const route = Router();

route.get("/", findAll);


export default route;