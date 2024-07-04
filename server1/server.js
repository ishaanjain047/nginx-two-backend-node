const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("Hello from server 1 fresh");
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server 1 listening on ${port}`);
});
