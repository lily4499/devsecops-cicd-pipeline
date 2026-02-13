const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;
const APP_MESSAGE = process.env.APP_MESSAGE || "myapp running ✅";

app.get("/", (req, res) => {
  res.status(200).send(`${APP_MESSAGE}  Try /health`);
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "myapp",
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`myapp listening on port ${PORT}`);
});
