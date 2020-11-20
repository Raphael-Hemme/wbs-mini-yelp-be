var express = require('express');
var router = express.Router();
const client = require('../client/client')

/* GET all restaurants page. */
router.get("/", (req, res) => {
  
  client
      .query("SELECT * FROM comment")
      .then((data) => res.json(data.rows))
      .catch((err) => res.sendStatus(500));
});

/* GET all restaurants page. */
router.get("/:id", (req, res) => {
  const { id } = req.params; 
  client
      .query("SELECT * FROM comment WHERE id=$1", [id])
      .then((data) => res.json(data.rows))
      .catch((err) => res.sendStatus(500));
});

/* GET all restaurants page. */
router.post("/", (req, res) => {
  const { text, date, restaurant_id } = req.body;
  client
      .query("INSERT INTO comment(text, date, restaurant_id) VALUES($1, $2, $3) RETURNING *", [text, date, restaurant_id])
      .then((data) => res.json(data.rows))
      .catch((err) => res.sendStatus(500));
});

module.exports = router;
