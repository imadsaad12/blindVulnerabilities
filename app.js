const { createLogger, transports, format } = require("winston");
const express = require("express");
const cors = require("cors");
const app = express();

const logger = createLogger({
  transports: [
    new transports.Console({
      level: "info",
      format: format.combine(format.colorize(), format.simple()),
    }),
  ],
});

app.use(cors());
app.use((req, res, next) => {
  logger.info(`API hit: ${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.status(200).send("Done from my server");
});
app.post("/", (req, res) => {
  res.status(200).send("Done from my server");
});
app.put("/", (req, res) => {
  res.status(200).send("Done from my server");
});

app.listen(4000, () => logger.info("server is running "));
