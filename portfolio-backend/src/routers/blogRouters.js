import { Router } from "express";


const router = Router();

router.get("/add", (req, res) => {
    res.send("BLOG/ADD");
})

module.exports = { router };