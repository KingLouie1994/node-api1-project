// implement your API here
const express = require("express");
const cors = require("cors");
const { find, findById, insert, update, remove } = require("./data/db");

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
        errorMessage: "The users information could not be retrieved."
      });
    });
});

app.get("/api/users/:id", (req, res) => {
  const { id } = req.params;
  findById(id)
    .then(user => {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({
          message: "The user with the specified ID does not exist."
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        errorMessage: "The user information could not be retrieved."
      });
    });
});

app.post("/api/users", (req, res) => {
  const newUser = {
    name: req.body.name,
    bio: req.body.bio
  };

  if (!newUser.name || !newUser.bio) {
    res.status(404).json({
      message: "Please provide name and bio for the user."
    });
  }

  insert(newUser)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(error => {
      res.status(500).json({
        errorMessage: "There was an error while saving the user to the database"
      });
    });
});

app.delete("/")

app.get("/", (req, res) => {
  res.json("this is the response");
});

app.listen(6000, () => {
  console.log("listening on 6000");
});
