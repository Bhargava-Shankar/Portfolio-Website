const express = require('express')
import { Express, Request, Response } from 'express';

const app = express(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send({
        data : "hello"
    })
})

app.listen(3000, () => {
    console.log("hello");
})