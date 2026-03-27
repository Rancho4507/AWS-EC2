const express = require("express");
const app = express();



app.get("/", (req, res) => {
    res.send("🚀 Deployed using Jenkins Pipeline on EC2!");
});

app.listen(3000, () => {
    console.log(`Server running on port ${PORT}`);
});