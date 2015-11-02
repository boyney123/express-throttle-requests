'use strict';

module.exports = function(app, options){

	var min = options.min || 50,
		max = options.max || 3000;

	app.use(function(req, res, next){

		var time = Math.floor(Math.random() * (max - min) + min)

		setTimeout(next, time)
	})
}
