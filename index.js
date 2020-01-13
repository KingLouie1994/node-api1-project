// implement your API here
const express = require("express");
const cors = require("cors");
const { find, findById, add, remove, update } = require("./data/db");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/users", (req, res) => {
  find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).json({
        success: false,
        message: "The users information could not be retrieved."
      });
    });
});



app.get("/", (req, res) => {
  res.json("this is the response");
});

app.listen(6000, () => {
  console.log("listening on 6000");
});
