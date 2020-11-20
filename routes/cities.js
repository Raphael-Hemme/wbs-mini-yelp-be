var express = require('express');
var router = express.Router();
const client = require('../client/client')

/* GET all restaurants page. */
router.get("/", (req, res) => {
  
  client
      .query("SELECT * FROM city")
      .then((data) => res.json(data.rows))
      .catch((err) => res.sendStatus(500));
});

/* GET all restaurants page. */
router.get("/:id", (req, res) => {
  const { id } = req.params; 
  client
      .query("SELECT * FROM city WHERE id=$1", [id])
      .then((data) => res.json(data.rows))
      .catch((err) => res.sendStatus(500));
});

/* GET all restaurants page. */
router.post("/", (req, res) => {
  const { name } = req.body;
  client
      .query("INSERT INTO city(name) VALUES($1) RETURNING *", [name])
      .then((data) => res.json(data.rows))
      .catch((err) => res.sendStatus(500));
});

module.exports = router;
