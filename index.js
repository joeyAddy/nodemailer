const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mailer = require("./routes/mailer");

const app = express();
app.use(express.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(
  cors({
    origin: "*",
    methods: "GET,POST,PATCH,DELETE",
    // credentials: true,
  })
);
app.use("/api/send-mail", (req, res) => {
  res.send("message");
});
app.use("/api/send-email", mailer);

const port = 8080; // Or any other desired port number
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
