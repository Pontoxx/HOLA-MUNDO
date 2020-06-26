const port= process.env.PORT || 3000;
const express = require ("express");
const app = express ();

app.get ("/", (req,res) => {
    res.send ("Hello world");
});

app.listen(port);
