const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) =>
  res.send(
    "Hi There! New deployment, approved with manual confirmation in the DevOps pipeline."
  )
);

app.listen(port);
console.log(`App running on http://localhost:${port}`);
