const express = require("express");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const morgan = require("morgan");
const xss = require("xss");

const app = express();
const cors = require("cors");
app.use(cors({
  origin: "*"
}));

// 🔐 Security middlewares
app.use(helmet());
app.use(morgan("combined"));

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 20,
});
app.use(limiter);

app.disable("x-powered-by");

// 🔒 Secure route (manual sanitization)
app.get("/search", (req, res) => {
  const query = xss(req.query.q);
  res.send(`You searched: ${query}`);
});

// ✅ Health check
app.get("/", (req, res) => {
  res.send("Backend running securely 🚀");
});

app.listen(5000, () => console.log("Server running on port 5000"));