var express = require('express');
var router = express.Router();
var pack_json = require('../package.json');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: pack_json.name, version: pack_json.version});
});

module.exports = router;
