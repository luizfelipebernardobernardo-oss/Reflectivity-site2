const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// pasta pública do site
app.use(express.static(path.join(__dirname, "public")));

// rota principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Reflectivity site running at http://localhost:${PORT}`);
});
