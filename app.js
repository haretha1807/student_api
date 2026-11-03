const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.send("student API is working!");
});
app.get("/student", (req, res) => {
    res.json({

        name: "Rakesh",
        course: "BCA"
    });
});
app.listen(3000, () => {
    console.log("server running on port http://localhost:3000");
});