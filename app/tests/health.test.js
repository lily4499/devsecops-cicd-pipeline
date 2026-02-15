/**
 * Lightweight test with no extra dependencies.
 * It just confirms the server file exists (good enough for pipeline demo).
 */
const fs = require("fs");
const path = require("path");

const serverPath = path.join(__dirname, "..", "src", "server.js");

if (!fs.existsSync(serverPath)) {
  console.error("FAIL: app/src/server.js missing");
  process.exit(1);
}

console.log("PASS: app/src/server.js exists");
process.exit(0);
