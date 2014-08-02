var express = require('express');
var router = express.Router();
var pack_json = require('../package.json');
var pokemon_json = require('../public/data/pokemon.json');
var pokemons = pokemon_json.pokemon;
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: pack_json.name, version: pack_json.version});
});

router.get('/pokemon/:search_value', function(req, res) {
  var search_regex = new RegExp("^" + req.params.search_value);
  var searched_pokemons = pokemons.filter(function(pkmn){ return pkmn.match(search_regex); });
  res.json({results: searched_pokemons});
});

router.get('/pokemon_all', function(req, res) {
	res.json({results: pokemons});
})

module.exports = router;
