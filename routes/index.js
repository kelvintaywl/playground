var express = require('express');
var router = express.Router();
var pack_json = require('../package.json');
var pokemon_list = require('../public/data/pokemon.json');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: pack_json.name, version: pack_json.version});
});

router.get('/pokemon/:search_value', function(req, res) {
  var search_regex = new RegExp("^" + req.params.search_value);
  var searched_pokemons = pokemon_list.pokemon.filter(function(pkmn){ return pkmn.match(search_regex); });
  res.json({results: searched_pokemons});
});

module.exports = router;
