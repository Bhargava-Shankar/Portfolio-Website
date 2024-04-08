import { Router } from "express";


const blogRouter = Router();

blogRouter.get("/add", (req, res) => {
    res.send("BLOG/ADD");
})

export default blogRouter;