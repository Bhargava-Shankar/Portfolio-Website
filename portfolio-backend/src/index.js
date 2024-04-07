const express = require('express')

const app = express(express.json());

app.get("/", (req, res) => {
    res.send({
        data : "hello"
    })
})

app.listen(3000, () => {
    console.log("hello");
})