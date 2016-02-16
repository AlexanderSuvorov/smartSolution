define(function (require) {

	require(['json!data/employers.json!bust', './request', './table', './pie'], function(obj, func) {

		//var dataFromRest = func.sendRequest('GET', 'js/data/war.json', false),
		//	data = dataFromRest.response;

		var data = obj;

		var table = require('./table');

		table.getTable(data);

		var pie = require('./pie');

		pie.drawPie(data, prop = 'position');

	});

});