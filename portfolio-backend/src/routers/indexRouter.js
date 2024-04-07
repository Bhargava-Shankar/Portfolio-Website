import { Router } from "express";
import { blogRouter } from "./blogRouters";

const router = Router();

router.use("/blog",blogRouter)

module.exports = { router };