const express = require("express");

const app = express();
const PORT = 3000;

app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "node-express-test-api running..." });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Service running on port ${PORT}`);
});
