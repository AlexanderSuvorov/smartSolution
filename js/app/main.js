define(function (require) {

	var data = require('json!employers.json'),
    	table = require('./table');

    table.getTable(data);

    var pie = require('./pie');

    pie.drawPie(data, prop = 'position');

});