var express = require('express');
var db = require('../models');
var router = express.Router();


router.get('/', function(req, res){
	db.animal.findAll()
	.then(function(faves){
		res.render('favorites/show', { faves: faves });
	})
	.catch(function(err){
		console.log(err);
	})
})

router.get('/new', function(req, res){
	db.animal.findAll()
	.then(function(){
		res.render('favorites/new');
	})
})

router.post('/', function(req, res){
	db.animal.create({
		species_name: req.body.species_name,
		scientific_name: req.body.scientific_name,
		image_url: req.body.image_url,
		description: req.body.description,
		extinct: req.body.extinct
	})
	.then(function(){
		res.redirect('/favorites');
	})
	.catch(function(err){
		console.log(err);
	})
})

router.get('/:id', function(req, res){
	db.animal.findOne({
		where: { id: req.params.id }
	})
	.then(function(animal){
		res.render('favorites/more', { animal: animal });
	})
})




module.exports = router;