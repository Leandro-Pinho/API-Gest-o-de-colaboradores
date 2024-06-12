import Router from "express";
import {
  create,
  findAll,
  findById,
  update,
} from "../controllers/user.controllers.js";

const route = Router();

route.get("/", findAll);
route.get("/:id", findById);
route.post("/", create);
route.patch("/:id", update);

export default route;
