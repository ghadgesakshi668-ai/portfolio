const express = require("express");
const app = express();
const port = 3000;

// static files (css, images, js)
app.use(express.static("public"));

// Home page
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/pages/index.html");
});

// Skills page
app.get("/skills", (req, res) => {
    res.sendFile(__dirname + "/pages/my_skills.html");
});

// Start server
app.listen(port, () => {
    console.log("Server started on http://localhost:" + port);
});
