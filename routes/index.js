var express = require('express');
var router = express.Router();
const client = require('../client/client')

/* GET home page. */
router.get("/", (req, res) => {
  
  client
      .query("SELECT NOW()")
      .then((data) => res.send(data.rows[0]))
      .catch((err) => res.sendStatus(500));
});

module.exports = router;
