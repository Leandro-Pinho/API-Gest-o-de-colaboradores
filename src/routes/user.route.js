import Router from "express";
import {
  create,
  erase,
  findAll,
  findById,
  update,
} from "../controllers/user.controllers.js";

const route = Router();

route.get("/", findAll);
route.get("/:id", findById);
route.post("/", create);
route.patch("/:id", update);
route.delete("/:id", erase);

export default route;
