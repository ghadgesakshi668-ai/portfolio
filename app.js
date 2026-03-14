const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// static files
app.use(express.static(path.join(__dirname, "public")));

// routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "index.html"));
});

app.get("/projects", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "projects.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});