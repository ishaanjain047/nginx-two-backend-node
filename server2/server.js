const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("Hello from server 2 fresh");
});

const port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log(`Server 2 listening on ${port}`);
});
